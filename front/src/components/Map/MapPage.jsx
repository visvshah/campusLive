import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import {TextField} from "@material-ui/core";
import "../../.env"
import './mappage.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapPage() {
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: -86.921195,
        longitude: 40.423705,
        zoom: 10
    });
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const test = "pk.eyJ1IjoidmlzdnNoYWgiLCJhIjoiY2w4NjUyMjRoMGc2bTN2bHRqYmY0YWM0OCJ9.agwVWoRab0Fy-Qt-xesrEA";
  return (
    <div>
        <div className="mapPage">
            <div className="left">
                <h1 className = "header">Create a Event!</h1>
                <form autoComplete = "off" validate = "true" className = "form" onSubmit = {handleSubmit}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </form>
            </div>
            <div className="right">
            <ReactMapGL
                {...viewport}
                mapboxAccessToken = {test}
                
                onViewportChange = {nextViewport => setViewport(nextViewport)}
                />
            </div>
        </div>
    </div>
  )
}