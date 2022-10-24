/* 스타일 초기화 */
$("*").css({
    'margin': '0px',
    'padding': '0px'
})
$("header", "body", "footer" ).css({
    'font-size': '14px',
    'font-family': '나눔고딕,굴림,돋음,Times New Roman,serif',
    'width': '100%'
})
$("header", "footer" ).css({
    'text-align' : 'center'
})
$("body" ).css({
    'margin' : 'auto'
})
$("footer" ).css({
    'position': 'fixed',
    'bottom': '0px'
})

/* 공통 스타일 */
$("h1").css({
    'padding': '15px',
    'font-size': '30px',
    'color': 'white'
});
$("h2").css({
    'font-size': '15px',
    'color': 'white'
});
$("h3").css({
    'margin': '10px',
    'font-size': '15px',
    'color': 'green',
    'text-shadow': '4px 4px 7px green'
});
$("h1", "h2").css({
    'background-image': 'url(bg.jpg)',
    'background-repeat': 'repeat-x'
});

$("img").css({
    'border': '0',
    'padding': '2px'
});

$("nav").css({
    'margin': '5px 5px'
});
$("nav > span > a").css({ 
    'font-style': 'bold',
    'margin': 0,
    'padding': '3px',
    'border': '2px solid purple',
    'float': 'right',
    'text-decoration': 'none',
    'background': 'purple',
    'color': 'white' 
});
$('nav > span > a:hover').css({ 
    'background': '#ff00ff',
    'color': 'white' 
});
/*
@media only screen and (min-width: 321px) and (orientation: landscape) {
	section { width: 80%; float: left; }
	aside { width: 20%; text-align: center; float: right; }
	footer { clear: both; }
}
.content  { clear: both; }
.section1 ul li { list-style-position: inside; list-style-image: url("li.jpg"); }
*/

/* mintro.html 적용 스타일 */
$('#stu-pic').css({ 
    'width': '6em',
    'height': '8em',
    'float': 'left'
});

/* minfo.html 적용 스타일 */
$('#year-table').css({
    'table-layout': 'auto',
    'width': '80%',
    'border-collapse': 'seperate'
});
$('#year-table thead').css({
    'background': '#E4F2D0'
});
$('#logo').css({
    'position': 'fixed',
    'top':'130px',
    'left': '70px',
    'opacity': 0.3
});

/* mstudy.html 적용 스타일 */
$('video').css({ 
    'margin': '5px',
    'width': '300px',
    'height': '200px'
});

/* mcareer.html 적용 스타일 */
$('.semi-pic').css({ 
    'width': '4em',
    'height': '3em'
});
$('#pic-container').css({ 
    'overflow': 'hidden'
});
$('#pic-container:hover').css({ 
    'height': '220px'
});
$('#pic1:hover').css ({ 
    '-webkit-transform': 'translate(150px,50px) scale(7,7)',
    'transform': 'scale(0.5)' 
});
$('#pic2:hover').css ({
    '-webkit-transform': 'translate(100px,50px) scale(7,7)',
    'transform': 'scale(0.5)' 
});
$('#pic3:hover').css({ 
    '-webkit-transform': 'translate(30px,50px) scale(7,7)',
    'transform': 'scale(0.5)'
});