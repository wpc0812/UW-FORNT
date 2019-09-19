<template>
  <div class="titlestyle">
    <!-- 任务审核 -->
    <div style="margin: 5px 0;padding-left: 5px">
      <el-row class="text-left">
        <el-button size="mini" type="primary" @click="goTolinks()">核保辅助业务类别信息</el-button>
        <el-button size="mini" type="primary" @click="goToFlowLog()">查看上年保单信息</el-button>
      </el-row>
    </div>
    <el-form :model="underwritingDetails" class="updatastyleinput" label-width="120px">
      <!-- 摘要信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">摘要信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="批单号:">
                  <el-input v-model="underwritingDetails.taskProcessing.handleComCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="险种:">
                  <el-input v-model="underwritingDetails.taskProcessing.handleTime"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被保险人:">
                  <el-input v-model="underwritingDetails.taskProcessing.businessType_CN"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="保单批改次数:">
                  <el-input v-model="underwritingDetails.taskProcessing.xubao"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="赔款计算书号:">
                  <el-input v-model="underwritingDetails.taskProcessing.isNewCar"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="变化保险金额:">
                  <el-input v-model="underwritingDetails.taskProcessing.isShort"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="批改日期:">
                  <el-input v-model="underwritingDetails.taskProcessing.xubao"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="生效日期:">
                  <el-input v-model="underwritingDetails.taskProcessing.isNewCar"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="变化保险费:">
                  <el-input v-model="underwritingDetails.taskProcessing.isShort"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item>
                  <div slot="label">归属机构名称:</div>
                  <el-input v-model="underwritingDetails.taskProcessing.isNetProp"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 显示批文 -->
      <el-card class="circular mt4 shadow">
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
      <!-- 概要信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="3">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">概要信息</div>
            </template>
            <el-row :gutter="20">
              <el-col :span="8" v-if="bussinessType ==='E' ">
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
                  <el-input v-model="underwritingDetails.summaryInfo.policyNo">
                    <el-button
                      v-if="bussinessType ==='E' "
                      size="mini"
                      slot="append"
                      type="primary"
                      @click="relationDialog = true"
                    >关联</el-button>
                  </el-input>
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

              <el-col :span="8" v-if="bussinessType === 'E' ">
                <el-form-item label="退保原因:">
                  <el-input v-model="underwritingDetails.summaryInfo.cancelReason"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" v-if="bussinessType === 'E' ">
                <el-form-item label="投保单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.cancelReason"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" v-if="bussinessType === 'E' ">
                <el-form-item label="批改类型:">
                  <el-input v-model="underwritingDetails.summaryInfo.endorType"></el-input>
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
              <el-col :span="8" v-if="bussinessType ==='E' ">
                <el-form-item label="生效日期:">
                  <el-input v-model="underwritingDetails.summaryInfo.validDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" v-if="bussinessType ==='E' ">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.summaryInfo.validhour"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="承包意见">
                  <el-input v-model="underwritingDetails.summaryInfo.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
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
              <el-col :span="8">
                <el-form-item label="投保人名称:">
                  <el-input v-model="underwritingDetails.uwinsuredT.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人住所:">
                  <el-input v-model="underwritingDetails.uwinsuredT.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人别名:">
                  <el-input v-model="underwritingDetails.uwinsuredT.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保人单位性质:">
                  <el-input v-model="underwritingDetails.uwinsuredT.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人性质:">
                  <el-input v-model="underwritingDetails.uwinsuredT.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input v-model="underwritingDetails.uwinsuredT.identifyNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.uwinsuredT.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.uwinsuredT.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.uwinsuredT.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.uwinsuredT.postCode"></el-input>
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
                  <el-input v-model="underwritingDetails.uwinsuredI.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人住所:">
                  <el-input v-model="underwritingDetails.uwinsuredI.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人别名:">
                  <el-input v-model="underwritingDetails.uwinsuredI.aliasName"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="被投保人单位性质:">
                  <el-input v-model="underwritingDetails.uwinsuredI.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人性质:">
                  <el-input v-model="underwritingDetails.uwinsuredI.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被保险人证件类型:">
                  <el-input v-model="underwritingDetails.uwinsuredI.identifyType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.uwinsuredI.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.uwinsuredI.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input v-model="underwritingDetails.uwinsuredI.identifyNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.uwinsuredI.postCode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.uwinsuredI.mobile"></el-input>
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
                  <el-input v-model="underwritingDetails.uwinsuredC.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主住所:">
                  <el-input v-model="underwritingDetails.uwinsuredC.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主别名:">
                  <el-input v-model="underwritingDetails.uwinsuredC.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车主单位性质:">
                  <el-input v-model="underwritingDetails.uwinsuredC.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主性质:">
                  <el-input v-model="underwritingDetails.uwinsuredC.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    法人代码/
                    <br />身份证号码:
                  </div>
                  <el-input v-model="underwritingDetails.uwinsuredC.identifyNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.uwinsuredC.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.uwinsuredC.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.uwinsuredC.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.uwinsuredC.postCode"></el-input>
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
                <el-form-item label="投保单号:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被保险人:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="固定停放地点:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="条款类型:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="折 扣:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属机构名称:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="无赔款优待:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="出单机构:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- --------------------------------------------- -->
            <el-row>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    被保险人
                    <br />与车辆的关系:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="港澳车标志:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="号牌号码:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌种类:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌底色:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆种类:">
                  <el-input v-model="underwritingDetails.uwitemCar.carKindCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型代码:">
                  <el-input v-model="underwritingDetails.uwitemCar.seatCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型名称:">
                  <el-input v-model="underwritingDetails.uwitemCar.exhaustScale"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="发动机号:">
                  <el-input v-model="underwritingDetails.uwitemCar.tonCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车 架 号:">
                  <el-input v-model="underwritingDetails.uwitemCar.carloteququality"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN 码:">
                  <el-input v-model="underwritingDetails.uwitemCar.enrollDate"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="载 客 量:">
                  <el-input v-model="underwritingDetails.uwitemCar.useYears"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="载 重 量(吨):">
                  <el-input v-model="underwritingDetails.uwitemCar.useNatureCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整备质量(吨):">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseTypeCname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车型系数:">
                  <el-input v-model="underwritingDetails.uwitemCar.useYears"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="排量/功率(升):">
                  <el-input v-model="underwritingDetails.uwitemCar.useNatureCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车身颜色:">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseTypeCname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="初登日期:">
                  <el-input v-model="underwritingDetails.uwitemCar.useYears"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用年限:">
                  <el-input v-model="underwritingDetails.uwitemCar.useNatureCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="平均里程:">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseTypeCname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="新车购置价格:">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用性质:">
                  <el-input v-model="underwritingDetails.uwitemCar.purchasePrice"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    交强险费率
                    <br />浮动标志:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemCar.sumPremium"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input v-model="underwritingDetails.uwitemCar.engineNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="行驶区域:">
                  <el-input v-model="underwritingDetails.uwitemCar.vinNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="上年违法次数:">
                  <el-input v-model="underwritingDetails.uwitemCar.carDevice"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="项目代码:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    是否为未还清
                    <br />贷款车辆:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemCar.familyName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车辆安全配置:">
                  <el-input v-model="underwritingDetails.uwitemCar.frameNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="固定停车位:">
                  <el-input v-model="underwritingDetails.uwitemCar.isCriterion"></el-input>
                </el-form-item>
              </el-col>
              <!-- ----------------------------------------------- -->
              <el-col :span="8">
                <el-form-item label="总保险费:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属机构代码:">
                  <el-input v-model="underwritingDetails.uwitemCar.licenseType"></el-input>
                </el-form-item>
              </el-col>
              <!-- ------------------------------------------------------- -->
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="条款类别:">
                  <el-input v-model="underwritingDetails.uwitemCar.cylinderCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    重载货车
                    <br />智能设备:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemCar.intelligentDevice"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装日期:">
                  <el-input v-model="underwritingDetails.uwitemCar.installDate"></el-input>
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
              <el-col :span="8">
                <el-form-item label="备注:">
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
              <el-table-column align="center" prop="vehicleseat" label="载客数"></el-table-column>
              <el-table-column align="center" prop="vehicletonnage" label="载重量"></el-table-column>
              <el-table-column align="center" prop="vehicleexhaust" label=" 排气量(升)"></el-table-column>
              <el-table-column align="center" prop="strIsAlarm" label="防盗" show-overflow-tooltip></el-table-column>
              <el-table-column align="center" prop="strIsABS" label="ABS" show-overflow-tooltip></el-table-column>
              <el-table-column align="center" prop="strIsAirBag" label="安全气囊"></el-table-column>
              <el-table-column align="center" label="车损系数" prop="quotietydam"></el-table-column>
              <el-table-column align="center" prop="quotietyloss" label="盗抢系数"></el-table-column>
              <el-table-column align="center" prop="vehicleprice" label="车辆价格"></el-table-column>
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
                  <el-input v-model="underwritingDetails.insurancePeriod.startDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.insurancePeriod.startHour"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="至:">
                  <el-input v-model="underwritingDetails.insurancePeriod.endDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.insurancePeriod.endHour"></el-input>
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
                <el-table-column align="center" prop="kindCode" label="险别名称"></el-table-column>
                <el-table-column align="center" prop="flag" label="不计免赔率"></el-table-column>
                <el-table-column align="center" prop="amount" label="保险金额/责任限额"></el-table-column>
                <el-table-column align="center" prop="rate" label="费率(%)"></el-table-column>
                <el-table-column align="center" prop="benchMarkPremium" label="标准保费(元)"></el-table-column>
                <el-table-column align="center" prop="deductible" label="免赔额(元)"></el-table-column>
                <el-table-column align="center" label="可选免赔系数%" prop="deductibleRate"></el-table-column>

                <el-table-column align="center" prop="discount" label="保费折扣%">
                  <template slot-scope="scope">
                    <span>
                      {{scope.row.discount}}
                      <el-button class="button-uwprofit" @click="openAdjustRateDialog(scope.row)">*</el-button>
                    </span>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="premium" label="续保调整比例%"></el-table-column>
                <el-table-column align="center" prop="adjustRate" label="应交保费(元)"></el-table-column>
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
              <el-table-column align="center" prop="kindName" label="险别名称"></el-table-column>
              <el-table-column align="center" prop="flag" label="不计免赔率"></el-table-column>
              <el-table-column align="center" prop="amount" label="保险金额/责任限额"></el-table-column>
              <el-table-column align="center" prop="rate" label="费率(%)"></el-table-column>
              <el-table-column align="center" prop="benchMarkPremium" label="标准保费(元)"></el-table-column>
              <el-table-column align="center" prop="deductible" label="免赔额(元)"></el-table-column>
              <el-table-column align="center" label="可选免赔系数%" prop="deductibleRate"></el-table-column>
              <el-table-column align="center" prop="discount" label="保费折扣%"></el-table-column>
              <el-table-column align="center" prop="adjustRate" label="续保调整比例%"></el-table-column>
              <el-table-column align="center" prop="premium" label="应交保费(元)"></el-table-column>
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
      <!-- 新增设备 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="13">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">新增设备</div>
            </template>
            <el-table
              :data="underwritingDetails.uwitemkindF"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" label="标的序号" prop="kindCode"></el-table-column>
              <el-table-column align="center" prop="kindName" label="顺序号"></el-table-column>
              <el-table-column align="center" prop="flag" label="设备名称"></el-table-column>
              <el-table-column align="center" prop="amount" label="数量"></el-table-column>
              <el-table-column align="center" prop="rate" label="新件购置价"></el-table-column>
              <el-table-column align="center" prop="benchMarkPremium" label="实际价值"></el-table-column>
            </el-table>
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
              <el-table-column prop="drivingLicenseNo" label="驾驶证号"></el-table-column>
              <el-table-column prop="sex" label="性别"></el-table-column>
              <el-table-column prop="age" label="年龄"></el-table-column>
              <el-table-column prop="causetroubleTimes" label="上年违章次数"></el-table-column>
              <el-table-column prop="drivingYears" label="驾龄"></el-table-column>
              <el-table-column prop="acceptLicenseDate" label="初次领证日期"></el-table-column>
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
              <el-table-column prop="serialNo" label="序号"></el-table-column>
              <el-table-column prop="clauseCode" label="特约序号"></el-table-column>
              <el-table-column prop="clauses" label="特约内容"></el-table-column>
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
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    上年商业险发生
                    <br />赔款次数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.discountPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    上年交强险发生
                    <br />赔款次数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.adjustPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    商业险连续
                    <br />未出险年数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.premiumCount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label=":">
                  <div slot="label" style="line-height: 16px">
                    今年商业险发生
                    <br />赔款次数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.discountPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    今年交强险发生
                    <br />赔款次数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.adjustPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    交强险连续
                    <br />未出险年数:
                  </div>
                  <el-input v-model="underwritingDetails.uwitemkindCount.premiumCount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 上期赔付率 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="15">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">上期赔付率</div>
            </template>

            <el-table :data="underwritingDetails.uwengages" style="width: 100%">
              <el-table-column prop="serialNo" label="保费"></el-table-column>
              <el-table-column prop="clauseCode" label="已赚保费"></el-table-column>
              <el-table-column prop="clauses" label="已决赔款"></el-table-column>
              <el-table-column prop="serialNo" label="未决赔款"></el-table-column>
              <el-table-column prop="clauseCode" label="赔付率%"></el-table-column>
              <el-table-column prop="clauses" label="赔付率%(已赚)"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 交费计划信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="15">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">交费计划信息</div>
            </template>

            <el-table :data="underwritingDetails.uwengages" style="width: 100%">
              <el-table-column prop="serialNo" label="期次"></el-table-column>
              <el-table-column prop="clauseCode" label="原因"></el-table-column>
              <el-table-column prop="clauses" label="截止日期"></el-table-column>
              <el-table-column prop="serialNo" label="币别"></el-table-column>
              <el-table-column prop="clauseCode" label="应缴金额"></el-table-column>
              <el-table-column prop="clauses" label="未缴金额"></el-table-column>
            </el-table>
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
      <!-- 交叉销售人信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="15">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">交叉销售人信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="交叉销售员代码:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.thispaytax"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="交叉销售员名称:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.sumpaytax"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="交叉销售员工号:">
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepaytax"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 共保信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="15">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">共保信息</div>
            </template>

            <el-table :data="underwritingDetails.uwengages" style="width: 100%">
              <el-table-column prop="serialNo" label="序号"></el-table-column>
              <el-table-column prop="clauseCode" label="主保单号码"></el-table-column>
              <el-table-column prop="clauses" label="共保身份"></el-table-column>
              <el-table-column prop="serialNo" label="共保人机构代码"></el-table-column>
              <el-table-column prop="clauseCode" label="共保人名称"></el-table-column>
              <el-table-column prop="clauses" label="共保份额(%)"></el-table-column>
              <el-table-column prop="serialNo" label="币别"></el-table-column>
              <el-table-column prop="clauseCode" label="分额保额"></el-table-column>
              <el-table-column prop="clauses" label="分额保费"></el-table-column>
            </el-table>
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
                <el-form-item>
                  <div slot="label" style="line-height: 16px">
                    是否有上两年度完
                    <br />整维护保养记录:
                  </div>
                  <el-input v-model="underwritingDetails.generalInformation.businessNature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                    <div slot="label" style="line-height: 16px">
                    是否指定汽车
                    <br />专修点:
                  </div>
                  <el-input v-model="underwritingDetails.generalInformation.agentName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="保单信息是否详尽:">
                  <el-input v-model="underwritingDetails.generalInformation.comCName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="短期费率%:">
                  <el-input v-model="underwritingDetails.generalInformation.businessNature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="短期费率方式:">
                  <el-input v-model="underwritingDetails.generalInformation.agentName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="币　　别:">
                  <el-input v-model="underwritingDetails.generalInformation.comCName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务来源:">
                  <el-input v-model="underwritingDetails.generalInformation.businessNature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道代码:">
                  <el-input v-model="underwritingDetails.generalInformation.agentName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道:">
                  <el-input v-model="underwritingDetails.generalInformation.comCName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_foure"></el-input>
                </el-form-item>
              </el-col>
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
                    保险合同争议解
                    <br />决方式选择:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.argueSolution"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <div slot="label" style="line-height:16px;">
                    保险合同争
                    <br />议解决方式:
                  </div>
                  <el-input v-model="underwritingDetails.otherInformation.argueSolution"></el-input>
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
                  <el-input v-model="underwritingDetails.otherInformation.carCheckStatus"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车时间:">
                  <el-date-picker
                    v-model="underwritingDetails.otherInformation.carCheckTime"
                    type="date"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车人:">
                  <el-input v-model="underwritingDetails.otherInformation.carChecker"></el-input>
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
              <el-col :span="8">
                <el-form-item label="签单日期:">
                  <el-input v-model="underwritingDetails.otherInformation.handlerCodeCName"></el-input>
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
                <el-form-item label="客户等级:">
                  <el-input v-model="underwritingDetails.otherInformation.gradeName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <el-card>
        <el-row>
          <el-col>
            <el-button type="primary" size="mini">取消</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
    <!-- 弹出框 -->
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

