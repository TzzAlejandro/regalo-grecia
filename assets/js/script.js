'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }

// Función para calcular los años y días desde una fecha específica
function calcularTiempo(desdeFecha) {
  let fechaCreacion = new Date(desdeFecha);
  let fechaActual = new Date();
  let diferencia = fechaActual.getTime() - fechaCreacion.getTime();
  let years = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  let diasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  return {
      years: years,
      dias: diasRestantes
  };
}

// Función para mostrar los años y días en los elementos correspondientes
function mostrarTiempo() {
  let fechaCreacion = '2021-11-05'; // Coloca la fecha de creación de tu sitio web en el formato 'YYYY-MM-DD'
  let tiempoTranscurrido = calcularTiempo(fechaCreacion);
  document.getElementById('yearsTranscurridos').textContent = tiempoTranscurrido.years;
  document.getElementById('diasTranscurridos').textContent = tiempoTranscurrido.dias;
}

window.onload = function() {
  mostrarTiempo();
  mensajeAleatorio()
};

const mensajes = [
  "Eres la luz que ilumina mi vida.",
  "Tu sonrisa es mi razón de ser feliz.",
  "Cada día a tu lado es un regalo.",
  "Eres el sueño que nunca quiero despertar.",
  "No hay distancia que pueda separarnos.",
  "Tus abrazos son mi refugio.",
  "Eres mi inspiración constante.",
  "Eres la pieza que le faltaba a mi rompecabezas.",
  "Amar a alguien como tú es un privilegio.",
  "Tu amor me hace sentir completo.",
  "Eres el sol que ilumina mis días oscuros.",
  "Siempre pienso en ti, incluso en mis sueños.",
  "Eres la melodía que alegra mi corazón.",
  "Eres mi confidente y mi mejor amiga.",
  "Cada segundo a tu lado es un tesoro.",
  "Eres el motivo de mi felicidad.",
  "El mundo es un lugar mejor con tu amor.",
  "Eres mi razón para levantarme cada mañana.",
  "En tus brazos encuentro paz y tranquilidad.",
  "Eres el mejor regalo que la vida me ha dado.",
  "Eres mi compañera de aventuras.",
  "Tu amor es el motor que impulsa mi vida.",
  "Eres la dueña de mi corazón.",
  "Contigo, el amor es infinito.",
  "Eres la respuesta a todas mis oraciones.",
  "Eres la razón por la que sonrío todos los días.",
  "Tu amor es el combustible que alimenta mi alma.",
  "Eres la persona con la que quiero envejecer.",
  "Amar a alguien como tú es un sueño hecho realidad.",
  "Eres la musa de mi inspiración.",
  "Eres el amor de mi vida, hoy y siempre."
]

function mensajeAleatorio() {
  let mensaje = Math.floor(Math.random() * mensajes.length);
  document.getElementById('mensaje').textContent = mensajes[mensaje];
  return
}