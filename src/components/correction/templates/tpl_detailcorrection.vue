<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请填写信息</div>
          </template>
          <el-form disabled ref="form" :rules="form" :model="UwctrlVO" label-width="150px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select v-model="UwctrlVO.insuredFlag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in relationsss"
                        :key="item.label"
                        :label="item.values"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:">
                    <el-input v-model="UwctrlVO.applicCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:">
                    <el-input v-model="UwctrlVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="UwctrlVO.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="团单号:">
                    <el-input v-model="UwctrlVO.contractNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险总折扣率上限:">
                    <el-input v-model="UwctrlVO.profitRateUp"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="核保类别:">
                    <el-select v-model="UwctrlVO.flag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in categoryss"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="号牌号码:">
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险跟单手续费上限:">
                    <el-input v-model="UwctrlVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:">
                    <el-input v-model="UwctrlVO.finishDateString"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="有效标志位:">
                    <el-select v-model="UwctrlVO.valid" clearable placeholder="请选择">
                      <el-option
                        v-for="item1 in flagss"
                        :key="item1.label"
                        :label="item1.value3"
                        :value="item1.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="特批操作人员:">
                    <el-input v-model="UwctrlVO.handlerUser"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="提示信息:">
                    <el-input v-model="UwctrlVO.message"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
          <el-col :span="24" class="text-center">
            <el-button size="mini" @click="goBack()">返回</el-button>
          </el-col>
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
import { relations } from "@/assets/js/baseCode";
let [inputValidator, selectValidator] = [
  { required: true, message: "请录入", trigger: "blur" },
  { required: true, message: "请选择哦", trigger: "change" }
];

export default {
  name: "tpl_detailcorrection",

  props: {
    flag: {
      type: String
    }
  },

  data() {
    return {
      valuesssss: 1,
      relationsss: [
        { values: "1_被保险人", label: "1" },
        { values: "2_投保人", label: "2" }
      ],
      categoryss: [
        { value: "1_人工核保", label: "1" },
        { value: "2_自动核保通过", label: "2" },
        { value: "3_自动打回", label: "3" }
      ],
      flagss: [
        { value3: "0_无效", label: "0" },
        { value3: "1_有效", label: "1" }
      ],
      rtReported: {},
      relations,
      activeNames: ["1"],
      UwctrlVO: {},
      results: [],
      form: {},
      outerVisible: false
    };
  },

  computed: {},

  methods: {
    //返回
    goBack() {
      window.close();
    },
    handleClose(done) {
      console.log("确认");
    },
    acd() {},

    save() {}
  },
  created() {
    this.$fetch
      .get(this.HOST + this.$url.correctionShow, {
        params: { id: this.$route.query.row }
      })
      .then(res => {
        if (res) {
          this.UwctrlVO = res;
        }
      });
  }
};
</script>
<style scoped>
.fontSizeTrue {
  font-size: 25px;
}
.dialog-footer-parent >>> .el-dialog__footer {
  text-align: center;
}
</style>
