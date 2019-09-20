<template>
  <div class="titlestyle">
    <!-- v-if=" type == 'CAR'" -->
    <div>
      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">请输选择查询类型</div>
            </template>
            <el-form ref="peifulv" :rules="rules" :model="peifulv" label-width="140px">
              <el-row>
                <el-row>
                  <el-col :span="8" :offset="6">
                    <el-form-item label="关系人代码:" prop="customerCodeT">
                      <el-input
                        v-model="peifulv.customerCodeT"
                        type="text"
                        maxlength="16"
                        minlength="16"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-col :span="24" class="text-center">
                  <el-button @click="query" type="primary">客户查询</el-button>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">客户信息列表</div>
            </template>
            <el-table :data="resultCustomerList1" style="width: 100%">
              <el-table-column prop="bizciflag" label="客户标示" width="110">
                <template slot-scope="scope">
                  <!-- <el-tag
                  :type="scope.row.value"
                  disable-transitions>{{scope.row.value}}
                  </el-tag>-->
                  <el-select
                    v-model="scope.row.bizciflag"
                    size="mini"
                    placeholder="请选择"
                    style="width:100px;"
                  >
                    <el-option
                      v-for="item in filters"
                      :key="item.label"
                      :label="item.value"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="identifytype" label="证件号码" min-width="120"></el-table-column>
              <el-table-column prop="comyearcompaymentrate" label="综合赔付率" min-width="120"></el-table-column>
              <el-table-column prop="comyeardamagetimes" label="出险次数" min-width="120"></el-table-column>
              <el-table-column prop="comyearearndreceivepremium" label="已赚实收保费" min-width="120"></el-table-column>
              <el-table-column prop="comyearearndsignpremium" label="已赚签单保费" min-width="120"></el-table-column>
              <el-table-column prop="comyearreceivepremium" label="实收保费" min-width="120"></el-table-column>
              <el-table-column prop="comyearsettledindemnity" label="已决赔款" min-width="120"></el-table-column>
              <el-table-column prop="comyearsettledpaymentrate" label="签单赔付率" min-width="120"></el-table-column>
              <el-table-column prop="comyearsignpaymentrate" label="签单保费" min-width="120"></el-table-column>
              <el-table-column prop="comyearsignpremium" label="未决赔款" min-width="120"></el-table-column>
              <el-table-column prop="comyearunsettledindemnity" label="终止时间" min-width="120"></el-table-column>
              <el-table-column prop="startdate" label="起始时间" min-width="120"></el-table-column>
              <el-table-column prop="bizciflag" label="详细信息" min-width="120">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="BusinessNum(scope.row)">点击</el-button>
                </template>
                点击
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">总公司访问客户信息需要</div>
            </template>

            <el-table :data="resultCustomerList2" style="width: 100%">
              <el-table-column prop="proposalno" label="投保单号" width="110"></el-table-column>
              <el-table-column prop="policyno" label="保单号" min-width="120"></el-table-column>
              <el-table-column prop="aplname" label="投保人" min-width="120"></el-table-column>
              <el-table-column prop="insname" label="被保险人" min-width="120"></el-table-column>
              <el-table-column prop="startdate" label="起保日期" min-width="120"></el-table-column>
              <el-table-column prop="enddate" label="终保日期" min-width="120"></el-table-column>
              <el-table-column prop="riskcode" label="险种" min-width="120"></el-table-column>
              <el-table-column prop="sumamount" label="保额" min-width="120"></el-table-column>
              <el-table-column prop="sumpremium" label="保费" min-width="120"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
    <!-- v-else -->
    <div>
      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">请输选择查询类型</div>
            </template>
            <el-form ref="peifulv1" :model="peifulv1" :rules="rulesSelect" label-width="140px">
              <el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="业务号:" prop="endorseNo">
                      <el-input v-model="peifulv1.endorseNo"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="车牌号码:" prop="licenseNo">
                      <el-input v-model="peifulv1.licenseNo"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="发动机号:" prop="engineNo">
                      <el-input v-model="peifulv1.engineNo"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="车架号:" prop="frameNo">
                      <el-input v-model="peifulv1.frameNo"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="VIN号:" prop="vinNo">
                      <el-input v-model="peifulv1.vinNo"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-col :span="24" class="text-center">
                  <el-button @click="query1" type="primary">标的车查询</el-button>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">汇总信息</div>
            </template>
            <el-table :data="resultCarList1" style="width: 100%">
              <el-table-column prop="policyyear" label="年份" width="110"></el-table-column>
              <el-table-column prop="compaymentrate" label="综合赔付率" min-width="120"></el-table-column>
              <el-table-column prop="clm_TIMES" label="出险次数" min-width="120"></el-table-column>
              <el-table-column prop="al_SIGNPRM" label="已赚签单保费" min-width="120"></el-table-column>
              <el-table-column prop="signprm" label="签单保费" min-width="120"></el-table-column>
              <el-table-column prop="al_PAID" label="已决赔款" min-width="120"></el-table-column>
              <el-table-column prop="ul_PAID" label="未决赔款" min-width="120"></el-table-column>
              <el-table-column prop="unsettledindemnitycount" label="未决笔数" min-width="120"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">承保详细信息</div>
            </template>
            <el-table
              stripe
              :data="resultCarList2"
              tooltip-effect="dark"
              :cell-style="{'text-align': 'center'}"
              :header-cell-style="{'text-align': 'center'}"
              :header-cell-class-name="'table-header-bg'"
            >
              <el-table-column prop="proposalno" label="投保单号" width="110"></el-table-column>
              <el-table-column prop="carkindcode" label="保单号" min-width="120"></el-table-column>
              <el-table-column prop="licenseno" label="车牌号" min-width="120"></el-table-column>
              <el-table-column prop="appliname" label="投保人" min-width="120"></el-table-column>
              <el-table-column prop="insuredname" label="被保险人" min-width="120"></el-table-column>
              <el-table-column prop="frameno" label="VIN/车架号" min-width="120"></el-table-column>
              <el-table-column prop="carkindcode" label="车辆种类" min-width="120"></el-table-column>
              <el-table-column prop="startdate" label="起保时间" min-width="120"></el-table-column>
              <el-table-column prop="enddate" label="终保时间" min-width="120"></el-table-column>
              <el-table-column prop="riskcode" label="险种" min-width="120"></el-table-column>
              <el-table-column prop="sumpremium" label="签单保费" min-width="120"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">理赔详细信息</div>
            </template>
            <el-table :data="resultCarList3" style="width: 100%">
              <el-table-column prop="registno" label="报案号" width="110"></el-table-column>
              <el-table-column prop="claimno" label="立案号" min-width="120"></el-table-column>
              <el-table-column prop="caseno" label="赔案号" min-width="120"></el-table-column>
              <el-table-column prop="policyno" label="保单号" min-width="120"></el-table-column>
              <el-table-column prop="insuredname" label="被保险人" min-width="120"></el-table-column>
              <el-table-column prop="startdate" label="起保日期" min-width="120"></el-table-column>
              <el-table-column prop="damagedate" label="出险日期" min-width="120"></el-table-column>
              <el-table-column prop="reportdate" label="报案日期" min-width="120"></el-table-column>
              <el-table-column prop="claimdate" label="立案日期" min-width="120"></el-table-column>
              <el-table-column prop="endcasedate" label="结案日期" min-width="120"></el-table-column>
              <el-table-column prop="canceldate" label="注销日期" min-width="120"></el-table-column>
              <el-table-column prop="sumestipaid" label="责任赔款" min-width="120"></el-table-column>
              <el-table-column prop="sumpaid" label="总赔付金额" min-width="120"></el-table-column>
              <el-table-column prop="damageaddress" label="地址" min-width="120"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "uwIDSVehicleViewQuery",
  data() {
    return {
      rules: {
        customerCodeT: [
          { required: true, message: "业务号必填", trigger: ["blur"] },
          {
            min: 16,
            max: 16,
            message: "长度为16个字符",
            trigger: ["change", "blur"]
          }
        ]
      },
      rulesSelect: {
        endorseNo: [
          { required: true, message: "业务号必填", trigger: ["blur"] }
        ],
        licenseNo: [
          { required: true, message: "车牌号码必填", trigger: ["blur"] }
        ],
        engineNo: [
          { required: true, message: "发动机号必填", trigger: ["blur"] }
        ],
        frameNo: [
          { required: true, message: "车架号必填", trigger: ["blur"] }
        ],
        vinNo: [
          { required: true, message: "VIN号必填", trigger: ["blur"] }
        ]
      },
      flowlog: {},
      filters: [
        { label: "1", value: "商业险" },
        { label: "2", value: "交强险" },
        { label: "3", value: "混合险" }
      ],
      activeNames: ["1"],
      peifulv: {
        condition: "0",
        customerCodeT: "",
        paramFlag: "1",
        ComCode: "1"
      },
      peifulv1: {
        condition: "1",
        paramFlag: "1",
        customerCodeT: "1",
        ComCode: "1",
        proposalNo: "1",
        endorseNo: "",
        engineNo: "",
        frameNo: "",
        licenseNo: "",
        vinNo: ""
      },
      resultCustomerList1: [],
      resultCustomerList2: [],
      resultCarList1: [],
      resultCarList2: [],
      resultCarList3: []
    };
  },

  methods: {
    //客户查询
    query() {
      this.$refs.peifulv.validate(valids => {
        if (valids) {
          this.$fetch
            .post(
              this.HOST + this.$url.uwIDSVehicleViewQuerySelect,
              this.peifulv
            )
            .then(res => {
              this.resultCustomerList1 =
                res.uwIdsClientEleList[0].i_APP_3YEAR_CUST_PAYMENT_RATE1_REAL_LIST;
              this.resultCustomerList2 =
                res.uwIdsClientEleList[0].i_PLC_PRPCMAIN_LIST;
            });
        }
      });
    },
    //标的车查询
    query1() {
      this.$refs.peifulv1.validate(valids => {
        console.log(valids)
        if (valids) {
          this.$fetch
            .post(
              this.HOST + this.$url.uwIDSVehicleViewQuerySelect,
              this.peifulv1
            )
            .then(res => {
              // console.log(res.uwIdsVehicleList[0].clm_DATE_LIST)
              this.resultCarList1 = res.uwIdsVehicleList[0].payment_LIST;
              this.resultCarList2 = res.uwIdsVehicleList[0].policy_DETA_LIST;
              this.resultCarList3 = res.uwIdsVehicleList[0].clm_DATE_LIST;
            });
        }
      });
    },
    //点击
    BusinessNum(row) {
      console.log(row);
    }
    //客户标识
    // filterTag(value,row){
    // return row.tag === value;
    // v-on:change="stustypechange"
    // v-on:visible-change="closestustype"
    // :filter-method="filterTag"

    // }
  },

  created() {
    // this.parameter = this.$route.query;
    // let keyWords = {
    //   businessNo: this.parameter.businessNo || "454654564564",
    //   taskType: this.parameter.taskType || "sdsd"
    // };
    // this.$fetch
    //   .post(this.HOST + this.$url.riskTypeRateInfo, keyWords)
    //   .then(data => {
    //     console.log(data);
    //     if (data && data.length > 0) {
    //       for (let i = 0; i < data.length; i++) {
    //         switch (data[i].rateType) {
    //           case "盈利目标占比":
    //             this.deviceTableYL.push(data[i]);
    //             break;
    //           case "盈利实际占比":
    //             this.deviceTableYL.push(data[i]);
    //             break;
    //           case "风险目标占比":
    //             this.deviceTable.push(data[i]);
    //             break;
    //           case "风险实际占比":
    //             this.deviceTable.push(data[i]);
    //             break;
    //         }
    //       }
    //     }
    //   });
  }
};
</script>
<style scoped>
.titlestyle {
  margin-top: 30px;
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.text-left {
  overflow: hidden;
}
.text-left {
  width: 1388px;
}
.circular {
  padding-bottom: 15px;
}
</style>

