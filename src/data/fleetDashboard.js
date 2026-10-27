import {
  Bike,
  Bus,
  CreditCard,
  Fuel,
  Route,
  Truck,
  User,
  UserRound,
  Wrench,
} from 'lucide-react'

export const fleetStats = [
  { label: 'Total Vehicles', value: '100', icon: Truck, tint: 'grey' },
  { label: 'Commercial', value: '50', icon: Truck, tint: 'orange' },
  { label: 'Passenger', value: '30', icon: Bus, tint: 'green' },
  { label: 'Two-Wheelers', value: '20', icon: Bike, tint: 'blue' },
  { label: 'Drivers', value: '60', icon: UserRound, tint: 'purple' },
  { label: 'Assistants', value: '40', icon: User, tint: 'sky' },
]

export const notAssigned = [
  { label: 'Vehicles', value: '00', icon: Truck, tint: 'blue' },
  { label: 'Drivers', value: '00', icon: UserRound, tint: 'purple' },
  { label: 'Assistants', value: '00', icon: User, tint: 'sky' },
  { label: 'Routes', value: '00', icon: Route, tint: 'green' },
]

export const fuelPrices = [
  { name: 'Petrol', price: '₹104.50', color: '#1FA14A' },
  { name: 'Diesel', price: '₹104.50', color: '#1976D2' },
  { name: 'CNG', price: '₹104.50', color: '#F5A00F' },
]

export const costAnalysis = [
  { month: 'Jan', maintenance: 3600, fuel: 2800, fastag: 1200 },
  { month: 'Feb', maintenance: 2800, fuel: 1900, fastag: 1500 },
  { month: 'Mar' },
  { month: 'Apr' },
  { month: 'May' },
  { month: 'Jun' },
  { month: 'Jul' },
  { month: 'Aug' },
  { month: 'Sep' },
  { month: 'Oct' },
  { month: 'Nov' },
  { month: 'Dec' },
]

export const costSeries = [
  { key: 'maintenance', name: 'Maintenance', color: '#1976D2' },
  { key: 'fuel', name: 'Fuel', color: '#F5A00F' },
  { key: 'fastag', name: 'Fastag', color: '#1FA14A' },
]

export const costSummary = {
  total: '₹20,00,000',
  change: '8% decrease from last month',
  items: [
    { label: 'Fuel', value: '₹10,00,000', icon: Fuel, color: '#F5A00F' },
    { label: 'Maintenance', value: '₹10,00,000', icon: Wrench, color: '#1976D2' },
    { label: 'Fastag', value: '₹10,00,000', icon: CreditCard, color: '#1FA14A' },
  ],
}

export const fuelUsage = [
  { name: 'Petrol', percent: 60, color: '#1FA14A' },
  { name: 'Diesel', percent: 35, color: '#1976D2' },
  { name: 'CNG', percent: 5, color: '#F5A00F' },
]

export const fuelUsageTotal = {
  consumed: '10,000 L',
  cost: '₹20,00,000',
  change: '8% decrease from last month',
}

export const fuelUsageItems = [
  { name: 'Petrol', color: '#1FA14A', liters: '100 L', cost: '₹ 10,000' },
  { name: 'Diesel', color: '#1976D2', liters: '100 L', cost: '₹ 10,000' },
  { name: 'CNG', color: '#F5A00F', liters: '100 L', cost: '₹ 10,000' },
]

export const scheduleRoutes = [
  {
    code: 'THTR03',
    route: 'Thanjavur to Trichy 3',
    vehicle: 'TN 49 CA 3843',
    driver: 'ARIVALAGAN THIGARAJAN',
    assistant: 'BHARATHIRAJA LAKSHMANAN',
  },
  {
    code: 'THTR03',
    route: 'Thanjavur to Trichy 3',
    vehicle: 'TN 49 CP 8044',
    driver: 'VIJAYAKUMAR P',
    assistant: 'VISHVA SANKAR',
  },
  {
    code: 'THTR03',
    route: 'Thanjavur to Trichy 3',
    vehicle: 'TN 49 CA 3843',
    driver: 'ARIVALAGAN THIGARAJAN',
    assistant: 'BHARATHIRAJA LAKSHMANAN',
  },
  {
    code: 'THTR03',
    route: 'Thanjavur to Trichy 3',
    vehicle: 'TN 49 CP 8044',
    driver: 'VIJAYAKUMAR P',
    assistant: 'VISHVA SANKAR',
  },
]
