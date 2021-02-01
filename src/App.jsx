import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Contact, Home } from './pages'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default App
