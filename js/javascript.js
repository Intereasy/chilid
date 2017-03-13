
var menuActive=false;
	var target;
window.addEventListener("resize", function(event) {
var eventWidth=document.body.clientWidth;
if (eventWidth>980){
	removeClassImg();
}else{

}
if (eventWidth>767){
	$(".img-box-photo").removeClass("text-mobile");
	removeTextBox();
	console.log("clean");
}else{
	$(".img-box-photo").addClass("text-mobile");
}
});
function topMenu(){
	
	var sticky_navigation_offset_top = $('.containerm').offset().top;
	if (document.body.clientWidth>767){
	var nav_offset_top_a2 =$("#target2").offset().top-200;
	var nav_offset_top_a3 = $("#target3").offset().top-200;
	var nav_offset_top_a4 = $("#target4").offset().top-300;
	}else{
		var nav_offset_top_a2 =$("#target2").offset().top;
	var nav_offset_top_a3 = $("#target3").offset().top;
	var nav_offset_top_a4 = $("#target4").offset().top;	
	}
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); 
				if (scroll_top < sticky_navigation_offset_top) {
					$("#home a").addClass("active");
					$("#menu2 a").removeClass("active");
					$("#menu3 a").removeClass("active");
					
				}
		if (scroll_top > sticky_navigation_offset_top) {
			$('.containerm').css({ 'position': 'fixed', 'top':'0','z-index':'1000'});
			
		} else {
			$('.containerm').css({'position': 'relative'});
		}
				if (scroll_top > nav_offset_top_a2) {
					$("#home a").removeClass("active");
					$("#menu2 a").addClass("active");
					$("#menu3 a").removeClass("active");
					$("#menu4 a").removeClass("active");
					
				}
				if (scroll_top > nav_offset_top_a3) {
					$("#home a").removeClass("active");
					$("#menu2 a").removeClass("active");
					$("#menu3 a").addClass("active");
					$("#menu4 a").removeClass("active");
					
				}
			if (scroll_top > nav_offset_top_a4) {
					$("#home a").removeClass("active");
					$("#menu2 a").removeClass("active");
					$("#menu3 a").removeClass("active");
					$("#menu4 a").addClass("active");
					
				}
	};



	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 if($(window).width()>980){
			 removeClassImg();
		 $(".menu-li").css("display","block");
		 }else{
			 $(".menu-li").css("display","none");
			 $(".menu-desktop").removeClass("active");
			 menuActive=false;
		 }
	});

}
function exchangeText(thisText){
	textClassLength = $(thisText).attr("class").split(" ").length;
	textClassTab = $(thisText).attr("class").split(" ");
		$(".box-text1").removeClass("active");
		$(".box-text2").removeClass("active");
		$(".box-text3").removeClass("active");
		$(".box-text4").removeClass("active");
		$(".box-text").slideUp(400);
	for (var i=0; i<textClassLength; i++){
		var textClassTabRow=textClassTab[i];
		console.log("textClassTabRow="+textClassTabRow);
			if (textClassTabRow=="box-name-1"){
				return $(".box-text1").addClass("active").delay( 800 ).slideDown(1000);
			} else if (textClassTabRow=="box-name-2"){
				return $(".box-text2").addClass("active").delay( 800 ).slideDown(1000);
			} else if (textClassTabRow=="box-name-3"){
				return $(".box-text3").addClass("active").delay( 800 ).slideDown(1000);
			} else if (textClassTabRow=="box-name-4"){
				var sprawdz=(textClassTabRow=="box-name-4");
				console.log(sprawdz);
				return $(".box-text4").addClass("active").delay( 800 ).slideDown(1000);
			}
	}
}
function removeClassImg(){
	$(".img-box-photo1").removeClass("active");
	$(".img-box-photo2").removeClass("active");
	$(".img-box-photo3").removeClass("active");
	$(".img-box-photo4").removeClass("active");
	
}
function addTextBox(whois){
	$(".img-box-text",whois).html("<p>CAPTION</p><p>BOX</p>");
}function removeTextBox(){
	$(".img-box-text").html("<p></p>");
}

function main() {
	topMenu();
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 50000,
        autoplayDisableOnInteraction: false
    });
	$(".swiper-icon").click(
	function(){
		var classeSlide = $(this).attr('class').split(' ');
		switch(classeSlide[1]) {
    case "icon-slide-1":
        swiper.slideTo(0, 600, false);
        break;
    case "icon-slide-2":
        swiper.slideTo(1, 600, false);
        break;
	   case "icon-slide-3":
        swiper.slideTo(2, 600, false);
        break;
    default:
        console.log("błąd slider click")
}
	});
	
	$(".menu-a").hover(function(){
		$(this).addClass("hover");
		$(".menu-desktop").find(".active").addClass("dactive").removeClass("active");
	return false;
	}, function() {
		$(this).removeClass("hover");
		$(".menu-desktop").find(".dactive").addClass("active").removeClass("dactive");
		return false;
	});
	
	$(".box-name").click(
	function(){
		$(".box-name").removeClass("active");
		$(this).addClass("active");
		exchangeText(this);
		
	});
	$(".menu-a-icon").click(
	function(){
		if (menuActive==false){
			$(".menu-desktop").addClass("active");
			menuActive=true;
		} else {
			$(".menu-desktop").removeClass("active");
			menuActive=false;
		}
		
		$(".menu-li").slideToggle(500);		
	});

	$("#manimateh").click(function(){
		target=document.getElementById("targetTop");
		animateScroll(target, 2000, 'easeInQuart', 100, top);
	});
	$("#manimate2").click(function(){
		target=document.getElementById("target2");
			animateScroll(target, 2000, 'easeInQuart', 100, top);
	});
		$("#manimate3").click(function(){
		target=document.getElementById("target3");
			animateScroll(target, 2000, 'easeInQuart', 100, top);
	});	
	$("#manimate4").click(function(){
		target=document.getElementById("target4");
			animateScroll(target, 2000, 'easeInQuart', 100, top);
	});		
	
	$(".img-box-photo1").click(function(){
		removeClassImg();
		if($(window).width()<980){
		$(".img-box-photo1").addClass("active");
		}
		if($(window).width()<767){
		removeTextBox();
		addTextBox(this);
		}
	});
	$(".img-box-photo2").click(function(){
		removeClassImg();
		if($(window).width()<980){
		$(".img-box-photo2").addClass("active");
		}
		if($(window).width()<767){
		removeTextBox();
		addTextBox(this);
		}
	});
	$(".img-box-photo3").click(function(){
		removeClassImg();
		if($(window).width()<980){
		$(".img-box-photo3").addClass("active");
		}
		if($(window).width()<767){
		removeTextBox();
		addTextBox(this);
		}
	});
	$(".img-box-photo4").click(function(){
		removeClassImg();
		if($(window).width()<980){
		$(".img-box-photo4").addClass("active");
		}
		if($(window).width()<767){
		removeTextBox();
		addTextBox(this);
		}
	});
}

window.onload = main;
