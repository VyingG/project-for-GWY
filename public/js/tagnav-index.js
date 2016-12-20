$(document).ready(function(){
	
	//返回顶部 totop
	$(".totop").click(function(){
		var speed = 300;
        $('body,html').animate({scrollTop:0},speed);
        return false;
	});
	
	//价格降序/升序排列 moneydown/moneytop
	$(".moneyrandom").click(function(){
		$(this).css("display","none");
		$(".moneydown").css("display","block");
		$(".moneyup").css("display","none");
		$(".remind").css("display","block");
		$(".remind").text("价格由高到低");});
	$(".moneydown").click(function(){
		$(this).css("display","none");
		$(".moneyup").css("display","block");
		$(".moneyrandom").css("display","none");
		$(".remind").css("display","block");
		$(".remind").text("价格由低到高"); });
	$(".moneyup").click(function(){
		$(this).css("display","none");
		$(".moneyrandom").css("display","block");
		$(".moneydown").css("display","none");
		$(".remind").css("display","none"); });
	
	//收藏和取消收藏 like & dislike
	$(".dislike").click(function(){
		$(this).css("display","none");
		$(this).siblings(".like").css("display","block"); });
	$(".like").click(function(){
		$(this).css("display","none");
		$(this).siblings(".dislike").css("display","block"); });
	
});