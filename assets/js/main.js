// ========= Navbar ===========

// document.addEventListener("DOMContentLoaded", function () {
//     var toggler = document.querySelector(".navbar-toggler");
//     var navbarCollapse = document.querySelector(".navbar-collapse");

//     // toggler.addEventListener("click", function () {
//     //     navbarCollapse.classList.toggle("show");
//     // });

//     document.addEventListener("click", function (event) {
//         var isClickInside = toggler.contains(event.target) || navbarCollapse.contains(event.target);
//         if (!isClickInside) {
//             navbarCollapse.classList.remove("show");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var navbarToggler = document.getElementById("navbar-toggler");
//     var navbarCollapse = document.getElementById("navbarSupportedContent");
//     var hamburgerIcon = document.querySelector(".hamburger-icon");
//     var closeIcon = document.querySelector(".close-icon");

//     navbarToggler.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent the default anchor behavior
//         navbarCollapse.classList.toggle("show");
//         hamburgerIcon.classList.toggle("d-none");
//         closeIcon.classList.toggle("d-none");
//     });

//     document.addEventListener("click", function (event) {
//         var isClickInside = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
//         if (!isClickInside) {
//             navbarCollapse.classList.remove("show");
//             hamburgerIcon.classList.remove("d-none");
//             closeIcon.classList.add("d-none");
//         }
//     });
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// $(document).ready(function () {
//     $(".nav-link").hover(function () {
//         $(".nav-link.selected").removeClass("selected");
//         $(this).addClass("selected");
//     });
// });

// $(document).ready(function () {
//     $(".nav-link").click(function (event) {
//         event.preventDefault();
//         var target = $(this).attr("href");
//         $("html, body").animate({
//             scrollTop: $(target).offset().top
//         }, 800);
//         $(".nav-link.selected").removeClass("selected");
//         $(this).addClass("selected");
//     });
// });

$(document).ready(function () {
    $(".nav-link").click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top - 83 // Adjust according to the height of your fixed header
        }, 800);
        $(".nav-link.selected").removeClass("selected");
        $(this).addClass("selected");
    });

    // Add class to fix header when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 83) { // Adjust according to the height of your header
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });
});
