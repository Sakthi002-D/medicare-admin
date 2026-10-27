export const fleetStats = [
  { id: 'total', label: 'Total Vehicles', value: 100, icon: 'truck', tone: 'grey' },
  { id: 'commercial', label: 'Commercial', value: 50, icon: 'truck', tone: 'orange' },
  { id: 'passenger', label: 'Passenger', value: 30, icon: 'bus', tone: 'green' },
  { id: 'twoWheelers', label: 'Two-Wheelers', value: 20, icon: 'bike', tone: 'blue' },
  { id: 'drivers', label: 'Drivers', value: 60, icon: 'driver', tone: 'purple' },
  { id: 'assistants', label: 'Assistants', value: 40, icon: 'user', tone: 'sky' },
]

export const notAssigned = [
  { id: 'vehicles', label: 'Vehicles', value: '00', icon: 'truck', tone: 'blue' },
  { id: 'drivers', label: 'Drivers', value: '00', icon: 'driver', tone: 'purple' },
  { id: 'assistants', label: 'Assistants', value: '00', icon: 'user', tone: 'sky' },
  { id: 'routes', label: 'Routes', value: '00', icon: 'route', tone: 'blue' },
]

export const fuelPrices = [
  { id: 'petrol', name: 'Petrol', price: '₹104.50', unit: '/ Liter', tone: 'green' },
  { id: 'diesel', name: 'Diesel', price: '₹104.50', unit: '/ Liter', tone: 'blue' },
  { id: 'cng', name: 'CNG', price: '₹104.50', unit: '/ Liter', tone: 'orange' },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const costValues = {
  Jan: { maintenance: 3600, fuel: 2800, fastag: 1200 },
  Feb: { maintenance: 2800, fuel: 1900, fastag: 1500 },
}

export const costAnalysis = months.map((month) => ({ month, ...costValues[month] }))

export const costSummary = {
  total: '₹20,00,000',
  note: '8% decrease from last month',
  items: [
    { id: 'fuel', label: 'Fuel', value: '₹10,00,000', icon: 'fuel', tone: 'orange' },
    { id: 'maintenance', label: 'Maintenance', value: '₹10,00,000', icon: 'wrench', tone: 'blue' },
    { id: 'fastag', label: 'Fastag', value: '₹10,00,000', icon: 'receipt', tone: 'green' },
  ],
}

export const fuelUsage = {
  total: '10,000 L',
  slices: [
    { id: 'petrol', name: 'Petrol', value: 60, color: '#1FA14A', detail: '100 L / ₹ 10,000', tone: 'green' },
    { id: 'diesel', name: 'Diesel', value: 35, color: '#1976D2', detail: '100 L / ₹ 10,000', tone: 'blue' },
    { id: 'cng', name: 'CNG', value: 5, color: '#F5A00F', detail: '100 L / ₹ 10,000', tone: 'orange' },
  ],
}

export const scheduleRoutes = [
  { id: 1, routeCode: 'THTR03', route: 'Thanjavur to Trichy 3', vehicle: 'TN 49 CA 3843', driver: 'ARIVALAGAN THIGARAJAN', assistant: 'BHARATHIRAJA LAKSHMANAN' },
  { id: 2, routeCode: 'THTR03', route: 'Thanjavur to Trichy 3', vehicle: 'TN 49 CP 8044', driver: 'VIJAYAKUMAR P', assistant: 'VISHVA SANKAR' },
  { id: 3, routeCode: 'THTR03', route: 'Thanjavur to Trichy 3', vehicle: 'TN 49 CA 3843', driver: 'ARIVALAGAN THIGARAJAN', assistant: 'BHARATHIRAJA LAKSHMANAN' },
  { id: 4, routeCode: 'THTR03', route: 'Thanjavur to Trichy 3', vehicle: 'TN 49 CP 8044', driver: 'VIJAYAKUMAR P', assistant: 'VISHVA SANKAR' },
]