<template>
	<div id="soul-search">
		<div class="search-title">
			<h2>甘肃英烈名录</h2>
			<p>GANSU HEROIC MARTYR</p>
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
          <p class="sex">{{item.dsex}}</p>
					<p class="time">{{item.dbirth.substring(0, 4) + " — " + item.ddeath.substring(0, 4)}}</p>
					<p class="descibe">{{item.ddescribe}}</p>
				</div>
				<div class="right-action">
					<button class="give-flower">献 花</button>
					<button class="give-flower">鞠 躬</button>
				</div>
			</div>
      <div class="pager-div">
          <span class="totalpage" style="color:mediumseagreen;font-weight: 100;">共{{this.pager.total}}页{{this.pager.count}}条数据：当前第{{this.pager.pageIndex}}页</span>
          <span class="btn-wrap" style="display: inline-block; margin-left: 20px; border-radius: 10px;overflow:hidden;">

            <el-pagination v-if="this.pager.total <= 5"
                           @size-change="handleSizeChange"
                           @current-change="changePageIndex"
              layout="prev, pager, next"
              :total="this.pager.total*10">
            </el-pagination>


            <el-pagination v-if="this.pager.total > 5"
                           @size-change="handleSizeChange"
                           @current-change="changePageIndex"
              layout="prev, pager, next"
              :total="this.pager.total*10">
            </el-pagination>

          </span>
      </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "soulsearch",
    props: ["issearch"],
		data() {
			return {
				keyword: "",
				datas: [],
        pager: {
          pageIndex: 1,
          pageSize: 5,
          total: 0,
          count: 0,
          keyword: "甘肃"
        }
			}
		},
		mounted() {
      console.log(this.$props)
      console.log(this.$props.issearch)
      if (this.$props.issearch){
        this.request(this.pager.keyword, 1, this.pager.pageSize, false);
      }
		},
		methods: {
			search(){
				if(this.keyword != ""){
          this.pager.keyword = this.keyword;
					this.request(this.pager.keyword, this.pager.pageIndex, this.pager.pageSize, true);
				}else{
					this.$message({
						type: "warning",
						message: "关键字不能为空"
					})
				}
			},
			request(keyword, pageIndex, pageSize, flag){
				this.$http({
					url: "/dead/search?keyword="+keyword+"&pageIndex="+pageIndex+"&pageSize="+pageSize,
					method: "get"
				}).then((res)=>{
					if(res != undefined){
						if(res.data.length == 0){
							this.$message({
								message: "没找到，换个关键词吧",
								type: "warning"
							})
						}
						this.datas = res.data.deads;
            this.pager.count = res.data.count;
            this.pager.total = Math.ceil(res.data.count / this.pager.pageSize);
            if (flag){
              this.$message({
                message: "为您找到"+this.pager.count+"条数据",
                type: "success"
              });
            }
					}
				})
			},
      handleSizeChange(e){
        console.log(e);
      },
      changePageIndex(e){
        this.pager.pageIndex = e;
        this.request(this.pager.keyword, this.pager.pageIndex, this.pager.pageSize, false);
      }
		}
	}
</script>

<style>
	#soul-search{
		margin: 40px auto;
		max-width: 1000px;
	}
  .el-pagination{
    padding: 0 !important;
    border-radius: 10px;
  }
  .pager-div{
    width: 100%;
    max-width: 800px;
    min-width: 600px;
    padding: 20px;
    text-align: start;
    display: flex;
    justify-content: start;
    align-items: center;
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
		border-radius: 15px;
    box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, .3);
	}
	.search-result .item img.photo{
		flex: 1;
		max-width: 100px;
		max-height: 100px;
		width: 100px;
		height: 100px;
		background-color: #eee;
		border-radius: 10px;
		box-shadow: 5px 5px  10px 0 rgba(0, 0, 0, .4),
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
    max-height: 68px;
	}
	.search-result .item .right-action button:last-child{
		margin-left: 10px;
	}
</style>
