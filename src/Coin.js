import React from 'react';
import './Coin.css';

function Coin( {image, symbol, price, volume, name, priceChange, marketCap}) {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="CryptoCurrency" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange <0 ? ( 
                        <p className="coin-percent red">{priceChange!== null ? priceChange.toFixed(2): ""}%</p> 
                    ) : (<p className="coin-percent green">{priceChange!== null ? priceChange.toFixed(2): ""}%</p>)
                    }
                    <p className="coin-marketcap">
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Coin;
