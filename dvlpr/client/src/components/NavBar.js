import { NavLink } from 'react-router-dom'

export default function NavBar(auth, user, logOut) {
  let userOptions
  if (user) {
    userOptions = (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink onClick={logOut} to="/login">
          Sign Out
        </NavLink>
      </div>
    )
  }

  const publicOptions = (
    <div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  )

  return (
    <div>
      <NavLink to="/">DVLPR</NavLink>
      {auth && user ? userOptions : publicOptions}
    </div>
  )
}
