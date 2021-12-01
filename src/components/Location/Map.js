import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const location = {
  lat: 23.806350,
  lng: 90.366646,
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDyqJUeW_y0MinMJiUYQd31M6A9-cGpkyI">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={17}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
