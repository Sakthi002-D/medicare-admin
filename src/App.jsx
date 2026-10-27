import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import VerifyEmail from './pages/VerifyEmail'
import ResetPassword from './pages/ResetPassword'
import DashboardLayout from './components/dashboard/DashboardLayout'
import HospitalSummary from './pages/HospitalSummary'
import BagSummary from './pages/BagSummary'
import FleetSummary from './pages/FleetSummary'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<HospitalSummary />} />
          <Route path="bags" element={<BagSummary />} />
          <Route path="fleet" element={<FleetSummary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
