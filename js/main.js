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

// ACTIVE NAV LINK

const sectionDOMs = document.querySelectorAll("section[id]"); // this selects only sections with id

function showActiveLink() {
    const currentPageYScroll = window.pageYOffset; // pageYOffset is equal to window.scrollY

    sectionDOMs.forEach((currentSection) => {
        const sectionHeight = currentSection.offsetHeight; // offsetHeight is equal to height of an element, including vertical padding and borders
        const sectionTop = currentSection.offsetTop - 48; // offsetTop is the distance of the outer border of the current element relative to the inner border of the top of the offsetParent node.
        const sectionId = currentSection.getAttribute("id");

        // select a link which href attribute contains #sectionId which is the children of .nav__menu
        const currentNavLink = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`);

        // sectionTop + sectionHeight is equal to amount of currentPageYScroll to reach the end of current section
        if (currentPageYScroll > sectionTop && currentPageYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active-link");
        } else {
            currentNavLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", showActiveLink);
