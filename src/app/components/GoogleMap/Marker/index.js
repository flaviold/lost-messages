import React, { useEffect } from 'react';

// import { Container } from './styles';

export default function Marker({ onClick, options }) {
  useEffect(() => {
    if (!options.map) return;

    let marker = new window.google.maps.Marker(options);
    marker.addListener('click', event => onClick(marker, options.map, event));
  }, [onClick, options]);
  
  return (
    <div></div>
  );
}
