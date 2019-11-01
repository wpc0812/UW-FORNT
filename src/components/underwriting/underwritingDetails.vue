<template>
  <div class="titlestyle">
    <!-- 任务审核 -->
    <div style="padding-left: 5px">
      <el-row class="text-lef">
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('details')"
          v-if="underwritingDetails.displayFlag.browseFlag == '1'"
        >详细信息</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goToFlowLog()"
          v-if="underwritingDetails.displayFlag.flowRecordFlag == '1'"
        >流转记录</el-button>

        <!-- <el-button size='mini' @click='goTolinks()' v-if="underwritingDetails.displayFlag.lastPolicyClaimFlag == '1'" >上年保单理赔信息</el-button> -->

        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('headCompany')"
          v-if="underwritingDetails.displayFlag.headOfficeInfoFlag == '1'"
        >查看总公司资料</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('branchCompany')"
          v-if="underwritingDetails.displayFlag.branchOfficeInfoFlag == '1'"
        >查看分公司资料</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('startECM')"
          v-if="underwritingDetails.displayFlag.relationImageFlag == '1'"
        >查看关联单影像</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('getECM')"
          v-if="underwritingDetails.displayFlag.infoFlag == '1'"
        >资料查看</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('uploadECM')"
          v-if="underwritingDetails.displayFlag.uploadImageFlag == '1'"
        >上传影像</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('mobileECM')"
          v-if="underwritingDetails.displayFlag.mobileImageFlag == '1'"
        >手机影像</el-button>

        <el-button
          size="mini"
          type="primary"
          @click="goToCarDeviceInfo"
          v-if="underwritingDetails.displayFlag.deviceInfoFlag == '1'"
        >设备信息</el-button>

        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('lastYearPolicyInfo')"
          v-if="underwritingDetails.displayFlag.lastPolicyInfoFlag == '1'"
        >查看上年保单信息</el-button>

        <el-button
          size="mini"
          type="primary"
          @click="goToUnderwriteRiskTypeRate"
          v-if="underwritingDetails.displayFlag.riskTypeRateFlag == '1'"
        >查看风险类别占比</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="goTolinks('teamquality')"
          v-if="underwritingDetails.displayFlag.reportFormsFlag == '1'"
        >车队业务质量统计查询</el-button>

        <el-button
          size="mini"
          type="primary"
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
              <!-- <el-button type="primary" @click="submit1" size="mini">提交审核</el-button> -->
              <el-button size="mini" @click="giveUp">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="underwritingDetails" label-width="120px" class="bigKuang" disabled>
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
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否续保:">
                  <el-input v-model="underwritingDetails.taskProcessing.xubao"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否新车:">
                  <el-input v-model="underwritingDetails.taskProcessing.isNewCar"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否短期单:">
                  <el-input v-model="underwritingDetails.taskProcessing.isShort"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    电子投保/
                    <br />纸质投保:
                  </div>
                  <el-input v-model="underwritingDetails.taskProcessing.isNetProp"></el-input>
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
              <div class="card-title">概要信息</div>
            </template>
            <el-row :gutter="20" v-if="typeE !='E' ">
              <el-col :span="8">
                <el-form-item label="批单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.endorseno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.proposalNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="保单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.policyNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="合同号:">
                  <el-input v-model="underwritingDetails.summaryInfo.contractNo"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="签单日期:">
                  <el-input v-model="underwritingDetails.summaryInfo.operateDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="保险期限从:">
                  <el-input v-model="underwritingDetails.summaryInfo.startDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.summaryInfo.startHour"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="至:">
                  <el-input v-model="underwritingDetails.summaryInfo.endDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.summaryInfo.endHour"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="承包意见">
                  <el-input v-model="underwritingDetails.summaryInfo.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20" v-if="typeE ==='E' ">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="批单号:">
                    <el-input v-model="underwritingDetails.summaryInfo.endorseno"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="投保单号:">
                    <el-input v-model="underwritingDetails.summaryInfo.proposalNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="保单号:">
                    <el-input v-model="underwritingDetails.summaryInfo.policyNo">
                      <el-button
                        size="mini"
                        slot="append"
                        type="primary"
                        @click="relationDialog = true"
                      >关联</el-button>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="签单日期:">
                    <el-input v-model="underwritingDetails.summaryInfo.operateDate"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="退保原因:">
                    <el-input v-model="underwritingDetails.summaryInfo.cancelReason"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合同号:">
                    <el-input v-model="underwritingDetails.summaryInfo.contractNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="保险期限从:">
                    <el-input v-model="underwritingDetails.summaryInfo.startDate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="时:">
                    <el-input v-model="underwritingDetails.summaryInfo.startHour"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="至:">
                    <el-input v-model="underwritingDetails.summaryInfo.endDate"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="时:">
                    <el-input v-model="underwritingDetails.summaryInfo.endHour"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="生效日期:">
                    <el-input v-model="underwritingDetails.summaryInfo.validDate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="时:">
                    <el-input v-model="underwritingDetails.summaryInfo.validhour"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="批改类型:">
                    <el-input v-model="underwritingDetails.summaryInfo.endorType"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23">
                  <el-form-item label="承包意见">
                    <el-input v-model="underwritingDetails.summaryInfo.remark"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
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
      <el-card class="circular mt4 shadow" v-if="typeE ==='E' ">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="23">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">显示批文</div>
            </template>
            <el-col :span="24">
              <el-form-item label="商业险批文">
                <el-input v-model="underwritingDetails.uwpTexts.uwptextS"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="交强险批文">
                <el-input v-model="underwritingDetails.uwpTexts.uwptextJ"></el-input>
              </el-form-item>
            </el-col>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 投保人信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="5">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">投保人信息</div>
            </template>
            <el-row>
              <!-- :class="[data[0].uwinsuredT&&data[1].uwinsuredT&&(data[1].uwinsuredT.insuredName!=data[0].uwinsuredT.insuredName)?'el-input__inner':'']" -->
              <el-col :span="8">
                <el-form-item label="投保人名称:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.insuredName!=dataE[0].uwinsuredT.insuredName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.insuredName:''"
                    v-model="underwritingDetails.uwinsuredT.insuredName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人住所:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.insuredAddress!=dataE[0].uwinsuredT.insuredAddress)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.insuredAddress:''"
                    v-model="underwritingDetails.uwinsuredT.insuredAddress"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人别名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.aliasName!=dataE[0].uwinsuredT.aliasName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.aliasName:''"
                    v-model="underwritingDetails.uwinsuredT.aliasName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保人单位性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.businessSort!=dataE[0].uwinsuredT.businessSort)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.businessSort:''"
                    v-model="underwritingDetails.uwinsuredT.businessSort"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.insurednature!=dataE[0].uwinsuredT.insurednature)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.insurednature:''"
                    v-model="underwritingDetails.uwinsuredT.insurednature"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.identifyNumber!=dataE[0].uwinsuredT.identifyNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.identifyNumber:''"
                    v-model="underwritingDetails.uwinsuredT.identifyNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.linkerName!=dataE[0].uwinsuredT.linkerName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.linkerName:''"
                    v-model="underwritingDetails.uwinsuredT.linkerName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.phoneNumber!=dataE[0].uwinsuredT.phoneNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.phoneNumber:''"
                    v-model="underwritingDetails.uwinsuredT.phoneNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.mobile!=dataE[0].uwinsuredT.mobile)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.mobile:''"
                    v-model="underwritingDetails.uwinsuredT.mobile"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredT&&dataE[1].uwinsuredT&&(dataE[1].uwinsuredT.postCode!=dataE[0].uwinsuredT.postCode)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredT?dataE[0].uwinsuredT.postCode:''"
                    v-model="underwritingDetails.uwinsuredT.postCode"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 被保险人信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="6">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">被投保人信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="被投保人名称:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.insuredName!=dataE[0].uwinsuredI.insuredName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.insuredName:''"
                    v-model="underwritingDetails.uwinsuredI.insuredName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人住所:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.insuredAddress!=dataE[0].uwinsuredI.insuredAddress)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.insuredAddress:''"
                    v-model="underwritingDetails.uwinsuredI.insuredAddress"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人别名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.aliasName!=dataE[0].uwinsuredI.aliasName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.aliasName:''"
                    v-model="underwritingDetails.uwinsuredI.aliasName"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="被投保人单位性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.businessSort!=dataE[0].uwinsuredI.businessSort)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.businessSort:''"
                    v-model="underwritingDetails.uwinsuredI.businessSort"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.insurednature!=dataE[0].uwinsuredI.insurednature)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.insurednature:''"
                    v-model="underwritingDetails.uwinsuredI.insurednature"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被保险人证件类型:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.identifyType!=dataE[0].uwinsuredI.identifyType)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.identifyType:''"
                    v-model="underwritingDetails.uwinsuredI.identifyType"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.identifyNumber!=dataE[0].uwinsuredI.identifyNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.identifyNumber:''"
                    v-model="underwritingDetails.uwinsuredI.identifyNumber"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.linkerName!=dataE[0].uwinsuredI.linkerName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.linkerName:''"
                    v-model="underwritingDetails.uwinsuredI.linkerName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.phoneNumber!=dataE[0].uwinsuredI.phoneNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.phoneNumber:''"
                    v-model="underwritingDetails.uwinsuredI.phoneNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.mobile!=dataE[0].uwinsuredI.mobile)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.mobile:''"
                    v-model="underwritingDetails.uwinsuredI.mobile"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="邮政编码:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredI&&dataE[1].uwinsuredI&&(dataE[1].uwinsuredI.postCode!=dataE[0].uwinsuredI.postCode)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredI?dataE[0].uwinsuredI.postCode:''"
                    v-model="underwritingDetails.uwinsuredI.postCode"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 车主信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="7">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">车主信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车主名称:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.insuredName!=dataE[0].uwinsuredC.insuredName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.insuredName:''"
                    v-model="underwritingDetails.uwinsuredC.insuredName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主住所:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.insuredAddress!=dataE[0].uwinsuredC.insuredAddress)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.insuredAddress:''"
                    v-model="underwritingDetails.uwinsuredC.insuredAddress"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主别名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.aliasName!=dataE[0].uwinsuredC.aliasName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.aliasName:''"
                    v-model="underwritingDetails.uwinsuredC.aliasName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车主单位性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.businessSort!=dataE[0].uwinsuredC.businessSort)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.businessSort:''"
                    v-model="underwritingDetails.uwinsuredC.businessSort"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.insurednature!=dataE[0].uwinsuredC.insurednature)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.insurednature:''"
                    v-model="underwritingDetails.uwinsuredC.insurednature"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.identifyNumber!=dataE[0].uwinsuredC.identifyNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.identifyNumber:''"
                    v-model="underwritingDetails.uwinsuredC.identifyNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.linkerName!=dataE[0].uwinsuredC.linkerName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.linkerName:''"
                    v-model="underwritingDetails.uwinsuredC.linkerName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.phoneNumber!=dataE[0].uwinsuredC.phoneNumber)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.phoneNumber:''"
                    v-model="underwritingDetails.uwinsuredC.phoneNumber"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.mobile!=dataE[0].uwinsuredC.mobile)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.mobile:''"
                    v-model="underwritingDetails.uwinsuredC.mobile"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input
                    :class="[dataE&&dataE[0].uwinsuredC&&dataE[1].uwinsuredC&&(dataE[1].uwinsuredC.postCode!=dataE[0].uwinsuredC.postCode)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwinsuredC?dataE[0].uwinsuredC.postCode:''"
                    v-model="underwritingDetails.uwinsuredC.postCode"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 投保车辆信息 TODO-->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="8">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">投保车辆信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="号牌号码:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.licenseNo!=dataE[0].uwitemCar.licenseNo)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.licenseNo:''"
                    v-model="underwritingDetails.uwitemCar.licenseNo"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌种类:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.licenseType!=dataE[0].uwitemCar.licenseType)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.licenseType:''"
                    v-model="underwritingDetails.uwitemCar.licenseType"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型名称:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.brandName!=dataE[0].uwitemCar.brandName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.brandName:''"
                    v-model="underwritingDetails.uwitemCar.brandName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆种类:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.carKindCode!=dataE[0].uwitemCar.carKindCode)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.carKindCode:''"
                    v-model="underwritingDetails.uwitemCar.carKindCode"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="载客量:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.seatCount!=dataE[0].uwitemCar.seatCount)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.seatCount:''"
                    v-model="underwritingDetails.uwitemCar.seatCount"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="排量/功率(升):">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.exhaustScale!=dataE[0].uwitemCar.exhaustScale)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.exhaustScale:''"
                    v-model="underwritingDetails.uwitemCar.exhaustScale"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="核定载质量(吨):">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.tonCount!=dataE[0].uwitemCar.tonCount)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.tonCount:''"
                    v-model="underwritingDetails.uwitemCar.tonCount"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整备质量(吨):">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.carloteququality!=dataE[0].uwitemCar.carloteququality)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.carloteququality:''"
                    v-model="underwritingDetails.uwitemCar.carloteququality"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="初登日期:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.enrollDate!=dataE[0].uwitemCar.enrollDate)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.enrollDate:''"
                    v-model="underwritingDetails.uwitemCar.enrollDate"
                  ></el-input>
                  <!-- <el-date-picker v-model="underwritingDetails.uwitemCar.enrollDate" type="date" value-format="yyyy-MM-dd"></el-date-picker> -->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="使用年限:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.useYears!=dataE[0].uwitemCar.useYears)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.useYears:''"
                    v-model="underwritingDetails.uwitemCar.useYears"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用性质:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.useNatureCode!=dataE[0].uwitemCar.useNatureCode)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.useNatureCode:''"
                    v-model="underwritingDetails.uwitemCar.useNatureCode"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="条款类型:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.clauseTypeCname!=dataE[0].uwitemCar.clauseTypeCname)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.clauseTypeCname:''"
                    v-model="underwritingDetails.uwitemCar.clauseTypeCname"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="条款类别:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.clauseType!=dataE[0].uwitemCar.clauseType)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.clauseType:''"
                    v-model="underwritingDetails.uwitemCar.clauseType"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新车购置价格:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.purchasePrice!=dataE[0].uwitemCar.purchasePrice)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.purchasePrice:''"
                    v-model="underwritingDetails.uwitemCar.purchasePrice"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="总保险费:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.sumPremium!=dataE[0].uwitemCar.sumPremium)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.sumPremium:''"
                    v-model="underwritingDetails.uwitemCar.sumPremium"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="发动机号:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.engineNo!=dataE[0].uwitemCar.engineNo)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.engineNo:''"
                    v-model="underwritingDetails.uwitemCar.engineNo"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN码:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.vinNo!=dataE[0].uwitemCar.vinNo)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.vinNo:''"
                    v-model="underwritingDetails.uwitemCar.vinNo"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新增设备:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.carDevice!=dataE[0].uwitemCar.carDevice)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.carDevice:''"
                    v-model="underwritingDetails.uwitemCar.carDevice"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="品牌:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.brandName!=dataE[0].uwitemCar.brandName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.brandName:''"
                    v-model="underwritingDetails.uwitemCar.brandName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车系:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.familyName!=dataE[0].uwitemCar.familyName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.familyName:''"
                    v-model="underwritingDetails.uwitemCar.familyName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车架号:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.frameNo!=dataE[0].uwitemCar.frameNo)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.frameNo:''"
                    v-model="underwritingDetails.uwitemCar.frameNo"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆气缸数:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.cylinderCount!=dataE[0].uwitemCar.cylinderCount)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.cylinderCount:''"
                    v-model="underwritingDetails.uwitemCar.cylinderCount"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="拖拉机标准:">
                  <div slot="label" style="line-height: 16px">
                    是否符合
                    <br />拖拉机标准:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.isCriterion!=dataE[0].uwitemCar.isCriterion)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.isCriterion:''"
                    v-model="underwritingDetails.uwitemCar.isCriterion"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.aliasName!=dataE[0].uwitemCar.aliasName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.aliasName:''"
                    v-model="underwritingDetails.uwitemCar.aliasName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    重载货车
                    <br />智能设备:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.intelligentDevice!=dataE[0].uwitemCar.intelligentDevice)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.intelligentDevice:''"
                    v-model="underwritingDetails.uwitemCar.intelligentDevice"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装日期:">
                  <el-input
                    :class="[dataE&&dataE[0].uwitemCar&&dataE[1].uwitemCar&&(dataE[1].uwitemCar.installDate!=dataE[0].uwitemCar.installDate)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].uwitemCar?dataE[0].uwitemCar.installDate:''"
                    v-model="underwritingDetails.uwitemCar.installDate"
                  ></el-input>
                  <!-- <el-date-picker v-model="underwritingDetails.uwitemCar.installDate" type="date" value-format="yyyy-MM-dd"></el-date-picker> -->
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 车型信息变动情况 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="9">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">车型信息变动情况</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车型代码:">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehicleid"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="快速查询码:">
                  <el-input v-model="underwritingDetails.uwcarmodel.searchcode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型名称:">
                  <el-input v-model="underwritingDetails.uwcarmodel.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="类型:">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehicleclass"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="种类:">
                  <el-input v-model="underwritingDetails.uwcarmodel.strVehicleType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="品牌名称:">
                  <el-input v-model="underwritingDetails.uwcarmodel.brandidAndName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车系名称:">
                  <el-input v-model="underwritingDetails.uwcarmodel.familyidAndName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="生产厂商:">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehiclemaker"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整车质量(吨):">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehicleweight"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="变速器:">
                  <el-input v-model="underwritingDetails.uwcarmodel.transmissiontype"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    发动机
                    <br />型号/功率:
                  </div>
                  <el-input v-model="underwritingDetails.uwcarmodel.enginetypeAndPower"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="标准配置:">
                  <el-input v-model="underwritingDetails.uwcarmodel.equipstandard"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="选装配置:">
                  <el-input v-model="underwritingDetails.uwcarmodel.equipoptional"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="外形尺寸:">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehiclesize"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="前轮距/后轮距:">
                  <el-input v-model="underwritingDetails.uwcarmodel.trackfrontAndRear"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="轴距:">
                  <el-input v-model="underwritingDetails.uwcarmodel.wheelbase"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="年款:">
                  <el-input v-model="underwritingDetails.uwcarmodel.vehicleyear"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险说明:">
                  <el-input v-model="underwritingDetails.uwcarmodel.dirrisk"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input v-model="underwritingDetails.uwcarmodel.nickname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-table
              :data="underwritingDetails.uwcarmodelCompareList"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :cell-style="{'text-align': 'center'}"
              :header-cell-style="{'text-align': 'center'}"
              :header-cell-class-name="'table-header-bg'"
            >
              <el-table-column align="center" label width="55"></el-table-column>
              <el-table-column align="center" prop="vehicleseat" label="载客数">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.vehicleseat !=dataE[0].uwcarmodelCompareList.vehicleseat ? 'table-cell-bg' :''"
                  >{{scope.row.vehicleseat}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="vehicletonnage" label="载重量">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.vehicletonnage !=dataE[0].uwcarmodelCompareList.vehicletonnage ? 'table-cell-bg' :''"
                  >{{scope.row.vehicletonnage}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="vehicleexhaust" label=" 排气量(升)">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.vehicleexhaust !=dataE[0].uwcarmodelCompareList.vehicleexhaust ? 'table-cell-bg' :''"
                  >{{scope.row.vehicleexhaust}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="strIsAlarm" label="防盗" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div
                    :class="scope.row.strIsAlarm !=dataE[0].uwcarmodelCompareList.strIsAlarm ? 'table-cell-bg' :''"
                  >{{scope.row.strIsAlarm}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="strIsABS" label="ABS" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div
                    :class="scope.row.strIsABS !=dataE[0].uwcarmodelCompareList.strIsABS ? 'table-cell-bg' :''"
                  >{{scope.row.strIsABS}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="strIsAirBag" label="安全气囊">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.strIsAirBag !=dataE[0].uwcarmodelCompareList.strIsAirBag ? 'table-cell-bg' :''"
                  >{{scope.row.strIsAirBag}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" label="车损系数" prop="quotietydam">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.quotietydam !=dataE[0].uwcarmodelCompareList.quotietydam ? 'table-cell-bg' :''"
                  >{{scope.row.quotietydam}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="quotietyloss" label="盗抢系数">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.quotietyloss !=dataE[0].uwcarmodelCompareList.quotietyloss ? 'table-cell-bg' :''"
                  >{{scope.row.quotietyloss}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="vehicleprice" label="车辆价格">
                <template slot-scope="scope">
                  <div
                    :class="scope.row.vehicleprice !=dataE[0].uwcarmodelCompareList.vehicleprice ? 'table-cell-bg' :''"
                  >{{scope.row.vehicleprice}}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 保险期限 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="10">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">保险期限</div>
            </template>
            <el-row>
              <el-col :span="6">
                <el-form-item label="保险期限从:">
                  <el-input
                    :class="[dataE&&dataE[0].insurancePeriod&&dataE[1].insurancePeriod&&(dataE[1].insurancePeriod.startDate!=dataE[0].insurancePeriod.startDate)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].insurancePeriod?dataE[0].insurancePeriod.startDate:''"
                    v-model="underwritingDetails.insurancePeriod.startDate"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="时:">
                  <el-input
                    :class="[dataE&&dataE[0].insurancePeriod&&dataE[1].insurancePeriod&&(dataE[1].insurancePeriod.startHour!=dataE[0].insurancePeriod.startHour)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].insurancePeriod?dataE[0].insurancePeriod.startHour:''"
                    v-model="underwritingDetails.insurancePeriod.startHour"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="至:">
                  <el-input
                    :class="[dataE&&dataE[0].insurancePeriod&&dataE[1].insurancePeriod&&(dataE[1].insurancePeriod.endDate!=dataE[0].insurancePeriod.endDate)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].insurancePeriod?dataE[0].insurancePeriod.endDate:''"
                    v-model="underwritingDetails.insurancePeriod.endDate"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="时:">
                  <el-input
                    :class="[dataE&&dataE[0].insurancePeriod&&dataE[1].insurancePeriod&&(dataE[1].insurancePeriod.endHour!=dataE[0].insurancePeriod.endHour)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].insurancePeriod?dataE[0].insurancePeriod.endHour:''"
                    v-model="underwritingDetails.insurancePeriod.endHour"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 主险 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="11">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">主险</div>
            </template>
            <el-row>
              <el-table
                :data="underwritingDetails.uwitemkindZ"
                stripe
                tooltip-effect="dark"
                style="width: 100%"
                :cell-style="{'text-align': 'center'}"
                :header-cell-style="{'text-align': 'center'}"
                :header-cell-class-name="'table-header-bg'"
              >
                <el-table-column align="center" label="险别代码" prop="kindCode"></el-table-column>
                <el-table-column align="center" prop="kindName" label="险别名称">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0&&dataE[0].uwitemkindZ[scope.$index].kindName?dataE[0].uwitemkindZ[scope.$index].kindName:''"
                      :class="scope.row.kindName !=(dataE[0]&&dataE[0].uwitemkindZ.length>0&&dataE[0].uwitemkindZ[scope.$index].kindName?dataE[0].uwitemkindZ[scope.$index].kindName:'')? 'table-cell-bg' :''"
                    >{{scope.row.kindName}}</div>
                    <div v-else>{{scope.row.kindName}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="flag" label="不计免赔率">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].flag:''"
                      :class="scope.row.flag!=dataE[0].uwitemkindZ[scope.$index].flag? 'table-cell-bg' :''"
                    >{{scope.row.flag}}</div>
                    <div v-else>{{scope.row.flag}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="amount" label="保险金额/责任限额">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].amount:''"
                      :class="scope.row.amount!=dataE[0].uwitemkindZ[scope.$index].amount? 'table-cell-bg' :''"
                    >{{scope.row.amount}}</div>
                    <div v-else>{{scope.row.amount}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="rate" label="费率(%)">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].rate:''"
                      :class="scope.row.rate!=dataE[0].uwitemkindZ[scope.$index].rate? 'table-cell-bg' :''"
                    >{{scope.row.rate}}</div>
                    <div v-else>{{scope.row.rate}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="benchMarkPremium" label="标准保费(元)">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].benchMarkPremium:''"
                      :class="scope.row.benchMarkPremium!=dataE[0].uwitemkindZ[scope.$index].benchMarkPremium? 'table-cell-bg' :''"
                    >{{scope.row.benchMarkPremium}}</div>
                    <div v-else>{{scope.row.benchMarkPremium}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="deductible" label="免赔额(元)">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].deductible:''"
                      :class="scope.row.deductible!=dataE[0].uwitemkindZ[scope.$index].deductible? 'table-cell-bg' :''"
                    >{{scope.row.deductible}}</div>
                    <div v-else>{{scope.row.deductible}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="可选免赔系数%" prop="deductibleRate">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].deductibleRate:''"
                      :class="scope.row.deductibleRate!=dataE[0].uwitemkindZ[scope.$index].deductibleRate? 'table-cell-bg' :''"
                    >{{scope.row.deductibleRate}}</div>
                    <div v-else>{{scope.row.deductibleRate}}</div>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="discount" label="保费折扣%">
                  <template slot-scope="scope">
                    <span
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].discount:''"
                      :class="scope.row.discount!=dataE[0].uwitemkindZ[scope.$index].discount? 'table-cell-bg' :''"
                    >
                      {{scope.row.discount}}
                      <el-button class="button-uwprofit" @click="openAdjustRateDialog(scope.row)">*</el-button>
                    </span>
                    <span v-else>
                      {{scope.row.discount}}
                      <el-button class="button-uwprofit" @click="openAdjustRateDialog(scope.row)">*</el-button>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="premium" label="续保调整比例%">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].premium:''"
                      :class="scope.row.premium!=dataE[0].uwitemkindZ[scope.$index].premium? 'table-cell-bg' :''"
                    >{{scope.row.premium}}</div>
                    <div v-else>{{scope.row.premium}}</div>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="adjustRate" label="应交保费(元)">
                  <template slot-scope="scope">
                    <div
                      v-if="typeE=='E'"
                      :title="dataE[0]&&dataE[0].uwitemkindZ.length>0?dataE[0].uwitemkindZ[scope.$index].adjustRate:''"
                      :class="scope.row.adjustRate!=dataE[0].uwitemkindZ[scope.$index].adjustRate? 'table-cell-bg' :''"
                    >{{scope.row.adjustRate}}</div>
                    <div v-else>{{scope.row.adjustRate}}</div>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 附加险ZZ -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">附加险</div>
            </template>
            <el-table
              :data="underwritingDetails.uwitemkindF"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" label="险别代码" prop="kindCode"></el-table-column>
              <el-table-column align="center" prop="kindName" label="险别名称">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0&&dataE[0].uwitemkindF[scope.$index].kindName?dataE[0].uwitemkindF[scope.$index].kindName:''"
                    :class="scope.row.kindName !=(dataE[0]&&dataE[0].uwitemkindF.length>0&&dataE[0].uwitemkindF[scope.$index].kindName?dataE[0].uwitemkindF[scope.$index].kindName:'')? 'table-cell-bg' :''"
                  >{{scope.row.kindName}}</div>
                  <div v-else>{{scope.row.kindName}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="flag" label="不计免赔率">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].flag:''"
                    :class="scope.row.flag!=dataE[0].uwitemkindF[scope.$index].flag? 'table-cell-bg' :''"
                  >{{scope.row.flag}}</div>
                  <div v-else>{{scope.row.flag}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="amount" label="保险金额/责任限额">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].amount:''"
                    :class="scope.row.amount!=dataE[0].uwitemkindF[scope.$index].amount? 'table-cell-bg' :''"
                  >{{scope.row.amount}}</div>
                  <div v-else>{{scope.row.amount}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="rate" label="费率(%)">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].rate:''"
                    :class="scope.row.rate!=dataE[0].uwitemkindF[scope.$index].rate? 'table-cell-bg' :''"
                  >{{scope.row.rate}}</div>
                  <div v-else>{{scope.row.rate}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="benchMarkPremium" label="标准保费(元)">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].benchMarkPremium:''"
                    :class="scope.row.benchMarkPremium!=dataE[0].uwitemkindF[scope.$index].benchMarkPremium? 'table-cell-bg' :''"
                  >{{scope.row.benchMarkPremium}}</div>
                  <div v-else>{{scope.row.benchMarkPremium}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="deductible" label="免赔额(元)">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].deductible:''"
                    :class="scope.row.deductible!=dataE[0].uwitemkindF[scope.$index].deductible? 'table-cell-bg' :''"
                  >{{scope.row.deductible}}</div>
                  <div v-else>{{scope.row.deductible}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" label="可选免赔系数%" prop="deductibleRate">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].deductibleRate:''"
                    :class="scope.row.deductibleRate!=dataE[0].uwitemkindF[scope.$index].deductibleRate? 'table-cell-bg' :''"
                  >{{scope.row.deductibleRate}}</div>
                  <div v-else>{{scope.row.deductibleRate}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="discount" label="保费折扣%">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].discount:''"
                    :class="scope.row.discount!=dataE[0].uwitemkindF[scope.$index].discount? 'table-cell-bg' :''"
                  >{{scope.row.discount}}</div>
                  <div v-else>{{scope.row.discount}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="adjustRate" label="续保调整比例%">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].adjustRate:''"
                    :class="scope.row.adjustRate!=dataE[0].uwitemkindF[scope.$index].adjustRate? 'table-cell-bg' :''"
                  >{{scope.row.adjustRate}}</div>
                  <div v-else>{{scope.row.adjustRate}}</div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="premium" label="应交保费(元)">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwitemkindF.length>0?dataE[0].uwitemkindF[scope.$index].premium:''"
                    :class="scope.row.premium!=dataE[0].uwitemkindF[scope.$index].premium? 'table-cell-bg' :''"
                  >{{scope.row.premium}}</div>
                  <div v-else>{{scope.row.premium}}</div>
                </template>
              </el-table-column>
            </el-table>
            <el-row class="mt10">
              <el-col :span="8">
                <el-form-item label="折扣保费合计:">
                  <el-input v-model="underwritingDetails.uwitemkindCount.discountPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="续保调整保费合计:">
                  <el-input v-model="underwritingDetails.uwitemkindCount.adjustPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="实交保费合计:">
                  <el-input v-model="underwritingDetails.uwitemkindCount.premiumCount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="总折扣:">
                  <el-input v-model="underwritingDetails.uwitemkindCount.dbProfit"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 定报价指标信息ZZ -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="13">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">定报价指标信息</div>
            </template>
            <div
              v-for="(uwqfixationDetail, index) in underwritingDetails.uwqfixationDetails "
              :key="index"
              :class="(index+1) != underwritingDetails.uwqfixationDetails.length ? 'border-btm-gra': '' "
            >
              <el-row>
                <el-col :span="8">
                  <el-form-item label="投保单号:">
                    <el-input v-model="uwqfixationDetail.proposalNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="批单号:">
                    <el-input v-model="uwqfixationDetail.endorseNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="产品代码:">
                    <el-input v-model="uwqfixationDetail.riskCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="折扣率:">
                    <el-input v-model="uwqfixationDetail.disCount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="利润率:">
                    <el-input v-model="uwqfixationDetail.profits"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="固定成本率:">
                    <el-input v-model="uwqfixationDetail.cost"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height: 16px">
                      营业税金
                      <br />及附加比率:
                    </div>
                    <el-input v-model="uwqfixationDetail.taxorAppend"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="赔付率R:">
                    <el-input v-model="uwqfixationDetail.payMentR"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="标准赔付率R:">
                    <el-input v-model="uwqfixationDetail.payMentR"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="销售费用率:">
                    <el-input v-model="uwqfixationDetail.poundAge"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="标准保费:">
                    <el-input v-model="uwqfixationDetail.basePremium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="风险保费:">
                    <el-input v-model="underwritingDetails.uwitemCar.riskPremium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="签单保费:">
                    <el-input v-model="uwqfixationDetail.signPremium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height:16px">
                      是否报价
                      <br />(0:否 1:是):
                    </div>
                    <el-input v-model="uwqfixationDetail.isQuotation"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="风险类别:">
                    <el-input v-model="uwqfixationDetail.riskClass"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务说明:">
                    <el-input v-model="uwqfixationDetail.operationInfo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="实际折扣率:">
                    <el-input v-model="uwqfixationDetail.realDisCount"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="实际利润率:">
                    <el-input v-model="uwqfixationDetail.realProfits"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="实际赔付率:">
                    <el-input v-model="uwqfixationDetail.realPayMentR"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="保单盈利类别:">
                    <el-input v-model="uwqfixationDetail.profitClass"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height:16px">
                      定价返回的跟单
                      <br />风险保费合计:
                    </div>
                    <el-input v-model="uwqfixationDetail.riskSumPremium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height: 16px">
                      不考虑模拟
                      <br />交强的折扣率:
                    </div>
                    <el-input v-model="uwqfixationDetail.discountBI"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height: 16px">
                      不考虑模拟交强
                      <br />的销售费用率:
                    </div>
                    <el-input v-model="uwqfixationDetail.poundageBI"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 约定驾驶人信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="14">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">约定驾驶人信息</div>
            </template>
            <el-table :data="underwritingDetails.uwcardrivers" style="width: 100%">
              <el-table-column prop="driverName" label="姓名"></el-table-column>
              <el-table-column prop="drivingLicenseNo" label="驾驶证号">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].drivingLicenseNo:''"
                    :class="scope.row.drivingLicenseNo!=dataE[0].uwcardrivers[scope.$index].drivingLicenseNo? 'table-cell-bg' :''"
                  >{{scope.row.drivingLicenseNo}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="sex" label="性别">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].sex:''"
                    :class="scope.row.sex!=dataE[0].uwcardrivers[scope.$index].sex? 'table-cell-bg' :''"
                  >{{scope.row.sex}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="age" label="年龄">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].age:''"
                    :class="scope.row.age!=dataE[0].uwcardrivers[scope.$index].age? 'table-cell-bg' :''"
                  >{{scope.row.age}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="causetroubleTimes" label="上年违章次数">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].causetroubleTimes:''"
                    :class="scope.row.causetroubleTimes!=dataE[0].uwcardrivers[scope.$index].causetroubleTimes? 'table-cell-bg' :''"
                  >{{scope.row.causetroubleTimes}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="drivingYears" label="驾龄">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].drivingYears:''"
                    :class="scope.row.drivingYears!=dataE[0].uwcardrivers[scope.$index].drivingYears? 'table-cell-bg' :''"
                  >{{scope.row.drivingYears}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="acceptLicenseDate" label="初次领证日期">
                <template slot-scope="scope">
                  <div
                    :title="dataE[0]&&dataE[0].uwcardrivers[scope.$index]?dataE[0].uwcardrivers[scope.$index].acceptLicenseDate:''"
                    :class="scope.row.acceptLicenseDate!=dataE[0].uwcardrivers[scope.$index].acceptLicenseDate? 'table-cell-bg' :''"
                  >{{scope.row.acceptLicenseDate}}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 特别约定 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="15">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">特别约定</div>
            </template>

            <el-table :data="underwritingDetails.uwengages" style="width: 100%">
              <el-table-column prop="serialNo" label="序号">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwengages[scope.$index]?dataE[0].uwengages[scope.$index].serialNo:''"
                    :class="scope.row.serialNo!=dataE[0].uwengages[scope.$index].serialNo? 'table-cell-bg' :''"
                  >{{scope.row.serialNo}}</div>
                  <div v-else>{{scope.row.serialNo}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="clauseCode" label="特约序号">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwengages[scope.$index]?dataE[0].uwengages[scope.$index].clauseCode:''"
                    :class="scope.row.clauseCode!=dataE[0].uwengages[scope.$index].clauseCode? 'table-cell-bg' :''"
                  >{{scope.row.clauseCode}}</div>
                  <div v-else>{{scope.row.clauseCode}}</div>
                </template>
              </el-table-column>
              <el-table-column prop="clauses" label="特约内容">
                <template slot-scope="scope">
                  <div
                    v-if="typeE=='E'"
                    :title="dataE[0]&&dataE[0].uwengages[scope.$index]?dataE[0].uwengages[scope.$index].clauses:''"
                    :class="scope.row.clauses!=dataE[0].uwengages[scope.$index].clauses? 'table-cell-bg' :''"
                  >{{scope.row.clauses}}</div>
                  <div v-else>{{scope.row.clauses}}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 赔付情况 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="16">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">赔付情况</div>
            </template>
            <el-row>
              <el-col :span="12">
                <el-form-item label="请选择查询条件:">
                  <el-radio v-model="condition" label="0">客户</el-radio>
                  <el-radio v-model="condition" label="1">车辆</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-button size="mini" @click="goToIdsQuery">赔付率查询</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 代收代缴车船税信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="17">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">代收代缴车船税信息</div>
            </template>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="号牌号码:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌种类:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆种类:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.carKindCode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="发动机号:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.engineNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN 码:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.vinNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车架号:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.frameNo"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="初登日期:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.enrollDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="座位数:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.seatCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整备质量（吨）:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.carloteququality"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="滞纳金:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.delaypaytax"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="纳税人代码:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayercode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="纳税人类型:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayernature"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="纳税人名称:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayername"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    纳税人
                    <br />身份证号:
                  </div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayeridentno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    纳税人
                    <br />识别号:
                  </div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayernumber"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="纳税类型:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxtype"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="纳税说明:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxexplanation"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="减免税原因:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxabatereason"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="减免税方案:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxabatetype"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    减免税
                    <br />比例/金额:
                  </div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxabateamount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    开具税务机关
                    <br />代码/名称:
                  </div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxcomcode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item>
                  <div slot="label">
                    <!-- 批单申请单号号 -->
                    <div slot="label" style="line-height:16px;">
                      完税凭证号/
                      <br />减免税证明号：
                    </div>
                  </div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.dutypaidproofno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="计税单位:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxUnit"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="年单位税额:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxUnitAmount"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    前次缴费
                    <br />年度:
                  </div>

                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepaytaxyear"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    前次保单
                    <br />止期:
                  </div>

                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepolicyenddate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    本次缴费
                    <br />起期:
                  </div>

                  <el-input v-model="underwritingDetails.payTravelTaxInfo.paystartdate"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="本次交税止期:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.payenddate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="今年应缴:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.thispaytax"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="总缴付税额:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.sumpaytax"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="往年补缴:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepaytax"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 一般信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="21">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">一般信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务来源:">
                  <el-input
                    :class="[dataE&&dataE[0].generalInformation&&dataE[1].generalInformation&&(dataE[1].generalInformation.businessNature!=dataE[0].generalInformation.businessNature)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].generalInformation?dataE[0].generalInformation.businessNature:''"
                    v-model="underwritingDetails.generalInformation.businessNature"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道:">
                  <el-input
                    :class="[dataE&&dataE[0].generalInformation&&dataE[1].generalInformation&&(dataE[1].generalInformation.agentName!=dataE[0].generalInformation.agentName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].generalInformation?dataE[0].generalInformation.agentName:''"
                    v-model="underwritingDetails.generalInformation.agentName"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input
                    :class="[dataE&&dataE[0].generalInformation&&dataE[1].generalInformation&&(dataE[1].generalInformation.comCName!=dataE[0].generalInformation.comCName)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].generalInformation?dataE[0].generalInformation.comCName:''"
                    v-model="underwritingDetails.generalInformation.comCName"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="操作员:">
                  <el-input v-model="underwritingDetails.otherInformation.operatorCodeCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="优惠给付方式:">
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_foure"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 其他信息ZZ -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="22">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">其他信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    保险合同争
                    <br />议解决方式:
                  </div>
                  <el-input
                    :class="[dataE&&dataE[0].otherInformation&&dataE[1].otherInformation&&(dataE[1].otherInformation.argueSolution!=dataE[0].otherInformation.argueSolution)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].otherInformation?dataE[0].otherInformation.argueSolution:''"
                    v-model="underwritingDetails.otherInformation.argueSolution"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="经办人:">
                  <el-input v-model="underwritingDetails.otherInformation.handlerCodeCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属经办人:">
                  <el-input v-model="underwritingDetails.otherInformation.handler1CodeCName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="验车情况:">
                  <el-input
                    :class="[dataE&&dataE[0].otherInformation&&dataE[1].otherInformation&&(dataE[1].otherInformation.carCheckStatus!=dataE[0].otherInformation.carCheckStatus)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].otherInformation?dataE[0].otherInformation.carCheckStatus:''"
                    v-model="underwritingDetails.otherInformation.carCheckStatus"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车时间:">
                  <el-date-picker
                    :class="[dataE&&dataE[0].otherInformation&&dataE[1].otherInformation&&(dataE[1].otherInformation.carCheckTime!=dataE[0].otherInformation.carCheckTime)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].otherInformation?dataE[0].otherInformation.carCheckTime:''"
                    v-model="underwritingDetails.otherInformation.carCheckTime"
                    type="date"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车人:">
                  <el-input
                    :class="[dataE&&dataE[0].otherInformation&&dataE[1].otherInformation&&(dataE[1].otherInformation.carChecker!=dataE[0].otherInformation.carChecker)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].otherInformation?dataE[0].otherInformation.carChecker:''"
                    v-model="underwritingDetails.otherInformation.carChecker"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input v-model="underwritingDetails.otherInformation.comCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="操作员:">
                  <el-input v-model="underwritingDetails.otherInformation.operatorCodeCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="初审人:">
                  <el-input v-model="underwritingDetails.otherInformation.approverName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="批改次数:">
                  <el-input v-model="underwritingDetails.otherInformation.endorseTimes"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="立案次数:">
                  <el-input v-model="underwritingDetails.otherInformation.claimTimes"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="共保标志:">
                  <el-input v-model="underwritingDetails.otherInformation.coinsFlag"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    上年度是否
                    <br />在本公司承保:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_two"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="优惠给付方式:">
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_foure"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    驾驶行为
                    <br />全国评分:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.nationalDriScore"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="驾驶行为本省评分:">
                  <el-input v-model="underwritingDetails.otherInformation.provinceDriScore"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    是否有同车
                    <br />保期重复:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.isProposalRepetition"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级:">
                  <el-input v-model="underwritingDetails.otherInformation.gradeName"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24" v-if="this.$route.query.type=='H'">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    同车情况下的
                    <br />投保单号列表:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.repetitionProposalNos"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" v-if="this.$route.query.type=='E'">
                <el-form-item label="签单日期:">
                  <el-input
                    :class="[dataE&&dataE[0].otherInformation&&dataE[1].otherInformation&&(dataE[1].otherInformation.operateDate!=dataE[0].otherInformation.operateDate)?'valueStyle':'']"
                    :title="dataE[0]&&dataE[0].otherInformation?dataE[0].otherInformation.operateDate:''"
                    v-model="underwritingDetails.otherInformation.operateDate"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
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
      <div>
        <el-form label-width="150px" :rules="rules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="当前任务环节:" style="margin-bottom:0"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="提交路径选择:" style="margin-bottom:0"></el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="省公司一级核保:" style="margin-bottom:2px"></el-form-item>
              <!-- <span>省公司一级核保:</span>  -->
            </el-col>
            <el-col :span="12">
              <el-select v-model="aprove.nodeCode" placeholder="请选择" style="margin-bottom:2px">
                <el-option
                  v-for="item in subOptions"
                  :key="item.key"
                  :label="item.value"
                  :value="item.key"
                ></el-option>
              </el-select>
            </el-col>

            <el-col :span="12">
              <el-form-item label="审批片语:"></el-form-item>
              <!-- <span>  审批片语:</span> -->
            </el-col>
            <el-col :span="12">
              <el-select v-model="aprove.inspSpeak" placeholder="请选择">
                <el-option
                  v-for="item in uwNotionCarCheckStatus"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                disabled
                placeholder="请输入"
                :autosize="{ minRows: 2, maxRows: 4}"
                v-model="aprove.handleText"
              ></el-input>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="核保员意见:"
                v-model="aprove.remark"
              ></el-input>
            </el-col>
            <el-button
              type="primary"
              size="mini"
              class="float-right mt10"
              @click="submitReview"
            >提交任务</el-button>
          </el-row>
        </el-form>
      </div>
    </el-dialog>

    <el-dialog
      class="el-dialog__body__update"
      width="30%"
      title="核保任务提交"
      :visible.sync="innerVisible"
    >
      <el-row>{{messageSH}}</el-row>
      <el-button @click="goback()" size="mini" type="primary" class="mt10">关闭当前窗口</el-button>
    </el-dialog>

    <el-dialog class="el-dialog__body__update" width="45%" title :visible.sync="relationDialog">
      <el-form label-width="120px">
        <el-row>
          <el-col :span="16">
            <el-form-item label="投保单:">
              <el-input v-model="underwritingDetails.summaryInfo.proposalNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="text" style="color:#409eff" @click="goTolinks('traditional')">传统渠道</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" style="color:#409eff" @click="goTolinks('electricPin')">电销渠道</el-button>
          </el-col>
          <el-col :span="16">
            <el-form-item label="保单:">
              <el-input v-model="underwritingDetails.summaryInfo.policyNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="text" style="color:#409eff" @click="goTolinks('traditional')">传统渠道</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" style="color:#409eff" @click="goTolinks('electricPin')">电销渠道</el-button>
          </el-col>
          <el-col :span="16">
            <el-form-item label="批单:">
              <div class="link-input">
                <span @click="goTolinks('endor')">123</span>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button @click="relationDialog = false" size="mini" type="primary" class="mt10">关闭当前窗口</el-button>
    </el-dialog>

    <!-- // 保费折扣率 弹框 列表 -->
    <el-dialog
      class="el-dialog__body__update"
      width="60%"
      title="显示优惠信息"
      :visible.sync="adjustRateDialog"
    >
      <el-table
        :data="underwritingDetails.uwprofitdetails"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="优惠代码" prop="profitCode" width="120"></el-table-column>
        <el-table-column prop="profitName" label="优惠原因"></el-table-column>
        <el-table-column prop="profitRate" label="优惠率" width="120"></el-table-column>
        <el-table-column prop="condition" label="优惠条件"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from "timers";
import utils from "../../utils";

export default {
  name: "UnderwritingDetails",
  data() {
    return {
      typeE: "",
      dataE: "", //批单的数据
      curNode: "201",
      nudeName: "市公司一级",
      messageSH: "",
      subOptions: [],
      routeDate: "",
      activeNames: [],
      underwritingDetails: {
        taskProcessing: {}, //处理核保任务
        summaryInfo: {}, //概要信息
        underwriteOpinion: [], // 历次审核意见
        uwpTexts: {}, // 显示批文
        uwinsuredT: {}, // 投保人信息
        uwinsuredI: {}, // 被保险人信息
        uwinsuredC: {}, // 车主信息
        uwitemCar: {}, // 投保车辆信息
        uwcarmodel: {}, // 车型信息变动情况
        insurancePeriod: {}, // 保险期限
        uwitemkindZ: [], // 主险
        uwitemkindF: [], // 附加险
        payTravelTaxInfo: {}, //代收代缴车船税信息
        uwqfixationDetails: [], // 定报价指标信息
        uwcardrivers: [], // 约定驾驶人信息
        uwengages: [], // 特别约定
        generalInformation: {}, // 一般信息
        otherInformation: {}, // 其他信息
        uwitemkindCount: {}, // 险别总计
        uwNotion: {}, // 审批信息
        displayFlag: {
          browseFlag: "0", // 详细信息
          flowRecordFlag: "0", //	流转记录
          ClaimFlag: "0", //	出险信息
          lastPolicyClaimFlag: "0", //	上年保单理赔信息
          coverFacEnquiryFlag: "0", //	预约协议临分意向
          headOfficeInfoFlag: "0", //	查看总公司资料
          branchOfficeInfoFlag: "0", //	查看分公司资料
          relationImageFlag: "0", //	查看关联单影像
          infoFlag: "0", //	资料查看
          uploadImageFlag: "0", //	上传影像
          mobileImageFlag: "0", //	手机影像
          deviceInfoFlag: "0", //	设备信息
          shipInfoFlag: "0", //	船舶信息
          lastPolicyInfoFlag: "0", //	查看上年保单信息
          revokeFlag: "0", //	撤回
          riskTypeRateFlag: "0", //	查看风险类别占比
          reportFormsFlag: "0", //	车队业务质量统计查询
          possessTaskFlag: "0", // 任务审核
          approvalInfoFlag: "0" //	审批信息
        },
        uwprofitdetails: [] // 主险 -- 优惠率弹框
      },
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
      tableList: [{}],
      value: "",
      relationDialog: false,
      aprove: {},
      rules: {},
      radio: 1,
      tableData: [], // 保费折扣率 弹框 列表
      outerVisible: false,
      innerVisible: false,
      adjustRateDialog: false, // 保费折扣率 弹框】
      textarea1: "",
      condition: "0",
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
    // 返回上一级
    goback() {
      this.innerVisible = false;
      this.$router.go(-1);
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
        businessType: this.routeDate.type || "T",
        batchNo: this.routeDate.type || 12312312
      };
      this.$fetch
        .post(this.HOST + this.$url.undwrtrevokeUndwrt, keyWords)
        .then(data => {
          console.log(data);
          this.$message.success(data);
        });
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
        setTimeout(() => {
          this.goback();
        }, 1500);
      });
    },
    // 提交审核
    submit() {
      let key = {
        businessType: this.$route.query.type,
        businessNo: this.$route.query.businessNo,
        nodeName: this.nodeName,
        editType: "submit",
        curNode: this.curNode
      };
      this.$fetch
        .post(this.HOST + this.$url.undwrtSubmitReview, key)
        .then(data => {
          console.log(data);
          this.subOptions = data.mapList;
          console.log(this.subOptions);
          this.aprove.handleText = data.uwnotion.handleText;
          this.outerVisible = true;
        });
    },
    // 提交审核
    submitReview() {
      let keyWords = {
        businessType: this.$route.query.type,
        businessNo: this.$route.query.businessNo,
        nodeCode: this.aprove.nodeCode,
        prepusercode: utils.getSessionData("userCode"), // 当前登录人code
        uwnotion: {
          handleText:
            this.aprove.handleText +
            this.aprove.inspSpeak +
            ";" +
            this.aprove.remark
        }
      };
      let url = "";
      switch (this.aprove.nodeCode) {
        case "000": // 通过
          url = this.HOST + this.$url.undwrtendTask;
          break;
        case "999": // 驳回
          url = this.HOST + this.$url.undwrtworkReject;
          break;
        default:
          // 其他
          url = this.HOST + this.$url.undwrtSubmitToExamine;
          break;
      }
      this.$fetch.post(url, keyWords).then(data => {
        console.log(data);
        this.outerVisible = false;
        this.innerVisible = true;
        this.messageSH = data;
      });
    },
    //初始化
    init() {
      let keyWords = {
        request: "INFO", // 固定穿参
        businessNo: this.routeDate.businessNo, // 业务单号
        taskType: this.routeDate.type, // 任务类别
        taskId: this.routeDate.businessNo, //  任务Id
        businessType: this.routeDate.type, // businessType
        comCode: this.routeDate.businessNo, // 公司代码
        userCode: utils.getSessionData("userCode") || "A450000001", // 员工号
        username: utils.getSessionData("userName") || "张三"
      };
      this.$fetch
        .post(this.HOST + this.$url.uwmainGetUwInfo, keyWords)
        .then(data => {
          console.log(data);
          if (this.routeDate.type == "E") {
            if (data) {
              this.dataE = data;

              this.curNode = data[1].hiddenvo.curNode;
              this.nodeName = data[1].hiddenvo.nodeName;
              this.underwritingDetails = data[1];
              this.underwritingDetails.uwNotion = data[1].uwnotions;
            }
            this.underwritingDetails.displayFlag = {};
          } else {
            this.curNode = data.hiddenvo.curNode;
            this.nodeName = data.hiddenvo.nodeName;
            this.underwritingDetails = data;
            this.underwritingDetails.uwNotion = data.uwnotions[1];
            this.underwritingDetails.displayFlag = {};
          }
        });
    },
    // 设备信息
    goToDeviceInfo() {},
    // 获取跳转链接并打开新窗口
    goTolinks(type) {
      let key = {};
      switch (type) {
        case "teamquality":
          key = {
            reportFormsType: "teamquality",
            comcode: "12322312",
            businessNo: this.routeDate.businessNo || "123", // 业务号
            taskType: this.routeDate.type || "T" // 业务类型
          };
          this.$fetch
            .get(this.HOST + this.$url.uwmainTeamquality, { params: key })
            .then(data => {
              console.log(data);
              // window.open("http://www.baidu.com")
              window.open(data);
            });
          break;
        case "details":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            taskType: "sdsd",
            taskId: "123",
            comCode: "13000000"
          };

          this.$fetch
            .post(this.HOST + this.$url.telSaleInfo, key)
            .then(data => {
              console.log(data);
              // window.open("http://www.baidu.com")
              window.open(data);
            });
          break;
        // 影像上传
        case "uploadECM":
          key = {
            businessNo: this.routeDate.businessNo || "TDAA201923060000081619",
            businessType: this.routeDate.type || "T",
            taskId: "1",
            userName: "江苏用户",
            userCode: "A320000003",
            comCode: "33000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.uwmainUploadECM, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 影像查看
        case "getECM":
          key = {
            businessNo: this.routeDate.businessNo || "TDAA201923060000081619",
            businessType: this.routeDate.type || "T",
            taskId: "sdsd",
            userName: "123",
            userCode: "123",
            comCode: "33000000",
            SaleImgFlag: "123"
          };

          this.$fetch
            .post(this.HOST + this.$url.uwmainGetECM, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 手机影像
        case "mobileECM":
          key = {
            method: "123",
            user_id: "123",
            plate_no: "13000000",
            caller_id: "123"
          };

          this.$fetch
            .post(this.HOST + this.$url.uwmainMobileECM, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 关联单影像
        case "startECM":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "T",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };

          this.$fetch
            .post(this.HOST + this.$url.uwmainStartECM, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 查看分公司资料
        case "branchCompany":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "T",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.autoDistributeBranchCompanyInfo, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 总公司
        case "headCompany":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.autoDistributeHeadCompanyInfo, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 批单
        case "endor":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.autoDistributeEndorsementInfo, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 电销渠道
        case "electricPin":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.autoDistributeElectricPinChannels, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        // 传统渠道
        case "traditional":
          key = {
            businessNo: this.routeDate.businessNo || "454654564564",
            businessType: this.routeDate.type || "sfsdfsdf",
            userName: "123",
            userCode: "123",
            comCode: "13000000"
          };
          this.$fetch
            .post(this.HOST + this.$url.autoDistributeTraditionalChannels, key)
            .then(data => {
              console.log(data);
              window.open(data);
            });
          break;
        case "lastYearPolicyInfo":
          key = {
            lastPolicyNo: "123",
            riskCode: "122"
          };
          this.$fetch
            .get(this.HOST + this.$url.uwmainGetLastYearPolicyInfo, {
              params: key
            })
            .then(data => {
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
    // 跳转设备信息
    goToCarDeviceInfo() {
      let routeUrl = this.$router.resolve({
        path: "/deviceView",
        query: {
          businessNo: this.routeDate.businessNo || "123",
          type: this.routeDate.type || "H"
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    // 跳转 风险类占比
    goToUnderwriteRiskTypeRate() {
      let routeUrl = this.$router.resolve({
        path: "/underwriteRiskTypeRate",
        query: {
          businessNo: "123",
          type: "H"
        }
      });
      window.open(routeUrl.href, "_blank");
    },

    // 打开保费折扣率弹框
    openAdjustRateDialog(row) {
      this.adjustRateDialog = true;
    },
    // 赔付率查询
    goToIdsQuery() {
      let routeUrl = this.$router.resolve({
        path: "/uwIDSVehicleViewQuery",
        query: {
          condition: this.condition
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    handleSelectionChange() {}
  },

  created() {
    //设置collapse全部展开
    this.routeDate = this.$route.query;
    this.typeE = this.$route.query.type;
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
.link-input {
  height: 32px;
  line-height: 32px;
  border-radius: 6px;
  border: solid 1px rgb(220, 223, 230);
  color: #409eff;
  padding-left: 15px;
  text-align: left;
  cursor: pointer;
}
.titlestyle >>> .card-title {
  font-size: 12px;
}
.titlestyle >>> .title-blue-bar {
  height: 16px;
}
.titlestyle >>> .el-collapse-item__header {
  height: 25px;
  line-height: 25px;
}
.el-collapse-item__wrap >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
.valueStyle >>> .el-input__inner {
  background-color: #ccff33;
}
.table-cell-bg {
  background: #ccff33;
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
}
.button-uwprofit {
  padding: 0px 2px;
  font-size: 20px;
  height: 20px;
  padding: 2px 3px 0 3px;
  line-height: 20px;
}
</style>
