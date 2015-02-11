$(document).ready(function(){


	$(window).scroll(function(){

		var height = $('body').scrollTop();
	//	console.log(height);

	if(height >= 500){
		$('#block').fadeIn(300);
		$('#arrow-d').fadeOut(200);
	}else{
		$('#block').fadeOut(100);
		$('#arrow-d').fadeIn(200);
	}

});

	$("#arrow-d").click(function(){
		var y = $(window).scrollTop();
		$("html, body").animate({ scrollTop: y + 500 }, 900);
	});

});