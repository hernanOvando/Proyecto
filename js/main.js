$(document).ready(function(){

$("#btn-subir").click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0

    },1000);
    return false
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 450)
    {
    $('.flotarS').css("visibility","visible");
    $('.flotarS').css("opacity","1");
    
       
    }
    else
    {
    $('.flotarS').css("visibility","hidden");
    $('.flotarS').css("opacity","0");
    }
});

    
})