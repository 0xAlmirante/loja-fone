
const $heart = document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick(){

    // if($heart.classList.contains("-active")){
    //     $heart.classList.remove("-active");
    // } else{
    //     $heart.classList.add("-active");
    // }

    $heart.classList.toggle("-active");

};

const $stars = document.querySelectorAll(".-stars .icon");

// Percorre cada item da node list
$stars.forEach( (star, index) =>{
    star.addEventListener("click", () => {
        handleStar(index);
    })
})

function handleStar(index){
    const tamanho = $stars.length - 1;
    if($stars[index].classList.contains("-active")){
        for(let i = tamanho; i > index; i--){
            $stars[i].classList.remove("-active");
        }
    } else {
        for(let i = 0; i <= index; i++){
            $stars[i].classList.add("-active");
        }
    }
    
}

