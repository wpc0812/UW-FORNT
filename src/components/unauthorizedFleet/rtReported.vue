<template>
  <div>
    <!-- <LeftMenu/> -->
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form ref="form" :model="MotorcadeNo" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select v-model="MotorcadeNo.insuredflag" clearable placeholder="请选择">
                      <el-option
                        v-for="relation in relations"
                        :key="relation.code"
                        :label="relation.value"
                        :value="relation.code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:">
                    <el-input v-model="MotorcadeNo.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:">
                    <el-input v-model="MotorcadeNo.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="MotorcadeNo.contractNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提交时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="MotorcadeNo.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="reset" size="mini">导出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="state" label="流转状态"></el-table-column>
        <el-table-column prop="contractNo" label="业务号">
          <template slot-scope="scope"> 
            <el-button type="text" size="small" @click="BusinessNum(scope.row)">{{scope.row.contractNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="comcode" label="分公司"></el-table-column>
        <el-table-column prop="insuredflag" label="关系人标志"></el-table-column>
        <el-table-column prop="insuredName" label="关系人名称"></el-table-column>
        <el-table-column prop="businessNature" label="业务来源"></el-table-column>
        <el-table-column prop="lastFourYearPayPercent" width="115" label="历史满期赔付率"></el-table-column>
        <el-table-column prop="finishdate" label="控制结束日期"></el-table-column>
        <el-table-column prop="isextendtime" label="是否续保"></el-table-column>
        <el-table-column prop="firstSubmitDate" label="提交时间"></el-table-column>
        <el-table-column prop="submitUser" label="分公司上报人"></el-table-column>
        <el-table-column prop="memberName" label="总公司审核人"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
import HeadMenu from "@/components/layout/headMenu";
import LeftMenu from "@/components/layout/leftMenu";

export default {
  name: "MotorcadeNo",
  components:{
     LeftMenu, HeadMenu 
  },
  data() {
    return {
      MotorcadeNo:{
        insuredflag:"",
        insuredCode:"",
        insuredName:"",
        contractNo:"",
        firstSubmitDate:""
              },
      activeNames: ["1"],
      relations,
      flag:true,

      results:[{contractNo:"222222"}],
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    // ...mapActions(["getMotorcadeNo"]),

    reset() {},

    query() {
    this.$fetch.get(this.HOST + this.$url.rtAddFindMotorcadeMain, {params:{motorcadeNo:this.MotorcadeNo.contractNo}})
    .then(res=>{
      console.log(res)
      this.results.push(res)
    })
    .catch(error=>{
      console.log(error)
    })
      
    },

    BusinessNum(row){
      // console.log(row)
      this.$router.push({path: '/carAuditPage',query:{row:row.memberName}})
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
  created() {
    this.$fetch.get(this.HOST + this.$url.rtAddFindMotorcadeMain, {params:{motorcadeNo:this.MotorcadeNo.contractNo}})
    .then(res=>{
      console.log(res)
      this.results.push(res)
    })
    .catch(error=>{
      console.log(error)
    })
  }
};
</script>
<style scoped>
.el-collapse {
  border: 0;
}
.el-collapse >>> .el-collapse-item__wrap, .el-collapse >>> .el-collapse-item__header {
  border: 0;
}
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
}
.el-card >>> .el-card__body {
  padding: 10px 20px;
}
.title-blue-bar {
  width: 10px;
  height: 20px;
  background-color: #409eff;
  border-radius: 8px;
  margin-right: 10px;
}
.circular {
  border-radius: 8px;
}
</style>
