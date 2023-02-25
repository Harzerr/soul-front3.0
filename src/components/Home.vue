<template>
	<div id="home">
		<div class="home-content">
			<!-- 这一块可以写成单独的组件，然后在需要的页面引入
				由于我们的网页只有一个地方用到了轮播图我就不单独写成组件了
			 -->
			<div id="lunbo_wrap">
				<div class="lunbo">
					<div class="the_img_wrap">
						<div class="pre_02">
							<!-- 用需要打开的网页链接替换https://baidu.com就可以了 -->
							<img src="../../static/lunbo/lunbo_04.jpeg" @click="linkTo('https://baidu.com')"/>
							<div></div>
						</div>
						<div class="pre_01">
							<img src="../../static/lunbo/lunbo_05.jpeg" @click="linkTo('https://baidu.com')"/>
							<div></div>
						</div>
						<div class="now">
							<img src="../../static/lunbo/lunbo_01.jpeg" @click="linkTo('https://baidu.com')"/>
							<div></div>
						</div>
						<div class="next_01">
							<img src="../../static/lunbo/lunbo_02.jpeg" @click="linkTo('https://baidu.com')"/>
							<div></div>
						</div>
						<div class="next_02">
							<img src="../../static/lunbo/lunbo_03.jpeg" @click="linkTo('https://baidu.com')"/>
							<div></div>
						</div>
						<a class="left_a the_btn_a" href="javascript:;">&lt</a>
						<a class="right_a the_btn_a" href="javascript:;">&gt</a>
					</div>
					<div class="the_point">
						<ol>
							<li class="point_li li_now"></li>
							<li class="point_li"></li>
							<li class="point_li"></li>
							<li class="point_li"></li>
							<li class="point_li"></li>
						</ol>
					</div>
				</div>
			</div>
		</div>
		<!-- 中间的5个图标 -->
		<div class="home_icon">
			<ul class="icon_ul">
				<li class="icon_li">
					<img class="icon" src="../../static/img/icon/icon_0.png" />
					<i class="text">公告公开</i>
				</li>
				<li class="icon_li">
					<img class="icon" src="../../static/img/icon/icon_1.png" />
					<i class="text">参观指南</i>
				</li>
				<li class="icon_li">
					<img class="icon" src="../../static/img/icon/icon_2.png" />
					<i class="text">预约服务</i>
				</li>
				<li class="icon_li">
					<img class="icon" src="../../static/img/icon/icon_3.png" />
					<i class="text">网上祭扫</i>
				</li>
				<li class="icon_li">
					<img class="icon" src="../../static/img/icon/icon_4.png" />
					<i class="text">馆区景观</i>
				</li>
			</ul>
		</div>
		<!-- 基本陈列 -->
		<div class="basic_exhibition">
			<!-- 大图片容器 -->
			<ul class="basic_exhibition_ul">
				<li class="img_li" v-for="item of basics">
					<img :src="item.src">
				</li>
			</ul>
			<!-- 选项 -->
			<ol class="basic_exhibition_choice">
				<li v-for="(item, index) of basics" @click="myChange(index)" v-if="index == 0" class="item active">
					<img :src="item.src" /> 
					<i>{{item.title}}</i>
				</li>
				<li class="item" v-for="(item, index) of basics" @click="myChange(index)" v-if="index != 0">
					<img :src="item.src" /> 
					<i>{{item.title}}</i>
				</li>
			</ol>
			<!-- 选中显示的信息 -->
			<span class="msg_active">
				<p class="title">{{basics[nowIndex].title}}</p>
				<p class="text">{{basics[nowIndex].text}}</p>
			</span>
		</div>
		<!-- 搜索 -->
		<soulsearch></soulsearch>
	</div>
</template>

