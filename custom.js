$(document).ready(function(){
     $(window).scroll(function() {
        var windowScrollPosTop = $(window).scrollTop();
//this code is for animation nav
        if(windowScrollPosTop >= 150) {
          $(".top-header").css({"background": "#18171D"});
          $(".top-header img.logo").css({"margin-top": "-30px", "margin-bottom": "15px"});
          $(".navbar-default").css({"background": "#18171D",});
          $(".nav-bar").css({"margin-top": "6px",});
        }
        else{
          $(".top-header").css({"background": "transparent"});
          $(".top-header img.logo").css({"margin-top": "-30px", "margin-bottom": "25px"});
          $(".navbar-default").css({"background": "transparent",});
          $(".nav-bar").css({"margin-top": "28px"});
        }
//this code is for animation home-board
        if (windowScrollPosTop > 500) {
          $("#animatephone2").animate({"left":"0px","opacity":"1"}, 1500);
          $("#animatetext2").animate({"right":"0px","opacity":"1"}, 1500);
        };
     });
		});