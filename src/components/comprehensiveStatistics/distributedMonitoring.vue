<template>
  <div>
    <!-- 分发监控统计 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入统计条件</div>
          </template>
          <el-form ref="form" :model="distributedMonitoring" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始日期:" class="text-left">
                    <el-date-picker
                      v-model="distributedMonitoring.startDate"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="7">
                  <el-form-item label="截至日期:" class="text-left">
                    <el-date-picker
                      v-model="distributedMonitoring.endDate"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query" type="primary">查询</el-button>
                <el-button @click="exportFile">导出分发按钮点击情况</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 点击情况 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">分发按钮点击情况</div>
          </template>
          <el-table
            stripe
            :data="resultsStart"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="employeeName" label="员工姓名"></el-table-column>
            <el-table-column prop="employeeNo" label="工号"></el-table-column>
            <el-table-column prop="clickRequestDistributeTime" label="点击请求分发时间"></el-table-column>
            <el-table-column prop="clickStopDistributeTime" label="点击停止分发时间"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">放弃按钮点击情况</div>
          </template>
          <el-table
            stripe
            :data="resultsEnd"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="employeeName" label="员工姓名"></el-table-column>
            <el-table-column prop="employeeNo" label="工号"></el-table-column>
            <el-table-column prop="clickGiveUpButtonTime" label="点击放弃按钮时间"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from '../../utils'

export default {
  name: "distributedMonitoring",

  data() {
    return {
      resultsStart:[
      ],
      resultsEnd:[],
      activeNames: ['1','2'],
      arrow: false,
      distributedMonitoring: {
        startDate:"",
        endDate:""
      },
    };
  },

  computed: {
  },

  methods: {

    //查询
    query() {

      this.$fetch
        .post(this.HOST + this.$url.distributedMonitoringStatistics, this.distributedMonitoring)
        .then(res => {
          console.log(res);
          this.resultsEnd=res.giveUpButtonSituation
          this.resultsStart=res.distributeButtonSituation
        });

    },
    //导出分发按钮点击情况
    exportFile(){
      let url = this.HOST + this.$url.exportDistributionMonitoringStatistics
      utils.axiosDown(url,this.distributedMonitoring)
    },
    // 未处理展开关闭状态
    untreated(val) {
      this.task.tab1 = val;
    },

    // 已处理展开关闭状态
    processed(val) {
      this.task.tab2 = val;
    }
  },
  created() {}
};
</script>
<style scoped>
</style>
