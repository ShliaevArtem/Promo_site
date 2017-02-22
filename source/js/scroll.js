/**
 * Created by FlatJack on 18.02.2017.
 */

// $(function() {
//     $(window).scroll(function() {
//         if($(this).scrollTop() != 0) {
//             $('#arrow_up').fadeIn();
//         } else {
//             $('#arrow_up').fadeOut();
//         }
//     });
//     $('#arrow_up').click(function() {
//         $('body,html').animate({scrollTop:0},1000);
//     });
// });

///// рабочий код////////

    $("#arrow_up").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 700, "swing");
    });





$(".btn_arrow").click(function(){
    var go = $(this).data("link");
    $("html, body").stop().animate({
        scrollTop: $(go).offset().top
    }, 1500, "swing");
});