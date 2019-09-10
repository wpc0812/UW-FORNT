<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-row class="pt10">
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerBranch" size="mini">生效办结</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerRenewal" size="mini">续保</el-button>
        </el-col>
        <el-col :span="3" v-if="state==666">
          <el-button class="btn" type="primary" @click="outerUpdate" size="mini">修改</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerRatio" size="mini">对比</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerDelete" size="mini">删除</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerUpimg" size="mini">影像上传</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerDataview" size="mini">资料查看</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="auditOpinion" size="mini">查看审核意见</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="transferRecord" size="mini">流转记录</el-button>
        </el-col>
      </el-row>
      <hr />
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row >
            <el-col :span="24">
              <el-button type="primary" @click="submitaudit" size="mini">提交审核</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="UwMotorcadeInfoVO" class="updatastyleinput" label-width="185px">
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
                <el-form-item label="业务号:" class="labelheight">
                  <el-input v-model="UwMotorcadeInfoVO.motorcadeNo"  :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="分公司" class="labelheight">
                  <el-input v-model="UwMotorcadeInfoVO.comcode" :disabled="flagdisabled" ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制关系人标志:" class="labelheight">
                  <el-input v-model="UwMotorcadeInfoVO.insuredflag" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="控制关系人名称:">
                  <el-input v-model="UwMotorcadeInfoVO.insuredName" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制关系人代码:">
                  <el-input v-model="UwMotorcadeInfoVO.insuredCode" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="业务来源:">
                  <el-select v-model="UwMotorcadeInfoVO.businessNature" :disabled="flagdisabled" clearable placeholder="请选择">
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
                  <el-input v-model="UwMotorcadeInfoVO.carcountAll" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="预估保费规模(单位:万元):">
                  <el-input v-model="UwMotorcadeInfoVO.estimatedPremiumSize" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="超分公司权限车辆总数:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.uppercarcount" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="超分公司权限车辆种类:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.uppercartype" :disabled="flagdisabled"></el-input>
                  <div class="showdiv" @click="showkuang">查看</div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车队车辆主要车型:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.carmainmodel" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆主要使用地:">
                  <el-input v-model="UwMotorcadeInfoVO.carmainarea" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制结束日期:">
                  <el-input v-model="UwMotorcadeInfoVO.finishdate" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="商业险手续费上限(%):">
                  <el-input v-model="UwMotorcadeInfoVO.costRateUpper" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="监控方案:" class="labelheight1">
                  <el-input
                  :disabled="flagdisabled"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="UwMotorcadeInfoVO.monitoringProgramme"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="承保条件:" class="labelheight1"  prop="underWritingCondition">
                  <el-input
                  :disabled="flagdisabled"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="UwMotorcadeInfoVO.underWritingCondition"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="关联关系人名称:" class="labelheight1">
                  <el-input
                  :disabled="flagdisabled"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="UwMotorcadeInfoVO.insuredNameSUB"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="备注:" class="labelheight1">
                  <el-input
                  :disabled="flagdisabled"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="UwMotorcadeInfoVO.remark"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                class="labelheight1"
                  v-model="UwMotorcadeInfoVO.finishdate"
                  label="距离控制日期结束日期:"
                >{{UwMotorcadeInfoVO.finishdate}}天</el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="state==1">
              <el-col :span="10">
                <el-form-item label="新增批次:">
                  <el-input v-model="UwMotorcadeInfoVO.appici">
                    <template slot="append">
                      <el-upload
                        class="upload-demo"
                        ref="upload"
                        :multiple="true"
                        action
                        :auto-upload="false"
                        accept=".xls, .txt"
                        :on-remove="addHandleRemove"
                        :on-success="addOnSuccess"
                        :on-change="addUploadname"
                        :show-file-list="false"
                        :file-list="fileList1"
                        :on-preview="addHandlePreview"
                        :before-remove="addBeforeRemove"
                      >
                        <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                      </el-upload>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button size="small" @click="addpici" type="primary">上传文件</el-button>
              </el-col>
              <el-col :span="3">
                <a class="dec" :href="httphref" download="LicensenoAddModel.zip">号牌号码导入模板下载</a>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="修改批次:">
                  <el-input v-model="UwMotorcadeInfoVO.uppici">
                    <template slot="append">
                      <el-upload
                        class="upload-demo"
                        ref="upload"
                        :multiple="true"
                        action
                        :auto-upload="false"
                        accept=".xls, .txt"
                        :on-remove="upHandleRemove"
                        :on-success="upOnSuccess"
                        :on-change="upUploadname"
                        :show-file-list="false"
                        :file-list="fileList2"
                        :on-preview="upHandlePreview"
                        :before-remove="upBeforeRemove"
                      >
                        <el-button slot="trigger" size="small" type="primary">浏览</el-button>
                      </el-upload>
                    </template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button size="small" @click="updatepici()" type="primary">上传文件</el-button>
              </el-col>
              <el-col :span="3">
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
                <el-button @click="carAuditPagechu">导出</el-button>
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
                  >{{scope.row.licenseNo}}</el-button>
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
                  <el-button type="text" size="small" @click="deletebatch(scope.row)">删除批次</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-form>

    <!-- dialog弹出框 -->
    <el-dialog title="核保任务提交" :lock-scroll="false" class="text-left" :visible.sync="outerVisible">
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
                    :key="item.label"
                    :label="item.value"
                    :value="item.label"
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
              <el-button type="primary" size="mini" class="mt10" @click="submitTask">提交任务</el-button>
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

