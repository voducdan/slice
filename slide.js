document.addEventListener('DOMContentLoaded',function(){
	var face = document.getElementById("btn");
	var pre  = document.getElementById("pre");
	var play = document.getElementById("play");
	var next = document.getElementById("next");
	face.onmouseover = function(){

		setTimeout(function(){
			play.classList.add("control-btn-appear");
			play.classList.remove("control-btn-disappear");
		},300);
		setTimeout(function(){
			pre.classList.add("control-btn-appear");
			pre.classList.remove("control-btn-disappear");
		},400);
		setTimeout(function(){
			next.classList.add("control-btn-appear");
			next.classList.remove("control-btn-disappear");
		},500);
	}
	face.onmouseout = function(){

		setTimeout(function(){
			play.classList.add("control-btn-disappear");
			play.classList.remove("control-btn-appear");
		},300);
		setTimeout(function(){
			pre.classList.add("control-btn-disappear");
			pre.classList.remove("control-btn-appear");
		},500);
		setTimeout(function(){
			next.classList.add("control-btn-disappear");
			next.classList.remove("control-btn-appear");
		},600);
	}

},false)