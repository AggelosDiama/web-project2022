//import { Route, Switch } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import classes from "./Map.module.css";
import genericData from "./data/generic.json";

function Map() {
  return (
    <MapContainer
      center={[38.246294, 21.735039]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <div className={classes.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {genericData.map((gen) => (
          <Marker
            key={gen.id}
            position={[gen.coordinates.lat, gen.coordinates.lng]}
          >
            <Popup>
              {gen.name} <br />
              {gen.address} <br />
              {gen.address} <br />
            </Popup>
          </Marker>
        ))}
      </div>
    </MapContainer>
  );
}
export default Map;
