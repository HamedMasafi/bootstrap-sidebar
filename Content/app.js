$(function () {    
    //START TEST
    $("[data-toggle-class]").change(function(){
        var self = $(this);
        var c = self.attr("data-toggle-class");
        var selector = self.attr("data-toggle-target");
        if(selector === undefined)
            selector = "body";

        if(self.is(":checked"))
            $(selector).addClass(c);
        else 
            $(selector).removeClass(c);
        //make sure 'navbar-fixed-top' has been applied
        $(window).resize();
    })
    $("#boxed").change(function () {
        var container = $(".container-a")
        if ($(this).is(":checked")) {
            container.removeClass("container-fluid");
            container.addClass("container");
        }
        else {
            container.addClass("container-fluid");
            container.removeClass("container");
        }
    })
    //END TEST
})