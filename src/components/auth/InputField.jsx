import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function InputField({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
  required = true,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className="field-group">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>

      <div className={`input-wrap ${error ? 'input-error' : ''}`}>
        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        {isPassword ? (
          <button
            type="button"
            className="input-icon-button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        ) : Icon ? (
          <span className="input-icon">
            <Icon size={18} />
          </span>
        ) : null}
      </div>

      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}