import { useState } from 'react'

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
    // RegisterUser({
    //   userName: forValues.userName,
    //   email: formValues.email,
    //   password: formValues.password
    // })
    setFormValues(iState)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="userName"
          type="text"
          placeholder="User Name"
          value={formValues.userName}
          required
        />
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Your Email"
          value={formValues.email}
          required
        />
        <input
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Password"
          value={formValues.password}
          required
        />
        <input
          onChange={handleChange}
          name="confirmPassword"
          type="text"
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          required
        />
        <button
          type="submit"
          disabled={
            formValues.confirmPassword === formValues.password ? false : true
          }
        >
          Submit
        </button>
      </form>
    </div>
  )
}
