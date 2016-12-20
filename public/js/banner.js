window.onload = function(){
	
	var swiper = new Swiper('.swiper-container',{
	    pagination:'.swiper-pagination',
	    slidesPerView:1,
	    paginationClickable:true,
	    spaceBetween:false,
	    freeMode:false,
	    loop:true,
	    autoplay: 2500,
        autoplayDisableOnInteraction:false
	});
	
};