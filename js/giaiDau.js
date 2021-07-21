var slideNumber = 1;

showSlides(slideNumber);

time();

function time(){
	setTimeout(slideShow, 3000);
}

function slideShow(n){
	showSlides(slideNumber+=1);
	time();
}

function plusSlides(n) {
	showSlides(slideNumber += n);
}

function currentSlide(n) {
	 showSlides(slideNumber = n);
}

function showSlides(n) {
	var i;
	var slide = document.getElementsByClassName("div");
	var dot = document.getElementsByClassName("dot");
	if (n > slide.length) {slideNumber = 1}    
	if (n < 1) {slideNumber = slide.length}
	for (i = 0; i < slide.length; i++) {
	    slide[i].style.display = "none";  
	}
	for (i = 0; i < dot.length; i++) {
	    dot[i].className = dot[i].className.replace(" active", "");
	}
	slide[slideNumber-1].style.display = "block";
	dot[slideNumber-1].className += " active";
}

function calcRate(r) {
 const f = ~~r,//Tương tự Math.floor(r)
 id = 'star' + f + (r % f ? 'half' : '')
 id && (document.getElementById(id).checked = !0)
}

function calcRate(r) {
 const f = ~~r,//Tương tự Math.floor(r)
 id = 'star' + f + (r % f ? 'half' : '')
 id && (document.getElementById(id).checked = !0)
}

$(document).ready(function(){
	$(".icon1").on("mouseenter", function(){
		$(".nav11").css({
		})
		$(".nav11").show()
	})
	$(".icon1").on("mouseleave", function(){
		$(".nav11").hide()
	})
})