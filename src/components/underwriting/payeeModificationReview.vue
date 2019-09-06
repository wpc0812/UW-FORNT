<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保任务查询条件</div>
          </template>
          <el-form ref="form" :model="payeeModificationReview" label-width="100px">
            <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="payeeModificationReview.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="8">
                  <el-form-item label="机构代码:">
                    <el-input v-model="payeeModificationReview.comCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收款人账户:" class="text-left">
                    <el-input v-model="payeeModificationReview.accountName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="占用状态:" >
                    <el-checkbox v-model="payeeModificationReview.occupyState" 
                    true-label="1"  false-label="0"> 已占用<span style="color:red">（针对当前用户）</span></el-checkbox>
                  </el-form-item>
                </el-col>
                    <el-col :span="8">
                      <el-form-item label="提交时间:">
                        <el-date-picker
                          v-model="payeeModificationReview.inputDateStart"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          type="datetime"
                          placeholder="选择日期时间">
                        </el-date-picker>
                      </el-form-item>
                     </el-col>
                    <el-col :span="8">
                      <el-form-item label="至:">
                        <el-date-picker
                          v-model="payeeModificationReview.inputDateEnd"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          type="datetime"
                          placeholder="选择日期时间">
                        </el-date-picker>
                      </el-form-item>
                    </el-col>
                     <el-col :span="8">
                      <el-form-item label="状态:" class="text-left">
                      <el-checkbox-group v-model="payeeModificationReview.states">
                      <el-checkbox
                        class="check-group"
                        v-for="state in status"
                        :label="state.code"
                        :key="state.code"
                      >{{state.value}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col> 
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">未处理状态</div>
            </template>
             <el-row class="text-left">
                <el-pagination
                  class="mb10 mt10"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :pager-count="5"
                  small
                  :current-page="page.untreatedPageSize"
                  :page-sizes="[10, 20, 50]"
                  :page-size="page.incompletePageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.untreatedTotal"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="untreatedList"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >
                  <el-table-column prop="businessState" label="业务状态"></el-table-column>
                  <el-table-column prop="businessNo" label="业务号">
                    <template slot-scope="scope">
                      <el-button
                        type="text"
                        size="mini"
                        @click="godetail(scope.row)"
                      >{{scope.row.businessNo}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="accountName" label="收款人账户"></el-table-column>
                  <el-table-column prop="riskCode" label="险种"></el-table-column>
                  <el-table-column prop="comName" label="归属机构"></el-table-column>
                  <el-table-column prop="submitDate" label="提交时间"></el-table-column>
                  <el-table-column prop="userCode" label="处理人"></el-table-column>
         
                </el-table>
            </el-collapse-item>
        </el-collapse>
      </el-card>
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">已处理状态</div>
            </template>
             <el-row class="text-left">
                <el-pagination
                  class="mb10 mt10"
                  @size-change="handleSizeChangeY"
                  @current-change="handleCurrentChangeY"
                  :pager-count="5"
                  small
                  :current-page="page.processedPageNo"
                  :page-sizes="[10, 20, 50]"
                  :page-size="page.processedPageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.processedTotal"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="processedList"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >
              <el-table-column prop="businessState" label="业务状态"></el-table-column>
              <el-table-column prop="businessNo" label="业务号">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="mini"
                    @click="godetail(scope.row)"
                  >{{scope.row.businessNo}}</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="accountName" label="收款人账户"></el-table-column>
              <el-table-column prop="riskCode" label="险种"></el-table-column>
              <el-table-column prop="comName" label="归属机构"></el-table-column>
              <el-table-column prop="submitDate" label="提交时间"></el-table-column>
              <el-table-column prop="userCode" label="处理人"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
import {
  typeApproval,
  status,
  occupancyState,
  underwritingTypes
} from "@/assets/js/baseCode";
import utils from '../../utils/index'
export default {
  name: "payeeModificationReview",
  watch:{

  },
  data() {
    return {
      status,
      radiochange:"1",
      radio:"1",
      activeNames: ["1", "2"],
      relations,
      payeeModificationReview: {
        states: []
      },
      processedList: [ ],
      untreatedList: [],
      page: {
         processedPageNo:1,
         processedPageSize: 10,
         processedTotal: 0,
         untreatedPageNo: 1,
         untreatedTotal: 0,
         untreatedPageSize: 10,
      }

    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getpayeeModificationReview"]),
    clickitem(){
    
        if(this.radiochange==1){
        this.radiochange=0
        }else{
           this.radiochange=1
        }  
        console.log(this.radiochange)
    },
    changeRadio(){
      console.log(this.radio)
    },

    godetail(row) {
    
      this.$router.push({
        path: "/payeeModificationDetail",
        query: row
      });
    },
       // 条数查询
    handleSizeChange(value){
      this.page.incompletePageSize= value
       this.query()
    },
    // 分页查询
    handleCurrentChange(value){
      this.page.incompletePageNo = value  
       this.query()
    },
    // 条数查询
    handleSizeChangeY(value){
      this.page.completePageSize = value  
       this.query()
    },
    // 分页查询
    handleCurrentChangeY(value){
      this.page.completePageNo = value  
      this.query()
    },
    // 查询
    query() {
       if(!this.payeeModificationReview.states || this.payeeModificationReview.states.length ==0){
        this.$message.error('请选择任务状态');
        return
      }
      this.payeeModificationReview.state = utils.arrayToString(this.payeeModificationReview.states)
      this.$fetch.post(this.HOST + this.$url.payeeGetUwPayeeList,
      {...this.payeeModificationReview,
      ...this.page}).then( data => {
        console.log(data)
        if(data.untreatedList && data.untreatedList.length > 0){
          this.untreatedList = data.untreatedList
          this.page.untreatedTotal = Number(data.untreatedTotal) 
          
        }
        if(data.processedList && data.processedList.length > 0){
          this.processedList = data.processedList
          this.page.processedTotal = Number(data.processedTotal) 

        }
       
      })
    },

    // 未处理展开关闭状态
    untreated(val) {
      this.task.tab1 = val;
    },

    // 已处理展开关闭状态
    processed(val) {
      this.task.tab2 = val;
    }
  },
  created() {}
};
</script>
<style scoped>
.userthis{
  color: red;
}
</style>
