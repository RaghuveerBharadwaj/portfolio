import { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import './landing.scss'

export const Landing = ({ index }) => {
  const [springProp, setPerspective] = useSpring(() => ({ xys: [1, 1, 1], config: { mass: 5, tension: 350, friction: 10 } }))
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  useEffect(() => {
    setPerspective({ xys: calc(800, 100) })
    setTimeout(() => {
      setPerspective({ xys: [0, 0, 1] })
    }, 1000)
  }, [])

  return (
    <div className="landing" id="app">
      {[...new Array(5)].map((a, i) => <img className="d-none" key={i} src={`assets/images/avatoons/avatoon${i}.png`} alt={"Raghuveer Bharadwaj | Web Developer | Designer " + i} />)}
      <div className="hero">
        <div className="clouds bg" />
        <div className="grass bg" />
        <animated.div
          className="title"
          onMouseMove={({ clientX: x, clientY: y }) => setPerspective({ xys: calc(x, y) })}
          onMouseLeave={() => setPerspective({ xys: [0, 0, 1] })}
          style={{ transform: springProp?.xys?.interpolate(trans) }}
        >
          <h1>Designer | Developer</h1>
          <h4>I design, I code, and I love what I do.</h4>
        </animated.div>
        <div
          className="avatoon"
          style={{
            backgroundImage: `url(assets/images/avatoons/avatoon${index % 6}.png)`
          }}
        />
      </div>
      <div className="content">
        <div className="intro">
          <h2>Hey, I’m Raghuveer. Nice to meet you.</h2>
          <p>
          I'm a <b>full-stack web developer</b> and a part-time <b>freelancer</b> living in Bengaluru. 
          A mechanical engineer who has turned his ardency towards web development and commenced 
          my peregrination as a Software Engineer 4 years ago. Currently, I work as a <b>Senior 
          Frontend Developer</b> at Billme, which makes digital bills for companies such as McDonald's, 
          Burger King, etc. For me, coding is like solving puzzles. Once you put those jigsaw bits 
          in their right places, you have yourself a beauteously functional website. <br />
          Interested to know more? &nbsp;  
          <a
            target="_blank"
            rel="noopener"
            href="mailto:raghuveer275@gmail.com">
              <b>Email me.</b>
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
