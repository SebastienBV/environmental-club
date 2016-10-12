$(document).ready(function() {
    $('#main-content-1').addClass('bounceIn');
    $("#main-content-2").hide();
    $("#main-content-3").hide();
    $("#main-content-4").hide();

    $("#right-arrow-1").click(function() {
        $(this).fadeOut(999);
        $("#main-content-1").hide(999);
        $("#main-content-2").slideDown(1000);
        $("#right-arrow-2").slideDown(1000);
    });

    $("#right-arrow-2").click(function() {
        $(this).fadeOut(999);
        $("main-content-3").show();
        $("#main-content-2").hide(999);
        $("#main-content-3").slideDown(1000);
        $("#right-arrow-3").slideDown(1000);
    });

    $("#right-arrow-3").click(function() {
        $(this).fadeOut(999);
        $("main-content-4").show();
        $("#main-content-3").hide(999);
        $("#main-content-4").slideDown(1000);
        $("#right-arrow-4").slideDown(1000);
    });


    $("#right-arrow-4").click(function() {
        $(this).fadeOut(999);
        $("main-content-1").show();
        $("#main-content-4").hide(999);
        $("#main-content-1").slideDown(1000);
        $("#right-arrow-1").slideDown(1000);
    });

    $("#left-arrow-2").click(function() {
        $(this).fadeOut(999);
        $("main-content-1").show();
        $("#main-content-2").hide(999);
        $("#main-content-1").slideDown(1000);
        $("#right-arrow-1").slideDown(1000);
    });
    $("#left-arrow-3").click(function() {
        $(this).fadeOut(999);
        $("main-content-2").show();
        $("#main-content-4").hide(999);
        $("#main-content-2").slideDown(1000);

    });
    $("#left-arrow-4").click(function() {
        $(this).fadeOut(999);
        $("main-content-3").show();
        $("#main-content-4").hide(999);
        $("#main-content-1").slideDown(1000);
        $("#right-arrow-1").slideDown(1000);
    });
});
