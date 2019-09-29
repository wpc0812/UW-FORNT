<template>
  <div>
    <!-- <LeftMenu/> -->
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保任务查询条件</div>
          </template>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="核保人员:">
                    <el-input v-model="UwMotorcadeMainVO.personNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="查询级别:">
                    <el-radio-group v-model="UwMotorcadeMainVO.level" >
                      <el-radio label="1">本级</el-radio>
                      <el-radio label="2">下级</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.endDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button @click="rtReportedchu" size="mini" type="primary">导出</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from "../../../utils/index";
export default {
  name: "underwritingAmount",
  components: {},
  data() {
    return {
      radio: "1",
      UwMotorcadeMainVO: {
        personNo:"",
        level: "1",
        startDate:"",
        endDate:"",
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
      let uwMotorcadeMainVO=this.UwMotorcadeMainVO
      console.log(uwMotorcadeMainVO)
      let _url = this.HOST + this.$url.underwritingAmountSExport;
      utils.axiosDown(_url, uwMotorcadeMainVO);
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
}

</style>
