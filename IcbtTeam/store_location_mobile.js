AOS.init({
    offset: 50,
    duration: 1000,
});

var button_more = document.querySelectorAll('button a');
var div_block0 = document.querySelector('.box1_display');
var div_block1 = document.querySelector('.box2_display');
var div_block2 = document.querySelector('.box3_display');

for (let i = 0; i < button_more.length; i++) {

    var button = button_more;
    button_more[i].addEventListener("click", () => {
        var number = i + 1;
        $('.box' + number + '_display').attr("style", "display: block !important");
        $('.box' + number + '_display').attr("style", "display: flex !important");
    });

}