$(document).ready(
	function(){

	$(".my-link").on("click",
	function(e) {
		e.preventDefault();
		var $image = $("#this-image");
		$image.attr("src",$(this).attr("src")); 
	$(".outer-lightbox").show();
	// $("#this-image").attr("src","ab.jpg");

	$(".outer-lightbox").on("click",
	function() {
		$(".outer-lightbox").hide();
	});
		 
});  
});
		