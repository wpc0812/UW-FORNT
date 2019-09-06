<template>
  <div class="titlestyle">
    <div v-if=" type == 'CAR'">
        <el-card class="circular">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                    <div class="title-blue-bar"></div>
                    <div class="card-title">赔付率查询-客户</div>
                    </template>
                    <el-table
                        :data="deviceTableYL"
                        style="width: 100%">
                        <el-table-column prop="rateType" label="客户标示"  width="110"> </el-table-column>
                        <el-table-column prop="categoryRateA" label="证件号码" min-width="120" > </el-table-column>
                        <el-table-column prop="categoryRateB" label="综合赔付率"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateC" label="出险次数"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateD" label="已赚实收保费"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateE" label="已赚签单保费"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="实收保费"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="已决赔款"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="签单赔付率"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="签单保费"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="未决赔款"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="终止时间"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="起始时间"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="详细信息"  min-width="120"> </el-table-column>   
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        
        </el-card>
        <el-card class="circular">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                    <div class="title-blue-bar"></div>
                    <div class="card-title">赔付率查询-客户</div>
                    </template>
                    <el-table
                        :data="deviceTable"
                        style="width: 100%">
                        <el-table-column prop="rateType" label="投保单号"  width="110"> </el-table-column>
                        <el-table-column prop="categoryRateA" label="保单号"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateB" label="投保人"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateC" label="被保险人"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateD" label="起保日期"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateE" label="终保日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="险种"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="保额"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="保费"  min-width="120"> </el-table-column>     
                    </el-table>
                </el-collapse-item>
            </el-collapse>
            
        </el-card>
    </div>
    <div v-else>
         <el-card class="circular">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                    <div class="title-blue-bar"></div>
                    <div class="card-title">赔付率查询-客户</div>
                    </template>
                    <el-table
                        :data="deviceTableYL"
                        style="width: 100%">
                        <el-table-column prop="rateType" label="投保单号"  width="110"> </el-table-column>
                        <el-table-column prop="categoryRateA" label="保单号" min-width="120" > </el-table-column>
                        <el-table-column prop="categoryRateB" label="车牌号"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateC" label="投保人"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateD" label="被保险人"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateE" label="VIN/车架号"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="车辆种类"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="起保时间"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="终保时间"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="险种"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="签单保费"  min-width="120"> </el-table-column>   
                    </el-table>
                </el-collapse-item>
            </el-collapse>
        
        </el-card>
        <el-card class="circular">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                    <div class="title-blue-bar"></div>
                    <div class="card-title">赔付率查询-客户</div>
                    </template>
                    <el-table
                        :data="deviceTable"
                        style="width: 100%">
                        <el-table-column prop="rateType" label="报案号"  width="110"> </el-table-column>
                        <el-table-column prop="categoryRateA" label="立案号"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateB" label="赔案号"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateC" label="保单号"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateD" label="被保险人"  min-width="120"> </el-table-column>
                        <el-table-column prop="categoryRateE" label="起保日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="出险日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="报案日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="立案日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="结案日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="注销日期"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="责任赔款"  min-width="120"> </el-table-column>     
                        <el-table-column prop="categoryRateE" label="总赔付金额"  min-width="120"> </el-table-column>   
                        <el-table-column prop="categoryRateE" label="地址"  min-width="120"> </el-table-column>     


                    </el-table>
                </el-collapse-item>
            </el-collapse>
            
        </el-card>
    </div>
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

