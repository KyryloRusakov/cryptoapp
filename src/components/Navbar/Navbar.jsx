import React, { useContext } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch(e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$"
        })
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€"
        })
        break;
      }
      case "uah": {
        setCurrency({
          name: "uah",
          symbol: "₴"
        })
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$"
        })
        break;
      }
    }

  }

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className="menu">
        <Link to={'/'} className="menu-item">Home</Link>
        <li className="menu-item">Features</li>
        <li className="menu-item">Pricing</li>
        <li className="menu-item">Blog</li>
      </ul>
      <div className="nav-right">
        <select className="nav-select" onChange={currencyHandler}>
          <option value="usd" className="nav-option">USD</option>
          <option value="eur" className="nav-option">EUR</option>
          <option value="uah" className="nav-option">UAH</option>
        </select>
        <button className="nav-btn">
          Sign up
          <img src={arrow_icon} alt="" className="nav-btn-img" />
        </button>
      </div>
    </div>
  )
}

export default Navbar