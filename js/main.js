$(document).ready(function(){

$("#btn-subir").click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0

    },1000);
    return false
});


    
})