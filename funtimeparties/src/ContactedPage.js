import React from "react"
import logo from './firstlogo.jpg';  

export default function ContactedPage() {
  return (
    <div className="App">
        <div className="navbar">
            <span>
                <img src={logo} style={{width:'50px', height:'50px'}} />
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
                <h1 className="contact-header">Contact Us</h1>
                <form class="contact-form" action="/contact">
                <h3 class="question-confirm">We have recieved your question and will reply to you as soon as possible, thank you!</h3>
                <a class="btn btn-secondary" href="/contact">Ask another question</a>
                </form>
            </div>
        </div>
    </div>
  )
}
