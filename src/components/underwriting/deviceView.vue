<template>
  <div class="titlestyle">
    <el-card class="circular">
        <el-table
        :data="deviceTable"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="设备名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="数量"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="新件购置价">
        </el-table-column>

        <el-table-column
            prop="address"
            label="购买日期">
        </el-table-column>
        <el-table-column
            prop="address"
            label="实际价值">
        </el-table-column>
    </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "flowLogView",
  data() {
    return {
      flowlog: {

      },
      deviceTable: [
          {date:'luyouqi',name:'123',address:'1231,123'},
          {date:'luyouqi',name:'123',address:'1231,123'},
          {date:'luyouqi',name:'123',address:'1231,123'},

      ]
    };
  },

  methods: {
    
  },
  

  created() {
    debugger
    this.parameter = this.$route.query; 
    let keyWords = {
      comCode: '00000000',
      businessNo: 'asdasdasd',
      taskType: 'H',
      taskId:"E"
    }
    this.$fetch.post(this.HOST + this.$url.deviceDetails,keyWords).then(data => {
      console.log(data)
    })
  }
};
</script>
<style scoped>
.titlestyle { 
    margin-top: 30px
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.text-left {
  overflow: hidden;
}
.text-left {
  width: 1388px;
}
</style>

