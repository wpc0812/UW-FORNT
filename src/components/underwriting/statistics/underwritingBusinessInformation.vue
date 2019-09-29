<template>
  <div>
    <!-- 信息展示 -->
    <el-card class="circular mt4 shadow">
      
          <el-table
            stripe
            :data="tableList.costTable"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="name" ></el-table-column>
            <el-table-column prop="price" label="交强险比率%"></el-table-column>
            <el-table-column prop="price" label="金额"></el-table-column>
            <el-table-column prop="price" label="商业险比率%"></el-table-column>
            <el-table-column prop="price" label="金额"></el-table-column>
          </el-table>

          <el-table
            stripe
            :data="tableList.businissType"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="name" label="业务类别:"></el-table-column>
            <el-table-column prop="price" label="A"></el-table-column>
            <el-table-column prop="price" label="B"></el-table-column>
            <el-table-column prop="price" label="C"></el-table-column>
            <el-table-column prop="price" label="D"></el-table-column>
            <el-table-column prop="price" label="E"></el-table-column>
          </el-table>

          <el-form label-width="160px">
            <el-row class="mt4">
              <el-col :span="8">
                <el-form-item label="折扣和后续费实际比率%">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
               <el-col :span="8">
                <el-form-item label="最低净保费:">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
               <el-col :span="8">
                <el-form-item label="原业务类别:">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-table
            stripe
            :data="tableList.discount"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="name" label='折扣和手续费率:'></el-table-column>
            <el-table-column prop="insurancePeriod" label="上限%"></el-table-column>
            <el-table-column prop="insuredName" label="差值%"></el-table-column>
            <el-table-column prop="initialDate" label="业务类型"></el-table-column>
          </el-table>
          <el-table
            stripe
            :data="tableList.ProfitLossTips"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="name" label='精算盈亏提示:'></el-table-column>
            <el-table-column prop="type" label="业务类型"></el-table-column>
            <el-table-column prop="insuredName" label="险别"></el-table-column>
          </el-table>
          <el-row>
            <el-col :span="24" class="text-center mt10">
              <el-button  size="mini" @click="colseWidow">关闭</el-button>
            </el-col>
          </el-row>
    </el-card>
   
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import utils from "../../../utils/index";

export default {
  name: "underwritingBusinessInformation",
  components: {},
  data() {
    return {
      tableList:{
        costTable:[],
        businissType:[],
        discount:[],
        ProfitLossTips:[]

      }
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    // 关闭弹框
    colseWidow(){
      window.close()
    }
    
    
  },
  created() {
    this.tableList={
        costTable:[
          {name:'缺省费用',price: '0.00000'},
          {name:'实际费用',price: '0.00000'},
          {name:'交强业务类型费用上限%',price: ''},
          {name:'商业业务类型费用上限%',price: ''},


        ],
        businissType:[
          {name:'目标控制比例%',price: '0.00000'},
          {name:'精算口径比例%',price: '0.00000'},
          {name:'经验口径比例%',price: '0.00000'},
          {name:'精算口径差距%',price: '0.00000'},
          {name:'经验口径差距%',price: '0.00000'},


        ],
        discount:[
          {name:'经验口径'},
          {name:'精算口径'},
          {name:'经验盈亏险别提示'},

        ],
        ProfitLossTips:[
          { type:'A高盈利'},
          { type:'B微 利'},
          { type:'C保 本'},
          { type:'D微 亏'},
          { type:'E高 亏'},

        ]

      }
  }
};
</script>
<style scoped>

 .el-card__body {
  padding: 10px 20px;
}

</style>
