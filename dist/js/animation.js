// $.fn.animated = function(inEffect) {
//     $(this).each(function() {
//         var ths = $(this);
//         ths.css({opacity:0})
//             .addClass("animated")
//             .waypoint(function(dir) {
//                     if (dir === "down") {
//                         ths.addClass(inEffect).css({opacity:1});
//                     }
//                 },
//                 {
//                     offset: "90%"
//                 });
//     });
// };


$.fn.animatePies = function() {
    $(this).each(function(){
        var pie = $(this);
        pie.waypoint(function(dir) {
            if (dir === "down") {
                pie.css({strokeDashoffset:pie.data("percentage")});
            }
        },
            {
                offset: "90%"
            });
    });
}



////////////////////// arrow down animation/////////////////////
// $('a[href^="#"]').bind('click.smoothscroll',function (e) {
//     e.preventDefault();
//
//
//     var target = this.hash,
//         $target = $(target);
//
//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 2000, 'swing', function () {
//         window.location.hash = target;
//     });
// });


//Обработка нажатия на кнопку "Вниз"
// $("#down").click(function(){
// //Необходимо прокрутить в конец страницы
//     var curPos=$(document).scrollTop();
//     var height=$("#about_middle").height()-200;
//     var scrollTime=(height-curPos)/0.73;
//     $("body,html").animate({"scrollTop":height},scrollTime);
//
// });




