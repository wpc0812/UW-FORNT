<template>
  <div>
    <!-- <LeftMenu/> -->
    <!-- 查询条件 -->
    <el-card class="circular">

       <div slot="header" class="clearfix">
          <div class="title-blue-bar"></div>
          <div class="card-title">请输入自动核保统计查询条件</div>
        </div>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>      
                <el-col :span="8">
                  <el-form-item label="机构代码:">
                    <el-input v-model="reportedBike.comCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="reportedBike.startDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="reportedBike.endDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              
                <el-col :span="12">
                  <el-button @click="exportFile" size="mini" type="primary">导出</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button @click="query" size="mini" type="primary">查询</el-button>
                </el-col>
            
            </el-row>
          </el-form>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">投保单</div>
          </template>
          <el-pagination
            class="mb10 mt10 text-left"
            @size-change="proposalSizeChange"
            @current-change="proposalCurrentChange"
            :pager-count="5"
            small
            :current-page="pageInfo.proposalPageNo"
            :page-sizes="[10, 20, 50]"
            :page-size="pageInfo.proposalPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageInfo.proposalTotal"
          >
          </el-pagination>
          <el-table
            stripe
            :data="proposalList"
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
                  @click="BusinessNum(scope.row)"
                >{{scope.row.businessNo}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="insurancePeriod" label="保险期限"></el-table-column>
            <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
            <el-table-column prop="initialDate" label="初登日期"></el-table-column>
            <el-table-column prop="riskCode" width="115" label="承保险别"></el-table-column>
            <el-table-column prop="underwriteState" label="核保状态"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular mt4 shadow " v-if="flag">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">保单</div>
          </template>
          <el-pagination
            class="mb10 mt10 text-left"
            @size-change="policySizeChange"
            @current-change="policyCurrentChange"
            :pager-count="5"
            small
            :current-page="pageInfo.policyPageNo"
            :page-sizes="[10, 20, 50]"
            :page-size="pageInfo.policyPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageInfo.policyTotal"
          >
          </el-pagination>
           <el-table
            stripe
            :data="policyList"
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
                  @click="BusinessNum(scope.row)"
                >{{scope.row.businessNo}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="insurancePeriod" label="保险期限"></el-table-column>
            <el-table-column prop="insuredName" label="被保险人名称"></el-table-column>
            <el-table-column prop="initialDate" label="初登日期"></el-table-column>
            <el-table-column prop="riskCode" width="115" label="承保险别"></el-table-column>
            <el-table-column prop="underwriteState" label="核保状态"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
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
      UwMotorcadeMainVO: {
        businessStates: []
      },
      reportedBike: {},
      pageInfo: {
        proposalPageNo: 1,
        proposalPageSize: 10,
        proposalTotal: 0 ,// 投保单总条数
        policyTotal: 0 ,// 保单总条数
        policyPageNo: 1,
        policyPageSize: 10
      },
      activeNames: ["1"],
      flag: true,
      policyList: [], // 保单信息
      proposalList:[]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    

    // 条数
    policySizeChange(val) {
      this.pageInfo.policyPageSize = val
     setTimeout(() => {
       this.query()
     } );
    },
    // 第几页
    policyCurrentChange(val) {
     this.pageInfo.policyPageNo = val
     setTimeout(() => {
       this.query()
     } );
    },
    // 条数
    proposalSizeChange(val) {
      debugger
      this.pageInfo.proposalPageSize = val
     setTimeout(() => {
       this.query()
     } );
    },
    // 第几页
    proposalCurrentChange(val) {
     this.pageInfo.proposalPageNo = val
     setTimeout(() => {
       this.query()
     } );
    },
    // 查询
    query() {
      this.$fetch.post(
        this.HOST + this.$url.comprehensiveStatisticsCarReportStatistics,
        {...this.reportedBike,...this.pageInfo}).then(data => {
          if( data) {
            if(data.policyList && data.policyList instanceof Array && data.policyList.length > 0) {
               this.policyList = data.policyList
                this.policyTotal = data.policyTotal
            }
            if(data.proposalList && data.proposalList instanceof Array && data.proposalList.length > 0) {
              this.proposalList = data.proposalList
              this.proposalTotal = data.proposalTotal
            }
          }

      })
    },
    BusinessNum(row) {
      console.log(row)
    },
    //导出
    exportFile() {
      let url = this.HOST + this.$url.exportCarReportStatistics
      utils.axiosDown(url,this.reportedBike)
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
.circular {
  border-radius: 8px;
}
.el-card >>> .el-card__header{
  border: none
}
</style>
