import React from "react";
import { Container, Grid } from "@material-ui/core";
import {headerStyle} from "../Pages/Container"

const CoinDisplay = ({
  coin_name,
  price,
  marketcap,
  image,
  price_change,
  symbol,
  loading,
}) => {
  const colorAction =
    price_change > 0 ? (
      <p style={{ color: "green" }}>{price_change.toFixed("2")}%</p>
    ) : (
      <p style={{ color: "red" }}>{price_change.toFixed("2")}%</p>
    );

  if (loading) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <Container>
        <Grid container style={{ display: "flex" }} spacing={4}>
          <Grid className="container" item xs={12}>
            <span style={headerStyle}>{coin_name}</span>
            <span style={headerStyle}>{symbol}</span>
            <span style={headerStyle}>$ {price.toLocaleString()}</span>
            <div style={{ flex:"1",textAlign:"center",width: "60px", height: "60px", borderRadius: "50%" }}>
              <img style={{ objectFit: "cover" }} src={image} alt={coin_name} />
            </div>

            <span style={headerStyle}> $ {marketcap.toLocaleString()}</span>
            <span style={headerStyle}>{colorAction}</span>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default CoinDisplay;
