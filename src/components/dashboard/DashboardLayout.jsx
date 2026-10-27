import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import DashboardTabs from './DashboardTabs'
import NotificationPanel from './NotificationPanel'

const sections = {
  '/dashboard': 'Hospital',
  '/dashboard/bags': 'Bags',
  '/dashboard/fleet': 'Fleet',
}

export default function DashboardLayout() {
  const { pathname } = useLocation()
  const section = sections[pathname.replace(/\/$/, '')] ?? 'Hospital'
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <Sidebar />

      <main className="px-4 pb-10 md:ml-[104px] md:pl-0 md:pr-6">
        <div className="pt-4 md:pt-6">
          <Topbar
            section={section}
            unreadCount={section === 'Bags' ? 0 : 3}
            onBellClick={() => setNotificationsOpen(true)}
          />

          <DashboardTabs />

          <Outlet />
        </div>
      </main>

      <NotificationPanel
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  )
}