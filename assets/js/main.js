
          

//header.......
 $(document).ready(function (){
    var windowOn = $(window);
    windowOn.on("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".ri_header").addClass("sticky-header");
  } else {
    $(".ri_header").removeClass("sticky-header");
  }
});
 });

 $(document).ready(function (){
  function mobileMenu() {
    const windowWidth = $(window).width(); 

    if (windowWidth < 992) {
        //   $(".ri-menu-bar").click(function(){
        //   $(".ri_mobile-menu").toggleClass("ri_mobile-menu-active")
        // })
    }
//      else {
//       if (!$(".work1").hasClass("slick-initialized")) {
//         $(".work1").slick({
//           fade: false,
//         });
//       }
//     }
  }
  mobileMenu();
// On resize
  $(window).on("resize", function () {
     mobileMenu();
  });
});

 $(".header-search").click(function(){
  $(".ri_header-search").addClass("ri_header-search-active")
 })
 $(".search-close").click(function(){
  $(".ri_header-search").removeClass("ri_header-search-active")
 })
 $(".ri-menu-bar").click(function(){
  $(".ri_mobile-menu").toggleClass("ri_mobile-menu-active")
 })


// header end.......


// $(document).ready(function (){
//   function handleSlick() {
//     const windowWidth = $(window).width();

//     if (windowWidth > 991) {
//       if ($(".work1").hasClass("slick-initialized")) {
//         $(".work1").slick("unslick");
//       }
//     } else {
//       if (!$(".work1").hasClass("slick-initialized")) {
//         $(".work1").slick({
//           fade: false,
//         });
//       }
//     }
//   }
//   handleSlick();
// // On resize
//   $(window).on("resize", function () {
//     handleSlick();
//   });
// });


// // counter js======


          

          

  




$(document).ready(function() {
 $(".work3").slick({
          fade: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode:true,
          centerPadding:"285px",
          speed: 1000,
           autoplay:true,
           autoplaySpeed:5000,
           responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding:"200px",
      }
    },
    {
      breakpoint: 1440,
      settings: {
        centerPadding:"150px",
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 1024,
      settings: {
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 1,
        centerPadding:"200px",
      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 575,
      settings: {
          slidesToShow: 1,
        centerPadding:"50px",
      }
    },
  ],
 
});
});

$(document).ready(function (){
  $(".project1").click(function(){
    $(".project1").toggleClass("project1-active");
  });
$(".project2").click(function(){
    $(".project2").toggleClass("project2-active");
  });
$(".project3").click(function(){
    $(".project3").toggleClass("project3-active");
 });
});


 var swiper = new Swiper(".banner1", {
      slidesPerView: 'auto',
      spaceBetween: 130,
      centeredSlides: true,
      freemode:true,
      infinite:true,
      loop:true,
      allowTouchMove:true,
      speed:5000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
       breakpoints: {
        992: {
        spaceBetween: 80,
          
        },
        575: {
          spaceBetween: 50,
        },
       
      },
     
    });

    $(document).ready(function () {
            var swiper = new Swiper(".test1", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".sub-test1", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-test1-button-next",
        prevEl: ".swiper-test1-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    });


      $(".test3").slick({
          fade: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode:true,
          centerPadding:"295px",
          speed: 1000,
           autoplay:true,
           autoplaySpeed:5000,
           responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding:"100px",
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding:"100px",
          slidesToShow: 1,

      }
    },
    {
      breakpoint: 575,
      settings: {
        centerPadding:"50px",
          slidesToShow: 1,

      }
    },
  ]     
  });

  $(document).ready(function (){
     var swiper = new Swiper(".banner2", {
      slidesPerView: 'auto',
      spaceBetween: 130,
      centeredSlides: true,
      freemode:true,
      infinite:true,
      loop:true,
      allowTouchMove:true,
      speed:20000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
     });
  });




$(document).ready(function (){
   var slider = document.getElementById("range");
  var selector = document.getElementById("selector");
  var selectValue = document.getElementById("selectValue");
  var progressBar = document.getElementById("progressBar");

  selectValue.innerHTML = slider.value;

  slider.oninput = function(){
    selectValue.innerHTML = this.value + "%" ;
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";
  };
});
 


$(document).ready(function() {
    wow = new WOW 
    (
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
});

 
// $(document).ready(function (){
//   $(".web").click(function(){
//     $(".web").toggleClass("web-active");
//   });
// $(".project2").click(function(){
//     $(".project2").toggleClass("project2-active");
//   });
// $(".project3").click(function(){
//     $(".project3").toggleClass("project3-active");
//  });
// });

if($('.count').length) {
            $('.count').counterUp({
                delay: 10,
                time: 3000,
            });

            }
 
  
