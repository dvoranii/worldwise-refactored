/* eslint-disable no-unused-vars */
import styles from "../Map/Map.module.css";
import { useMapLocation } from "../../utils/useMapLocation";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useCities } from "../../Contexts/CitiesContext";

function Map() {
  const { cities, currentCity } = useCities();
  let { lat: mapLat, lng: mapLng } = useMapLocation();

  // Determine initial position either from currentCIty or URL params or default
  const initialLat = currentCity?.position?.lat || mapLat || 40;
  const initialLng = currentCity?.position?.lng || mapLng || 0;
  const [mapPosition, setMapPosition] = useState([initialLat, initialLng]);

  useEffect(() => {
    if (currentCity?.position?.lat && currentCity?.position?.lng) {
      setMapPosition([currentCity.position.lat, currentCity.position.lng]);
    }
  }, [currentCity]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.leafletMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
}

export default Map;
