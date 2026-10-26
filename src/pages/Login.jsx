import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '', remember: true })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.username.trim()) next.username = 'Username is required'
    if (!form.password) next.password = 'Password is required'
    setErrors(next)
    if (Object.keys(next).length === 0) navigate('/dashboard')
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Please Enter Your Credentials."
      illustration="/images/login.png"
    >
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-4 text-lg font-medium text-primary">Login</h1>

        <InputField
          id="username"
          name="username"
          label="User Name"
          placeholder="Enter User Name"
          icon={User}
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />

        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="mb-4 flex items-center justify-between text-[11px]">
          <label className="flex items-center gap-1.5">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="accent-primary"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-primary hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="h-9 w-full rounded bg-primary text-sm font-medium text-white transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  )
}
