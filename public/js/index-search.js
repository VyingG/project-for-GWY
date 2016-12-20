$(document).ready(function(){
	
	$(".searchputin").click(function(){
		$(".searchlist").css("display","block"); });
	
	$(".searchnote").click(function(){
		$(".searchlist").css("display","none");
		$(".searchputin").val($(this).text()); });
	
	$(".clearsearch").click(function(){
		$(".searchlist").remove(); });

});