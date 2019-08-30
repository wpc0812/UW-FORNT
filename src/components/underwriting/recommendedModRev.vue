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
                    <el-input v-model="recommended.handleComCode"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="机构代码:">
                    <el-input v-model="recommended.handleComCode"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="状态:">
                   <el-radio v-model="recommended.handleComCod" label="0"> 未处理</el-radio>
                    <el-radio v-model="recommended.handleComCod" label="1">已处理</el-radio>
                  </el-form-item>
              </el-col>

            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="占用状态:">
                   <!-- {{ recommended.handleComCod }} -->
                   已占用<span style="color:red">（针对当前用户）</span>
                  </el-form-item>
              </el-col>
              <el-col :span="15">
                <el-form-item label="提交时间:">
                  <el-date-picker
                    v-model="recommended.value1"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    >
                  </el-date-picker>
                </el-form-item>
              </el-col>
                <!-- <el-col :span="8">
                <el-form-item label="提交时间:">
                  
                </el-form-item>
              </el-col>
               <el-col :span="8">
                <el-form-item label="至:">
                  
                </el-form-item>
              </el-col> -->
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button size="mini" type="primary"> 查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse>
    </el-card>
    
      <!-- 基本信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
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
                  :current-page="1"
                  :page-sizes="[10, 20, 50]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="results"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >
                  <el-table-column prop="businessType" label="业务状态"></el-table-column>
                  <el-table-column label="业务号">
                    <template slot-scope="scope">
                      <el-button type="text" size="mini" @click="goDetail(scope.row.businessNo)">{{scope.row.businessNo}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="businessType" label="险种"></el-table-column>
                  <el-table-column prop="businessType" label="归属机构"></el-table-column>
                  <el-table-column prop="businessType" label="提交时间"></el-table-column>
                  <el-table-column prop="businessType" label="处理人"></el-table-column>
                  <el-table-column prop="businessType" label="渠道名称"></el-table-column>
                  <el-table-column prop="businessType" label="渠道码"></el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
      </el-card>
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="3">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">已处理状态</div>
            </template>
             <el-row class="text-left">
                <el-pagination
                  class="mb10 mt10"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :pager-count="5"
                  small
                  :current-page="1"
                  :page-sizes="[10, 20, 50]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                ></el-pagination>
              </el-row>
              <el-table
                  
                  :data="results"
                  tooltip-effect="dark"
                  :cell-style="{'text-align': 'center'}"
                  :header-cell-style="{'text-align': 'center'}"
                  :header-cell-class-name="'table-header-bg'"
                >

                  <el-table-column prop="businessType" label="业务状态"></el-table-column>
                  <el-table-column label="业务号">
                    <template slot-scope="scope">
                      <el-button type="text" size="mini" @click="goDetail(scope.row.businessNo)">{{scope.row.businessNo}}</el-button>
                    </template>
                  </el-table-column>
                  <el-table-column prop="businessType" label="险种"></el-table-column>
                  <el-table-column prop="businessType" label="归属机构"></el-table-column>
                  <el-table-column prop="businessType" label="提交时间"></el-table-column>
                  <el-table-column prop="businessType" label="处理人"></el-table-column>
                  <el-table-column prop="businessType" label="渠道名称"></el-table-column>
                  <el-table-column prop="businessType" label="渠道码"></el-table-column>
              </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "carAuditPage",
  data() {
    return {
      activeNames:'',
      recommended: {},
      results: [],
      total: 0,
      pageSize: 10,
        
    };
  },

  methods: {
    // 条数查询
    handleSizeChange(){

    },
    // 分页查询
    handleCurrentChange(){

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
</style>
<style>
</style>