document.addEventListener('DOMContentLoaded',function(){
	var face = document.getElementById("btn");
	var pre  = document.getElementById("pre");
	var play = document.getElementById("play");
	var next = document.getElementById("next");
	var flag = 0;
	pre.onmouseover = function(){
		this.classList.add("fill-btn");
		this.classList.remove("drop-btn");
		flag =1;
	};
	pre.onmouseout = function(){
		if(flag===1){
		this.classList.add("drop-btn");
		this.classList.remove("fill-btn");
		}
	};
	play.onmouseover = function(){
		this.classList.add("fill-btn");
		this.classList.remove("drop-btn");
		flag =1;
	};
	play.onmouseout = function(){
		if(flag===1){
		this.classList.add("drop-btn");
		this.classList.remove("fill-btn");
		}
	};
	next.onmouseover = function(){
		this.classList.add("fill-btn");
		this.classList.remove("drop-btn");
		flag =1;
	};
	next.onmouseout = function(){
		if(flag===1){
		this.classList.add("drop-btn");
		this.classList.remove("fill-btn");
		}
	};
	var flag=0;
	face.onmouseover = function(){
		flag = 1;
		setTimeout(function(){
			play.classList.add("control-btn-appear");
			play.classList.remove("control-btn-disappear");
		},300);
		setTimeout(function(){
			pre.classList.add("control-btn-appear");
			pre.classList.remove("control-btn-disappear");
		},500);
		setTimeout(function(){
			next.classList.add("control-btn-appear");
			next.classList.remove("control-btn-disappear");
		},600);
	}
	face.onmouseout = function(){
		if(flag===1)
		{
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
	}
	var dot = document.querySelectorAll(".dot");
	dot.forEach(function(e){
		var dotIndex = e.dataset.index;
		var imgIndex =document.getElementById(dotIndex);
		arrIndex = e.dataset.box;
		e.onmouseover = function(){
			imgIndex.classList.add('displayimg');
			imgIndex.classList.remove('hideimg');
			this.classList.add(arrIndex);
		};
		e.onmouseout = function(){
			imgIndex.classList.add('hideimg');
			imgIndex.classList.remove('displayimg');
			this.classList.remove(arrIndex);
		};
	});
	var pic = document.querySelectorAll(".pic");
	var index = 0;
	for(let i = 0 ;i< dot.length;i++){
		dot[i].onclick = function(){
			for(x of pic){
				x.classList.remove('img-current');
			}
			if(i>0){
				for(x of pic){
					x.classList.remove('img-prev');
				}
				pic[i-1].classList.add('img-prev');
			}
			else{
				for(x of pic){
					x.classList.remove('img-prev');
				}
				pic[pic.length-1].classList.add('img-prev');
			}
			for(x of pic){
				x.classList.remove('img-next');
			}
			pic[i].classList.add('img-next');
			this.classList.add('dot-current');
			for(let j =0;j<dot.length;j++){
				if(j!==i){
					dot[j].classList.remove('dot-current');
				}
			}
		}
	}
		

	
	
},false)