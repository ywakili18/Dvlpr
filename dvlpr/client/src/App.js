import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Feed from './pages/Feed'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Feed} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={LogIn} />
      </Switch>
    </div>
  )
}

export default App
