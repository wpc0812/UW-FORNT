<template>
  <div>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">增加异地车队信息</div>
          </template>
          <el-form label-width="170px" v-if="flag" class="rtaddupdate" :rules="formData">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="分公司:" prop="vesselName">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人标志:" prop="controlpeo">
                    <el-select v-model="exin" clearable placeholder="被保险人">
                      <el-option
                        v-for="item in rtAdd"
                        :key="item.value1"
                        :label="item.label"
                        :value="item.value1"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制关系人名称:" prop="controlname">
                    <template>
                      <el-input v-model="rtAdd.vesselName">
                        <el-button @click="selectName" slot="append" size="small" type="text">查找</el-button>
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制关系人代码:" prop="controlcode">
                    <template>
                      <el-input v-model="rtAdd.vesselName">
                        <el-button @click="selectName" slot="append" size="small" type="text">查找</el-button>
                      </el-input>
                    </template>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="业务来源:" class="text-left" prop="sourcebusiness">
                    <el-select v-model="exin" clearable placeholder="新车车队">
                      <el-option
                        v-for="item in rtAdd"
                        :key="item.value2"
                        :label="item.label"
                        :value="item.value2"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="历史年度满期赔付率(%):" class="text-left">
                    <el-input v-model="rtAdd.vesselName" placeholder="查询"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="车队车辆总数:" prop="carsum">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item
                    label="预估保费规模(单位:万元):"
                    prop="premiumsize"
                    label-width="175px"
                    class="text-left"
                  >
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="异地车数量:" prop="othernumber" class="text-left">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="涉及车籍地:" prop="carplace">
                    <el-select v-model="exin" clearable placeholder="点击选择">
                      <el-option
                        v-for="item in rtAdd"
                        :key="item.value3"
                        :label="item.label"
                        :value="item.value3"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车队车辆主要车型:" prop="carmodels" class="text-left">
                    <el-select v-model="exin" clearable placeholder="点击选择">
                      <el-option
                        v-for="item in rtAdd"
                        :key="item.value4"
                        :label="item.label"
                        :value="item.value4"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="车辆主要是用地:" prop="mainplace" class="text-left">
                    <el-select v-model="exin" clearable placeholder="点击选择">
                      <el-option
                        v-for="item in rtAdd"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期:" prop="endtime">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="商业险手续费上限(%):" prop="poundage" class="text-left">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="监控方案:" class="text-left">
                    <el-input type="textarea" :rows="1" v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="承保条件:" prop="conditions">
                    <el-input type="textarea" :rows="1" v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系关联人名称:" class="text-left">
                    <el-input type="textarea" :rows="1" v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="备注:" class="text-left">
                    <el-input type="textarea" :rows="1" v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- <el-button @click="baocun"> -->
    <!-- <router-link :to="{path:'/rtReported'}">保存</router-link> -->
    <!-- 保存 -->
    <!-- </el-button> -->
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
let [blur, change] = [
  { required: true, message: "请输入公司名称", trigger: "blur" },
  { required: true, message: "请选择", trigger: "change" }
];
export default {
  name: "rtAdd",
  data() {
    return {
      exin: "",
      activeNames: ["1"],
      rtAdd: [
        { value1: "111", value2: "222", value3: "333", value4: "444" },
        { value1: "666", value2: "222", value3: "333", value4: "444" },
        { value1: "999", value2: "222", value3: "333", value4: "444" },
        { value1: "777", value2: "888", value3: "999", value4: "444" }
      ],
      relations,
      flag: true,
      formData: {}
    };
  },
  computed: {},

  methods: {
    query() {
      //  this.$router.replace({path:'/rtReported'})
      // this.refs.ffff =Math.random(6)
      // console.log(this.q)
      //  this.$router.replace({path:'/rtReported'})
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
      // }else{
      //   this.$alert('内容不完整或者不正确', '确认信息', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info',
      //       message: `action: ${ action }`
      //     });
      //   }
      // });
      // }
    },
    selectCode() {
      this.$router.push({ path: "/selectMSg" });
    },
    selectName() {
      this.$router.push({ path: "/selectMSg" });
    },
    //校检
    ruleForm() {
      this.formData = {
        vesselName: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "blur"
          }
        ],
        controlpeo: { required: true, message: "请选择", trigger: "change" },
        controlname: [blur],
        controlcode: [blur],
        sourcebusiness: [change],
        carsum: [blur],
        premiumsize: [blur],
        othernumber: [blur],
        carplace: [blur],
        carmodels: [blur],
        mainplace: [blur],
        endtime: [blur],
        poundage: [blur],
        conditions: [blur]
      };
    }
  },
  created() {
    this.ruleForm();
  }
};
</script>
<style scoped>
/* .el-input--small >>> .el-input__inner {
  height: 25px;
  line-height: 25px;
} */
.peoCode {
  width: 150px;
  float: left;
}
/* .selectCode {
  display: inline-block;
  width: 40px;
  height: 25px;
  margin-top: 3px;
  padding: 2px 2px 0 2px;
} */
.selectCode {
  position: relative;
  left: -22px;
  top: 0px;
}

.el-form >>> label {
  font-size: 12px;
}
/* .rtaddupdate >>>.el-input__inner{
  border-radius: 0px;
    } */
.rtaddupdate >>> .el-form-item__label {
  background: #e8f6f9;
}
.rtaddupdate .el-form-item {
  margin-bottom: 20px;
}
.rtaddupdate >>> .text-center {
  margin-top: 20px;
}
</style>
