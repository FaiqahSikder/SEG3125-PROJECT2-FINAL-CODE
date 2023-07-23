import React from "react"
import logo from './firstlogo.jpg';  

export default function ReviewedPage() {
  return (
    <div className="App">
        <div className="navbar">
            <span>
                <img src={logo} style={{width:'50px', height:'50px'}} />
                Fun Time Parties
            </span>
            <a className="btn btn-light" href="./">Home</a>
            <a className="btn btn-light" href="./characters">Characters</a>
            <a className="btn btn-light" href="./contact">Contact Us</a>
            <a className="btn btn-light" href="./reviews">Reviews</a>
            <a className="btn btn-light" href="./book">Book Now</a>
        </div>
        <div className="container">
            <div className="content">
                <h1 className="contact-header">Write a Review</h1>
                <form class="contact-form" action="/write-review">
                <h3 class="question-confirm">Thank you for your review!</h3>
                <a class="btn btn-secondary" href="/write-review">Write another review</a>
                </form>
            </div>
        </div>
    </div>
  )
}