import utils from "../../utils/index";
import { setTimeout } from "timers";

export default {
  name: "carAuditPage",
  data() {
    return {
      flagdisabled:true,
      state: "666",
      httphref: "../../../../#/static/LicensenoAddModel.zip",
      UwMotorcadeInfoVO: {
        motorcadeNo: "",
        licenseNo: "",
        appici: "",
        uppici: "",
        comcode: "",
        insuredflag: "",
        insuredName: "",
        insuredNCode: "",
        carmainmodel: "",
        businessNature: "",
        carcountAll: "",
        estimatedPremiumSize: "",
        uppercarcount: "",
        uppercartype: "",
        carmainmodel: "",
        carmainarea: "",
        finishdate: "",
        costRateUpper: "",
        monitoringProgramme: "",
        insuredNameSUB: "",
        underWritingCondition: "",
        remark: "",
        finishdate: ""
      },
      categoryss: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3" }
      ],
      results: [],
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
      fileList1: [],
      fileList2: [],
      outerVisible: false,
      innerVisible: false,
      textarea1: "",
      textarea2: "",
      options: [
        {
          value: "提交总公司",
          label: "1"
        },
        {
          value: "审核未通过",
          label: "2"
        }
      ],
      formDataAdd: {},
      formDataUP: {}
    };
  },
  computed: {},
  methods: {
    //新增文件选取
    addUploadname(file, fileList) {
      if (file) {
        this.UwMotorcadeInfoVO.addpici = file.name;
        console.log(file.name, this.UwMotorcadeInfoVO.addpici);
        let formData = new FormData();
        formData.append("file", file.raw);
        formData.append("motorcadeNo", this.UwMotorcadeInfoVO.motorcadeNo);
        this.uploading = true;
        this.formDataAdd = formData;
      }
    },
    // 新增文件上传
    addpici() {
      this.$fetch({
        url: this.HOST + this.$url.carAuditPageaddfile,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: this.formDataAdd
      }).then(res => {
        console.log(res);
      });
    },
    //修改文件选取
    upUploadname(file, fileList) {
      if (file) {
        this.UwMotorcadeInfoVO.uppici = file.name;
        console.log(file.name, this.UwMotorcadeInfoVO.uppici);
        let formData = new FormData();
        formData.append("file", file.raw);
        formData.append("motorcadeNo", this.UwMotorcadeInfoVO.motorcadeNo);
        this.uploading = true;
        this.formDataUP = formData;
        // console.log(formData, this.formDataUP);
      }
    },
    //修改文件上传
    updatepici() {
      this.$fetch({
        url: this.HOST + this.$url.carAuditPageUpdatefile,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: this.formDataUP
      }).then(res => {
        console.log(res);
      });
    },
    //导出get
    carAuditPagechu() {
      let _url = "http://11.205.241.44:8082" + this.$url.carAuditPageToInsured;
      let paramsFileData = {
        motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
        licenseNo: this.UwMotorcadeInfoVO.licenseNo
      };
      window.location.href =
        _url + "?" + utils.encodeSearchParams(paramsFileData);
    },
    //号码号牌跳转
    BusinessNum(row) {
      this.$router.push({
        path: "/unNumPlate",
        query: {
          row: row.licenseNo,
          motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo
        }
      });
    },
    //设置collapse全部展开
    setActiveNames() {
      for (let i = 1; i <= 23; i++) {
        this.activeNames.push(JSON.stringify(i));
      }
    },

    //删除批次
    deletebatch(row) {
      this.$router.push({
        path: "/deletebatch",
        query: {
          row: row.batchNo,
          motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo
        }
      });
    },
    //提交审核
    submitaudit() {
      this.outerVisible = true;
    },
    submitTask() {
      let picc = {
        motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
        userCode: "userCode",
        handleText: "yes",
        userName: "userName"
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageSubmits, picc)
        .then(res => {
          console.log(res);
          if (res) {
            setTimeout(() => {
              this.innerVisible = true;
            }, 3000);
          }
        });
    },
    showkuang(){
      console.log("弹窗")
    },

    //生效办结
    outerBranch() {
      this.$router.push({ path: "/toUwmotorcadeinfoPage" });
      // let picc = {
      //   motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
      //   userCode: "userCode",
      //   handleText: "yes",
      //   userName: "userName"
      // };
      // this.$fetch
      //   .post(this.HOST + this.$url.carAuditPageOuterBranch, picc)
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    //续保
    outerRenewal() {
      this.$router.push({ path: "/torenewal" });
      // this.$fetch
      //   .get(this.HOST + this.$url.carAuditPageOuterRenewal, {
      //     params: { id: 1 }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    //修改
    outerUpdate() {
      this.$router.push({ path: "/topupdate" });
    },
    //对比
    outerRatio() {
      this.$router.push({
        path: "/carContrast",
        query: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      });
      // this.$fetch
      //   .get(this.HOST + this.$url.carAuditPageOuterRatio, {
      //     params: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    },
    //删除
    outerDelete() {
      this.$fetch
        .get(this.HOST + this.$url.carAuditPageDelete, {
          params: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
        })
        .then(res => {
          console.log(res);
        });
    },
    // 影像上传
    outerUpimg() {
      let ImageRequestDTO = {
        businessNo: this.parameter.businessNo,
        businessType: "oa",
        userCode: "ob",
        userName: "oc",
        comCode: this.UwMotorcadeInfoVO.comcode
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageUploadECMs, ImageRequestDTO)
        .then(res => {
          console.log(res);
        });
    },
    //资料查看
    outerDataview() {
      let ImageRequestDTO = {
        businessNo: this.parameter.businessNo,
        businessType: "oa",
        userCode: "ob",
        userName: "oc",
        comCode: this.UwMotorcadeInfoVO.comcode
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageQueryECMs, ImageRequestDTO)
        .then(res => {
          console.log(res);
        });
    },
    //查看审核意见
    auditOpinion() {
      // this.$fetch
      //   .get(this.HOST + this.$url.carAuditPageAuditOpinion, {
      //     params: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
      this.$router.push({
        path: "/auditOpinion",
        query: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      });
    },
    //流转记录
    transferRecord() {
      // this.$fetch
      //   .get(this.HOST + this.$url.carAuditPageTransferRecord, {
      //     params: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
      this.$router.push({
        path: "/transferRecord",
        query: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      });
    },
    //车牌号查询
    selectCode() {
      this.flagCode = true;
      this.$fetch
        .get(this.HOST + this.$url.unNumPlateFindUwmotorcadeinfo, {
          params: {
            licenseNo: this.UwMotorcadeInfoVO.licenseNo,
            motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo
          }
        })
        .then(res => {
          this.results = res;
          console.log(res);
        });
    },
    upHandleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    upOnSuccess(file, fileList) {
      // console.log(file, fileList);
    },
    upHandlePreview(file, fileList) {
      // console.log(file, fileList);
    },
    upBeforeRemove(file, fileList) {
      // console.log(file, fileList);
    },
    addHandleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    addOnSuccess(file, fileList) {
      // console.log(file, fileList);
    },
    addHandlePreview(file, fileList) {
      // console.log(file, fileList);
    },
    addBeforeRemove(file, fileList) {
      // console.log(file, fileList);
    },

    init() {
      // 业务号查询详情
      this.$fetch
        .get(this.HOST + this.$url.rtAddFindMotorcadeMain, {
          params: {
            motorcadeNo: this.$route.query.row
          }
        })
        .then(res => {
          this.UwMotorcadeInfoVO = res;
          this.results = res.uwMotorcadeInfos;
          console.log(res);
        });
    }
  },

  created() {
    //设置collapse全部展开
    this.setActiveNames();
    this.init();
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
.updatastyleinput >>> .el-input__inner {
  border-radius: 0px;
}
.updatastyleinput >>> .el-form-item__label {
  background: #e8f6f9;
}
.labelheight >>> .el-form-item__label,.labelheight >>> .el-input__inner{
  line-height: 48px;
  height: 48px;
}
.labelheight1 >>> .el-form-item__label,.labelheight1 >>> .el-input__inner{
  line-height: 50px;
  height: 50px;
}
/* .updatastyleinput .el-form-item {
  margin-bottom: 25px;
} */
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
.showdiv{
  position: absolute;
  bottom: 0px;
  left:2px;
}
/* .textareaheight{
  min-height: 62px;
  height: 62px;
} */
</style>
<style>
</style>