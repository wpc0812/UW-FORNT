<template>
  <div>
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form :model="UwMotorcadeMainVO" label-width="150px">
            <el-row>
              <el-row class="el_row_msg">
                <el-col :span="10">
                  <el-form-item label="姓名:">
                    <el-input v-model="UwMotorcadeMainVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="客户编码:">
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="text_select">
                <el-col :span="22" class="text-center">
                  <el-button @click="query()" size="mini" type="primary">查询</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card>
      <el-table
        :data="results"
        stripe
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column prop="businessNo" label="客户编码"></el-table-column>
        <el-table-column prop="contractNo" label="姓名"></el-table-column>
        <el-table-column prop="insuredFlag" label="证件号码"></el-table-column>
        <el-table-column prop="applicCode" label="选择"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
export default {
  name: "selectMSg",
  data() {
    return {
      UwMotorcadeMainVO: {
        insuredName: "",
        insuredCode: ""
      },
      activeNames: ["1"],
      rtAdd: {},
      results: [],
      datas: {
        id: "450001000100002",
        name: "",
        hid: "12354644",
        chose: "选择"
      },
      relations,
      flag: false
    };
  },
  computed: {},

  methods: {
    query() {
      // console.log(this.UwMotorcadeMainVO);
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO;
      this.$fetch
        .post(this.HOST + this.$url.rtAddToInsured, uwMotorcadeMainVO)
        .then(res => {
          console.log(res);
          this.results = res;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
  
  }
};
</script>
<style scoped>
.el_row_msg {
  height: 32px;
}
.el_row_bottom >>> .el-input--small .el-input__inner {
  height: 23px;
  line-height: 23px;
}
.text_select {
  height: 47px;
}
.el-card >>> .el-card__body {
  margin-bottom: 10px;
}
.el_row_top {
  margin-top: 5px;
}
.peoCode {
  width: 150px;
  float: left;
}
.el_row_bottom {
  border-bottom: 1px solid aqua;
}
.selectCode {
  display: inline-block;
  width: 40px;
  height: 25px;
  margin-top: 3px;
  padding: 2px 2px 0 2px;
}
.el_row_top {
  background-color: #cbecf2;
  height: 23px;
}
.el-form >>> label {
  font-size: 12px;
}
</style>
