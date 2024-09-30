
//Función del botón hamburguesa
document.getElementById("nav-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".header__nav--list").classList.add("is-active");
  document.querySelector(".close").classList.add("is-active-btn-close");
});
document.getElementById("nav-close").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector(".header__nav--list").classList.remove("is-active")
  document.querySelector(".close").classList.remove("is-active-btn-close");
})

//Cambiar la posición del header cuando se haga scroll
const header = document.querySelector('.container__header');
const stickyClass = 'sticky'; 

if (window.matchMedia("(max-width: 768px)").matches) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) { 
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass); 
    }
  });
  
}


//Swiper Hygiene

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 769px
    768: {
      slidesPerView: 3,
    }
  }

});

/* Swiper promotions */

