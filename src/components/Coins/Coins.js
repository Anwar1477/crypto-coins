import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  let [coins, setCoins] = useState([]);
  let [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
        setLoading(false)
      });
  }, []);
  return <>
  {loading 
  ? (<Spinner />): <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
  <p className="text-center font-bold text-gray-600 text-3xl">Available Crypto Currencies</p>
  <p className="text-center text-gray-500 text-xl pb-12">Total Coins: {coins.length}</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
  {
      coins.map(coin =>(
      <CoinCard  key={coin.id} coin={coin}/>
      ))
  }
  </div>
  </div>}
  </>
      
};

export default Coins;
