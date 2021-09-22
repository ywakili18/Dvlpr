import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const iState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Register() {
  const [formValues, setFormValues] = useState(iState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(iState)
  }
  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-gradient-to-b from-coolGray-light to-purple-light py-20 px-5 shadow rounded-lg sm:px-">
        <h1 class="text-purple-light text-2xl font-bold font-brand">
          Register
        </h1>
        <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
          <div>
            <div class="mt-1">
              <input
                onChange={handleChange}
                name="userName"
                type="text"
                placeholder="User Name"
                value={formValues.userName}
                required
                class="text-center bg-gradient-to-b 
              from-white-regular to-coolGray-light 
              border border-coolGray-light px-3 py-2 
              rounded-lg shadow-sm focus:outline-none 
              focus:border-purple-regular focus:ring-1 
              focus:ring-purple-regular"
              />
            </div>
            <div class="mt-1">
              <input
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Your Email"
                value={formValues.email}
                required
                class="text-center bg-gradient-to-b 
              from-white-regular to-coolGray-light 
              border border-coolGray-light px-3 py-2 
              rounded-lg shadow-sm focus:outline-none 
              focus:border-purple-regular focus:ring-1 
              focus:ring-purple-regular"
              />
            </div>
            <div class="mt-1">
              <input
                onChange={handleChange}
                name="password"
                type="text"
                placeholder="Password"
                value={formValues.password}
                required
                class="text-center bg-gradient-to-b 
              from-white-regular to-coolGray-light 
              border border-coolGray-light px-3 py-2 
              rounded-lg shadow-sm focus:outline-none 
              focus:border-purple-regular focus:ring-1 
              focus:ring-purple-regular"
              />
            </div>
            <div class="mt-1">
              <input
                onChange={handleChange}
                name="confirmPassword"
                type="text"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                required
                class="text-center bg-gradient-to-b 
              from-white-regular to-coolGray-light 
              border border-coolGray-light px-3 py-2 
              rounded-lg shadow-sm focus:outline-none 
              focus:border-purple-regular focus:ring-1 
              focus:ring-purple-regular"
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
                class="bg-purple-regular  text-coolGray-light font-bold py-3 px-20 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
