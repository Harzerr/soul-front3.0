<template>
  <div class="about-wrap" style="width:100%;overflow: hidden">
    <div class="box_relative" style="width:100%;">
      <div style="width:inherit; overflow: hidden">
        <img style="height: 418px; width: 100%;object-fit: cover;background-size: cover;background-position: center;" src="../../static/img/cbg.jpg"/>
        <div class="image-title" style="position: absolute;top:150px;left:12%;height:91px;font-family: '黑体';font-style: italic;color: white;text-shadow: 1px 1px #333;">
          <h1>史料研究</h1>
          <h2>Historical data research</h2>
        </div>

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
            <div style="margin-top: 150px;text-indent: 0;padding: 0;font-size: 30px;" class="future-title">丧葬史料</div>
            <div style="margin-top: 5px; margin-left:90px; background-color: #0094ff; height: 10px; weight:10px"></div>
            <div style="margin-top: 40px; margin-left:100px;width: 550px; font-size: 20px; font-family:Helvetica Neue">
              中华民族殡葬习俗和殡葬文化源远流长，数万年前就有了一定的丧葬形式。由于人们对图腾的崇拜，对死人的崇拜，受封建思想的影响，发展到对死人的畏惧，沿着这条线发展到“厚葬薄养”的传统习俗。从目前的情况来看，还是“唯心主义“占上风的一个习俗文化领域。迷信的、封建的殡葬活动，在民间仍然流行并严重地存在。根据中国人的传统伦理观念，当亲人临终时，亲属要给他穿好衣服，带上渡河线、买路线，如同给出远门的亲人整理行装一样。安葬之后，每逢节日、诞辰，亲属要上坟扫墓，焚纸送物，不仅带有点心、水果，还有巧克力、啤酒，甚至还要为死人点燃一支香烟，如此体贴周到的服务，孝子与亲友间的人情关系表现得淋漓尽致。</div>
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
        <p class="future-title">丧葬文化</p>
      </div>
      <div style="padding-top: 60px">
        <el-row :gutter="20">
          <el-col :span="6" :offset="2">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>资源节约</p></div>
                <div class="about_conpany_culture_card_item_content">实现便捷、低碳绿色祭祀的新形势，减少环境污染，减少不必要的资源浪费。
                </div>
              </el-row>
            </el-button>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>缅怀</p></div>
                <div class="about_conpany_culture_card_item_content">发扬爱国热情作为爱国主义教育的重要内容，大力弘扬践行社会主义核心价值观。
                </div>
              </el-row>
            </el-button>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button class="about_conpany_culture_card el-buttons">
              <el-row>
                <div class="about_conpany_culture_card_item_tittle"><p>改革</p></div>
                <div class="about_conpany_culture_card_item_content">为个人提供异地他乡实现缅怀英烈、祭奠先祖、亲友祈福的平台让每一个逝去的生命都能被记录、被怀念。</div>
              </el-row>
            </el-button>
          </el-col>
        </el-row>
      </div>

    </div>
    <div style="width: 100%;height:780px;background-color: #f8fbfd; ">
      <div style="text-align: center;padding-top: 50px;">
        <p class="future-title">往昔回忆</p>
      </div>
      <div style="padding-top: 60px">
        <div style="margin: 0 auto; width: 800px">
          <el-carousel height="400px" direction="vertical" :autoplay="false">
            <el-carousel-item v-for="item in imglist2" :key="item.id">
              <img :src="item.url" height="400px" width="100%" alt="">
            </el-carousel-item>
          </el-carousel>
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
        }],
      imglist2: [
        {
          id: '1',
          url: require('../assets/1.jpg'),

        },
        {
          id: '2',
          url: require('../assets/2.jpg'),
        },
        {
          id: '3',
          url: require('../assets/3.jpg'),
        },
        {
          id: '4',
          url: require('../assets/4.jpg'),
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
  opacity: 1;
  /*width: 100%;*/
  word-break: break-word;
  word-break: break-all;
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
