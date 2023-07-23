import React from "react"
import logo from './firstlogo.jpg';  
import calenderIcon from './calenderIcon.jpg';  

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
                <h1 className="contact-header">Book now</h1>
                <strong>Please enter all the required information.</strong>
                <label for="file">Booking progress:</label>
                <div id="root2" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}></div>
                <form className="book-form" action="/book-confirm">
                    <input required className="book-form-input" placeholder="First name" type="text" id="fname" name="fname"  onInvalid={F=>F.target.setCustomValidity("Please enter your first name")} onInput={F=>F.target.setCustomValidity("")} class="contact-form-input"/>
                    <input required className="book-form-input" placeholder="Last name" type="text" id="lname" name="lname"  onInvalid={F=>F.target.setCustomValidity("Please enter your last name")} onInput={F=>F.target.setCustomValidity("")} class="contact-form-input"/>
                    <div className="character-container book-form-input">
                        <div className="book-form-input">
                            <strong>Characters you want to book:</strong>
                        </div>
                            <span className="hide" id="check-error">Please select at least one character</span>
                        <div className="book-form-input">
                            <input type="checkbox" id="Cinderella" name="Cinderella" value="Cinderella"/>
                            <label for="Cinderella">Cinderella</label><br/>
                        </div>
                         <div className="book-form-input">
                            <input type="checkbox" id="Belle" name="Belle" value="Belle"/>
                            <label for="Belle">Belle</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="Aurora" name="Aurora" value="Aurora"/>
                            <label for="Aurora">Aurora</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="Mulan" name="Mulan" value="Mulan"/>
                            <label for="Mulan">Mulan</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="ariel" name="ariel" value="ariel"/>
                            <label for="Ariel">Ariel</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="Jasmine" name="Jasmine" value="Jasmine"/>
                            <label for="Jasmine">Jasmine</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="ariel" name="ariel" value="ariel"/>
                            <label for="Ariel">Ariel</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="spiderman" name="spiderman" value="spiderman"/>
                            <label for="Spiderman">Spiderman</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="Ironman" name="Ironman" value="Ironman"/>
                            <label for="Ironman">Ironman</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="hulk" name="hulk" value="hulk"/>
                            <label for="Hulk">Hulk</label><br/>
                        </div>
                        <div className="book-form-input">
                            <input type="checkbox" id="antman" name="antman" value="antman"/>
                            <label for="Antman">Antman</label><br/>
                        </div>
                    
                    </div>
                    <div style={{display: 'flex'}}>
                    <img src={calenderIcon} style={{width:'30px', height: '30px'}}/>
                    <input type="date" required className="book-form-input" placeholder="Date and time of party" id="date-time"  onInvalid={F=>F.target.setCustomValidity("Please select a date")} onInput={F=>F.target.setCustomValidity("")} class="contact-form-input"/>
                    </div>

                    <input type="submit" value="Submit" id="submit-button"/>
                </form>
            </div>
        </div>
    </div>
  )
}
