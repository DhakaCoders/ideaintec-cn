(function($) {

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
    if (scroll >= 300) {
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


if($('[data-fancybox="gallery"]').length){
$('[data-fancybox="gallery"]').fancybox({
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

/* slider custom prev and next control */
var responsiveSlider = $('.responsive-slider-cntlr').length;
if( windowWidth > 0 && responsiveSlider < 2 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 639 && responsiveSlider < 3 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 991 && responsiveSlider < 4 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else if( windowWidth > 1199 && responsiveSlider < 5 ){
    $('.mbc-team-slider-ctlr .mbc-slider-prev-nxt').hide();
}else{

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





$('.share-btn span').on('click', function(e){
  e.preventDefault();
  var dataThis = $(this).attr('data-this');
  $('#'+dataThis).toggleClass('tsm');
});


/* stary of Noyon*/

if( $('.hamburgar-cntlr').length ){
  $('.hamburgar-cntlr').click(function(){
    $('body').toggleClass('allWork');
  });
}

if (windowWidth > 768) {
  if( $('.hm-banner-cntlr').length ){
    var windowHeight = $(window).height();
    var HeaderH = $('.sticky-hdr').outerHeight();
    var decWindowHeight = (windowHeight - HeaderH) + 18;
    if (windowHeight > 300) {
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

if( $('.select-2-cntlr').length ){
  $('.select-2-cntlr').select2();
}

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
          "value": ["#f8800b","#5d9d32","#0c224b", "#fff"]
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


/*var skill = {
  satisfaction: 90,
  development: 80,
  performance: 70
};

$.each(skill, function(key, value){
  var skillbar = $("." + key);
  skillbar.animate(
      {
        width: value + "%"
      },3000
    );
});*/

var progressBar = $('.progressbar-value');

progressBar.each(function(){
  var PWidth = $(this).attr('data-width');
  $(this).animate(
      {
        width: PWidth
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

var imgBox = document.querySelectorAll('.pgrd-item-img img');
for(i=0; i<imgBox.length;i++){
  imgBox[i].addEventListener('mouseenter', function(hover){
  var imgHeight = this.scrollHeight;
  var scrollheight = imgHeight - 351;
  hover.target.style.objectPosition = `0px -${scrollheight}px`;

  });

  imgBox[i].addEventListener('mouseleave', function(hover){
  hover.target.style.objectPosition = '0px 0px';


  });
}


/* stary of keshob*/
$(".map-section").click(function(){
  $(this).toggleClass("js-active");
  $(this).find(".mt-open").toggle();
  $(this).find(".mt-close").toggle();
  return false;});

if( $('.contact-form-wrp').length ){
  $('.contact-form-wrp .wpforms-container .wpforms-form .wpforms-submit-container button').on('click', function(){
    $('.wpforms-field input[required],.wpforms-field select[required]').parents('.wpforms-field').addClass('wpforms-has-error');
    $('.wpforms-field input[required],.wpforms-field select[required]').addClass('wpforms-error');
  });
}


if( $('.wpforms-error').length ){
  $('.wpforms-error').on('click', function(){
    $(this).parents('.wpforms-field').removeClass('wpforms-has-error');
  });
}

var bgHeight = $('.iit-svic-help-lft-bg').height();
$('.iit-svic-ttml-des').css("height", bgHeight);
$(window).resize(function() { 
  var bgHeight = $('.iit-svic-help-lft-bg').height();
  $('.iit-svic-ttml-des').css("height", bgHeight);
});
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
    $('body,html').animate({scrollTop:0},100);
}); 




/*
$('.our-works-grd-item').on('mouseenter', function(){
  var imageItem = $('.our-works-grd-item').height();
  var imageBoxHeight = $('.pgrd-item-hover-img img').height();
  var Imagescroll = imageBoxHeight - imageItem;
  $('.pgrd-item-hover-img img').css({'object-position': 'revert'});

});*/

new WOW().init();



var imgBox = document.querySelectorAll('.pgrd-item-hover-img img');
  for(i=0; i<imgBox.length;i++){
  imgBox[i].addEventListener('mouseenter', function(hover){
  var imgHeight = this.scrollHeight;
  var scrollheight = imgHeight - 350;
  hover.target.style.objectPosition = `0px -${scrollheight}px`;

  });

  imgBox[i].addEventListener('mouseleave', function(hover){
  hover.target.style.objectPosition = '0px 0px';


  });
}

})(jQuery);