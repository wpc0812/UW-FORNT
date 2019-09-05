<template>
  <div class="titlestyle">
    <el-card class="circular">
        <el-form label-width="120px">
            <el-row :gutter="20">
                <el-col :span="8">
                     <el-form-item label="序号"> 
                         <el-input v-model="flowlog.index" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                     <el-form-item label="节点名称"> 
                         <el-input v-model="flowlog.curFlow" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="流向"> 
                         <el-input v-model="flowlog.flowNext" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label="所处状态"> 
                         <el-input v-model="flowlog.state" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>

               <el-col :span="8">
                     <el-form-item label="流入时间"> 
                         <el-input v-model="flowlog.indate" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                     <el-form-item label="处理时间"> 
                         <el-input v-model="flowlog.acceptDate" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="提交时间"> 
                         <el-input v-model="flowlog.outdate" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>

                 <el-col :span="8">
                     <el-form-item label="操作员"> 
                         <el-input v-model="flowlog.userName" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="是否撤回业务"> 
                         <el-input v-model="flowlog.isRevoke" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>

            </el-row>
        </el-form>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "flowLogView",
  data() {
    return {
      flowlog: {

      }
    };
  },

  methods: {
    
  },
  

  created() {
    debugger
    this.parameter = this.$route.query; 
    let keyWords = {
      comCode: '00000000',
      businessNo: 'asdasdasd',
      taskType: 'H',
      taskId:"E"
    }
    this.$fetch.post(this.HOST + this.$url.undwrtFlowRecord,keyWords).then(data => {
      console.log(data)
    })
  }
};
</script>
<style scoped>
.titlestyle { 
    margin-top: 30px
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
</style>

