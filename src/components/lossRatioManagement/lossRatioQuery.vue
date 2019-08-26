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
          <el-form ref="form" :model="lossRatioQuery" label-width="140px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="关系人代码:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">客户查询</el-button>
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
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form ref="form" :model="lossRatioQuery" label-width="140px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务号:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车牌号码:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="发动机号码:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车架号:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN号:" class="text-left">
                  <el-input v-model="lossRatioQuery.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">标的查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "lossRatioQuery",

  data() {
    return {
      activeNames: ["1", "2"],
      relations,
      pageSize: 10,
      lossRatioQuery: {},
      results: [
        { memberName: 111111111 },
        { memberName: 111111111 },
        { memberName: 111111111 },
        { memberName: 111111111 }
      ]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getlossRatioQuery"]),

    reset() {},

    query() {
      this.getlossRatioQuery(this.lossRatioQuery);
    },

    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    }
  },
  created() {}
};
</script>
<style scoped>
</style>
