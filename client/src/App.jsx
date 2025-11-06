import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Order from './components/Order'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [items, setItems] = useState([]);


  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
    .then((data) => {
      setItems(data)
    })
  },[])
  return (
    <Router>
      <Header/>
      <Navbar/>
      <div style={{marginRight: '120px', padding: '20px' }}>
      <Routes>
        <Route path="/" element={
      <div className='multipleCart'>
        {
          items.map((t,i) => (
            <Cart key={i} items={t}/>
          ))
        }
      </div>
        } />
        <Route path="/order" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
