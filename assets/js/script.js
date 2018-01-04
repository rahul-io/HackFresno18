// window.onload = function() {
//     $('body').scrollspy({ target: '#navbar' })
//     if ($(document).scrollTop() > 50) {
//       $('nav').addClass('shrink');
//       $('nav').removeClass('shrinkback');
//     } else {
//       $('nav').removeClass('shrink');
//       $('.nav').addClass('shrinkback');
//     }
//     if ($(document).scrollTop() > 1000) {
//         var officerPhotosBox = document.getElementsByClassName("overbox");
//         var officerPhotos = document.getElementsByClassName("overbox-content");
//         var titleOvertext = document.getElementsByClassName("title overtext");
//         var taglineOvertext = document.getElementsByClassName("tagline overtext");
//
//         var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
//         for (var i=0,max=officerPhotos.length;i<max;i++){
//             boxHeight = officerPhotosBox[i].offsetHeight,
//             titleHeight = titleOvertext[i].offsetHeight,
//             taglineHeight = taglineOvertext[i].offsetHeight,
//             officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
//         }
//     }
//
//
// $(window).resize(function(){
//     if ($(document).scrollTop() > 1000) {
//         var officerPhotosBox = document.getElementsByClassName("overbox");
//         var officerPhotos = document.getElementsByClassName("overbox-content");
//         var titleOvertext = document.getElementsByClassName("title overtext");
//         var taglineOvertext = document.getElementsByClassName("tagline overtext");
//
//         var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
//         for (var i=0,max=officerPhotos.length;i<max;i++){
//             boxHeight = officerPhotosBox[i].offsetHeight,
//             titleHeight = titleOvertext[i].offsetHeight,
//             taglineHeight = taglineOvertext[i].offsetHeight,
//             officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
//         }
//     }
// });
// $(window).scroll(function() {
//     if ($(document).scrollTop() < $(window).height()) {
//         $('.nav-main').addClass('active');
//     }
//     if ($(document).scrollTop() > 80) {
//       $('.logo-image').removeClass('hidden');
//     $('nav').addClass('shrink');
//     $('nav').removeClass('shrinkback');
//     $('.logo-image').fadeIn();
//     if ($(document).scrollTop() > 1000) {
//         var officerPhotosBox = document.getElementsByClassName("overbox");
//         var officerPhotos = document.getElementsByClassName("overbox-content");
//         var titleOvertext = document.getElementsByClassName("title overtext");
//         var taglineOvertext = document.getElementsByClassName("tagline overtext");
//
//         var boxHeight = 0, titleHeight = 0, taglineHeight = 0;
//         for (var i=0,max=officerPhotos.length;i<max;i++){
//             boxHeight = officerPhotosBox[i].offsetHeight,
//             titleHeight = titleOvertext[i].offsetHeight,
//             taglineHeight = taglineOvertext[i].offsetHeight,
//             officerPhotosBox[i].style.paddingTop = (boxHeight - titleHeight - taglineHeight)/2 + "px"
//         }
//     }
//   } else {
//     $('nav').removeClass('shrink');
//     $('nav').addClass('shrinkback');
//     $('.logo-image').fadeOut();
//   }
// });
// $(".anchor").click(function(e) {
//     e.preventDefault();
//     anchor = $(this).attr('href');
//     $("html, body").animate({
//       'scrollTop':   $(anchor).offset().top-60
//   }, 1000);
// });
// console.log("\"I do my own web programming\"")
// }
