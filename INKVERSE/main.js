// /*==================SEARCH===========*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

/*=================Search SHOW========*/
/*validate if constant exists*/
if(searchButton){
    searchButton.addEventListener('click',()=>{
        searchContent.classList.add('show-search')
    })
}

/*====search HIDDEN=====*/
/*validate if constant exists*/
if(searchClose){
    searchClose.addEventListener('click',()=>{
       searchContent.classList.remove('show-search');
    })
}
  
// //////////LOGIN////////
// /*==================SEARCH===========*/
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');
const loginContent = document.getElementById('login-content');

/*====LOGIN SHOW====*/
/*validate if constant exists*/
if(loginButton){
    loginButton.addEventListener('click',()=>{
        loginContent.classList.add('show-login')
    })
}

/*====search HIDDEN=====*/
/*validate if constant exists*/
if(loginClose){
    loginClose.addEventListener('click',()=>{
       loginContent.classList.remove('show-login');
    })
}
//swiper home///
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      1220: {
        spaceBetween: -32,
      }
    }
  });


// / *==FEATURED SWIPER ===*/
let swiperFeatured = new Swiper('.featured__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  breakpoints: {
  1150:{
  slidesPerView: 4,
  centeredSlides: false,
  }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

 /*====NEW SWIPER ====*/
let swipernew = new Swiper('.new__swiper', {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    1220: {
      spaceBetween: 32,
    }
  }
});
//show scroll up
// const scrollUp =()=>{
//   const scrollUp =document.getElementById('scroll-up');
//   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//   :scrollUp.classList.remove('show-scroll')
// }
// window.addEventListener('scroll',scrollUp);


// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme and icon (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Function to get the current icon
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply previously selected theme and icon
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Toggle theme and icon on button click
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // Save the current theme and icon in localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
// Toggle theme and icon on button click
themeButton.addEventListener('click', toggleTheme);