//flip cards
function learnMore(button) {
  var flipCard = button.closest(".card");
  flipCard.classList.toggle("active");
  flipCard.querySelector(".flip-box-front").classList.toggle("invisible");
  flipCard.querySelector(".flip-box-back").classList.toggle("invisible");

  // flipCard.querySelector(".flip-box-back").style.backfaceVisibility =
  //   "visible";
}

function goBack(button) {
  var flipCard = button.closest(".card");
  flipCard.classList.toggle("active");
  flipCard.querySelector(".flip-box-back").style.backfaceVisibility = "hidden";
  flipCard.querySelector(".flip-box-front").classList.toggle("hidden");
}
// load-in animations
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function () {
  // get list of child elements inside body
  var elements = document.querySelectorAll("body > *");

  // check if each child element is in the viewport
  elements.forEach(function (element) {
    if (isInViewport(element)) {
      console.log("Element is in the viewport:", element);
      // Add code to make the element visible
      element.classList.add("visible");
    }
  });

  // Additional code can go here after processing elements
});

// Navbar logo & brand pops up from bottom
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("#nav");
  nav.classList.remove("hidden");
  nav.classList.toggle("test-animation3");
});

// Masthead Header text pops up from bottom and About Card slides in
document.querySelector("#nav").addEventListener("animationend", (event) => {
  var header = document.querySelector("#header");
  var emphasis = document.querySelector(".header-emphasis");
  header.classList.remove("hidden");
  header.classList.toggle("fade");

  emphasis.classList.remove("hidden");
  emphasis.classList.toggle("fade");

  if ((header.style.opacity = 1)) {
    about.classList.remove("hidden");
    about.classList.toggle("fadeInUp-animation");
  }
});
