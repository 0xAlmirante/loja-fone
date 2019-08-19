const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".-stars .icon");
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);

// Percorre cada item da node list
$stars.forEach(($star, key) =>{
    if(key == 0){
        $star.addEventListener("click", firstStar);
    }
    
    if( key == positionLast){
        $star.addEventListener("click", lastStar);
    }
    
    if(key > 0 && key < positionLast){
        $star.addEventListener("click", function() {
            middleStar(key);
        });
    }
});

function handleClick(){
    // if($heart.classList.contains("-active")){
    //     $heart.classList.remove("-active");
    // } else{
    //     $heart.classList.add("-active");
    // }
    this.classList.toggle("-active");
    
};

function firstStar(){
    $stars.forEach(($star) => {
        $star.classList.remove("-active");
    });
    
    this.classList.add("-active");
}

function middleStar(index){
    $stars.forEach(($star, key) => {
        $star.classList.remove("-active");

    if(key <= index){
        $star.classList.add("-active");
    }
    });
}

function lastStar(){
    $stars.forEach(($star) => {
        $star.classList.add("-active");
    })
}
