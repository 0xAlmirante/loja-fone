
const $adicionaCarrinho = document.querySelector(".-secondary");

console.log($adicionaCarrinho)

$adicionaCarrinho.addEventListener("click", adicionarCarrinho);

function adicionarCarrinho(){
    const textoCarrinho = document.querySelector(".-last");
    textoCarrinho.innerHTML = "Adicionado";
}