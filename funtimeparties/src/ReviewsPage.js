import React from "react"
import logo from './firstlogo.jpg';
import review1 from './reviews1.jpg';
import review2 from './review2.jpg';
import review3 from './review4.jpg';

export default function ReviewsPage() {
  return (
    <div className="App">
        <div aria-label="Navigation bar"role="navigation" className="navbar"> 
                <span>
                     <img src={logo} style={{width:'50px', height: '50px'}} />
                    Fun Time Parties
                   
                </span>
                
                <a aria-label="Goes to homepage"role="homepage" className="btn btn-light" href="./">Home</a>
                <a aria-label="Goes to characters"role="characters-page" className="btn btn-light" href="./characters">Characters</a>
                <a aria-label="Goes to contact-us"role="contact-page" className="btn btn-light" href="./contact">Contact Us</a>
                <a aria-label="Goes to reviews"role="reviews-page" className="btn btn-light" href="./reviews">Reviews</a>
                <a aria-label="Goes to booking"role="booking-page" className="btn btn-light" href="./book">Book Now</a>
                <a  aria-label="Goes to French option"role="french-option-button" className="btn btn-info" href="./characters-fr">FR</a>
            </div>
            <div class="container">
    <div class="content">
      <h1 class="contact-header">Reviews</h1>
      <div class="review-container">
        <a class="btn btn-secondary" href="write-review">Write a review</a>
        <div class="row">
          <div class="review">
          <h5>Layla</h5><strong>Number of stars: *****</strong>
          <p>I used their services for my grand daughter's 3rd birthday, and let me just say it was spectacular!! We hired all the princesses, it was magical! The princesses were so sweet with the kids.</p>
           <img class="review-image" src={review1}/>
          </div>
          <div class="review">
          <h5>Jason</h5><strong>Number of stars: ****</strong>
          <p>I am super impressed with Fun Time Parties! They helped us make our son's 6th birthday amazing and super fun!</p>
          <img class="review-image" src={review2}/></div>
          <div class="review">
          <h5>Maya</h5><strong>Number of stars: *****</strong>
          <p>Amazing service! 10/10!! They were very kind and professional</p>
          <img class="review-image" src={review3}/></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}