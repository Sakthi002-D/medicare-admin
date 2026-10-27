import { Bell, ChevronDown, UserRound } from 'lucide-react'

export default function Topbar({ section = 'Hospital', unreadCount = 0, onBellClick }) {
  return (
    <header className="flex items-center justify-between gap-4">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        Dashboard <span className="mx-1">&gt;</span>
        <span className="font-semibold text-primary"> {section}</span>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          onClick={onBellClick}
          className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-gray-600 shadow-[0_2px_6px_rgba(51,51,51,0.12)] hover:text-primary"
        >
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid h-[18px] w-[18px] place-items-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
              {unreadCount}
            </span>
          )}
        </button>

        <button
          type="button"
          aria-label="Account menu"
          className="flex items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3 text-gray-500 shadow-[0_2px_6px_rgba(51,51,51,0.12)] hover:text-primary"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white">
            <UserRound size={16} />
          </span>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  )
}
