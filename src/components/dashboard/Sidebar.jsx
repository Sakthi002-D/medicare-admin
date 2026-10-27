import {
  Building2,
  FileText,
  LayoutGrid,
  ListChecks,
  Settings,
  Truck,
  Wallet,
} from 'lucide-react'

const items = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Hospitals', icon: Building2 },
  { label: 'Payments', icon: Wallet },
  { label: 'Fleet', icon: Truck },
  { label: 'Documents', icon: FileText },
  { label: 'Checklists', icon: ListChecks },
  { label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="z-20 flex items-center gap-4 px-4 pt-4 md:fixed md:left-0 md:top-0 md:h-full md:w-[104px] md:flex-col md:px-0 md:pt-6">
      <img
        src="/images/logo.png"
        alt="Medicare logo"
        className="h-14 w-14 flex-shrink-0 object-contain"
      />

      <nav
        aria-label="Main navigation"
        className="flex items-center gap-4 overflow-x-auto md:mt-8 md:flex-col md:overflow-visible"
      >
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-full shadow-[0_2px_6px_rgba(51,51,51,0.12)] transition ${
              active
                ? 'bg-primary text-white'
                : 'bg-white text-gray-500 hover:text-primary'
            }`}
          >
            <Icon size={18} />
          </button>
        ))}
      </nav>
    </aside>
  )
}
