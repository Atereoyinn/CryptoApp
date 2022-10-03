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
      <Grid container style={{display:"flex"}} spacing={4}>
        <Grid className="container" item xs={12}>
          <span style={{flex:"1",textAlign:"center"}}>{coin_name}</span>
          <span style={{flex:"1",textAlign:"center"}}>{symbol}</span>
          <span style={{flex:"1",textAlign:"center"}}>$ {price.toLocaleString()}</span>
          <img style={{flex:"1",textAlign:"center"}} src={image} alt={coin_name} />
          <span style={{flex:"1",textAlign:"center"}}> $ {marketcap.toLocaleString()}</span>
          <span style={{flex:"1",textAlign:"center"}}>{colorAction}</span>
        </Grid>
      </Grid>
    </Container>
  )};
};

export default CoinDisplay;
