/*
-------- VIZUALIZAR TEXTO DIGITADO ----------  
*/
const yourText = document.querySelector('.your_text');
const showText = document.querySelectorAll('.show_text');

yourText.addEventListener('input', () => {
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
});

/* 
--------- EFETIO DE HOVER NOS CARDS ------------
*/
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        cards.forEach(cardBlur => {
            card.style.filter = "blur(0px)";
            card.style.transform = "scale(1.01)";
            cardBlur.style.filter = "blur(.1rem)";
            cardBlur.style.transform = "scale(0.9)";
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


