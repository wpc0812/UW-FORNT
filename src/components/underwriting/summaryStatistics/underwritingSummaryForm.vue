<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入核保特批业务维护情况统计条件</div>
          <div class="header-btn" >
            <el-button size="mini" type="primary" @click="exportFile" >导出</el-button>
          </div>
          
      </div>
      <el-form  label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="summaryForm.startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="summaryForm.endDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核保状态:" class="text-left">
                    <el-radio-group v-model="summaryForm.state" @change="changeRadioHandler">
                      <el-radio label="1">按分公司</el-radio>
                      <el-radio label="2">按核保员</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item label="一级业务类型:" class="text-left">
                  <el-checkbox-group
                    v-model="summaryForm.levelOneBusinessType"
                  >
                    <el-checkbox
                      v-for="state in status1"
                      :label="state.code"
                      :key="state.code"
                    >{{state.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="二级业务类型:" class="text-left">
                  <el-checkbox-group
                    v-model="summaryForm.levelTwoBusinessType"
                  >
                    <el-checkbox
                      v-for="state in status2"
                      :label="state.code"
                      :key="state.code"
                    >{{state.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-row>
              
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
      status1: [
        { code: "0", value: "汇总统计" },
        { code: "1", value: "特批类" },
        { code: "2", value: "异地类" },
        { code: "3", value: "搅拌车类" },
        { code: "4", value: "特二类" },
        { code: "5", value: "高保额/限额类" },
        { code: "6", value: "货车类" },
        { code: "7", value: "负价值客户类" },
        { code: "8", value: "转入类" },
        { code: "9", value: "批减批退类" },
        { code: "10", value: "销售费用/手续费类" },
        { code: "11", value: "其他类" },
        { code: "12", value: "续保报备"}
        
      ],
      status2: [
        { code: "0", value: "异地类中武汉新车" },
        { code: "1", value: "异地类中赣C" },
        { code: "2", value: "异地类中其他" },
        { code: "3", value: "货车类中营业货车" },
        { code: "4", value: "货车类中非营业货车" },
        { code: "5", value: "货车类中挂车" }
      ],
      summaryForm: {
        state: "1",
        businessStates: [],
        levelOneBusinessType: [],
        levelTwoBusinessType: [],
      },
      
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    exportFile() {
      let url = this.HOST + this.$url.exportSpeciallyApprovedMaintain
      utils.axiosDown(url,this.summaryForm)
    },
    // 单选框改变
    changeRadioHandler(){
        console.log(this.summaryForm.state,typeof this.summaryForm.state)
        if(this.summaryForm.state == 1){
            this.status1.push({ code: "12", value: "续保报备"})
        }else if(this.summaryForm.state == 2){
           this.status1.pop({ code: "12", value: "续保报备"})
        }
    },
   
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
