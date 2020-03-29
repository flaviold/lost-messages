import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { Marker } from '../index';

export default function GoogleMap({ onLoad, children, draggable }) {
    const [ map, setMap ] = useState(null);
    const [ markers, setMarkers ] = useState([]);

    useEffect(() => {
        if(!map){
            loadMaps();
        }
        onLoad({ map });
    }, [map, onLoad]);

    useEffect(() => {
        if (!children) return;
        let childrenArr = children;

        if (!Array.isArray(children)) childrenArr = [children];

        setMarkers(childrenArr
            .filter(item => item.type.name === Marker.name)
            .map(item => ({
                ...item.props,
                options: {
                    ...item.props.options,
                    map
                }
            })));
    }, [children, map])

    useEffect(() => {
        if (!map) return;
        
        map.setOptions({
            draggable
        })
    }, [draggable, map])

    function loadMaps() {
        let tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.async = false;
            tag.src = `https://maps.googleapis.com/maps/api/js?key=${
                process.env.REACT_APP_MAPS_KEY || ''
            }`;
            tag.onload = () => {
                let map = new window.google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 15,
                    disableDefaultUI: true,
                });

                setMap(map);
            }
            document.body.append(tag);
    }

    return (
        <Container id="map">
            { markers.map((marker, i) => (
                <Marker key={i} { ...marker } />
            ))}
        </Container>)
}