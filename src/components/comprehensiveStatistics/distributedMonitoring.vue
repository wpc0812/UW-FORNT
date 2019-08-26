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
          <el-form ref="form" :model="ruleExecution" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始日期:" class="text-left">
                    <el-date-picker
                      v-model="ruleExecution.value1"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="7">
                  <el-form-item label="截至日期:" class="text-left">
                    <el-date-picker
                      v-model="ruleExecution.value1"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" type="primary">查询</el-button>
                <el-button @click="query()">导出分发按钮点击情况</el-button>
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
            <el-table-column prop="year" label="员工姓名"></el-table-column>
            <el-table-column prop="insuranceType" label="工号"></el-table-column>
            <el-table-column prop="startTime" label="点击请求分发时间"></el-table-column>
            <el-table-column prop="endTime" label="点击停止分发时间"></el-table-column>
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
            <el-table-column prop="year" label="员工姓名"></el-table-column>
            <el-table-column prop="insuranceType" label="工号"></el-table-column>
            <el-table-column prop="memberName" label="点击放弃按钮时间"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "distributedMonitoring",

  data() {
    return {
      resultsStart:[
        {year:"AAA",insuranceType:"AAA001",startTime:"2019-8-12 09:33:15",endTime:"2019-8-13 00:00:00"}
      ],
      resultsEnd:[],
      relations,
      activeNames: ['1','2'],
      arrow: false,
      ruleExecution: {},
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getrtReported"]),

    reset() {},

    query() {
      this.getrtReported(this.rtReported);
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
