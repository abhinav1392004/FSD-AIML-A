import React from 'react'
// import './src/App.css'
import '../App.css';

function Book({book}){

  const handleClick = ()=>{
    alert("Added to Cart");
  }

  return (
    <div className='card'>
      <img src={book.image} alt="book IMG" style={{height:"100px", width:"100px"}}/>
      <h3>Title : {book.title}</h3>
      <h4>Price : ₹{book.price}/-</h4>
      <div style={{display:"flex", gap:"10px"}}>
        <button onClick={handleClick}>Cart</button>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Book
