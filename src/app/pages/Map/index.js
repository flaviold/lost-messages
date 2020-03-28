import React, { useState, useEffect } from 'react';

import Logo from '../../../Logo';

import { Container, Header, Title, AddButton } from './styles';
import { FaPlus } from 'react-icons/fa';
import GoogleMap from '../../components/GoogleMap';

export default function MapPage () {
  let [ map, setMap ] = useState(null);
  let [ position, setPosition ] = useState({lat: -22.915, lng: -43.197});

  useEffect(() => {
    if (navigator.geolocation) {
      if (map) {
          navigator.geolocation.getCurrentPosition(position => {
            setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
            map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
          }, () => alert('Falha ao buscar posição geográfica'));
        setInterval(() => {
          navigator.geolocation.getCurrentPosition(position => {
            setPosition({lat: position.coords.latitude, lng: position.coords.longitude});
            map.panTo({lat: position.coords.latitude, lng: position.coords.longitude});
          }, () => alert('Falha ao buscar posição geográfica'));
        }, 2000);
      }
    } else {
      alert('Seu navegador não suporta geolocalização');
    }
  }, [map])

  function handleMapLoad({ map }) {
    if (map) {
      setMap(map);
    }
  }

  return (
    <Container>
      <Header>
        <Logo></Logo>
        <Title>Lost Messages</Title>
      </Header>
      <GoogleMap onLoad={handleMapLoad}/>
      <AddButton>
        <FaPlus />
      </AddButton>
    </Container>
  );
}