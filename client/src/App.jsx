import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'

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
    <>
      <Header/>
      <div className='multipleCart'>
        {
          items.map((t,i) => (
            <Cart key={i} items={t}/>
          ))
        }
      </div>
    </>
  )
}

export default App
