
//安裝套件後，若使用jquery請輸入jqclick

var _ForceCloseMenu=false;
$('.left_navbar').mouseenter(function() {
    if(_ForceCloseMenu==false){
        openMenu();
    }
}).mouseleave(function() {
    if(_ForceCloseMenu==false){
        close_s_Menu();
    }
});

//左側navbar展開	
function openMenu(){
	TweenLite.to( $('.left_navbar'), 0.5, {css:{'left':0} ,ease:Power2.easeOut});
	TweenLite.to( $('.logo'), 0.3, {css:{'left':59.5} ,ease:Power2.easeOut});
	TweenLite.to( $('.navitems'), 0.5, {css:{'opacity':1} ,ease:Power2.easeOut});
}
//左側navbar關閉
function close_s_Menu(){
	TweenLite.to( $('.left_navbar'), 0.5, {css:{'left':-75} ,ease:Power2.easeOut});
	TweenLite.to( $('.logo'),0.3, {css:{'left':97} ,ease:Power2.easeOut});
	TweenLite.to( $('.navitems'), 0.3, {css:{'opacity':0} ,ease:Power2.easeOut});
}


// 左側navbar的每個項目hover會有一個icon
var nav_items=document.querySelectorAll(".navitems .item");
nav_items.forEach(function(item,index){ 
	$( item ).hover(
		function() {
			// console.log(item);
			var nav_icon=item.querySelector('.nav_icon');
			console.log(nav_icon);
			$( nav_icon ).addClass( "active" );
		}, function() {
			// console.log(item);
			var nav_icon=item.querySelector('.nav_icon');
			console.log(nav_icon);
			$( nav_icon ).removeClass( "active" );
		}
	  );
	
  });

 

  // 手機版navbar的每個項目hover會有一個icon
var nav_items=document.querySelectorAll(".mobile_navbar_fully .mobile_items");
nav_items.forEach(function(item,index){ 
	$(item).mouseout(function(){
		var nav_icon=item.querySelector('.nav_icon');
		console.log(nav_icon);
		$( nav_icon ).addClass( "active" );
	  });
	
  });



  
  $(".main").click(function(){
	var opacity = $('.hamburger:nth-child(2)').css('opacity');
	if(opacity == '0' ){

		TweenLite.to( $('.hamburger:nth-child(1)'), 1, {css:{transform:"translateY(8px) rotate(0deg)"} ,ease:Power2.easeOut});
		TweenLite.to( $('.hamburger:nth-child(2)'), 1, {css:{'opacity':1} ,ease:Power2.easeOut});
		TweenLite.to( $('.hamburger:nth-child(3)'), 1, {css:{transform:"translateY(-8px)rotate(0deg)"} ,ease:Power2.easeOut});

		TweenLite.to( $('.mobile_navbar_fully'), 3, {css:{'left':'-100%','display':'none'} ,ease:Power2.easeOut});	
		TweenLite.to( $('.mobile_navbar .logo'), 0.5, {css:{'opacity':1},delay:1 ,ease:Power2.easeOut});	
		$("footer").show();
		$(".menu_icon").show();


	}else{
		TweenLite.to( $('.hamburger:nth-child(1)'), 1, {css:{transform:"translateY(0px) rotate(-45deg)"} ,ease:Power2.easeOut});
		TweenLite.to( $('.hamburger:nth-child(2)'), 1, {css:{'opacity':0} ,ease:Power2.easeOut});
		TweenLite.to( $('.hamburger:nth-child(3)'), 1, {css:{transform:"translateY(0px) rotate(45deg)"} ,ease:Power2.easeOut});
 
		TweenLite.to( $('.mobile_navbar_fully'), 2, {css:{'left':0,'display':'block'} ,ease:Power2.easeOut});	
		TweenLite.to( $('.mobile_navbar .logo'), 1, {css:{'opacity':0} ,ease:Power2.easeOut});	
		$("footer").hide();
		$(".menu_icon").show();

	}

  });

 