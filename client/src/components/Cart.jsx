import React, { useState } from 'react'
import '../App.css'

const Cart = ({items}) => {

    const[count, setCount] = useState(0);

    function handleClickDec(){
        setCount(count => Math.max(count-1, 0));
    }

    function handleClickInc(){
        setCount(count => count+1);
    }

    function handleCartButton(count){
      alert(`${count}, Item Added to Cart`)
    }

  return (
    <div className='cart'>
      <img src={items.image} alt="IMG" />
      <p>Title : {items.title} </p>
      <h3>Price : {items.price} </h3>
      <div className='addToCart'>
        <button onClick={handleClickDec}>-</button>
        <p>{count}</p>
        <button onClick={handleClickInc}>+</button>
      </div>
      <div className='addToCart'>
        <button onClick={() => handleCartButton(count)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cart
