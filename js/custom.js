// jQuery Ready Event
$( document ).ready( function(){

    //Social Media Navigation Fades in From Right
    $("#socialMediaNavigation").animate( { right : "+=60px"}, 1000 );


    //Close Out of Pop-Up
    $(".popUpExit").click( function(){
        //console.log("Lightbox's close btn was clicked");
        //Jquery Effect
        $("#popUp").fadeOut();
    } );

    //Popup will appear if user scrolls through the page
    $(window).on("mousewheel", function() {
        var scrollPosition = $(document).scrollTop();
        if(scrollPosition >= 200)
        {
            $("#popUp").fadeIn();
        }
    } );

} );
