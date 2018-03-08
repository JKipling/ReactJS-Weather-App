import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {                                   // lifecycle method that gets called automatically after this componenet gets rendered to the screen.
        new google.maps.Map(this.refs.map, {                // this is how we create an embeded google map inside of our document. Google maps takes a reference from the HTML node where we want to render this map to.  
            zoom: 12,                                       // Options object. Zoom level. Zoom level 12 is a good glimpse of a city.
            center: {                                       // center property. 
                lat: this.props.lat,                        // latitude property
                lng: this.props.lon                         // longitue property
            }
        });
    }

    render() {
        return <div ref="map" />;    //ref = reference
    }
}

export default GoogleMap;