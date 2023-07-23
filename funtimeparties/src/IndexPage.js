import React from "react"
import logo from './firstlogo.jpg';
import locationIcon from './locationIcon.png';
import {Link, BrowserRouter} from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="App">
      <div className="navbar">
        <span>
          <img src={logo} style={{width: 50+'px', height: 50+'px'}} />
          Fun Time Parties
        </span>
        <a aria-label="Goes to homepage"role="homepage" className="btn btn-light" href="./">Home</a>
                <a aria-label="Goes to characters"role="characters-page" className="btn btn-light" href="./characters">Characters</a>
                 <a aria-label="Goes to contact-us"role="contact-page" className="btn btn-light" href="./contact">Contact Us</a>
                 <a aria-label="Goes to reviews"role="reviews-page" className="btn btn-light" href="./reviews">Reviews</a>
                 <a aria-label="Goes to booking"role="booking-page" className="btn btn-light" href="./book">Book Now</a>
      </div>
      <div className="container">
        <div className="content">
          <h1 className="contact-header">Fun Time Parties</h1>
          <img src={logo} alt="Logo"/>
          <a className="btn btn-light" href="./book">Book Now</a>
          <p>
            We are a local party entertainment company, comitted to bringing children happiness! We offer a variety of different characters for all types of parties! 
          </p>
          <div className="info-container-container">
            <div className="info-container">
              <div className="main-info">
                <div className="location"> 
                  <img src={locationIcon} style={{width: 30+'px', height: 30+'px'}} />
                  <h2>Location</h2>
                </div>
                <span>999 LaBlanche Way, Ottawa, K8Z 1B9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="./main.js"></script>
    </div>
  )
}
