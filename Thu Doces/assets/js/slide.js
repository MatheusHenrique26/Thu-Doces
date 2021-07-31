const intervalo = 5000;

function slide1(){
    document.getElementById("banner").src = "assets/img/baner1.jpg";
    setTimeout("slide2()", intervalo);
}
function slide2(){
    document.getElementById("banner").src = "assets/img/baner2.jpg";
    setTimeout("slide1()", intervalo);
}
