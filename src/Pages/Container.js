import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoinDisplay from "../Component/CoinDisplay";
import SearchBar from "../SearchBar";
import { Grid } from "@material-ui/core";

const Container = ({ info, errorData, isLoading }) => {
  const [search, setSearch] = useState("");

  const filteredInfo = info.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderFunction = () => {
    const inputField = (
      <SearchBar
        filtered={filteredInfo}
        searchTerm={search}
        setSearchTerm={setSearch}
      />
    );

    const display = filteredInfo.map((item) => (
      <Link to={`coins/${item.id}`} className="Link">
        <CoinDisplay
          key={item.symbol}
          loading={isLoading}
          errorData={errorData}
          coin_name={item.name}
          image={item.image}
          symbol={item.symbol}
          marketcap={item.market_cap}
          price_change={item.market_cap_change_percentage_24h}
          price={item.current_price}
        />
      </Link>
    ));

    const Output = (
      <>
        {inputField}
        <div className="Header">
          <p>Coin Name</p>
          <p>Coin Symbol</p>
          <p>Coin Price</p>
          <p>Coin Logo</p>
          <p>Market Cap</p>
          <p>24H Price Change</p>
        </div>
        {display}
      </>
    );

    return isLoading ? " Loading... " : Output;
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {errorData !== "" && "Page not Found"}
        {renderFunction()}
      </Grid>
    </Grid>
  );
};

export default Container;
