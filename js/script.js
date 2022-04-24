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


