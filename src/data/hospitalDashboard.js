import {
  Building2,
  CircleCheck,
  CircleX,
  Clock,
  IndianRupee,
  Info,
  Search,
  ShieldCheck,
} from 'lucide-react'

export const statCards = [
  { label: 'Total Hospitals', value: '145', icon: Building2, tint: 'blue' },
  { label: 'Active Agreements', value: '98', icon: CircleCheck, tint: 'green' },
  { label: 'In Progress', value: '23', icon: Clock, tint: 'orange' },
  { label: 'Expired', value: '15', icon: CircleX, tint: 'red' },
  { label: 'Pending Payments', value: '₹ 10,000', icon: Info, tint: 'yellow' },
]

export const agreementStatus = [
  { name: 'Active', percent: 60, count: 3000, color: '#1FA14A' },
  { name: 'In Progress', percent: 35, count: 100, color: '#F5A00F' },
  { name: 'Expired', percent: 5, count: 32, color: '#E02424' },
]

export const verificationPending = [
  { label: 'Checker', value: '00', icon: ShieldCheck },
  { label: 'Reviewer', value: '00', icon: Search },
  { label: 'Payment', value: '00', icon: IndianRupee },
]

export const hospitalTypes = [
  { name: 'OP-Full Time', percent: 35, count: 2356, color: '#0D4C8F' },
  { name: 'Bedded Hospital', percent: 25, count: 1683, color: '#1E63B2' },
  { name: 'OP-Half Time', percent: 20, count: 1346, color: '#3B82D0' },
  { name: 'Labs & Diagnostic Centers', percent: 15, count: 1009, color: '#5A9BE0' },
  { name: 'Dental', percent: 5, count: 336, color: '#7DB4F0' },
]

export const revenueTrend = [
  { month: 'Jan', thisYear: 8000, lastYear: 7500 },
  { month: 'Feb', thisYear: 5000, lastYear: 3600 },
  { month: 'Mar', thisYear: 3100, lastYear: 1600 },
  { month: 'Apr', thisYear: 6200, lastYear: 4800 },
  { month: 'May', thisYear: 7800, lastYear: 6400 },
  { month: 'Jun', thisYear: 3900, lastYear: 2500 },
  { month: 'Jul', thisYear: 3400, lastYear: 1900 },
  { month: 'Aug', thisYear: 4500, lastYear: 3100 },
  { month: 'Sep', thisYear: 6900, lastYear: 5500 },
  { month: 'Oct', thisYear: 5700, lastYear: 4300 },
  { month: 'Nov', thisYear: 5900, lastYear: 4500 },
  { month: 'Dec', thisYear: 4300, lastYear: 2900 },
]

export const revenueTotals = {
  thisYear: '₹ 31,863',
  lastYear: '₹ 50,000',
}
