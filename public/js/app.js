$(document).ready(function(){

        setTimeout(function() {
            $('.preloader').addClass('complete');
        }, 1500);

   const header = document.querySelector("[data-header]")
   const mainSide = document.querySelector("[data-navbar]")
   const overlay = document.querySelector("[data-overlay]")
   let lastScrollPos = 0;

   const hideNav= function(){
    const scrollToPosition = lastScrollPos < window.scrollY
    if(scrollToPosition){
        header.classList.add('hide')
      
        mainSide.classList.remove('active')
    }else {
        header.classList.remove('hide')
       
      
    }
    
    lastScrollPos = window.scrollY
   }

    
    let timer;
    $(window).on('scroll', function () {
       clearTimeout(timer);
        timer = setTimeout(() => {
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
               $('.sticky').addClass("stickyadd");
               hideNav();
           } else {
               $('.sticky').removeClass("stickyadd");
           }
        }, 100); // Adjust timeout as needed
     });

    var typedElement = document.querySelector(".element"); // Check if the element exists

    if (typedElement) {
        var typed = new Typed(".element", {
            strings: ['John Doe', 'a Developer', 'a Designer', 'a Photographer'],
            smartBackspace: true,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            loopCount: Infinity,
            startDelay: 1000
        });
    }


    //progress bars

    var expElement = document.getElementById("exp-id");

    if (expElement) {
        var waypoint = new Waypoint({
            element: expElement,
            handler: function (direction) {
                var p = document.querySelectorAll(".progress-bar");

                if (p.length >= 4) { // Ensure at least 4 progress bars exist
                    p[0].style.width = "100%";
                    p[0].style.transition = "1s all";
                    
                    p[1].style.width = "95%";
                    p[1].style.transition = "1.5s all";
                    
                    p[2].style.width = "85%";
                    p[2].style.transition = "1.7s all";
                    
                    p[3].style.width = "99%";
                    p[3].style.transition = "2s all";
                }
            },
            offset: "80%",
        });
    }

   //owl carousel
   $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1
   });


  
//  var filterizd = document.querySelector(".filter-container");
 
//    if (filterizd) {
//      $(".filter-container").filterizr({
//         animationDuration: 0.5, // Adjust as needed
//      });
//     }
})



$(document).ready(function () {
    let isFilterInitialized = false;

    function initFilter() {
        if (!isFilterInitialized && $(".filter-container").length) {
            $(".filter-container").filterizr({
                animationDuration: 0.5, // Adjust as needed
            });
            isFilterInitialized = true;
        }
    }

    $(".r-btn").on("click", function () {
        initFilter();
    });
});



const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i< len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}


/**NAVBAR */
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const sidebarLinks = document.querySelectorAll(".sidebar-item a");


const toggleNavbar = function(){
    navbar.classList.toggle("active")
   
}

addEventOnElements(navTogglers, "click", toggleNavbar)


// Attach event listener to navbar toggler buttons
navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNavbar);
});

// Attach event listener to each sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active"); // Hide navbar
        
    });
});


/**CLIENTS */

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const wrapper = document.querySelector(".carousel-wrapper");
    const items = document.querySelectorAll(".carousel li");

    if (!carousel || !wrapper || items.length === 0) {
        return; // Exit script if elements are missing
    }

    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 80; // Include gap (80px)
    const visibleItems = Math.ceil(wrapper.offsetWidth / itemWidth);
    const resetPosition = (-itemWidth * totalItems) / 2; // Halfway through the list
    let scrollPosition = 0;

    function moveCarousel() {
        scrollPosition -= 1; // Move left 1px at a time
        carousel.style.transform = `translateX(${scrollPosition}px)`;

        // Reset position when we reach the end of the duplicated list
        if (scrollPosition <= resetPosition) {
            scrollPosition = 0;
            carousel.style.transition = "none"; // Disable transition for instant reset
            carousel.style.transform = `translateX(${scrollPosition}px)`;

            // Re-enable smooth transition
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s linear";
            });
        }

        requestAnimationFrame(moveCarousel); // Continue the animation
    }

    // Start the animation
    moveCarousel();
});



function showMessage(event) {
    event.preventDefault(); // Prevent form from submitting

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Show success message

    // Hide the message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

    // Optionally clear form fields
    document.getElementById("contactForm").reset();
  }
