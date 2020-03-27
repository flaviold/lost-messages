import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

import Logo from '../../../Logo';

import { Container, Header, Title, AddButton } from './styles';
import { FaPlus } from 'react-icons/fa';

export class MapPage extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Container>
        <Header>
          <Logo></Logo>
          <Title>Lost Messages</Title>
        </Header>
        <Map
          className="map"
          google={this.props.google}
          onClick={this.onMapClicked}
          style={{ height: '100%', position: 'relative', width: '100%' }}
          zoom={14}
          disableDefaultUI={true}>
          <Marker
            name="SOMA"
            onClick={this.onMarkerClick}
            position={{ lat: 37.778519, lng: -122.40564 }}
          />

          <Marker
            name="Dolores park"
            onClick={this.onMarkerClick}
            position={{ lat: 37.759703, lng: -122.428093 }}
          />

          <Marker name="Current location" onClick={this.onMarkerClick} />

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
            <small>
              Click on any of the markers to display an additional info.
            </small>
          </InfoWindow>
        </Map>
        <AddButton>
          <FaPlus />
        </AddButton>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAHUx_sdvuB6wLKXt1s54eLMeXEzIOTIyo')
})(MapPage)