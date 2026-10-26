import { NavLink } from 'react-router-dom'
import { LogIn, UserPlus } from 'lucide-react'

const tabs = [
  { to: '/login', label: 'Login', icon: LogIn },
  { to: '/signup', label: 'Sign Up', icon: UserPlus },
]

/**
 * Shared shell for all 6 auth screens.
 * Only the banner text, illustration and the form (children) change.
 */
export default function AuthLayout({ title, subtitle, illustration, children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="relative flex w-full max-w-5xl flex-col rounded-3xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] md:h-[540px] md:flex-row">
        {/* Left rail: logo + Login / Sign Up tabs (desktop only) */}
        <aside className="hidden w-24 flex-col items-center gap-8 pt-6 md:flex">
          <img src="/images/logo.png" alt="Medicare logo" className="h-12 w-12 object-contain" />
          <nav className="flex flex-col gap-6">
            {tabs.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 border-l-2 py-1 pl-2 text-[11px] ${
                    isActive
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-400 hover:text-primary'
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Mobile logo */}
        <img
          src="/images/logo.png"
          alt="Medicare logo"
          className="mx-auto mt-4 h-12 w-12 object-contain md:hidden"
        />

        {/* Blue gradient card, overlaps the white card on desktop */}
        <section className="m-4 flex flex-col rounded-3xl bg-gradient-to-b from-primary to-primary-dark p-6 text-white md:absolute md:-bottom-8 md:-top-8 md:left-24 md:m-0 md:w-[320px]">
          <h2 className="text-lg font-medium leading-tight">{title}</h2>
          {subtitle && <p className="text-sm">{subtitle}</p>}
          <div className="flex flex-1 items-center justify-center py-6">
            <img src={illustration} alt="" className="max-h-64 w-full object-contain" />
          </div>
        </section>

        {/* Form side */}
        <main className="flex flex-1 flex-col justify-between p-6 md:pl-[400px] md:pr-12">
          <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center">
            {children}
          </div>
          <p className="mt-6 text-center text-[10px] text-muted md:text-right">
            Developed by <strong>VM Automation Private Limited</strong>
          </p>
        </main>
      </div>
    </div>
  )
}
