<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-row class="pt10">
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">资料查看</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">上传影像</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="submit" size="mini">提交审核</el-button>
              <el-button type="primary" @click="giveUp" size="mini">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="carAuditPage" label-width="185px">
      <!-- 基本信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">基本信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务号:">
                  <el-input v-model="carAuditPage.basicInfo.businessNo"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="处理部门:">
                  <el-input v-model="carAuditPage.basicInfo.comCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item label="流转入间:">
                  <div class="block">
                    <el-date-picker v-model="carAuditPage.basicInfo.circulationTime" type="datetime" value-format="yyyy-MM-dd" placeholder="选择日期时间"></el-date-picker>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="流转状态:">
                  <el-input v-model="carAuditPage.basicInfo.circulationState"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 历次审核意见 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">历次审核意见</div>
            </template>
            <div v-for="(recordOpinion,index) in carAuditPage.recordOpinions " :key="index" 
              :class="(index + 1) != carAuditPage.recordOpinions.length? 'border-btm-gra' : ''">
               <el-row>
                    <el-col :span="8">
                      <el-form-item label="序号:">
                        <el-input v-model="recordOpinion.serialNo"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7">
                      <el-form-item label="处理部门:">
                        <el-input v-model="recordOpinion.comCode"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="9">
                      <el-form-item label="审核人员:">
                        <el-input v-model="recordOpinion.reviewerName"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="审核意见:">
                        <el-input v-model="recordOpinion.reviewOpinions"></el-input>
                      </el-form-item>
                    </el-col>
                </el-row>
            </div>
           
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <!-- 推荐送修码信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">推荐送修码信息</div>
            </template>
            <el-table
              :data="carAuditPage.recommendedModList"
              stripe
              tooltip-effect="dark"
              style="width: 100%"
              :header-cell-style="{background:'white'}"
            >
              <el-table-column align="center" prop="comparisonInfo" label="比对信息" ></el-table-column>
              <el-table-column align="center" prop="recommendedMod" label="推荐送修码"></el-table-column>
              <el-table-column align="center" prop="monopolyName" label="专管专营名称"></el-table-column>
              <el-table-column align="center" prop="businessNo" label="业务号"></el-table-column>
              <el-table-column align="center" prop="policyNo" label="保单号"></el-table-column>
              <el-table-column align="center" prop="endorseNo" label="批单申请号"></el-table-column>
              <el-table-column align="center" prop="applyNo" label="批单号码"></el-table-column>
              <el-table-column align="center" prop="riskCode" label="险种代码"></el-table-column>
              <el-table-column align="center" prop="channelCode" label="渠道码"></el-table-column>
              <el-table-column align="center" prop="channelName" label="渠道名称"></el-table-column>
            </el-table> 
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-form>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row>
            <el-col :span="24">
               <el-button type="primary" @click="submit" size="mini">提交审核</el-button>
              <el-button type="primary" @click="giveUp" size="mini">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-dialog title="核保任务提交" class="text-left" :visible.sync="outerVisible">
      <div id="form">
        <el-form ref="form" :model="form" label-width="185px" :rules="rules">
          <el-row>
            <el-col :span="10">
              <el-form-item label="当前提交节点"></el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="提交路径选择"></el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="分公司核保" prop="value"></el-form-item>
            </el-col>
            <el-col :span="12" style="textAlian='center'">
              <el-form-item label="请选择">
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
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="核保员意见:"
                v-model="textarea2"
              ></el-input>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-button type="primary" size="mini" class="mt10" @click="submitReview">提交任务</el-button>
            </el-col>
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
        @click="goback"
        size="mini"
        type="primary"
        class="mt10"
      >关闭当前窗口</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { setTimeout } from 'timers';

export default {
  name: "carAuditPage",
  data() {
    return {
      results: [
        {      
          kindCode: "111",
          kindName: "A0190Q",
          flag: "11",
          amount: "11",
          rate:"1",
          benchMarkPremium: "1",
          code1:"1",
          code2:"1",
          code3:"1",
          code4:"1",
        },
      ],
      correction: {},
      flagCode: false,
      fileList: [],
      parameter: {},
      activeNames: [],
      carAuditPage: {
        basicInfo: { }, //  基本信息
        recordOpinions: [], // 历次审核意见
        recommendedModList: [] // 推荐送修码信息
      },
      time1: "",
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
          label: "提交总公司"
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
    upload() {},
    goback(){
        this.$router.go(-1)
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
        this.goback()
      });
    },
    // 提交审核
    submit(){
      debugger
      let key = {
        businessNo:  12321,
        businessType: 'H',
        usercode: "A000"
      };
      this.$fetch.post(this.HOST + this.$url.saveUwPayee, key).then(data => {
        console.log(data);
        this.subOptions = data.selectPath;
        this.outerVisible = true;
      });
      // this.outerVisible= true
    },
    // 提交审核
    submitReview(){
      let key ={
        businessNo: this.parameter.businessNo || '123213'
      }
      this.$fetch.post(this.HOST + this.$url.undwrtSubmitReview,key).then(data =>{
        this.innerVisible = true
      })
    },
    BusinessNum(row) {
      // console.log(row)
      this.$router.push({ path: "/carContrast", query: { row: row.flag } });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    selectCode() {
      this.flagCode = true;
    },
    goTolinks(type){
      let key ={}
      switch(type){
          // 影像上传
          case 'uploadECM':
             key = {
              "businessNo": this.parameter.businessNo ||  "454654564564",
              "businessType": this.parameter.type  || "sfsdfsdf",
              "taskId": "123",
              "userName": "123",
              'userCode': '123',
              "comCode": "13000000"
              }

          this.$fetch.post(this.HOST + this.$url.uwmainUploadECM,key).then(data => {
            console.log(data)
            window.open(data)
          })
          break
           // 影像查看
          case 'getECM':
             key = {
              "businessNo": this.parameter.businessNo ||  "454654564564",
              "businessType": this.parameter.type  || "sfsdfsdf",
              "taskId": "sdsd",
              "userName": "123",
              'userCode': '123',
              "comCode": "13000000",
              "SaleImgFlag": '123'
              }

          this.$fetch.post(this.HOST + this.$url.uwmainGetECM,key).then(data => {
            console.log(data)
            window.open(data)
          })
          break    
        }
    },
    init() {
      debugger
      this.$fetch.post(this.HOST + this.$url.monopolyGetUwMonopolyAllInfo,
      {businessNo:this.parameter.row.businessNo}).then(data => {
        console.log(data)
        this.carAuditPage = data
      })

     
    }
  },

  created() {
    //设置collapse全部展开
    this.parameter = this.$route.query
    setTimeout(() => {
      this.setActiveNames();
      this.init();
    })
    
    
    
  }
};
</script>
<style scoped>
.btn {
  width: 104px;
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.el_collapse_padding >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
.text-left {
  text-align: center;
}
.float-right {
  text-align: center;
}
.border-btm-gra{
  border-bottom: solid 1px rgba(70, 90, 100, 0.6)
}
</style>
