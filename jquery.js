$(document).ready(function(){

    console.log("jQuery Loaded Successfully");

    $("#hideBtn").click(function(){

        $(".gallery").hide();

    });

    $("#showBtn").click(function(){

        $(".gallery").show();

    });

    $("#toggleBtn").click(function(){

        $(".gallery").toggle();

    });

    $("#fadeBtn").click(function(){

        $(".gallery")
            .fadeOut(1000)
            .fadeIn(1000);

    });

});