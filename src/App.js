import "./App.css";
import { Axios } from "./api/Axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CoinChartData from "../src/Pages/CoinChartData";
import Container from "../src/Pages/Container"

const App = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorData, setErrorData] = useState("");

  useEffect(() => {
    setIsLoading(true);
    Axios.get(
      "markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((resp) => {
        setIsLoading(false);
        setInfo(resp.data);
      })
      .catch((err) => setErrorData(err));
      return ()=>setIsLoading(false);
  }, []);

  return (
    <>
      <div>
        <h1
        className="datatracker"
          style={{
            color: "rgb(14, 14, 199)",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          CryptoDataTracker.com
        </h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Container
              info={info}
              isLoading={isLoading}
              errorData={errorData}
            />
          }
        />
        <Route path="/coins/:id" element={<CoinChartData info={info} />} />
      </Routes>
    </>
  );
};

export default App;
