<template>
  <div class="titlestyle">
    <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">查看风险类别占比</div>
            </template>
            <el-table
                :data="deviceTable"
                style="width: 100%">
                <el-table-column prop="date" label="指标类别"  width="110"> </el-table-column>
                <el-table-column prop="date1" label="盈利类别A类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="盈利类别B类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="盈利类别C类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="盈利类别D类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="盈利类别E类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="风险类别A类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="风险类别B类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="风险类别C类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="风险类别D类"  width="110"> </el-table-column>
                <el-table-column prop="date" label="风险类别E类"  width="110"> </el-table-column>     
            </el-table>
          </el-collapse-item>
        </el-collapse>
        
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

      },
      deviceTable: [
          {date: '指标类别', date1: '123'},
          {date: '目标占比', date1: '123'},
          {date: '实际占比', date1: '123'},
      ],
      activeNames: ['1']
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
    // this.$fetch.post(this.HOST + this.$url.deviceDetails,keyWords).then(data => {
    //   console.log(data)
    // })
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
.circular{
   padding-bottom: 15px
}
</style>

