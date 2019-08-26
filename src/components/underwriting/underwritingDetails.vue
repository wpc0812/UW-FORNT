<template>
  <div class="titlestyle">
    <!-- 任务审核 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title" >
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <!-- <el-row class="text-left buttons">
            <el-button>详细信息</el-button>
            <el-button>流转记录</el-button>
            <el-button>查看总公司资料</el-button>
            <el-button>上传影像</el-button>
            <el-button>手机影像</el-button>
            <el-button>查看风险类别占比</el-button>
            <el-button>车队业务质量统计查询</el-button>
          </el-row>-->
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
    <el-form  :model="underwritingDetails" label-width="170px">
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
                  <el-input v-model="underwritingDetails.handleComCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流入时间:">
                  <el-input v-model="underwritingDetails.handleTime"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流转状态:">
                  <el-input v-model="underwritingDetails.businessType_CN"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否续保:">
                  <el-input v-model="underwritingDetails.xubao"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否新车:">
                  <el-input v-model="underwritingDetails.isNewCar"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否短期单:">
                  <el-input v-model="underwritingDetails.isShort"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="电子投保/纸质投保:">
                  <el-input v-model="underwritingDetails.isNetProp"></el-input>
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
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保单号:">
                  <el-input v-model="underwritingDetails.proposalNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="保单号:">
                  <el-input v-model="underwritingDetails.policyNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="合同号:">
                  <el-input v-model="underwritingDetails.contractNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="签单日期:">
                  <el-input v-model="underwritingDetails.operateDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="保险期限从:">
                  <el-date-picker
                    v-model="underwritingDetails.startDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="至:">
                  <el-date-picker
                    v-model="underwritingDetails.endDate"
                    type="date"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="承保意见:">
                  <el-input v-model="underwritingDetails.remark"></el-input>
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
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:">
                  <el-input v-model="underwritingDetails.number"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理部门:">
                  <el-input v-model="underwritingDetails.department"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="审核人员:">
                  <el-input v-model="underwritingDetails.auditor"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <el-form-item label="承保意见:">
                  <el-input v-model="underwritingDetails.idea"></el-input>
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
                  <el-input v-model="underwritingDetails.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人住所:">
                  <el-input v-model="underwritingDetails.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人别名:">
                  <el-input v-model="underwritingDetails.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保人单位性质:">
                  <el-input v-model="underwritingDetails.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保人性质:">
                  <el-input v-model="underwritingDetails.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="法人代码/身份证号码:">
                  <el-input v-model="underwritingDetails.IdentifyNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.postCode"></el-input>
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
                  <el-input v-model="underwritingDetails.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人住所:">
                  <el-input v-model="underwritingDetails.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人别名:">
                  <el-input v-model="underwritingDetails.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="被投保人单位性质:">
                  <el-input v-model="underwritingDetails.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="被投保人性质:">
                  <el-input v-model="underwritingDetails.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="法人代码/身份证号码:">
                  <el-input v-model="underwritingDetails.IdentifyNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.postCode"></el-input>
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
                  <el-input v-model="underwritingDetails.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主住所:">
                  <el-input v-model="underwritingDetails.insuredAddress"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主别名:">
                  <el-input v-model="underwritingDetails.aliasName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车主单位性质:">
                  <el-input v-model="underwritingDetails.businessSort"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车主性质:">
                  <el-input v-model="underwritingDetails.insurednature"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="法人代码/身份证号码:">
                  <el-input v-model="underwritingDetails.IdentifyNumber"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系人姓名:">
                  <el-input v-model="underwritingDetails.linkerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="underwritingDetails.phoneNumber"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="移动电话:">
                  <el-input v-model="underwritingDetails.mobile"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="邮政编码:">
                  <el-input v-model="underwritingDetails.postCode"></el-input>
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
                  <el-input v-model="underwritingDetails.flapper"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="号牌种类:">
                  <el-input v-model="underwritingDetails.kind"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型名称:">
                  <el-input v-model="underwritingDetails.modelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆种类:">
                  <el-input v-model="underwritingDetails.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="载客量:">
                  <el-input v-model="underwritingDetails.busload"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="排量/功率(升):">
                  <el-input v-model="underwritingDetails.displacement"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="核定载质量(吨):">
                  <el-input v-model="underwritingDetails.capacity"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整备质量(吨):">
                  <el-input v-model="underwritingDetails.reorganize"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="初登日期:">
                  <el-date-picker v-model="form.appStartDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="使用年限:">
                  <el-input v-model="underwritingDetails.limit"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="使用性质:">
                  <el-input v-model="underwritingDetails.employ"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="条款类型:">
                  <el-input v-model="underwritingDetails.clause"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="条款类别:">
                  <el-input v-model="underwritingDetails.category"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新车购置价格:">
                  <el-input v-model="underwritingDetails.price"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="总保险费:">
                  <el-input v-model="underwritingDetails. premium"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="发动机号:">
                  <el-input v-model="underwritingDetails.engine"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="VIN码:">
                  <el-input v-model="underwritingDetails.vin"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="新增设备:">
                  <el-input v-model="underwritingDetails.equipment"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="品牌:">
                  <el-input v-model="underwritingDetails.brand"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车系:">
                  <el-input v-model="underwritingDetails.series"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车架号:">
                  <el-input v-model="underwritingDetails.underwritingDetails"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车辆气缸数:">
                  <el-input v-model="underwritingDetails.cylinder"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否符合拖拉机标准:">
                  <el-input v-model="underwritingDetails.accord"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input v-model="underwritingDetails.alia"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="重载货车智能设备:">
                  <el-input v-model="underwritingDetails.intelligent"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装日期:">
                  <el-date-picker v-model="form.appStartDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
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
                  <el-input v-model="underwritingDetails.code"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="快速查询码:">
                  <el-input v-model="underwritingDetails.inquire"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型名称:">
                  <el-input v-model="underwritingDetails.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="类型:">
                  <el-input v-model="underwritingDetails.type"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="种类:">
                  <el-input v-model="underwritingDetails.variety"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="品牌名称:">
                  <el-input v-model="underwritingDetails.brand"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="车系名称:">
                  <el-input v-model="underwritingDetails.series"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="生产厂商:">
                  <el-input v-model="underwritingDetails.production"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="整车质量:">
                  <el-input v-model="underwritingDetails.quality"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="变速器:">
                  <el-input v-model="underwritingDetails.variable"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="发动机型号/功率:">
                  <el-input v-model="underwritingDetails.engine"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="标准配置:">
                  <el-input v-model="underwritingDetails.normal"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="选装配置:">
                  <el-input v-model="underwritingDetails.optional"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="外形尺寸:">
                  <el-input v-model="underwritingDetails.size"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="前轮距/后轮距:">
                  <el-input v-model="underwritingDetails.tread"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="轴距:">
                  <el-input v-model="underwritingDetails.wheel"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="年款:">
                  <el-input v-model="underwritingDetails.paragraph"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险说明:">
                  <el-input v-model="underwritingDetails.explain"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="车型别名:">
                  <el-input v-model="underwritingDetails.nickname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-table
              :data="tableList"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :cell-style="{'text-align': 'center'}"
              :header-cell-style="{'text-align': 'center'}"
              :header-cell-class-name="'table-header-bg'"
            >
              <el-table-column align="center" label width="55"></el-table-column>
              <el-table-column align="center" prop="passenger" label="载客数"></el-table-column>
              <el-table-column align="center" prop="capacity" label="载重量"></el-table-column>
              <el-table-column align="center" prop=" displacement" label=" 排气量(升)"></el-table-column>
              <el-table-column align="center" prop="guard" label="防盗" show-overflow-tooltip></el-table-column>
              <el-table-column align="center" prop="vesselName" label="ABS" show-overflow-tooltip></el-table-column>
              <el-table-column align="center" prop="SRS" label="安全气囊"></el-table-column>
              <el-table-column align="center" label="车损系数" prop="coefficient"></el-table-column>
              <el-table-column align="center" prop="Dumb" label="盗抢系数"></el-table-column>
              <el-table-column align="center" prop="price" label="车辆价格"></el-table-column>
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
              <el-col :span="24">
                <el-form-item label="保险期限从:">
                  <el-input v-model="underwritingDetails.date"></el-input>
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
                :data="tableList"
                stripe
                tooltip-effect="dark"
                style="width: 100%"
                :cell-style="{'text-align': 'center'}"
                :header-cell-style="{'text-align': 'center'}"
                :header-cell-class-name="'table-header-bg'"
              >
                <el-table-column align="center" label="险别代码" prop="riskcode"></el-table-column>
                <el-table-column align="center" prop="riskname" label="险别名称"></el-table-column>
                <el-table-column align="center" prop="excess" label="不计免赔率"></el-table-column>
                <el-table-column align="center" prop=" sum" label="保险金额/责任限额"></el-table-column>
                <el-table-column align="center" prop="rate" label="费率(%)"></el-table-column>
                <el-table-column align="center" prop="standard" label="标准保费(元)"></el-table-column>
                <el-table-column align="center" prop="deductible" label="免赔额(元)"></el-table-column>
                <el-table-column align="center" label="可选免赔系数%" prop="choosableDeductible"></el-table-column>
                <el-table-column align="center" prop="premium" label="保费折扣%"></el-table-column>
                <el-table-column align="center" prop="renew" label="续保调整比例%"></el-table-column>
                <el-table-column align="center" prop="price" label="应交保费(元)"></el-table-column>
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
              :data="tableList"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" label="险别代码" prop="kindCode"></el-table-column>
              <el-table-column align="center" prop="kindName" label="险别名称"></el-table-column>
              <el-table-column align="center" prop="flag" label="不计免赔率"></el-table-column>
              <el-table-column align="center" prop=" amount" label="保险金额/责任限额"></el-table-column>
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
                  <el-input v-model="underwritingDetails.discountPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="续保调整保费合计:">
                  <el-input v-model="underwritingDetails.adjustPremiumCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="实交保费合计:">
                  <el-input v-model="underwritingDetails.premiumCount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="总折扣:">
                  <el-input v-model="underwritingDetails.dbProfit"></el-input>
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
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保单号:">
                  <el-input v-model="underwritingDetails.proposalNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="产品代码:">
                  <el-input v-model="underwritingDetails.riskCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="折扣率:">
                  <el-input v-model="underwritingDetails.disCount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="利润率:">
                  <el-input v-model="underwritingDetails.profits"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定成本率:">
                  <el-input v-model="underwritingDetails.cost"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="营业税金及附加比率:">
                  <el-input v-model="underwritingDetails.taxorAppend"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="赔付率R:">
                  <el-input v-model="underwritingDetails.payMentR"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="标准赔付率R:">
                  <el-input v-model="underwritingDetails.basePayMentR"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="销售费用率:">
                  <el-input v-model="underwritingDetails.poundAge"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="标准保费:">
                  <el-input v-model="underwritingDetails.basePremium"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险保费:">
                  <el-input v-model="underwritingDetails.riskPremium"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="签单保费:">
                  <el-input v-model="underwritingDetails.signPremium"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否报价(0:否 1:是):">
                  <el-input v-model="underwritingDetails.uwtqfixationDetails"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="风险类别:">
                  <el-input v-model="underwritingDetails.riskClass"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="业务说明:">
                  <el-input v-model="underwritingDetails.operationInfo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="实际折扣率:">
                  <el-input v-model="underwritingDetails.realDisCount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="实际利润率:">
                  <el-input v-model="underwritingDetails.realProfits"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="实际赔付率:">
                  <el-input v-model="underwritingDetails.realPayMentR"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="保单盈利类别:">
                  <el-input v-model="underwritingDetails.profitClass"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="定价返回的跟单风险保费合计:" label-width="190px">
                  <el-input v-model="underwritingDetails.riskSumPremium"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="不考虑模拟交强的折扣率:">
                  <el-input v-model="underwritingDetails.discountBI"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="不考虑模拟交强的销售费用率:" label-width="200px">
                  <el-input v-model="underwritingDetails.poundageBI"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
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
            <el-row>
              <el-col :span="3">
                <el-form-item label="姓名">{{underwritingDetails.driverName}}</el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="驾驶证号">{{underwritingDetails.drivingLicenseNo}}</el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="性别"></el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="年龄"></el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="上年违章次数"></el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="驾龄"></el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="初次领证日期"></el-form-item>
              </el-col>
            </el-row>
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
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="特约序号"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="特约内容"></el-form-item>
              </el-col>
            </el-row>
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
                <el-form-item label="请选择查询条件:">
                  <el-radio v-model="radio" label="1">客户</el-radio>
                  <el-radio v-model="radio" label="2">车辆</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="8">
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
            <el-row>
              <el-col :span="3">
                <el-form-item label="姓名"></el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="驾驶证号"></el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="性别"></el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="年龄"></el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="上年违章次数"></el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="驾龄"></el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="初次领证日期"></el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 特别约定 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="18">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">特别约定</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="特约序号"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="特约内容"></el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 赔付情况 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="19">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">赔付情况</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="请选择查询条件:">
                  <el-radio v-model="radio" label="1">客户</el-radio>
                  <el-radio v-model="radio" label="2">车辆</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item>
                  <el-button type="primary">赔付率查询</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 代收代缴车船税信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="20">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">代收代缴车船税信息</div>
            </template>
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
                  <el-input v-model="underwritingDetails.source"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="渠道:">
                  <el-input v-model="underwritingDetails.channel"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input v-model="underwritingDetails.affiliation"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="操作员:">
                  <el-input v-model="underwritingDetails.operator"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="优惠给付方式:">
                  <el-input v-model="underwritingDetails.payment"></el-input>
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
                <el-form-item label="保险合同争议解决方式:">
                  <el-input v-model="underwritingDetails.argueSolution"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="经办人:">
                  <el-input v-model="underwritingDetails.handlerCodeCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属经办人:">
                  <el-input v-model="underwritingDetails.handler1CodeCName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="验车情况:">
                  <el-input v-model="underwritingDetails.carCheckStatus"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车时间:">
                  <el-date-picker v-model="form.carCheckTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验车人:">
                  <el-input v-model="underwritingDetails.carChecker"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门:">
                  <el-input v-model="underwritingDetails.comCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="操作员:">
                  <el-input v-model="underwritingDetails.operatorCodeCName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="初审人:">
                  <el-input v-model="underwritingDetails.approverName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="批改次数:">
                  <el-input v-model="underwritingDetails.endorseTimes"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="立案次数:">
                  <el-input v-model="underwritingDetails.claimTimes"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="共保标志:">
                  <el-input v-model="underwritingDetails.coinsFlag"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="上年度是否在本公司承保:">
                  <el-input v-model="underwritingDetails.otherNature_two"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="优惠给付方式:">
                  <el-input v-model="underwritingDetails.otherNature_foure"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="驾驶行为全国评分:">
                  <el-input v-model="underwritingDetails.nationalDriScore"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="驾驶行为本省评分:">
                  <el-input v-model="underwritingDetails.provinceDriScore"></el-input>
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
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UnderwritingDetails",
  data() {
    return {
      aaa: true,
      parameter: {},
      activeNames: [],
      underwritingDetails: {},
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
      this.postRequest(`/fridayService02/queryobject1detail`, {
        businessNo: this.parameter.businessNo
      }).then(res => {
        this.underwritingDetails = res.data.data;
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
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.text-left {
  overflow: hidden;
}
.text-left {
  width: 1388px;
}
</style>
<style>
 .titlestyle /deep/ .card-title{
  font-size: 12px;
}
 .titlestyle  /deep/.title-blue-bar{
  height: 16px;
}
 .titlestyle  /deep/ .el-collapse-item__header{
   height: 25px;
   line-height: 25px;
}
.pt11{
  padding-top: 0px;
}
  .el-collapse-item__wrap /deep/ .el-collapse-item__content{
        padding-bottom: 0px;
}
.el-collapse-item__wrap >>>  .el-form-item{
  margin-bottom: 20px;
}
/* .titlestyle /deep/ .el-input__inner{
  border:none;
} */
</style>
