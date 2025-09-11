import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'
import Header from './header.jsx'

function App() {
  const [count, setCount] = useState(0)

  const cards = {
    card1: {
      cardTitle: "Project Name",
      description: "Project Description",
      imgSrc: "src1"
    },
    card2: {
      cardTitle: "Project Name2",
      description: "Project Description2",
      imgSrc: "src2"
    },
    card3: {
      cardTitle: "Project Name3",
      description: "Project Description3",
      imgSrc: "src3"
    }
  };

  

  return (
    <>
      <Header />
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>My Portfolio (Maybe)</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div className="cardHolder">
        <Card {...cards.card1}/>
        <Card {...cards.card2}/>
        <Card {...cards.card3}/>
      </div>

      <div className="formContainer">
        <form>
          <label for="name">Name:</label><br/>
          <input type="text" id="name" name="name" /><br/>
          <label for="email">Email:</label><br/>
          <input type="text" id="email" name="email" /><br/>
          <label for="message">Message:</label><br/>
          <textarea id="message" name="message" rows="4" cols="50"></textarea><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
