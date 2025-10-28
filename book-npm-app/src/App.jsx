import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book'

function App() {
  const bookjson=[
    {image:"https://th.bing.com/th/id/OIP.a3JiRaDCCev5-0HMATz4QgHaIz?w=195&h=232&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", title:"Physics", price:451},
    {image:"https://th.bing.com/th/id/OIP.vcQQNyGz3qe7Ee0WS9KVWAHaI4?w=157&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", title:"Math", price:781},
    {image:"https://th.bing.com/th/id/OIP.4sH-8jMvjVtMgfijC4mzCgHaJd?w=195&h=249&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", title:"Chemistry", price:589}
  ]
  return (
      <div className='bookList'>
        {
          bookjson.map((b,i) => (
            <Book key={i} book={b}/>
          ))
        }
      </div>
  )
}

export default App
