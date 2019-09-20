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
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">投保单</div>
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
            :data="results1"
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
              :current-page.sync="currentPage2"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum2"
            ></el-pagination>
          </el-row>
          <el-table
            stripe
            :data="results2"
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
              :current-page.sync="currentPage3"
              :page-sizes="[20, 40, 80, 160]"
              :page-size="20"
              layout="sizes, prev, pager, next"
              :total="totalnum3"
            ></el-pagination>
          </el-row>
          <el-table
            stripe
            :data="results3"
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
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from "../../../utils/index";
export default {
  name: "underwritingSimple",
  components: {},
  data() {
    return {
      currentPage1: 1,
      totalnum1: 10,
      currentPage2: 1,
      totalnum2: 10,
      currentPage3: 1,
      totalnum3: 10,
      radio: "1",
      UwMotorcadeMainVO: {
        personNo: "",
        level: "",
        startDate: "",
        endDate: ""
      },
      activeNames: ["1"],
      flag: true,
      results1: [],
      results2: [],
      results3: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //导出
    rtReportedchu() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      console.log(uwMotorcadeMainVO);
      let _url = this.HOST + this.$url.underwritingSimpleExport;
      utils.axiosDown(_url, uwMotorcadeMainVO);
    },
    // 查询
    query() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      console.log(uwMotorcadeMainVO);
      this.$fetch
        .post(this.HOST + this.$url.underwritingSimpleSelect, uwMotorcadeMainVO)
        .then(res => {
          console.log(res);
          if (res) {
            this.flag = true;
            this.results1 = res.proposalList;
            this.results2 = res.policyList;
            this.results3 = res.endorsementList;
            this.totalnum1 = res.proposalTotal;
            this.totalnum2 = res.policyTotal;
            this.totalnum3 = res.endorsementTotal;
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
