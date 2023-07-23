import React from "react"
import logo from './firstlogo.jpg';  

export default function ContactPage() {
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
                <form className="contact-form" action="/contacted">
            <input required onInvalid={F=>F.target.setCustomValidity("Please enter your name")} onInput={F=>F.target.setCustomValidity("")}className="contact-form-input" placeholder="Full name:" type="text" id="name" name="name"/><br />
            <input required onInvalid={F=>F.target.setCustomValidity("Please enter your email")} onInput={F=>F.target.setCustomValidity("")} className="contact-form-input" placeholder="Email address:" type="text"/><br /><br />
            <div className="your-questions-container">
                    <textarea required onInvalid={F=>F.target.setCustomValidity("Please enter your question(s)")} onInput={F=>F.target.setCustomValidity("")} placeholder="Your question(s):" type="text"></textarea>
            </div><br /><br />
            <input type="submit" value="Submit" />
        </form>
            </div>
        </div>
    </div>
  )
}
