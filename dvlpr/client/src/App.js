import './styles/App.css'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <LogIn />
      </header>
    </div>
  )
}

export default App
