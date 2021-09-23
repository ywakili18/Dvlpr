import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { User, authenticateUser } from '../store/actions/UserActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    logOutUser: (user) => dispatch(User(user)),
    authUser: (toggle) => dispatch(authenticateUser(toggle))
  }
}

const NavBar = (props) => {
  const logOut = () => {
    props.logOutUser(null)
    props.authUser(false)
    localStorage.clear()
  }

  let userOptions
  if (props.userState.user) {
    userOptions = (
      <div class="text-right -mt-7">
        <NavLink
          className="hover:text-purple-400 text-white text-xl font-bold font-brand text-purple-light m-3"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-purple-400 text-white text-xl font-bold font-brand text-purple-light m-3"
          onClick={logOut}
          to="/"
        >
          Log Out
        </NavLink>
      </div>
    )
  }

  const publicOptions = (
    <div className="text-right -mt-7">
      <NavLink
        to="/"
        className="hover:text-purple-400 text-white text-xl font-bold font-brand text-purple-light m-3"
      >
        Log In
      </NavLink>

      <NavLink
        className="hover:text-purple-400 text-white text-xl font-bold font-brand  m-3"
        onClick={logOut}
        to="/register"
      >
        Not a DVLPR? Sign up!
      </NavLink>
    </div>
  )

  return (
    <div class="mt-10">
      <NavLink
        className="hover:text-purple-400 text-white font-bold font-brand text-3xl tracking-tighter px-8"
        to="/home"
      >
        Dvlpr.
      </NavLink>
      {props.userState.authenticated && props.userState.user
        ? userOptions
        : publicOptions}
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(NavBar)
