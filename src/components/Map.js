import React from "react";
import "../styles/Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

// utils
import { showDataOnMap } from "../utils/util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className='map'>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url='https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
