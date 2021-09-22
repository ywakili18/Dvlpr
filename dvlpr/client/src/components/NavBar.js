import { NavLink } from 'react-router-dom'

export default function NavBar(auth, user, logOut) {
  let userOptions
  if (user) {
    userOptions = (
      <div class="space-x-10 text-right">
        {/* <NavLink
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
          to="/"
        >
          Home
        </NavLink> */}
        <NavLink
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
          onClick={logOut}
          to="/login"
        >
          Sign In
        </NavLink>
        <NavLink
          className="hover:text-purple-regular hover:underline text-xl font-bold font-brand"
          onClick={logOut}
          to="/register"
        >
          Not a DVLPR? Sign up!
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
      <NavLink
        className="text-purple-light font-black font-brand text-3xl tracking-tighter hover:text-purple-regular "
        to="/"
      >
        DVLPR
      </NavLink>
      {auth && user ? userOptions : publicOptions}
    </div>
  )
}
