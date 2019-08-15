let valorInicial = 10;


const $secondary = document.querySelector(".-secondary");

$secondary.addEventListener("click", handleClick);

function handleClick(){
    const $carrinho = document.querySelector(".-last");

    $carrinho.textContent = `Carrinho (${++valorInicial})`;
};