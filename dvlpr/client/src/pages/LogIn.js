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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          value={formValues.userName}
          onChange={handleChange}
          placeholder="User Name"
          required
          class="border border-coolGray-light px-3 py-2 rounded-lg shadow-sm"
        />
        <input
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          required
          class="border border-coolGray-light px-3 py-2 rounded-lg shadow-sm"
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
  )
}
