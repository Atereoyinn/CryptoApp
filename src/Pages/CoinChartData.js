import React from "react";
import { useParams } from "react-router-dom";
import Chart from "../Component/Chart";
import { Container } from "@material-ui/core";

const CoinChartData = ({ info }) => {
 
  const { id } = useParams();

  const filteredResponse = info.filter((el) => {
    if (el.id == id) {
      return el;
    }
  });

  const loopingThrough = filteredResponse.map((item) => (
    <Chart
      key={item.id}
      name={item.name}
      price={item.current_price}
      ath={item.ath}
      symbol={item.symbol}
      marketCap={item.market_cap}
      percentageChange24H={item.price_change_percentage_24h}
    />
  ));

  return <Container>{loopingThrough}</Container>;
};

export default CoinChartData;
