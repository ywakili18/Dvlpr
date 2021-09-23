import { useState, useEffect } from 'react'
import { LogInUser } from '../services/Auth'
import { connect } from 'react-redux'
import { User, authenticateUser } from '../store/actions/UserActions'
import { CheckSession } from '../services/Auth'
import Logo from '../icons/Logo'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(User(user)),
    authUser: (toggle) => dispatch(authenticateUser(toggle))
  }
}

const SignIn = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const checkToken = async () => {
    const session = await CheckSession()
    props.setUser(session)
    props.authUser(true)
    props.history.push('/home')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await LogInUser(formValues)
    setFormValues({
      email: '',
      password: ''
    })
    console.log(res)
    props.setUser(res)
    props.authUser(true)
    props.history.push('/home')
  }

  return (
    <div class="my-auto sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-gradient-to-b to-coolGray-light from-purple-regular py-10 px-5 shadow rounded-lg sm:px-">
        <Logo className="m-0 p-0" />
        <h1 class="text-coolGray-light text-2xl py-10 font-bold font-brand">
          LOG IN
        </h1>
        <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
          <div>
            <div class="mt-1 ">
              <input
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                required
                class="text-center bg-gradient-to-b from-white-regular to-coolGray-light border border-coolGray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-purple-regular focus:ring-1 focus:ring-purple-regular"
              />
            </div>
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              required
              class="text-center bg-gradient-to-b from-white-regular to-coolGray-light border border-coolGray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-purple-regular focus:ring-1 focus:ring-purple-regular"
            />
          </div>
          <button
            disabled={!formValues.email || !formValues.password}
            type="submit"
            class="bg-purple-regular hover:bg-pink-hot text-coolGray-light font-bold py-3 px-20 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(SignIn)
