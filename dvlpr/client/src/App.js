import './styles/App.css'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Feed from './pages/Feed'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" component={Feed} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={LogIn} />
    </div>
  )
}

export default App
