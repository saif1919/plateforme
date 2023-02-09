!(function (t) {
    "use strict";


    // const reviewFour = new Swiper(".reviews-four", {
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });
    


    const reviewFour = new Swiper(".reviews-four", {
        slidesPerView: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      const reviewThree = new Swiper(".reviews-two", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            // when window width is >= 640px
            992: {
              slidesPerView: 3,
              spaceBetween: 24
            }
          },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      const reviewVertical = new Swiper(".reviews-one", {
        direction: "vertical",
        loop: true,
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });

      




      
})(jQuery)


//  jQuery(document).ready(function ($) {
        
//         var stickybar = $('#mayosis-sticky-bar');
//     if (typeof stickybar.howdyDo === "function") {
//         stickybar.howdyDo({ action: "push", effect: "slide", easing: "easeInBounce", duration: 200, delay: 200, barClass: "mayosis_fixed_notify", initState: "open", closeAnchor: '<i class="zil zi-cross"></i>' }),
//             stickybar.effect("bounce", "medium");
            
//     }
//     });
    
//      jQuery(document).ready(function ($) {
//          $( 'body' ).on('click','.medinik-product-toogle-btn',function() {
// 			if ( $( ".medinik-filter-toogle-box" ).is( ":hidden" ) ) {
// 				$( ".medinik-filter-toogle-box" ).slideDown( "slow" );
// 			} else {
// 				$( ".medinik-filter-toogle-box" ).slideUp();
// 			}
// 		});
//      });
     

// jQuery(document).ready(function ($) {
//     // init Isotope Product Filter
//     var $grid = $('.iso-pro-filter').isotope({
//         itemSelector: '.iso-pro-item',
//     })
//     // filter items on button click
//     $('ul.isotop-product-filter').on('click', 'li', function () {
//         var filterValue = $(this).attr('data-filter');
//         $grid.isotope({ filter: filterValue });
//     });

// });


// jQuery(document).ready(function ($) {
//   $('.medinik-ajax-search-bar select,#alg_currency_selector #alg_currency_select').niceSelect();
// });


   
                                    
//     jQuery(document).ready(function ($) {
//     setTimeout(function () {
//                         $(".xpc-video-elem source").each(function () {
//                             if ($(this).parents(".navbar").length) return !1;
//                             var e = $(this).attr("data-src");
//                            $(this).attr("src", e);
//                             var i = this.parentElement;
//                             i.load(), i.play();
//                         });
//                     }, 1e4);
//                 let q = !0;
//                 $(".navbar").hover(function (e) {
//                     q &&
//                         ($(this)
//                             .find(".xpc-video-elem source")
//                             .each(function () {
//                                 var e = $(this).attr("data-src");
//                                 $(this).attr("src", e);
//                                 var i = this.parentElement;
//                                 i.load(), i.play();
//                             }),
//                         (q = !1));
//                 })
//                                         });
                                        
                                        
// (function($) {
//         'use strict';
//         $(window).on('load', function() {
//             if ($(".medinik-loader").length > 0) {
//                 $(".medinik-loader").fadeOut("slow")
//             }
//         })
//     })(jQuery)
    
    
jQuery(document).ready(function ($) {
      $("#mayosis-sidemenu li.has-sub>a").on("click", function () {
   $(this).removeAttr("href");
     var z = $(this).parent("li");
             z.hasClass("open")
                   ? (z.removeClass("open"), z.find("li").removeClass("open"), z.find("ul").slideUp())
                : (z.addClass("open"),
              z.children("ul").slideDown(),
              z.siblings("li").children("ul").slideUp(),
                z.siblings("li").removeClass("open"),
                 z.siblings("li").find("ul").slideUp());
            }),
                $("#mayosis-sidemenu>ul>li.has-sub>a").append('<span class="holder"></span>');
       })
        
 jQuery(document).ready(function ($) {
        $(window).scroll(function () {
             50 < $(this).scrollTop() ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut();
        }),
           $("#back-to-top").click(function () {
                return $("body,html").animate({ scrollTop: 0 }, 800), !1;
            })
            
    })
    
    !(function (t) {
    "use strict";

    t(".burger, .overlaymobile").click(function () {
        t(".burger").toggleClass("clicked"), t(".overlaymobile").toggleClass("show"), t(".mobile--nav-menu").toggleClass("show"), t("body").toggleClass("overflow");
    });


    t(".offcanvasburger, .overlayoffcanvas").click(function () {
        t(".offcanvasburger").toggleClass("clicked"), t(".overlayoffcanvas").toggleClass("show"), t(".offcanvas--nav-menu").toggleClass("show"), t("body").toggleClass("overflow");
    });

})(jQuery)


 jQuery(document).ready(function ($) {
     
        $('.medinik_countdown').countDown({
                label_mm: 'mins',
                label_ss: 'secs',
                separator: '',
                
            });
            
            $('.medinik-ajax-search-bar select').niceSelect();
     
 })
 
  jQuery(document).ready(function ($) {
 $('.wpcf7 select').niceSelect();
 });
 
 jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        50 < $(this).scrollTop() ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut();
    }),
        $("#back-to-top").click(function () {
            return $("body,html").animate({scrollTop: 0}, 800), !1;
        })

});