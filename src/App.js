import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    async function fetch() {

      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
      try {
        setCoins(response.data);
      }
      catch (e) {
        console.log(e);
      }
    } fetch();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }



  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input className="coin-input" type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id}
            name={coin.name}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} image={coin.image}
            marketCap={coin.market_cap} symbol={coin.symbol}
            price={coin.current_price} />
        )
      })}

    </div>

  );
}

export default App;
