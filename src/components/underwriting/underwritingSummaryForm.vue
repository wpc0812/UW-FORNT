<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保全业务汇总统计查询条件</div>
          </template>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="起始时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="截止时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="核保状态:" class="text-left">
                    <el-radio-group v-model="UwMotorcadeMainVO.radio" @change="changeRadioHandler">
                      <el-radio label="1">按分公司</el-radio>
                      <el-radio label="2">按核保员</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item label="一级业务类型:" class="text-left">
                  <el-checkbox-group
                    v-model="UwMotorcadeMainVO.businessType1"
                    @change="changecheckbox1"
                  >
                    <el-checkbox
                      v-for="state in status1"
                      :label="state.code"
                      :key="state.code"
                    >{{state.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="二级业务类型:" class="text-left">
                  <el-checkbox-group
                    v-model="UwMotorcadeMainVO.businessType2"
                    @change="changecheckbox2"
                  >
                    <el-checkbox
                      v-for="state in status2"
                      :label="state.code"
                      :key="state.code"
                    >{{state.value}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button @click="rtReportedchu" size="mini" type="primary">导出</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import HeadMenu from "@/components/layout/headMenu";
import LeftMenu from "@/components/layout/leftMenu";
import utils from "../../utils/index";

export default {
  name: "rtReported",
  components: {
    LeftMenu,
    HeadMenu
  },
  data() {
    return {
      status1: [
        { code: "0", value: "汇总统计" },
        { code: "1", value: "特批类" },
        { code: "2", value: "异地类" },
        { code: "3", value: "搅拌车类" },
        { code: "4", value: "特二类" },
        { code: "5", value: "高保额/限额类" },
        { code: "6", value: "货车类" },
        { code: "7", value: "负价值客户类" },
        { code: "8", value: "转入类" },
        { code: "9", value: "批减批退类" },
        { code: "10", value: "销售费用/手续费类" },
        { code: "11", value: "其他类" },
        { code: "12", value: "续保报备"}
        
      ],
      status2: [
        { code: "0", value: "异地类中武汉新车" },
        { code: "1", value: "异地类中赣C" },
        { code: "2", value: "异地类中其他" },
        { code: "3", value: "货车类中营业货车" },
        { code: "4", value: "货车类中非营业货车" },
        { code: "5", value: "货车类中挂车" }
      ],
      UwMotorcadeMainVO: {
        radio: "1",
        businessStates: [],
        businessType1: [],
        businessType2: [],
      },
      activeNames: ["1"],
      flag: true,
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    //导出
    rtReportedchu() {
      //   let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      //   let _url = this.HOST + this.$url.rtReportedToInsured;
      /**
       * params1  url  地址
       * params  data 参数
       */
      //   utils.axiosDown(_url, uwMotorcadeMainVO);
    },
    // 单选框改变
    changeRadioHandler(){
        console.log(this.UwMotorcadeMainVO.radio,typeof this.UwMotorcadeMainVO.radio)
        if(this.UwMotorcadeMainVO.radio==1){
            this.status1.push({ code: "12", value: "续保报备"})
        }else if(this.UwMotorcadeMainVO.radio==2){
           this.status1.pop({ code: "12", value: "续保报备"})
        }
    },
    //一级业务
    changecheckbox1() {
      console.log(this.UwMotorcadeMainVO.businessType1);
    },
    // 二级业务
    changecheckbox2() {
      console.log(this.UwMotorcadeMainVO.businessType2);
    }
  },
  created() {}
};
</script>
<style scoped>
.el-collapse {
  border: 0;
}
.el-collapse >>> .el-collapse-item__wrap,
.el-collapse >>> .el-collapse-item__header {
  border: 0;
}
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
}
.el-card >>> .el-card__body {
  padding: 10px 20px;
}
.title-blue-bar {
  width: 10px;
  height: 20px;
  background-color: #409eff;
  border-radius: 8px;
  margin-right: 10px;
}
.circular {
  border-radius: 8px;
}
</style>
