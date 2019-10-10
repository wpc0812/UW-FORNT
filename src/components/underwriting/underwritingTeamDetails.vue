<template>
  <div class="titlestyle" style="margin-top:30px">
    <!-- 任务审核 -->
    <div style="margin: 5px 0;padding:0 5px">
      <el-row class="text-left buttons">
        <el-button
          size="mini"
          @click="goTolinks('details')"
          v-if="underwritingDetails.displayFlag.browseFlag == '1'"
        >详细信息</el-button>
        <el-button
          size="mini"
          @click="goToFlowLog()"
          v-if="underwritingDetails.displayFlag.flowRecordFlag == '1'"
        >流转记录</el-button>

        <el-button
          size="mini"
          @click="goTolinks('getECM')"
          v-if="underwritingDetails.displayFlag.infoFlag == '1'"
        >资料查看</el-button>

        <el-button
          size="mini"
          @click="goTolinks('uploadECM')"
          v-if="underwritingDetails.displayFlag.uploadImageFlag == '1'"
        >上传影像</el-button>
        <el-button
          size="mini"
          @click="goTolinks('mobileECM')"
          v-if="underwritingDetails.displayFlag.mobileImageFlag == '1'"
        >手机影像</el-button>
        <el-button
          size="mini"
          @click="getBack()"
          v-if="underwritingDetails.displayFlag.possessTaskFlag == '1'"
        >任务审核</el-button>
        <el-button
          size="mini"
          @click="getBack()"
          v-if="underwritingDetails.displayFlag.approvalInfoFlag == '1'"
        >审批信息</el-button>
        <el-button
          size="mini"
          @click="getBack()"
          v-if="underwritingDetails.displayFlag.flowRecordFlag == '1'"
        >撤回</el-button>
      </el-row>
    </div>

    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>

          <el-row class="pt11">
            <!-- <el-col :span="24" class="el-card__header text-left">任务审核</el-col> -->
            <el-col :span="24" class="pt11">
              <el-button type="primary" @click="submit" size="mini">提交审核</el-button>
              <el-button size="mini" @click="giveUp">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="underwritingDetails" label-width="120px">
      <!-- 处理核保任务 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">处理核保任务</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="处理部门:">
                  <el-input v-model="underwritingDetails.taskProcessing.handleComCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流入时间:">
                  <el-input v-model="underwritingDetails.taskProcessing.handleTime"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流转状态:">
                  <el-input v-model="underwritingDetails.taskProcessing.businessType_CN"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 概要信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="3">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">流转记录</div>
            </template>
            <div
              v-for="(flowRecord,index) in underwritingDetails.flowRecords"
              :key="index"
              :class="(index + 1) == underwritingDetails.flowRecords.length ? '' : 'border-btm-gra'"
            >
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="序号:">
                    <el-input v-model="flowRecord.index"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="节点名称:">
                    <el-input v-model="flowRecord.curFlow"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="流向:">
                    <el-input v-model="flowRecord.flowNext"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="所处状态:">
                    <el-input v-model="flowRecord.state"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="流入时间:">
                    <el-input v-model="flowRecord.indate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="处理时间:">
                    <el-input v-model="flowRecord.acceptDate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提交时间:">
                    <el-input v-model="flowRecord.outdate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="操作人:">
                    <el-input v-model="flowRecord.userName"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="16">
                  <el-form-item label="是否撤回业务:">
                    <el-input v-model="flowRecord.isRevoke"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 历次审核意见 TODO-->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="4">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">历次审核意见</div>
            </template>
            <el-table
              :data="underwritingDetails.underwriteOpinion"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :cell-style="{'text-align': 'center'}"
              :header-cell-style="{'text-align': 'center'}"
              :header-cell-class-name="'table-header-bg'"
            >
              <el-table-column align="center" prop="index" width="80" label="序号"></el-table-column>
              <el-table-column align="center" prop="makeCom" width="120" label="处理部门"></el-table-column>
              <el-table-column align="center" prop=" userName" width="120" label="审核人员"></el-table-column>
              <el-table-column align="center" prop="handleText" label="承保意见" show-overflow-tooltip></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 团单基本信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="5">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">团单基本信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="团单号:">
                  <el-input v-model="underwritingDetails.batchMain.contractNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="商业险手续费率:">
                  <el-input v-model="underwritingDetails.batchMain.costRateBI"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="交强险手续费率:">
                  <el-input v-model="underwritingDetails.batchMain.costRateCI"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="团单名称:">
                  <el-input v-model="underwritingDetails.batchMain.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="批次:">
                  <el-input v-model="underwritingDetails.batchMain.batchNo"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">合同:</div>
                  <el-input v-model="underwritingDetails.batchMain.contractno1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="合同名称:">
                  <el-input v-model="underwritingDetails.batchMain.contractname1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="总保费:">
                  <el-input v-model="underwritingDetails.batchMain.sumPremium"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="临分标志:">
                  <el-input v-model="underwritingDetails.batchMain.minuteflag"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="共保标志:">
                  <el-input v-model="underwritingDetails.batchMain.insuranceflag"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道码:">
                  <el-input v-model="underwritingDetails.batchMain.channelcode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="政策性业务:">
                  <el-input v-model="underwritingDetails.batchMain.policybusname"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属人员:">
                  <el-input v-model="underwritingDetails.batchMain.handler1Name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="经办人:">
                  <el-input v-model="underwritingDetails.batchMain.handlerName"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="操作员:">
                  <el-input v-model="underwritingDetails.batchMain.operatorName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="业务归属:">
                  <el-input v-model="underwritingDetails.batchMain.comcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="业务来源:">
                  <el-input v-model="underwritingDetails.batchMain.businessNature"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="争议解决方式:">
                  <el-input v-model="underwritingDetails.batchMain.argueSolution"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="仲裁委员会:">
                  <el-input v-model="underwritingDetails.batchMain.arbitBoardName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="折扣给定方式:">
                  <el-input v-model="underwritingDetails.batchMain.discountmode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="缴费次数:">
                  <el-input v-model="underwritingDetails.batchMain.payNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="插入时间:">
                  <el-input v-model="underwritingDetails.batchMain.inserttimeforhis"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="更新时间:">
                  <el-input v-model="underwritingDetails.batchMain.operatetimeforhis"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="专管专营:">
                  <el-input v-model="underwritingDetails.batchMain.monopolyName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <!-- 车辆维护信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">车辆维护信息</div>
            </template>
            <el-table
              :data="underwritingDetails.batchVehicles"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" prop="licenseNo" label="号牌号码"></el-table-column>
              <el-table-column align="center" prop="licenseType" label="号牌类型"></el-table-column>
              <el-table-column align="center" prop="motorcadeno" label="车队编号"></el-table-column>
              <el-table-column align="center" prop="carKindCode" label="车辆种类"></el-table-column>
              <el-table-column align="center" prop="proposalNo" label="投保单号"></el-table-column>
              <el-table-column align="center" prop="policyNo" label="保单号"></el-table-column>
              <el-table-column align="center" prop="sumAmount" label="总保额"></el-table-column>
              <el-table-column align="center" prop="sumPremium" label="总保费"></el-table-column>
              <el-table-column align="center" prop="prpprojectcode" label="投保方案"></el-table-column>
              <el-table-column align="center" prop="coinsprojectcode" label="共保方案"></el-table-column>
              <el-table-column align="center" prop="facprojectcode" label="临分方案"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 审核信息 -->
      <el-card class="circular mt4 shadow" v-if="underwritingDetails.uwNotion">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">审核信息</div>
            </template>
            <el-row>
              <el-col :span="12">
                <el-form-item label="业务动作:">
                  <el-select v-model="underwritingDetails.uwNotion.flag" placeholder="请选择">
                    <el-option
                      v-for="item in uwNotionFlags"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="审批片语:">
                  <el-select
                    v-model="underwritingDetails.uwNotion.carCheckStatus"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in uwNotionCarCheckStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="签署审批意见:">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="underwritingDetails.uwNotion.handleText"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-form>
    <!-- 任务审核 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="23">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row class="pt11">
            <el-col :span="24" class="pt11">
              <el-button type="primary" @click="submit" size="mini">提交审核</el-button>
              <el-button size="mini" @click="giveUp">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- dialog弹出框 -->
    <el-dialog
      title="核保任务提交"
      class="text-left"
      width="50%"
      :lock-scroll="false"
      :visible.sync="outerVisible"
    >
      <div id="form">
        <el-form label-width="150px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="当前任务环节:"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="提交路径选择:"></el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="省公司一级核保:" prop="value">
                <el-select v-model="form.value" placeholder="请选择">
                  <el-option
                    v-for="item in subOptions"
                    :key="item.path"
                    :label="item.pathName"
                    :value="item.path"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审批片语:">
                <el-select v-model="form.value" placeholder="请选择">
                  <el-option
                    v-for="item in uwNotionCarCheckStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                placeholder="请输入"
                :autosize="{ minRows: 2, maxRows: 4}"
                v-model="textarea1"
              ></el-input>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="核保员意见:"
                v-model="textarea2"
              ></el-input>
            </el-col>
            <el-button
              type="primary"
              size="mini"
              class="float-right mt10"
              @click=" submitReview"
            >提交任务</el-button>
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
      <el-button @click="goback" size="mini" type="primary" class="mt10">关闭当前窗口</el-button>
    </el-dialog>

    <!-- // 保费折扣率 弹框 列表 -->
    <el-dialog
      class="el-dialog__body__update"
      width="60%"
      title="核保任务提交"
      :visible.sync="adjustRateDialog"
    >
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="优惠代码" width="120"></el-table-column>
        <el-table-column prop="name" label="优惠原因"></el-table-column>
        <el-table-column prop="address" label="优惠率" width="120"></el-table-column>
        <el-table-column prop="address" label="优惠条件"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "underwritingTeamDetails",
  data() {
    return {
      parameter: {
        type: "POLICY"
      },
      routeDate: "",
      activeNames: [],
      form: {},
      subOptions: [],
      underwritingDetails: {
        taskProcessing: {}, //处理核保任务
        flowRecords: {}, //流转记录
        underwriteOpinions: [], // 历次审核意见
        batchMain: {}, // 团单基本信息
        batchVehicles: [], // 车辆维护信息
        uwNotion: {}, // 审批意见
        displayFlag: {
          browseFlag: "0", // 详细信息
          flowRecordFlag: "0", //	流转记录
          ClaimFlag: "0", //	出险信息
          infoFlag: "0", //	资料查看
          uploadImageFlag: "0", //	上传影像
          revokeFlag: "0", //	撤回
          possessTaskFlag: "0", // 任务审核
          approvalInfoFlag: "0" //	审批信息
        }
      },
      value: "",
      // 审核意见 ---审批动作
      uwNotionFlags: [
        { value: "1", label: "审核通过" },
        { value: "2", label: "下发修改" },
        { value: "3", label: "提交上级" }
      ],
      // 审核意见 ---审批片语
      uwNotionCarCheckStatus: [
        { value: "1", label: "同意" },
        { value: "2", label: "拒绝承保" },
        { value: "3", label: "请补充以下资料后重新提交" },
        { value: "4", label: "请调整以下承保条件后重新提交" },
        { value: "5", label: "超过本级权限，提交上级审核" }
      ],
      tableData: [], // 保费折扣率 弹框 列表
      outerVisible: false,
      innerVisible: false,
      adjustRateDialog: false, // 保费折扣率 弹框】
      textarea1: "",
      textarea2: "",
      options: [
        {
          value: 1,
          label: "审核通过"
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
    init() {
      let keyWords = {
        request: "INFO", // 固定穿参
        businessNo: this.routeDate.businessNo, // 业务单号
        // taskType: this.routeDate.type, // 任务类别
        // taskId: this.routeDate.businessNo, //  任务Id
        businessType: this.routeDate.type, // businessType
        comCode: "NSA12312ß", // 公司代码
        userCode: this.routeDate.businessNo // 员工号
      };
      this.$fetch
        .post(this.HOST + this.$url.uwmainGetUwInfo, keyWords)
        .then(data => {
          //  this.underwritingDetails = data
          //  this.underwritingDetails.displayFlag = {}
        });
    },
    goback() {
      this.$router.go(-1);
    },
    // 放弃
    giveUp() {
      let key = {
        businessNo: this.parameter.businessNo,
        businessType: this.parameter.businessType,
        usercode: "A000"
      };
      this.$fetch.post(this.HOST + this.$url.giveUpUwPayee, key).then(data => {
        console.log(data);
        this.$message.success(data);
        this.goback();
      });
    },
    // 提交审核
    submit() {
      // debugger
      let key = {
        businessNo: 12321,
        businessType: "H",
        usercode: "A000"
      };
      this.$fetch.post(this.HOST + this.$url.saveUwPayee, key).then(data => {
        console.log(data);
        // this.subOptions = data.selectPath;
        this.outerVisible = true;
      });
      // this.outerVisible= true
    },
    // 提交审核
    submitReview() {
      let key = {
        businessNo: this.routeDate.businessNo || "123213"
      };
      this.$fetch
        .post(this.HOST + this.$url.undwrtSubmitReview, key)
        .then(data => {
          this.innerVisible = true;
        });
    },
    // 撤回
    getBack() {
      let keyWords = {
        businessNo: this.routeDate.businessNo || "AST12312312",
        ComCode: this.routeDate.businessNo || "BJ233",
        UserCode: this.routeDate.businessNo || "WPC212",
        UserName: this.routeDate.businessNo || "宛平城",
        revokeType: this.routeDate.type || "EH", // 撤回类型 1：省级从承保撤回  2：省级从总公司撤回  3：总公司从省级撤回
        taskId: this.routeDate.businessNo || "id12312", // 任务id
        businessType: this.routeDate.type || "ST",
        batchNo: this.routeDate.type || 12312312
      };
      this.$fetch
        .post(this.HOST + this.$url.undwrtrevokeUndwrt, keyWords)
        .then(data => {
          console.log(data);
          // this.$message.console.error(data);
        });
    },
    // 流转记录
    goToFlowLog() {
      let routeUrl = this.$router.resolve({
        path: "/flowLog",
        query: {
          businessNo: "123"
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    // 获取跳转链接并打开新窗口
    goTolinks(type) {
      switch (type) {
        case "uploadECM":
          let key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            taskId: "123",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };

          this.$fetch
            .post(this.HOST + this.$url.uwmainUploadECM, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 详细信息
        case "details":
          let details = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            taskType: "sdsd",
            taskId: "123",
            comCode: "13000000"
          };

          this.$fetch
            .post(this.HOST + this.$url.telSaleInfo, details)
            .then(data => {
              console.log(data);
              // window.open("http://www.baidu.com")
              window.open(data);
            });
          break;
      }
    },
    // 流转记录
    goToFlowLog() {
      let routeUrl = this.$router.resolve({
        path: "/flowLog",
        query: {
          businessNo: "123"
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    // 打开保费折扣率弹框
    openAdjustRateDialog(row) {
      this.adjustRateDialog = true;
    },
    handleSelectionChange() {}
  },

  created() {
    //设置collapse全部展开
    this.routeDate = this.$route.query;
    setTimeout(() => {
      this.setActiveNames();
      this.init();
    });
  }
};
</script>
<style scoped>
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.text-left {
  overflow: hidden;
}
.text-left {
  width: 1388px;
}
.titlestyle >>> .card-title {
  font-size: 12px;
}
.titlestyle >>> .title-blue-bar {
  height: 16px;
}
.el-collapse-item__wrap >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
</style>
<style>
.pt11 {
  padding-top: 0px;
}
.el-collapse-item__wrap >>> .el-form-item {
  margin-bottom: 20px;
}
.border-btm-gra {
  border-bottom: solid 1px rgba(70, 90, 100, 0.6);
  margin-bottom: 15px;
}
</style>
