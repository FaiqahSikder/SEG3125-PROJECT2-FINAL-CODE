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
                
                 <a aria-label="Goes to homepage"role="homepage" className="btn btn-light" href="./">Page d'accueil</a>
                <a aria-label="Goes to characters"role="characters-page" className="btn btn-light" href="./characters-fr">Nos Personnages</a>
                 <a aria-label="Goes to contact-us"role="contact-page" className="btn btn-light" href="./contact">Contactez-Nous</a>
                 <a aria-label="Goes to reviews"role="reviews-page" className="btn btn-light" href="./reviews">Commentaires</a>
                 <a aria-label="Goes to booking"role="booking-page" className="btn btn-light" href="./book">Reserve maintenant</a>
                   <a  aria-label="Goes to French option"role="french-option-button" className="btn btn-info" href="./characters">EN</a>
            </div>
            <div className="container">
            <div className="content">
                <h1 className="contact-header">Nos personnages</h1>
                <div className="search-character">
                    <select role="select-character-filter"className="form-select" aria-label="Default select example">
                        <option value>Tous les personnages</option>
                        <option value="2">Les princesses</option>
                        <option value="3">Les super-héros</option>
                    </select>
                </div>
                <div aria-label="Displays character list"role="characters-list"className="service-container">
                     <div className="service princess">
                         <h2>Cendrillon</h2>
                         <img className="characters-image" alt="A woman wearing a Cinderella costume while smiling" src={cinderella}/>
                         <p> Cendrillon est un favori classique! Elle est très appréciée des enfants de tous âges! Les personnes qui ont réservé Cendrillon suggèrent également de réserver Belle et Spiderman.</p>
                         <p> Statistiques : 8 clients sur 10 réservent Cendrillon. Note moyenne par étoiles : 5 </p>
                     </div>
                     <div className="service princess">
                         <h2>Belle</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Belle costume while smiling" src={belle}/>
                         <p> Belle viendra apporter du chant et d'amusement à vos soirées! Elle est très bonne avec les enfants! Les personnes qui ont réservé Belle suggèrent également de réserver Iron man. </p>
                         <p> Statistiques : 7 clients sur 10 réservent Belle. Note moyenne : 4.5</p>
                     </div>
                     <div className="service princess">
                         <h2>Aurora</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Aurora costume while smiling" src={aurora}/>
                         <p> La belle Aurora charmera tout le monde à la fête! Elle apporte rire et joie partout où elle va! Les personnes qui ont réservé Aurora suggèrent également de réserver Jasmine et Cendrillon.</p>
                         <p> Statistiques : 5 clients sur 10 réservent Aurora. Note moyenne par étoiles : 3 </p>
                     </div>
                       <div className="service princess">
                         <h2>Jasmine</h2>
                         <img className="characters-image" alt="A woman wearing a Princess Jasmine costume while smiling" src={jasmine}/>
                         <p> Le magnifique Jasmine laissera tout le monde en admiration! Elle fera en sorte que les enfants se sentent comme des princesses! Les personnes qui ont réservé Jasmine suggèrent également de réserver Belle et Aurora. </p>
                         <p>Statistiques : 6 clients sur 10 réservent Jasmine. Note moyenne par étoiles : 4</p>
                     </div>
                       <div className="service princess">
                         <h2>Ariel</h2>
                        <img className="characters-image" alt="A woman wearing a Jasmine costume while smiling" src={ariel}/>
                        <p> Ariel fera danser tout le monde! Sa voix chantante donnera envie à tout le monde de danser! Les personnes qui ont réservé Ariel suggèrent également de réserver Cendrillon.</p>
                        <p> Statistiques : 7 clients sur 10 réservent Ariel. Note moyenne par étoiles : 5 </p>
                     </div>
                        <div className="service">
                         <h2>Spiderman</h2>
                        <img className="characters-image" alt="A man wearing a Spiderman costume while posing" src={spiderman}/>
                        <p> Spiderman est définitivement un favori! Il gardera tous les enfants heureux et divertis tout au long de la fête! Les personnes qui ont réservé Spiderman suggèrent également de réserver Cendrillon</p>
                        <p> Statistiques : 9 clients sur 10 réservent Spiderman. Note moyenne par étoiles : 5 </p>
                     </div>
                     <div className="service">
                         <h2>Ironman</h2>
                        <img className="characters-image" alt="A man wearing an Ironman costume while posing" src={ironman}/>
                        <p> Ironman est ici pour divertir tous les enfants! Il fera rire tous les enfants sans arrêt! Les personnes qui ont réservé Ironman suggèrent également de réserver Spiderman </p>
                        <p> Statistiques : 8/10 clients réservent Ironman. Note moyenne par étoiles : 5 </p>
                     </div>
                     <div className="service">
                         <h2>Hulk</h2>
                        <img className="characters-image" alt="A man wearing a Hulk costume while posing" src={hulk}/>
                        <p> Hulk est ici pour sauver la fête! Les enfants n'arrêtent pas de parler de lui! Les personnes qui ont réservé Hulk suggèrent également de réserver Antman et Spiderman</p>
                        <p> Statistiques : 7/10 clients réservent Hulk. Note moyenne par étoiles : 4.5 </p>
                     </div>
                     <div className="service">
                         <h2>Antman</h2>
                        <img className="characters-image" alt="A man wearing an Antman costume while posing" src={antman}/>
                        <p> Antman fera hurler de joie tous les enfants! Ses tours et blagues rendront la fête super amusante! Les personnes qui ont réservé Antman suggèrent également de réserver Ironman et Hulk</p>
                        <p> Statistiques : 5 clients sur 10 réservent Antman. Note moyenne par étoiles : 3 </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}