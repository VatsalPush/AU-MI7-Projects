

// ^ =============== SHOW MENU ===============
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ^ ======= SHOW MENU =========
/* Validate if constant exist */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}


// ^ ======= SHOW HIDDEN =========
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ^ =============== REMOVE MENU MOBILE ===============
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ^=============== CHANGE BACKGROUND HEADER ===============
function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scollY >= 50) header.classList.add('scroll-header');
    else header .classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ^=============== POPULAR SWIPER ===============
let swiperPopular = new Swiper(".popular__container",{
    loop:true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        345: {
            slidesPerView: 2,
          },


        640: {
            slidesPerView: 2,
          },

        768: {
          slidesPerView: 3,
        },

        1024: {
            slidesPerView: 4,
          spaceBetween: 48,
        },
      },
});

// ^============== MIXITUP FILTER FEATURED ===============
let mixerFeatured = mixitup('.featured__content', {
    selectors:{
        target:'.featured__card'
    },
    animation:{
        duration:300
    }
});

// ^ Link active featured 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');

    else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/