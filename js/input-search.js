const $inputSearch = document.querySelector(".input-search");
// Dentro de input search, seleciona o icon
const $open = $inputSearch.querySelector(".-open");
const $close = document.querySelector(".-close");


$open.addEventListener("click", event => {
    event.preventDefault();
    $inputSearch.classList.add("-active");
    $open.classList.remove("-active");
    $close.classList.add("-active");
});

$close.addEventListener("click", event => {
    event.preventDefault();

    $close.classList.remove("-active");
    $inputSearch.classList.remove("-active");
    $open.classList.add("-active");
})