<template>
  <div>
    <!-- 超权限详情 -->
    <el-card class="circular">
      <el-row class="pt10">
        <el-col :span="3" v-if="states=='4'">
          <el-button class="btn" type="primary" @click="outerBranch" size="mini">生效办结</el-button>
        </el-col>
        <el-col :span="3" v-if="states=='5'">
          <el-button class="btn" type="primary" @click="outerRenewal" size="mini">续保</el-button>
        </el-col>
        <el-col :span="3" v-if="states=='2'||states=='4'||states=='5'">
          <el-button class="btn" type="primary" @click="outerUpdate" size="mini">修改</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerRatio" size="mini">对比</el-button>
        </el-col>
        <el-col :span="3" v-if="states=='0'||states=='1'||states=='2'||states=='4'">
          <el-button class="btn" type="primary" @click="outerDelete" size="mini">删除</el-button>
        </el-col>
        <el-col :span="3" v-if="states=='0'||states=='1'||states=='2'||states=='4'">
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
      <el-collapse v-model="activeNames" v-if="states=='1'">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row>
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
                  <el-input v-model="UwMotorcadeInfoVO.motorcadeNo" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="分公司" class="labelheight">
                  <el-input v-model="UwMotorcadeInfoVO.comcode" :disabled="flagdisabled"></el-input>
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
                  <el-select
                    v-model="UwMotorcadeInfoVO.businessNature"
                    :disabled="flagdisabled"
                    clearable
                    placeholder="请选择"
                  >
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
                  <el-button @click="selectHistory" size="small" text="primary">查询</el-button>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车队车辆总数:">
                  <el-input v-model="UwMotorcadeInfoVO.carcountAll" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="预估保费规模(单位:万元):">
                  <el-input
                    v-model="UwMotorcadeInfoVO.estimatedPremiumSize"
                    :disabled="flagdisabled"
                  ></el-input>
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
                  <div class="showdiv" @click="showCarSpecies(carTypeCodes,'uppercartype')">点击查看</div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车队车辆主要车型:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.carmainmodel" :disabled="flagdisabled"></el-input>
                  <div class="showdiv" @click="showCarSpecies(carTypeCodes,'carmainmodel')">点击查看</div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆主要使用地:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.carmainarea" :disabled="flagdisabled"></el-input>
                  <div class="showdiv" @click="showCarSpecies(provinceCodes,'carmainarea')">点击查看</div>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="控制结束日期:" class="labelheight1">
                  <el-input v-model="UwMotorcadeInfoVO.finishdate" :disabled="flagdisabled"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="商业险手续费上限(%):" class="labelheight1">
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
                    v-model="UwMotorcadeInfoVO.monitoringProgramme"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="承保条件:" class="labelheight1" prop="underWritingCondition">
                  <el-input
                    :disabled="flagdisabled"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
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
                    v-model="UwMotorcadeInfoVO.remark"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item
                  class="labelheight1"
                  v-model="UwMotorcadeInfoVO.finishdate"
                  label="距离控制日期结束日期:"
                >
                  <div class="textcontent">{{UwMotorcadeInfoVO.coutDay}}天</div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="this.displaynone=='0'||this.displaynone=='5'">
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
                        accept=".xls"
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
              <el-col :span="3">
                <el-button size="small" @click="addpici" type="primary">上传文件</el-button>
              </el-col>
              <el-col :span="4">
                <a class="dec" href="./UwMotorcadeMainModel.xls" download>号牌号码导入模板下载</a>
              </el-col>
            </el-row>
            <el-row v-if="states=='0'||states=='1'||states=='2'||states=='5'||states=='4'">
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
                        accept=".xls"
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
              <el-col :span="3">
                <el-button size="small" @click="updatepici()" type="primary">上传文件</el-button>
              </el-col>
              <el-col :span="4">
                <a class="dec" href="./UwMotorcadeMainModel.xls" download>号牌号码导入模板下载</a>
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
              <el-col :span="12" class="selectMargin">
                <el-button @click="selectCode">查询</el-button>
              </el-col>
              <el-col :span="12" class="selectMargin">
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
                  <el-button
                    type="text"
                    size="small"
                    @click="deletebatch(scope.row)"
                    v-if="states=='0'||states=='1'"
                  >删除批次</el-button>
                  <el-button type="text" size="small" style="color:#606266;" v-if="states=='3'">审核中</el-button>
                  <el-button
                    type="text"
                    size="small"
                    style="color:#606266;"
                    v-if="states=='5'"
                  >已生效办结</el-button>
                  <el-button
                    type="text"
                    size="small"
                    style="color:#606266;"
                    v-if="states=='4'"
                  >已审核通过</el-button>
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
                    :disabled="item.disabled"
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
      <el-row>工作流提示：提交成功！</el-row>
      <el-button
        @click="innerVisible = false;outerVisible = false"
        size="mini"
        type="primary"
        class="mt10"
      >关闭当前窗口</el-button>
    </el-dialog>
    <el-dialog
      :lock-scroll="false"
      :title="transferTitle"
      class="tanchuang"
      :visible.sync="dialogVisibleMore"
      width="20%"
    >
      <div class="ulli" v-for="(item,index) in arrays" :key="index">{{item}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibleMore = false">关闭本窗口</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { carTypeCodes, provinceCodes } from "@/assets/js/baseCode";
import utils from "../../utils/index";
import { setTimeout } from "timers";

export default {
  name: "carAuditPageother",
  data() {
    return {
      transferTitle: "",
      displaynone: "",
      dialogVisibleMore: false,
      states: "",
      flagdisabled: true,
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
        finishdate: "",
        uppercartypedata: [],
        carmainmodeldata: [],
        carmainareadata: []
      },
      arrays: [],
      carTypeCodes,
      provinceCodes,
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
      textarea2: "",
      uwmotorcademainids: "",
      options: [
        {
          value: "提交总公司",
          label: "1"
        },
        {
          value: "审核未通过",
          label: "2",
          disabled: true
        }
      ],
      formDataAdd: {},
      formDataUP: {},
      messages: "",
      allData: {
        uppercartype: [],
        carmainmodel: [],
        carmainarea: []
      }
    };
  },
  computed: {},
  methods: {
    //信息提示
    open2() {
      this.$message({
        message: this.messages,
        type: "success"
      });
    },
    //新增文件选取
    addUploadname(file, fileList) {
      this.UwMotorcadeInfoVO.appici = file.name;
      if (file) {
        let formData = new FormData();
        formData.append("file", file.raw);
        formData.append("id", this.uwmotorcademainids);
        this.uploading = true;
        this.formDataAdd = formData;
        this.$forceUpdate();
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
        if (res == true) {
          this.displaynone = "8";
          this.$forceUpdate();
          // this.states=
        }
      });
    },
    //修改文件选取
    upUploadname(file, fileList) {
      if (file) {
        let formData = new FormData();
        formData.append("file", file.raw);
        formData.append("motorcadeNo", this.UwMotorcadeInfoVO.motorcadeNo);
        this.uploading = true;
        this.UwMotorcadeInfoVO.uppici = file.name;
        this.formDataUP = formData;
        this.$forceUpdate();
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
        uwmotorcademainid: this.uwmotorcademainids,
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
          uwmotorcademainid: this.uwmotorcademainids
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
          uwmotorcademainid: this.uwmotorcademainids
        }
      });
    },
    //提交审核
    submitaudit() {
      this.outerVisible = true;
    },
    submitTask() {
      let picc = {
        businessNo: this.UwMotorcadeInfoVO.motorcadeNo,
        userCode: "userCode",
        handleText: this.textarea2,
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
    //生效办结
    outerBranch() {
      let picc = {
        motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
        userCode: "userCode",
        handleText: "yes",
        userName: "userName"
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageOuterBranch, picc)
        .then(res => {
          console.log(res);
          window.open(res);
        });
    },
    //续保
    outerRenewal() {
      this.$fetch
        .get(this.HOST + this.$url.carAuditPageOuterRenewal, {
          params: { id: 1 }
        })
        .then(res => {
          // console.log(res);
          if (res > 60) {
            this.messages = res;
          } else {
            this.$router.push({
              path: "/torenewal",
              query: {
                motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
                nametype: "2"
              }
            });
          }
        });
    },
    //修改
    outerUpdate() {
      this.$router.push({
        path: "/topupdate",
        query: {
          motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
          nametype: "2"
        }
      });
    },
    //对比
    outerRatio() {
      this.$router.push({
        path: "/carContrast",
        query: {
          motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
          nametype: "2"
        }
      });
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
        motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
        businessType: "oa",
        userCode: "ob",
        userName: "oc",
        comCode: this.UwMotorcadeInfoVO.comcode
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageUploadECMs, ImageRequestDTO)
        .then(res => {
          console.log(res);
          window.open(res);
        });
    },
    //资料查看
    outerDataview() {
      let ImageRequestDTO = {
        motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo,
        businessType: "oa",
        userCode: "ob",
        userName: "oc",
        comCode: this.UwMotorcadeInfoVO.comcode
      };
      this.$fetch
        .post(this.HOST + this.$url.carAuditPageQueryECMs, ImageRequestDTO)
        .then(res => {
          console.log(res);
          window.open(res);
        });
    },
    //查看审核意见
    auditOpinion() {
      this.$router.push({
        path: "/auditOpinion",
        query: { motorcadeNo: this.UwMotorcadeInfoVO.motorcadeNo }
      });
    },
    //流转记录
    transferRecord() {
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
            uwmotorcademainid: this.uwmotorcademainids
          }
        })
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            res[i].state = res[i].state.trim();
          }
          this.results = res;
          console.log(res);
        });
    },
    //历史赔付率
    selectHistory() {
      let key = {
        reportFormsType: "teamquality",
        comcode: this.UwMotorcadeInfoVO.comcode,
        businessNo: this.UwMotorcadeInfoVO.businessNo || "123", // 业务号
        taskType: "" // 业务类型
      };
      this.$fetch
        .get(this.HOST + this.$url.uwmainTeamquality, { params: key })
        .then(data => {
          console.log(typeof data);
          // window.open("http://www.baidu.com")
          window.open(data);
        });
    },
    //文件上传的方法
    upHandleRemove(file, fileList) {},
    upOnSuccess(file, fileList) {},
    upHandlePreview(file, fileList) {},
    upBeforeRemove(file, fileList) {},
    addHandleRemove(file, fileList) {},
    addOnSuccess(file, fileList) {},
    addHandlePreview(file, fileList) {},
    addBeforeRemove(file, fileList) {},
    //初始化
    init() {
      // 业务号查询详情
      this.$fetch
        .get(this.HOST + this.$url.rtAddFindMotorcadeMain, {
          params: {
            motorcadeNo: this.$route.query.row,
            uwmotorcademainid: this.$route.query.id
          }
        })
        .then(res => {
          this.uwmotorcademainids = res.uwMotorcadeMain.id;
          this.results = res.uwMotorcadeMain.uwMotorcadeInfos;
          if (res.uwMotorcadeMain.uppercartype) {
            this.allData.uppercartype = res.uwMotorcadeMain.uppercartype.split(
              ","
            );
            res.uwMotorcadeMain.uppercartype = this.getShowlabel(
              this.carTypeCodes,
              res.uwMotorcadeMain.uppercartype.split(",")
            );
          }
          if (res.uwMotorcadeMain.carmainmodel) {
            this.allData.carmainmodel = res.uwMotorcadeMain.carmainmodel.split(
              ","
            );
            res.uwMotorcadeMain.carmainmodel = this.getShowlabel(
              this.carTypeCodes,
              res.uwMotorcadeMain.carmainmodel.split(",")
            );
          }
          if (res.uwMotorcadeMain.carmainarea) {
            this.allData.carmainarea = res.uwMotorcadeMain.carmainarea.split(
              ","
            );
            res.uwMotorcadeMain.carmainarea = this.getShowlabel(
              this.provinceCodes,
              res.uwMotorcadeMain.carmainarea.split(",")
            );
          }
          this.UwMotorcadeInfoVO = res.uwMotorcadeMain;
        });
    },
    //点击查看
    showCarSpecies(items, types) {
      switch (types) {
        case "uppercartype":
          this.transferTitle = "超分公司权限车辆种类";
          this.uppercartypedata = this.getShowlabels(
            this.carTypeCodes,
            this.allData.uppercartype
          );
          this.arrays = this.uppercartypedata;
          break;
        case "carmainmodel":
          this.transferTitle = "车队车辆主要车型";
          this.carmainmodeldata = this.getShowlabels(
            this.carTypeCodes,
            this.allData.carmainmodel
          );
          this.arrays = this.carmainmodeldata;
          break;
        case "carmainarea":
          this.transferTitle = "车辆主要使用地";
          this.carmainareadata = this.getShowlabels(
            this.provinceCodes,
            this.allData.carmainarea
          );
          this.arrays = this.carmainareadata;
          break;
      }
      this.dialogVisibleMore = true;
    },
    //弹框展示
    getShowlabels(items, options) {
      let label = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < options.length; j++) {
          // console.log(items[i].value,options[j])
          if (items[i].value === options[j]) {
            label.push(items[i].label);
          }
        }
      }
      return label;
    },
    //input展示
    getShowlabel(items, options) {
      let label = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < options.length; j++) {
          if (items[i].value === options[j]) {
            if (/^[A-Z]/.test(items[i].value)) {
              label.push(items[i].label.substring(5, items[i].label.length));
            } else if (/\d$/.test(items[i].value)) {
              label.push(
                items[i].label.substring(0, items[i].label.length - 8)
              );
            }
          }
        }
      }
      // console.log(label)
      return utils.arrayToString(label);
    }
  },
  created() {
    //设置collapse全部展开
    this.setActiveNames();
    this.init();
    this.parameter = this.$route.query;
    this.states = this.$route.query.state;
    this.displaynone=this.$route.query.state;
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
.labelheight >>> .el-form-item__label,
.labelheight >>> .el-input__inner {
  line-height: 48px;
  height: 48px;
}
.labelheight1 >>> .el-form-item__label,
.labelheight1 >>> .el-input__inner {
  line-height: 50px;
  height: 50px;
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
.showdiv {
  position: absolute;
  bottom: -6px;
  left: 2px;
}
.selectMargin {
  margin-top: 10px;
}
.textareaheight {
  min-height: 62px;
  height: 62px;
}
.ulli {
  text-align: center;
}
.ulli li {
  list-style-type: none;
}
.updatastyleinput >>> .el-input.is-disabled .el-input__inner {
  background-color: #ffffff;
}
.labelheight1 .textcontent {
  text-align: center;
  line-height: 50px;
  height: 50px;
}
.tanchuang {
  display: flex;
  justify-content: center;
  align-items: Center;
  overflow: hidden;
}
.tanchuang >>> .el-dialog {
  margin: 0 auto !important;
  height: 80%;
  overflow: hidden;
}
.tanchuang >>> .el-dialog__body {
  position: absolute;
  left: 0;
  top: 54px;
  bottom: 62px;
  right: 0;
  padding: 0;
  z-index: 1;
  overflow: hidden;
  overflow-y: auto;
}
.tanchuang >>> .el-dialog__footer {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0px;
  padding: 5px;
}
</style>
