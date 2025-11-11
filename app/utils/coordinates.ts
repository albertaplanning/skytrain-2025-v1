export interface Location {
  coords: [number, number];
  name: string;
  description: string;
  address: string;
  type: 'college' | 'airport' | 'downtown' | 'town' | 'mall' | 'university' | 'community';
}

export interface CurvedRoute {
  from: [number, number];
  to: [number, number];
  height: number;
  direction: 'up' | 'down';
  color: string;
}

export const locations: Location[] = [
  {
    coords: [51.0452, -114.0655],
    name: 'Bow Valley College',
    description: 'Downtown Campus',
    address: '345 6 Avenue SE, Calgary, AB T2G 4V1',
    type: 'college'
  },
  {
    coords: [51.1335, -114.0086],
    name: 'Calgary International Airport',
    description: 'YYC',
    address: '2000 Airport Road NE, Calgary, AB T2E 6Z8',
    type: 'airport'
  },
  {
    coords: [51.2885, -114.0142],
    name: 'Airdrie Downtown',
    description: 'City Centre',
    address: 'Main Street, Airdrie, AB',
    type: 'downtown'
  },
  {
    coords: [51.4230, -114.0320],
    name: 'Crossfield Downtown',
    description: 'Town Centre',
    address: 'Main Street, Crossfield, AB',
    type: 'downtown'
  },
  {
    coords: [51.5550, -114.0950],
    name: 'Carstairs',
    description: 'Town Centre',
    address: 'Main Street, Carstairs, AB',
    type: 'town'
  },
  {
    coords: [51.6480, -114.1450],
    name: 'Didsbury',
    description: 'Town Centre',
    address: 'Main Street, Didsbury, AB',
    type: 'town'
  },
  {
    coords: [51.7860, -114.1020],
    name: 'Olds',
    description: 'Town Centre',
    address: 'Main Street, Olds, AB',
    type: 'town'
  },
  {
    coords: [51.9350, -114.0240],
    name: 'Bowden',
    description: 'Town Centre',
    address: 'Main Street, Bowden, AB',
    type: 'town'
  },
  {
    coords: [52.0308, -113.9355],
    name: 'Innisfail',
    description: 'Town Centre',
    address: 'Main Street, Innisfail, AB',
    type: 'town'
  },
  {
    coords: [52.1350, -113.8600],
    name: 'Penhold',
    description: 'Town Centre',
    address: 'Main Street, Penhold, AB',
    type: 'town'
  },
  {
    coords: [52.1805, -113.8815],
    name: 'Red Deer Regional Airport',
    description: 'YQF',
    address: 'Airport Drive, Red Deer County, AB',
    type: 'airport'
  },
  {
    coords: [52.2530, -113.8220],
    name: 'Red Deer Polytechnic',
    description: 'Main Campus',
    address: '100 College Blvd, Red Deer, AB T4N 5H5',
    type: 'college'
  },
  {
    coords: [52.3890, -113.7900],
    name: 'Blackfalds',
    description: 'Town Centre',
    address: 'Broadway Avenue, Blackfalds, AB',
    type: 'town'
  },
  {
    coords: [52.4900, -113.7350],
    name: 'Lacombe',
    description: 'City Centre',
    address: 'Main Street, Lacombe, AB',
    type: 'downtown'
  },
  {
    coords: [52.6740, -113.5730],
    name: 'Ponoka',
    description: 'Town Centre',
    address: 'Main Street, Ponoka, AB',
    type: 'town'
  },
  {
    coords: [52.8250, -113.4500],
    name: 'Maskwacis',
    description: 'First Nations Community',
    address: 'Maskwacis, AB T0C 1N0',
    type: 'community'
  },
  {
    coords: [52.9670, -113.3950],
    name: 'Wetaskiwin',
    description: 'City Centre',
    address: 'Main Street, Wetaskiwin, AB',
    type: 'downtown'
  },
  {
    coords: [53.0880, -113.4790],
    name: 'Millet',
    description: 'Town Centre',
    address: 'Main Street, Millet, AB',
    type: 'town'
  },
  {
    coords: [53.3180, -113.5554],
    name: 'Leduc',
    description: 'City Centre',
    address: 'Main Street, Leduc, AB',
    type: 'downtown'
  },
  {
    coords: [53.5227, -113.5263],
    name: 'University of Alberta',
    description: 'Main Campus',
    address: '116 St & 85 Ave, Edmonton, AB T6G 2R3',
    type: 'university'
  },
  {
    coords: [53.5265, -113.6235],
    name: 'West Edmonton Mall',
    description: 'World\'s Largest Mall',
    address: '8882 170 St NW, Edmonton, AB T5T 4J2',
    type: 'mall'
  }
];

