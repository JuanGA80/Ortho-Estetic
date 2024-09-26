
//Función del botón hamburguesa
document.getElementById("nav-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".header__nav--list").classList.toggle("is-active");
});

//Cambiar la posición del header cuando se haga scroll
const header = document.querySelector('.container__header');
const stickyClass = 'sticky'; 

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) { 
    header.classList.add(stickyClass);  'sticky'
  } else {
    header.classList.remove(stickyClass); 
  }
});

//Swiper JS

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
    }
  }

  
});