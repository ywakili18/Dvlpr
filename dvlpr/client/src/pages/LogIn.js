import { useState } from 'react'
import { LogInUser } from '../services/Auth'
import { connect } from 'react-redux'
import { LoginUser, authenticateUser } from '../store/actions/UserActions'

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(LogInUser(user)),
    authUser: (toggle) => dispatch(authenticateUser(toggle))
  }
}

const SignIn = (props) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

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
    props.loginUser(res)
    props.authUser(true)
    props.history.push('/home')
  }

  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-coolGray-light py-20 px-5 shadow rounded-lg sm:px-">
        <h1 class="text-purple-regular text-2xl ">DVLPR</h1>
        <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
          <div>
            <div class="mt-1">
              <input
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                required
                class="text-center border border-coolGray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-purple-regular focus:ring-1 focus:ring-purple-regular"
              />
            </div>
          </div>

          <input
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Password"
            required
            class="text-center border border-coolGray-light px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-purple-regular focus:ring-1 focus:ring-purple-regular"
          />
          <button
            type="submit"
            disabled={formValues.userName && formValues.password ? false : true}
            class="bg-purple-regular hover:bg-purple-regular text-coolGray-light font-bold py-3 px-20 rounded-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(SignIn)
