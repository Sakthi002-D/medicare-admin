
import { useState } from 'react'
import { User, Mail, Phone } from 'lucide-react'
import AuthLayout from '../components/auth/AuthLayout'
import InputField from '../components/auth/InputField'

export default function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nextErrors = {}

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required'
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Contact number is required'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address'
    }

    if (!form.username.trim()) {
      nextErrors.username = 'Username is required'
    }

    if (!form.password) {
      nextErrors.password = 'Password is required'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      alert('Form validated successfully. Registration API is not connected yet.')
    }
  }

  return (
    <AuthLayout
      title="Sign Up Now."
      subtitle="Please Create Your Account."
      illustration="signup"
    >
      <form onSubmit={handleSubmit} noValidate>
        <h1 className="mb-5 text-3xl font-semibold text-primary">
          Sign Up
        </h1>

        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
          <InputField
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="Enter first name"
            icon={User}
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <InputField
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Enter last name"
            icon={User}
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="phone">
            Contact Number
          </label>

          <div className="phone-row">
            <div className="phone-code">
              <select aria-label="Country code" defaultValue="+91">
                <option value="+91">IN 91</option>
              </select>
            </div>

            <div className={`input-wrap ${errors.phone ? 'input-error' : ''}`}>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter contact number"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
              />
              <span className="input-icon">
                <Phone size={18} />
              </span>
            </div>
          </div>

          {errors.phone && (
            <p className="field-error">{errors.phone}</p>
          )}
        </div>

        <InputField
          id="email"
          name="email"
          type="email"
          label="Email ID"
          placeholder="Enter email address"
          icon={Mail}
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          id="username"
          name="username"
          label="User Name"
          placeholder="Create username"
          icon={User}
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />

        <InputField
          id="signup-password"
          name="password"
          type="password"
          label="Password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
        />

        <button
          type="submit"
          className="mt-2 min-h-[54px] w-full rounded-lg bg-primary text-base font-medium text-white shadow transition hover:bg-primary-dark"
        >
          Sign Up
        </button>
      </form>
    </AuthLayout>
  )
}
