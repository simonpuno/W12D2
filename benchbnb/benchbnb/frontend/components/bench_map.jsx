import React from 'react';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
    // this.props = {
    //     benches: [array]
    // }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.benches);  // take in benches arg 
        this.map.addListener('idle', () => {
            const LatLngBounds = this.map.getBounds();
            const northEast = LatLngBounds.getNorthEast();
            const southWest = LatLngBounds.getSouthWest();
            const bounds = {northEast: northEast, southWest: southWest};
            this.props.updateBounds(bounds);
        })
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    render(){
        return (
            <div id='map-container' ref={map => this.mapNode = map}>
                {/* <div ref={map => this.mapNode = map}>
                </div> */}
            </div>
        )
    }
}

export default BenchMap;