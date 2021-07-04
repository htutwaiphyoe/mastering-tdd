// Menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show Menu when toggle button is clicked
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// hide menu when close button is clicked
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// hide menu when each link is clicked
const navLinks = document.querySelectorAll(".nav__link");

function removeMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLinks.forEach((navLink) => navLink.addEventListener("click", removeMenu));

// change header background when scroll
function changeHeaderBackground() {
    const header = document.getElementById("header");
    if (this.scrollY >= 100) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", changeHeaderBackground);

// swiper js
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});

// video
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function changeVideoState() {
    if (videoFile.paused) {
        // play video
        videoFile.play();

        // change play icon to pause icon
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
    } else {
        // pause icon
        videoFile.pause();

        //change pause icon to play icon
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
    }
}

videoButton.addEventListener("click", changeVideoState);

function endVideo() {
    // change pause icon to play icon when video is ended
    videoIcon.classList.remove("ri-pause-line");
    videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", endVideo);

// Scroll Up
function scrollUp() {
    const scrollUpButton = document.getElementById("scrollup");
    if (this.scrollY > 500) {
        scrollUpButton.classList.add("show-scrollup");
    } else {
        scrollUpButton.classList.remove("show-scrollup");
    }
}

window.addEventListener("scroll", scrollUp);
