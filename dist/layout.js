$(function () {
    $(window).scroll(function () {
        //                var header = $("header");
        //                if($(window).scrollTop() < 0){
        //                    header.removeClass("navbar-fixed-top");
        //                    $("#container").css("padding-top", 0)
        //                } else {
        //                    header.addClass("navbar-fixed-top");
        //                    $("#container").css("padding-top", $("header").height())
        //                }
        //                console.log($(window).scrollTop() + "<" + header.height())
    });

    $(window).resize(function () {
        var header = $("header");
        if (header.hasClass("navbar-fixed-top")) 
            $("body").css("padding-top", header.height() + "px");
        else 
            $("body").css("padding-top", "0")
    })
    $(window).resize();
    $(".sidebar-toggle").click(function () {
        $("body").toggleClass("sidebar-open")
        return false;
    })
    $("body>.dim").click(function(){
        $("body").removeClass("sidebar-open")
    })

    if ($("body div.dim").length === 0) 
        $("body").append($('<div class="dim"></div>'))
})