import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function TrackingMap({ bookingId }) {
  const [location, setLocation] = useState({ lat: -1.2921, lng: 36.8219 }); // Default to Nairobi

  useEffect(() => {
    // Set up real-time location updates
    const intervalId = setInterval(() => {
      // Add API call to get updated location
      // setLocation(newLocation);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bookingId]);

  return (
    <MapContainer 
      center={[location.lat, location.lng]} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.lat, location.lng]}>
        <Popup>
          Your Matatu is here
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default TrackingMap; 