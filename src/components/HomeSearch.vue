<template>
	<div id="soul-search">
		<div class="search-title">
			<h2>英烈名录</h2>
			<p>HEROIC MARTYR</p>
		</div>
		<div class="search-input">
			<input v-model="keyword" type="text" maxlength="20" placeholder="请输入关键字" />
			<button type="button" @click="search">搜索</button>
		</div>
		<div class="search-result" v-if="datas.length > 0">
			<div class="item" v-for="item of datas">
				<img :src="'/api'+item.dphoto" class="photo" style="object-fit: cover;"/>
				<div class="center-msg">
					<p class="name">{{item.dname}}</p>
					<p class="time">{{item.dbirth.substr(0, 4) + " — " + item.ddeath.substr(0, 4)}}</p>
					<p class="descibe">{{item.ddescribe}}</p>
				</div>
				<div class="right-action">
					<button class="give-flower">献 花</button>
					<button class="give-flower">鞠 躬</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "soulsearch",
		data() {
			return {
				keyword: "",
				datas: []
			}
		},
		mounted() {
			
		},
		methods: {
			search(){
				if(this.keyword != ""){
					this.request(this.keyword);
				}else{
					this.$message({
						type: "warning",
						message: "关键字不能为空"
					})
				}
			},
			request(keyword){
				this.$http({
					url: "/dead/search?keyword="+keyword+"&pageIndex=&pageSize=",
					method: "get"
				}).then((res)=>{
					if(res != undefined){
						if(res.data.length == 0){
							this.$message({
								message: "没找到，换个关键词吧",
								type: "warning"
							})
						}
						this.datas = res.data;
					}
				})
			}
		}
	}
</script>

<style>
	#soul-search{
		margin: 40px auto;
		max-width: 1000px;
	}
	#soul-search .search-input{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#soul-search .search-input input{
		outline: none;
		border: 1px solid #eee;
		padding: 10px 20px;
		border-radius: 10px;
		position: relative;
		left: 25px;
		width: 400px;
		transition: all .5s; 
	}
	#soul-search .search-input input:focus{
		border: 1px solid #0094ff;
	}
	#soul-search .search-input button{
		outline: none;
		border: 1px solid #eee;
		padding: 5px 20px;
		border-radius: 10px;
		background-color: #0094ff;
		color: white;
		position: relative;
		left: -50px;
		cursor: pointer;
	}
	.search-result .item{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		border-bottom: 1px solid #eee;
		padding: 20px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 5px;
	}
	.search-result .item img.photo{
		flex: 1;
		max-width: 100px;
		max-height: 100px;
		width: 100px;
		height: 100px;
		background-color: #eee;
		border-radius: 10px;
		box-shadow: 5px 5px  10px 0 #333,
					-5px -5px 10px 0 #eee;
		border-top: 2px solid white;
		border-left: 2px solid white;
	}
	.search-result .item .center-msg{
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		text-align: start;
		padding: 10px 30px;
		overflow: hidden;
	}
	.search-result .item .right-action{
		flex: 1;
	}
	.search-result .item .right-action button{
		padding: 10px 20px;
		background-color: #0094ff;
		color: white;
		font-size: 15px;
		font-weight: 100;
		outline: none;
		border-radius: 10px;
		border: none;
		cursor: pointer;
	}
	.search-result .item .right-action button:last-child{
		margin-left: 10px;
	}
</style>