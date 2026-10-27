import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(
    sessionStorage.getItem('medicare_signup_email') || ''
  )
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setError('')
    sessionStorage.setItem('medicare_reset_email', email)
    navigate('/verify-email')
  }

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Don't worry. Let's get you back into your account."
      illustration="forgot"
    >
      <div className="form-heading">
        <span className="step-icon"><Mail size={25} /></span>
        <h1>Forgot Password</h1>
        <p>Enter your registered email address to continue.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          id="email"
          name="email"
          label="Email ID"
          type="email"
          placeholder="Enter your registered email"
          icon={Mail}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setError('')
          }}
          error={error}
          autoComplete="email"
        />

        <button className="primary-button" type="submit">
          Continue
        </button>
      </form>

      <p className="form-bottom-text">
        Remember your password? <Link to="/login">Back to Login</Link>
      </p>

      <p className="demo-notice">
        Demo flow only. Sending a real reset email requires a backend.
      </p>
    </AuthLayout>
  )
}