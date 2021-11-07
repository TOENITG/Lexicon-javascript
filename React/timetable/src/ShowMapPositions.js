import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ShowMapPositions = (props) => {
  return (
    <div>
      <p>Here!</p>
      <p>Lat : {props.lat}</p>
      <p>Long: {props.long}</p>

      <MapContainer
        center={[props.lat, props.long]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[props.lat, props.long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ShowMapPositions;
