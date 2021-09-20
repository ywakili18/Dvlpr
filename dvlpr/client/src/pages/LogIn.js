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
        />
        <input
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          type="submit"
          disabled={formValues.userName && formValues.password ? false : true}
        >
          Log In
        </button>
      </form>
    </div>
  )
}
