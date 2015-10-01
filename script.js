var main = function(){
           $("#navBar").hide().fadeIn(300);
           $("#header").hide().fadeIn(300);


};

$(document).keypress(function(event) {
	if(event.which === 109) {
		$("#logoPic").toggle(function () {
			animate({height: "20px"}, 500);
		});
	}

});

$(document).ready(main);