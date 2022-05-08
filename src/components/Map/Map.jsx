import React from 'react';
import { GoogleMap , useJsApiLoader } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const mapContainer = {
  height: '85vh', width: '100%',
  margin: 0,

};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent({setcoords, setBounds, coords}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBLxnlVZjdglkfVnh6tE7-dQ2vaxTVC_bk"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainer}
      defaultCenter={coords}
      center={coords}
      zoom={14}
      margin={[50, 50, 50, 50]}
      options={{ disableDefaultUI: true, zoomControl: true }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}

export default React.memo(MyComponent)