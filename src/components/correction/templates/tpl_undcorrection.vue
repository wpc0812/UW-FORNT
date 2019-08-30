<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请填写信息</div>
          </template>
          <el-form
            :disabled="flag == 'detail'"
            ref="UwctrlVO"
            :rules="rules"
            :model="UwctrlVO"
            label-width="150px"
          >
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:" prop="insuredFlag">
                    <el-select v-model="UwctrlVO.insuredFlag" placeholder="请选择">
                      <el-option
                        v-for="item in relationsss"
                        :key="item.label"
                        :label="item.value1"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:" prop="applicCode">
                    <el-input v-model="UwctrlVO.applicCode"
                      type="text"
                      maxlength="16"
                      minlength="16"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:" prop="insuredName">
                    <el-input v-model="UwctrlVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:" prop="businessNo">
                    <el-input v-model="UwctrlVO.businessNo"
                    type="text"
                      maxlength="22"
                      minlength="22"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="团单号:" prop="contractNo">
                    <el-input v-model="UwctrlVO.contractNo"
                    type="text"
                      maxlength="22"
                      minlength="22"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="折扣率上限:">
                    <el-input v-model="UwctrlVO.profitRateUp"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8" v-if="flag != 'detail'">
                  <el-form-item label="有效标志位:" prop="valid">
                    <el-select v-model="UwctrlVO.valid" clearable placeholder="请选择">
                      <el-option
                        v-for="item1 in flagss"
                        :key="item1.label"
                        :label="item1.value"
                        :value="item1.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核保类别:" prop="flag">
                    <el-select v-model="UwctrlVO.flag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in categoryss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8" v-if="flag != 'detail'">
                  <el-form-item label="控制结束日期:" prop="finishDate">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="手续费上限:">
                    <el-input v-model="UwctrlVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提示信息:">
                    <el-input v-model="UwctrlVO.message"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险跟单手续费上限:">
                    <el-input v-model="UwctrlVO.costRateBIUpper"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8" v-if="flag == 'change'">
                  <el-form-item label="号牌号码修改:" prop="licenseNo">
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="save()" v-if="flag != 'detail'" type="primary">保存</el-button>
                <el-button size="mini" @click="goBack()">返回</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- dialog弹出框 -->
    <el-dialog
      title="提示"
      :visible.sync="outerVisible"
      width="50%"
      class="dialog-footer-parent"
      :before-close="handleClose"
    >
      <span class="fontSizeTrue">确定保存吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false">确 定</el-button>
        <el-button @click="outerVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { relations } from "@/assets/js/baseCode";
export default {
  name: "undUwctrlVO",
   watch:{
    'UwctrlVO.businessNo':function(newVal,oldVal){
      let oldValue = oldVal ? oldVal.length : 0;
      if (newVal.length && newVal.length < oldValue ) {
        this.rules.businessNo.required=false
      }else if(newVal){
        // this.rules = Object.assign(this.rules,{businessNo:this.businessNo})
        // this.rules.businessNo = this.businessNo;
        this.rules.businessNo.required=true
      }
    } ,
    'UwctrlVO.contractNo':function(newVal,oldVal){
      let oldValue = oldVal ? oldVal.length : 0;
      if (newVal.length && newVal.length < oldValue ) {
        this.rules.contractNo.required=false
      }else if(newVal){
        this.rules.contractNo.required=true
      }
    } 
  },
  props: {
    flag: {
      type: String
    }
  },
  data() {
    return {
        rules : {
        insuredFlag: [
          { required: true, message: "关系人标志不能为空", trigger: ["blur"] }
        ],
        applicCode: [
            { required: true, message: "关系人代码16位", trigger: ["blur"]},
          { min: 16, max: 16, message: '长度为16个字符', trigger:  ["change",'blur'] }
        ],
        insuredName: [
          { required: true, message: "关系人名称必填", trigger: ["blur"] }
        ],
        valid: [
          { required: true, message: "有效标志选择", trigger: ["blur"] }
        ],
        flag: [
          { required: true, message: "核保类别必选", trigger: ["blur"] }
        ],
        finishDate: [
          { required: true, message: "结束日期必填", trigger: ["blur"] }
        ],
        licenseNo: [
          { required: true, message: "号码号牌修改？", trigger: ["blur"] }
        ],
           businessNo : [
        { required: false,  trigger: ["change",'blur'] },
        { min: 22, max: 22, message: '长度为22个字符', trigger:  ["change",'blur'] },

      ],
        contractNo : [
           { required: false, message: "团单号不能为空", trigger: ["change",'blur'] },
        { min: 22, max: 22, message: '长度为22个字符', trigger:  ["change",'blur'] },
        ],
      },

       UwctrlVO:{
        // "insuredFlag":"",
        // "applicCode":"",
        // "insuredName":"",
        // "businessNo":"",
        // "contractNo":"",
        // "profitRateUp":"",
        // "flag":"",
        // "licenseNo":"",
        // "costRateUpper":"",
        // "finishDate":"",
        // "operateDate":"",
        // "inputDate":"",
        // "valid":"",
        // "handlerUser":"",
        // "message":"",
        // "costRateBIUpper":"",
      },

      relationsss: [
        { value1: "1_被保险人",label:"1" },
        { value1: "2_投保人",label:"2" }
      ],
     
        categoryss: [
        { value: "1_人工核保",label:"1" },
        { value: "2_自动核保通过" ,label:"2"},
        { value: "3_自动打回" ,label:"3"}
      ],
    
      rtReported: {},
      flagss: [{ value: "0_无效" ,label:"0"}, { value: "1_有效",label:"1" }],
      relations,
      activeNames: ["1"],
      UwctrlVO: {},
      results: [],
      form: {},
      outerVisible: false
    };
  },

  computed: {},

  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
    },
    handleClose(done) {
      console.log("确认");
    },
    acd() {},
// 修改保存
    save() {
      this.$refs.UwctrlVO.validate((valids) => {
         console.log(valids)
        let uwctrlVO=this.UwctrlVO
      this.$fetch.post(this.HOST + this.$url.correctionUpdate,uwctrlVO)
      .then(res=> {
          console.log(res)
      }).catch(error=> {
       console.log(error)
      })
       })
    
    },

  },
  created() {
    // 数据渲染
    this.$fetch.get(this.HOST + this.$url.correctionShow, {params:{id:this.$route.query.row}}).then(res =>{
        console.log(res)
        this.UwctrlVO=res
        // this.results[0]=res.data
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.fontSizeTrue {
  font-size: 25px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
</style>
