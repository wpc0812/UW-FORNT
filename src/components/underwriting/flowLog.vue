<template>
  <div class="titlestyle">
     <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">流转记录</div>
          </template>
          
          <div v-for="(flowlog,index) in flowlogList" 
          :key="index" :class="(index +1 ) != flowlogList.length? 'border-btm-gra' : ''" >
            <el-form label-width="120px">
              <el-row :gutter="20">
                  <el-col :span="8">
                      <el-form-item label="序号"> 
                          <el-input v-model="flowlog.id" :disabled="true"></el-input>
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
          </div>
            
          </el-collapse-item>
        </el-collapse>
      </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "flowLog",
  data() {
    return {
      flowlogList: [],
      activeNames:['1']
    };
  },

  methods: {
    
  },
  

  created() {
    
    this.parameter = this.$route.query; 
    let keyWords = {
      comCode: '12000000',
      businessNo: 'asdasdasd',
      taskType: 'H',
      taskId:"E"
    }
    this.$fetch.get(this.HOST + this.$url.undwrtFlowRecord, {params:keyWords}).then(data => {
      this.flowlogList = data

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
.border-btm-gra{
  border-bottom: solid 1px rgba(70, 90, 100, 0.6)
}
</style>

