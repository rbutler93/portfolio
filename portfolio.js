  
$(".move").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});

$(document).ready(function(){
    $('.list').click(function(){
        $('menu').toggleClass('active');
    })
})