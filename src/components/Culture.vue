<template>
	<div id="culture">
		<div class="culture-content">
			<div class="map-wrap">
				<canvas id="map"></canvas>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue'

	export default {
		name: 'HelloWorld1',
		data() {
			return {
				mapflag: true
			}
		},
		mounted() {
			this.mapCanvas();
		},
		methods: {
			//地图画布的方法
			mapCanvas() {
				//获取页面画布节点
				let canvas = document.getElementById("map");
				//获取画笔
				let ctx = canvas.getContext("2d");
				//设置画布的宽高
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				//当页面大小缩放时
				window.addEventListener("resize", function() {
					canvas.height = window.innerHeight;
					canvas.width = window.innerWidth;
					drawMap();
				});
				//设置画布样式
				canvas.style.background = "transparent";
				canvas.style.position = "relative";
				canvas.style.opacity = "0.6";

				// 地图区域的经纬度中心点
				let geoCenterX = 0,
					geoCenterY = 0;
				// 地图缩放系数
				let scale = 1;
				// 鼠标事件的位置信息
				let offsetX = 0,
					offsetY = 0;
				// 事件类型
				let eventType = '';
				// geojson数据
				let geoData = [];
				// 地图绘制初始化
				function init() {
					axios({
						method: "get",
						// url: "https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json"
						url: "/api/gansu_62.json"
					}).then((res) => {
						geoData = res.data;
						getBoxArea();
						drawMap();
					});
				}
				//分三步：清空画布、绘制地图各子区域、标注城市名称
				function drawMap() {
					//清空
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
					//画子域
					drawArea();
					//标注子域地名
					drawText();
				}

				// 绘制地图各子区域
				function drawArea() {
			 	let dataArr = geoData.features;
					//鼠标是否移动在子域上
					let cursorFlag = false;
					//遍历绘制
					for (var i = 0; i < dataArr.length; i++) {
						let centerX = window.innerWidth / 2;
						let centerY = window.innerHeight / 2;
			 		dataArr[i].geometry.coordinates.forEach(area => {
							//保存画布当前已画的状态
							ctx.save();
							//开始一条路径
							ctx.beginPath();
							//平移
							ctx.translate(centerX, centerY);
							//遍历
							area[0].forEach((elem, index) => {
								//比例更换
								let position = toScreenPosition(elem[0], elem[1])
								if (index === 0) {
									ctx.moveTo(position.x, position.y)
								} else {
									ctx.lineTo(position.x, position.y)
								}
							});
							//闭合回路，关闭路径
							ctx.closePath();
							//子域边框的颜色
							ctx.strokeStyle = '#fff';
							//线条宽度
							ctx.lineWidth = 1;
							// 鼠标悬浮的区域设置颜色
							if (ctx.isPointInPath(offsetX, offsetY)) {
			  			cursorFlag = true;
								ctx.fillStyle = '#006400';
								//点击当前区域用alert弹框提示信息
								if (eventType === 'click') {
									//如果需要显示多少个殡仪馆可以设置一个对应的数组
									//遍历判断当前是哪个省，对应有多少个殡仪馆
			 					alert(dataArr[i].properties.name);
								}
							} else {
								//填充色
								ctx.fillStyle = 'red';
							}
							ctx.fill();
							ctx.stroke();
							//取出上一次的绘制记录ctx.save()
							ctx.restore();
			  	});
						// 动态设置鼠标样式
						if (cursorFlag) {
							canvas.style.cursor = 'pointer';
						} else {
							canvas.style.cursor = 'default';
						}
					}
				}
				// 标注地图上的城市名称
				function drawText() {
					let centerX = window.innerWidth / 2;
					let centerY = window.innerHeight / 2;
			 	geoData.features.forEach(item => {
			  	ctx.save();
						ctx.beginPath();
						// 将画笔移至画布的中心
						ctx.translate(centerX, centerY);
						//画笔颜色
						ctx.fillStyle = '#FFFFFF';
						//字体样式
						ctx.font = '15px 新宋体';
						ctx.textAlign = 'center';
						ctx.textBaseLine = 'center';
						let x = 0,
							y = 0;
						//因不同的geojson文件中中心点属性信息不同，这里需要做兼容性处理
						if (item.properties.cp) {
							x = item.properties.cp[0];
							y = item.properties.cp[1];
						} else if (item.properties.centroid) {
							x = item.properties.centroid[0];
							y = item.properties.centroid[1];
						} else if (item.properties.center) {
							x = item.properties.center[0];
							y = item.properties.center[1];
						}
						let position = toScreenPosition(x, y);
						//写入文字
						ctx.fillText(item.properties.name, position.x, position.y);
						ctx.restore();
			  })
				}

				// 将经纬度坐标转换为屏幕坐标
				function toScreenPosition(horizontal, vertical) {
					return {
						x: (horizontal - geoCenterX) * scale,
						y: (geoCenterY - vertical) * scale
					}
				}

				// 获取包围盒范围，计算包围盒中心经纬度坐标，计算地图缩放系数
				function getBoxArea() {
					let N = -90,
						S = 90,
						W = 180,
						E = -180;
					geoData.features.forEach(item => {
						// 将MultiPolygon和Polygon格式的地图处理成统一数据格式
						if (item.geometry.type === 'Polygon') {
			  		item.geometry.coordinates = [item.geometry.coordinates]
						}
						// 取四个方向的极值
						item.geometry.coordinates.forEach(area => {
							let areaN = -90,
								areaS = 90,
								areaW = 180,
								areaE = -180;
			  		area[0].forEach(elem => {
								if (elem[0] < W) {
									W = elem[0];
								}
								if (elem[0] > E) {
									E = elem[0];
			 				}
								if (elem[1] > N) {
									N = elem[1];
								}
								if (elem[1] < S) {
									S = elem[1];
								}
			 			})
						})
					})
					// 计算包围盒的宽高
					let width = Math.abs(E - W);
					let height = Math.abs(N - S);
					let wScale = window.innerWidth / width;
					let hScale = window.innerHeight / height;
					// 计算地图缩放系数
					scale = wScale > hScale ? hScale : wScale;
					// 获取包围盒中心经纬度坐标
					geoCenterX = (E + W) / 2;
					geoCenterY = (N + S) / 2;
				}

				// 鼠标移动事件
				canvas.addEventListener('mousemove', function(event) {
					offsetX = event.offsetX;
					offsetY = event.offsetY;
					eventType = 'mousemove';
					drawMap();
				});

				// 鼠标点击事件
				canvas.addEventListener('click', function(event) {
					offsetX = event.offsetX;
					offsetY = event.offsetY;
					eventType = 'click';
					drawMap();
				})

				init();
			}
		}
	}
</script>
<style>
	#culture .culture-content .map-wrap{
		padding: 40px 0;
	}
</style>
