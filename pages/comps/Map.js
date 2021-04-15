import React from "react";

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const position = { lat: 52.51683607301976, lng: 13.379753440540215 };

const mapStyles = [
  {
    featureType: "road",
    stylers: [
      {
        hue: "#5e00ff",
      },
      {
        saturation: -79,
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        saturation: -78,
      },
      {
        hue: "#6600ff",
      },
      {
        lightness: -47,
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        lightness: 22,
      },
    ],
  },
  {
    featureType: "landscape",
    stylers: [
      {
        hue: "#6600ff",
      },
      {
        saturation: -11,
      },
    ],
  },
  {},
  {},
  {
    featureType: "water",
    stylers: [
      {
        saturation: -65,
      },
      {
        hue: "#1900ff",
      },
      {
        lightness: 8,
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        weight: 1.3,
      },
      {
        lightness: 30,
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        hue: "#5e00ff",
      },
      {
        saturation: -16,
      },
    ],
  },
  {
    featureType: "transit.line",
    stylers: [
      {
        saturation: -72,
      },
    ],
  },
  {},
];
const GoogleMapContact = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,

    loadingElement: <div style={{ width: `500px`, height: `500px` }} />,
    containerElement: <div style={{ width: `500px`, height: `500px` }} />,
    mapElement: <div style={{ width: `500px`, height: `500px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    options={{
      styles: mapStyles,
    }}
    defaultZoom={13}
    defaultCenter={position}
  >
    {props.isMarkerShown && <Marker position={position} />}
  </GoogleMap>
));

export default GoogleMapContact;
