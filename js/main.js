$(document).ready(function(){


	$(window).scroll(function(){

		var height = $('body').scrollTop();
	//	console.log(height);

	if(height >= 250){
		$('#block').fadeIn(300);
	}else{
		$('#block').fadeOut(200);
	}

});
});