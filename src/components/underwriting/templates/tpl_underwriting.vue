<template>
  <div>
    <el-collapse v-model="activeNames" >
      <el-collapse-item :name="title" class="noArrow">
        <template slot="title">
          <i class="el-icon-arrow-right pr5" v-show="!arrow"></i>
          <i class="el-icon-arrow-down pr5" v-show="arrow"></i>
          {{title}}
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
          stripe
          :data="results"
          tooltip-effect="dark"
          :cell-style="{'text-align': 'center'}"
          :header-cell-style="{'text-align': 'center'}"
          :header-cell-class-name="'table-header-bg'"
        >
          <el-table-column prop="businessType" label="业务状态"></el-table-column>
          <el-table-column label="业务号" width="200"> 
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="goDetail(scope.row)">{{scope.row.businessNo}}</el-button>
            </template>
          </el-table-column>
          <el-table-column v-if="title == '团单方案'" prop="businessNo" label="批次号"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="licenseNo" label="车牌号"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="channelAgentName" label="渠道名称"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="insuredName" width="100" label="被保险人名称"></el-table-column>
          <el-table-column prop="comName" label="归属机构"></el-table-column>
          <el-table-column prop="taskLevel" label="任务级别"></el-table-column>
          <el-table-column prop="inDate" label="提交时间"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="startDate" label="起保时间">
            <template slot-scope="scope">
              {{ scope.row.startDate | filterDate}}
            </template>
          </el-table-column>
          <el-table-column prop="operatorCode" label="处理人"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="costRate" width="115" label="跟单手续费比例"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="marketFeeRate" width="90" label="市场费用率"></el-table-column>
          <el-table-column v-if="title != '团单方案'" prop="agentCode" label="渠道码"></el-table-column>
          <el-table-column prop="ruleNo" width="100" label="核保规则编号"></el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  props: {
    //查询结果
    results: {
      type: Array
    },
    //标题
    title: {
      type: String
    },
    //总页数
    total: {
      type: Number
    },
    //每页条数
    pageSize: {
      type: Number,
      default: () => {
        return 10;
      }
    },
    //展开关闭箭头
    arrow: {
      type: Boolean
    },
    //未处理/已处理
    mark: {
      type: String
    }
  },
  data(){
    return{
      activeNames:[]
    }
  },
  watch:{
    results:{
      deep: true,  // 深度监听
      immediate:true,
      handler(newVal,oldVal) {
        //  console.log(this.title,this.activeNames)
         if(newVal && newVal instanceof Array && newVal.length > 0){
           this.activeNames.push(this.title)
         }
      }
    }
  },
  methods: {
    // 条数
    handleSizeChange(val) {
      this.$emit("paging", {
        mark: this.mark,
        title: this.title,
        pageSize: val
      });
    },
    // 第几页
    handleCurrentChange(val) {
      this.$emit("paging", {
        mark: this.mark,
        title: this.title,
        pageNo: val
      });
    },
    goDetail(row) {
      let key ={
        title : this.title
      }
      this.$emit('goDetail', {
        ...row,
        ...key})
    }
  }
};
</script>
<style scoped>
.el-collapse-item >>> .el-collapse-item__header {
  border-bottom: 1px solid #ebeef5;
}
</style>


