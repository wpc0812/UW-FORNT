<template>
  <div>
    <!-- 信息展示 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <el-table
            stripe
            :data="InsuranceApplication"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="branchOffice" label></el-table-column>
            <el-table-column prop="insurancePeriod" label="保险期限"></el-table-column>
            <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
            <el-table-column prop="initialDate" label="初登日期"></el-table-column>
            <el-table-column prop="underwriteUser" width="115" label="核保人员"></el-table-column>
            <el-table-column prop="correctionType" label="批改类型"></el-table-column>
            <el-table-column prop="underwriteState" label="核保状态"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <el-table
            stripe
            :data="InsurancePolicy"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="branchOffice" label="分公司"></el-table-column>
            <el-table-column prop="insurancePeriod" label="保险期限"></el-table-column>
            <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
            <el-table-column prop="initialDate" label="初登日期"></el-table-column>
            <el-table-column prop="underwriteUser" width="115" label="核保人员"></el-table-column>
            <el-table-column prop="correctionType" label="批改类型"></el-table-column>
            <el-table-column prop="underwriteState" label="核保状态"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <el-table
            stripe
            :data="singleNum"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="branchOffice" label="分公司"></el-table-column>
            <el-table-column prop="insurancePeriod" label="保险期限"></el-table-column>
            <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
            <el-table-column prop="initialDate" label="初登日期"></el-table-column>
            <el-table-column prop="underwriteUser" width="115" label="核保人员"></el-table-column>
            <el-table-column prop="correctionType" label="批改类型"></el-table-column>
            <el-table-column prop="underwriteState" label="核保状态"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <el-table
            stripe
            :data="statisticalResult"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="submissionNumber" label="核保提交数量"></el-table-column>
            <el-table-column prop="artificialUnderwritingNumber" label="人工核保通过数量"></el-table-column>
            <el-table-column prop="autoUnderwritingNumber" label="自动核保通过数量"></el-table-column>
            <el-table-column prop="artificialUnderwritingPassingRate" label="人工核保通过率%"></el-table-column>
            <el-table-column prop="autoUnderwritingPassingRate" label="自动核保通过率%"></el-table-column>
            <el-table-column prop="aumUnderwritingPassingRate" label="总核保通过率%"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from "../../../utils/index";

export default {
  name: "rtReported",
  components: {},
  data() {
    return {
      activeNames: ["1"],
      InsuranceApplication: [],
      InsurancePolicy: [],
      singleNum: [],
      statisticalResult: [],
      arraystate:[]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //多选框
    changecheckbox() {
    },
    //导出
    rtReportedchu() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      uwMotorcadeMainVO.state = this.arraystate.join();
      let _url = this.HOST + this.$url.underwritingStatisticsExport;
      utils.axiosDown(_url, uwMotorcadeMainVO);
    },
    // 查询
    query() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      uwMotorcadeMainVO.state = this.arraystate.join();
      this.$fetch
        .post(this.HOST + this.$url.underwritingStatistics, uwMotorcadeMainVO)
        .then(res => {
          if (res) {
            this.flag = true;
            this.flag1 = false;
            this.InsuranceApplication = res.proposalList;
            this.InsurancePolicy = res.policyList;
            this.singleNum = res.endorsementList;
            this.totalnum = res.proposalTotal;
            this.totalnum1 = res.policyTotal;
            this.totalnum2 = res.endorsementTotal;
          }
        });
    },
    //统计结果
    statisticalResults() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      uwMotorcadeMainVO.state = this.arraystate.join();
      this.$fetch
        .post(
          this.HOST + this.$url.underwritingStatisticsResult,
          uwMotorcadeMainVO
        )
        .then(res => {
          if (res) {
            this.flag = false;
            this.flag1 = true;
            this.statisticalResult.push(res);
          }
        });
    },
    //业务号
    BusinessNum(row) {}
  },
  created() {
    this.flag = false;
    this.flag1 = false;
  }
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
