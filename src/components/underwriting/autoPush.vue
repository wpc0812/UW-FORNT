<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">自动分发任务</div>
          </template>
          <el-form
            :disabled="flag == 'detail'"
            ref="form"
            :rules="form"
            :model="correction"
            label-width="80px"
          >
            <el-row>
              <el-form-item class="text-left">
                <el-checkbox-group
                  class="inline-block"
                  v-model="companiess"
                  @change="handleCheckedCitiesChange"
                >
                  <el-checkbox
                    v-for="company in companies"
                    :label="company"
                    :key="company"
                  >{{company}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary" :disabled="disableds">请求分发</el-button>
                <el-button @click="stopPush" size="mini" :disabled="!disableds">停止分发</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">自动推送任务</div>
          </template>
          <el-row>
            <el-col :span="24">
              <span class="spanStyle">业务单信息</span>
              <br>
              <hr>
            </el-col>
          </el-row>
          <el-row class="text-left">
            <!-- <el-pagination
          class="mb10 mt10"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :pager-count="5"
          small
          :current-page="1"
          :page-sizes="[10, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
            ></el-pagination>-->
          </el-row>
          <el-table
            :data="tableList"
            stripe
            tooltip-effect="dark"
            style="width: 100%"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column align="center" label="业务状态" prop="riskcode"></el-table-column>
            <el-table-column align="center" prop="riskname" label="业务号">
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="mini"
                  @click="godetail(scope.row.riskname)"
                >{{scope.row.riskname}}</el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="excess" label="车牌号"></el-table-column>
            <el-table-column align="center" prop="sum" label="渠道名称"></el-table-column>
            <el-table-column align="center" prop="rate" label="被保险人名称"></el-table-column>
            <el-table-column align="center" prop="standard" label="险种"></el-table-column>
            <el-table-column align="center" prop="deductible" label="归属机构"></el-table-column>
            <el-table-column align="center" label="任务级别" prop="choosableDeductible"></el-table-column>
            <el-table-column align="center" prop="premium" label="提交时间"></el-table-column>
            <el-table-column align="center" prop="renew" label="处理人"></el-table-column>
            <el-table-column align="center" prop="price" label="跟单手续费比例"></el-table-column>
            <el-table-column align="center" prop="pricecode" label="推荐送修代码"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { relations } from "@/assets/js/baseCode";
let [inputValidator, selectValidator] = [
  { required: true, message: "请录入", trigger: "blur" },
  { required: true, message: "请选择哦", trigger: "change" }
];

export default {
  name: "correction",

  props: {
    flag: {
      type: String
    }
  },

  data() {
    return {
      tableList: [
        {
          riskcode: "正常流转",
          riskname: "TAS123154aa",
          excess: "BJ6666",
          sum: "服务人员",
          rate: "八哥",
          standard: "BZA",
          deductible: "100001",
          choosableDeductible: "省公司一级核保",
          premium: "2019-8-13 13:43:30",
          renew: "516465",
          price: "0.0001",
          pricecode: ""
        }
      ],
      disableds: true,
      companiess: [],
      companies: [
        "南京分公司",
        "苏州分公司",
        "徐州分公司",
        "无锡分公司",
        "常州分公司",
        "镇江分公司",
        "南通分公司",
        "宿迁分公司",
        "泰州分公司",
        "淮安分公司",
        "盐城分公司",
        "连云港分公司"
      ],
      underwriting: {},
      fileList: [],
      relationsss: [
        { value1: "全部" },
        { value1: "1_被保险人" },
        { value1: "2_投保人" }
      ],
      categoryss: [
        { value: "全部" },
        { value: "1_人工核保" },
        { value: "2_自动核保通过" },
        { value: "3_自动打回" }
      ],
      rtReported: {},
      flagss: [{ value: "全部" }, { value: "0_无效" }, { value: "1_有效" }],
      relations,
      activeNames: ["1"],
      correction: {},
      results: [],
      form: {},
      outerVisible: false
    };
  },

  computed: {},

  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
    },
    handleClose(done) {
      console.log("确认");
    },
    acd() {},
    query() {},
    godetail(riskname) {
      this.$router.push({
        path: "/autoPushDetail",
        query: {
          riskname
        }
      });
    },
    reset() {},
    stopPush() {},
    handleCheckedCitiesChange(value) {
      console.log(value);
      if (value.length > 0) {
        this.disableds=false
      }else{
        this.disableds=true
      }
      let checkedCount = value.length;
      checkedCount === this.companies.length;
      checkedCount > 0 && checkedCount < this.companies.length;
    },

    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },

    save() {
      this.outerVisible = true;
      // this.getcorrection(this.correction);
    }
  },
  created() {}
};
</script>
<style scoped>
.fontSizeTrue {
  font-size: 25px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
.spanStyle {
  color: #717385;
  font-size: 14px;
  font-weight: 700;
  float: left;
  margin-left: 20px;
}
</style>
