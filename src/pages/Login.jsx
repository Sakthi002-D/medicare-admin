
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: true,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target

    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nextErrors = {}

    if (!form.username.trim()) {
      nextErrors.username = 'Username is required'
    }

    if (!form.password) {
      nextErrors.password = 'Password is required'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      navigate('/dashboard')
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Please Enter Your Credentials."
      illustration="login"
    >
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-6 text-3xl font-semibold text-primary">
          Login
        </h1>

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
          autoComplete="current-password"
        />

        <div className="mb-7 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="accent-primary"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="min-h-[54px] w-full rounded-lg bg-primary text-base font-medium text-white transition hover:bg-primary-dark"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  )
}