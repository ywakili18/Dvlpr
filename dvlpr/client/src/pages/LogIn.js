import { useState, useEffect } from 'react'
import { LogInUser } from '../services/Auth'
import { connect } from 'react-redux'
import { User, authenticateUser } from '../store/actions/UserActions'
import { CheckSession } from '../services/Auth'
import Logo from '../icons/Logo'
import LoginMessage from '../components/LoginMessage'
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
    <div class="sm:mx-auto  sm:max-w-md text-center">
      <LoginMessage />

      <div class="mt-20 border-solid border-8 border-purple-400 rounded-2xl sm:py-10">
        {/* Import logo below to developer feed once completed */}
        {/* <Logo className="" /> */}
        <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
          <div>
            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Email"
              required
              class="p-4 
              sm:w-60 
              h-10  
              focus:outline-none 
              border 
              border-t-0 
              border-r-0 
              border-l-0 
              border-b-2
              border-purple-400 
              border-purple-400  
              bg-transparent 
              text-center"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              placeholder="Password"
              required
              class="p-4 
                  sm:w-60 
                  h-10 
                  focus:outline-none 
                  border 
                  border-t-0 
                  border-r-0 
                  border-l-0 
                  border-b-2
                  border-purple-400 
                  border-purple-400  
                  bg-transparent 
                  text-center"
            />
          </div>
          <button
            disabled={!formValues.email || !formValues.password}
            type="submit"
            class="inline-flex 
            items-center 
            h-10 
            px-5 
            text-indigo-100 
            transition-colors 
            duration-150 
            bg-indigo-700 rounded-lg 
            focus:shadow-outline 
            hover:bg-indigo-800 "
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(SignIn)
