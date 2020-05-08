
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

	function openMenu(){
		TweenLite.to( $('.left_navbar'), 0.5, {css:{'left':0} ,ease:Power2.easeOut});
		TweenLite.to( $('.logo'), 0.3, {css:{'left':59.5} ,ease:Power2.easeOut});
		TweenLite.to( $('.navitems'), 0.5, {css:{'opacity':1} ,ease:Power2.easeOut});
		// TweenLite.to( $('#follow'), 0.5, {css:{'left':66} ,ease:Power2.easeOut});

	}
	//小關
	function close_s_Menu(){
		TweenLite.to( $('.left_navbar'), 0.5, {css:{'left':-75} ,ease:Power2.easeOut});
		TweenLite.to( $('.logo'),0.3, {css:{'left':97} ,ease:Power2.easeOut});
		TweenLite.to( $('.navitems'), 0.3, {css:{'opacity':0} ,ease:Power2.easeOut});
		// TweenLite.to( $('#follow'), 0.5, {css:{'left':115} ,ease:Power2.easeOut});

		// TweenLite.to( $('#artbg'), 0.7, {css:{'left':-690} ,ease:Power2.easeOut});
		// TweenLite.to( $('#artbg_balck'), 0.7, {css:{'opacity':0} ,ease:Power2.easeOut,onComplete:function(){$('#artbg_balck').css('display','none'); } });


	}