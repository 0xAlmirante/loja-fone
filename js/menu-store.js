const $menu = document.querySelector(".-menu");
const $list = document.querySelector(".list");

$menu.addEventListener("click", () => {
    $list.classList.toggle("-active");
    $menu.classList.toggle("-active");
})