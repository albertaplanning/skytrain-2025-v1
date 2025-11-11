'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import createArcCurve from './utils/createArcCurve';
import { locations, centerCoords, routeSegments, curvedRoutes, locationCoordinates } from './utils/coordinates';

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

      const map = L.map(mapRef.current!).setView(centerCoords, 11);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add all markers
      locations.forEach(location => {
        L.marker(location.coords).addTo(map)
          .bindPopup(`
            <div style="text-align: center;">
              <strong>${location.name}</strong><br>
              <em>${location.description}</em><br>
              ${location.address}
            </div>
          `);
      });

      // Open Bow Valley College popup by default
      const bowValley = locations.find(loc => loc.name === 'Bow Valley College');
      if (bowValley) {
        L.marker(bowValley.coords).addTo(map)
          .bindPopup(`
            <div style="text-align: center;">
              <strong>${bowValley.name}</strong><br>
              <em>${bowValley.description}</em><br>
              ${bowValley.address}
            </div>
          `)
          .openPopup();
      }

      // Add straight route segments - USE THE DIRECT COORDINATE MAP
      routeSegments.forEach(segment => {
        const fromCoords = locationCoordinates[segment.from];
        const toCoords = locationCoordinates[segment.to];
        
        console.log(`Drawing route: ${segment.from} -> ${segment.to}`, { fromCoords, toCoords });
        
        if (fromCoords && toCoords) {
          L.polyline([fromCoords, toCoords], {
            color: segment.color,
            weight: 4,
            opacity: 0.7,
            lineJoin: 'round'
          }).addTo(map);
        } else {
          console.error(`Missing coordinates for: ${segment.from} -> ${segment.to}`);
        }
      });

      // Add curved routes
      curvedRoutes.forEach(route => {
        const curvePoints = createArcCurve(route.from, route.to, route.height, route.direction);
        L.polyline(curvePoints, {
          color: route.color,
          weight: 4,
          opacity: 0.7,
          lineJoin: 'round'
        }).addTo(map);
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />;
}