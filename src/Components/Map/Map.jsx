/* eslint-disable no-unused-vars */
// import { useSearchParams } from "react-router-dom";
import styles from "../Map/Map.module.css";
import { useMapLocation } from "../../utils/useMapLocation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  // const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { lat, lng, setSearchParams } = useMapLocation();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.leafletMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
