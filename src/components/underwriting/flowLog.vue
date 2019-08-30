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
                         <el-input v-model="flowlog.logName" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="流向"> 
                         <el-input v-model="flowlog.direction" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label="所处状态"> 
                         <el-input v-model="flowlog.direction" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>

               <el-col :span="8">
                     <el-form-item label="流入时间"> 
                         <el-input v-model="flowlog.index" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                     <el-form-item label="处理时间"> 
                         <el-input v-model="flowlog.logName" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="提交时间"> 
                         <el-input v-model="flowlog.direction" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>

                 <el-col :span="8">
                     <el-form-item label="操作员"> 
                         <el-input v-model="flowlog.logName" :disabled="true"></el-input>
                     </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="是否撤回业务"> 
                         <el-input v-model="flowlog.direction" :disabled="true"></el-input>
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
    
    this.parameter = this.$route.query;
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

