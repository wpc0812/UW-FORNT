<template>
  <div>
    <!-- 删除批次 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">异地车对信息</div>
          </template>
          <el-form ref="form" :model="underwriterInfor" label-width="140px">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="删除批次:">
                    <el-button @click="deletes()" size="mini" type="success">删除批次</el-button>
                  </el-form-item>
                </el-col>
            </el-row>
                   <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column prop="insuranceType" label="序号"></el-table-column>
        <el-table-column prop="usersCode" label="批次号"></el-table-column>
        <el-table-column prop="memberName" label="号牌号码"></el-table-column>
        <el-table-column prop="memberName" label="商业险手续费上限"></el-table-column>
        <el-table-column prop="memberName" label="商业险总折扣率下限"></el-table-column>
        <el-table-column prop="memberName" label="自主核保系数*自助渠道系数下限(出ncd系数)"></el-table-column>
      </el-table>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    
    <!-- 弹窗  -->
    <el-dialog title="提示" class="zhuxiao" :visible.sync="centerDialogVisible" width="30%" center>
      <span>确认删除???</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="yes">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "underwriterInfor",

  data() {
    return {
      centerDialogVisible:false,
      activeNames: ["1"],
      relations,
      pageSize: 10,
      valueidx:"",
      underwriterInfor: {},
      results: [
        {
          memberName: 111111111,
          usersCode: "ASDSAF0",
          insuranceType: "张三",
          undate: "修改"
        },
        {
          memberName: 111111111,
          usersCode: "ASDSAF1",
          insuranceType: "李四",
          undate: "修改"
        },
        {
          memberName: 111111111,
          usersCode: "ASDSAF2",
          insuranceType: "王五",
          undate: "修改"
        },
        {
          memberName: 111111111,
          usersCode: "ASDSAF3",
          insuranceType: "赵六",
          undate: "修改"
        }
      ]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),

    deletes() {
    //   this.valueidx=idx;
    // console.log(this.$route.query.row)
    // row.splice(idx + 1, 1);
      this.centerDialogVisible=true;
      this.$emit("deletedata",this.$route.query.row)
    //   this.$router.go(-1) 

    },
    yes(){
      this.centerDialogVisible=false;
      this.results.splice(this.valueidx + 1, 1);
    },
    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    }
  },
  created() {}
};
</script>
<style scoped>
 .zhuxiao >>> .el-dialog--center .el-dialog__body{
  text-align: center;
  font-size: 20px;
}

</style>
