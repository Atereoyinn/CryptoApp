import React from "react";
import { Container, Grid} from "@material-ui/core";

const CoinDisplay = ({
  coin_name,
  price,
  marketcap,
  image,
  price_change,
  symbol,
  loading
}) => {

  const colorAction =
    price_change > 0 ? (
      <p style={{ color: "green" }}>{price_change.toFixed("2")}%</p>
    ) : (
      <p style={{ color: "red" }}>{price_change.toFixed("2")}%</p>
    );
if(loading){
  return <h3>Loading...</h3>
}else{
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid className="container" item xs={12}>
          <span>{coin_name}</span>
          <span>{symbol}</span>
          <span>$ {price.toLocaleString()}</span>
          <img src={image} alt={coin_name} />
          <span> $ {marketcap.toLocaleString()}</span>
          <span>{colorAction}</span>
        </Grid>
      </Grid>
    </Container>
  )};
};

export default CoinDisplay;
