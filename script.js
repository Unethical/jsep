var main = function(){
           $("#navBar").hide().fadeIn(300);

           $(function(){
           		$("#divider").slideDown();
           			var h = $("#divider").height();

           		$(window).scroll(function(){
           			var $DivToHide = $("#divider");

           		var st = $(this).scrollTop();
           		$DivToHide.height(h - st);


           		}).scroll();

           })

           


};

$(document).keypress(function(event) {
	if(event.which === 109) {

		
		$("#logoPic").toggle();
	}

});

$(document).ready(main);