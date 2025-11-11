This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

```bash
 npx next dev --turbo
```

Leaflet Map:

https://leafletjs.com/reference.html

# Alberta Regional Map - Interactive Location Visualizer

An interactive web application showcasing key locations across Alberta with route visualization between major points of interest.


## 📍 About This Project V1 2025

This interactive map displays various important locations across Alberta (Calgary to Edmonton), including educational institutions, airports, downtown centers, and community hubs. The application features route visualization connecting these locations with both straight and curved path lines.

### Key Features

- **Interactive Leaflet Map** - Smooth zoom and pan navigation
- **Location Markers** - Detailed popups with location information
- **Route Visualization** - Color-coded paths between locations
- **Mixed Route Types** - Both straight lines and curved arcs
- **Responsive Design** - Works on desktop and mobile devices
- **TypeScript** - Fully typed for better development experience

## 🗺️ Locations Displayed

### Educational Institutions
- **Bow Valley College** - Downtown Calgary campus
- **Red Deer Polytechnic** - Main campus
- **University of Alberta** - Main Edmonton campus

### Airports
- **Calgary International Airport (YYC)**
- **Red Deer Regional Airport (YQF)**

### Major Centers
- **Airdrie Downtown** - City centre
- **Crossfield Downtown** - Town centre
- **Lacombe** - City centre
- **Wetaskiwin** - City centre
- **Leduc** - City centre

### Communities & Towns
- Carstairs, Didsbury, Olds, Bowden, Innisfail, Penhold, Blackfalds, Ponoka, Maskwacis, Millet

### Landmarks
- **West Edmonton Mall** - World's largest shopping mall

## 🛣️ Route Network

The map displays a comprehensive route system connecting:

1. **Calgary to Edmonton Corridor**
   - Calgary Downtown (BowValley College) → Calgary Airport → Airdrie → Crossfield → Carstairs → Didsbury → Olds → Bowden → Innisfail → Penhold → Red Deer Airport → Red Deer Polytechnic → Blackfalds → Lacombe → Ponoka → Maskwacis → Wetaskiwin → Millet → Leduc → University of Alberta → West Edmonton Mall

2. **Special Routes**
   - **Curved Routes**: 
     - Bow Valley College to Calgary Airport
     - University of Alberta to West Edmonton Mall
     - Leduc to University of Alberta
   - **Straight Routes**: All other connections

## 🛠️ Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Styling**: CSS3 with responsive design
- **Deployment**: Netlify
- **Icons**: Leaflet default markers

## 📁 Project Structure

skytrain-2025-v1/
├── app/
│ ├── components/
│ │ └── Map.tsx # Main map component
│ ├── utils/
│ │ ├── coordinates.ts # Location data and routes
│ │ └── createArcCurve.ts # Curved route generator
│ └── page.tsx # Main page
├── public/ # Static assets
├── package.json # Dependencies and scripts
├── next.config.js # Next.js configuration
├── netlify.toml # Netlify deployment config
└── README.md # This file


## Acknowledgments
OpenStreetMap for base map tiles

Leaflet.js for interactive mapping capabilities

Next.js team for the excellent React framework

Netlify for seamless deployment

