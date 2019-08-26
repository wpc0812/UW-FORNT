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
          <el-form ref="form" :rules="rules" :model="UwctrlVO" label-width="150px">
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
                    <el-input type="text" v-model="UwctrlVO.applicCode" maxlength=16 minlength=16></el-input>
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
                  <el-form-item label="业务号:">
                    <el-input v-model="UwctrlVO.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8" class="marginstyle">
                  <el-form-item label="团单号:">
                    <el-input v-model="UwctrlVO.contractNo"></el-input>
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
                  <el-form-item label="号牌号码录入:" prop="licenseNo">
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
              <!-- action="http://11.205.241.116:8082/greenchannel/upload" -->
              <!-- :http-request="customUpload" -->

              <el-col :span="8">
                <el-form-item label="号牌号码导入:" prop="licenseNo">
                  <el-input v-model="UwctrlVO.licenseNo">
                    <template slot="append">
                      <el-upload
                        class="upload-demo"
                        ref="upload"
                        :multiple="true"
                        action=""
                        :on-remove="handleRemove"
                        :on-success="onSuccess"
                        :on-change="customUpload"
                        :show-file-list="false"
                        :file-list="fileList"
                        :auto-upload="false"
                        accept=".xls"
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
                <el-button size="mini" @click="requestdata()" type="primary">保存</el-button>
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
      width="50%"
      class="dialog-footer-parent"
      :before-close="handleClose"
    >
      <span class="fontSizeTrue">确定保存吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false">确 定</el-button>
        <el-button @click="outerVisible = false">取 消</el-button>
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
  data() {
    return {
      licenseNoImportExcel:"",
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
        costRateBIUpper: ""
      },
      fileList: [],
      relationsss: [
        { value1s: "1_被保险人",label:"1" },
        { value1s: "2_投保人",label:"2" }
      ],
     
       categoryss: [
        { value: "1_人工核保" ,label:"1"},
        { value: "2_自动核保通过",label:"2" },
        { value: "3_自动打回",label:"3" }
      ],
      rtReported: {},
      flagss: [{ value3: "0_无效" ,label:"0"}, { value3: "1_有效" ,label:"1"}],
      relations,
      activeNames: ["1"],
      results: [],
      rules: {},
      outerVisible: false
    };
  },
  computed: {},
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
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
      console.log(esponse, file, fileList);
    },
    // submitUpload() {
    //   this.$refs.upload.submit();
    // },
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
     return this.$axios({
        url: this.HOST + "/greenchannel/upload",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 20000,
        data: formData
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 保存
    requestdata(){
      if(this.UwctrlVO.insuredFlag.trim().length>0&&this.UwctrlVO.applicCode.trim().length==16&&this.UwctrlVO.insuredName.trim().length>0&&this.UwctrlVO.valid.trim().length>0&&this.UwctrlVO.flag.trim().length>0&&this.UwctrlVO.finishDate.trim().length>0){
          let uwctrlVO = this.UwctrlVO;
        this.$axios
        .post(this.HOST + "greenchannel/saveUwctrl", uwctrlVO)
        .then(res => {
          console.log(res.data);
          // if (res.data.length>0) {
          // }
        })
        .catch(error => {
          console.log(error);
        });
      }else{
        alert("请填写完整红星号标记的输入框，关系人代码为16位")
      }
    
    },
    // 没使用的多请求
    save() {

         // 多个网络请求
      this.$axios.all([this.customUpload(file), this.requestdata()]).then(
        this.$axios.spread(function(banner, chating) {
          // 两个请求现在都执行完成
          console.log(banner.data);
          console.log(chating.data);
        })
      );

     
    },

    // 校验
    ValidForm() {
      this.rules = {
        insuredFlag: [
          { required: true, message: "关系人标志不能为空", trigger: ["change"] }
        ],
        applicCode: [
          { required: true, message: "关系人代码16位", trigger: ["blur"] }
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
          { required: true, message: "号码号牌录入", trigger: ["blur"] }
        ]
        //  licenses: [
        //   {required: true, message: '号码号牌导入', trigger: ['blur']}
        // ],
      };
    }
  },
  created() {
    this.ValidForm();
  }
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
</style>
