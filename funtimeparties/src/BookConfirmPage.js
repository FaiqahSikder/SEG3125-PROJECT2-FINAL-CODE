import React from "react"
import logo from './firstlogo.jpg';    

export default function BookPage() {
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
            <h1 className="contact-header">Booking confirmed</h1>
                <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', height: '30px', alignItems:'center'}}>
                <strong style={{margin:'30px'}}>
                        Thank you for showing interest in Fun Time Parties! You will receive a confirmation email containing all the important details.
                    </strong>
                    <a style={{width: '200px'}} class="btn btn-secondary" href="/book">Book another character</a>
                </div>
                    
            </div>
        </div>
    </div>
  )
}
