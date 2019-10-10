<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title" class="collapseBack">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保任务查询条件</div>
          </template>
          <el-form :model="underwriting" label-width="140px">
            <el-row class="rowBackColor">
              <el-row>
                <el-col :span="7">
                  <el-form-item label="核保规则编号:">
                    <el-input v-model="underwriting.ruleNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="业务号:">
                    <el-input v-model="underwriting.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="机构代码:" class="text-left">
                    <el-input
                      style="width:60%"
                      v-model="underwriting.comCode"
                    ></el-input>
                    <span class="tip-color ml5" style="font-size: 12px">样例为:1501*,1502*</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
                  <el-form-item label="合同号:">
                    <el-input v-model="underwriting.contractNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="渠道码:">
                    <el-input v-model="underwriting.agentCode"></el-input>
                  </el-form-item>
                </el-col>
                
                <el-col :span="10">
                <el-form-item label="提交时间:">
                  <el-date-picker
                    v-model="underwriting.flowDate"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    time-arrow-control
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
                <el-col :span="14">
                  <el-form-item label="核保类型:" class="text-left">
                    <el-checkbox-group
                      class="inline-block"
                      @change="handleCheckedCitiesChange('taskType', underwriting.taskTypeList.length)"
                      v-model="underwriting.taskTypeList"
                    >
                      <el-checkbox
                        class="check-group"
                        v-for="underwritingType in underwritingTypes"
                        :label="underwritingType.code"
                        :key="underwritingType.code"
                      >{{underwritingType.value}}</el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox
                      class="check-group ml5"
                      :indeterminate="isIndeterminate.taskType"
                      v-model="checkAll.taskType"
                      @change="handleCheckAllChange('taskType')"
                    >所有</el-checkbox>
                  </el-form-item>
                </el-col>
                
                <el-col :span="10">
                <el-form-item label="被保险人:">
                  <el-input v-model="underwriting.insuredName"></el-input>
                </el-form-item>
              </el-col>
              </el-row>
              
              <el-col :span="14">
                <el-form-item label="占用状态:" class="text-left">
                  <el-checkbox-group v-model="underwriting.occupied">
                    <el-checkbox
                      class="check-group"
                      v-for="item of occupancyState"
                      :label="item.code"
                      :key="item.code"
                    >
                      {{item.value}}
                      <span class="tip-color" v-text="item.tip"></span>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>  
              <el-col :span="10">
                  <el-form-item label="状态:" class="text-left">
                    <el-checkbox-group v-model="underwriting.stateList">
                      <el-checkbox
                        class="check-group"
                        v-for="state in status"
                        :label="state.code"
                        :key="state.code"
                      >{{state.value}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>

              <el-col :span="24">
                <el-form-item label="审批类型:" class="text-left">
                  <el-checkbox-group
                    class="inline-block"
                    @change="handleCheckedCitiesChange('appTypes', underwriting.appTypes.length)"
                    v-model="underwriting.appTypes"
                  >
                    <el-checkbox
                      class="check-group"
                      v-for="item of typeApproval"
                      :label="item.code"
                      :key="item.code"
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                  <el-checkbox
                    class="check-group ml5"
                    :indeterminate="isIndeterminate.appTypes"
                    v-model="checkAll.appTypes"
                    @change="handleCheckAllChange()"
                  >所有</el-checkbox>
                </el-form-item>
              </el-col>
              
            
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="reset" size="mini">重置</el-button>


              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
  
    <el-card class="circular mt4 shadow" v-if=" list0['ST']||list0['GT'] ||  list0['E']||  list0['H'] ||underwriting.stateList.length > 0|| list1['ST']||list1['GT'] ||  list1['E']||  list1['H']">
      <el-collapse v-model="activeNames">
        
        <el-collapse-item name="2" v-if="underwriting.stateList.indexOf('0') > -1|| list0['ST']||list0['GT'] ||  list0['E']||  list0['H']">
          <template slot="title">
            <div class="title-blue-bar"></div> 
            <div class="card-title">未处理任务</div>
          </template>
          <el-collapse v-model="task.tab1" @change="untreated"> 
            <tpl-underwriting
              v-if="underwriting.taskTypeList.indexOf('ST') > -1 || list0['ST']"
              class="collapse-no-background"
              title="散单投保单"
              @paging="paging"
              @goDetail="goDetail"
              :results="list0['ST']"
              mark="untreated"
              :arrow="task.tab1.includes('散单投保单')"
              :total="list0.total['ST']"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单投保单"
              @paging="paging"
              v-if="underwriting.taskTypeList.indexOf('GT') >-1 || list0['GT']"
              @goDetail="goDetail"
              mark="untreated"
              class="collapse-no-background"
              :results="list0['GT']"
              :arrow="task.tab1.includes('团单投保单')"
              :total="list0.total['GT']"
            ></tpl-underwriting>
            <tpl-underwriting
              title="批单"
              @paging="paging"
              @goDetail="goDetail"
              mark="untreated"
              v-if="underwriting.taskTypeList.indexOf('E') > -1 || list0['E']"
              class="collapse-no-background"
              :results="list0['E']"
              :arrow="task.tab1.includes('批单')"
              :total="list0.total['E']"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单方案"
              mark="untreated"
              @paging="paging"
              v-if="underwriting.taskTypeList.indexOf('H') > -1 || list0['H']"
              @goDetail="goDetail"
              class="collapse-no-background"
              :results="list0['H']"
              :arrow="task.tab1.includes('团单方案')"
              :total="list0.total['H']"
            ></tpl-underwriting>
          </el-collapse>
        </el-collapse-item>
        <el-collapse-item name="3" v-if="underwriting.stateList.indexOf('1') > -1 || list1['ST']||list1['GT'] ||  list1['E']||  list1['H']">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">已处理任务</div>
          </template>
          <el-collapse v-model="task.tab2" @change="processed">
            <tpl-underwriting
              class="collapse-no-background"
              title="散单投保单"
              v-if="underwriting.taskTypeList.indexOf('ST') > -1 ||list1['ST']"
              :results="list1['ST']"
              @paging="paging"
              @goDetail="goDetail"
              mark="treated"
              :arrow="task.tab2.includes('散单投保单')"
              :total="list1.total['ST']"
            ></tpl-underwriting>
            <tpl-underwriting
              class="collapse-no-background"
              title="团单投保单"
              v-if="underwriting.taskTypeList.indexOf('GT') > -1 ||list1['GT']"
              @paging="paging"
              @goDetail="goDetail"
              :results="list1['GT']"
              mark="treated"
              :arrow="task.tab2.includes('团单投保单')"
              :total="list1.total['GT']"
            ></tpl-underwriting>
            <tpl-underwriting
              class="collapse-no-background"
              title="批单"
              @paging="paging"
              v-if="underwriting.taskTypeList.indexOf('E') > -1 ||list1['E']"
              @goDetail="goDetail"
              mark="treated"
              :results="list1['E']"
              :arrow="task.tab2.includes('批单')"
              :total="list1.total['E']"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单方案"
              mark="treated"
              v-if="underwriting.taskTypeList.indexOf('H') > -1 ||list1['H']"
              @paging="paging"
              @goDetail="goDetail"
              class="collapse-no-background"
              :results="list1['H']"
              :arrow="task.tab2.includes('团单方案')"
              :total="list1.total['H']"
            ></tpl-underwriting>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  typeApproval,
  status,
  occupancyState,
  underwritingTypes
} from "@/assets/js/baseCode";
import tplUnderwriting from "@/components/underwriting/templates/tpl_underwriting";
import { userInfo } from 'os';
import { decode } from 'querystring';
import { stat } from 'fs';


