<template>
  <div>
    <!-- 提交审核 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">{{titletype}}</div>
          </template>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="nothas" label></el-table-column>
            <el-table-column prop="contractNo" label="业务号"></el-table-column>
            <el-table-column prop="comcode" label="分公司"></el-table-column>
            <el-table-column prop="insuredflag" label="控制关系人标志"></el-table-column>
            <el-table-column prop="insuredName" label="控制关系人名称"></el-table-column>
            <el-table-column prop="businessNature" label="业务来源"></el-table-column>
            <el-table-column prop="carcountAll" label="车队车辆总数"></el-table-column>
            <el-table-column prop="estimatedPremiumSize" label="预估保费规模(单位：万元)"></el-table-column>
            <el-table-column
              v-if="this.$route.query.nametype=='1'"
              prop="foreigncarcount"
              label="异地车数量"
            ></el-table-column>
            <el-table-column
              v-if="this.$route.query.nametype=='2'"
              prop="uppercarcount"
              label="超分公司权限车辆总数"
            ></el-table-column>
          </el-table>
          <el-table
            stripe
            :data="results"
            tooltip-effect="dark"
            :cell-style="{'text-align': 'center'}"
            :header-cell-style="{'text-align': 'center'}"
            :header-cell-class-name="'table-header-bg'"
          >
            <el-table-column prop="nothas" label></el-table-column>
            <el-table-column
              v-if="this.$route.query.nametype=='1'"
              prop="carCadastral"
              label="涉及车籍地"
            >
              <el-button
                type="text"
                size="small"
                @click="showCarSpecies(provinceCodes,'carCadastral')"
              >点击查看</el-button>
            </el-table-column>
            <el-table-column
              v-if="this.$route.query.nametype=='2'"
              prop="uppercartype"
              label="超分公司权限车辆种类"
            >
              <el-button
                type="text"
                size="small"
                @click="showCarSpecies(carTypeCodes,'uppercartype')"
              >点击查看</el-button>
            </el-table-column>

            <el-table-column prop="carmainmodel" label="车队车辆主要车型">
              <el-button
                type="text"
                size="small"
                @click="showCarSpecies(carTypeCodes,'carmainmodel')"
              >点击查看</el-button>
            </el-table-column>
            <el-table-column prop="carmainarea" label="车辆主要使用地">
              <el-button
                type="text"
                size="small"
                @click="showCarSpecies(provinceCodes,'carmainarea')"
              >点击查看</el-button>
            </el-table-column>
            <el-table-column prop="underWritingCondition" label="承保条件"></el-table-column>
            <el-table-column prop="costRatemax" label="商业险手续费上限"></el-table-column>
            <el-table-column prop="monitoringProgramme" label="监控方案"></el-table-column>
            <el-table-column prop="finishdate" label="控制结束日期"></el-table-column>
            <el-table-column prop="insuredNameSUB" label="关联关系人名称"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 弹窗 -->
    <el-dialog
      :lock-scroll="false"
      title="展示"
      class="tanchuang"
      :visible.sync="dialogVisibleMore"
      width="15%"
    >
      <div class="ulli" v-for="(item,index) in arrays" :key="index">{{item}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibleMore = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>    
<script>
import { mapActions, mapGetters } from "vuex";
import { carTypeCodes, provinceCodes } from "@/assets/js/baseCode";
import utils from "../../utils/index";

export default {
  name: "carContrast",
  data() {
    return {
      titletype: "",
      activeNames: "1",
      results: [
        {
          nothas:"原始值："
        },
        {
          nothas:"改后值："
        }
      ],
      dialogVisibleMore: false,
      allData: {
        uppercartype: [],
        carmainmodel: [],
        carmainarea: [],
        carCadastral: []
      },
      arrays: [],
      carTypeCodes,
      provinceCodes
    };
  },

  methods: {
    // 点击查看
    showCarSpecies(items, types) {
      switch (types) {
        case "carCadastral":
          this.arrays = this.getShowlabels(
            this.provinceCodes,
            this.allData.carCadastral
          );

          break;

        case "uppercartype":
          this.arrays = this.getShowlabels(
            this.carTypeCodes,
            this.allData.uppercartype
          );
          break;

        case "carmainmodel":
          this.arrays = this.getShowlabels(
            this.carTypeCodes,
            this.allData.carmainmodel
          );
          break;

        case "carmainarea":
          this.arrays = this.getShowlabels(
            this.provinceCodes,
            this.allData.carmainarea
          );
          break;
      }
      this.dialogVisibleMore = true;
    },
    //弹框展示
    getShowlabels(items, options) {
      let label = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < options.length; j++) {
          // console.log(items[i].value,options[j])
          if (items[i].value === options[j]) {
            label.push(items[i].label);
          }
        }
      }
      return label;
    },
    // 初始化
    init() {
      this.$fetch
        .get(this.HOST + this.$url.carAuditPageOuterRatio, {
          params: { motorcadeNo: this.$route.query.motorcadeNo }
        })
        .then(res => {
          for (let i in res) {
            this.results.push(res[i]);
          }
          for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].carCadastral) {
              this.allData.carCadastral = this.results[i].carCadastral.split(
                ","
              );
            }

            if (this.results[i].uppercartype) {
              this.allData.uppercartype = this.results[i].uppercartype.split(
                ","
              );
            }
            if (this.results[i].carmainmodel) {
              this.allData.carmainmodel = this.results[i].carmainmodel.split(
                ","
              );
            }
            if (this.results[i].carmainarea) {
              this.allData.carmainarea = this.results[i].carmainarea.split(",");
            }
          }

          this.$forceUpdate();
        });
    }
  },
  created() {
    if (this.$route.query.nametype == "1") {
      this.titletype = "异地车队修改前后信息对比";
    } else if (this.$route.query.nametype == "2") {
      this.titletype = "其他车队修改前后信息对比";
    }

    this.init();
  }
};
</script>
<style scoped>
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.el_collapse_padding >>> .el-collapse-item__content {
  padding-bottom: 0px;
}
.el-form-item {
  margin-bottom: 0;
}
.text-left {
  text-align: center;
}
.float-right {
  text-align: center;
}
.ulli {
  text-align: center;
}
.ulli li {
  list-style-type: none;
}
.tanchuang >>> .el-dialog__footer {
  text-align: center;
}
</style>
