function abrirMenu(){
    var menu = document.querySelector("nav");
    menu.style.right="0";

    var escurecer = document.querySelector(".escurecer");
    escurecer.style.display="block";
    escurecer.style.opacity="0.6";
}
function fecharMenu(){
    document.querySelector("nav").style.right="-70%";
    var escurecer = document.querySelector(".escurecer");
    escurecer.style.opacity="0";
    escurecer.style.display="none";
}