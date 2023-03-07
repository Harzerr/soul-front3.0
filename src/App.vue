<template>
	<div id="app">
		<div class="backTop" @click="toTop">
			<img src="/static/img/to_top.png"/>
		</div>
		<el-row type="flex" id="topNav" class="row-bg" justify="center">
			<el-col class="logo-wrap" :span="6">
				<img src="/static/img/logo.jpg" height="60px" @click="linkHome" style="cursor: pointer;"/>
			</el-col>
			<el-col :span="18">
				<el-menu mode="horizontal" class="el-menu-ul">
					<el-menu-item class="top-nav-li is-active" index="1">
						<router-link class="el-a" to="/home">主页</router-link>
					</el-menu-item>
					<el-menu-item class="top-nav-li" index="2">
						<router-link class="el-a" to="/about">关于我们</router-link>
					</el-menu-item>
					<el-menu-item class="top-nav-li" index="3">
						<router-link class="el-a" to="/culture">史料研究</router-link>
					</el-menu-item>
					<el-menu-item class="top-nav-li" index="4">
						<router-link class="el-a" to="/mourn">缅怀英烈</router-link>
					</el-menu-item>
          <el-menu-item class="top-nav-li" index="5">
            <router-link class="el-a" to="/online">网上祭扫</router-link>
          </el-menu-item>
				</el-menu>
			</el-col>
			<div class="headimg-wrap">
				<el-dropdown>
					<span class="el-dropdown-link"
						style="text-align: center;display: flex;justify-content: center;align-items: center;">
						<img class="headimg el-icon-arrow-down el-icon--right" :src="imgsrc" />
					</span>
					<el-dropdown-menu style="width: 200px;position: absolute;" slot="dropdown" v-if="islogin">
						<el-dropdown-item>
              <div>
                <router-link  class="el-a" :to="'/userspace'">用户空间</router-link>
              </div>
						</el-dropdown-item>
						<el-dropdown-item>
							<div @click="Logout">退出</div>
						</el-dropdown-item>
					</el-dropdown-menu>
					<el-dropdown-menu style="width: 200px;position: absolute;" slot="dropdown" v-if="islogin == false">
						<el-dropdown-item>
							<router-link to="/login" style="display: block;width: 100%;height: 100%;color: black;">未登录
							</router-link>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</el-row>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "@/components/Footer.vue"
	export default {
		name: 'App',
		components: {
			Footer
		},
		data() {
			return {
				IpAddress: "http://127.0.0.1:8090",
				imgsrc: "/static/img/none_login.png",
				islogin: false,
				user: {}
			}
		},
		mounted() {
			//从本地存储获取用户数据 如果数据存在表示登录状态
			if (localStorage.getItem("user") != null) {
				this.user = JSON.parse(localStorage.getItem("user"));
				this.imgsrc = this.IpAddress + this.user.uheadimg;
				this.islogin = true;
			} else {
				this.user = {};
				this.imgsrc = "/static/img/none_login.png";
				this.islogin = false;
			}
			this.windowScroll();
			this.navChange();

      window.addEventListener("load", ()=>{
        this.$router.push("/home");
      });

		},
		beforeDestroy() {

		},
		methods: {
			Logout() {
				this.user = {};
				localStorage.clear();
				this.islogin = false;
				setTimeout(() => {
					this.$message({
						message: '账号已退出',
						type: 'success',
					});
					setTimeout(() => {
						location.reload();
					}, 1000);
				}, 500);
			},
			windowScroll() {
				let element = document.getElementsByClassName("backTop")[0];
				window.addEventListener("scroll", () => {
					if (window.scrollY >= 200) {
						element.style.opacity = "1";
						element.style.right = "50px";
					}else{
						element.style.opacity = "0";
					}
				});
			},
			toTop(){
				let element = document.getElementsByClassName("backTop")[0];
				element.addEventListener("click", () => {
					element.style.top = "30%";
					element.style.opacity = "0";
					let step = 1;
					let timer = setInterval(()=>{
						if(window.scrollY > 0){
							window.scrollTo(0, window.scrollY - step*(10));
							step += 1;
						}else{
							clearInterval(timer);
							setTimeout(()=>{
								element.style.top = "80%";
								element.style.right = "-100px";
							}, 500);
						}
					}, 16);
				});
			},
			navChange(){
				let nav_li = document.querySelectorAll(".top-nav-li");
				nav_li.forEach((item, index) => {
					item.addEventListener("click", ()=>{
						nav_li.forEach((item)=>{
							item.classList.remove("is-active");
						});
						item.classList.add("is-active");
					});
				});
			},
			linkHome(){
				location.href = "http://127.0.0.1:8080/#/home";
				setTimeout(()=>{
					location.reload();
				}, 30);
			}
		}
	}
</script>

<style>
	body,
	html {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}
	html{
		/* 特殊情况开启 */
		/* -webkit-filter: grayscale(100%);
		filter: grayscale(100%); */
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
    min-width: 1000px;
    background-image: url(../static/img/home_bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
	}
	.backTop{
		display: block;
		width: 100px;
		height: 100px;
		position: fixed !important;
		top: 80%;
		transform: translateY(-50%);
		z-index: 99;
		cursor: pointer;
		opacity: 0;
		transition: all 0.5s;
		right: -100px;
	}
	.backTop img{
		height: 100%;
		width: 100%;
	}
	.headimg-wrap {
		position: absolute;
		right: 40px;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		border: 2px solid lightgray;
	}

	.headimg-wrap .headimg {
		display: block;
		height: 40px;
		width: 40px;
		overflow: hidden;
		margin: 0 !important;
		scale: 1.1;
	}
	img{
		object-fit: cover !important;
	}
	.row-bg {
		position: relative;
		top: 0;
		left: 0;
		z-index: 999;
		min-height: 60px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: url(../static/img/nav_bg.jpg) no-repeat;
    background-size: cover;
	}

	.el-menu {
		background-color: transparent !important;
	}

	.el-menu-ul {
		border: none !important;
	}

	.logo-wrap {
		display: flex;
		height: 60px;
		justify-content: center;
		align-items: center;
		line-height: 60px;
		/* border-bottom: 1px solid #e6e6e6; */
		box-sizing: content-box;
	}

	.logo {
		width: 100%;
		height: 100%;
		font-family: "新宋体";
		font-weight: 200;
		font-size: 25px;
		color: #000000;
		line-height: inherit;
		color: white;
	}

	.el-a {
		display: block;
		height: 100%;
	}

	.el-menu--horizontal>.el-menu-item.is-active {
		color: white !important;
		border-bottom: 2px solid #409EFF !important;
	}
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
	.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
		background-color: rgba(0, 0, 0, 0.6);
		color: white;
	}

	.el-menu-item {
		padding: 0 !important;
	}

	.el-menu-item a {
		padding: 0 30px;
    color: white !important;
	}
  /*#topNav{*/
  /*  position: fixed;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*}*/
</style>
