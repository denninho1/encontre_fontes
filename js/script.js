/*
-------- VIZUALIZAR TEXTO DIGITADO ----------  
*/
const yourText = document.querySelector('.your_text');
const showText = document.querySelectorAll('.show_text');
const showTextBtn = document.querySelector('.show_text_btn');

function seeText () {
    let yourTextValue = yourText.value

    if (yourTextValue === "") {
        showText.forEach(text => {
            text.textContent = "veja seu texto";
        })
    } else {
        showText.forEach(text => {
            text.textContent = yourTextValue;
        })
    }
}

yourText.addEventListener('input', seeText);
showTextBtn.addEventListener('click', seeText);

/* 
--------- EFETIO DE HOVER NOS CARDS ------------
*/
const cards = document.querySelectorAll('.cards .card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(cardBlur => {
            card.style.filter = "blur(0px)";
            card.style.transform = "scale(1.02)";
            cardBlur.style.filter = "blur(.1rem)";
            cardBlur.style.transform = "scale(0.95)";
        })
    }); 

    card.addEventListener('mouseout', () => {
        cards.forEach(cardBlur => {
            card.style.filter = "blur(0px)";
            card.style.transform = "scale(1)";
            cardBlur.style.filter = "blur(0rem)";
            cardBlur.style.transform = "scale(1)";
        })
    });
});

/* 
----------- SEARCH FONTS ----------
*/
const searchInput = document.querySelector('search_input');
const searchBtn = document.querySelector('search_btn');



/* 
----------- SUMIR REDES SOCIAIS ---------------
----------- QUANDO CHEGAR NO FOOTER -----------
*/

const redesSociais = document.querySelector('.social');

window.addEventListener('scroll', () => {
    const documento = document.documentElement;
    const scrollTotal = parseInt((documento.scrollHeight - documento.clientHeight))
    const scroll = window.scrollY

    if (scroll === scrollTotal) {
        redesSociais.classList.add('remove')
    } else {
        redesSociais.classList.remove('remove')
    }

})