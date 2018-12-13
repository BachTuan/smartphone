
//set time slide
$('.carousel').carousel({
	interval: 2000
})

//fixed navbar
$(window).scroll(function() {	
	 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#header").addClass("header");
    } else {
        $("#header").removeClass("header");
    }
});
