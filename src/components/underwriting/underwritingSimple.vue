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
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="查询级别:">
                    <template>
                      <el-radio v-model="radio" label="1">本级</el-radio>
                      <el-radio v-model="radio" label="2">下级</el-radio>
                    </template>
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
                <el-col :span="12">
                  <el-button @click="query" size="mini" type="primary">查询</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column prop="motorcadeNo" label="业务号">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="BusinessNum(scope.row,scope.row.state)"
            >{{scope.row.motorcadeNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="comcode" label="分公司"></el-table-column>
        <el-table-column prop="insuredflag" label="保险期限"></el-table-column>
        <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
        <el-table-column prop="businessNature" label="初登日期"></el-table-column>
        <el-table-column prop="lastFourYearPayPercent" width="115" label="核保人员"></el-table-column>
        <el-table-column prop="finishdate" label="批改类型"></el-table-column>
        <el-table-column prop="isextendtime" label="核保状态"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import HeadMenu from "@/components/layout/headMenu";
import LeftMenu from "@/components/layout/leftMenu";
import utils from "../../utils/index";

export default {
  name: "rtReported",
  components: {
    LeftMenu,
    HeadMenu
  },
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
    // 查询
    query() {},
    BusinessNum(row) {}
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
.circular {
  border-radius: 8px;
}
</style>
