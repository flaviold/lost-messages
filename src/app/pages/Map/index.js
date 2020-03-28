import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

import Logo from '../../../Logo';

import { Container, Header, Title, AddButton } from './styles';
import { FaPlus } from 'react-icons/fa';

export function MapPage ({ loaded, google }) {
  let [ activeMarker, setActiveMarker ] = useState({});
  let [ selectedPlace, setSelectedPlace ] = useState({});
  let [ showingInfoWindow, ] = useState(false);
  let [ position, setPosition ] = useState({lat: -22.915, lng: -43.197});

  useEffect(() => {
    setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => setPosition({lat: position.coords.latitude, lng: position.coords.longitude}), () => alert('Falha ao buscar posição geográfica'));
      } else {
        alert('Seu navegador não suporta geolocalização');
      }
    }, 5000);
  }, [])

  function onMarkerClick(props, marker) {
    setActiveMarker(marker);
    setSelectedPlace(props);
    showingInfoWindow(true);
  }

  function onInfoWindowClose() {
    setActiveMarker(null);
    showingInfoWindow(false);
  }

  
  if (!loaded && position) return <div>Loading...</div>;

  return (
    <Container>
      <Header>
        <Logo></Logo>
        <Title>Lost Messages</Title>
      </Header>
      <Map
        className="map"
        google={google}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={14}
        disableDefaultUI={true}
        center={position}>
        <Marker
          name="SOMA"
          onClick={onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          name="Dolores park"
          onClick={onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <Marker name="Current location" onClick={onMarkerClick} />

        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
      <AddButton>
        <FaPlus />
      </AddButton>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAHUx_sdvuB6wLKXt1s54eLMeXEzIOTIyo')
})(MapPage)