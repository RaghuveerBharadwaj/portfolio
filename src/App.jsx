import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history"
import ReactGA from "react-ga"
import { Contact, Home } from './pages'
import './App.css'

const App = () => {
  ReactGA.initialize("G-SQGTR7YZT7")
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <Router basename="/portfolio">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default App
