import React from 'react';
import './landing.css';
import image from "./purdueCampus.png";

export default function Landing() {
  return (
    <div>
      <div className="landingPage">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div class="content">
          <h2> Telling American college students about events. </h2>
        </div>
        <div id='Home' class="content">
          <h2> Event organizing made easy. </h2>
        </div>
        <div id='About' class="contentImage">
          <h2> Want to know where and when a club meeting is?</h2>
          <h2> We gotchu fam. </h2>
          <img src={image} className = "image" alt="Purdue Campus Map"></img>
        </div>
        <div class="content">
          <h2> Streamlining information about events to collegiate students across the U.S. </h2>
        </div>
        <div class="content">
          <h2> "This website is very swag." - Jammy Wang </h2>
        </div>

        
      </div>

    </div>
  )
}
