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
                    <el-button v-model="UwMotorcadeMainVO.lastFourYearPayPercent" @click="selectHistory" size="small" text="primary">查询</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="车队车辆总数:" prop="carcountAll">
                    <el-input v-model="UwMotorcadeMainVO.carcountAll"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="预估保费规模(单位:万元):"
                    prop="estimatedPremiumSize"
                    label-width="175px"
                    class="text-left"
                  >
                    <el-input v-model="UwMotorcadeMainVO.estimatedPremiumSize"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="超分公司权限车辆总数:" prop="uppercarcount" class="text-left">
                    <el-input v-model="UwMotorcadeMainVO.uppercarcount" ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="超分公司权限车辆种类:" prop="uppercartype">
                    <el-input 
                      v-model="uppercartypeLabel"
                      placeholder="点击选择"
                      @focus='openTransfer(carTypeCodes,UwMotorcadeMainVO.uppercartype,"uppercartype")'
                      class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆主要车型:" prop="carmainmodel" class="text-left">
                    <el-input 
                      v-model="carmainmodelLabel"
                      placeholder="点击选择"
                      @focus='openTransfer(carTypeCodes,UwMotorcadeMainVO.carmainmodel,"carmainmodel")'
                      class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆主要使用地:" prop="carmainarea" class="text-left">
                    <el-input 
                      v-model="carmainareaLabel"
                      placeholder="点击选择"
                      @focus='openTransfer(provinceCodes,UwMotorcadeMainVO.carmainarea,"carmainarea")'
                      class="labelmargin"
                    >
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" prop="finishdate">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.finishdate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险手续费上限(%):" prop="costRateUpper" class="text-left">
                    <el-input v-model="UwMotorcadeMainVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="监控方案:" class="text-left">
                    <el-input
                      type="textarea"
                      :rows="1"
                      v-model="UwMotorcadeMainVO.monitoringProgramme"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="承保条件:" prop="underWritingCondition">
                    <el-input
                      type="textarea"
                      :rows="1"
                      v-model="UwMotorcadeMainVO.underWritingCondition"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关联关系人名称:" class="text-left">
                    <el-input type="textarea" :rows="1" v-model="UwMotorcadeMainVO.insuredNameSUB"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="备注:" class="text-left">
                    <el-input type="textarea" :rows="1" v-model="UwMotorcadeMainVO.remark"></el-input>
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
    <el-dialog title="请选择"  class="checkboxmargin" :visible.sync="transferDialog" width="40%" :before-close="handleClose">
          <div>
            <el-transfer 
              v-model="transferItem" 
              :data="transferItems" 
              :titles="['未选择', '已选择']" 
              @change="transferChange"
              :props="{key: 'value',label: 'label'}">
            </el-transfer>
            
          </div>
          <span slot="footer" class="dialog-footer">
              <el-button @click="transferDialog = false">取 消</el-button>
              <el-button type="primary" @click="valLen()">确 定</el-button>
          </span>
      </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {carTypeCodes, provinceCodes } from "@/assets/js/baseCode";
import utils from "../../utils/index";

