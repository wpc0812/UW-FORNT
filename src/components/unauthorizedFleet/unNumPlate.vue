<template>
  <div>
    <!-- 超权限 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">号码单车修改</div>
          </template>
          <el-form ref="form" :model="underwriterInfor" label-width="280px">
            <el-row>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="车牌号:" label-width="200px">
                    <el-input  class="peoCode" v-model="underwriterInfor.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                  <el-col :span="14">
                  <el-form-item label="商业险手续费上限:">
                    <el-input  class="peoCode" v-model="underwriterInfor.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                  <el-col :span="10">
                  <el-form-item label="商业险总折扣率下限:" label-width="200px">
                    <el-input class="peoCode"  v-model="underwriterInfor.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="自主核保系数*自助渠道系数下限(出ncd系数):">
                    <el-input  class="peoCode" v-model="underwriterInfor.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24" class="text-center">
                <el-button size="mini" @click="save()"  type="primary">保存</el-button>
                <el-button size="mini" @click="goBack()">返回</el-button>
              </el-col>
              </el-row>
            
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- dialog弹出框 -->
    <el-dialog
      title="提示"
      :visible.sync="outerVisible"
      width="50%"
      class="dialog-footer-parent"
      :before-close="handleClose"
    >
      <span class="fontSizeTrue">确定保存吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false">确 定</el-button>
        <el-button @click="outerVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "auditOpinion",

  data() {
    return {
        outerVisible: false,
        underwriterInfor:{},
      centerDialogVisible:false,
      activeNames: ["1"],
      relations,
      pageSize: 10,
      valueidx:"",
      underwriterInfor: {},
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),
     save() {
      this.outerVisible = true;
      // this.getcorrection(this.correction);
    },
     goBack() {
      this.$router.go(-1);
    },
     handleClose(done) {
      console.log("确认");
    },
    acd() {},

    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
.peoCode {
  width: 230px;
  float: left;
}
</style>
