<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
        <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入人工核保量汇总统计查询条件</div>
          <div class="header-btn" >
            <el-button  size="mini" type="primary" @click="exportFile" >导出</el-button>
          </div>
        </div>
          <el-form ref="form" :model="returnStatistics" label-width="140px">
                  <el-row>
                <el-col :span="8">
                  <el-form-item label="核保人员代码:">
                    <el-input v-model="returnStatistics.personNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="returnStatistics.startDate"
                      type="date"
                      @cheng='checkDateLimit'
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      @change="checkDateLimit"
                      v-model="returnStatistics.endDate"
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
  name: "underwritingReturnStatistics",
  components: {

  },
  data() {
    return {
     returnStatistics:{}
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //导出
    exportFile() {
      let url = this.HOST + this.$url.exportArtificialReturn
      utils.axiosDown(url,this.returnStatistics)
    },
    checkDateLimit(){
      
      if(this.returnStatistics.startDate && this.returnStatistics.endDate){
        if(!utils.dateLimit(this.returnStatistics.startDate,this.returnStatistics.endDate,90)){
          this.this.returnStatistics.endDate = ''
        }

      }
    }
  },
  created() {}
};
</script>
<style scoped>
.el-collapse {
  border: 0;
}
.el-collapse >>> .el-collapse-item__wrap,
.el-collapse >>> .el-collapse-item__header {
  border: 0;
}
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
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
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
  text-align: left
}
.header-btn{
  padding: 3px 0px;
  position: absolute;
  right: 35px;
  top: 10px;
}
.el-card >>> .el-card__header{
  border: none
}
</style>
