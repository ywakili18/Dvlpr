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
      <div class="space-x-10 text-right">
        <NavLink
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand "
          onClick={logOut}
          to="/login"
        >
          Log Out
        </NavLink>
      </div>
    )
  }

  const publicOptions = (
    <div className="text-right">
      <div>
        <NavLink
          to="/login"
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand text-purple-light"
        >
          Log In
        </NavLink>
      </div>
      <NavLink
        className="hover:text-purple-regular hover:underline text-xl font-bold font-brand text-purple-light"
        onClick={logOut}
        to="/register"
      >
        Not a DVLPR? Sign up!
      </NavLink>
    </div>
  )

  return (
    <div class="">
      <NavLink
        className="text-purple-light font-black font-brand text-3xl tracking-tighter hover:text-purple-regular px-2"
        to="/"
      >
        DVLPR
      </NavLink>
      {props.userState.authenticated && props.userState.user
        ? userOptions
        : publicOptions}
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(NavBar)
