import React, { useContext, useState, useEffect } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins)
  }


  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  return (
    <div className="home">
      <div className="hero">
        <h1 className="title">Largest <br/> Crypto Marketplace</h1>
        <p className="text">Welcome to the world&apos;s largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler} className="form">
          <input onChange={inputHandler} list="coinlist" value={input} type="text" placeholder="Search crypto..." className="form-control" required/>
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit" className="form-btn">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign: "center"}}>24h Change</p>
          <p>Market Cap</p> 
        </div>
        {
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`./coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="coin" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h*100) / 100}
              </p>
              <p>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
        {/* {
          allCoin.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Home