import {
  Box,
  CirclePause,
  CircleX,
  Clock,
  PackageCheck,
  Printer,
  Truck,
} from 'lucide-react'

export const bagInventory = [
  { name: 'Red', lowStock: true, color: '#E02424', tint: '#FDE8E8' },
  { name: 'Yellow', color: '#F5A00F', tint: '#FEF3C7' },
  { name: 'Blue', color: '#1976D2', tint: '#DBEAFE' },
  { name: 'Green', color: '#1FA14A', tint: '#DCFCE7' },
  { name: 'White', color: '#6B7280', tint: '#E5E7EB' },
]

export const bagTotalInventory = '50,000'

export const bagSizes = [
  { size: '18X20', value: '10,000' },
  { size: '18X24', value: '10,000' },
  { size: '24X26', value: '10,000' },
  { size: '24X30', value: '10,000' },
  { size: '30X36', value: '10,000' },
  { size: 'Container', value: 'NA' },
]

export const orderStats = [
  { label: 'Total Orders', value: '100', icon: Box, tint: 'grey' },
  { label: 'New', value: '100', icon: Clock, tint: 'orange' },
  { label: 'Printed', value: '10', icon: Printer, tint: 'blue' },
  { label: 'Dispatched', value: '10', icon: Truck, tint: 'purple' },
  { label: 'Delivered', value: '10', icon: PackageCheck, tint: 'green' },
  { label: 'On-Hold', value: '10', icon: CirclePause, tint: 'orange' },
  { label: 'Rejected', value: '10', icon: CircleX, tint: 'red' },
]

export const bagSeries = [
  { key: 'red', label: 'Red', name: 'Red Bag', color: '#E02424' },
  { key: 'yellow', label: 'Yellow', name: 'Yellow Bag', color: '#F5A00F' },
  { key: 'blue', label: 'Blue', name: 'Blue Bag', color: '#1976D2' },
  { key: 'green', label: 'Green', name: 'Green Bag', color: '#1FA14A' },
  { key: 'white', label: 'White', name: 'White Bag', color: '#9E9E9E' },
]

export const collectedBagsTrend = [
  { month: 'Jan', red: 7500, yellow: 5700, blue: 4200, green: 5600, white: 4000 },
  { month: 'Feb', red: 6500, yellow: 5500, blue: 5000, green: 4200, white: 4800 },
  { month: 'Mar', red: 5800, yellow: 5600, blue: 5800, green: 3700, white: 5000 },
  { month: 'Apr', red: 5500, yellow: 4800, blue: 5100, green: 3300, white: 4300 },
  { month: 'May', red: 4800, yellow: 4900, blue: 4600, green: 3000, white: 3800 },
  { month: 'Jun', red: 5600, yellow: 5100, blue: 4500, green: 2600, white: 4200 },
  { month: 'Jul', red: 6200, yellow: 4400, blue: 5300, green: 2400, white: 5300 },
  { month: 'Aug', red: 5700, yellow: 5200, blue: 4800, green: 2800, white: 4500 },
  { month: 'Sep', red: 5200, yellow: 4600, blue: 6300, green: 3100, white: 4600 },
  { month: 'Oct', red: 5500, yellow: 4900, blue: 5700, green: 3500, white: 4400 },
  { month: 'Nov', red: 6200, yellow: 5600, blue: 4500, green: 3300, white: 4000 },
  { month: 'Dec', red: 5800, yellow: 5700, blue: 5500, green: 2900, white: 3900 },
]

export const issuedVsCollected = [
  { month: 'Jan', issued: 2500, collected: 2000 },
  { month: 'Feb', issued: 800, collected: 600 },
  { month: 'Mar', issued: 4500, collected: 3600 },
  { month: 'Apr', issued: 2900, collected: 2300 },
  { month: 'May', issued: 600, collected: 400 },
  { month: 'Jun', issued: 7200, collected: 5800 },
  { month: 'Jul', issued: 3900, collected: 3100 },
  { month: 'Aug' },
  { month: 'Sep' },
  { month: 'Oct' },
  { month: 'Nov' },
  { month: 'Dec' },
]
