export default function createArcCurve(start: [number, number], end: [number, number], arcHeight: number = 0.02, curveDirection: 'up' | 'down' = 'up'): [number, number][] {
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