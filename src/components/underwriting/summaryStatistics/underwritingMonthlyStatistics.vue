<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
       <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入人工核保业务量月统计查询条件</div>
          <div class="header-btn" >
            <el-button size="mini" type="primary" @click="exportFile" >导出</el-button>
          </div>
          
        </div>
        <el-form label-width="140px">
            <el-row>
              
                <el-col :span="12">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="monthly.startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="monthly.endDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
             
            </el-row>
          </el-form>



    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from '../../../utils'



export default {
  name: "rtReported",
  components: {
  },
  data() {
    return {
      radio: "1",
      monthly: {
        
      },
      activeNames: ["1"],
      flag: true,
      results: []
    };
  },

  computed: {
  },

  methods: {
    //导出
     exportFile() {
      let url = this.HOST + this.$url.exportArtificialUnderwriteTraffic
      utils.axiosDown(url,this.monthly)
    }
  },
  created() {}
};
</script>
<style scoped>
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
  text-align: left
}
.el-card >>> .el-card__body {
  padding: 10px 20px;
}
.title-blue-bar {
  width: 10px;
  height: 20px;
  background-color: #409eff;
  border-radius: 8px;
  margin-right: 10px;
  float: left
}
.circular {
  border-radius: 8px;
}
.header-btn{
  position: absolute;
  right: 35px;
  top: 10px;
}
.el-card >>> .el-card__header{
  border: none
}
</style>
