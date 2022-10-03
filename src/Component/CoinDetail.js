import { Grid } from "@material-ui/core";

const CoinDetail = ({ name, price, ath, marketCap, percentageChange24H }) => {
  const priceStyling =
    percentageChange24H > 0 ? (
      <h3
        style={{ padding: "10px", margin: "20px", color: "green" }}
      >{`${percentageChange24H.toFixed("2")}%`}</h3>
    ) : (
      <h3
        style={{ padding: "10px", margin: "20px", color: "red" }}
      >{`${percentageChange24H.toFixed("2")}%`}</h3>
    );

  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{display:"flex"}}>
        <h6 >All Time High(ATH): {`$${ath.toLocaleString()}`}</h6>
        <h6 > Current Price: {`$${price.toLocaleString()}`}</h6>
        <h3 >{name}</h3>
        <h6 >Market Cap: {`$${marketCap.toLocaleString()}`}</h6>
        {priceStyling}
        </div>
      </Grid>
    </Grid>
  );
};

export default CoinDetail;
