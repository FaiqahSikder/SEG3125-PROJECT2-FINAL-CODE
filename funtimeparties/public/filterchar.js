import React, {StrictMode} from "https://esm.sh/react?dev";
import {createRoot} from "https://esm.sh/react-dom/client?dev";
let URL = document.URL.toLowerCase();
if (URL.endsWith("characters")||URL.endsWith("characters-fr")) {
    const services=document.getElementsByClassName("service");
    const charOptions=document.querySelector(".form-select");
    charOptions.addEventListener("click",function(){
        let selected = charOptions.options[charOptions.selectedIndex].text;
        if (selected=="Princesses" || selected=="Les princesses"){
           [...services].forEach(service=>{
               if (service.classList.contains("princess")) service.classList.remove("hide");
                else (service.classList.add("hide"));
            })
        } else if (selected == "Superheroes" || selected=="Les super-héros") {
            [ ...services ].forEach(service => {
                if (service.classList.contains("princess")) service.classList.add("hide");
                else (service.classList.remove("hide"));
            })
        } else {
            [ ...services ].forEach(service => service.classList.remove("hide"));
        }
    });
} else if (document.URL.toLowerCase().endsWith("book")) {
    const bookForm = document.getElementsByClassName("book-form")[0];
    bookForm.addEventListener('submit', function(e) {
        let checked=false;
        let checkboxes=document.querySelectorAll("[type=checkbox]");
        [...checkboxes].forEach(checkbox=>{
            if (checked) return;
            if (checkbox.checked){
                checked=true;
            }
        })
        bookForm.onSubmit = checked;
        if (!checked) e.preventDefault();
    });

    let percent=0;
    let ProgressPercent=function update(){
    return <span className="progress-percent">{percent}%</span>;
    }
    let ProgressBar=function update(){
    return <progress className="progress-bars" id="file" value={percent} max="100"></progress>;
    }

    const root=createRoot(document.getElementById("root2"));
    
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let dateTime = document.getElementById("date-time");
    let checkboxes = document.querySelectorAll("[type=checkbox]");
    let submitButton=document.querySelector("#submit-button");
    let checkError=document.getElementById("check-error");
    submitButton.onclick=function(){
        if (!checked&&percent==75){
            const serviceContainer = document.getElementsByClassName("character-container")[0];
            serviceContainer.scrollTop = 0;
            checkError.classList.remove("hide");
        }
    }
    let checked = false;
    setInterval(function() {
        percent = 0;
        checked = false;
        if (firstName.checkValidity()) {
            percent += 25;
        }
        if (lastName.checkValidity()) {
            percent += 25;
        }
        if (dateTime.checkValidity()) {
            percent += 25;
        }
        [ ...checkboxes ].forEach(checkbox => {
            if (checked) return;
            if (checkbox.checked) {
                percent += 25;
                checked = true;
            }
        })
        root.render(
        <StrictMode>
            <ProgressPercent />
            <ProgressBar />
        </StrictMode>
        )
    }, 1000);



}

