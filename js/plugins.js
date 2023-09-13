// my file to write in
/* global $, jQuery, alert */

$(document).ready(function () {
    "use strict"
    $('.carousel').carousel({
        interval: 5000,
        pause: "hover"
    });

    // show color option div when click gear
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // change theme color on click
    var colorLi = $(".color-option ul li");

    colorLi  // u can use css in coloring them 
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#e426d5").end()
        .eq(2).css("backgroundColor", "#009aff").end()
        .eq(3).css("backgroundColor", "#ffd500");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        // * search word theme inside href attribute  also word theme found in all color theme when changed
    });

    //------------------scroll top---------------------
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    // click on button to scroll top
    scrollButton.click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

    // new nice scroll  body or html

    $("html").niceScroll({
        cursorcolor: '#82BED8',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: 4
    });

});

// loading screen
$(window).load(function () {
    $(".loading-overlay .spinner").fadeOut(1000, function () {
        // show the scroll
        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
});
