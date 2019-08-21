const $search = document.querySelector(".search");
const $searchBox = document.querySelector("[type=search]");
const $close = document.querySelector(".close");

$search.addEventListener("click", () => {
    $searchBox.classList.toggle("-active");
    $search.classList.toggle("-active");

    if($search.classList.contains("-active")){
        $close.classList.add("-active");
    } else{
        $close.classList.remove("-active");
    }
});

$close.addEventListener("click", () => {
    $searchBox.classList.remove("-active");
    $search.classList.remove("-active");
    $close.classList.remove("-active");
})