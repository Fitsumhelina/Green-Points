import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className="mainframes">
      
      <section className="hero">
        <div className="hero-text">
          <h1>Simplify your life, effortlessly document crop treatments</h1>
          <p>
            Your intuitive office in the pocket to easily record all you need for
            spray, fertilizer, and harvest documentation on the go.
          </p>
          <a href="https://t.me/ethio_farmer_bot" className="get-started-button">Get started</a>
        </div>
      </section>
    </div>

  )
}

export default Home