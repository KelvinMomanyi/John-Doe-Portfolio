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
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
           $('.sticky').addClass("stickyadd");
           hideNav();
        }else{
            $('.sticky').removeClass("stickyadd")
            
        }
    })

    var typed = new Typed(".element", {
        strings: ['John Doe', 'a Developer', 'a Designer', 'a Photographer'],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    })


    //progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function(direction) {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute('style', "width:100%;transition:1s all");
            p[1].setAttribute('style', "width:95%;transition:1.5s all");
            p[2].setAttribute('style', "width:85%;transition:1.7s all");
            p[3].setAttribute('style', "width:99%;transition:2s all");
        },
        offset:"80%"
      })

   //owl carousel
   $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1
   });


  


  var filterizd = $('.filter-container').filterizr({
    animationDuration:.5,
   })

})

const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i< len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}


/**NAVBAR */
const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function(){
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
   console.log("nav")
}

addEventOnElements(navTogglers, "click", toggleNavbar)


/**CLIENTS */
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel li");
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 80; // Include gap (80px)
    const visibleItems = Math.ceil(document.querySelector(".carousel-wrapper").offsetWidth / itemWidth);
    const resetPosition = -itemWidth * totalItems / 2; // Halfway through the list
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
