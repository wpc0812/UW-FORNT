<template>
  <div>
      <div>
        <i class="el-icon-video-play"></i> 散单投保单
      </div>
      <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%"
      :header-cell-style="{background:'#cbecf3'}"
      >
      <el-table-column
        prop="state"
        label="业务状态"
        >
      </el-table-column>
      <el-table-column
        prop="NO"
        label="业务号"
       >
      </el-table-column>
      <el-table-column
        prop="plate"
        label="车牌号"
       >
      </el-table-column>
       <el-table-column
        prop="plate"
        label="车牌号"
       
        >
      </el-table-column>
       <el-table-column
        prop="trench"
        label="渠道名称"
        >
      </el-table-column>
       <el-table-column
        prop="insured"
        label="被保险人名称"
        >
      </el-table-column>
       <el-table-column
        prop="organisation"
        label="归属机构"
        >
      </el-table-column>
       <el-table-column
        prop="level"
        label="任务级别"
       >
      </el-table-column>
       <el-table-column
        prop="submit"
        label="提交时间"
        >
        
      </el-table-column>
       <el-table-column
        prop="start"
        label="起保时间"
        >
      </el-table-column>
       <el-table-column
        prop="handler"
        label="处理人"
       >
      </el-table-column>
       <el-table-column
        prop="charge"
        label="跟单手续费比例(%)"
        >
      </el-table-column>
       <el-table-column
        prop="bazaar"
        label="市场费用率">
      </el-table-column>
       <el-table-column
        prop="code"
        label="渠道码"
        >
      </el-table-column>
       <el-table-column
        prop="rule"
        label="核保规则编号"
       >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  
  export default {
       name: 'Throwaway',
    data() {
      return {
       tableData:[]
      };
    },
    methods: {
     
    },
    components:{
   
    }
  };
</script>
<style scoped>
 .el-icon-video-play{
     background-color:#6f9e3d
 }
</style>
