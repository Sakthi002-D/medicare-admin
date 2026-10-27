
import { NavLink } from 'react-router-dom'
import { LogIn, UserPlus } from 'lucide-react'
import logo from '../../assets/logo.png'
import loginImage from '../../assets/Login.png'
import signupImage from '../../assets/Signup.png'

const tabs = [
  { to: '/login', label: 'Login', icon: LogIn },
  { to: '/signup', label: 'Sign Up', icon: UserPlus },
]

export default function AuthLayout({
  title,
  subtitle,
  illustration = 'login',
  children,
}) {
  const image = illustration === 'signup' ? signupImage : loginImage

  return (
    <div className="auth-page">
      <div className="auth-card">
        <aside className="auth-sidebar">
          <img className="brand-logo" src={logo} alt="Medicare logo" />

          <nav className="auth-nav">
            {tabs.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `auth-nav-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon size={28} strokeWidth={1.8} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <section className="auth-art-panel">
          <div className="art-heading">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="medical-art">
            <img
              key={illustration}
              src={image}
              alt={illustration === 'signup' ? 'Signup illustration' : 'Login illustration'}
              className="auth-illustration"
            />
          </div>
        </section>

        <main className="auth-main">
          <div className="mobile-brand">
            <img src={logo} alt="Medicare logo" />
            <span>Medicare Admin</span>
          </div>

          <div className="auth-form-container">
            {children}
          </div>

          <footer className="company-footer">
            Developed by <strong>YM Automation Private Limited</strong>
          </footer>
        </main>
      </div>
    </div>
  )
}