export const centerCoords: [number, number] = [51.0833, -114.0396];

// Route segments for straight lines
export const routeSegments = [
  { from: 'Calgary International Airport', to: 'Airdrie Downtown', color: '#EF4444' },
  { from: 'Airdrie Downtown', to: 'Crossfield Downtown', color: '#10B981' },
  { from: 'Crossfield Downtown', to: 'Carstairs', color: '#8B5CF6' },
  { from: 'Carstairs', to: 'Didsbury', color: '#F59E0B' },
  { from: 'Didsbury', to: 'Olds', color: '#EC4899' },
  { from: 'Olds', to: 'Bowden', color: '#06B6D4' },
  { from: 'Bowden', to: 'Innisfail', color: '#84CC16' },
  { from: 'Innisfail', to: 'Penhold', color: '#F97316' },
  { from: 'Penhold', to: 'Red Deer Regional Airport', color: '#A855F7' },
  { from: 'Red Deer Regional Airport', to: 'Red Deer Polytechnic', color: '#DC2626' },
  { from: 'Red Deer Polytechnic', to: 'Blackfalds', color: '#7C2D12' },
  { from: 'Blackfalds', to: 'Lacombe', color: '#1E40AF' },
  { from: 'Lacombe', to: 'Ponoka', color: '#059669' },
  { from: 'Ponoka', to: 'Maskwacis', color: '#D97706' },
  { from: 'Maskwacis', to: 'Wetaskiwin', color: '#6B7280' },
  { from: 'Wetaskiwin', to: 'Millet', color: '#BE185D' },
  { from: 'Millet', to: 'Leduc', color: '#0EA5E9' }
];

// Curved routes
export const curvedRoutes: CurvedRoute[] = [
  { 
    from: [51.0452, -114.0655], 
    to: [51.1335, -114.0086], 
    height: 0.03, 
    direction: 'down', 
    color: '#3B82F6' 
  },
  { 
    from: [53.5227, -113.5263], 
    to: [53.5265, -113.6235], 
    height: 0.02, 
    direction: 'up', 
    color: '#F59E0B' 
  },
  { 
    from: [53.3180, -113.5554], // Leduc
    to: [53.5227, -113.5263],   // University of Alberta
    height: 0.025, 
    direction: 'up', 
    color: '#8B5CF6' 
  }
];

// Create a direct coordinate map for easier lookup
export const locationCoordinates: { [key: string]: [number, number] } = {
  'Bow Valley College': [51.0452, -114.0655],
  'Calgary International Airport': [51.1335, -114.0086],
  'Airdrie Downtown': [51.2885, -114.0142],
  'Crossfield Downtown': [51.4230, -114.0320],
  'Carstairs': [51.5550, -114.0950],
  'Didsbury': [51.6480, -114.1450],
  'Olds': [51.7860, -114.1020],
  'Bowden': [51.9350, -114.0240],
  'Innisfail': [52.0308, -113.9355],
  'Penhold': [52.1350, -113.8600],
  'Red Deer Regional Airport': [52.1805, -113.8815],
  'Red Deer Polytechnic': [52.2530, -113.8220],
  'Blackfalds': [52.3890, -113.7900],
  'Lacombe': [52.4900, -113.7350],
  'Ponoka': [52.6740, -113.5730],
  'Maskwacis': [52.8250, -113.4500],
  'Wetaskiwin': [52.9670, -113.3950],
  'Millet': [53.0880, -113.4790],
  'Leduc': [53.3180, -113.5554],
  'University of Alberta': [53.5227, -113.5263],
  'West Edmonton Mall': [53.5265, -113.6235]
};

// Helper function to get coordinates by name
export function getCoordsByName(name: string): [number, number] | null {
  return locationCoordinates[name] || null;
}