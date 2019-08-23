const $menu = document.querySelector(".menu-store");
const $navigation = document.querySelector(".navigation");
const $action = $navigation.querySelectorAll(".action");

$menu.addEventListener("click", () => {
    $action.forEach(($action) => {
        $action.classList.toggle("-active");
    })
})