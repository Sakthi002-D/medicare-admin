import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        {/* Next: /signup, /forgot-password, /verify, /reset-password, /dashboard */}
        <Route path="/dashboard" element={<p className="p-8">Dashboard coming soon</p>} />
      </Routes>
    </BrowserRouter>
  )
}
