import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { CUSTOM_STYLE, API_KEY } from '../config/map';
import Marker from './marker';

import '../styles/map.scss';

const mapCenter = {lat: 40.1776135, lng: 44.5087942};

class Map extends Component {
  static defaultProps = {
    center: mapCenter,
    zoom: 14
  };

  render() {
    const {jobs, currentJob, currentPost} = this.props;
    let style = {
      position: 'absolute',
      top: '3.75rem',
      right: 0,
      height: 'calc(100vh - 3.75rem)',
      width: '100%'
    }
    let markers = null;
    let center = this.props.center;

    if (jobs) {
      style.width = 'calc(100% - 650px)';
      markers = jobs.map((job, index) => {
        return (
          <Marker
            key={index}
            lat={job.company.latitude}
            lng={job.company.longitude}
          />
        )
      });
      if(currentJob) {
        center = {
          lat: parseFloat(currentJob.company.latitude),
          lng: parseFloat(currentJob.company.longitude)
        }
      }
    } else if(currentPost) {
      style = {height: '200px', width: '600px'}
      center = {
        lat: currentPost.lat || mapCenter.lat,
        lng: currentPost.lng || mapCenter.lng
      }
      markers = <Marker lat={currentPost.lat} lng={currentPost.lng} />
    }

    return (
      <div className="mapbox" style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={center}
          options={{styles: CUSTOM_STYLE, fullscreenControl: false}}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;