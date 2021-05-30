/*$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

      $(".scrollup").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 800);
      });
});*/
    

$(function() {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

/*// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById(".scrollup").style.display = "block";
    } else {
        document.getElementById(".scrollup").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/

/*$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('.scrollup').show();
		} else {
			$('.scrollup').hide();
		}
	});
 
	$('.scrollup').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});*/


/*$(function() {
  $.fn.scrollToTop = function() {
   $(this).hide().removeAttr("href");
   if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
   var scrollDiv = $(this);
   $(window).scroll(function() {
    if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
    else $(scrollDiv).fadeIn("slow")
   });
   $(this).click(function() {
    $("html, body").animate({scrollTop: 0}, "slow")
   })
  }
});
   
$(function() {
  $(".scrollup").scrollToTop();
});*/