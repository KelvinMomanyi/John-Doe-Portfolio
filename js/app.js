$(document).ready(function(){

    $(window).on('load', function(){
        $('.preloader').addClass('complete')
    })
   const header = document.querySelector("[data-header]")
   const mainSide = document.querySelector("[data-navbar]")
   const overlay = document.querySelector("[data-overlay]")
   let lastScrollPos = 0;

   const hideNav= function(){
    const scrollToPosition = lastScrollPos < window.scrollY
    if(scrollToPosition){
        header.classList.add('hide')
        // mainSide.classList.add('hide')
        mainSide.classList.remove('active')
    }else {
        header.classList.remove('hide')
       
        // mainSide.classList.remove('hide')
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
        strings: ['John Doe', 'a Developer', 'a Designer', 'a Businessman'],
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




