import { NavLink } from 'react-router-dom'
import { Briefcase, Building2, Truck } from 'lucide-react'

const tabs = [
  { to: '/dashboard', label: 'Hospital Summary', icon: Building2, end: true },
  { to: '/dashboard/bags', label: 'Bag Summary', icon: Briefcase },
  { to: '/dashboard/fleet', label: 'Fleet Summary', icon: Truck },
]

export default function DashboardTabs() {
  return (
    <div className="mt-5 border-b border-gray-200">
      <nav
        aria-label="Dashboard sections"
        className="flex gap-7 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `-mb-px flex items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-sm font-medium transition ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-primary'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
