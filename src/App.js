import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [coins, setCoins] = useState([]);

  useEffect( () => ( async () =>  {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    try {
      setCoins(response.data);
      
    }
    catch (e) {
      console.log(e);
    }

  }),[])
  

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input className="coin-input" type="text" placeholder="Search" />
        </form>
      </div>

    </div>

  );
}

export default App;
