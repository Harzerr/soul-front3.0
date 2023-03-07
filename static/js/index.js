window.addEventListener("load", function(){
	location.href = "http://127.0.0.1:8080/#/home";
	//获取页面根节点
	let app = document.getElementById("app");
	//创建一个画布节点
	let canvas = document.createElement("canvas");
	//获取画笔
	let ctx = canvas.getContext("2d");
	//设置画布的宽高
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	//设置画布样式
	canvas.style.background = "linear-gradient(to bottom, lightblue, #eee)";
	// canvas.style.background = "#000000";
	canvas.style.position = "absolute";
	canvas.style.zIndex = "-999";
	canvas.style.left = "0";
	canvas.style.top = "0";
	//向根节点添加画布节点
	app.append(canvas);

	//樱花对象 x, y, r, s, steep宽高旋转缩放速度
	function Sakura(x, y, r, s, steep){
		this.x = x;
		this.y = y;
		this.r = r;
		this.s = s;
		this.steep = steep;
	}
	Sakura.prototype.update = function(){
		if(this.y >= document.body.clientHeight){
			this.y = 0;
			this.x = Math.random()*(document.body.clientWidth);
		}
		if(this.x <= 0){
			this.y = Math.random()*(document.body.clientHeight/2);
			this.x = Math.random()*(document.body.clientWidth - document.body.clientWidth/2)+document.body.clientWidth/2;
		}
	}
	Sakura.prototype.move = function(){
		this.y += this.steep/1.5;
		this.x -= this.steep/2;
	}
	//new 一个图片
	let img = new Image();
	img.src = "../static/img/sakura.png";
	//樱花数组
	let sakuraArr = [];
	let count = 100;
	for(var i = 0; i < count; i++){
		let sakura = new Sakura(Math.random()*(document.body.clientWidth), Math.random()*(document.body.clientHeight/2)-200, Math.random()*(1-0.5)+0.5, (1/5)*(Math.random()*(1-0.3)+0.3), Math.random()*(5-1)+1);
		sakuraArr.push(sakura);
	}
	function draw(){
		img.onload = function(){
			setInterval(function(){
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				for(var i = 0; i < sakuraArr.length; i++){
					let sakura = sakuraArr[i];
					ctx.translate(sakura.x, sakura.y);
					ctx.restore(sakura.r*Math.PI);
					ctx.drawImage(img, sakura.x, sakura.y, img.width*sakura.s, img.height*sakura.s);
					ctx.translate(-sakura.x, -sakura.y);
					sakura.move();
					sakura.update();
				}
			}, 16);
		}
	}
	draw();
	//当页面大小缩放时
	function resize(){
		if (document.body.clientWidth > 1000){
      canvas.width = document.body.clientWidth;
    }else {
      canvas.width = 1000;
    }
		canvas.height = document.body.clientHeight;
		draw();
	}
	window.addEventListener("resize", function(){
		resize();
	});
	resize();
	setInterval(()=>{
		if (document.body.clientWidth !== canvas.width || document.body.clientHeight !== canvas.height){
      resize();
    }
	}, 2000);
});
