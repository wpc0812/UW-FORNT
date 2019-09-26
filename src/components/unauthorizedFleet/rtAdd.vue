<template>
  <div>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">增加异地车队信息</div>
          </template>
          <el-form
            label-width="170px"
            v-if="flags"
            class="UwMotorcadeMainVOupdate"
            ref="UwMotorcadeMainVO"
            :rules="rules"
            :model="UwMotorcadeMainVO"
          >
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="分公司:" prop="comcode">
                    <el-input
                      v-model="UwMotorcadeMainVO.comcode"
                      type="text"
                      maxlength="8"
                      minlength="8"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人标志:" prop="insuredflag">
                    <el-select v-model="UwMotorcadeMainVO.insuredflag" clearable placeholder="被保险人">
                      <el-option
                        v-for="item in relationss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人名称:" prop="insuredName">
                    <template>
                      <el-input v-model="UwMotorcadeMainVO.insuredName">
                        <el-button @click="selectName" slot="append" size="small" type="text">查询</el-button>
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制关系人代码:" prop="insuredCode">
                    <template>
                      <el-input v-model="UwMotorcadeMainVO.insuredCode">
                        <el-button @click="selectCode" slot="append" size="small" type="text">查询</el-button>
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务来源:" class="text-left" prop="businessNature">
                    <el-select
                      v-model="UwMotorcadeMainVO.businessNature"
                      clearable
                      placeholder="请选择"
                      @focus="businessNatureFocus"
                      @change="renewalny"
                    >
                      <el-option
                        v-for="item in carmainmodelvalue"
                        :key="item.labe"
                        :label="item.value"
                        :value="item.label"
                        :disabled="item.disabled"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="历史年度满期赔付率(%):" class="text-left">
                    <el-button @click="selectHistory" size="small" text="primary">查询</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="车队车辆总数:" prop="carcountAll">
                    <el-input v-model="UwMotorcadeMainVO.carcountAll" maxlength="6" type="number"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="预估保费规模(单位:万元):"
                    prop="estimatedPremiumSize"
                    label-width="175px"
                    class="text-left"
                  >
                    <el-input
                      v-model="UwMotorcadeMainVO.estimatedPremiumSize"
                      maxlength="4"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="异地车数量:" prop="foreigncarcount" class="text-left">
                    <el-input
                      v-model="UwMotorcadeMainVO.foreigncarcount"
                      maxlength="6"
                      :min="0"
                      type="number"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="涉及车籍地:" prop="carCadastral">
                    <el-input
                      v-model="carCadastralLabel"
                      placeholder="点击选择"
                      @focus="openTransfer(provinceCodes,UwMotorcadeMainVO.carCadastral,'carCadastral')"
                      class="labelmargin"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆主要车型:" prop="carmainmodel" class="text-left">
                    <el-input
                      v-model="carmainmodelLabel"
                      placeholder="点击选择"
                      @focus="openTransfer(carTypeCodes,UwMotorcadeMainVO.carmainmodel,'carmainmodel')"
                      class="labelmargin"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆主要使用地:" prop="carmainarea" class="text-left">
                    <el-input
                      v-model="carmainareaLabel"
                      placeholder="点击选择"
                      @focus="openTransfer(carTypeCodes,UwMotorcadeMainVO.carmainarea,'carmainarea')"
                      class="labelmargin"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" prop="finishdate" class="labelheight1">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.finishdate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险手续费上限(%):" prop="costRateUpper" class="labelheight1">
                    <el-input v-model="UwMotorcadeMainVO.costRateUpper" type="number"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="监控方案:" class="labelheight1" prop="monitoringProgramme">
                    <el-input
                      type="textarea"
                      :rows="1"
                      maxlength="99"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      v-model="UwMotorcadeMainVO.monitoringProgramme"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="承保条件:" class="labelheight1" prop="underWritingCondition">
                    <el-input
                      type="textarea"
                      :rows="1"
                      maxlength="99"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      v-model="UwMotorcadeMainVO.underWritingCondition"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关联关系人名称:" class="labelheight1">
                    <el-input
                      type="textarea"
                      :rows="1"
                      maxlength="59"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      v-model="UwMotorcadeMainVO.insuredNameSUB"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="备注:" class="labelheight1">
                    <el-input
                      type="textarea"
                      :rows="1"
                      maxlength="99"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      v-model="UwMotorcadeMainVO.remark"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="save()" size="mini" type="primary">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 弹出框 -->
    <el-dialog
      title="请选择"
      class="checkboxmargin"
      :visible.sync="transferDialog"
      width="40%"
      :before-close="handleClose"
      :lock-scroll="false"
    >
      <div>
        <el-transfer
          v-model="transferItem"
          :data="transferItems"
          :titles="['未选择', '已选择']"
          @change="transferChange"
          :props="{key: 'value',label: 'label'}"
        ></el-transfer>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="transferDialog = false">取 消</el-button>
        <el-button type="primary" @click="valLen()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="请选择"
      class="checkboxmargin"
      :visible.sync="SelectMsgDialog"
      width="50%"
      :before-close="handleClose"
      :lock-scroll="false"
    >
      <div>
        <el-card class="circular mt4 shadow">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form :model="UwMotorcadeMainVOs" label-width="150px">
            <el-row>
              <el-row class="el_row_msg">
                <el-col :span="10">
                  <el-form-item label="姓名:">
                    <el-input v-model="UwMotorcadeMainVOs.insuredName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="客户编码:">
                    <el-input v-model="UwMotorcadeMainVOs.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="text_select">
                <el-col class="querycenter">
                  <el-button @click="querySelect()" size="mini" type="primary">查询</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
          <el-table
            :data="resultSelect"
            stripe
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="customerCode" label="客户编码"></el-table-column>
            <el-table-column prop="customerCName" label="姓名"></el-table-column>
            <el-table-column prop="identifyNumber" label="证件号码"></el-table-column>
            <el-table-column prop="applicCode" label="选择">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="choseCode(scope.row)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
      <span slot="footer">
        <el-button @click="SelectMsgDialog = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      style="text-align='center'"
      :visible.sync="dialogVisibles"
      width="30%"
      class="diacenter"
      :before-close="handleClose"
    >
      <span>{{message}}</span>
      <span slot="footer" class="dialog-footer dialogFooter">
        <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { carTypeCodes, provinceCodes } from "@/assets/js/baseCode";
