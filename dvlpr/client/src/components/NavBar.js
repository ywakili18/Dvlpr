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
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
          onClick={logOut}
          to="/login"
        >
          Log Out
        </NavLink>
      </div>
    )
  }

  const publicOptions = (
    <div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink
        className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
        onClick={logOut}
        to="/register"
      >
        Not a DVLPR? Sign up!
      </NavLink>
    </div>
  )

  return (
    <div class=" bg-gradient-to-b from-coolGray-light w-full h-full p-10 ">
      <NavLink
        className="text-purple-light font-black font-brand text-3xl tracking-tighter hover:text-purple-regular "
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
