$(document).ready(function () {
    // Input button

    $(".js-search-input").focusin(function () {
        $(".js-search-button").css("background", "white");
    });
    $(".js-search-input").focusout(function(){
        $(".js-search-button").css("background-color", "rgba(164, 172, 177, 0.38823529411764707)");
        $('.js-search-input').css('font-size', '2rem');
        $('.js-search-input').css('padding', '0px 30px');
    });
});