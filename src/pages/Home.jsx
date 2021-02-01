
import { Landing, Portfolio, Skills, Footer } from './index'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useScrollDirection } from '../utils/scrollDirection'

export const Home = () => {
  const [index, setIndex] = useState(0)

  const scroll = useScrollDirection()
  const history = useHistory()

  const onLogoClick = () =>  {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onChatClick = () =>  {
    history.push("/contact")
  }

  useEffect(() => {
    setInterval(() => setIndex(state => state + 1), 10000)
  }, [])
  return (
    <>
    <img
      className="logo"
      style={{ top: scroll ? '10px' : '-50px', transform: scroll && 'rotateZ(360deg)' }}
      src="assets/logo.png"
      alt="Raghuveer Bharadwaj Portfolio Logo"
      onClick={onLogoClick}
    />
    <img
      className="chat"
      style={{ top: scroll ? '10px' : '-50px', transform: scroll && 'rotateZ(360deg)' }}
      src="assets/chat.svg"
      alt="Raghuveer Bharadwaj Portfolio Logo"
      onClick={onChatClick}
    />
      <Landing index={index} />
      <Skills />
      <Portfolio index={index} />
      <Footer />
    </>
  )
}
