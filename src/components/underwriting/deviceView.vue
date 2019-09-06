<template>
  <div class="titlestyle">

    <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">设备信息</div>
            </template>
            <el-table
                  :data="deviceTable"
                  style="width: 100%">
                  <el-table-column
                      prop="deviceName"
                      label="设备名称"
                      width="180">
                  </el-table-column>
                  <el-table-column
                      prop="quantity"
                      label="数量"
                      width="180">
                  </el-table-column>
                  <el-table-column
                      prop="purchasePrice"
                      label="新件购置价">
                  </el-table-column>

                  <el-table-column
                      prop="buyDate"
                      label="购买日期">
                  </el-table-column>
                  <el-table-column
                      prop="actualValue"
                      label="实际价值">
                  </el-table-column>
              </el-table>
          </el-collapse-item>
        </el-collapse>
        
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
      activeNames: ['1'],
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
    this.parameter = this.$route.query; 
    let keyWords = {
      "businessNo": this.parameter.businessNo ||  "454654564564",
      "businessType": this.parameter.type || "P"
      }
    this.$fetch.post(this.HOST + this.$url.carDeviceInfo,keyWords).then(data => {
      console.log(data)
      this.deviceTable = data
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

