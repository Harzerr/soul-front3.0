<template>
  <div class="online-wrap">
    <div class="title">
      <h4>网上祭扫</h4>
    </div>
    <div class="title-main" style="padding: 10px;color: mediumseagreen;">
      <h4 style="font-weight: 100;">网上祭扫</h4>
      <h5 style="font-weight: 100;">ONLINE TOMB-SWEEPING</h5>
    </div>
    <div class="map-box">
      <h1 class="name" style="display:block;color: gray;">甘肃省</h1>
      <mymap :wh="wh"></mymap>
    </div>
    <homeSearch :issearch="false"></homeSearch>
    <comment></comment>
  </div>
</template>

<script>
import homeSearch from "./HomeSearch";
import mymap from "./Map";
import comment from "./Comment"
export default {
  name: "Online",
  components: {
    mymap,
    homeSearch,
    comment
  },
  data(){
    return {
      wh: [400, 400]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
.map-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.online-wrap{
  width: 70%;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: rgba(255,255,255,0.8);
  box-shadow: 0 0 10px 2px rgba(255,255,255,.7);
  margin: 20px auto;
  margin-top: 40px;
}
</style>
