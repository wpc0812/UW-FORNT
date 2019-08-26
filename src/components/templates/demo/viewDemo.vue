<template>
  <div>
    <!-- 侧边菜单 -->
    <div ref="content" style="margin:-20px -15px">
      <!--步骤条-->
      <sideNavigation :steps="steps" :parent-level="$refs"></sideNavigation>
      <!-- 内容区域 -->
      <div class="offer-price-right">
        <el-row style="position: fixed;right:5px">
          <el-button
            type="text"
            @click="toggleLang('en-US')"
            :class="{'buttonAsh':this.$i18n.locale == 'zh-CN'}"
          >English</el-button>
          <el-button
            type="text"
            @click="toggleLang('zh-CN')"
            :class="{'buttonAsh':this.$i18n.locale == 'en-US'}"
          >中文</el-button>
        </el-row>
        <el-form ref="prpqmainDto" :model="prpqmainDto" label-width="140px" :rules="rules" style="padding-top:20px">
          <!--main表-->
          <el-card class="offer-price-card" style="margin-top:12px;">
            <el-row class="rowButtom">
              <el-col :span="8">
                <el-form-item :label="$t('priceMain.Dateofinquiry')" prop="inquiryDate">
                  <el-date-picker
                    value-format="yyyy-MM-dd"
                    type="date"
                    style="width:100%"
                    v-model="prpqmainDto.inquiryDate"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="百分比" prop="entryDate">
                  <format-input
                    type="percent"
                    :precision="4"
                    v-model="prpqmainDto.entryDate"
                    class="w300"
                    :minus="true"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="邮箱" prop="quotationDate">
                  <el-input v-model="prpqmainDto.quotationDate"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="英文字符" prop="insurer">
                  <el-input v-model="prpqmainDto.insurer"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item :label="$t('priceMain.Insuranceassistant')">
                  <el-select
                    class="selectAlignment"
                    clearable
                    v-model="prpqmainDto.insuranceAssistant"
                  >
                    <el-option
                      v-for="item in insurers"
                      :key="item.userCode"
                      :label="item.userName"
                      :value="item.userCode"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel1" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel2" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel3" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel4" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
        <!--Vessel-->
        <el-form ref="vessel5" :model="vessel" label-width="140px">
          <el-card class="offer-price-card">
            <div slot="header">
              <span>{{$t('priceVessel.Vessel')}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                {{$t('priceExpand.Moreinformation')}}
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </div>
            <div>
              <el-row class="rowButtom">
                <el-col :span="8">
                  <el-form-item>
                    <input-lable slot="label" lable-name="这是一个特别长的中文描述，大概占位俩行"></input-lable>
                    <el-input v-model="vessel.vesselCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item>
                    <input-lable
                      slot="label"
                      lable-name="This is a very long Chinese description, about two lines."
                    ></input-lable>
                    <el-input v-model="vessel.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="千分位（美元符号）">
                    <format-input
                      currency="¥"
                      separator=","
                      :precision="2"
                      v-model="vessel.imo"
                      :max="10000000"
                      :min="-10000000"
                      class="w300"
                      empty-value="-"
                      :minus="true"
                      text-align="right"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="百分数">
                    <format-input
                      type="percent"
                      :precision="4"
                      v-model="vessel.vesselType"
                      class="w300"
                      :minus="true"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Country')">
                    <el-input v-model="vessel.country"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.GT')">
                    <el-input v-model="vessel.vesselGt"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.YearofBuilt')">
                    <el-input style="width:100%" v-model="vessel.builtYear"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('priceVessel.Class')">
                    <el-input v-model="vessel.clazz"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import {
  percentage,
  validateEMail,
  validatAlphabets
} from "@/assets/js/validator";
import InputLable from "../InputLable/index";
import formatInput from "../formatInput/index";
import sideNavigation from "../sideNavigation/index";

export default {
  components: { InputLable, formatInput, sideNavigation },
  name: "ViewDemo",
  data() {
    return {
      //主标题{{$t('priceExpand.Expand')}}按钮的图标切换标志
      mainExpandSign: "el-icon-arrow-down",
      //小标题{{$t('priceExpand.Expand')}}按钮的图标切换标志
      secondaryExpandSign: "el-icon-arrow-up",
      //  主表信息
      prpqmainDto: {
        quotationStatus: "",
        quotationNo: "",
        inquiryDate: "",
        entryDate: "",
        quotationDate: "",
        insurer: "",
        insuranceAssistant: ""
      },
      //  报价船舶数据
      vessel: {
        vesselCode: "",
        vesselName: "",
        imo: "",
        vesselType: "",
        country: "",
        vesselGt: "",
        builtYear: "",
        clazz: ""
      },
      // 下啦数据
      insurers: [
        {
          userCode: "123",
          userName: "人保"
        }
      ],
      // 侧导航菜单
      steps: [
        {
          status: "finish",
          title: this.$t("Scroll.Vessel"),
          ref: "prpqmainDto"
        },
        {
          status: "wait",
          title: this.$t("Scroll.Member"),
          ref: "vessel"
        },
        {
          status: "wait",
          title: this.$t("Scroll.JoinMembers"),
          ref: "vessel1"
        },
        {
          status: "wait",
          title: this.$t("Scroll.InsuranceType"),
          ref: "vessel2"
        },
        {
          status: "wait",
          title: this.$t("Scroll.InsuredPeriod"),
          ref: "vessel3"
        },
        {
          status: "wait",
          title: this.$t("Scroll.Broker"),
          ref: "vessel4"
        },
        {
          status: "wait",
          title: this.$t("Scroll.TermsandCondition"),
          ref: "vessel5"
        }
      ],

      form: {},
      rules: {
        inquiryDate: [
          { required: true, message: "请选择询价日期", trigger: "change" }
        ],
        entryDate: [{ validator: percentage, trigger: "blur" }],
        quotationDate: [{ validator: validateEMail, trigger: "blur" }],
        insurer: [{ validator: validatAlphabets, trigger: "blur" }]
      }
    };
  },
  computed: {
    //当前国际化标志
    language() {
      return this.$i18n.locale;
    }
  },
  methods: {
    goBack() {
      console.log("跳转到自定义页面");
    },
    // 暂存
    onSaveTemp: function() {
      this.$refs.prpqmainDto.validate(valid => {
        if (valid) {
          // count++;
        }
      });
    },
    // 切换国际化
    toggleLang(type) {
      this.$i18n.locale = type;
    },
    //生成审批信息
    onSubmitOffer: function() {}
  },
  created() {},
  mounted: function() {},
  destroyed: function() {}
};
</script>

<style scoped>
/* 顶部导航按钮图标 */
.miniBtnIcon >>> .iconfont {
  font-size: 12px !important;
}
/* row 下form表单的底部样式，更好展示错误提示信息*/
.rowButtom >>> .el-col {
  margin-bottom: 5px;
}

.offer-price-card {
  margin-bottom: 6px;
}
.offer-price-card div {
  text-align: left;
}

.us-dollar label {
  line-height: 20px;
}
.tal {
  width: 1366px;
  height: 198px;
  margin: 0 auto;
  background-color: #f1f1f3;
  border: 0;
  text-align: center;
  color: #333333;
  font-family: Arial, "宋体";
  font-size: 14px;
}
.tal tr,
.tal td {
  border: 1px solid #fff;
  height: 48px;
}
.first {
  width: 80px;
  text-align: left;
  padding-left: 58px;
}
.second {
  width: 400px;
}
.second_2 {
  width: 495px;
  text-align: left;
  padding-left: 23px;
}
.tal button {
  width: 130px;
  height: 36px;
  outline-style: none;
  border: 1px solid #666;
  background-color: #fff;
  cursor: pointer;
}
/* .sanjiao {
  background:url(../images/dui.png) no-repeat bottom right;
} */
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #969696;
  width: 262px;
  height: 36px;
  padding-left: 22px;

  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand {
  display: none;
}
.tal .ipt input {
  width: 242px;
  height: 36px;
  padding-left: 20px;
  border: solid 1px #969696;
}
.ipt {
  color: #969696;
}
.ipt .spe {
  margin-left: 26px;
}

.el-transfer-panel {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
  width: 340px;
  max-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
}

/*共保信息录入弹窗样式调整*/
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.icon-style {
  font-size: 24px;
  color: #409eff;
  cursor: pointer;
}

.el-form-item--small.el-form-item {
  margin-bottom: 10px;
}

.el-form-item {
  margin-bottom: 0px;
}

.brokerSwitch {
  margin-left: 70%;
  font-size: 14px;
  background-color: #fff;
}
/* 头部菜单 */
.headMenu {
  margin-left: 0px;
  position: fixed;
  width: 86%;
  margin-top: -4px;
  padding: 5px;
  background-color: #dad4d4;
  z-index: 99;
}
/* 头部按钮 */
.headBtn {
  position: absolute;
  right: 4%;
  top: 2px;
}
/* 当有侧导航时，页面布局 */
.offer-price-right {
  width: 87%;
  margin-top: 18px;
  margin-right: 4px;
  height: 100%;
  float: right;
}
/* 下拉框布局 */
.selectAlignment {
  width: 100%;
  /* margin-left: -4%; */
}
</style>
