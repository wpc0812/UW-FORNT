<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-row class="pt10">
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerRatio" size="mini">对比</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerDelete = true" size="mini">删除</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">影像上传</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">资料查看</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="auditOpinion" size="mini">查看审核意见</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="transferRecord" size="mini">流转记录</el-button>
        </el-col>
      </el-row>
      <hr>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row class="pt10">
            <el-col :span="24" class="pt10">
              <el-button type="primary" @click="submitaudit" size="mini">提交审核</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="UwMotorcadeInfoVO"  class="updatastyleinput" label-width="185px">
      <!-- 异地车对信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">异地车队信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务号:">
                  <el-input v-model="UwMotorcadeInfoVO.contractNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="分公司">
                  <el-input v-model="UwMotorcadeInfoVO.comcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制关系人标志:">
                  <el-input v-model="UwMotorcadeInfoVO.insuredflag"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="控制关系人名称:">
                  <el-input v-model="UwMotorcadeInfoVO.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制关系人代码:">
                  <el-input v-model="UwMotorcadeInfoVO.insuredCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="业务来源:">
                  <el-select v-model="UwMotorcadeInfoVO.businessNature" clearable placeholder="请选择">
                      <el-option
                        v-for="item in categoryss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="历史年度满期赔付率(%):">
                  <a href class="acolor" target="_blank">查询</a>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车队车辆总数:">
                  <el-input v-model="UwMotorcadeInfoVO.carcountAll"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="预估保费规模(单位:万元):">
                  <el-input v-model="UwMotorcadeInfoVO.estimatedPremiumSize"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="异地车辆数:">
                  <el-input v-model="UwMotorcadeInfoVO.foreigncarcount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="涉及车籍地:">
                  <el-input v-model="UwMotorcadeInfoVO.carCadastral"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车队车辆主要车型:">
                  <el-input v-model="UwMotorcadeInfoVO.carmainmodel"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆主要使用地:">
                  <el-input v-model="UwMotorcadeInfoVO.carmainarea"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制结束日期:">
                  <el-input v-model="UwMotorcadeInfoVO.finishdate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="商业险手续费上限(%):">
                  <el-input v-model="UwMotorcadeInfoVO.costRateUpper"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="监控方案:">
                  <el-input 
                  class="textareaheight"
                  v-model="UwMotorcadeInfoVO.monitoringProgramme"
                  type="textarea"
                  :rows="1"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="关联关系人姓名:">
                  <el-input 
                  v-model="UwMotorcadeInfoVO.insuredNameSUB"
                  type="textarea"
                  :rows="1"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="承保条件:">
                  <el-input 
                  v-model="UwMotorcadeInfoVO.underWritingCondition"
                  type="textarea"
                  :rows="1"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="备注:">
                  <el-input 
                  v-model="UwMotorcadeInfoVO.remark"
                  type="textarea"
                  :rows="1"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="距离控制日期结束日期:">92 天</el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="增加批次:">
                  <el-input v-model="UwMotorcadeInfoVO.uppici">
                    <template slot="append">浏览</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false"
                >
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <el-button
                    style="margin-left: 10px;"
                    size="small"
                    type="success"
                    @click="submitUpload"
                  >上传到服务器</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-col>
              <el-col :span="4">
                <a class="dec" :href="httphref" download="LicensenoAddModel.zip">号牌号码导入模板下载</a>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="10">
                <el-form-item label="修改批次:">
                  <el-input v-model="UwMotorcadeInfoVO.uppici">
                    <template slot="append">浏览</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false"
                >
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <el-button
                    style="margin-left: 10px;"
                    size="small"
                    type="success"
                    @click="submitUpload"
                  >上传到服务器</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-col>
              <el-col :span="4">
                <a class="dec" :href="httphref" download="LicensenoAddModel.zip">号牌号码导入模板下载</a>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <!-- 请输入查询条件 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">请输入查询条件</div>
            </template>
            <el-row>
              <el-col :span="20">
                <el-form-item label="号牌号码:">
                  <el-input v-model="UwMotorcadeInfoVO.licenseNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-button @click="selectCode">查询</el-button>
              </el-col>
              <el-col :span="12">
                <el-button>导出</el-button>
              </el-col>
            </el-row>
            <el-table
              :data="results"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" prop="index" label="序号" type="index"></el-table-column>
              <el-table-column align="center" prop="batchNo" label="批次号"></el-table-column>
              <el-table-column align="center" prop="licenseNo" label="号牌号码">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="BusinessNum(scope.row)"
                  >{{scope.row.flag}}</el-button>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="costRatemax" label="商业险手续费上限"></el-table-column>
              <el-table-column align="center" prop="costdisountmin" label="商业险总折扣率下限"></el-table-column>
              <el-table-column
                align="center"
                prop="exceptNCDDiscountUpper"
                label="自主核保系数*自助渠道系统下限(除nod系数)"
              ></el-table-column>
              <el-table-column align="center" prop="deductible" label="删除批次">
                 <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="deletebatch(scope.$index+1)"
                  >删除批次</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-form>
   
    <!-- dialog弹出框 -->
    <el-dialog title="核保任务提交"  :lock-scroll="false" class="text-left" :visible.sync="outerVisible">
      <div id="form">
        <el-form ref="form" :model="form" label-width="180px" :rules="rules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="当前提交节点"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="提交路径"></el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="分公司核保" prop="value" label-width="170px"></el-form-item>
            </el-col>
            <el-col :span="14" style="textAlian='center'">
              <el-form-item label="请选择" label-width="170px">
                <el-select v-model="form.value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="核保员意见:"
                v-model="textarea2"
              ></el-input>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-button type="primary" size="mini" class="mt10" @click="innerVisible = true">提交任务</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <el-dialog
      class="el-dialog__body__update"
      width="40%"
      title="核保任务提交"
      :visible.sync="innerVisible"
    >
      <el-row>工作流提示：投保单：34412414214214退回到业务系统成功！</el-row>
      <el-button
        @click="innerVisible = false;outerVisible = false"
        size="mini"
        type="primary"
        class="mt10"
      >关闭当前窗口</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "carAuditPage",
  data() {
    return {
      httphref: "../../../../#/static/LicensenoAddModel.zip",
      UwMotorcadeInfoVO:{},
      outerVisible:false,
      categoryss: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3" }
      ],
      results: [
        {
          kindName: "111",
          flag: "A0190Q",
          amount: "11",
          rate: "11",
          benchMarkPremium: "1",
          deductible: "123"
        },
        ,
        {
          kindName: "122",
          flag: "A0190Q",
          amount: "22",
          rate: "12",
          benchMarkPremium: "2",
          deductible: "123"
        },
        ,
        {
          kindName: "133",
          flag: "A0190Q",
          amount: "33",
          rate: "13",
          benchMarkPremium: "3",
          deductible: "123"
        },
        ,
        {
          kindName: "144",
          flag: "A0190Q",
          amount: "44",
          rate: "14",
          benchMarkPremium: "4",
          deductible: "123"
        },
        ,
        {
          kindName: "155",
          flag: "A0190Q",
          amount: "55",
          rate: "15",
          benchMarkPremium: "5",
          deductible: "123"
        }
      ],
      correction: {},
      flagCode: false,
      fileList: [],
      parameter: {},
      activeNames: [],
      carAuditPage: {},
      tableList: [],
      value: "",
      form: {},
      rules: {},
      radio: 1,
      outerVisible: false,
      innerVisible: false,
      textarea1: "",
      textarea2: "",
      options: [
        {
          value: 1,
          label: "提交总公司"
        },
        {
          value: 2,
          label: "审核未通过"
        }
      ]
    };
  },

  methods: {
    //设置collapse全部展开
    setActiveNames() {
      for (let i = 1; i <= 23; i++) {
        this.activeNames.push(JSON.stringify(i));
      }
    },
    //提交审核
    submitaudit(){
      this.outerVisible=true;
      
      // document.querySelector("div").style=" padding-right:0 !important;";
    },
    outerRatio(){
       this.$router.push({ path: "/carContrast"});
    },
    deletebatch(idx){
      // console.log(idx)
       this.$router.push({ path: "/deletebatch", query: { row: idx } });

    },
    auditOpinion(){
       this.$router.push({ path: "/auditOpinion"});
    },
    deletedata(idx){
      this.results.replace(idx,1)
    },
    transferRecord(){
      this.$router.push({ path: "/transferRecord"});
    },
    upload() {},
    BusinessNum(row) {
      // console.log(row)
      this.$router.push({ path: "/unNumPlate", query: { row: row.flag } });
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
    selectCode() {
      this.flagCode = true;
    },
    init() {
      this.postRequest(`/fridayService02/queryobject1detail`, {
        businessNo: this.parameter.businessNo
      }).then(res => {
        // this.carAuditPage = res.data.data;
        console.log(res);
      });
    }
  },

  created() {
    //设置collapse全部展开
    this.setActiveNames();
    // this.init();
    this.parameter = this.$route.query;
  }
};
</script>
<style scoped>
.btn {
  width: 104px;
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.el_collapse_padding >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
.el-form-item {
  margin-bottom: 0;
}
.text-left {
  text-align: center;
}
.float-right {
  text-align: center;
}
.updatastyleinput >>>.el-input__inner{
  border-radius: 0px;
    }
.updatastyleinput >>> .el-form-item__label{
   background: #E8F6F9;
 }   
.updatastyleinput .el-form-item{
   margin-bottom: 25px;
 }
.acolor {
  color: #0066cc;
  text-decoration: none;
  margin-left: 13px;
}
.dec {
  text-decoration: none;
  color: #7cb2e3;
  position: relative;
  top: 6px;
}
/* .textareaheight{
  min-height: 62px;
  height: 62px;
} */
</style>
<style>
</style>