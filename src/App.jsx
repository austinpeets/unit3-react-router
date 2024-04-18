import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Blue from './Components/Blue'
import Red from './Components/Red'
import './App.css'


function App() {

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to='/home'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/blue' element={<Blue />}></Route>
          <Route path='/red' element={<Red />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
