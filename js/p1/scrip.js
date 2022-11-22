function moverPosicionRandom(element){
    element.style.position = "absolute";
    element.style.top = Math.random() * (window.innerHeight - element.offsetHeight) + "px";
    element.style.left = Math.random() * (window.innerWidth - element.offsetWidth) + "px";
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let modOn = document.getElementsByClassName("mod_On")[0];


btnNo.addEventListener('mouseenter', function(e){
    moverPosicionRandom(e.target)
})


btnSi.addEventListener('click', function(e){
    alert("XD");

    modOn.style.display = "block";
    const music = new Audio('')
    music.play();

})
