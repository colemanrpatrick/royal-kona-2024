 //to do: incorperate this parameter into cartData (see sealifeparkluau.com for example)
let highlightData = {}
 
const securityImgSrc = "images/shieldlock.svg";

let checkoutButtonA = document.getElementById("browse-luaus");
let checkoutButtonB = document.getElementById("general-reservation");

checkoutButtonA.onclick = () => {
     setDatepickerKey();
     setReservationWindow();
}  
checkoutButtonB.onclick = () => {
     setDatepickerKey();
     setReservationWindow();
};
