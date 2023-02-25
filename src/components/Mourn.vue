<template>
  <div>
    <div>
      这里定义"人物悼念"的页面
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'HelloWorld1',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    var _this = this;
    Vue.nextTick(() => {
    // _this.getTableData();
    // console.log('_this.tableData',_this.tableData);

    });
  },
  methods: {
  /**
    getTableData(){
      var _this = this;
      _this.load_data = true;
      _this.tableData = [];

      var apiUrl = '/msg/getAllJson';
      setTimeout(() => {
        this.$axios.get(apiUrl).then((response) => {
        console.log('haha:',response.data);
          _this.tableData = response.data;
          _this.load_data = false;
        }).catch(function (response) {
          console.log(response)
        });
      }, 200);

    }
    */
  }
}
</script>
