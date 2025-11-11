// components/Map.tsx
'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// Function to create a proper arc that curves in the desired direction
function createArcCurve(start: [number, number], end: [number, number], arcHeight: number = 0.02, curveDirection: 'up' | 'down' = 'up'): [number, number][] {
  const points: [number, number][] = [];
  const segments = 20;
  
  const startLat = start[0];
  const startLng = start[1];
  const endLat = end[0];
  const endLng = end[1];
  
  // Calculate midpoint
  const midLat = (startLat + endLat) / 2;
  const midLng = (startLng + endLng) / 2;
  
  // Calculate the perpendicular direction for the arc
  const dx = endLng - startLng;
  const dy = endLat - startLat;
  const length = Math.sqrt(dx * dx + dy * dy);
  
  // Normalized perpendicular vector - choose direction based on parameter
  let perpLat, perpLng;
  if (curveDirection === 'up') {
    perpLat = -dx / length;  // Curves upward
    perpLng = dy / length;
  } else {
    perpLat = dx / length;   // Curves downward  
    perpLng = -dy / length;
  }
  
  // Control point for the arc (in the middle, perpendicular to the line)
  const controlLat = midLat + perpLat * arcHeight;
  const controlLng = midLng + perpLng * arcHeight;
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    
    // Quadratic Bezier curve using the perpendicular control point
    const lat = 
      Math.pow(1 - t, 2) * startLat + 
      2 * (1 - t) * t * controlLat + 
      Math.pow(t, 2) * endLat;
    
    const lng = 
      Math.pow(1 - t, 2) * startLng + 
      2 * (1 - t) * t * controlLng + 
      Math.pow(t, 2) * endLng;
    
    points.push([lat, lng]);
  }
  
  return points;
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    const initMap = async () => {
      const L = await import('leaflet');
      
      // Fix for default markers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Coordinates
      const bowValleyCollegeCoords: [number, number] = [51.0452, -114.0655];
      const calgaryAirportCoords: [number, number] = [51.1335, -114.0086];
      const airdrieDowntownCoords: [number, number] = [51.2885, -114.0142];
      const crossfieldDowntownCoords: [number, number] = [51.4230, -114.0320];
      const carstairsCoords: [number, number] = [51.5550, -114.0950];
      const didsburyCoords: [number, number] = [51.6480, -114.1450];
      const oldsCoords: [number, number] = [51.7860, -114.1020];
      const bowdenCoords: [number, number] = [51.9350, -114.0240];
      const innisfailCoords: [number, number] = [52.0308, -113.9355]; 
      const penholdCoords: [number, number] = [52.1350, -113.8600];
      const redDeerAirportCoords: [number, number] = [52.1805, -113.8815];
      const redDeerPolytechnicCoords: [number, number] = [52.2530, -113.8220]; 
      const blackfaldsCoords: [number, number] = [52.3890, -113.7900];
      const lacombeCoords: [number, number] = [52.4900, -113.7350];
      const ponokaCoords: [number, number] = [52.6740, -113.5730]; 
      const maskwacisCoords: [number, number] = [52.8250, -113.4500]; 
      const wetaskiwinCoords: [number, number] = [52.9670, -113.3950];
      const milletCoords: [number, number] = [53.0880, -113.4790];
      const leducCoords: [number, number] = [53.3180, -113.5554];
      const ualbertaCoords: [number, number] = [53.5227, -113.5263];
      const westEdmontonMallCoords: [number, number] = [53.5265, -113.6235];

      // Center map between both locations
      const centerCoords: [number, number] = [51.0833, -114.0396];
      
      const map = L.map(mapRef.current!).setView(centerCoords, 11);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Bow Valley College Marker
      L.marker(bowValleyCollegeCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Bow Valley College</strong><br>
            <em>Downtown Campus</em><br>
            345 6 Avenue SE, Calgary, AB T2G 4V1
          </div>
        `)
        .openPopup();

      // Calgary International Airport Marker
      L.marker(calgaryAirportCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Calgary International Airport</strong><br>
            <em>YYC</em><br>
            2000 Airport Road NE, Calgary, AB T2E 6Z8
          </div>
        `);      
        
      L.marker(airdrieDowntownCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Airdrie Downtown</strong><br>
            <em>City Centre</em><br>
            Main Street, Airdrie, AB
          </div>
        `);
      
      L.marker(crossfieldDowntownCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Crossfield Downtown</strong><br>
            <em>Town Centre</em><br>
            Main Street, Crossfield, AB
          </div>
        `);

      L.marker(carstairsCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Carstairs</strong><br>
            <em>Town Centre</em><br>
            Main Street, Carstairs, AB
          </div>
        `);

      L.marker(didsburyCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Didsbury</strong><br>
            <em>Town Centre</em><br>
            Main Street, Didsbury, AB
          </div>
        `);
      
      L.marker(oldsCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Olds</strong><br>
            <em>Town Centre</em><br>
            Main Street, Olds, AB
          </div>
        `);
      
      L.marker(bowdenCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Bowden</strong><br>
            <em>Town Centre</em><br>
            Main Street, Bowden, AB
          </div>
        `);

      L.marker(innisfailCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Innisfail</strong><br>
            <em>Town Centre</em><br>
            Main Street, Innisfail, AB
          </div>
        `);
      
      // Penhold Marker
      L.marker(penholdCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Penhold</strong><br>
            <em>Town Centre</em><br>
            Main Street, Penhold, AB
          </div>
        `);

      L.marker(redDeerPolytechnicCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Red Deer Polytechnic</strong><br>
            <em>Main Campus</em><br>
            100 College Blvd, Red Deer, AB T4N 5H5
          </div>
        `);

      L.marker(redDeerAirportCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Red Deer Regional Airport</strong><br>
            <em>YQF</em><br>
            Airport Drive, Red Deer County, AB
          </div>
        `);

      L.marker(blackfaldsCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Blackfalds</strong><br>
            <em>Town Centre</em><br>
            Broadway Avenue, Blackfalds, AB
          </div>
        `);
      
      L.marker(ponokaCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Ponoka</strong><br>
            <em>Town Centre</em><br>
            Main Street, Ponoka, AB
          </div>
        `);
      
      L.marker(lacombeCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Lacombe</strong><br>
            <em>City Centre</em><br>
            Main Street, Lacombe, AB
          </div>
        `);
      
      L.marker(maskwacisCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Maskwacis</strong><br>
            <em>First Nations Community</em><br>
            Maskwacis, AB T0C 1N0
          </div>
        `);
      
      L.marker(wetaskiwinCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Wetaskiwin</strong><br>
            <em>City Centre</em><br>
            Main Street, Wetaskiwin, AB
          </div>
        `);
      
      L.marker(milletCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Millet</strong><br>
            <em>Town Centre</em><br>
            Main Street, Millet, AB
          </div>
        `);
      
      L.marker(ualbertaCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>University of Alberta</strong><br>
            <em>Main Campus</em><br>
            116 St & 85 Ave, Edmonton, AB T6G 2R3
          </div>
        `);


      L.marker(leducCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>Leduc</strong><br>
            <em>City Centre</em><br>
            Main Street, Leduc, AB
          </div>
        `);
      
       L.marker(westEdmontonMallCoords).addTo(map)
        .bindPopup(`
          <div style="text-align: center;">
            <strong>West Edmonton Mall</strong><br>
            <em>World's Largest Mall</em><br>
            8882 170 St NW, Edmonton, AB T5T 4J2
          </div>
        `);
      
      // Try different curve directions:
      // Option 1: Curve upward
      const curvePoints = createArcCurve(bowValleyCollegeCoords, calgaryAirportCoords, 0.03, 'down');

      const curvePoints2 = createArcCurve(ualbertaCoords, westEdmontonMallCoords, 0.02, 'up');

      const curvePoints3 = createArcCurve(airdrieDowntownCoords, crossfieldDowntownCoords, 0.04, 'down');
      const curvePoints4 = createArcCurve(crossfieldDowntownCoords, carstairsCoords, 0.04, 'down');
      
      // Straight line from Calgary Airport to Airdrie
      const straightLine1 = L.polyline([calgaryAirportCoords, airdrieDowntownCoords], {
        color: '#EF4444', // Red
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Straight line from Airdrie to Crossfield
      const straightLine2 = L.polyline([airdrieDowntownCoords, crossfieldDowntownCoords], {
        color: '#10B981', // Green
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Straight line from Crossfield to Carstairs
      const straightLine3 = L.polyline([crossfieldDowntownCoords, carstairsCoords], {
        color: '#8B5CF6', // Purple
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Straight line from Carstairs to Didsbury
      const straightLine4 = L.polyline([carstairsCoords, didsburyCoords], {
        color: '#F59E0B', // Orange
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Straight line from Didsbury to Olds
      const straightLine5 = L.polyline([didsburyCoords, oldsCoords], {
        color: '#EC4899', // Pink
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine6 = L.polyline([oldsCoords, bowdenCoords], {
        color: '#06B6D4', // Cyan
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine7 = L.polyline([bowdenCoords, innisfailCoords], {
        color: '#84CC16', // Lime Green
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine8 = L.polyline([innisfailCoords, penholdCoords], {
        color: '#F97316', // Amber/Orange
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);
    
      const straightLine9 = L.polyline([penholdCoords, redDeerAirportCoords], {
        color: '#A855F7', // Violet
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Straight line from Red Deer Airport to Red Deer Polytechnic
      const straightLine10 = L.polyline([redDeerAirportCoords, redDeerPolytechnicCoords], {
        color: '#DC2626', // Dark Red
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine11 = L.polyline([redDeerPolytechnicCoords, blackfaldsCoords], {
        color: '#7C2D12', // Brown
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine12 = L.polyline([blackfaldsCoords, lacombeCoords], {
        color: '#1E40AF', // Dark Blue
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine13 = L.polyline([lacombeCoords, ponokaCoords], {
        color: '#059669', // Emerald Green
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine14 = L.polyline([ponokaCoords, maskwacisCoords], {
        color: '#D97706', // Amber
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine15 = L.polyline([maskwacisCoords, wetaskiwinCoords], {
        color: '#6B7280', // Gray
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine16 = L.polyline([wetaskiwinCoords, milletCoords], {
        color: '#BE185D', // Pink
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine17 = L.polyline([milletCoords, leducCoords], {
        color: '#0EA5E9', // Sky Blue
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      const straightLine18 = L.polyline([leducCoords, ualbertaCoords], {
        color: '#8B5CF6', // Purple
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);
    
      const curvedLine2 = L.polyline(curvePoints2, {
        color: '#F59E0B', // Orange
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      // Bow Valley College to Calgary Airport line (curved)
      const curvedLine = L.polyline(curvePoints, {
        color: '#3B82F6', // Blue
        weight: 4,
        opacity: 0.7,
        lineJoin: 'round'
      }).addTo(map);

      
    };

    initMap();
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ height: '600px', width: '100%' }}
      className="border border-gray-300 rounded-lg"
    />
  );
}