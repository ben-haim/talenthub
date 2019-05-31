import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { CUSTOM_STYLE, API_KEY } from '../config/map';

import '../styles/map.scss';

const mapCenter = {lat: 40.1776135, lng: 44.5087942};

class Map extends Component {
  static defaultProps = {
    center: mapCenter,
    zoom: 14
  };

  render() {
    return (
      <div className="mapbox" style={{position: 'absolute', top: '3.75rem', right: 0, height: 'calc(100vh - 3.75rem)', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}          
          options={{styles: CUSTOM_STYLE, fullscreenControl: false}}
        />
      </div>
    );
  }
}

export default Map;