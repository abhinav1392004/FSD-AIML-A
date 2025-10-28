import React from 'react'
// import './src/App.css'
import '../App.css';

function Book({book}){
  return (
    <div className='card'>
      <img src={book.image} alt="book IMG" style={{height:"100px", width:"100px"}}/>
      <h3>Title : {book.title}</h3>
      <h4>Price : ₹{book.price}/-</h4>
    </div>
  );
}

export default Book
