/*
-------- VIZUALIZAR TEXTO DIGITADO ----------  
*/
const yourText = document.querySelector(".your_text");
const showText = document.querySelectorAll(".show_text");
const showTextBtn = document.querySelector(".show_text_btn");

function seeText() {
  let yourTextValue = yourText.value;

  if (yourTextValue === "") {
    showText.forEach((text) => {
      text.textContent = "veja seu texto";
    });
  } else {
    showText.forEach((text) => {
      text.textContent = yourTextValue;
    });
  }
}

yourText.addEventListener("input", seeText);
showTextBtn.addEventListener("click", seeText);

/* 
--------- EFETIO DE HOVER NOS CARDS ------------
*/
const cards = document.querySelectorAll(".cards .card");
const telaMonitor = window.innerWidth;

if (telaMonitor >= 991) {
  cards.forEach((card, index) => {
    card.addEventListener("mouseover", () => {hoverOn(card)});
    card.addEventListener("mouseout", () => {hoverOff(card)});
  });
}

const hoverOn = (card) => {
  cards.forEach(el => {
    card.style.filter = "blur(0px)";
    card.style.transform = "scale(1.02)";
    el.style.filter = "blur(.1rem)";
    el.style.transform = "scale(0.95)";
  })
}

const hoverOff = (card) => {
  cards.forEach(el => {
    card.style.filter = "blur(0px)";
    card.style.transform = "scale(1)";
    el.style.filter = "blur(0rem)";
    el.style.transform = "scale(1)";
  })
}

/* 
----------- FILTRAR AS FONTS QUE ESTÃO SENDO PROCURADAS ----------
*/
const searchInput = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const nameFont = document.querySelector(".name_font");
let searchValue = searchInput.value;

function filtrar() {}

searchInput.addEventListener("keyup", () => {});
searchBtn.addEventListener("click", () => {});

/* 
----------- SUMIR REDES SOCIAIS ---------------
----------- QUANDO CHEGAR NO FOOTER -----------
*/
const redesSociais = document.querySelector(".social");

window.addEventListener("scroll", () => {
  const documento = document.documentElement;
  const scrollTotal = parseInt(documento.scrollHeight - documento.clientHeight);
  const scroll = window.scrollY;

  if (scroll === scrollTotal) {
    redesSociais.classList.add("remove");
  } else {
    redesSociais.classList.remove("remove");
  }
});

/* 
------------- VER MAIS FONTS / BOTÃO READ MORE ------------
*/
const readMore = document.querySelector(".read_more .btn");

function verMais() {}

readMore.addEventListener("click", verMais());