<script>
	import Vue from 'vue'
	import soulsearch from '../../src/components/HomeSearch.vue'
	export default {
		name: 'Home',
		components: {
			soulsearch
		},
		data() {
			return {
				timer: null,
				nowIndex: 0,
				basics: [
					{	
						src: "../../static/img/basic/basic_0.jpg",
						title: "序厅",
						text: ""
					},
					{
						src: "../../static/img/basic/basic_1.jpg",
						title: "第一单元",
						text: "资产阶级民主革命时期（1905.8——1919.5）"
					},
					{
						src: "../../static/img/basic/basic_2.jpg",
						title: "第二单元",
						text: "中国共产党的创立和大革命时期（1919.5——1927.7）"
					},
					{
						src: "../../static/img/basic/basic_3.jpg",
						title: "第三单元",
						text: "土地革命战争时期（1927.7——1937.7）"
					},
					{
						src: "../../static/img/basic/basic_4.jpg",
						title: "第四单元",
						text: "抗日战争时期(1937.7——1945.8)"
					},
					{
						src: "../../static/img/basic/basic_5.jpg",
						title: "第五单元",
						text: "解放战争时期（1945.8——1949.10）"
					},
					{
						src: "../../static/img/basic/basic_6.jpg",
						title: "第六单元",
						text: "社会主义革命、建设和改革开放新时期（1949.10——）"
					}
				]
			}
		},
		mounted() {
			this.theLunbo();
			let basic_exhibition_ul = document.getElementsByClassName("basic_exhibition_ul")[0];
			this.img_lis = basic_exhibition_ul.getElementsByClassName("img_li");
			this.img_lis[0].classList.add("active");
			let basic_exhibition_choice = document.getElementsByClassName("basic_exhibition_choice")[0];
			this.items = basic_exhibition_choice.getElementsByClassName("item");
			
		},
		beforeDestroy() {
			clearInterval(this.timer);
			this.timer = null;
		},
		methods: {
			//点击切换显示和图片
			myChange(index){
				this.nowIndex = index;
				for(let i = 0; i < this.img_lis.length; i++){
					this.img_lis[i].classList.remove("active");
					this.items[i].classList.remove("active");
				}
				this.items[index].classList.add("active");
				this.img_lis[index].classList.add("active");
			},
			linkTo(url){
				//打开新标签页
				window.open(url);
			},
			//主页大轮播图
			theLunbo(){
				//轮播
				var left_a = document.querySelector(".left_a");
				var right_a = document.querySelector(".right_a");
				var flag = true;
				var index = 0;
				var point_li = document.querySelectorAll('.point_li');
				
				function changeClassr() {
					var pre_02 = document.querySelector(".pre_02");
					var pre_01 = document.querySelector(".pre_01");
					var now = document.querySelector(".now");
					var next_01 = document.querySelector(".next_01");
					var next_02 = document.querySelector(".next_02");
				
					now.className = 'pre_01';
				
					pre_01.className = 'pre_02';
				
					pre_02.className = 'next_02';
				
					next_02.className = 'next_01';
				
					next_01.className = 'now';
				
				}
				
				function changeClassl() {
					var pre_02 = document.querySelector(".pre_02");
					var pre_01 = document.querySelector(".pre_01");
					var now = document.querySelector(".now");
					var next_01 = document.querySelector(".next_01");
					var next_02 = document.querySelector(".next_02");
				
					now.className = 'next_01';
				
					pre_01.className = 'now';
				
					pre_02.className = 'pre_01';
				
					next_02.className = 'pre_02';
				
					next_01.className = 'next_02';
				
				}
				// 右侧
				right_a.addEventListener('click', function() {
					index++;
					if (index >= point_li.length) {
						index = 0;
					}
					changeClassr();
					for (var i = 0; i < point_li.length; i++) {
						point_li[i].className = "point_li";
					}
					point_li[index].className = "point_li li_now";
				})
				
				// 左侧
				left_a.addEventListener('click', function() {
				
					if (index <= 0) {
						index = point_li.length;
					}
					index--;
					changeClassl();
					for (var i = 0; i < point_li.length; i++) {
						point_li[i].className = "point_li";
					}
					point_li[index].className = "point_li li_now";
				
				})
				
				// 自动轮播
				this.timer = setInterval(() => {
					right_a.click();
				}, 2000);
				
				var lunbo_box = document.querySelector(".the_img_wrap");
				lunbo_box.addEventListener('mouseenter', () => {
					clearInterval(this.timer);
				});
				lunbo_box.addEventListener('mouseleave', () => {
					this.timer = setInterval(function() {
						right_a.click();
					}, 2000);
				});
			}
			
		}
	}
