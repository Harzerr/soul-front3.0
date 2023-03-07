<template>
<div class="search-wrap">
  <div class="title">
    <h4>甘肃烈士名录</h4>
  </div>
  <home-search :issearch="true" style="margin-top: 10px;"></home-search>
</div>
</template>

<script>
import homeSearch from "./HomeSearch";
export default {
  name: "Sreach",
  components: {
    homeSearch
  },
  data(){
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style>
  .search-wrap{
    width: 70%;
    margin: 20px auto;
    margin-top: 40px;
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, .6);
    border-radius: 20px;
    padding: 10px 20px;
  }
  .title{
    border-bottom: 1px solid crimson;
    padding: 10px;
    color: crimson;
    font-size: 20px;
  }
  .title h4{
    font-weight: 100;
  }
</style>
