<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
           <el-form ref="underwritingRate" :model="underwritingRate" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始日期:" class="text-left">
                    <el-date-picker
                      v-model="underwritingRate.startDate"
                      value-format="yyyy-MM-dd"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8" :offset="7">
                  <el-form-item label="截至日期:" class="text-left">
                    <el-date-picker
                      v-model="underwritingRate.endDate"
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
            <div class="card-title">核保通过率</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="year" label="自动通过率"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "underwritingRate",

  data() {
    return {
      activeNames: ["1", '2'],
      arrow: false,
      underwritingRate: {
        startDate:"",
        endDate:"",
      },
      results: []
    };
  },

  computed: {
    // ...mapGetters(["getList"])
  },

  methods: {
    // ...mapActions(["getrtReported"]),

    query() {
       this.$fetch
        .post(this.HOST + this.$url.underwritingRateStatistics, this.underwritingRate)
        .then(res => {
          // console.log(res);
          this.results=res
        });
    },
     querychu() {
      //  this.$fetch
      //   .post(this.HOST + this.$url.underwritingRateStatistics, this.underwritingRate)
      //   .then(res => {
      //     console.log(res);

      //     this.results=res
      //   });
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
