import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LockKeyhole } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const next = {}

    if (form.password.length < 8) {
      next.password = 'Password must be at least 8 characters'
    }

    if (!form.confirmPassword) {
      next.confirmPassword = 'Please confirm your password'
    } else if (form.password !== form.confirmPassword) {
      next.confirmPassword = 'Passwords do not match'
    }

    setErrors(next)

    if (Object.keys(next).length === 0) {
      // Demo only: a real application must update the password through its API.
      navigate('/login')
    }
  }

  return (
    <AuthLayout
      title="Create a New Password"
      subtitle="Choose a strong password to protect your account."
      illustration="reset"
    >
      <div className="form-heading">
        <span className="step-icon"><LockKeyhole size={26} /></span>
        <h1>Reset Password</h1>
        <p>Create a new password for your account.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="new-password"
          name="password"
          label="New Password"
          type="password"
          placeholder="Enter new password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />

        <InputField
          id="confirm-password"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Re-enter new password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />

        <p className="password-hint">
          Use at least 8 characters.
        </p>

        <button className="primary-button" type="submit">
          Reset Password
        </button>
      </form>

      <p className="form-bottom-text">
        <Link to="/login">Back to Login</Link>
      </p>
    </AuthLayout>
  )
}