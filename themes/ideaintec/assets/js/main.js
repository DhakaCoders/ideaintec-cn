(function($) {

/*Google Map Style*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

$(window).load(function() {
    $('.home').addClass('banner-effect');
});


var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});


//fixed header
$(window).scroll(function() { 
    var scroll = $(window).scrollTop();   
    if (scroll >= 100) {
        $('.header-sticky').addClass('fixed-hdr');
    } else {
        $('.header-sticky').removeClass('fixed-hdr');
    }  
});


var windowWidth = $(window).width();
if (windowWidth <= 767) {

  $('.opener-inner').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('nav.main-nav > ul').slideToggle(500);
  });

}

	
if($("ul.slick-dots li").length == 1){
   $("ul.slick-dots").hide();
}
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}




if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


/**
------------------
To top
------------------
*/
$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();    
    } else {
        $('#toTop').fadeOut();
    }
});

$('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
}); 


$('.share-btn span').on('click', function(e){
  e.preventDefault();
  var dataThis = $(this).attr('data-this');
  $('#'+dataThis).toggleClass('tsm');
});



new WOW().init();

/* stary of Noyon*/

if( $('.hamburgar-cntlr').length ){
  $('.hamburgar-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}

if (windowWidth > 767) {
  if( $('.hm-banner-cntlr').length ){
    var windowHeight = $(window).height();
    var HeaderH = $('.sticky-hdr').outerHeight();
    var decWindowHeight = (windowHeight - HeaderH) + 18;
    if (windowHeight > 1) {
      $('.hm-banner-cntlr').css('height', decWindowHeight);
    }
  }
}


if( $('.scrollto').length ){
  $('.scrollto').on('click', function(e){
    e.preventDefault();
    var togo = $(this).data('to');
    goToByScroll(togo, 0);
  });
}

function goToByScroll(id, offset){
  if(id){
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate(
      {scrollTop: $(id).offset().top - offset},
      500);
  }
}
/*skew*/
$(".skew-btm").css('border-left-width', windowWidth);
$(window).resize(function() { 
  var window2Width = $(window).width();
    $(".skew-btm").css('border-left-width', window2Width);
});


/**/

$('.iit-form-fields-tabs ul li a').on('click', function(e){
  e.preventDefault();
  var dataTo = $(this).data('to');
  $(".iit-form-fields-tabs ul li a").removeClass('ui-tabs-active');
  $(this).addClass('ui-tabs-active');

  $('.iit-fl-up-tab').removeClass('iit-fl-up-tab-active');
  $(dataTo).addClass('iit-fl-up-tab-active');
});


$('.select-2-cntlr').select2();


$('.believe-in-tab ul li a').on('click', function(e){
  e.preventDefault();
  var bittab = $(this).data('to');
  $('.believe-in-tab ul li a').removeClass('ui-tabs-active');
  $(this).addClass('ui-tabs-active');

  $('.believe-in-tab-des').removeClass('believe-tab-active');
  $(bittab).addClass('believe-tab-active');
});


$('.skill-section-con ul li').hover(
  function () {
    $('.skill-section-con ul li').addClass('skill-bx-bg-transparent');
    var skillColDataId = $(this).data('id');
    $(this).addClass('skill-bx-bg-active');
    $('.skill-section-bg').addClass(skillColDataId);
  },
  function () {
    var skillColDataId = $(this).data('id');
    $('.skill-section-con ul li').removeClass('skill-bx-bg-transparent');
    $(this).removeClass('skill-bx-bg-active');
    $('.skill-section-bg').removeClass(skillColDataId);
  }
  );
/* stary of Rannojit*/




/* stary of Shariful*/


if( $('#particles-js').length ){
    particlesJS("particles-js",{
    "particles": {
       "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": ["#f8800b","#5d9d32","#0c224b"]
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#ff9140"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
       "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 30,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 80,
          "color": "#ff9140",
          "opacity": 1,
          "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
     "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
       "modes": {
          "grab": {
            "distance": 300,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 300,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
         "repulse": {
            "distance": 300,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
}


var skill = {
  html: 90,
  css: 80,
  js: 70
};

$.each(skill, function(key, value){
  var skillbar = $("." + key);
  skillbar.animate(
      {
        width: value + "%"
      },3000
    );
});


if( $('#sidebar').length ){
  $('#sidebar').stickySidebar({
      topSpacing: 160,
      bottomSpacing: 160
  });
}



$('.share-button').on('click', function(){
  $(this).parents('.social-media').toggleClass('smi-show');
  $(this).parents().siblings().find('.social-media').removeClass('smi-show');
});

$('.iit-faq-tab ul li a').on('click', function(e){
  e.preventDefault();

  var tagid = $(this).data('tag');
  $('.iit-faq-tab ul li a').removeClass('current');
  $(this).addClass('current');
  $('.iit-faq-tab-con').removeClass('current');
  $('#'+tagid).addClass('current');
});


$('.iit-faq-accordion-title').on('click', function(){
  $(this).toggleClass('active');
  $(this).parents('.iit-faq-accordion-menu').siblings().find('.iit-faq-accordion-title').removeClass('active');
  $(this).parents('.iit-faq-accordion-menu').find('.iit-faq-accordion-des').slideToggle(300);
  $(this).parents('.iit-faq-accordion-menu').siblings().find('.iit-faq-accordion-des').slideUp(300);
});




/* stary of keshob*/


$(".map-section").click(function(){
  $(this).toggleClass("js-active");
  $(this).find(".mt-open").toggle();
  $(this).find(".mt-close").toggle();
  return false;});

})(jQuery);