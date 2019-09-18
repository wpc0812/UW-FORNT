<template>
  <div>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">异地车队修改前后信息对比</div>
          </template>
          <el-table
            :data="tableList"
            stripe
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column label prop="riskcode"></el-table-column>
            <el-table-column prop="riskname" label="业务号"></el-table-column>
            <el-table-column prop="excess" label="分公司"></el-table-column>
            <el-table-column prop=" sum" label="控制关系人标志"></el-table-column>
            <el-table-column prop="rate" label="控制关系人名称"></el-table-column>
            <el-table-column prop="standard" label="业务来源(元)"></el-table-column>
            <el-table-column prop="deductible" label="历史年度满期赔付率(%)"></el-table-column>
            <el-table-column label="车队车辆总数" prop="choosableDeductible"></el-table-column>
            <el-table-column prop="premium" label="预估保费规模(单位:万元)"></el-table-column>
            <el-table-column prop="renew" label="异地车辆数"></el-table-column>
          </el-table>
          <el-table
            :data="tableList"
            stripe
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column label prop="riskcode"></el-table-column>
            <el-table-column prop="riskname" label="涉及车籍地">
              <template slot-scope="scope">
                <el-button type="text">{{scope.row.name}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="excess" label="车队车辆主要车型">
              <template slot-scope="scope">
                <el-button type="text">{{scope.row.name}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop=" sum" label="车辆主要使用地">
              <template slot-scope="scope">
                <el-button type="text">{{scope.row.name}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="rate" label="承保条件"></el-table-column>
            <el-table-column prop="standard" label="商业险手续费上限"></el-table-column>
            <el-table-column prop="deductible" label="监控方案"></el-table-column>
            <el-table-column label="控制结束日期" prop="choosableDeductible"></el-table-column>
            <el-table-column prop="premium" label="关联关系人名称"></el-table-column>
            <el-table-column prop="renew" label="备注"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "PlaceTeam",
  data() {
    return {
      activeNames: ['1'],
      tableList: [
        {
          riskcode: "原始值",
          name: "点击查看"
        },
        {
          riskcode: "改后值",
          name: "点击查看"
        }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>
<style scoped>
</style>