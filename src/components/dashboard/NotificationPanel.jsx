import { useEffect, useRef, useState } from 'react'
import { ChevronsRight, MessageSquareText, X } from 'lucide-react'
import { initialNotifications } from '../../data/notifications'

/**
 * Right-hand slide-in panel opened from the bell in the Topbar.
 * Closes with the » button or the Escape key; each item can be dismissed.
 */
export default function NotificationPanel({ open, onClose }) {
  const [items, setItems] = useState(initialNotifications)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const dismiss = (id) => setItems((list) => list.filter((n) => n.id !== id))

  return (
    <aside
      role="dialog"
      aria-label="Notifications"
      aria-hidden={!open}
      className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[440px] flex-col bg-white shadow-[-4px_0_16px_rgba(0,0,0,0.15)] transition-[transform,visibility] duration-300 ${
        open ? 'visible translate-x-0' : 'invisible translate-x-full'
      }`}
    >
      <header className="flex h-12 shrink-0 items-center justify-between bg-primary px-4 text-white">
        <h2 className="text-sm font-medium">Notification</h2>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close notifications"
          className="rounded p-1 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
        >
          <ChevronsRight size={18} />
        </button>
      </header>

      <ul className="flex-1 space-y-3 overflow-y-auto bg-[#F5F6FA] p-3">
        {items.length === 0 && (
          <li className="py-10 text-center text-sm text-muted">No notifications</li>
        )}
        {items.map((n) => (
          <li
            key={n.id}
            className="relative flex gap-3 rounded-lg border border-[#DCDDDF] bg-white p-3 pr-9 shadow-[0_4px_4px_rgba(51,51,51,0.15)]"
          >
            <MessageSquareText size={18} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <h3 className="text-[13px] font-semibold text-ink">{n.title}</h3>
              <p className="mt-0.5 text-xs leading-snug text-muted">{n.text}</p>
            </div>
            <button
              type="button"
              onClick={() => dismiss(n.id)}
              aria-label={`Dismiss ${n.title}`}
              className="absolute right-2 top-2 rounded p-0.5 text-red-600 hover:bg-red-50"
            >
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
