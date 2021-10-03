jQuery(document).ready(function($){
        $("#toggle-mobile-nav").click(function() {
            $("#page").toggleClass("mobile-nav-open");
    });


    $("#page").click(function(e) {
        var target = e.target;
        if($(target).hasClass("navbar-toggler")) {
            return;
        }
        if($(target).parent.hasClass("navbar-toggler")) {
            return;
        }
        $("#page").removeClass("mobile-nav-open"); 
    })
})