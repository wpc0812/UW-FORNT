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
                        :label="item.value1s"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:" prop="applicCode">
                    <el-input
                      type="text"
                      v-model="UwctrlVO.applicCode"
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
                <el-col :span="8" class="marginstyle">
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
                        :label="item1.value3"
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
                  <el-form-item label="号牌号码录入:" prop="licenseNo" :disabled="flag11">
                    <el-input v-model="UwctrlVO.licenseNo" title="请在号牌导入与录入两项中选择一项进行特批配置"></el-input>
                  </el-form-item>
                </el-col>
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
              </el-row>
              <el-col :span="8">
                <el-form-item label="商业险跟单手续费上限:" prop="costRateBIUpper">
                  <el-input v-model="UwctrlVO.costRateBIUpper"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌号码导入:" prop="licenses">
                  <el-input
                    v-model="UwctrlVO.licenses"
                    :disabled="this.flag10"
                    title="选择文件录入则会清空控制人关系代码和名称"
                  >
                    <template slot="append">
                      <el-upload
                        class="upload-demo"
                        :multiple="true"
                        action
                        :on-remove="handleRemove"
                        :on-success="onSuccess"
                        :http-request="customUpload"
                        :on-change="uploadname"
                        :show-file-list="false"
                        :file-list="fileList"
                        :auto-upload="false"
                        accept=".xls"
                        :on-preview="handlePreview"
                        :before-remove="beforeRemove"
                      >
                        <el-button
                          slot="trigger"
                          size="small"
                          type="primary"
                          title="选择文件录入则会清空控制人关系代码和名称"
                        >浏览</el-button>
                      </el-upload>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <a class="dec" href="./LicensenoAddModel.xls" download>号牌号码导入模板下载</a>
              </el-col>
              <el-col :span="5">
                <div class="reminder">请在号牌导入与录入两项中选择一项进行特批配置</div>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="requestdata('UwctrlVO')" type="primary">保存</el-button>
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
        <el-button @click="falses">取 消</el-button>
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
import qs from "querystring";
import { relations } from "@/assets/js/baseCode";
import axios from "axios";
import utils from "../../../utils";
let [inputValidator, selectValidator] = [
  { required: true, message: "1", trigger: "blur" },
  { required: true, message: "2", trigger: "change" }
];

