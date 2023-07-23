import React from "react"
import logo from './firstlogo.jpg';
import cinderella from './cinderella.jpg';
import belle from './belle (2).jpg';
import aurora from './aurora.jpg';
import jasmine from './jasmine.jpg';
import ariel from './ariel (2).jpg';
import spiderman from './spiderman.jpg';
import ironman from './ironman.jpg';
import antman from './antman.jpg';
import hulk from './hulk.jpg';
import locationIcon from './locationIcon.png';
import {Link, BrowserRouter} from "react-router-dom";

export default function CharactersPage() {
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
            <div className="container">
            <div className="content">
                <h1 className="contact-header">Our Characters</h1>
                <div className="search-character">
                    <select role="select-character-filter"className="form-select" aria-label="Default select example">
                        <option value>All</option>
                        <option value="2">Princesses</option>
                        <option value="3">Superheroes</option>
                    </select>
                </div>
                <div aria-label="Displays character list"role="characters-list"className="service-container">
                     <div className="service princess">
                         <h2>Cinderella</h2>
                         <img className="characters-image" alt="A woman wearing a Cinderella costume while smiling" src={cinderella}/>
                         <p> Lovely Cinderella is a classic fan favourite! She is very loved by children of all ages! People who have booked Cinderella also suggest booking Belle and Spiderman.</p>
                         <p> Statistics: 8/10 customers book Cinderella. Average star rating: 5 </p>
                     </div>
                     <div className="service princess">
                         <h2>Belle</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Belle costume while smiling" src={belle}/>
                         <p> Sweet Belle will come bring singing and fun to your parties! She is very good with children! People who have booked Belle also suggest booking Iron man. </p>
                         <p> Statistics: 7/10 customers book Belle. Average star rating: 4.5 </p>
                     </div>
                     <div className="service princess">
                         <h2>Aurora</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Aurora costume while smiling" src={aurora}/>
                         <p> Beautiful Aurora will charm everyone at the party! She brings laughter and joy everywhere she goes! People who have booked Aurora also suggest booking Jasmine and Cinderella</p>
                         <p> Statistics: 5/10 customers book Aurora. Average star rating: 3</p>
                     </div>
                       <div className="service princess">
                         <h2>Jasmine</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Jasmine costume while smiling" src={jasmine}/>
                         <p> Stunning Jasmine will leave everyone in awe! She'll make the children feel like princesses! People who have booked Jasmine also suggest booking Belle and Aurora. </p>
                         <p> Statistics: 6/10 customers book Jasmine. Average star rating: 4 </p>
                     </div>
                       <div className="service princess">
                         <h2>Ariel</h2>
                        <img className="characters-image" alt="A woman wearing a Jasmine costume while smiling" src={ariel}/>
                        <p> Dazzling Ariel will keep everyong dancing! Her singing voice will make everyone want to dance! People who have booked Ariel also suggest booking Cinderella </p>
                        <p> Statistics: 7/10 customers book Ariel. Average star rating: 5 </p>
                     </div>
                        <div className="service">
                         <h2>Spiderman</h2>
                        <img className="characters-image" alt="A man wearing a Spiderman costume while posing" src={spiderman}/>
                        <p> Amazing Spiderman is definitely a fan favourite! He'll keep all the children happy and entertained throughout the whole party! People who have booked Spiderman also suggest booking Cinderella </p>
                        <p> Statistics: 9/10 customers book Spiderman. Average star rating: 5 </p>
                     </div>
                     <div className="service">
                         <h2>Ironman</h2>
                        <img className="characters-image" alt="A man wearing an Ironman costume while posing" src={ironman}/>
                        <p> Extraordinary Ironman is here to entertain all children! He will keep all the children laughing nonstop! People who have booked Ironman also suggest booking Spiderman </p>
                        <p> Statistics: 8/10 customers book Ironman. Average star rating: 5 </p>
                     </div>
                     <div className="service">
                         <h2>Hulk</h2>
                        <img className="characters-image" alt="A man wearing a Hulk costume while posing" src={hulk}/>
                        <p> Smashing Hulk is here to save the party! The children won't stop talking about him! People who have booked Hulk also suggest booking Antman and Spiderman</p>
                        <p> Statistics: 7/10 customers book Hulk. Average star rating: 4.5 </p>
                     </div>
                     <div className="service">
                         <h2>Antman</h2>
                        <img className="characters-image" alt="A man wearing an Antman costume while posing" src={antman}/>
                        <p> Daring Antman will make all the children yell in joy! His tricks and jokes will make the party super fun! People who have booked Antman also suggest booking Ironman and Hulk</p>
                        <p> Statistics: 5/10 customers book Antman. Average star rating: 3 </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}