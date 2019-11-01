<template>
  <div>
    <!-- <LeftMenu/> -->
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select v-model="UwMotorcadeMainVO.insuredflag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in relations"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:">
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:">
                    <el-input v-model="UwMotorcadeMainVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="UwMotorcadeMainVO.motorcadeNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提交时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="rtReportedchu" size="mini">导出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="state" label="流转状态"></el-table-column>
        <el-table-column prop="motorcadeNo" width="110px" label="业务号">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="BusinessNum(scope.row,scope.row.state)"
            >{{scope.row.motorcadeNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="comcode" label="分公司"></el-table-column>
        <el-table-column prop="insuredflag" label="关系人标志"></el-table-column>
        <el-table-column prop="insuredName" label="关系人名称"></el-table-column>
        <el-table-column prop="businessNature" label="业务来源"></el-table-column>
        <el-table-column prop="finishdateString" width="115" label="控制结束日期"></el-table-column>
        <el-table-column prop="isextendtime" label="是否续保"></el-table-column>
        <el-table-column prop="firstSubmitDateString" label="提交时间"></el-table-column>
        <el-table-column prop="submitUser" label="分公司上报人"></el-table-column>
        <el-table-column prop="memberName" label="总公司审核人"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import HeadMenu from "@/components/layout/headMenu";
import LeftMenu from "@/components/layout/leftMenu";
import utils from "../../utils/index";
export default {
  name: "otReported",
  components: {
    LeftMenu,
    HeadMenu
  },
  data() {
    return {
       relationFlag: [
        { value: "被保险人", label: "1" },
        { value: "投保人", label: "2" }
      ],
      carFlag: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3" }
      ],
      state: [
        { label: "0", value: "初始化（未录入车辆）" },
        { label: "1", value: "待审核（已录入车辆）" },
        { label: "2", value: "已打回" },
        { label: "3", value: "审核中（已提交总部）" },
        { label: "4", value: "已审核通过（总部下发）" },
        { label: "5", value: "已办结" },
        { label: "6", value: "已注销" }
      ],
      UwMotorcadeMainVO: {
        insuredflag: "",
        insuredCode: "",
        insuredName: "",
        motorcadeNo: "",
        type: "2"
      },
      activeNames: ["1"],
      relations: [
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    // ...mapActions(["getUwMotorcadeMainVO"]),
    //导出post
    rtReportedchu() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      let _url = this.HOST + this.$url.rtReportedToInsured;
      utils.axiosDown(_url, uwMotorcadeMainVO);
    },
    //查询
    query() {
      this.$fetch
        .post(this.HOST + this.$url.rtAddGetUnder, this.UwMotorcadeMainVO)
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < this.state.length; j++) {
              if (res[i].state == this.state[j].label)
                res[i].state = this.state[j].value;
            }
          }
           for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < this.relationFlag.length; j++) {
              if (res[i].insuredflag == this.relationFlag[j].label)
                res[i].insuredflag = this.relationFlag[j].value;
            }
          }
           for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < this.carFlag.length; j++) {
              if (res[i].businessNature == this.carFlag[j].label)
                res[i].businessNature = this.carFlag[j].value;
            }
          }
          for (let i = 0; i < res.length; i++) {
            if (res[i].isextendtime == "0") {
              res[i].isextendtime = "未续保";
            }
            if (res[i].isextendtime == "1") {
              res[i].isextendtime = "已续保";
            }
          }
          this.results = res;
        });
    },
  //业务号跳转
  BusinessNum(row, state) {
    for (let i = 0; i < this.state.length; i++) {
      if (state == this.state[i].value) {
        state = this.state[i].label;
      }
    }
    let businessNum1Page = this.$router.resolve({
      path: "/carAuditPageother",
      query: { row: row.motorcadeNo, id: row.id, state }
    });
    window.open(businessNum1Page.href, "_blank");
  },
  // 未处理展开关闭状态
  untreated(val) {
    this.task.tab1 = val;
  },

  // 已处理展开关闭状态
  processed(val) {
    this.task.tab2 = val;
  },
  },
  created() {
    if (this.$route.query.motorcadeNo) {
      this.UwMotorcadeMainVO.motorcadeNo = this.$route.query.motorcadeNo;
      this.$fetch
        .post(this.HOST + this.$url.rtAddGetUnder, this.UwMotorcadeMainVO)
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i].state = res[i].state.trim();
            for (let j = 0; j < this.state.length; j++) {
              if (res[i].state == this.state[j].label)
                res[i].state = this.state[j].value;
            }
          }
           for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < this.relationFlag.length; j++) {
              if (res[i].insuredflag == this.relationFlag[j].label)
                res[i].insuredflag = this.relationFlag[j].value;
            }
          }
           for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < this.carFlag.length; j++) {
              if (res[i].businessNature == this.carFlag[j].label)
                res[i].businessNature = this.carFlag[j].value;
            }
          }
          for (let i = 0; i < res.length; i++) {
            if (res[i].isextendtime == "0") {
              res[i].isextendtime = "未续保";
            }
            if (res[i].isextendtime == "1") {
              res[i].isextendtime = "已续保";
            }
          }
          this.results = res;
        });
    }
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
</style>