export default {
  name: "UnderwritingDetails",
  data() {
    return {
      subOptions: [],
      bussinessType: "",
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
      form: {},
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
        businessType: this.routeDate.type || "ST",
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

    init() {
      let keyWords = {
        request: "INFO", // 固定穿参
        businessNo: this.routeDate.businessNo, // 业务单号
        taskType: this.routeDate.type, // 任务类别
        taskId: this.routeDate.businessNo, //  任务Id
        businessType: this.routeDate.type, // businessType
        comCode: this.routeDate.businessNo, // 公司代码
        userCode: this.routeDate.businessNo, // 员工号
        username: "wpc"
      };
      this.$fetch
        .post(this.HOST + this.$url.uwmainGetUwInfo, keyWords)
        .then(data => {
          console.log(data);
          this.underwritingDetails = data;
          this.underwritingDetails.uwNotion = data.uwnotions[0];
          //  this.underwritingDetails.displayFlag ={}
        });
    },
    // 设备信息
    goToDeviceInfo() {},
    // 获取跳转链接并打开新窗口
    goTolinks(type) {
      let key = {};
      switch (type) {
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
.titlestyle /deep/ .card-title {
  font-size: 12px;
}
.titlestyle /deep/.title-blue-bar {
  height: 16px;
}
.titlestyle /deep/ .el-collapse-item__header {
  height: 25px;
  line-height: 25px;
}
.pt11 {
  padding-top: 0px;
}
.el-collapse-item__wrap /deep/ .el-collapse-item__content {
  padding-bottom: 0px;
}
.el-collapse-item__wrap >>> .el-form-item {
  margin-bottom: 20px;
}
.border-btm-gra {
  border-bottom: solid 1px rgba(70, 90, 100, 0.6);
}
.updatastyleinput >>> .el-form-item {
  margin-bottom: 0;
}
.updatastyleinput >>> .el-form-item__label {
  background: #e8f6f9;
}
.button-uwprofit {
  padding: 0px 2px;
  font-size: 20px;
  height: 20px;
  padding: 2px 3px 0 3px;
  line-height: 20px;
}
</style>
<style>
</style>
