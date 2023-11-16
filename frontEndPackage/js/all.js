$(function () {
    // menu switch
    $('[data-toggle="offcanvas"]').on("click", function () {
        $(".offcanvas-collapse").toggleClass("open");
    });
   
    //navbar滑動換樣式
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            $("#home-nav-container").addClass("navbar-bgWhite");
            $(".white-logo").addClass("d-none");
            $(".color-logo").removeClass("d-none");
        } else {
            $("#home-nav-container").removeClass("navbar-bgWhite");
            $(".white-logo").removeClass("d-none");
            $(".color-logo").addClass("d-none");
        }
    });

    
   
});