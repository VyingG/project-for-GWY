$(document).ready(function(){
	
	$(".message").click(function(){
		$(this).addClass("active");
		$(this).siblings(".infostab").removeClass("active");
		$(".nedbox").css("display","none");
		$(".ntfybox").css("display","none");
		$(".msgbox").css("display","block");
	});
	
	$(".notify").click(function(){
		$(this).addClass("active");
		$(this).siblings(".infostab").removeClass("active");
		$(".msgbox").css("display","none");
		$(".nedbox").css("display","none");
		$(".ntfybox").css("display","block");
	});
	
	$(".need").click(function(){
		$(this).addClass("active");
		$(this).siblings(".infostab").removeClass("active");
		$(".ntfybox").css("display","none");
		$(".msgbox").css("display","none");
		$(".nedbox").css("display","block");
	});
	
});
