import React, {useEffect, useState} from 'react'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100) // Delay before showing
    return () => clearTimeout(timer) // Cleanup on unmount
  }, [])

  return (
    <div className={`home-container ${isVisible ? 'visible' : ''}`}>
      <h1>Welcome to Our Website</h1>
      <p>Your one-stop solution for all your needs.</p>
    </div>
  )
}

export default Home