export default {
  name: "tpl_correction",
  props: {},
  watch: {
    "UwctrlVO.businessNo": function(newVal, oldVal) {
      let oldValue = oldVal ? oldVal.length : 0;
      if (newVal.length && newVal.length < oldValue) {
        this.rules.businessNo.required = false;
      } else if (newVal) {
        this.rules.businessNo.required = true;
      }
    },
    "UwctrlVO.contractNo": function(newVal, oldVal) {
      let oldValue = oldVal ? oldVal.length : 0;
      if (newVal.length && newVal.length < oldValue) {
        this.rules.contractNo.required = false;
      } else if (newVal) {
        this.rules.contractNo.required = true;
      }
    }
  },
  data() {
    // 号码录入规则
    var validateTotalSupply = (rules, value, callback) => {
      // console.log(this.UwctrlVO);
      if (!value && !this.UwctrlVO.licenses) {
        callback(new Error("号码牌录入"));
      } else if (value && !this.UwctrlVO.licenses) {
        callback();
      } else if (!value && this.UwctrlVO.licenses) {
        this.$refs["UwctrlVO"].clearValidate("licenses");
        callback();
      } else if (value && this.UwctrlVO.licenses) {
        callback(new Error("请在号牌导入与录入中选择一项进行配置"));
      }
    };
    // 号码导入规则
    var validatePrice = (rules, value, callback) => {
      if (!value && !this.UwctrlVO.licenseNo) {
        callback(new Error("号码牌导入"));
      } else if (
        (value && this.UwctrlVO.applicCode) ||
        (value && this.UwctrlVO.insuredName)
      ) {
        this.UwctrlVO.applicCode = "";
        this.UwctrlVO.insuredName = "";
        this.$refs["UwctrlVO"].clearValidate("applicCode");
        this.$refs["UwctrlVO"].clearValidate("insuredName");
      } else if (value && !this.UwctrlVO.licenseNo) {
        callback();
      } else if (!value && this.UwctrlVO.licenseNo) {
        this.$refs["UwctrlVO"].clearValidate("licenseNo");
        callback();
      } else if (value && this.UwctrlVO.licenseNo) {
        callback(new Error("请在号牌导入与录入中选择一项进行配置"));
      } else if (
        value &&
        !this.UwctrlVO.applicCode &&
        !this.UwctrlVO.insuredName
      ) {
        this.$refs["UwctrlVO"].clearValidate("applicCode");
        this.$refs["UwctrlVO"].clearValidate("insuredName");
        callback();
      }
    };
    //关系人代码
    var applicCodeRule = (rules, value, callback) => {
      if (!value && !this.UwctrlVO.licenses) {
        callback(new Error("关系人代码必填"));
      } else if (value && value.length != 16) {
        callback(new Error("关系人代码为16位"));
      } else if (
        value &&
        value.length == 16 &&
        this.UwctrlVO.insuredName &&
        !this.UwctrlVO.licenses
      ) {
        this.UwctrlVO.licenses = "";
        this.$refs["UwctrlVO"].clearValidate("licenses");
        callback();
      } else if (!value && this.UwctrlVO.licenses) {
        callback();
      } else if (value && value.length == 16 && this.UwctrlVO.licenses) {
        callback(new Error("导入文件包含关系人代码"));
      }
    };
    //关系人名称
    var insuredNameRule = (rules, value, callback) => {
      if (!value && !this.UwctrlVO.licenses) {
        callback(new Error("关系人名称必填"));
      } else if (value && this.UwctrlVO.licenses) {
        callback(new Error("导入文件包含关系人名称"));
      } else if (value && this.UwctrlVO.applicCode && !this.UwctrlVO.licenses) {
        this.$refs["UwctrlVO"].clearValidate("licenses");
        callback();
      } else if (!value && this.UwctrlVO.licenses) {
        callback();
      }
    };
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
      outerVisible1: false,
      msgContont1: "",
      fileData: "",
      msgContont: "",
      msgTitle: "提示",
      msgTitle1: "提示",
      successtrue: false,
      licenseNoImportExcel: "",
      UwctrlVO: {
        insuredFlag: "1",
        applicCode: "",
        insuredName: "",
        businessNo: "",
        contractNo: "",
        profitRateUp: "",
        flag: "1",
        message: "",
        valid: "1",
        finishDate: "",
        licenseNo: "",
        costRateUpper: "",
        costRateBIUpper: "",
        licenses: "",
        exceptNCDDiscountUpper: ""
      },
      valids: "",
      flag10: true,
      flag11: false,
      fileList: [],
      relationsss: [
        { value1s: "1_被保险人", label: "1" },
        { value1s: "2_投保人", label: "2" }
      ],

      categoryss: [
        { value: "1_人工核保", label: "1" },
        { value: "2_自动核保通过", label: "2" },
        { value: "3_自动打回", label: "3" }
      ],
      rtReported: {},
      flagss: [
        { value3: "0_无效", label: "0" },
        { value3: "1_有效", label: "1" }
      ],
      relations,
      activeNames: ["1"],
      results: [],
      outerVisible: false,
      rules: {
        insuredFlag: [
          {
            required: true,
            message: "关系人标志不能为空",
            trigger: ["blur", "change"]
          }
        ],
        applicCode: [
          {
            required: true,
            validator: applicCodeRule,
            trigger: ["blur", "change"]
          }
        ],
        insuredName: [
          {
            required: true,
            validator: insuredNameRule,
            trigger: ["blur", "change"]
          }
        ],
        valid: [
          { required: true, message: "有效标志选择", trigger: ["change"] }
        ],
        flag: [
          { required: true, message: "核保类别必选", trigger: ["change"] }
        ],
        finishDate: [
          { required: true, message: "结束日期必填", trigger: ["blur"] }
        ],
        licenseNo: [
          {
            required: true,
            validator: validateTotalSupply,
            trigger: ["blur", "change"]
          }
        ],
        licenses: [
          {
            required: true,
            validator: validatePrice,
            trigger: ["blur", "change"]
          }
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
    uploadname(file) {
      this.fileData = file;
      this.UwctrlVO.licenses = file.name;
    },
    // 成功回调
    open2() {
      this.$message({
        message: "恭喜你保存成功",
        type: "success"
      });
    },
    // 取消提示框
    open3() {
      this.$message({
        message: "您点击了取消,已取消",
        type: "warning"
      });
    },
    //返回
    goBack() {
      window.close();
    },
    //取消请求
    falses() {
      this.outerVisible = false;
      this.open3();
    },
    // 保存
    requestdata() {
      this.$refs.UwctrlVO.validate(valids => {
        if (valids) {
          this.outerVisible = true;
          this.msgContont="确定保存吗"
        }
      });
    },
    // 确定请求
    trues() {
      this.outerVisible = false;

      if (this.UwctrlVO.licenses != "") {
        let file = this.fileData;
        this.customUpload(file);
        let uwctrlVO = this.UwctrlVO;
        this.$fetch
          .post(this.HOST + this.$url.correctionSave, uwctrlVO)
          .then(res => {
            if (res) {
              this.open2();
              setTimeout(() => {
                this.$router.push({
                  path: "/queryCorrection"
                });
              }, 2000);
            }
          });
      } else {
        let uwctrlVO = this.UwctrlVO;
        this.$fetch
          .post(this.HOST + this.$url.correctionSave, uwctrlVO)
          .then(res => {
            if (res) {
              this.open2();
              setTimeout(() => {
                this.$router.push({
                  path: "/queryCorrection"
                });
              }, 2000);
            }
          });
      }
    },
    //关闭弹窗
    handleClose() {
      this.outerVisible = false;
    },
    handleClose1() {
      this.outerVisible1 = false;
    },
    // 移除选中文件
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 文件个数限制
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    // 文件上传成功回调
    onSuccess(esponse, file, fileList) {},
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    // 文件上传
    customUpload(file) {
      let formData = new FormData();
      formData.append("file", file.raw);
      this.uploading = true;
      // console.log(file)
      return this.$fetch({
        url: this.HOST + "/greenchannel/upload",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 20000,
        data: formData
      }).then(res => {
        if (res == "true") {
          this.successtrue = res;
        } else {
          this.msgContont = res;
        }
      });
    },
    downLoad() {
      let url = "./static/template/LicensenoAddModel.xls";
      window.open(url);
    }
  },
  created() {}
};
</script>
<style scoped>
.fontSizeTrue {
  font-size: 16px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
.dec {
  text-decoration: none;
  color: #7cb2e3;
  position: relative;
  top: 6px;
  font-size: 12px;
}
.reminder {
  color: red;
  font-size: 12px;
  text-align: center;
}
.circular >>> .el-form-item {
  margin-bottom: 20px;
}
.circular >>> .el-form label {
  font-size: 12px;
}
</style>
