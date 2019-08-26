<template>
  <div>
    <!-- 增加条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">增加核保员信息</div>
          </template>
          <el-form :model="rtReported" label-width="150px" :rules="formData">
            <el-row>
              <el-col :span="8">
                <el-form-item label="员工姓名:" prop="name">
                  <el-input v-model="rtReported.memberName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="有效标志:" prop="indicator">
                  <el-select v-model="flags.value" clearable placeholder="请选择">
                    <el-option
                      v-for="relation in flags"
                      :key="relation.value"
                      :label="relation.label"
                      :value="relation.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="员工代码:" prop="userCode">
                  <el-input v-model="rtReported.memberName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="员工邮箱:" prop="userEmail">
                  <el-input v-model="rtReported.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="自动分发标志:">
                  <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                      v-for="relation in relations"
                      :key="relation.value"
                      :label="relation.label"
                      :value="relation.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="手机号码:" prop="iphone">
                  <el-input v-model="rtReported.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="自动推送条数:" prop="pushNum">
                  <el-input v-model="rtReported.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="固定电话:">
                  <el-input v-model="rtReported.vesselName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="addOne">增加</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 弹窗 -->
    <!-- <el-dialog title="提示" class="dialog" :visible.sync="outerVisible" width="30%">
      <span class="fontSize">确定增加该人员???</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="outerVisible = false">确 定</el-button>
        <el-button @click="outerVisible = false">取 消</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
let [inputValidator, selectValidator] = [
  { required: true, message: "请录入", trigger: "blur" },
  // { required: true, message: "请选择哦", trigger: "change" }
];

export default {
  name: "addwriterInfor",

  data() {
    return {
      formData: {},
      outerVisible: false,
      activeNames: ["1"],
      flags: [{ value: "0_无效" }, { value: "1_有效" }],
      relations: [{ value: "0_停止分发" }, { value: "1_继续分发" }],
      rtReported: {},
      pageSize: 10,
      underwriterInfor: {},
      results: [
        { memberName: 111111111 },
        { memberName: 111111111 },
        { memberName: 111111111 },
        { memberName: 111111111 }
      ]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),

    query() {
      this.getunderwriterInfor(this.underwriterInfor);
    },
    addOne() {
      if (1) {
        this.$confirm("确认是否保存该信息~", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "保存成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消保存"
            });
          });
      }
    },

    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    },
    //校检
    ruleForm() {
      this.formData = {
        name: [inputValidator],
        indicator: [selectValidator],
        userCode: [inputValidator],
        userEmail: [inputValidator],
        iphone: [inputValidator],
        pushNum: [inputValidator]
      };
    }
  },
  created() {
    this.ruleForm();
  }
};
</script>
<style scoped>
.fontSize {
  font-size: 20px;
}
.dialog >>> .el-dialog__footer {
  text-align: center;
}
</style>
