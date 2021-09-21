import { useState } from 'react'
import { LogInUser } from '../services/Auth'

export default function SignIn() {
  const [formValues, setFormValues] = useState({
    userName: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    LogInUser({
      userName: formValues.userName,
      password: formValues.password
    })
    setFormValues({
      userName: '',
      password: ''
    })
  }

  return (
    <div class="mt-40 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <div class="bg-coolGray-light py-20 px-5 shadow rounded-lg sm:px-">
        <h1 class="text-purple-regular text-2xl ">DVLPR</h1>
        <form onSubmit={handleSubmit} class="mb-0 space-y-5 ">
          <div>
            <div class="mt-1">
              <input
                name="userName"
                value={formValues.userName}
                onChange={handleChange}
                placeholder="User Name"
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
