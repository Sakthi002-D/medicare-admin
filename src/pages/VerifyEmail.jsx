import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MailCheck } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'

export default function VerifyEmail() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')

  function handleChange(index, value) {
    const digit = value.replace(/\D/g, '').slice(-1)

    setCode((previous) =>
      previous.map((item, i) => (i === index ? digit : item))
    )
    setError('')

    if (digit && index < 5) {
      document.getElementById(`code-${index + 1}`)?.focus()
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (code.some((digit) => !digit)) {
      setError('Please enter all 6 digits')
      return
    }

    // Demo only: no real email code is sent or verified.
    navigate('/reset-password')
  }

  return (
    <AuthLayout
      title="Email Verification"
      subtitle="One more step to keep your account secure."
      illustration="verify"
    >
      <div className="form-heading">
        <span className="step-icon"><MailCheck size={27} /></span>
        <h1>Verify Your Email</h1>
        <p>Enter the 6-digit verification code to continue.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label className="field-label code-label">
          Verification Code
        </label>

        <div className="verification-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              aria-label={`Verification digit ${index + 1}`}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Backspace' && !digit && index > 0) {
                  document.getElementById(`code-${index - 1}`)?.focus()
                }
              }}
            />
          ))}
        </div>

        {error && <p className="field-error">{error}</p>}

        <button className="primary-button verify-button" type="submit">
          Verify Email
        </button>
      </form>

      <p className="form-bottom-text">
        Wrong email? <Link to="/forgot-password">Try again</Link>
      </p>

      <p className="demo-notice">
        Demo only. A real verification code requires an email service.
      </p>
    </AuthLayout>
  )
}