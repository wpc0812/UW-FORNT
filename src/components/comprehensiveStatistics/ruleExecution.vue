<template>
  <div>
    <!-- 查询条件-->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保规则执行的统计条件</div>
          </template>
          <el-form ref="ruleExecution" :model="ruleExecution" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始日期:" class="text-left">
                    <el-date-picker
                      v-model="ruleExecution.startDate"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="7">
                  <el-form-item label="截至日期:" class="text-left">
                    <el-date-picker
                      v-model="ruleExecution.endDate"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query" type="primary">查询</el-button>
                <el-button @click="querychu">导出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">规则执行情况</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="ruleNo" label="规则编号"></el-table-column>
            <el-table-column prop="vehicleUseNature" label="车辆使用性质"></el-table-column>
            <el-table-column prop="underwriteResult" label="核保结果"></el-table-column>
            <el-table-column prop="executeNum" label="执行次数"></el-table-column>
            <el-table-column prop="triggerRate" label="触发率"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ruleExecution",

  data() {
    return {
      activeNames: ['1','2'],
      arrow: false,
      ruleExecution: {
        endDate:"",
        startDate:""
      },
      results: []
    };
  },


  methods: {

    //查询
    query() {
      console.log(this.ruleExecution)
       this.$fetch
        .post(this.HOST + this.$url.ruleExecutionRule, this.ruleExecution)
        .then(res => {
          console.log(res);

          this.results=res
        });
    },
    //导出
    querychu(){
      //  this.$fetch
      //   .post(this.HOST + this.$url.ruleExecutionRule, ImageRequestDTO)
      //   .then(res => {
      //     console.log(res);
      // });
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