import utils from "../../utils/index";

export default {
  name: "rtAdd",
  data() {
    //车队车辆总数
    var carcountAllEcc = (rules, value, callback) => {
      if (!value) {
        callback(new Error("必填项，且只能输入数字"));
      } else if (value && value.length > 6) {
        callback(new Error("最多为5位"));
      } else if (
        parseInt(value) < parseInt(this.UwMotorcadeMainVO.foreigncarcount)
      ) {
        this.$refs["UwMotorcadeMainVO"].clearValidate("carcountAll");
        callback(new Error("车队车辆总数大于等于异地车数量"));
      } else if (parseInt(value) < 0) {
        callback(new Error("车队车辆总数只能为正整数"));
      } else if (
        parseInt(value) >= parseInt(this.UwMotorcadeMainVO.foreigncarcount) &&
        this.UwMotorcadeMainVO.foreigncarcount.length > 0 &&
        this.UwMotorcadeMainVO.foreigncarcount.length <= 6
      ) {
        callback();
      }
    };
    // 异地车数量
    var foreigncarcountEcc = (rules, value, callback) => {
      if (!value) {
        callback(new Error("必填项，且只能输入数字"));
      } else if (value && value.length > 6) {
        callback(new Error("最多为5位"));
      } else if (parseInt(value) < 0) {
        callback(new Error("异地车辆数只能为正整数"));
      } else if (
        parseInt(value) > parseInt(this.UwMotorcadeMainVO.carcountAll)
      ) {
        this.$refs["UwMotorcadeMainVO"].clearValidate("foreigncarcount");
        callback(new Error("车队车辆总数小于异地车辆数,请修改"));
      } else if (
        parseInt(value) <= parseInt(this.UwMotorcadeMainVO.carcountAll) &&
        this.UwMotorcadeMainVO.carcountAll.length > 0 &&
        this.UwMotorcadeMainVO.carcountAll.length <= 6
      ) {
        callback();
      }
    };
    //商业险手续费上限
    var costRateUpperEcc = (rules, value, callback) => {
      if (!value) {
        callback(new Error("必填项，且只能输入数字"));
      } else if (value && parseFloat(value) < 0) {
        callback(new Error("商业险手续费上限应大于0"));
      } else if (value && !/^\d+.?\d{0,2}$/.test(value)) {
        callback(new Error("最多保留两位小数"));
      } else if (value && /^\d+.?\d{0,2}$/.test(value)) {
        callback();
      }
    };
    // 控制结束日期
    var finishdateEcc = (rules, value, callback) => {
      let str = this.UwMotorcadeMainVO.finishdate.replace("/-/g", "/");
      let newTime = new Date(str).getTime();
      if (!value) {
        callback(new Error("结束日期为必填项"));
      } else if (
        value &&
        newTime < new Date().getTime() - 24 * 60 * 60 * 1000
      ) {
        callback(new Error("选中日期应大于等于当前日期"));
      } else if (
        value &&
        newTime >= new Date().getTime() - 24 * 60 * 60 * 1000
      ) {
        callback();
      }
    };
    // 预估保费规模
    var estimatedPremiumSizeEcc = (rules, value, callback) => {
      if (!value) {
        callback(new Error("必填项，且只能输入数字"));
      } else if (value && value.length > 4) {
        callback(new Error("最多为4位"));
      } else if (parseInt(value) < 0) {
        callback(new Error("预估保费规模只能为正整数"));
      } else if (value && parseInt(value) > 0 && value.length <= 4) {
        callback();
      }
    };
    // 监控方案
    var monitoringProgrammeEcc = (rules, value, callback) => {
      if (value && value.length > 100) {
        callback(new Error("监控方案为100字以内"));
      } else if (value && value.length <= 100) {
        callback();
      }
    };
    return {
      message: "",
      dialogVisibles: false,
      resultSelect: [],
      SelectMsgDialog: false,
      val: [],
      businessDis: false,
      transferItems: [], // 穿梭框 数据
      transferItem: [], // 穿梭框 绑定数据
      transfetTitle: ["已选择", "为选择"],
      carTypeCodes, // 车型代码
      provinceCodes, // 省份代码
      carCadastralLabel: "", // input显示 label
      carmainmodelLabel: "", // input显示 label
      carmainareaLabel: "",
      transferDialog: false,
      transferType: "",
      UwMotorcadeMainVOs: {
        insuredName: "",
        insuredCode: ""
      },
      UwMotorcadeMainVO: {
        comcode: "",
        insuredflag: "",
        insuredName: "",
        insuredCode: "",
        businessNature: "",
        carcountAll: "",
        estimatedPremiumSize: "",
        foreigncarcount: "",
        carCadastral: [], // 入参
        carmainmodel: [],
        carmainarea: [],
        finishdate: "",
        costRateUpper: "",
        underWritingCondition: "",
        type: "1"
      },
      relationss: [
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      carmainmodelvalue: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3" }
      ],
      rules: {
        comcode: [
          { required: true, message: "分公司不能为空", trigger: ["blur"] },
          {
            min: 8,
            max: 8,
            message: "长度为8个字符",
            trigger: ["change", "blur"]
          }
        ],
        insuredflag: [
          { required: true, message: "控制关系人标志必选", trigger: ["change"] }
        ],
        insuredName: [
          { required: true, message: "控制关系人名称必填", trigger: ["blur"] }
        ],
        insuredCode: [
          { required: true, message: "控制关系人代码必选", trigger: ["blur"] }
        ],
        businessNature: [
          { required: true, message: "业务来源必选", trigger: ["change"] }
        ],
        carcountAll: [
          { required: true, validator: carcountAllEcc, trigger: ["blur"] }
        ],
        estimatedPremiumSize: [
          {
            required: true,
            validator: estimatedPremiumSizeEcc,
            trigger: ["blur"]
          }
        ],
        foreigncarcount: [
          { required: true, validator: foreigncarcountEcc, trigger: ["blur"] }
        ],
        carCadastral: [
          { required: true, message: "涉及车籍地必选", trigger: ["change"] }
        ],
        carmainmodel: [
          {
            required: true,
            message: "车队车辆主要车型必选",
            trigger: ["change"]
          }
        ],
        carmainarea: [
          { required: true, message: "车辆主要使用地必选", trigger: ["change"] }
        ],
        finishdate: [
          { required: true, validator: finishdateEcc, trigger: ["blur"] }
        ],
        costRateUpper: [
          { required: true, validator: costRateUpperEcc, trigger: ["blur"] }
        ],
        monitoringProgramme: [
          {
            required: true,
            validator: monitoringProgrammeEcc,
            trigger: ["blur"]
          }
        ],
        underWritingCondition: [
          { required: true, message: "承保条件必填", trigger: ["blur"] },
          {
            min: 0,
            max: 99,
            message: "输入最多在100个汉字之内",
            trigger: ["change", "blur"]
          }
        ]
      },
      activeNames: ["1"],
      flags: true,
      formData: {}
    };
  },
  computed: {},
  methods: {
    //业务来源获取焦点事件
    businessNatureFocus() {
      if (
        this.UwMotorcadeMainVO.insuredName == "" &&
        this.UwMotorcadeMainVO.insuredflag == ""
      ) {
        this.dialogVisibles = true;
        this.message = "请先录入关系人名称";
      } else {
      }
    },
    // 续保判断
    renewalny() {
      console.log(this.UwMotorcadeMainVO.businessNature);
      if (this.UwMotorcadeMainVO.businessNature == "3") {
        if (
          this.UwMotorcadeMainVO.insuredflag != "" &&
          this.UwMotorcadeMainVO.insuredName != ""
        ) {
          let uwMotorcadeMainVO = {
            insuredflag: this.UwMotorcadeMainVO.insuredflag,
            insuredName: this.UwMotorcadeMainVO.insuredName
          };
          this.$fetch
            .post(
              this.HOST + this.$url.rtAddLastFourYearPayPercen,
              uwMotorcadeMainVO
            )
            .then(res => {
              console.log(res);
              if (res !== "false") {
                this.UwMotorcadeMainVO.businessNature = "3";
              } else {
                this.dialogVisibles = true;
                this.message = "没有历史数据，不可以选择续保车队";
                this.UwMotorcadeMainVO.businessNature = "1";
              }
            });
        } else {
          this.dialogVisibles = true;
          this.message = "关系人标志和关系人名称不能为空";
          this.UwMotorcadeMainVO.businessNature = "1";
        }
      }
    },
    //弹窗查询
    querySelect() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVOs;
      this.$fetch
        .post(this.HOST + this.$url.rtAddToInsured, uwMotorcadeMainVO)
        .then(res => {
          console.log(res);
          this.resultSelect = res;
        });
    },
    //弹窗选择
    choseCode(row) {
      this.UwMotorcadeMainVO.insuredName = row.customerCName;
      this.UwMotorcadeMainVO.insuredCode = row.customerCode;
      this.SelectMsgDialog = false;
    },
    // 穿梭框 change 事件
    transferChange(value, direction, movedKeys) {
      // console.log(this.datas)
      // this.UwMotorcadeMainVO.carCadastral=value;
      // console.log(value, direction, movedKeys)
    },
    handleClose: function() {
      this.transferDialog = false;
    },
    // 获取 页面显示的 label  (源数据，改变的数据)
    getShowlabel(items, options) {
      let label = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < options.length; j++) {
          if (items[i].value === options[j]) {
            label.push(items[i].label);
          }
        }
      }
      return utils.arrayToString(label);
    },
    //点击弹出框确定
    valLen() {
      switch (this.transferType) {
        case "carCadastral":
          this.UwMotorcadeMainVO.carCadastral = this.transferItem;
          this.carCadastralLabel = this.getShowlabel(
            this.transferItems,
            this.transferItem
          );

          break;
        case "carmainmodel":
          this.UwMotorcadeMainVO.carmainmodel = this.transferItem;
          this.carmainmodelLabel = this.getShowlabel(
            this.transferItems,
            this.transferItem
          );

          break;
        case "carmainarea":
          this.UwMotorcadeMainVO.carmainarea = this.transferItem;
          this.carmainareaLabel = this.getShowlabel(
            this.transferItems,
            this.transferItem
          );

          break;
      }
      this.transferDialog = false;
    },
    // 点击弹出
    openTransfer(items, item, type) {
      this.transferItems = items; //总数据data
      this.transferItem = item; //返回或者传入的数据
      this.transferType = type; //类型（省份/车型）
      this.transferDialog = true;
    },
    //保存
    save() {
      this.$refs.UwMotorcadeMainVO.validate(valid => {
        if (valid) {
          let uwMotorcadeMainVO = JSON.parse(
            JSON.stringify(this.UwMotorcadeMainVO)
          );
          (uwMotorcadeMainVO.carCadastral = utils.arrayToString(
            uwMotorcadeMainVO.carCadastral
          )), // 入参
            (uwMotorcadeMainVO.carmainmodel = utils.arrayToString(
              uwMotorcadeMainVO.carmainmodel
            )), // 入参
            (uwMotorcadeMainVO.carmainarea = utils.arrayToString(
              uwMotorcadeMainVO.carmainarea
            )), // 入参
            // console.log(this.uwMotorcadeMainVO)
            this.$confirm("确认是否保存该信息~", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                // console.log(this.$url.rtAddSaves)
                this.$fetch
                  .post(this.HOST + this.$url.rtAddSaves, uwMotorcadeMainVO)
                  .then(data => {
                    console.log(data);

                    this.$message({
                      type: "success",
                      message: "保存成功!"
                    });
                    this.$router.go(-1);
                  });
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: "已取消保存"
                });
              });
        }
      });
    },
    //通过关系人代码
    selectCode() {
      if (this.UwMotorcadeMainVO.insuredCode) {
        let _this = this;
        this.UwMotorcadeMainVOs.insuredCode = this.UwMotorcadeMainVO.insuredCode;
        this.$fetch
          .post(this.HOST + this.$url.rtAddToInsured, this.UwMotorcadeMainVOs)
          .then(res => {
            console.log(res);
            if (res) {
              _this.resultSelect = res;
              this.SelectMsgDialog = true;
            }
          });
      } else {
        return;
      }
    },
    //通过关系人名称
    selectName() {
      if (this.UwMotorcadeMainVO.insuredName) {
        let _this = this;
        this.UwMotorcadeMainVOs.insuredName = this.UwMotorcadeMainVO.insuredName;
        this.$fetch
          .post(this.HOST + this.$url.rtAddToInsured, this.UwMotorcadeMainVOs)
          .then(res => {
            console.log(res);
            if (res) {
              _this.resultSelect = res;
              this.SelectMsgDialog = true;
            }
          });
      } else {
        return;
      }
    },
    //历史赔付率
    selectHistory() {
      let key = {
        reportFormsType: "teamquality",
        comcode: this.UwMotorcadeMainVO.comcode,
        businessNo: this.UwMotorcadeMainVO.businessNo || "123", // 业务号
        taskType: "" // 业务类型
      };
      this.$fetch
        .get(this.HOST + this.$url.uwmainTeamquality, { params: key })
        .then(data => {
          console.log(typeof data);
          // window.open("http://www.baidu.com")
          window.open(data);
        });
    }
  },

  created() {}
};
</script>
<style scoped>
.peoCode {
  width: 150px;
  float: left;
}
.selectCode {
  position: relative;
  left: -22px;
  top: 0px;
}
.el-form >>> label {
  font-size: 12px;
}
.UwMotorcadeMainVOupdate >>> .el-form-item__label {
  background: #e8f6f9;
}
.UwMotorcadeMainVOupdate .el-form-item {
  margin-bottom: 20px;
}
.UwMotorcadeMainVOupdate >>> .text-center {
  margin-top: 20px;
}
.checkboxmargin >>> .el-checkbox {
  display: inline;
  text-align: left;
}
.checkboxmargin >>> .el-transfer-panel__header .el-checkbox__label span {
  display: none;
}
.checkboxmargin >>> .el-transfer-panel__item {
  display: block;
}
.checkboxmargin >>> .el-transfer-panel {
  width: 35%;
}
.checkboxmargin >>> .el-transfer__buttons {
  padding: 0 10px;
}
.acolor {
  color: #0066cc;
  text-decoration: none;
  margin-left: 13px;
}
.labelheight1 >>> .el-form-item__label,
.labelheight1 >>> .el-input__inner {
  line-height: 50px;
  height: 50px;
}
.querycenter {
  text-align: center;
}
.checkboxmargin >>> .el-dialog__footer {
  text-align: center;
}
.diacenter {
  text-align: center;
}
.diacenter >>> .el-dialog__footer {
  text-align: center;
}
</style>
