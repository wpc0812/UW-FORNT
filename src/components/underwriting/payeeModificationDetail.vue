<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-row class="pt10">
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">资料查看</el-button>
        </el-col>
        <el-col :span="3">
          <el-button class="btn" type="primary" @click="outerVisible = true" size="mini">上传影像</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="outerVisible = true" size="mini">提交审核</el-button>
              <el-button type="primary" @click="giveUp" size="mini">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-form :model="carAuditPage" label-width="150px">
      <!-- 基本信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">基本信息</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="业务号:">
                  <el-input v-model="carAuditPage.handleComCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理部门:">
                  <el-input v-model="carAuditPage.handleTime"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流转入间:">
                  <div class="block">
                    <el-date-picker v-model="time1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="流转状态:">
                  <el-input v-model="carAuditPage.xubao"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>
      <!-- 历次审核意见 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="2">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">历次审核意见</div>
            </template>
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:">
                  <el-input v-model="carAuditPage.handleComCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="处理部门:">
                  <el-input v-model="carAuditPage.handleTime"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item label="审核人员:">
                  <el-input v-model="carAuditPage.handleTime"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="审核意见:">
                  <el-input v-model="carAuditPage.xubao"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <!-- 收款人账户修改前信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">收款人账户修改前信息</div>
            </template>
            <el-form ref="form"  class="updateforminput"  disabled="disabled" :model="correction" label-width="150px">
              <el-row>
                <el-col :span="24">
                  <el-form-item label="序号:">
                    <el-input v-model="correction.name" class="login-form-input"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="保单号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="批单申请号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="批单号码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="险种代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="开行户名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="开账户代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行账号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="账户名:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付类型:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付金额:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付日期:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="操作员代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="密匙版本:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="MD5验证码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收付原因:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行区域代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行区域名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="证件类型:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="证件号码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="电话:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="公私标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="卡折标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="联行号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="加急标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付ID:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否发送短信:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否发送邮件:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="邮箱地址:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付币种代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="用途:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保序列号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <!-- 收款人账户修改后信息 -->
      <el-card class="circular mt4 shadow">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="12">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">收款人账户修改后信息</div>
            </template>
            <el-form ref="form" disabled="disabled" class="updateforminput" :model="correction" label-width="150px">
              <el-row>
                <el-col :span="24">
                  <el-form-item label="序号:">
                    <el-input v-model="correction.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="保单号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="批单申请号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="批单号码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="险种代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="开行户名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="开账户代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行账号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="账户名:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付类型:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付金额:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付日期:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="操作员代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="密匙版本:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="MD5验证码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收付原因:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行区域代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行区域名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="证件类型:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="证件号码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="电话:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="公私标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="卡折标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="联行号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="加急标志:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付ID:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否发送短信:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否发送邮件:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="邮箱地址:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="支付币种代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="用途:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="银行:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保代码:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保名称:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="共保序列号:" prop="num">
                    <el-input v-model="correction.num"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-form>
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="el_collapse_padding">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">任务审核</div>
          </template>
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click="outerVisible = true" size="mini">提交审核</el-button>
              <el-button type="primary" @click="giveUp" size="mini">放弃</el-button>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-dialog title="核保任务提交"  :lock-scroll="false" class="text-left" :visible.sync="outerVisible">
      <div id="form">
        <el-form ref="form" :model="form" label-width="150px" :rules="rules">
          <el-row>
            <el-col :span="10">
              <el-form-item label="当前提交节点"></el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="提交路径选择"></el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="分公司核保" prop="value"></el-form-item>
            </el-col>
            <el-col :span="12" style="textAlian='center'">
              <el-form-item label="请选择">
                <el-select v-model="form.value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="核保员意见:"
                v-model="textarea2"
              ></el-input>
            </el-col>
            <el-col :span="24" class="mt10">
              <el-button type="primary" size="mini" class="mt10" @click="innerVisible = true">提交任务</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <el-dialog
      class="el-dialog__body__update"
      width="40%"
      title="核保任务提交"
      :visible.sync="innerVisible"
    >
      <el-row>工作流提示：投保单：34412414214214退回到业务系统成功！</el-row>
      <el-button
        @click="innerVisible = false;outerVisible = false"
        size="mini"
        type="primary"
        class="mt10"
      >关闭当前窗口</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "carAuditPage",
  data() {
    return {
      results: [
        {
          kindCode: "111",
          kindName: "A0190Q",
          flag: "11",
          amount: "11",
          rate: "1",
          benchMarkPremium: "1",
          code1: "1",
          code2: "1",
          code3: "1",
          code4: "1"
        }
      ],
      correction: {},
      flagCode: false,
      fileList: [],
      parameter: {},
      activeNames: [],
      carAuditPage: {},
      tableList: [],
      time1: "",
      value: "",
      form: {},
      rules: {},
      radio: 1,
      outerVisible: false,
      innerVisible: false,
      textarea1: "",
      textarea2: "",
      options: [
        {
          value: 1,
          label: "提交总公司"
        },
        {
          value: 2,
          label: "审核未通过"
        }
      ]
    };
  },

  methods: {
    //设置collapse全部展开
    setActiveNames() {
      for (let i = 1; i <= 23; i++) {
        this.activeNames.push(JSON.stringify(i));
      }
    },
    upload() {},
    giveUp() {},
    BusinessNum(row) {
      // console.log(row)
      this.$router.push({ path: "/carContrast", query: { row: row.flag } });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    selectCode() {
      this.flagCode = true;
    },
    init() {
      this.postRequest(`/fridayService02/queryobject1detail`, {
        businessNo: this.parameter.businessNo
      }).then(res => {
        this.carAuditPage = res.data.data;
        console.log(res);
      });
    }
  },

  created() {
    //设置collapse全部展开
    this.setActiveNames();
    // this.init();
    // this.parameter = this.$route.query;
  }
};
</script>
<style scoped>
.btn {
  width: 104px;
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.el_collapse_padding >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
.text-left {
  text-align: center;
}
    .login-form-input .el-input__inner {

        border: 0 none;

        border-bottom: 1px solid #ccc;

        border-radius: 0px;

    }
.updateforminput >>>.el-input__inner{
  border-radius: 0px;
    }
 .updateforminput >>> .el-form-item__label{
   background: #E8F6F9;
 }   
 .updateforminput .el-form-item{
   margin-bottom: 0px;
 }
.float-right {
  text-align: center;
}
</style>
<style>
</style>