export default {
  name: "otAdd",

  data() {

    return {
      val: [],
      transferItems: [], // 穿梭框 数据
      transferItem: [], // 穿梭框 绑定数据
      transfetTitle:['已选择','为选择'],
      carTypeCodes,  // 车型代码
      provinceCodes , // 省份代码
      uppercartypeLabel: '', // input显示 label
      carmainmodelLabel:'',// input显示 label
      carmainareaLabel:'',
      transferDialog: false,
      transferType: '',
      carCadastralVisible: false,
      UwMotorcadeMainVO: {
        comcode: "",
        insuredflag: "",
        insuredName: "",
        insuredCode: "",
        businessNature: "",
        carcountAll: "",
        estimatedPremiumSize: "", 
        uppercarcount: "",
        uppercartype: [],
        carmainmodel:[],
        carmainarea: [],
        finishdate: "",
        costRateUpper: "",
        underWritingCondition: ""
      },
      relationss: [
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      carmainmodelvalue: [
        { value: "新车车队", label: "1" },
        { value: "转入车队", label: "2" },
        { value: "续保车队", label: "3", disabled: true }
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
          { required: true, message: "车队车辆总数必填", trigger: ["blur"] }
        ],
        estimatedPremiumSize: [
          { required: true, message: "预估保费规模必填", trigger: ["blur"] }
        ],
        uppercarcount: [
          { required: true, message: "超分公司权限车辆总数", trigger: ["blur"] } 
        ],
        uppercartype: [
          { required: true, message: "超分公司权限车辆种类", trigger: ["change"] }
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
          { required: true, message: "控制结束日期必选", trigger: ["change"] }
        ],
        costRateUpper: [
          { required: true, message: "商业险手续费上限必填", trigger: ["blur"] }
        ],
        underWritingCondition: [
          { required: true, message: "承保条件必填", trigger: ["blur"] }
        ]
      },
      activeNames: ["1"],
      flags: true,
      formData: {},
    };
  },
  computed: {},
  methods: {
      // 穿梭框 change 事件
    transferChange(value, direction, movedKeys){
      // console.log(this.datas)
      // this.UwMotorcadeMainVO.carCadastral=value;
      // console.log(value, direction, movedKeys)
    },
    handleClose: function() {
    this.transferDialog = false;
    },
    // 获取 页面显示的 label  (源数据，改变的数据)
    getShowlabel(items,options){
      let label =[]
      for(let i = 0; i < items.length; i++){
        for(let j = 0; j < options.length; j++){
          // console.log(items[i].value,options[j])
          if(items[i].value === options[j]){
            label.push(items[i].label)
          }
        }
      }
      return utils.arrayToString(label)
    },
    //点击弹出框确定
    valLen(){
     switch ( this.transferType ) {
       case 'uppercartype':
         this.UwMotorcadeMainVO.uppercartype = this.transferItem
         this.uppercartypeLabel = this.getShowlabel(this.transferItems,this.transferItem) 
       
         break;
         case 'carmainmodel':
         this.UwMotorcadeMainVO.carmainmodel = this.transferItem
         this.carmainmodelLabel = this.getShowlabel(this.transferItems,this.transferItem)
       
         break;
         case 'carmainarea':
         this.UwMotorcadeMainVO.carmainarea = this.transferItem
         this.carmainareaLabel = this.getShowlabel(this.transferItems,this.transferItem)
       
         break;
     
     }
     this.transferDialog = false;
      
    },
    // 点击弹出
    openTransfer(items, item,type){
     
      this.transferItems = items //总数据data
      this.transferItem = item  //返回或者传入的数据
      this.transferType = type  //类型（省份/车型）
      this.transferDialog =true
    },

    //保存
    save() {
      this.$refs.UwMotorcadeMainVO.validate(valid => {

        if (valid) {
            let uwMotorcadeMainVO = JSON.parse(JSON.stringify(this.UwMotorcadeMainVO)) 
          uwMotorcadeMainVO.uppercartype = utils.arrayToString(uwMotorcadeMainVO.uppercartype), // 入参

          uwMotorcadeMainVO.carmainmodel = utils.arrayToString(uwMotorcadeMainVO.carmainmodel), // 入参
          uwMotorcadeMainVO.carmainarea = utils.arrayToString(uwMotorcadeMainVO.carmainarea), // 入参
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
      // this.$router.push({path: '/selectMSg',query:{row:this.UwMotorcadeMainVO.insuredCode}})
      this.$router.push({ path: "/selectMSg" });
    },
    //通过关系人代码
    selectName() {
      //  this.$router.push({path: '/selectMSg',query:{row:this.UwMotorcadeMainVO.insuredName}})
      this.$router.push({ path: "/selectMSg" });
      
    },
    //历史赔付率
    selectHistory(){
     let  key = { 
            'reportFormsType': 'teamquality',
            'comcode': this.UwMotorcadeMainVO.comcode,
            'businessNo': this.UwMotorcadeMainVO.businessNo || '123', // 业务号
            'taskType': ''// 业务类型
          }
           this.$fetch.get(this.HOST + this.$url.uwmainTeamquality, {params:key}).then(data => {
            console.log(typeof data)
            // window.open("http://www.baidu.com")
            window.open(data)
          })
    },
  },
  created() {
  }
};
</script>
<style scoped>
/* .el-input--small >>> .el-input__inner {
  height: 25px;
  line-height: 25px;
} */
.peoCode {
  width: 150px;
  float: left;
}
/* .selectCode {
  display: inline-block;
  width: 40px;
  height: 25px;
  margin-top: 3px;
  padding: 2px 2px 0 2px;
} */
.selectCode {
  position: relative;
  left: -22px;
  top: 0px;
}

.el-form >>> label {
  font-size: 12px;
}
/* .UwMotorcadeMainVOupdate >>>.el-input__inner{
  border-radius: 0px;
    } */
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
</style>
