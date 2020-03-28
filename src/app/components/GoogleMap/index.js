import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function GoogleMap({ onLoad }) {
    const [ map, setMap ] = useState(null);

    useEffect(() => {
        if(!map){
            loadMaps();
        }
        onLoad({ map });
    }, [map, onLoad]);

    function loadMaps() {
        let tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.async = false;
            tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAHUx_sdvuB6wLKXt1s54eLMeXEzIOTIyo&v=3.40";
            tag.onload = () => {
                let map = new window.google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 15,
                    disableDefaultUI: true,
                    draggable: false,
                });

                setMap(map);
            }
            document.body.append(tag);
    }

    return (<Container id="map"></Container>)
}