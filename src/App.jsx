import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="cryptoapp/" element={<Home/>}/>
        <Route path="cryptoapp/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App