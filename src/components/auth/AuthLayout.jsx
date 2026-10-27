import { NavLink } from 'react-router-dom'
import { LogIn, UserPlus } from 'lucide-react'
import logo from '../../assets/logo.png'
import loginImage from '../../assets/Login.png'
import signupImage from '../../assets/Signup.png'
import forgotImage from '../../assets/ForgotPassword.png'
import verifyImage from '../../assets/VerifyEmail.png'
import resetImage from '../../assets/ResetPassword.png'

const illustrations = {
  login: { src: loginImage, alt: 'Login illustration' },
  signup: { src: signupImage, alt: 'Sign up illustration' },
  forgot: { src: forgotImage, alt: 'Forgot password illustration' },
  verify: { src: verifyImage, alt: 'Email verification illustration' },
  reset: { src: resetImage, alt: 'Reset password illustration' },
}

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
  const current = illustrations[illustration] ?? illustrations.login
  // Login / Sign Up tabs only appear on the two entry screens, as in Figma
  const showTabs = illustration === 'login' || illustration === 'signup'

  return (
    <div className="auth-page">
      <div className="auth-card">
        <aside className="auth-sidebar">
          <img className="brand-logo" src={logo} alt="Medicare logo" />

          {showTabs && (
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
          )}
        </aside>

        <section className="auth-art-panel">
          <div className="art-heading">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="medical-art">
            <img
              key={illustration}
              src={current.src}
              alt={current.alt}
              className="auth-illustration"
            />
          </div>
        </section>

        <main className="auth-main">
          <div className="mobile-brand">
            <img src={logo} alt="Medicare logo" />
            <span>Medicare Admin</span>
          </div>

          <div className="auth-form-container">{children}</div>

          <footer className="company-footer">
            Developed by <strong>YM Automation Private Limited</strong>
          </footer>
        </main>
      </div>
    </div>
  )
}