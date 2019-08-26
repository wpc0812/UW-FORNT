<template>
  <div>
    <el-row class="text-left buttons">
      <el-button>对比</el-button>
      <el-button>删除</el-button>
      <el-button>影像上传</el-button>
      <el-button>资料查看</el-button>
      <el-button>查看审批意见</el-button>
      <el-button>流转记录</el-button>
    </el-row>

    <el-card class="circular mt10">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row class="pt10">
            <el-col :span="24" class="pt10">
              <el-button type="primary" size="mini">提交审核</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 异地车队信息 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">异地车队信息</div>
          </template>
          <el-form :model="rtReported" label-width="160px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="分公司:">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人标志:">
                    <el-input v-model="rtReported.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制关系人名称:">
                    <el-input v-model="rtReported.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人代码:" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务来源:" class="text-left">
                    <el-select v-model="rtReported.value" clearable placeholder="请选择">
                      <el-option
                        v-for="relation in relations"
                        :key="relation.code"
                        :label="relation.value"
                        :value="relation.code"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="历史年度满期赔付率(%):">
                    <el-input v-model="rtReported.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆总数:" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="预估保费规模(单位:万元):" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="异地车辆数:">
                    <el-input v-model="rtReported.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="涉及车籍地:" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆主要车型:" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="车辆主要使用地:">
                    <el-input v-model="rtReported.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="rtReported.value1"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险手续费上线(%):" class="text-left">
                    <el-input v-model="rtReported.memberName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="监控方案:">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="rtReported.value1"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关联关系人名称:" class="text-left">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="rtReported.value1"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="承保条件:" class="text-left">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="rtReported.value1"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="备注:">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="rtReported.value1"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <span style="line-height:50px" class="float-left font-size12 ml10">距离控制日期结束日期：51天</span>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="修改批次:" class="text-left">
                    <el-input placeholder="请输入内容" v-model="rtReported.value1">
                      <template slot="append">浏览</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-button type="primary" size="mini" class="float-left ml10">上传文件</el-button>
                <el-button type="text" class="float-left ml10">号牌号码导入模板下载</el-button>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button size="mini" @click="query()" type="primary">查询</el-button>
                <el-button size="mini" @click="reset">导出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询条件 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="3">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form :model="rtReported" label-width="140px">
            <el-row>
              <el-col :offset="6" :span="12">
                <el-form-item label="号牌号码:">
                  <el-input v-model="rtReported.vesselName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-button size="mini" @click="query()" type="primary">查询</el-button>
              <el-button size="mini" @click="reset">导出</el-button>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="4">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">查询结果</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="insuranceType" label="批次号"></el-table-column>
            <el-table-column prop="memberName" label="号牌号码"></el-table-column>
            <el-table-column prop="memberName" label="商业险手续费上限"></el-table-column>
            <el-table-column prop="memberName" label="商业险总折扣率下限"></el-table-column>
            <el-table-column prop="memberName" width="300" label="自主核保系数*自主渠道系数下限(除nod系数)"></el-table-column>
            <el-table-column prop="memberName" label="删除批次"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询条件 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="5">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">异地车队信息</div>
          </template>
          <el-row>
            <el-button class="float-right" type="text">删除批次</el-button>
          </el-row>
          <el-table
            stripe
            border
            :data="results"
            tooltip-effect="dark"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="insuranceType" label="批次号"></el-table-column>
            <el-table-column prop="memberName" label="号牌号码"></el-table-column>
            <el-table-column prop="memberName" label="商业险手续费上限"></el-table-column>
            <el-table-column prop="memberName" label="商业险总折扣率下限"></el-table-column>
            <el-table-column prop="memberName" width="300" label="自主核保系数*自主渠道系数下限(除nod系数)"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "rtReported",

  data() {
    return {
      relations,
      activeNames: ["1", "2", "3", "4", "5"],
      rtReported: {},
      results: [{}, {}, {}]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getrtReported"]),

    reset() {},

    query() {
      this.getrtReported(this.rtReported);
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
