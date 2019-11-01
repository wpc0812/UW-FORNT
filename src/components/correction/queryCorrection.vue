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
          <el-form :model="UwctrlVO" label-width="150px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select v-model="UwctrlVO.insuredFlag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in relationss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:">
                    <el-input v-model="UwctrlVO.applicCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:">
                    <el-input v-model="UwctrlVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="UwctrlVO.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="团单号:">
                    <el-input v-model="UwctrlVO.contractNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核保类别:">
                    <el-select v-model="UwctrlVO.flag" clearable placeholder="请选择">
                      <el-option
                        v-for="category in categorys"
                        :key="category.label"
                        :label="category.value"
                        :value="category.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期起始:">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate1"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制结束日期结束:">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate2"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="有效标志位:">
                    <el-select v-model="UwctrlVO.valid" clearable placeholder="请选择">
                      <el-option
                        v-for="flag in flags"
                        :key="flag.label"
                        :label="flag.value"
                        :value="flag.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="商业险总折扣率上限:">
                    <el-input v-model="UwctrlVO.profitRateUp"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="号牌号码:">
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险跟单手续费上限:">
                    <el-input v-model="UwctrlVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24" class="text-center">
                  <el-button size="mini" @click="query()" type="primary">查询</el-button>
                  <el-button size="mini" @click="acd('a')">增加</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-row class="text-left">
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
        ></el-pagination>
      </el-row>
      <el-table
        :data="results"
        stripe
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column type="index" label="序号">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="BusinessNum(scope.$index+1,scope.row.id)"
            >{{ scope.$index+1 }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="businessNo" label="业务号"></el-table-column>
        <el-table-column prop="contractNo" label="团单号"></el-table-column>
        <el-table-column prop="insuredFlag" label="关系人标志"></el-table-column>
        <el-table-column prop="applicCode" label="关系人代码"></el-table-column>
        <el-table-column prop="insuredName" label="关系人名称"></el-table-column>
        <el-table-column prop="licenseNo" label="号牌号码"></el-table-column>
        <el-table-column prop="profitRateUp" label="商业险总折扣率上限"></el-table-column>
        <el-table-column prop="costRateUpper" label="商业险跟单手续费上限"></el-table-column>
        <el-table-column prop="flag" label="核保类别"></el-table-column>
        <el-table-column prop="finishDateString" label="控制结束日期"></el-table-column>
        <el-table-column v-if="qx==true" prop="handlerUser" label="特批操作员"></el-table-column>
        <el-table-column label="修改">
          <template slot-scope="scope">
            <el-button v-if="scope.row.valid!='0'" type="text" @click="acd('c', scope.row.id)">修改</el-button>
            <el-button v-else type="text" :disabled="scope.row.valid=='0'">——</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="index" label="注销">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.valid!='0'"
              type="text"
              @click="acDelete(scope.row.id,results)"
            >注销</el-button>
            <el-button v-else type="text" :disabled="scope.row.valid=='0'">已注销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- dialog弹出框 -->
    <el-dialog
      :title="msgTitle"
      :visible.sync="outerVisible"
      width="20%"
      class="dialog-footer-parent"
      :before-close="handleClose"
    >
      <span class="fontSizeTrue">{{msgContont}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="trues">确 定</el-button>
        <el-button @click="outerVisible=false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="来自网页的消息"
      :visible.sync="outerVisible1"
      width="20%"
      class="dialog-footer-parent"
      :before-close="handleClose1"
    >
      <span class="fontSizeTrue">注销成功</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
import qs from "querystring";
import { setTimeout } from "timers";
export default {
  name: "queryCorrection",

  data() {
    return {
      msgTitle: "提示",
      outerVisible: false,
      outerVisible1: false,
      msgContont: "",

      qx: false,
      relationFlag: [
        { value: "被保险人", label: "1" },
        { value: "投保人", label: "2" }
      ],
      validFlag: [
        { value: "人工核保", label: "1" },
        { value: "自动核保通过", label: "2" },
        { value: "自动打回", label: "2" }
      ],
      pageInfo: {
        policyTotal: 0, //总条数
        policyPageNo: 1, //第几页
        policyPageSize: 10 //每页多少条
      },
      dochoose: false,
      handleCurrentChange: {},
      categorys: [
        { value: "全部", label: "" },
        { value: "1_人工核保", label: "1" },
        { value: "2_自动核保通过", label: "2" },
        { value: "3_自动打回", label: "3" }
      ],
      ids: "",
      UwctrlVO: {
        applicCode: "",
        insuredFlag: "",
        insuredName: "",
        businessNo: "",
        contractNo: "",
        flag: "",
        finishDate1: "",
        finishDate2: "",
        valid: "",
        profitRateUp: "",
        licenseNo: "",
        costRateUpper: "",
        costRateUpper: ""
      },
      flags: [
        { value: "全部", label: "" },
        { value: "0_无效", label: "0" },
        { value: "1_有效", label: "1" }
      ],
      results: [],
      relationss: [
        { value: "全部", label: "" },
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      activeNames: ["1"],
      total: 10,
      relations: {}
    };
  },
  computed: {},
  methods: {
    // 弹窗得叉号
    handleClose() {
      this.outerVisible = false;
    },
    handleClose1() {
      this.outerVisible1 = false;
    },
    // 条数
    policySizeChange(val) {
      this.pageInfo.policyPageSize = val;
      setTimeout(() => {
        this.query();
      });
    },
    // 第几页
    policyCurrentChange(val) {
      this.pageInfo.policyPageNo = val;
      setTimeout(() => {
        this.query();
      });
    },
    //增加修改
    acd(flag, row) {
      if (flag == "a") {
        let addPage = this.$router.resolve({
          name: "增加核保特批页面",
          query: {
            row
          }
        });
        window.open(addPage.href, "_blank");
      }
      if (flag == "c") {
        let updatePage = this.$router.resolve({
          name: "修改核保特批页面",
          query: {
            row: row
          }
        });
        window.open(updatePage.href, "_blank");
      }
    },
    //点击序号到详情页
    BusinessNum(idx, row) {
      let particularsPage = this.$router.resolve({
        path: "/detailCorrection",
        query: { row: row }
      });
      window.open(particularsPage.href, "_blank");
    },
    //注销弹窗
    acDelete(id, row) {
      this.outerVisible = true;
      this.msgTitle = "来自网页的消息";
      this.msgContont = "您确信要注销该条记录吗？";
      this.ids = id;
    },
    // 弹窗确定按钮
    trues() {
      this.outerVisible = false;
      this.cancellation();
    },
    // 注销请求
    cancellation() {
      let uwctrlVO = this.UwctrlVO;
      this.$fetch
        .get(this.HOST + this.$url.correctionDelete, {
          params: { id: this.ids }
        })
        .then(res => {
          if (res == true) {
            this.outerVisible1 = true;
            this.query();
          }
        });
    },
    //查询
    query() {
      this.$fetch
        .post(this.HOST + this.$url.correctionQury, {
          ...this.UwctrlVO,
          ...this.pageInfo
        })
        .then(res => {
          if (res) {
            if (
              res.uwctrlVOS &&
              res.uwctrlVOS instanceof Array &&
              res.uwctrlVOS.length > 0
            ) {
              this.pageInfo.policyTotal = res.policyTotal;
              for (let i = 0; i < res.uwctrlVOS.length; i++) {
                for (let j = 0; j < this.relationFlag.length; j++) {
                  if (
                    res.uwctrlVOS[i].insuredFlag == this.relationFlag[j].label
                  )
                    res.uwctrlVOS[i].insuredFlag = this.relationFlag[j].value;
                }
              }
              for (let i = 0; i < res.uwctrlVOS.length; i++) {
                for (let j = 0; j < this.validFlag.length; j++) {
                  if (res.uwctrlVOS[i].flag == this.validFlag[j].label)
                    res.uwctrlVOS[i].flag = this.validFlag[j].value;
                }
              }
              for (let i = 0; i < res.uwctrlVOS.length; i++) {
                if (res.uwctrlVOS[i].businessNo == "") {
                  res.uwctrlVOS[i].businessNo = "——";
                }
                if (res.uwctrlVOS[i].contractNo == "") {
                  res.uwctrlVOS[i].contractNo = "——";
                }
              }
              this.results = res.uwctrlVOS;
            }
          }
        });
    }
  },
  created() {
    this.UwctrlVO.finishDate1 = "2019-01-01";
    this.UwctrlVO.finishDate2 = new Date().format("yyyy-MM-dd");
    // console.log(new Date().format("yyyy-MM-dd"))
    // let UwctrlRequestDto = this.UwctrlVO;
    // this.$fetch
    //   .post(this.HOST + this.$url.correctionQury, UwctrlRequestDto)
    //   .then(res => {
    //     if (res) {
    //       this.results = res;
    //     }
    //   });
  }
};
</script>
<style scoped>
.check-group {
  margin-right: 10px;
}
.el-form-item__label {
  color: #fff !important;
  background-color: #e8f6f9;
}
.collapse-no-background >>> .el-collapse-item__header {
  background: none;
  height: 40px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
</style>
