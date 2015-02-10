$(document).ready(function(){


	$(window).scroll(function(){

		var height = $('body').scrollTop();
	//	console.log(height);

	if(height >= 500){
		$('#block').fadeIn(300);
	}else{
		$('#block').fadeOut(200);
	}

});
});