document.querySelector("button").addEventListener("click", function(){
    toss()
})


function toss(){
    var randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber == 1) {
        document.querySelector("img").setAttribute("src", "images/head.png");
        document.querySelector("h3").innerHTML = "Head";
    }
    else{
        document.querySelector("img").setAttribute("src", "images/tail.png");
        document.querySelector("h3").innerHTML = "Tail";
    }
}
