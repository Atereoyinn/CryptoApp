import TradeViewChart from "react-crypto-chart";
import { Grid } from "@material-ui/core";
import CoinDetail from "./CoinDetail";

const Chart = ({
  symbol,
  name,
  price,
  ath,
  marketCap,
  percentageChange24H,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
          }}
        >
          <div>
            <CoinDetail
              name={name}
              price={price}
              ath={ath}
              marketCap={marketCap}
              percentageChange24H={percentageChange24H}
            />
          </div>
          <div>
            <TradeViewChart
              interval="10m"
              containerStyle={{
                minHeight: "80vh",
                minWidth: "80vw",
                marginBottom: "20px",
              }}
              chartLayout={{
                layout: {
                  backgroundColor: "black",
                  textColor: "white",
                },
                grid: {
                  vertLines: {
                    color: "black",
                    // style: LineStyle.SparseDotted,
                  },
                  horzLines: {
                    color: "black",
                    // style: LineStyle.SparseDotted,
                  },
                },
                crosshair: {
                  // mode: CrosshairMode.Normal,
                },
                priceScale: {
                  borderColor: "#485c7b",
                },
                timeScale: {
                  borderColor: "#485c7b",
                  timeVisible: true,
                  secondsVisible: false,
                },
              }}
              candleStickConfig={{
                upColor: "green",
                downColor: "red",
                borderDownColor: "transparent",
                borderUpColor: "transparent",
                wickDownColor: "gray",
                wickUpColor: "gray",
              }}
              pair={`${symbol.toUpperCase()}USDT`}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Chart;
