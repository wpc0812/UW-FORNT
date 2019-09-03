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
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="payeeModificationReview.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="8">
                  <el-form-item label="机构代码:">
                    <el-input v-model="payeeModificationReview.comcode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收款人账户:" class="text-left">
                    <el-input v-model="payeeModificationReview.accountName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                 <el-col :span="8">
                  <el-form-item label="状态:" @change.native='changeRadio()' v-model="payeeModificationReview.state">
                    <el-radio v-model="radio" label="1">未处理</el-radio>
                    <el-radio v-model="radio" label="2">已处理</el-radio>
                  </el-form-item>
                </el-col>
              
                <el-col :span="8">
                  <el-form-item label="占用状态:" >
                    <el-checkbox v-model="payeeModificationReview.checked2" true-label="1"  false-label="0"> 已占用<span style="color:red">（针对当前用户）</span></el-checkbox>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="提交时间:">
                     <el-date-picker
                    v-model="flowDate"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    time-arrow-control
                    range-separator="至"
                    @blur='datePickerChange'
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
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
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">收款人信息</div>
          </template>
          <div class="text-left">
            <el-pagination
                  class="mb10 mt10"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :pager-count="5"
                  small
                  :current-page="1"
                  :page-sizes="[10, 20, 50]"
                  :page-size="page.pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.total"
                >
            </el-pagination>
          </div>
          
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="state" label="业务状态"></el-table-column>
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
            <el-table-column prop="inputDate" label="提交时间"></el-table-column>
            <el-table-column prop="usercode" label="处理人"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "payeeModificationReview",
  watch:{

  },
  data() {
    return {
      radiochange:"1",
      radio:"1",
      activeNames: ["1", "2"],
      relations,
      flowDate:[],
      payeeModificationReview: {},
      results: [ ],
      page: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
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
      datePickerChange( ){
      console.log(this.flowDate)
      this.beginDate = this.flowDate[0]
      this.endDate = this.flowDate[1]
      // console.log(this.underwriting)
      },

    reset() {},
    
    godetail(row) {
    
      this.$router.push({
        path: "/payeeModificationDetail",
        query: {
          businessNo: row.businessNo,
          businessType: 'A'
        }
      });
    },
      // 条数查询
    handleSizeChange(){

    },
    // 分页查询
    handleCurrentChange(){

    },
    // 查询
    query() {
      debugger
      this.$fetch.post(this.HOST + this.$url.getUwPayeeList,{
        "businessNo":"PDAA201545010000000083",
        "state":"0",
        "usercode":"A000",
        "accountName":"",
        "businessType":"A",
        "comcode":"32000000",
        "inputDateStart":null,
        "inputDateEnd":null,
        "pageNo":"1",
        "pageSize":"20"
      }).then( data => {
        console.log(data)
        this.results  = data
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
