<template>
  <div>
    

    <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1" class="el_collapse_padding">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">请输入核保任务查询条件</div>
            </template>
          </el-collapse-item>
          <el-form label-width="120px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="业务号:">
                    <el-input v-model="recommended.businessNo"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="机构代码:">
                    <el-input v-model="recommended.comCod"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="状态:">
                  <el-checkbox-group v-model="recommended.businessStates">
                      <el-checkbox
                        class="check-group"
                        v-for="state in status"
                        :label="state.code"
                        :key="state.code"
                      >{{state.value}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
              </el-col>

            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="占用状态:" style="text-align:left">
                   <!-- {{ recommended.handleComCod }} -->
                    <el-checkbox v-model="recommended.occupyState" true-label="1"  false-label="0"> 已占用<span style="color:red">（针对当前用户）</span></el-checkbox>
                  
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提交时间:">
                  <el-date-picker
                    v-model="recommended.inputDateStart"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
               
               <el-col :span="8">
                <el-form-item label="至:">
                  <el-date-picker
                    v-model="recommended.inputDateEnd"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button size="mini" type="primary" @click="quryBusiness"> 查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse>
    </el-card>
    
      <!-- 基本信息 -->
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
                  :current-page="page.incompletePageNo"
                  :page-sizes="[10, 20, 50]"
                  :page-size="page.incompletePageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.incompleteTotal"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="businessList"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >
                <el-table-column prop="businessState" label="业务状态"></el-table-column>
                  <el-table-column label="业务号">
                    <template slot-scope="scope">
                      <el-button type="text" size="mini" @click="goDetail(scope.row)">{{scope.row.businessNo}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="riskCode" label="险种"></el-table-column>
                  <el-table-column prop="comCode" label="归属机构"></el-table-column>
                  <el-table-column prop="inputDate" label="提交时间"></el-table-column>
                  <el-table-column prop="userCode" label="处理人"></el-table-column>
                  <el-table-column prop="agentName" label="渠道名称"></el-table-column>
                  <el-table-column prop="agentCode" label="渠道码"></el-table-column>
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
                  :current-page="page.completePageNo"
                  :page-sizes="[10, 20, 50]"
                  :page-size="page.completePageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="page.completeTotal"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="businessListY"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >

                  <el-table-column prop="businessState" label="业务状态"></el-table-column>
                  <el-table-column label="业务号">
                    <template slot-scope="scope">
                      <el-button type="text" size="mini" @click="goDetail(scope.row)">{{scope.row.businessNo}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="riskCode" label="险种"></el-table-column>
                  <el-table-column prop="comCode" label="归属机构"></el-table-column>
                  <el-table-column prop="inputDate" label="提交时间"></el-table-column>
                  <el-table-column prop="userCode" label="处理人"></el-table-column>
                  <el-table-column prop="agentName" label="渠道名称"></el-table-column>
                  <el-table-column prop="agentCode" label="渠道码"></el-table-column>
              </el-table>
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
export default {
  name: "carAuditPage",
  data() {
    return {
      activeNames:[],
      recommended: {
        businessStates: [],
      },
      status,
      businessList: [], // 未处理状态 列表
      businessListY:[], // 已处理状态 列表
      page: { //  处理状态分页
        incompletePageSize: 10,
        incompletePageNo: 1,
        incompleteTotal: 0,
        completePageSize: 10,
        completePageNo: 1,
        completeTotal: 0
      },
      
    
      
        
    };
  },

  methods: {
    // 条数查询
    handleSizeChange(value){
      this.page.incompletePageSize= value
       this.quryBusiness()
    },
    // 分页查询
    handleCurrentChange(value){
      this.page.incompletePageNo = value  
       this.quryBusiness()
    },
    // 条数查询
    handleSizeChangeY(value){
      this.page.completePageSize = value  
       this.quryBusiness()
    },
    // 分页查询
    handleCurrentChangeY(value){
      this.page.completePageNo = value  
      this.quryBusiness()
    },

    quryBusiness(){
      if(!this.recommended.businessStates || this.recommended.businessStates.length ==0){
        this.$message.error('请选择任务状态');
        return
      }
      this.recommended.state = this.recommended.businessStates.join(',')
      this.$fetch.post(this.HOST + this.$url.recommendedQury,{...this.recommended,...this.page}).then(data => {
        console.log(data)
        if(data.incompleteList && data.incompleteList.length > 0) {
          this.businessList = data.incompleteList
          this.$set(this.page,'total',data.incompleteTotal)
          this.activeNames.push('1')
        }
        if(data.completeList && data.completeList.length > 0){
          this.businessListY =  data.completeList
          this.$set(this.page,'total',data.completeTotal)
          this.activeNames.push('2')
        }
      


      })
    },
    
    // 跳转详情
    goDetail(row){
      this.$router.push({
        path: '/recommendedModDetail',
        query: {
          row
        }
      })
    }
  },

  created() {
    
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

.float-right {
  text-align: center;
}
.check-group {
  margin-right: 15px;
}
.el-checkbox-group{
  text-align: left
}
</style>
<style>
</style>