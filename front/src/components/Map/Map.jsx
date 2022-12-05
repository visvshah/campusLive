import "./map.css"
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWVucWkiLCJhIjoiY2w4NWVkOGRtMHAwNjNzbzBqa3JzcG5sdCJ9.g1U7-gzoDDuGNtrY-P18-w';

export default function Map() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-86.921195);
    const [lat, setLat] = useState(40.423705);
    const [zoom, setZoom] = useState(15);
    const [pinData, setPinData] = useState({
        title: "",
        description: "",
        long: 0.0,
        lat: 0.0,
    })
    const handleSubmit = (event) =>{
        event.preventDefault();
        fetch("http://localhost:4001/api/markers/", { method: "POST", body: JSON.stringify(pinData), mode: 'cors', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},contentType: "application/json"})
            .then(res => {
                console.log(pinData)
                setPinData({
                    title: "",
                    description: "",
                    long: 0.0,
                    lat: 0.0,
                })
            })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
                width: "100%",
                height: "100%",
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
        }
    );

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(12));
        });
    });
    
    /* order: 
    1. click on map (marker isn't updated)
    2. type character in one of the text boxes
    3. click again on map, the initial click location is marked
    
    * issues: the visualization of the marker on click is not updating 
    the marker is showing the last click on the map. 
    
    permanent addition the map is occuring correctly, just not visually correct
    */

    const marker = new mapboxgl.Marker();

    function add_marker (event) {
        const coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map.current);
        setPinData({...pinData, long:event.lngLat.lng, lat:event.lngLat.lat})
    }

    // useEffect(() => {
    //     map.current.on('click', (e) => {
    //         setPinData({...pinData, long:e.lngLat.lng, lat:e.lngLat.lat})
    //         marker1.setLngLat([pinData.long, pinData.lat])
    //         marker1.addTo(map.current)
    //     });
    // });

    useEffect(() => {
        map.current.on('click', add_marker);
    })
    

    return (
        <div className = "mapPage">
            <div className="left">
                <h1>Create an Event!</h1>
                <form autoComplete = "off" validate = "true" className = "form" onSubmit = {handleSubmit}> 
                    <input placeholder = "Title" id = "title" name = "title" type ="title" value = {pinData.title} onChange = {(e) => setPinData({...pinData, title: e.target.value})}/>
                    <input placeholder = "Description" id = "description" name = "description" type ="description" value = {pinData.description} onChange = {(e) => setPinData({...pinData, description: e.target.value})}/>
                    <input placeholder = "Longitude" id = "longitude" name = "longitude" type ="longitude" value = {pinData.long} onChange = {(e) => setPinData({...pinData, long: e.target.value})}/>
                    <input placeholder = "Latitude" id = "latitude" name = "latitude" type ="latitude" value = {pinData.lat} onChange = {(e) => setPinData({...pinData, lat: e.target.value})}/>
                <button type="submit" onClick = {handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="right">
                <div ref={mapContainer} className="map-container">
                </div>
            </div>        
        </div>
    );
}