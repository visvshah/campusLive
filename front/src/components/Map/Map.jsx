import React from 'react';
import './map.scss';

export default function Map() {
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
  return (
    <div>
        <div className="mapPage">
            <div className="left">
                <h1 className = "header">Create a Event!</h1>
                <form autoComplete = "off" validate = "true" className = "form" onSubmit = {handleSubmit}>
                    <input className = "input"></input>
                    <input className = "input"></input>
                    <input className = "input"></input>
                </form>
            </div>
            <div className="right">
                Hello
            </div>
        </div>
    </div>
  )
}