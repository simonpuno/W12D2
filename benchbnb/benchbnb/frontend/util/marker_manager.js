export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = {};
        this.updateMarkers = this.updateMarkers.bind(this);
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    updateMarkers(benches){
        // console.log('time to update')
        benches.forEach(bench =>{
            if (!Object.keys(this.markers).includes(bench.id.toString())){
                this.createMarkerFromBench(bench)
            }
            // debugger;
        })
        // debugger;
    }

    createMarkerFromBench(bench){
        const latLng = {lat: bench.lat, lng: bench.lng};
        this.markers[bench.id] = bench;
        new google.maps.Marker({
            position: latLng,
            map: this.map
        })
    }
}