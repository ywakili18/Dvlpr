import { NavLink } from 'react-router-dom'

export default function NavBar(auth, user, logOut) {
  let userOptions
  if (user) {
    userOptions = (
      <div class="space-x-10 text-right">
        <NavLink className="hover:text-purple-regular hover:underline" to="/">
          Home
        </NavLink>
        <NavLink
          className="hover:text-purple-regular hover:underline"
          onClick={logOut}
          to="/login"
        >
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
    <div class=" bg-gradient-to-b from-coolGray-light w-full h-full p-10 ">
      <NavLink to="/">DVLPR</NavLink>
      {auth && user ? userOptions : publicOptions}
    </div>
  )
}
