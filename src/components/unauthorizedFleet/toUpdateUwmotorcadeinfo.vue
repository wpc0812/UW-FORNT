<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">修改车辆信息</div>
          </template>
          <el-form
            ref="form"
            :rules="form"
            :model="toUpdateUwmotorcadeinfo"
            label-width="280px"
          >
            <el-row>
              <el-row>
                <el-col :span="11">
                  <el-form-item label="车牌号:" prop="num">
                    <el-input v-model="toUpdateUwmotorcadeinfo.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="商业险手续费上限:" prop="memberName">
                    <el-input v-model="toUpdateUwmotorcadeinfo.memberName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11">
                  <el-form-item label="商业险总折扣率下限:">
                    <el-input v-model="toUpdateUwmotorcadeinfo.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="自主核保系数*自主渠道系数下限(除nod系数):" class="text-left">
                    <el-input v-model="toUpdateUwmotorcadeinfo.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="query()" type="primary">保存</el-button>
                <el-button size="mini" @click="reset">返回</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

let inputValidator = [{ required: true, message: "请录入", trigger: "blur" }];

export default {
  name: "toUpdateUwmotorcadeinfo",

  data() {
    return {
      toUpdateUwmotorcadeinfo: {},
      results: [],
      activeNames: ['1'],
      form: {
        num: inputValidator,
        memberName: inputValidator
      }
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["gettoUpdateUwmotorcadeinfo"]),

    reset() {},

    query() {
      this.gettoUpdateUwmotorcadeinfo(this.toUpdateUwmotorcadeinfo);
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
  created() {}
};
</script>
<style scoped>
</style>
