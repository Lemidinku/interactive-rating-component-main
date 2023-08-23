let thankyou_card = document.getElementById("thankyou_card")
let rating_card = document.getElementById("rating_card")
let rate_value;

function update_checked(){
    let choices= document.getElementsByClassName("choice")
    for (let i=0; i<choices.length;i++){
        let label= choices[i].querySelector("label")
        let radio = choices[i].querySelector("input")
        if (radio.checked){
            label.classList.add("checked")
            rate_value = radio.value
        }
        else label.classList.remove("checked")
        

}

} 


let radiobuttons = document.getElementsByClassName("radiobuttons")[0]
radiobuttons.addEventListener("click", update_checked)


let submitButton = rating_card.querySelector("button")
submitButton.addEventListener("click", function(){
    if (rate_value!=undefined){
    let ratingDisplay = document.getElementById("selected_value")
    ratingDisplay.innerHTML = rate_value
    rating_card.style.display= "none";
    thankyou_card.style.display = "block";}
})

