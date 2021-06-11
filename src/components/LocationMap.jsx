import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const IndividualLocation = ({ text, key }) => <div key={key} style={{ height: '20px', width: '20px', backgroundColor: 'black' }}>{text}</div>;

export default class LocationMap extends Component {
  constructor() {
    super();
    this.state = {
      plotted: false,
      plots: []
    }
  }
  static defaultProps = {
    center: {
      lat: 13.0827,
      lng: 80.2707
    },
    zoom: 1
  };

  componentDidMount() {
    let plots = [];
    this.props.wholeData.forEach((data, i) => {
      let loc = "My Location" + i
      plots.push(<IndividualLocation
        lng={data.latitude}
        lat={data.longitude}
        text={loc}
        key={i}
      />)
    })
    this.setState({ plotted: true, plots: plots })
  }
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h3 className="row">Location Map</h3>
        {this.state.plotted && <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.plotted && this.state.plots}
        </GoogleMapReact>}
      </div>
    );
  }
}

