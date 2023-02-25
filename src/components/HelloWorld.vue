<template>
  <div>
    <div>
    <el-table
          :data="tableData"
          v-loading="load_data"
          element-loading-text="拼命加载中"
          border
          stripe
          style="font-size: 1px;"
          highlight-current-row
          :default-sort = "{prop: 'utLineCoverage', order: 'descending'}"
        >
          <el-table-column
            prop="id"
            label="ID"
            min-width="105px">
          </el-table-column>
          <el-table-column
            prop="message"
            label="msg"
            sortable
            min-width="110px">
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'HelloWorld1',
  data () {
    return {
      message: 'Hello World!',
      tableData: [],
      load_data: true,

    }
  },
  mounted () {
    var _this = this;
    Vue.nextTick(() => {
      _this.getTableData();
      console.log('_this.tableData',_this.tableData);

    });
  },
  methods: {
    getTableData(){
      var _this = this;
      _this.load_data = true;
      _this.tableData = [];

      var apiUrl = '/api/getAllJson';
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
  }
}
</script>
