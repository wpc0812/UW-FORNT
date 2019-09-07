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
                  <el-form-item label="折扣率上限:">
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
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="手续费上限:">
                    <el-input v-model="UwctrlVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提示信息:">
                    <el-input v-model="UwctrlVO.message"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="8">
                <el-form-item label="商业险跟单手续费上限:">
                  <el-input v-model="UwctrlVO.costRateBIUpper"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌号码导入:" prop="licenses">
                  <el-input v-model="UwctrlVO.licenses" :disabled="this.flag10">
                    <template slot="append">
                      <el-upload
                        :disabled="this.flag10"
                        class="upload-demo"
                        ref="upload"
                        :multiple="true"
                        action
                        :on-remove="handleRemove"
                        :on-success="onSuccess"
                        :http-request="customUpload"
                        :on-change="uploadname"
                        :show-file-list="false"
                        :file-list="fileList"
                        :auto-upload="false"
                        accept=".xls, .txt"
                        :on-preview="handlePreview"
                        :before-remove="beforeRemove"
                      >
                        <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                      </el-upload>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <a class="dec" :href="httphref" download="LicensenoAddModel.zip">号牌号码导入模板下载</a>
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
      title="提示"
      :visible.sync="outerVisible"
      width="30%"
      class="dialog-footer-parent"
      :before-close="handleClose"
    >
      <span class="fontSizeTrue">{{msg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="trues">确 定</el-button>
        <el-button @click="falses">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import qs from "querystring";
import { relations } from "@/assets/js/baseCode";
let [inputValidator, selectValidator] = [
  { required: true, message: "1", trigger: "blur" },
  { required: true, message: "2", trigger: "change" }
];

export default {
  name: "UwctrlVO",
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
        callback(new Error("请在号牌导入与录入两项中选择一项进行特批配置"));
      }
    };
    // 号码导入规则
    var validatePrice = (rules, value, callback) => {
      if (!value && !this.UwctrlVO.licenseNo) {
        callback(new Error("号码牌导入"));
      } else if (value && !this.UwctrlVO.licenseNo) {
        callback();
      } else if (!value && this.UwctrlVO.licenseNo) {
        this.$refs["UwctrlVO"].clearValidate("licenseNo");
        callback();
      } else if (value && this.UwctrlVO.licenseNo) {
        callback(new Error("请在号牌导入与录入两项中选择一项进行特批配置"));
      }
    };
    return {
      msg: "",
      successtrue: false,
      licenseNoImportExcel: "",
      httphref: "../../../../#/static/LicensenoAddModel.zip",
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
        costRateUpper: "",
        costRateBIUpper: "",
        licenses: ""
      },
      valids: "",
      flag10: false,
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
          { required: true, message: "关系人标志不能为空", trigger: ["change"] }
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
          // { required: true, message: "号码号牌录入", trigger: ["blur"] },
          { validator: validateTotalSupply, trigger: ["blur", "change"] }
        ],
        licenses: [
          // {required: true, message: '号码号牌导入', trigger: ['blur']},
          { validator: validatePrice, trigger: ["blur", "change"] }
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
      this.UwctrlVO.licenses = file.name;
      console.log(file.name);
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
      this.$router.go(-1);
    },
    //取消请求
    falses() {
      this.outerVisible = false;
      this.open3();
    },
    // 确定请求
    trues() {
      this.outerVisible = false;
      let uwctrlVO = this.UwctrlVO;
      this.$fetch
        .post(this.HOST + this.$url.correctionSave, uwctrlVO)
        .then(res => {
            if (res) {
            this.open2();
            setTimeout(() => {
              this.$router.push({
                path: "/queryCorrection",
              });
            }, 2000);
          }
        })
    },
    //关闭弹窗
    handleClose(done) {
      // console.log("确认");
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
    onSuccess(esponse, file, fileList) {
      // console.log(esponse, file, fileList);
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
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
      })
        .then(res => {
          this.successtrue = res;
        })
    },
    // 保存
    requestdata() {
      this.$refs.UwctrlVO.validate(valids => {
        if(valids){
          this.trues();
        }
      });
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
.dec {
  text-decoration: none;
  color: #7cb2e3;
  position: relative;
  top: 6px;
}
/* .marginstyle{
  margin: 0 80px;
} */
.reminder {
  color: red;
  font-size: 12px;
  text-align: center;
}
.circular >>> .el-form-item {
  margin-bottom: 20px;
}
</style>
