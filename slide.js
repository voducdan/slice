document.addEventListener('DOMContentLoaded',function(){
	var face = document.getElementById("btn");
	var pre  = document.getElementById("pre");
	var play = document.getElementById("play");
	var next = document.getElementById("next");
	var flag = 0;
	var number=1;
	var run =document.querySelector('.run');
	var playBtn = document.querySelector('.play-btn');
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
	for(let i = 0 ;i< dot.length;i++){
		dot[i].onclick = function(){
			clearInterval(autoslide);
			run.style.display='none';
			playBtn.style.display = 'block';
			if(i>0){
				pic[i-1].classList.remove('img-current');
				for(x of pic){
					x.classList.remove('img-prev');
				}
				pic[i-1].classList.add('img-prev');
			}	
			else{
				pic[pic.length-1].classList.remove('img-current');
				for(x of pic){
					x.classList.remove('img-prev');
				}
				pic[pic.length-1].classList.add('img-prev');
			}
			for(x of pic){
				x.classList.remove('img-next');
			}
			pic[i].classList.add('img-next');
			for(x of pic){
				x.classList.remove('img-current');
			}
			pic[i].classList.add('img-current');
			this.classList.add('dot-current');
			for(let j =0;j<dot.length;j++){
				if(j!==i){
					dot[j].classList.remove('dot-current');
				}
			}
		}
	}
	pre.onclick = function(){
		clearInterval(autoslide);
		run.style.display='none';
		playBtn.style.display = 'block';
		var index = 0;
		var dotCurrent = document.querySelector('.dot-current');
		for(x of dot){
			if(x!==dotCurrent) index++;
			else break;
		}
		if(index>0){
			dot[index].classList.remove('dot-current');
			dot[index-1].classList.add('dot-current');
			pic[index].classList.add('img-prev');
			pic[index].classList.remove('img-next');
			pic[index-1].classList.add('img-next');
			pic[index-1].classList.remove('img-prev');
		}
		else{
			dot[dot.length-1].classList.add('dot-current');
			dot[index].classList.remove('dot-current');
			pic[index].classList.add('img-prev');
			pic[index].classList.remove('img-next');
			pic[dot.length-1].classList.add('img-next');
			pic[dot.length-1].classList.remove('img-prev');
		}

	}	
	next.onclick = function(){
		clearInterval(autoslide);
		run.style.display='none';
		playBtn.style.display = 'block';
		var index = 0;
		var dotCurrent = document.querySelector('.dot-current');
		for(x of dot){
			if(x!==dotCurrent) index++;
			else break;
		}
		if(index<dot.length-1){
			dot[index].classList.remove('dot-current');
			dot[index+1].classList.add('dot-current');
			pic[index].classList.add('img-prev');
			pic[index].classList.remove('img-next');
			pic[index+1].classList.add('img-next');
			pic[index+1].classList.remove('img-prev');
		}
		else{
			dot[0].classList.add('dot-current');
			dot[index].classList.remove('dot-current');
			pic[index].classList.add('img-prev');
			pic[index].classList.remove('img-next');
			pic[0].classList.add('img-next');
			pic[0].classList.remove('img-prev');
		}


	}
	function slides(){
		var index=0;
		var currentImg = document.querySelector('.img-current');
		for(x of pic){
			if(x!==currentImg) index++;
			else break;
		}
		if(index<pic.length-1){
			for(x of pic){
				x.classList.remove('img-prev');
				x.classList.remove('img-next');
			}
			pic[index].classList.remove('img-current');
			pic[index].classList.add('img-prev');
			pic[index+1].classList.add('img-current');
			pic[index+1].classList.add('img-next');
		}
		else{
			for(x of pic){
				x.classList.remove('img-prev');
				x.classList.remove('img-next');
			}
			pic[index].classList.remove('img-current');
			pic[index].classList.add('img-prev');
			pic[0].classList.add('img-current');
			pic[0].classList.add('img-next');
		}
		for(let j =0;j<dot.length;j++){
			dot[j].classList.remove('dot-current');
		}
		dot[index].classList.add('dot-current');
		var autoslide = setInterval(slide,3000);
		
	}
	var autoslide = setInterval(slides,3000);

	play.onclick= function(){
		number++;
		if(number%2===0){
			run.style.display='none';
			playBtn.style.display = 'block';
			clearInterval(autoslide);
		}
		else{
			run.style.display='flex';
			playBtn.style.display = 'none';
			setInterval(slides,3000);
		}
	}
},false)