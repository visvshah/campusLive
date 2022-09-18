import React from 'react'
import './landing.css'
import image from "./purdueCampus.png"

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
        <div class="content">
          <h2> Event organizing made easy. </h2>
        </div>
        <div class="contentImage">
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
        <div class="footing">
          <div class="global">
            <div id="spacing"> <p>Authors<br /><br /> <ul>
                    <li><a href="#">Visv Shah</a> </li>
                    <li><a href="#">Adrien Qi</a> </li>
                    <li><a href="#">William Lin</a> </li>
                    <li><a href="#">Jammy Wang</a> </li>
                  </ul></p> 
                  <p>Email<br /><br /> <ul>
                    <li><a href="mailto:Shah802@purdue.edu">Shah802@purdue.edu</a> </li>
                    <li><a href="mailto:Qi124@purdue.edu">Qi124@purdue.edu</a> </li>
                    <li><a href="mailto:Lin1620@purdue.edu">Lin1620@purdue.edu</a> </li>
                    <li><a href="mailto:Wang5466@purdue.edu">Wang5466@purdue.edu</a> </li>
                  </ul></p> 
                  <p>LinkedIn<br /><br /> <ul>
                    <li><a href="https://www.linkedin.com/in/visvshah/">@visvshah</a> </li>
                    <li><a href="https://https://www.linkedin.com/in/aqi/">@aqi</a> </li>
                    <li><a href="https://www.linkedin.com/in/williamlin04">@williamlin04</a> </li>
                    <li><a href="https://www.linkedin.com/in/jammywang/">@jammywang</a> </li>
                  </ul></p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
