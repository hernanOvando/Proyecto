$(document).ready(function(){
    
    $('#btn-whatsapp').click(function(e){
        e.preventDefault();
       
        var url = "https://wa.me/5491133710173";    
        $('#btn-whatsapp').attr('href',url);
    });
})