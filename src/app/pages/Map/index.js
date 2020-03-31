import React, { useState, useEffect } from 'react';

import { Container, RecordButton, CurrentPositionButton } from './styles';
import { FaMicrophone, FaCompass } from 'react-icons/fa';
import { GoogleMap, Marker } from '../../components/GoogleMap';
import { getCurrentLocation } from '../../services/location';
import AudioPlayer from '../../components/AudioPlayer';

export default function Map () {
  const [ map, setMap ] = useState(null);
  const [ positionInterval, setPositionInterval ] = useState(null);
  const [ following, setFollowing ] = useState(false);
  const [ draggable, setDraggable ] = useState(false);
  const [ currentMarker, setCurrentMarker ] = useState(null);

  useEffect(() => {
    if (map) {
      setNewPosition();
      setFollowing(false);
      setDraggable(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    if (following) {
      setNewPosition();
      setPositionInterval(setInterval(setNewPosition, 1000));
    } else {
      clearInterval(positionInterval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [following]);

  async function setNewPosition() {
    if (map) {
      let newPosition = await getCurrentLocation();
      map.panTo({lat: newPosition.lat, lng: newPosition.lng});
    }
  }

  function handleMapLoad({ map }) {
    setMap(map);
  }

  function handleMarkerClick(marker, map) {
    if (currentMarker) return;
    setFollowing(false);
    setDraggable(false);
    map.panTo(marker.getPosition())
    setCurrentMarker(marker);
  }

  function handleCurrentPositionClick() {
    setDraggable(following);
    setFollowing(!following);
  }

  function handlePlayerExit() {
    setCurrentMarker(null);
    setDraggable(true);
  }

  function handleRecording() {
    console.log('button clicked');
    navigator.mediaDevices.getUserMedia({ audio: true})
    
  }

  return (
    <Container>
      <GoogleMap 
        onLoad={handleMapLoad}
        draggable={draggable}
      >
        <Marker 
          options={{
            position: {lat: -19.5295366, lng: -40.666247}
          }}
          onClick={handleMarkerClick}
        />
        <Marker/>
      </GoogleMap>
      <RecordButton onclick={handleRecording}>
        <FaMicrophone />
      </RecordButton>
      <CurrentPositionButton active={following} onClick={handleRecording}>
        <FaCompass />
      </CurrentPositionButton>
      <input type="file" accept="audio/*" capture="microphone" id="recorder"></input>
      { currentMarker && <AudioPlayer onExit={handlePlayerExit} />}
    </Container>
  );
}