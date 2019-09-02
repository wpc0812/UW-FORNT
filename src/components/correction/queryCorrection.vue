<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form :model="UwctrlVO" label-width="150px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select
                      v-model="UwctrlVO.insuredFlag"
                      @change="currentSel"
                      clearable
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="item in relationss"
                        :key="item.label"
                        :label="item.value"
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
                  <el-form-item label="核保类别:">
                    <el-select v-model="UwctrlVO.flag" clearable placeholder="请选择">
                      <el-option
                        v-for="category in categorys"
                        :key="category.label"
                        :label="category.value"
                        :value="category.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="控制结束日期起始:">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate1"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="控制结束日期结束:">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwctrlVO.finishDate2"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="有效标志位:">
                    <el-select v-model="UwctrlVO.valid" clearable placeholder="请选择">
                      <el-option
                        v-for="flag in flags"
                        :key="flag.label"
                        :label="flag.value"
                        :value="flag.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="折扣率上限:">
                    <el-input v-model="UwctrlVO.profitRateUp"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="号牌号码:">
                    <el-input v-model="UwctrlVO.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="手续费上限:">
                    <el-input v-model="UwctrlVO.costRateUpper"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="商业险跟单手续费上限:">
                    <el-input v-model="UwctrlVO.costRateBIUpper"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24" class="text-center">
                  <el-button size="mini" @click="query()" type="primary">查询</el-button>
                  <el-button size="mini" @click="acd('a')">增加</el-button>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-row class="text-left">
        <el-pagination
        small
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[20, 40, 80, 160]"
        :page-size="20"
        layout="sizes, prev, pager, next"
        :total="totalnum">
      </el-pagination>
      </el-row>
      <el-table
        :data="results"
        stripe
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column type="index" label="序号">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="BusinessNum(scope.$index+1,scope.row.id)"
            >{{ scope.$index+1 }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="businessNo" label="业务号"></el-table-column>
        <el-table-column prop="contractNo" label="团单号"></el-table-column>
        <el-table-column prop="insuredFlag" label="关系人标志"></el-table-column>
        <el-table-column prop="applicCode" label="关系人代码"></el-table-column>
        <el-table-column prop="insuredName" label="关系人名称"></el-table-column>
        <el-table-column prop="licenseNo" label="号牌号码"></el-table-column>
        <el-table-column prop="profitRateUp" label="折扣率上限"></el-table-column>
        <el-table-column prop="costRateUpper" label="手续费上限"></el-table-column>
        <el-table-column prop="costRateBIUpper" label="商业险跟单手续费上限"></el-table-column>
        <el-table-column prop="valid" label="核保类别"></el-table-column>
        <el-table-column prop="finishDate" label="控制结束日期"></el-table-column>
        <el-table-column prop="handlerUser" label="特批操作员"></el-table-column>
        <el-table-column label="修改">
          <template slot-scope="scope">
            <el-button type="text"  :disabled="scope.row.valid=='0'" @click="acd('c', scope.row.id)">修改</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="index" label="注销">
          <template slot-scope="scope">
            <el-button type="text" :disabled="scope.row.valid=='0'" @click="acDelete(scope.row.id,results)">注销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
import qs from "querystring";
export default {
  name: "queryCorrection",

  data() {
    return {
        currentPage:4,
      totalnum:1,
      dochoose: false,
      handleCurrentChange: {},
      categorys: [
        { value: "全部", label: "0" },
        { value: "1_人工核保", label: "1" },
        { value: "2_自动核保通过", label: "2" },
        { value: "3_自动打回", label: "3" }
      ],
      UwctrlVO: {
        applicCode: "",
        insuredFlag: "",
        insuredName: "",
        businessNo: "",
        contractNo: "",
        flag: "",
        finishDate1: "",
        finishDate2: "",
        valid: "",
        profitRateUp: "",
        licenseNo: "",
        costRateUpper: "",
        costRateBIUpper: ""
      },
      flags: [
        { value: "全部", label: "" },
        { value: "0_无效", label: "0" },
        { value: "1_有效", label: "1" }
      ],
      // results: [
      //   {businessNo:"1",contractNo:"1",insuredFlag:"1",applicCode:"1",insuredName:"1",licenseNo:"1",
      //    profitRateUp:"1",costRateUpper:"1",costRateBIUpper:"1",valid:"1",finishDate:"1",handlerUser:"1",}
      //    ,{businessNo:"2",contractNo:"1",insuredFlag:"1",applicCode:"1",insuredName:"1",licenseNo:"1",
      //    profitRateUp:"2",costRateUpper:"1",costRateBIUpper:"1",valid:"1",finishDate:"1",handlerUser:"1",}
      // ],
      results:[],
      relationss: [
        { value: "全部", label: "" },
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      activeNames: ["1"],
      total: 10,
      relations: {}
    };
  },
  computed: {
    ...mapGetters(["getList"])
  },
  mounted() {},
  methods: {
    ...mapActions(["getform"]),

    currentSel() {
      // console.log(this.UwctrlVO.insuredFlag);
    },
      // 页数显示
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    acd(flag, row) {
      if (flag == "a") {
        this.$router.push({
          name: "增加核保特批页面",
          query: {
            row
          }
        });
      }
      if (flag == "c") {
        // console.log(row);
        this.$router.push({
          name: "修改核保特批页面",
          query: {
            row: row
          }
        });
      }
    },
    //点击序号到详情页
    BusinessNum(idx, row) {
       this.$router.push({path: '/detailCorrection',query:{row:row}})
    },
    //注销
    acDelete(id, row) {
           let uwctrlVO = this.UwctrlVO;
      this.$fetch.get(this.HOST + this.$url.correctionDelete,{params:{id:id}}).then(res=>{
          if (res == true) {
            this.query()
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //保存
    query() {
      let uwctrlVO = this.UwctrlVO;
      this.$fetch.post(this.HOST + this.$url.correctionQury,uwctrlVO).then(res=>{
          if(res.length>0){
          this.results = res;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
     let uwctrlVO = this.UwctrlVO;
      this.$fetch.post(this.HOST + this.$url.correctionQury,uwctrlVO).then(res=>{
          if(res){
          this.results = res;
          }
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>
<style scoped>
.check-group {
  margin-right: 10px;
}
.el-form-item__label {
  color: #fff !important;
  background-color: #e8f6f9;
}
.collapse-no-background >>> .el-collapse-item__header {
  background: none;
  height: 40px;
}
</style>
