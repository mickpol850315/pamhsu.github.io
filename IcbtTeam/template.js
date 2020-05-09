
//JS
// var navbanner=document.querySelector(".leftnavbar");
// navbanner.innerHTML="123456789"


// jquery
//安裝套件後，請輸入jqclick
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
	// TweenLite.to( $('#follow'), 0.5, {css:{'left':66} ,ease:Power2.easeOut});

}
//左側navbar關閉
function close_s_Menu(){
	TweenLite.to( $('.left_navbar'), 0.5, {css:{'left':-75} ,ease:Power2.easeOut});
	TweenLite.to( $('.logo'),0.3, {css:{'left':97} ,ease:Power2.easeOut});
	TweenLite.to( $('.navitems'), 0.3, {css:{'opacity':0} ,ease:Power2.easeOut});
	// TweenLite.to( $('#follow'), 0.5, {css:{'left':115} ,ease:Power2.easeOut});

	// TweenLite.to( $('#artbg'), 0.7, {css:{'left':-690} ,ease:Power2.easeOut});
	// TweenLite.to( $('#artbg_balck'), 0.7, {css:{'opacity':0} ,ease:Power2.easeOut,onComplete:function(){$('#artbg_balck').css('display','none'); } });

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

