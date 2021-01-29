import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Landing, Portfolio, Skills, Footer } from './pages'
import { useScrollDirection } from './utils/scrollDirection'
import { useEffect, useState } from 'react'

const App = () => {
  const scroll = useScrollDirection()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setInterval(() => setIndex(state => state + 1), 10000)
  }, [])

  return (
    <Router>
      <Landing index={index} />
      <Skills />
      <Portfolio index={index} />
      <Footer />
      <img
        className="logo"
        style={{ top: scroll ? '10px' : '-50px', transform: scroll && 'rotateZ(360deg)' }}
        src="assets/logo.png"
        alt="Raghuveer Bharadwaj Portfolio Logo"
        onClick={() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </Router>
  )
}

export default App