</script>
<style>
	i{
		font-style: normal;
	}
	#lunbo_wrap {
		width: 100%;
		min-width: 100%;
		margin: 20px auto;
		margin-top: 50px !important;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#lunbo_wrap .lunbo {
		position: relative;
		width: calc(2*700px);
		height: calc(2*284px);
	}

	#lunbo_wrap .lunbo .the_img_wrap {
		width: inherit;
		height: calc(2*234px);
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
	}

	#lunbo_wrap .lunbo .the_point {
		position: absolute;
		left: 0;
		bottom: 0;
		height: calc(2*(284px - 234px));
		width: 100%;
	}

	#lunbo_wrap .lunbo .the_img_wrap img {
		width: 100%;
		height: 100%;
		cursor: pointer !important; 
	}

	#lunbo_wrap .lunbo .the_img_wrap .now {
		position: absolute;
		z-index: 50;
		width: calc(2*496px);
		height: 100%;
		left: calc(2*102px);
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer !important;
	}

	#lunbo_wrap .lunbo .the_img_wrap .next_01,
	#lunbo_wrap .lunbo .the_img_wrap .pre_01 {
		position: absolute;
		z-index: 30;
		width: calc(2*427px);
		height: calc(2*198px);
		top: 50%;
		transform: translateY(-50%);
	}

	#lunbo_wrap .lunbo .the_img_wrap .next_02,
	#lunbo_wrap .lunbo .the_img_wrap .pre_02 {
		position: absolute;
		z-index: 10;
		width: calc(2*366px);
		height: calc(2*170px);
		top: 50%;
		transform: translateY(-50%);
	}

	#lunbo_wrap .lunbo .the_img_wrap .pre_01 {
		left: 0px;
	}

	#lunbo_wrap .lunbo .the_img_wrap .pre_02 {
		left: calc(2*(-100px));
	}

	#lunbo_wrap .lunbo .the_img_wrap .next_01 {
		left: calc(2*273px);
	}

	#lunbo_wrap .lunbo .the_img_wrap .next_02 {
		left: calc(2*434px);
	}

	#lunbo_wrap .lunbo .the_img_wrap div {
		border-radius: 10px;
		overflow: hidden;
		transition: all .3s;
		position: relative;
	}

	#lunbo_wrap .lunbo .the_img_wrap div img {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}

	#lunbo_wrap .lunbo .the_img_wrap div.next_01 div,
	#lunbo_wrap .lunbo .the_img_wrap div.next_02 div,
	#lunbo_wrap .lunbo .the_img_wrap div.pre_01 div,
	#lunbo_wrap .lunbo .the_img_wrap div.pre_02 div {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
		background-color: rgba(0, 0, 0, .5);
	}

	#lunbo_wrap .lunbo .the_img_wrap .the_btn_a {
		display: block;
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 100%;
		background-color: rgba(0, 0, 0, .6);
		z-index: 100;
		transition: all .5s;
		text-align: center;
		line-height: 50px;
		color: white;
		font-size: 25px;
		top: 50%;
		transform: translateY(-50%);
		font-weight: 900;
	}

	#lunbo_wrap .lunbo .the_img_wrap .the_btn_a:hover {
		background-color: deepskyblue;
	}

	#lunbo_wrap .lunbo .the_img_wrap .left_a {
		left: 20px;
	}

	#lunbo_wrap .lunbo .the_img_wrap .right_a {
		right: 20px;
	}

	#lunbo_wrap .lunbo .the_point ol {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#lunbo_wrap .lunbo .the_point ol li {
		width: 20px;
		height: 2px;
		background-color: rgba(0, 0, 0, .8);
		margin-right: 20px;
		transition: all 0.5s;
	}

	#lunbo_wrap .lunbo .the_point ol li.li_now {
		background-color: deepskyblue;
	}
	.home_icon{
		max-width: 1500px;
		min-width: 1204px;
		margin: 0 auto;
	}
	.home_icon .icon_ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.home_icon .icon_ul .icon_li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.home_icon .icon_ul .icon_li .icon{
		height: 60px;
		width: 60px;
	}
	.home_icon .icon_ul .icon_li .text{
		font-style: normal;
		font-size: 13px;
		margin-top: 5px;
	}
	.basic_exhibition{
		width: 1204px;
		height: 560px;
		background-color: aqua;
		position: relative;
		margin: 0 auto;
		margin-top: 50px;
		border-radius: 20px;
		overflow: hidden;
	}
	.basic_exhibition .basic_exhibition_ul{
		height: 100%;
		width: 100%;
		position: relative;
	}
	.basic_exhibition .basic_exhibition_ul li{
		position: absolute;
		width: 100%;
		height: 100%;
		transition: opacity .5s; 
		opacity: 0;
	}
	.basic_exhibition .basic_exhibition_ul li.active{
		opacity: 1;
	}
	.basic_exhibition .basic_exhibition_ul li img{
		width: 100%;
		height: 100%;
	}
	.basic_exhibition .basic_exhibition_choice{
		position: absolute;
		bottom: 0;
		height: 100px;
		display: flex;
		justify-content: start;
		align-items: center;
	}
	.basic_exhibition .basic_exhibition_choice li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		cursor: pointer;
		margin-left: 50px;
	}
	.basic_exhibition .basic_exhibition_choice li img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid #eee;
	}
	.basic_exhibition .basic_exhibition_choice li i{
		color: white;
	}
	.basic_exhibition .basic_exhibition_choice li.active img{
		border: 3px solid red;
	}
	.basic_exhibition .basic_exhibition_choice li.active i{
		color: red;
	}
	.basic_exhibition .msg_active{
		position: absolute;
		width: 320px;
		right: 0;
		top: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: flex-start;
		padding: 10px 20px;
	}
	.basic_exhibition .msg_active .title{
		font-weight: 100;
		color: coral;
		font-size: 25px;
		width: 100%;
		margin-top: 100px;
	}
	.basic_exhibition .msg_active .text{
		color: #eee;
		font-size: 12px;
		font-weight: 100;
		text-indent: 2em;
		margin-top: 20px;
		text-align: start !important;
	}
</style>
