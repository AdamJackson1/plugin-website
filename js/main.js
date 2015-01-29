$(document).ready(function(){


	$(window).scroll(function(){

		var height = $('body').scrollTop();
	//	console.log(height);

	if(height >= 148){
	console.log("Showing!");
		$('#block').fadeIn();
	}

});
});