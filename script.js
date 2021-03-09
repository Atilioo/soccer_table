var sanduiche = document.querySelector(".sanduiche");
var banner = document.querySelectorAll(".banner")
sanduiche.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("mostrar-menu");
    banner[0].classList.toggle("add-blur")
    banner[1].classList.toggle("add-blur")
    document.querySelector(".img-new").classList.toggle("add-blur")
    
});
