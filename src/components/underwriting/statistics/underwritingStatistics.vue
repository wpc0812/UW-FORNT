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
                    <el-radio-group v-model="UwMotorcadeMainVO.level">
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
                <el-col :span="10">
                  <el-form-item label="核保状态:" class="text-left">
                    <el-checkbox-group v-model="arraystate" @change="changecheckbox">
                      <el-checkbox label="通过"></el-checkbox>
                      <el-checkbox label="未通过"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-button @click="rtReportedchu" size="mini" type="primary">导出</el-button>
                </el-col>
                <el-col :span="8">
                  <el-button @click="statisticalResults" size="mini" type="primary">统计结果</el-button>
                </el-col>
                <el-col :span="8">
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
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">投保单</div>
          </template>
          <el-row class="text-left">
            <el-pagination
              small
              :current-page.sync="currentPage"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum"
            ></el-pagination>
          </el-row>
          <el-table
            stripe
            :data="InsuranceApplication"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="businessNo" label="业务号">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="BusinessNum1(scope.row)"
                >{{scope.row.businessNo}}</el-button>
              </template>
            </el-table-column>
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
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">保单</div>
          </template>
          <el-row class="text-left">
            <el-pagination
              small
              :current-page.sync="currentPage1"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum1"
            ></el-pagination>
          </el-row>
          <el-table
            stripe
            :data="InsurancePolicy"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="businessNo" label="业务号">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="BusinessNum2(scope.row)"
                >{{scope.row.businessNo}}</el-button>
              </template>
            </el-table-column>
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
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">批单</div>
          </template>
          <el-row class="text-left">
            <el-pagination
              small
              :current-page.sync="currentPage2"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum2"
            ></el-pagination>
          </el-row>
          <el-table
            stripe
            :data="singleNum"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="businessNo" label="业务号">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="BusinessNum3(scope.row)"
                >{{scope.row.businessNo}}</el-button>
              </template>
            </el-table-column>
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
    <el-card class="circular mt4 shadow" v-if="flag1">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">统计结果</div>
          </template>
          <el-row class="text-left">
            <el-pagination
              small
              :current-page.sync="currentPage3"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum3"
            ></el-pagination>
          </el-row>
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
      totalnum: 10,
      currentPage: 1,
      totalnum1: 10,
      currentPage1: 1,
      totalnum2: 10,
      currentPage2: 1,
      totalnum3: 10,
      currentPage3: 1,
      UwMotorcadeMainVO: {
        personNo: "",
        state: "",
        level: "1",
        startDate: "",
        endDate: ""
      },
      activeNames: ["1"],
      flag: true,
      flag1: true,
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
    //投保单
    BusinessNum1(row) {
      let name="h1";
       this.$router.push({
        path: "/detailedInformation",
        query: { row: row.businessNo, name }
      });
      // console.log(row.businessNo,name)

    },
    //保单
    BusinessNum2(row) {
      let name="h1";
       this.$router.push({
        path: "/detailedInformation",
        query: { row: row.businessNo, name }
      });
    },
    //批单
    BusinessNum3(row) {
      let name="h3";
       this.$router.push({
        path: "/detailedInformation",
        query: { row: row.businessNo, name }
      });
    },
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
