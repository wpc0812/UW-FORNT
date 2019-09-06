<template>
  <div class="titlestyle">
    <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">查看盈利类别占比</div>
            </template>
            <el-table
                :data="deviceTableYL"
                style="width: 100%">
                <el-table-column prop="rateType" label="指标类别"  width="110"> </el-table-column>
                <el-table-column prop="categoryRateA" label="盈利类别A类" min-width="120" > </el-table-column>
                <el-table-column prop="categoryRateB" label="盈利类别B类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateC" label="盈利类别C类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateD" label="盈利类别D类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateE" label="盈利类别E类"  min-width="120"> </el-table-column>   
            </el-table>
          </el-collapse-item>
        </el-collapse>
        
    </el-card>
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
                <el-table-column prop="rateType" label="指标类别"  width="110"> </el-table-column>
                <el-table-column prop="categoryRateA" label="风险类别A类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateB" label="风险类别B类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateC" label="风险类别C类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateD" label="风险类别D类"  min-width="120"> </el-table-column>
                <el-table-column prop="categoryRateE" label="风险类别E类"  min-width="120"> </el-table-column>     
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
          
      ],
      deviceTableYL: [],
      activeNames: ['1']
    };
  },

  methods: {
    
  },
  

  created() {
    
    this.parameter = this.$route.query; 
    let keyWords = {
      "businessNo": this.parameter.businessNo || "454654564564",
      "taskType": this.parameter.taskType ||"sdsd"
      }

    this.$fetch.post(this.HOST + this.$url.riskTypeRateInfo,keyWords).then(data => {
      console.log(data)
      if (data && data.length > 0) {
        for( let i =0; i < data.length ;i ++){
          switch (data[i].rateType){
            case "盈利目标占比":
              this.deviceTableYL.push(data[i])
            break
             case "盈利实际占比":
              this.deviceTableYL.push(data[i])
            break
             case "风险目标占比":
              this.deviceTable.push(data[i])
            break
             case "风险实际占比":
              this.deviceTable.push(data[i])
            break
            
          }
        }
      }
      
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
.circular{
   padding-bottom: 15px
}
</style>

