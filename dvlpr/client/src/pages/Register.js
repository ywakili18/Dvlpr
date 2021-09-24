import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import RegisterMessage from '../components/RegisterMessage'
const iState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Register(props) {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      password: formValues.password,
      userName: formValues.userName
    })
    setFormValues(iState)
    props.history.push('/login')
  }
  return (
    <div>
      <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
        <RegisterMessage />
        <div class="mt-20 border-solid border-8 border-purple-400 rounded-2xl sm:py-10">
          <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
            <div>
              <div class="mt-1 py-5">
                <input
                  onChange={handleChange}
                  name="userName"
                  type="text"
                  placeholder="Username"
                  value={formValues.userName}
                  required
                  class="
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
              <div class="mt-1 py-5">
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  placeholder="Your Email"
                  value={formValues.email}
                  required
                  class="
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
              <div class="mt-1 py-5">
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formValues.password}
                  required
                  class="
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
              <div class="mt-1 py-5">
                <input
                  onChange={handleChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formValues.confirmPassword}
                  required
                  class="
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
              <div class="mt-1">
                <button
                  type="submit"
                  disabled={
                    formValues.confirmPassword === formValues.password
                      ? false
                      : true
                  }
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
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
