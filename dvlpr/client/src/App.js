import './styles/App.css'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Feed from './pages/Feed'
import ProtectedRoute from './components/ProtectedRoute'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <ProtectedRoute
          authenticated={props.userState.authenticated}
          user={props.userState.user}
          path="/home"
          component={Feed}
        />
        <Route exact path="/home" component={Feed} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={LogIn} />
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, null)(App)
