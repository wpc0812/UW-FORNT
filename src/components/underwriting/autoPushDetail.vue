<template>
  <div class="titlestyle" style="margin-top:30px">
    <!-- 任务审核 -->
    <div style="margin: 5px 0">
      <el-row class="text-center buttons" >
            <el-button size='mini'>详细信息</el-button>
            <el-button size='mini' @click='goToFlowLog()' >流转记录</el-button>
            <el-button size='mini'>查看总公司资料</el-button>
            <el-button size='mini'>查看分公司资料</el-button>

            <el-button size='mini'>上传影像</el-button>
            <el-button size='mini'>设备信息</el-button>

            <!-- <el-button size='mini'>手机影像</el-button> -->
            <el-button size='mini'>查看风险类别占比</el-button>
            <el-button size='mini' @click="goTolinks('teamquality')">车队业务质量统计查询</el-button>
      </el-row>
    </div>
    
    <el-card class="circular">
       
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title" >
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
         
          <el-row class="pt11">
            <!-- <el-col :span="24" class="el-card__header text-left">任务审核</el-col> -->
            <el-col :span="24" class="pt11">
              <el-button type="primary" @click="outerVisible = true" size="mini">提交审核</el-button>
              <el-button size="mini">放弃</el-button>


            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form  :model="underwritingDetails" label-width="120px">
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
                <el-form-item label="电子投保/纸质投保:">
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
            <el-row :gutter="20">
              <el-col :span="8" v-if="parameter.type === 'ENDOR' ">
                <el-form-item label="批单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.endorseno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保单号:" >
                  <el-input v-model="underwritingDetails.summaryInfo.proposalNo"></el-input>
                </el-form-item>
              </el-col>
              
             
              <el-col :span="8">
                <el-form-item label="保单号:">
                  <el-input v-model="underwritingDetails.summaryInfo.policyNo">
                     <el-button size="mini" slot="append" type="primary" > 关联</el-button>
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
            
               <el-col :span="8" v-if="parameter.type === 'ENDOR' ">
                <el-form-item label="退保原因:" >
                  <el-input v-model="underwritingDetails.summaryInfo.cancelReason"></el-input>
                </el-form-item>
              </el-col>
               <el-col :span="8" v-if="parameter.type === 'POLICY' ">
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
                  <el-form-item label="时:" >
                    <el-input v-model="underwritingDetails.summaryInfo.endHour"></el-input>
                  </el-form-item>
              </el-col>
             <el-col :span="8">
                <el-form-item label="生效日期:">
                  <el-input v-model="underwritingDetails.summaryInfo.validDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="时:">
                  <el-input v-model="underwritingDetails.summaryInfo.validhour"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="承保意见:" v-if=" parameter.type === 'POLICY' ">
                  <el-input v-model="underwritingDetails.summaryInfo.remark"></el-input>
                </el-form-item>
              </el-col>
             
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
              <el-table-column align="center" prop=" userName" width="120"  label="审核人员"></el-table-column>
              <el-table-column align="center" prop="handleText" label="承保意见" show-overflow-tooltip></el-table-column>

            </el-table>
            
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
                <el-form-item >
                  <div slot="label" style="line-height:16px;">法人代码/<br>身份证号码:</div>
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
                <el-form-item >
                 <div slot="label" style="line-height:16px;">法人代码/<br>身份证号码:</div>
                  <el-input v-model="underwritingDetails.uwinsuredI.identifyNumber"></el-input>
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
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.uwinsuredI.mobile"></el-input>
                </el-form-item>
              </el-col>
            
              <el-col :span="8">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.uwinsuredI.postCode"></el-input>
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
                <el-form-item >
                 <div slot="label" style="line-height:16px;">法人代码/<br>身份证号码:</div>
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
                <el-form-item label="车型名称:">
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
                <el-form-item label="载客量:">
                  <el-input v-model="underwritingDetails.uwitemCar.seatCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="排量/功率(升):">
                  <el-input v-model="underwritingDetails.uwitemCar.exhaustScale"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="核定载质量(吨):">
                  <el-input v-model="underwritingDetails.uwitemCar.tonCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整备质量(吨):">
                  <el-input v-model="underwritingDetails.uwitemCar.carloteququality"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="初登日期:">
                  <el-input v-model="underwritingDetails.uwitemCar.enrollDate"></el-input>
                  <!-- <el-date-picker v-model="underwritingDetails.uwitemCar.enrollDate" type="date" value-format="yyyy-MM-dd"></el-date-picker> -->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="使用年限:">
                  <el-input v-model="underwritingDetails.uwitemCar.useYears"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用性质:">
                  <el-input v-model="underwritingDetails.uwitemCar.useNatureCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="条款类型:">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseTypeCname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="条款类别:">
                  <el-input v-model="underwritingDetails.uwitemCar.clauseType"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新车购置价格:">
                  <el-input v-model="underwritingDetails.uwitemCar.purchasePrice"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="总保险费:">
                  <el-input v-model="underwritingDetails.uwitemCar.sumPremium"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="发动机号:">
                  <el-input v-model="underwritingDetails.uwitemCar.engineNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN码:">
                  <el-input v-model="underwritingDetails.uwitemCar.vinNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新增设备:">
                  <el-input v-model="underwritingDetails.uwitemCar.carDevice"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="品牌:">
                  <el-input v-model="underwritingDetails.uwitemCar.brandName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车系:">
                  <el-input v-model="underwritingDetails.uwitemCar.familyName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车架号:">
                  <el-input v-model="underwritingDetails.uwitemCar.frameNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆气缸数:">
                  <el-input v-model="underwritingDetails.uwitemCar.cylinderCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="拖拉机标准:">

                  <div slot="label" style="line-height: 16px">是否符合<br>拖拉机标准:</div>
                  <el-input v-model="underwritingDetails.uwitemCar.isCriterion"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input v-model="underwritingDetails.uwitemCar.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height: 16px">重载货车<br>智能设备:</div>
                  <el-input v-model="underwritingDetails.uwitemCar.intelligentDevice"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装日期:">
                  <el-input v-model="underwritingDetails.uwitemCar.installDate"></el-input>
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
                <el-form-item >
                  <div slot="label" style="line-height: 16px"> 发动机<br>型号/功率:</div>
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
                <el-table-column align="center" prop="discount" label="保费折扣%"></el-table-column>
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
              <el-table-column align="center" prop="discount" label="保费折扣%">
                <template slot-scope="scope">
                  <span @click="openAdjustRateDialog(scope.row)"> {{scope.row.discount}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="adjustRate" label="续保调整比例%">
                
              </el-table-column>
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
      <!-- 定报价指标信息ZZ -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="13">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">定报价指标信息</div>
            </template>
            <div v-for="(uwqfixationDetail, index) in underwritingDetails.uwqfixationDetails " 
            :key="index" :class="(index+1) != underwritingDetails.uwqfixationDetails.length ? 'border-btm-gra': '' "> 
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
                    <div slot="label" style="line-height: 16px"> 营业税金<br>及附加比率:</div>
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
                  <el-form-item >
                    <div slot="label" style="line-height:16px">是否报价<br>(0:否 1:是):</div>
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
                  <el-form-item >
                    <div slot="label" style="line-height:16px">定价返回的跟单 <br> 风险保费合计:</div>
                    <el-input v-model="uwqfixationDetail.riskSumPremium"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item >
                    <div slot="label" style="line-height: 16px"> 不考虑模拟<br>交强的折扣率:</div>
                    <el-input v-model="uwqfixationDetail.discountBI"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <div slot="label" style="line-height: 16px"> 不考虑模拟交强<br>的销售费用率:</div>
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
            <el-table
              :data="underwritingDetails.uwcardrivers"
              style="width: 100%">

              <el-table-column prop="driverName" label="姓名" > </el-table-column>
              <el-table-column prop="drivingLicenseNo" label="驾驶证号"> </el-table-column>
              <el-table-column prop="sex" label="性别" > </el-table-column>
              <el-table-column prop="age" label="年龄" > </el-table-column>
              <el-table-column prop="causetroubleTimes" label="上年违章次数" > </el-table-column>
              <el-table-column prop="drivingYears" label="驾龄" > </el-table-column>
              <el-table-column prop="acceptLicenseDate" label="初次领证日期" > </el-table-column>
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

            <el-table
              :data="underwritingDetails.uwengages"
              style="width: 100%">

              <el-table-column prop="serialNo" label="序号" > </el-table-column>
              <el-table-column prop="clauseCode" label="特约序号" > </el-table-column>
              <el-table-column prop="clauses" label="特约内容" > </el-table-column>
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
                  <el-radio v-model="radio" label="1">客户</el-radio>
                  <el-radio v-model="radio" label="2">车辆</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-button size="mini">赔付率查询</el-button>
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
                <el-form-item > 
                   <div slot="label" style="line-height:16px;">纳税人<br>身份证号:</div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxpayeridentno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                   <div slot="label" style="line-height:16px;">纳税人<br>识别号:</div>
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
                <el-form-item >
                <div slot="label" style="line-height:16px;">减免税<br>比例/金额:</div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxabateamount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height:16px;">开具税务机关<br>代码/名称:</div>
                  <el-input v-model="underwritingDetails.payTravelTaxInfo.taxcomcode"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item >
                <div slot="label">
                  <!-- 批单申请单号号 -->
                  <div slot="label" style="line-height:16px;">完税凭证号/<br>减免税证明号：</div>

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
                <el-form-item >
                   <div slot="label" style="line-height:16px;">前次缴费<br>年度:</div>

                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepaytaxyear"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height:16px;">前次保单<br>止期:</div>

                  <el-input v-model="underwritingDetails.payTravelTaxInfo.prepolicyenddate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                   <div slot="label" style="line-height:16px;">本次缴费<br>起期:</div>

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
                  <el-input v-model="underwritingDetails.generalInformation.businessNature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道:">
                  <el-input v-model="underwritingDetails.generalInformation.agentName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input v-model="underwritingDetails.generalInformation.comCName"></el-input>
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
                <el-form-item >
                  <div slot="label" style="line-height:16px;">保险合同争<br>议解决方式:</div>
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
                  <el-date-picker v-model="underwritingDetails.otherInformation.carCheckTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
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
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height:16px;">上年度是否<br>在本公司承保:</div>
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_two"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="优惠给付方式:">
                  <el-input v-model="underwritingDetails.otherInformation.otherNature_foure"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height:16px;">驾驶行为<br>全国评分:</div>
                  <el-input v-model="underwritingDetails.otherInformation.nationalDriScore"></el-input>
                </el-form-item>
              </el-col>
            

              <el-col :span="8">
                <el-form-item label="驾驶行为本省评分:">
                  <el-input v-model="underwritingDetails.otherInformation.provinceDriScore"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item >
                  <div slot="label" style="line-height:16px;">是否有同车<br>保期重复:</div>
                  <el-input v-model="underwritingDetails.otherInformation.isProposalRepetition"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级:">
                  <el-input v-model="underwritingDetails.otherInformation.gradeName"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item >
                   <div slot="label" style="line-height:16px;">同车情况下的<br>投保单号列表:</div>
                  <el-input v-model="underwritingDetails.otherInformation.repetitionProposalNos"></el-input>
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
              <el-button type="primary" size="mini" @click="outerVisible  = true">提交审核</el-button>
              <el-button size="mini">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- dialog弹出框 -->
    <el-dialog
      title="核保任务提交"
      class="text-left"
      :lock-scroll="false"
      :append-to-body="true"
      :modal-append-to-body="true"
      :visible.sync="outerVisible"
    >
      <div id="form">
        <el-form ref="form" :model="form" label-width="150px" :rules="rules">
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
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="审批片语:">
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
              @click="innerVisible = true"
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
      <el-button
        @click="innerVisible = false;outerVisible = false"
        size="mini"
        type="primary"
        class="mt10"
      >关闭当前窗口</el-button>
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
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="优惠代码"
            width="120">

          </el-table-column>
          <el-table-column
            prop="name"
            label="优惠原因"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="优惠率"
            width="120"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="优惠条件"
            >
          </el-table-column>
        </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UnderwritingDetails",
  data() {
    return {
        data:{},
       contributing:[{num:"1",numto:"9902751",numcon:"中国人民财产保险股1111111111111111111111份有限公司 "},{num:"1",numto:"9902458",numcon:"还在等什么呢 赶紧下载APP吧"}],
      parameter: {},
      activeNames: [],
      underwritingDetails: {
        taskProcessing: {}, //处理核保任务
	      summaryInfo: {}, //概要信息
        underwriteOpinion:[], // 历次审核意见	
	      uwpTexts: {}, // 显示批文
        uwinsuredT: {}, // 投保人信息
        uwinsuredI: {}, // 被保险人信息
        uwinsuredC: {}, // 车主信息
        uwitemCar: {}, // 投保车辆信息
        uwcarmodel: {}, // 车型信息变动情况
        insurancePeriod: {}, // 保险期限
        uwitemkindZ: [], // 主险
        uwitemkindF: [], // 附加险
        payTravelTaxInfo:{} ,//代收代缴车船税信息
        uwqfixationDetails: [], // 定报价指标信息
        uwcardrivers: [], // 约定驾驶人信息
        uwengages: [], // 特别约定
        generalInformation: {}, // 一般信息
        otherInformation: {}, // 其他信息
        uwitemkindCount: {} // 险别总计
      },
      tableList: [],
      value: "",
      form: {},
      rules: {},
      radio: 1,
      outerVisible: false,
      innerVisible: false,
      textarea1: "",
      textarea2: "",
      tableData: [],
      adjustRateDialog: false,
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
    handleSelectionChange(){

    },
    init() {
      this.postRequest(`/fridayService02/queryobject1detail`, {
        businessNo: this.parameter.businessNo
      }).then(res => {
        this.underwritingDetails = res.data;
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
.el-dialog__body__update >>> .el-dialog__body{
  padding-top:0; 
}
.el-collapse-item__content{
    color: #303133;
}

.titlestyle >>> .el-input__inner{
  border-radius: 0px;
}
.titlestyle >>> .el-form-item__label{
   background: #E8F6F9;
 }   
.el-form-item{
   margin-bottom: 2px;
 }
  .titlestyleauto /deep/ .card-title{
  font-size: 12px;
}
 .titlestyleauto  /deep/.title-blue-bar{
  height: 16px;
}
 .titlestyleauto  /deep/ .el-collapse-item__header{
   height: 25px;
   line-height: 25px;
}
.pt11{
  padding-top: 0px;
}
  .el-collapse-item__wrap /deep/ .el-collapse-item__content{
        padding-bottom: 0px;
}
/* .el-collapse-item__wrap /deep/  .el-form-item{
  margin-bottom: 5px;
} */
</style>
<style>

</style>