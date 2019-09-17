<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
        <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入人工核保量汇总统计查询条件</div>
          <div class="header-btn" >
            <el-button type="text" @click="rtReportedchu" >导出</el-button>
          </div>
          
        </div>
        <el-form ref="form" label-width="140px">
            <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="核保人员代码:">
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>

             
            </el-row>
          </el-form>
      <!-- <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入人工核保量汇总统计查询条件</div>
          </template>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="核保人员代码:">
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-button @click="rtReportedchu" size="mini" type="primary">导出</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse> -->
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "rtReported",
  components: {},
  data() {
    return {
      radio: "1",
      UwMotorcadeMainVO: {
        businessStates: []
      },
      activeNames: ["1"],
      flag: true,
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //导出
    rtReportedchu() {
      //   let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      //   let _url = this.HOST + this.$url.rtReportedToInsured;
      /**
       * params1  url  地址
       * params  data 参数
       */
      //   utils.axiosDown(_url, uwMotorcadeMainVO);
    },
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
  padding: 3px 0px;
  position: absolute;
  right: 35px;
  top: 10px;
}
.el-card >>> .el-card__header{
  border: none
}
</style>