const [taskType, appTypes] = [
  ["ST", "GT", "E", "H"],
  ["a", "b", "c", "d", "e", "f", "g", "i", "h"]
];

export default {
  name: "Underwriting",

  components: { tplUnderwriting },

  data() {
    return {
      task: {
        tab1: [],
        tab2: []
      },
      list1: {
        total: {}
      },
      list0: {
        total:{}
      },
      activeNames: ["1", "2", "3"],
      underwriting: {
        stateList: ['0'],
        taskTypeList: taskType,
        occupied: ['0','1','2'],
        appTypes: appTypes,
        pageNo: 1,
        everyPage: 10
      },
      checkAll: {
        taskType: true,
        appTypes: true
      },
      isIndeterminate: {
        appTypes: false,
        taskType: false
      },
      typeApproval,
      occupancyState,
      status,
      underwritingTypes,
    };
  },

  computed: {
   
  },

  methods: {
    ...mapActions(["getUnderwriting"]),

    //重置
    reset() {
      this.underwriting = {
        stateList: ['0'],
        taskTypeList: taskType,
        occupied: ['0','1','2'],
        appTypes: appTypes,
        pageNo: 1,
        everyPage: 10
      };
      this.checkAll = {
        taskType: true,
        appTypes: true
      };
      this.isIndeterminate = {
        appTypes: false,
        taskType: false
      }
      this.getDate()
    },


    //查询
    query() {
      this.datePickerChange()
      /**
       * 处理查询时的类型和次数
       * 未选择状态和 类型时默认全部查询
       * 已选择，查询已选择的
       * 
       */
      let stateArry = ['0','1']
      let taskTypeArry = ["ST", "GT", "E", "H"]
      if(this.underwriting.stateList && this.underwriting.stateList.length > 0){
        stateArry = this.underwriting.stateList
      }
      if (this.underwriting.taskTypeList && this.underwriting.taskTypeList.length > 0 ) {
        taskTypeArry = this.underwriting.taskTypeList
      }
      for(let j = 0; j < stateArry.length; j++ ){
        for(let i = 0;i < taskTypeArry.length; i++){
         let key ={
           request:'LIST',
           userCode: '1111'
         }
        
         key.underwritingCondition = this.underwriting
         key.underwritingCondition.taskType = JSON.parse(JSON.stringify(taskTypeArry[i])) 
         key.underwritingCondition.state = JSON.parse(JSON.stringify(stateArry[j])) 
         this.getListDetail(JSON.parse(JSON.stringify(key)))
       }
      }
      
    },
    getListDetail(key) {
        // console.log(key.underwritingCondition.taskType,key.underwritingCondition.state)
        // console.log(typeof(key))
      this.$fetch.post(this.HOST + this.$url.uwmainGetUwList,key).then( data => {
        // console.log(data)
        if( data.state ==='1'){
          if (data.taskType == 'H'){
            this.$set(this.list1,data.taskType,data.businessHVOList)

            // this.list1[data.data.taskType] = data.data.businessHVOList
          } else{
            this.$set(this.list1,data.taskType,data.businessVOList)
            // this.$set(this.list1[data.data.taskType],data.data.businessVOList)
          }
          
          this.list1.total[data.taskType] =data.sumRecords

        }else{
         if (data.taskType == 'H'){
           this.$set(this.list0,data.taskType,data.businessHVOList)
            // this.list0[data.data.taskType] = data.data.businessHVOList
          } else{
             this.$set(this.list0,data.taskType,data.businessVOList)
            // this.list0[data.data.taskType] = data.data.businessVOList
          }
            this.list0.total[data.taskType] =data.sumRecords
        }
      })
    },
    //详情
    goDetail(row) {
      if(row.title === '团单方案') {
        this.$router.push({
          path: '/underwritingTeamDetails',
          query: {
            businessNo: row.businessNo,
            type: row.businessType
          }
        })
      } else{
        this.$router.push({
          path: '/underwritingDetails',
          query: {
            businessNo: row.businessNo,
            type: row.businessType
          }
        })
      }
      
    },
    datePickerChange(){
      console.log(this.underwriting.flowDate)
      if(this.underwriting.flowDate && this.underwriting.flowDate instanceof Array && this.underwriting.flowDate.length > 0) {
        this.underwriting.beginDate = this.underwriting.flowDate[0]
        this.underwriting.endDate = this.underwriting.flowDate[1]
      } else{
          this.underwriting.beginDate = ''
        this.underwriting.endDate = ''
      }
      
      console.log(this.underwriting)

    },
    //分页查询
    paging(obj) {
      let key = {
        request:'LIST',
        userCode: '1111',
        underwritingCondition:this.underwriting
              
      }
      // 处理查询页数 还是 条数
      if(obj.pageSize ) {
        key.underwritingCondition.everyPage = obj.pageSize 
      } else {
        key.underwritingCondition.pageNo = obj.pageNo 
      }
      if (obj.mark == "untreated") {
        switch (obj.title) {
          case "散单投保单":
          
            key.underwritingCondition.state = '0',
            key.underwritingCondition.taskType = 'ST',

            this.getListDetail(key)
            // this.UntreatedBulk(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "团单投保单":
            // this.UntreatedGroup(obj.pageSize, obj.pageNo); 
            //未处理-散单
              
              key.underwritingCondition.state = '0',
              key.underwritingCondition.taskType = 'GT',
              this.getListDetail(key)
            break;

          case "批单":
            // this.UntreatedBatch(obj.pageSize, obj.pageNo); 
            //未处理-散单
             
              key.underwritingCondition.state = '0',
              key.underwritingCondition.taskType = 'E',
              this.getListDetail(key)
            break;

          case "团单方案":
            // this.UntreatedBatch(obj.pageSize, obj.pageNo); 
            //未处理-散单
             
              key.underwritingCondition.state = '0',
              key.underwritingCondition.taskType = 'H',
              this.getListDetail(key)
            break;
        }
      } else {
        switch (obj.title) {
          case "散单投保单":
            // this.TreatedBulk(obj.pageSize, obj.pageNo); 
            //未处理-散单
             
              key.underwritingCondition.state = '1',
              key.underwritingCondition.taskType = 'ST',
              this.getListDetail(key)
            break;

          case "团单投保单":
            // this.TreatedGroup(obj.pageSize, obj.pageNo);
             //未处理-散单
             
              key.underwritingCondition.state = '1',
              key.underwritingCondition.taskType = 'GT',
              this.getListDetail(key)
            break;

          case "批单":
            // this.TreatedBatch(obj.pageSize, obj.pageNo); 
            //未处理-散单
            
              key.underwritingCondition.state = '1',
              key.underwritingCondition.taskType = 'E',
              this.getListDetail(key)
            break;

          case "团单方案":
            debugger
            // this.TreatedBatch(obj.pageSize, obj.pageNo); 
            //未处理-散单
             
              key.underwritingCondition.state = '1',
              key.underwritingCondition.taskType = 'E',
              this.getListDetail(key)
            break;
        }
      }
    },

    //全选
    handleCheckAllChange(flag) {
      if (flag == "taskType") {
        this.underwriting.taskTypeList = this.checkAll.taskType ? taskType : [];
        this.isIndeterminate.taskType = false;
      } else {
        this.underwriting.appTypes = this.checkAll.appTypes ? appTypes : [];
        this.isIndeterminate.appTypes = false;
      }
    },

    //单选
    handleCheckedCitiesChange(flag, len) {
      if (flag == "taskType") {
        this.checkAll.taskType = len === taskType.length;
        this.isIndeterminate.taskType = len > 0 && len < taskType.length;
      } else {
        this.checkAll.appTypes = len === appTypes.length;
        this.isIndeterminate.appTypes = len > 0 && len < appTypes.length;
      }
    },

    // 未处理展开关闭状态
    untreated(val) {
      this.task.tab1 = val;
    },

    // 已处理展开关闭状态
    processed(val) {
      this.task.tab2 = val;
    },
    getDate(){
      let date = new Date();
      let startDate = date.format("yyyy-MM-dd") + ' '+'00:00:00';
      date.setDate(date.getDate() + 1) 
      let endDate = date.format("yyyy-MM-dd")+ ' '+'23:59:59'
      console.log(startDate.toString())
      // this.underwriting.flowDate = [JSON.parse(JSON.stringify(startDate)),JSON.parse(JSON.stringify(endDate))]
      this.$set(this.underwriting,'flowDate',[startDate.toString(),endDate.toString()])

    }
  
  },
  created() {
    this.getDate()
   
  }
};
</script>
<style scoped>
.collapse-no-background >>> .el-collapse-item__header {
  background: none;
  height: 40px;
}
.circular /deep/ .collapseBack{
  background-color: #212224;
}
</style>
