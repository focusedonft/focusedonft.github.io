let hamburger = document.getElementById("hamburger-menu");
let navElement = document.getElementsByTagName("nav")[0];
let dropdown = document.querySelector("nav ul li:nth-child(3) ol");
let triggerForClosing = document.querySelector("nav ul:not(ol)");

hamburger.addEventListener("click", () => {
  if (navElement.style.visibility === "hidden") {
    navElement.style.visibility = "visible";
    dropdown.style.display = "visible";
  } else {
    navElement.style.visibility = "hidden";
    dropdown.style.display = "hidden";
  }
});

triggerForClosing.addEventListener("click", () => {
  navElement.style.visibility = "hidden";
});
// -----------------------------

// SCRIPT FOR SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4500); // Change image every 4.5 seconds
}
// ETH - DOLL CONVERSION API
var eth = document.getElementById("ethereumPrice");

var liveprice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  eth.innerHTML = response.ethereum.usd + " USD";
});

// SCRIPT FOR COMING SOON COLLECTIONS

let card = document.querySelectorAll(".categoriesWrapper div");
let cardText = document.querySelectorAll(".categoriesWrapper div h4");

for (let i = 0; i < cardText.length; i++) {
  if (cardText[i].textContent === "Coming Soon") {
    card[i].style.filter = "opacity(0.5)";
    card[i].style.pointerEvents = "None";
  }
  // TODO: Add a pop up message when the user clicks on the card
  // card[i].addEventListener("click", () => {
  //   if (cardText[i].textContent === "Coming Soon") {
  //     console.log("This collection is not available yet");
  //   }
  // });
}
