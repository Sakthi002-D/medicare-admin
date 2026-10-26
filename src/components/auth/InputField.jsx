import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function InputField({
  id,
  label,
  type = 'text',
  icon: Icon,
  error,
  ...props
}) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className="mb-3">
      <label htmlFor={id} className="mb-1 block text-xs font-medium text-ink">
        {label}
      </label>

      <div
        className={`flex items-center rounded border bg-white px-3 focus-within:border-primary ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <input
          id={id}
          type={isPassword && show ? 'text' : type}
          className="h-9 w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? 'Hide password' : 'Show password'}
            className="text-muted hover:text-primary"
          >
            {show ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        ) : (
          Icon && <Icon size={16} className="text-muted" />
        )}
      </div>

      {error && <p className="mt-1 text-[11px] text-red-600">{error}</p>}
    </div>
  )
}
