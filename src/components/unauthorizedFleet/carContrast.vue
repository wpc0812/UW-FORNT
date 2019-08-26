<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">异地车队信息修改前后对比</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="insuranceType" label=""></el-table-column>
            <el-table-column prop="memberName" label="业务号"></el-table-column>
            <el-table-column prop="memberName" label="分公司"></el-table-column>
            <el-table-column prop="memberName" label="控制关系人标志"></el-table-column>
            <el-table-column prop="memberName" label="控制关系人名称"></el-table-column>
            <el-table-column prop="memberName" label="业务来源"></el-table-column>
            <el-table-column prop="memberName" label="车队车辆总数"></el-table-column>
            <el-table-column prop="memberName" label="预估保费规模(单位：万元)"></el-table-column>
          </el-table>
           <el-table
            stripe
            :data="results1"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="insuranceType" label=""></el-table-column>
            <el-table-column prop="memberName1" label="涉及车籍地">
              <template slot-scope="scope"> 
                <el-button type="text" size="small" @click="BusinessNum(scope.row)">{{scope.row.memberName1}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="memberName1" label="车队车辆主要车型">
              <template slot-scope="scope"> 
                <el-button type="text" size="small" @click="BusinessNum(scope.row)">{{scope.row.memberName1}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="memberName1" label="车辆主要使用地">
              <template slot-scope="scope"> 
                <el-button type="text" size="small" @click="BusinessNum(scope.row)">{{scope.row.memberName1}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="memberName2" label="承保条件"></el-table-column>
            <el-table-column prop="memberName2" label="控制方案"></el-table-column>
            <el-table-column prop="memberName2" label="控制结束日期"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
 </div>
</template>    
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "carContrast",
  data() {
    return {
       activeNames:"1",
       results: [
        { insuranceType:"原始值:",memberName: "111"},
        {insuranceType:"改后值:", memberName: "222" },

      ],
      results1: [
        { insuranceType:"原始值:",memberName1: "点击查看",memberName2: "111"},
        {insuranceType:"改后值:", memberName1: "点击查看" ,memberName2: "111"},
     
      ]
    };
  },

  methods: {
    // 设置collapse全部展开
    setActiveNames() {
      for (let i = 1; i <= 23; i++) {
        this.activeNames.push(JSON.stringify(i));
      }
    },
    BusinessNum(row){
      console.log("1")
    },
  },

  created() {
    //设置collapse全部展开
    // this.setActiveNames();
    this.parameter = this.$route.query;
  }
};
</script>
<style scoped>
.el-dialog__body__update >>> .el-dialog__body{
  padding-top:0; 
}
.el_collapse_padding >>>.el-collapse-item__content{
    padding-bottom:0px;
}
 .el-form-item{
    margin-bottom: 0;
}
.text-left{
    text-align: center;
}
.float-right{
    text-align: center;
}
</style>
