<template>
  <div style="weight:100%; height: 2500px;">
    <div class="box_relative ">
      <div style="height:700px; width:100%; ">
        <img style="height: 418px" src="../assets/about-us-bg.png" alt="">
        <img style="position:absolute; top:150px; left:12%;weight:100%; height: 91px"
             src="../assets/about-us-title.png">
      </div>
    </div>
    <div style="width: 100%;height:650px;background-color: #fff; margin-top: 340px;">
      <div>
        <el-row :gutter="20">
          <el-col :span="6" :offset="3">
            <div style="margin-top: 150px" class="future-title">Soul与您共创未来</div>
            <div style="margin-top: 5px; margin-left:90px; background-color: #0094ff; height: 10px; weight:10px"></div>
            <div style="margin-top: 40px; margin-left:100px;width: 550px; font-size: 20px; font-family:Helvetica Neue">
              “SOUL”在线网络纪念空间项目小组是西北师范大学计算机科学与工程学院的一个项目，初期是以解决祭祀带来的环境污染为出发点，经过团队的多次讨论，结合目前的国内环境，自身的能力出发，决心打造一个以网上纪念亲友，革命烈士，社会英雄，同时传承我国的优秀文化的服务平台。
            </div>
          </el-col>
          <el-col :span="6" :offset="5">
            <div class="block" style="margin-top: 150px; ">
              <el-card shadow="always">
                <el-carousel :interval="4000" type="card" height="300px" width="100%">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.url" height="400px" alt="">
                  </el-carousel-item>
                </el-carousel>

              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="width: 100%;height:780px;background-color: #f8fbfd; ">
      <div style="text-align: center;padding-top: 50px;">
        <p class="future-title">企业文化</p>
      </div>
      <div style="padding-top: 60px">
        <el-row :gutter="20">
          <el-col :span="6" :offset="2">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>使命</p></div>
                <div class="about_conpany_culture_card_item_sign"><span>利人达人</span></div>
                <div class="about_conpany_culture_card_item_content">己欲立而立人，己欲达而达人，能近取譬</div>
                <div class="about_conpany_culture_card_item_content">可谓仁之方也已。</div>
                <i class="el-icon-s-promotion about_conpany_culture_card_item_icon"></i>
              </el-row>
            </el-button>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>愿景</p></div>
                <div class="about_conpany_culture_card_item_sign"><span>引领行业</span></div>
                <div class="about_conpany_culture_card_item_content">赋能客户：提供精准的服务，为客户创造价值。</div>
                <div class="about_conpany_culture_card_item_content">服务社会：勇于承担社会责任，创造社会价值。</div>
                <i class="el-icon-s-data about_conpany_culture_card_item_icon"></i>
              </el-row>
            </el-button>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>价值观</p></div>
                <div class="about_conpany_culture_card_item_sign"><span>大道至拙</span></div>
                <div class="about_conpany_culture_card_item_content">唯天下之至诚能胜天下之至伪，</div>
                <div class="about_conpany_culture_card_item_content">唯天下之至拙能胜天下之至巧。</div>
                <i class="el-icon-share about_conpany_culture_card_item_icon"></i>
              </el-row>
            </el-button>
          </el-col>
        </el-row>
      </div>

    </div>
    <div style="width: 100%;height:650px;background-color: #fff;">
      <div>
        <div style="text-align: center;padding-top: 50px;">
          <p class="future-title">发展历程</p>
        </div>
        <div class="progress-bg">2023</div>
        <div >
          <div style="display:flex;">
            <div style="flex:1;display:flex">
              <div style="flex:1"></div>
              <div class="item"></div>
              <div class="dot">&nbsp&nbsp&nbsp2023</div>
              <div class="item">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp梦开始的地方</div>
            </div>
            <div style="flex:1;display:flex">
              <div class="item"></div>
              <div class="dot">&nbsp&nbsp&nbsp2024</div>
              <div class="item">扬帆启航</div>
            </div>
            <div style="flex:1;display:flex">
              <div class="item"></div>
              <div class="dot">&nbsp&nbsp&nbsp2025</div>
              <div class="item">一往无前</div>
            </div>
            <div style="flex:1;display:flex">
              <div class="item"></div>
              <div class="dot">&nbsp&nbsp&nbsp2026</div>
              <div class="item"></div>
              <div style="flex:1;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'

export default {
  name: 'HelloWorld1',
  data() {
    return {
      message: '',
      imgList: [
        {
          id: '1',
          url: require('../assets/carousel-img-1.png'),

        },
        {
          id: '2',
          url: require('../assets/carousel-img-2.png'),
        },
        {
          id: '3',
          url: require('../assets/carousel-img-3.png'),
        },
        {
          id: '4',
          url: require('../assets/carousel-img-4.png'),
        }]
    }
  },
  mounted() {
    var _this = this;
    Vue.nextTick(() => {
      // _this.getTableData();
      // console.log('_this.tableData',_this.tableData);

    });

  },
  methods: {}
}
</script>
<style>
.box_relative {
  position: absolute;
  left: 0;
  top: 0;
}

.future-title {
  font-size: 40px;
  font-weight: 700;
  color: #333;
}

.box_center {
  margin-left: 30%;
  margin-right: 30%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.about_conpany_culture_card {
  display: flex;
  justify-content: center;
  width: 370px;
  height: 527px;
  cursor: pointer;
  padding-top: 50px;
  border: 1px solid #efefef;
  box-shadow: 0 8px 24px 0 rgba(35, 56, 85, .05);
  border-radius: 4px;
}

.about_conpany_culture_card_item_tittle {
  padding-right: 210px;
  font-size: 30px;
  font-weight: 500;
  color: #333;
}

.about_conpany_culture_card_item_sign {
  padding-right: 200px;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 500;
  /*color: #666;*/
  margin-top: 50px;
}

.about_conpany_culture_card_item_content {
  font-size: 14px;
  font-weight: 400;
  /*color: #333;*/
  margin-top: 20px;
  width: 30px;
  padding-left: 20px;
}

.about_conpany_culture_card_item_icon {
  padding-top: 200px;
  margin-right: 200px;
  font-size: 50px;
}

.el-buttons {
  background: #ffffff;
  color: #6e92c5;
  border: 1px solid #ffffff;
  opacity: 1
}

.el-button:active {
  background: rgb(15, 112, 250) !important;
  font-weight: bold;
}

.el-button:hover {
  background: #1777ff !important;
  color: white !important;
  font-weight: bold;
  border-color: #01a8f9 !important;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #6aaaf6;
  color: #FFF;
}

.progress-bg {
  font-size: 300px;
  /*position: absolute;*/
  text-align: center;
  font-family: Arial-BoldItalicMT, Arial;
  font-weight: 400;
  color: hsla(0, 0%, 78.8%, .1);
  font-style: italic;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.progress-text {
  margin: 0 auto;
  width: 780px;
  height: 100px;
  text-align: center;
  font-size: 20px;
  font-family: AlibabaPuHuiTi-Regular, AlibabaPuHuiTi;
  font-weight: 400;
  color: #333;
}

.dot{
  border:2px solid #007Aff;
  width: 5px;
  height: 4px;
  border-radius: 5px;
  background: white;
  margin: auto;
  margin-bottom: -6px;
}
.item{
  flex:2;

  border-bottom:2px solid #7ab3d5;
}
</style>
