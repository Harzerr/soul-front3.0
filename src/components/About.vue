<template>
  <div class="about-wrap" style="width:100%;overflow: hidden">
    <div class="box_relative" style="width:100%;">
      <div style="width:inherit; overflow: hidden">
        <img style="height: 418px; width: 100%;object-fit: cover;" src="../../static/img/imgabout.jpg"/>
        <img style="position:absolute;top:150px;left:12%;height:91px;object-fit: cover;"
             src="../assets/about-us-title.png">
      </div>
    </div>
    <div style="width: 100%;height:650px;background-color: #fff;">
      <div>
        <el-row :gutter="20" style="display: flex; justify-content: center">
          <el-col :span="6" :offset="3" style="padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: start;
    text-indent: 2em;
margin: 0 !important;">
            <div style="margin-top: 150px;text-indent: 0;padding: 0;font-size: 30px;" class="future-title">甘肃英烈网与您回忆往昔</div>
            <div style="margin-top: 5px; margin-left:90px; background-color: #0094ff; height: 10px; weight:10px"></div>
            <div style="margin-top: 40px; margin-left:100px;width: 550px; font-size: 20px; font-family:Helvetica Neue">
              甘肃英烈网项目小组是西北师范大学计算机科学与工程学院的一个项目，初期是以解决祭祀带来的环境污染为出发点，经过团队的多次讨论，结合目前的国内环境，自身的能力出发，决心打造一个以网上纪念亲友，革命烈士，社会英雄，同时传承我国的优秀文化的服务平台。
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
    <div style="width: 100%;height:780px;background-color: #f8fbfd; ">
      <div style="text-align: center;padding-top: 50px;">
        <p class="future-title">品牌故事</p>
      </div>
      <div style="padding-top: 60px">
       <div style="margin: 0 auto; width: 800px">
         <el-carousel height="400px" direction="vertical" :autoplay="false">
           <el-carousel-item v-for="item in imglist2" :key="item.id">
             <img :src="item.url" height="400px" alt="">
           </el-carousel-item>
         </el-carousel>
       </div>
      </div>

    </div>
    <div style="width: 100%;height:380px;background-color: #fff; ">
      <div style="text-align: center;padding-top: 50px;">
        <p class="future-title">鸣谢</p>
      </div>
      <div style="padding-top: 60px">
        <el-row :gutter="20">
          <el-col :span="6" :offset="2">
            <img style="width: 120px; height:120px; border-radius:10px;" src="../assets/head1.jpg">
          </el-col>
          <el-col :span="6" :offset="1">
            <img style="width: 120px; height:120px; border-radius:10px;" src="../assets/head2.jpg">
          </el-col>
          <el-col :span="6" :offset="1">
            <img style="width: 120px; height:120px; border-radius:10px;" src="../assets/head3.jpg">
          </el-col>
        </el-row>
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
          url: require('../assets/carousel-img-1.jpg'),

        },
        {
          id: '2',
          url: require('../assets/carousel-img-2.jpg'),
        },
        {
          id: '3',
          url: require('../assets/carousel-img-3.jpg'),
        },
        {
          id: '4',
          url: require('../assets/carousel-img-4.jpg'),
        }],
      imglist2: [
        {
          id: '1',
          url: require('../assets/carousel-img-1.jpg'),

        },
        {
          id: '2',
          url: require('../assets/carousel-img-2.jpg'),
        },
        {
          id: '3',
          url: require('../assets/carousel-img-3.jpg'),
        },
        {
          id: '4',
          url: require('../assets/carousel-img-4.jpg'),
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
.about-wrap{
  position: relative;
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
  width: 100% !important;
  text-align: start !important;
  white-space: break-spaces !important;
  text-indent: 2em !important;
  margin-top: 20px !important;
  font-size: 16px !important;
  letter-spacing: 5px !important;
  font-weight: 100 !important;
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
img{
  object-fit: cover;
  background-position: center;
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
  width: 8px;
  height: 8px;
  border-radius: 9px;
  background: white;
  margin: auto;
  margin-bottom: -8px;
}
.item{
  flex:2;

  border-bottom:3px solid #7ab3d5;
}
</style>
