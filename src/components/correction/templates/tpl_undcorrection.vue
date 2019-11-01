<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请填写信息</div>
          </template>
          <el-form ref="UwctrlVO" :rules="rules" :model="UwctrlVO" label-width="150px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:" prop="insuredFlag">
                    <el-select v-model="UwctrlVO.insuredFlag" placeholder="请选择">
                      <el-option
                        v-for="item in relationsss"
                        :key="item.label"
                        :label="item.value1"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:" prop="applicCode">
                    <el-input
                      v-model="UwctrlVO.applicCode"
                      type="text"
                      maxlength="16"
                      minlength="16"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:" prop="insuredName">
                    <el-input v-model="UwctrlVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:" prop="businessNo">
                    <el-input
                      v-model="UwctrlVO.businessNo"
                      type="text"
                      maxlength="22"
                      minlength="22"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="团单号:" prop="contractNo">
                    <el-input
                      v-model="UwctrlVO.contractNo"
                      type="text"
                      maxlength="22"
                      minlength="22"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险总折扣率上限:" prop="profitRateUp">
                    <el-input v-model="UwctrlVO.profitRateUp"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="有效标志位:" prop="valid">
                    <el-select v-model="UwctrlVO.valid" clearable placeholder="请选择">
                      <el-option
                        v-for="item1 in flagss"
                        :key="item1.label"
                        :label="item1.value"
                        :value="item1.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核保类别:" prop="flag">
                    <el-select v-model="UwctrlVO.flag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in categoryss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" prop="finishDate">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="除NCD以外的折扣率上限:" prop="exceptNCDDiscountUpper">
                    <el-input v-model="UwctrlVO.exceptNCDDiscountUpper"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提示信息:">
                    <el-input v-model="UwctrlVO.message"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险跟单手续费上限:" prop="costRateBIUpper">
                    <el-input v-model="UwctrlVO.costRateBIUpper"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="号牌号码修改:" prop="licenseNo">
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="save('UwctrlVO')" type="primary">保存</el-button>
                <el-button size="mini" @click="goBack()">返回</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
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
      :title="msgTitle1"
      :visible.sync="outerVisible1"
      width="20%"
      class="dialog-footer-parent"
      :before-close="handleClose1"
    >
      <span class="fontSizeTrue">{{msgContont1}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible1=false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { relations } from "@/assets/js/baseCode";
export default {
  name: "tpl_undcorrection",
  data() {
    var profitRateUpRule = (rules, value, callback) => {
      if (value && /^\+?[1-9][0-9]*$/.test(value) && value.length > 4) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.profitRateUp = "";
      } else if (value && isNaN(value)) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "请输入有效数字";
        this.UwctrlVO.profitRateUp = "";
      } else if (value && value.indexOf(".") != -1 && value.length > 9) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.profitRateUp = "";
      } else if (value && value.indexOf(".") != -1) {
        if (value.split(".")[0].length > 4 || value.split(".")[1].length > 4) {
          this.outerVisible1 = true;
          this.msgTitle1 = "来自网页的消息";
          this.msgContont1 = "小数点前后数字不能超过四位，请重新输入";
          this.UwctrlVO.profitRateUp = "";
        }
      } else {
        callback();
      }
    };
    var exceptNCDDiscountUpperRule = (rules, value, callback) => {
      if (value && /^\+?[1-9][0-9]*$/.test(value) && value.length > 4) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.exceptNCDDiscountUpper = "";
      } else if (value && isNaN(value)) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "请输入有效数字";
        this.UwctrlVO.exceptNCDDiscountUpper = "";
      } else if (value && value.indexOf(".") != -1 && value.length > 9) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.exceptNCDDiscountUpper = "";
      } else if (value && value.indexOf(".") != -1) {
        if (value.split(".")[0].length > 4 || value.split(".")[1].length > 4) {
          this.outerVisible1 = true;
          this.msgTitle1 = "来自网页的消息";
          this.msgContont1 = "小数点前后数字不能超过四位，请重新输入";
          this.UwctrlVO.exceptNCDDiscountUpper = "";
        }
      } else {
        callback();
      }
    };
    var costRateBIUpperRule = (rules, value, callback) => {
      if (value && /^\+?[1-9][0-9]*$/.test(value) && value.length > 4) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.costRateBIUpper = "";
      } else if (value && isNaN(value)) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "请输入有效数字";
        this.UwctrlVO.costRateBIUpper = "";
      } else if (value && value.indexOf(".") != -1 && value.length > 9) {
        this.outerVisible1 = true;
        this.msgTitle1 = "来自网页的消息";
        this.msgContont1 = "字数超长，请重新输入";
        this.UwctrlVO.costRateBIUpper = "";
      } else if (value && value.indexOf(".") != -1) {
        if (value.split(".")[0].length > 4 || value.split(".")[1].length > 4) {
          this.outerVisible1 = true;
          this.msgTitle1 = "来自网页的消息";
          this.msgContont1 = "小数点前后数字不能超过四位，请重新输入";
          this.UwctrlVO.costRateBIUpper = "";
        }
      } else {
        callback();
      }
    };
    return {
      outerVisible: false,
      outerVisible1: false,
      msgContont1: "",
      fileData: "",
      msgContont: "",
      msgTitle: "提示",
      msgTitle1: "提示",
      relationsss: [
        { value1: "1_被保险人", label: "1" },
        { value1: "2_投保人", label: "2" }
      ],

      categoryss: [
        { value: "1_人工核保", label: "1" },
        { value: "2_自动核保通过", label: "2" },
        { value: "3_自动打回", label: "3" }
      ],

      rtReported: {},
      flagss: [
        { value: "0_无效", label: "0" },
        { value: "1_有效", label: "1" }
      ],
      relations,
      activeNames: ["1"],
          UwctrlVO: {
        insuredFlag: "",
        applicCode: "",
        insuredName: "",
        businessNo: "",
        contractNo: "",
        profitRateUp: "",
        flag: "",
        message: "",
        valid: "",
        finishDate: "",
        licenseNo: "",
        costRateBIUpper: "",
        costRateBIUpper: "",
        licenses: "",
        exceptNCDDiscountUpper: ""
      },
      results: [],
      form: {},
      rules: {
        insuredFlag: [
          { required: true, message: "关系人标志不能为空", trigger: ["blur"] }
        ],
        applicCode: [
          { required: true, message: "关系人代码16位", trigger: ["blur"] },
          {
            min: 16,
            max: 16,
            message: "长度为16个字符",
            trigger: ["change", "blur"]
          }
        ],
        insuredName: [
          { required: true, message: "关系人名称必填", trigger: ["blur"] }
        ],
        valid: [{ required: true, message: "有效标志选择", trigger: ["blur"] }],
        flag: [{ required: true, message: "核保类别必选", trigger: ["blur"] }],
        finishDate: [
          { required: true, message: "结束日期必填", trigger: ["blur"] }
        ],
        profitRateUp: [
          { validator: profitRateUpRule, trigger: ["blur", "change"] }
        ],
        exceptNCDDiscountUpper: [
          { validator: exceptNCDDiscountUpperRule, trigger: ["blur", "change"] }
        ],
        costRateBIUpper: [
          { validator: costRateBIUpperRule, trigger: ["blur", "change"] }
        ],
        licenseNo: [
          { required: true, message: "号码号牌修改？", trigger: ["blur"] }
        ],
        businessNo: [
          { required: false, trigger: ["change", "blur"] },
          {
            min: 22,
            max: 22,
            message: "长度为22个字符",
            trigger: ["change", "blur"]
          }
        ],
        contractNo: [
          {
            required: false,
            message: "团单号不能为空",
            trigger: ["change", "blur"]
          },
          {
            min: 22,
            max: 22,
            message: "长度为22个字符",
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  },

  computed: {},
  methods: {
    //关闭弹窗
    handleClose() {
      this.outerVisible = false;
    },
    handleClose1() {
      this.outerVisible1 = false;
    },
    //返回
    goBack() {
      window.close();
    },
    // 修改成功
    open2() {
      this.$message({
        message: "恭喜你修改成功",
        type: "success"
      });
    },
    //确定按钮
    trues() {
      this.outerVisible = false;
      let uwctrlVO = this.UwctrlVO;
      this.$fetch
        .post(this.HOST + this.$url.correctionUpdate, uwctrlVO)
        .then(res => {
          setTimeout(() => {
            this.open2();
            this.$router.push({
              path: "/queryCorrection"
            });
          }, 2000);
        });
    },
    // 修改保存
    save() {
      this.$refs.UwctrlVO.validate(valids => {
        if (valids) {
          console.log("23132")
          this.outerVisible = true;
          this.msgContont="确定修改吗？"
        }
      });
    }
  },
  created() {
    // 数据渲染
    this.$fetch
      .get(this.HOST + this.$url.correctionShow, {
        params: { id: this.$route.query.row }
      })
      .then(res => {
        this.UwctrlVO = res;
      });
  }
};
</script>
<style scoped>
.fontSizeTrue {
  font-size: 18px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
.circular >>> .el-form label {
  font-size: 12px;
}
</style>
