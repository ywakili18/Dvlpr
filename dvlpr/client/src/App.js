import './styles/App.css'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header"></header>
    </div>
  )
}

export default App
