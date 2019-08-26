<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保任务查询条件</div>
          </template>
          <el-form ref="form" :model="payeeModificationReview" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="险种:">
                    <el-input v-model="payeeModificationReview.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="payeeModificationReview.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="状态:">
                    <el-input v-model="payeeModificationReview.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="机构代码:">
                    <el-input v-model="payeeModificationReview.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收款人账户:" class="text-left">
                    <el-input v-model="payeeModificationReview.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="占用状态:">
                    <el-input v-model="payeeModificationReview.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="提交时间:">
                    <el-input v-model="payeeModificationReview.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
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
            <div class="card-title">收款人信息</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="insuranceType" label="业务状态"></el-table-column>
            <el-table-column prop="numNo" label="业务号">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="mini"
                  @click="godetail(scope.row.numNo)"
                >{{scope.row.numNo}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="memberName" label="收款人账户"></el-table-column>
            <el-table-column prop="memberName" label="险种"></el-table-column>
            <el-table-column prop="memberName" label="归属机构"></el-table-column>
            <el-table-column prop="memberName" label="提交时间"></el-table-column>
            <el-table-column prop="memberName" label="处理人"></el-table-column>
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
  name: "payeeModificationReview",

  data() {
    return {
      activeNames: ["1", "2"],
      relations,
      payeeModificationReview: {},
      results: [
        { insuranceType:"正常",memberName: 111111111, numNo: "132121" },
        { insuranceType:"正常",memberName: 111111111, numNo: "135521" },
        { insuranceType:"正常",memberName: 111111111, numNo: "122131" },
        { insuranceType:"正常",memberName: 111111111, numNo: "137131" },
        { insuranceType:"正常",memberName: 111111111, numNo: "136131" }
      ]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getpayeeModificationReview"]),

    reset() {},
    godetail(numNo) {
      this.$router.push({
        path: "/payeeModificationDetail",
        query: {
          numNo
        }
      });
    },
    query() {
      this.getpayeeModificationReview(this.payeeModificationReview);
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
