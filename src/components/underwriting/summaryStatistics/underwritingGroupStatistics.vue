<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入团单信息维护统计查询条件</div>
          <div class="header-btn" >
            <el-button size="mini" type="primary" @click="exportFile" >导出</el-button>
          </div>
          
        </div>
          <el-form ref="form"  label-width="140px">
            <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="维护人员代码:">
                    <el-input v-model="groupStatistics.maintenanceStaffNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="团单号:">
                    <el-input v-model="groupStatistics.batchNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="groupStatistics.startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="groupStatistics.endDate"
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
  name: "underwritingGroupStatistics",
  components: {
   
  },
  data() {
    return {
      groupStatistics: {},
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //导出
     exportFile() {
      let url = this.HOST + this.$url.exportBatchMaintain
      utils.axiosDown(url,this.groupStatistics)
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

.header-btn{
  position: absolute;
  right: 35px;
  top: 10px;
}
.el-card >>> .el-card__header{
  border: none
}
</style>
