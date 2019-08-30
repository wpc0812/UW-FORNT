<template>
  <div>
    <!-- 增加条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">增加核保员信息</div>
          </template>
          <el-form ref="rtReportedFrom" :model="rtReported" label-width="150px" :rules="rtReportedRules">
            <el-row>
              <el-col :span="8">
                <el-form-item label="员工姓名:" prop="userName">
                  <el-input v-model="rtReported.userName" :disabled="this.routeType === 'READY'"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="员工代码:" prop="userCode">
                  <el-input v-model="rtReported.userCode" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="有效标志:" prop="vaild">
                  <el-select :disabled="this.routeType === 'READY'" v-model="rtReported.vaild" clearable placeholder="请选择">
                    <el-option
                      v-for="relation in flags"
                      :key="relation.value"
                      :label="relation.label"
                      :value="relation.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              
              <el-col :span="8">
                <el-form-item label="员工邮箱:" prop="mailbox">
                  <el-input :disabled="this.routeType === 'READY'" v-model="rtReported.mailbox"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="自动分发标志:">
                  <el-select :disabled="this.routeType === 'READY'" v-model="rtReported.autoDistributeFlag" clearable placeholder="请选择">
                    <el-option
                      v-for="(relation,index) in relations"
                      :key="index"
                      :label="relation.label"
                      :value="relation.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机号码:" prop="iphone">
                  <el-input :disabled="this.routeType === 'READY'" v-model="rtReported.phonecode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="自动推送条数:" prop="autoPushNum">
                  <el-input :disabled="this.routeType === 'READY'" v-model="rtReported.autoPushNum"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input :disabled="this.routeType === 'READY'" v-model="rtReported.telephone"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-center" v-if="this.routeType !== 'READY'">
                <el-button size="mini" @click="save">增加</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 弹窗 -->
    <!-- <el-dialog title="提示" class="dialog" :visible.sync="outerVisible" width="30%">
      <span class="fontSize">确定增加该人员???</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false">确 定</el-button>
        <el-button @click="outerVisible = false">取 消</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
// let [inputValidator, selectValidator] = [
//   { required: true, message: "请录入", trigger: "blur" },
//   // { required: true, message: "请选择哦", trigger: "change" }
// ];

export default {
  name: "addwriterInfor",
  data() {
    var pushNum =/^([1-9]|10)$/
    var autoPushNumRolus =(rule, value, callback) =>{
      if(!value){
        callback(new Error('请输入自动推送条数!'));
      } else if(!pushNum.test(Number(value))) {
        callback(new Error('自动推送条数1到10!'));
      } else{
        callback()
      }
      // if(pushNum.test()){

      // }
    }
    return {
      formData: {},
      routeType: '',
      outerVisible: false,
      activeNames: ["1"],
      flags: [{ value: "0_无效" }, { value: "1_有效" }],
      relations: [{ value: "0_停止分发" }, { value: "1_继续分发" }],
      rtReported: {
        userCode: this.$route.query.userCode
      },
      pageSize: 10,
      underwriterInfor: {},
      rtReportedRules:{
        userName:[ { required: true, message: '请输入员工姓名', trigger: 'blur' }],
        vaild:[ { required: true, message: '请选择有效标志', trigger: 'change' }],
        userCode:[ { required: true, message: '请输入员工代码', trigger: 'blur' }],
        mailbox:[ { required: true, message: '请输入员工邮箱', trigger: 'blur' }],
        autoPushNum:[ {required: true, validator: autoPushNumRolus, trigger: 'blur'} ]

      }
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),

    query() {
      this.getunderwriterInfor(this.underwriterInfor);
    },
    save() {
      this.$refs.rtReportedFrom.validate((valid) => {
          if (valid) {
            // 判断是增加还是修改核保人员
            if (tthis.routeType === 'ADD'){
              this.addCheker()
            } else if(this.routeType === 'CHANGE'){
              this.updateCheker()
            }
          } else {
            
            return false;
          }
      });
    
      // if (1) {
      //   this.$confirm("确认是否保存该信息~", "提示", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning"
      //   })
      //     .then(() => {
      //       this.$message({
      //         type: "success",
      //         message: "保存成功!"
      //       });
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: "info",
      //         message: "已取消保存"
      //       });
      //     });
      // }
    },
    // 增加 核保人员
    addCheker() {
      this.$fetch.post(this.HOST + this.$url.underWriterInforAddcheker,this.rtReported).then(data =>{
          console.log(data)
      })
    },
    // 修改核保人员
    updateCheker(){
      this.$fetch.post(this.HOST + this.$url.underWriterInforUpdateCkecker,this.rtReported).then(data =>{
          console.log(data)
      })
    },
    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    },
     // 查询 核保人员详细信息
    getCheckerInfo(userCode){
      this.$fetch.post(this.HOST + this.$url.underWriterInforQueryCkecker,{'usercode':userCode }).then(data =>{
        this.rtReported = data
      })
    }
  },
  created() {
    // this.ruleForm();
    console.log(this.$route)
    this.routeType = this.$route.query.type
    switch( this.routeType) {
      case 'CHANGE':
      case 'READY':
        this.getCheckerInfo(this.$route.query.userCode)
        break 
      case 'ADD' :
        this.webPostion = '增加核保员信息'
      break
    }
  }
};
</script>
<style scoped>
.fontSize {
  font-size: 20px;
}
.dialog >>> .el-dialog__footer {
  text-align: center;
}
</style>
