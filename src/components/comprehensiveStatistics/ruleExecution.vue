<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保规则执行的统计条件</div>
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
                <el-button @click="query()">导出</el-button>
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
            <el-table-column prop="year" label="规则编号"></el-table-column>
            <el-table-column prop="insuranceType" label="车辆使用性质"></el-table-column>
            <el-table-column prop="memberName" label="核保结果"></el-table-column>
            <el-table-column prop="memberName" label="执行次数"></el-table-column>
            <el-table-column prop="memberName" label="触发率"></el-table-column>
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
  name: "rtReported",

  data() {
    return {
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
