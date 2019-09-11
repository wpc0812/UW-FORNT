<template>
  <div>
    <!-- 超权限 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">超权限车队审核意见</div>
          </template>
          <div v-for="(val,key,index) in underwriterInfor" :key="index">
          <el-form ref="form" :model="underwriterInfor" :disabled="trues" class="updatastyleinput" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="序号:">
                    <el-input v-model="val.id"></el-input>
                  </el-form-item>
                </el-col>
                  <el-col :span="8">
                  <el-form-item label="处理机构:">
                    <!-- 标志（0：总公司 1：分公司） -->
                    <el-input v-model="val.flag"></el-input>
                  </el-form-item>
                </el-col>
                  <el-col :span="8">
                  <el-form-item label="处理人:">
                    <el-input v-model="val.userCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="审批意见:">
                    <el-input v-model="val.handleText"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-row>
          </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "auditOpinion",

  data() {
    return {
      trues:true,
        underwriterInfor:{},
      centerDialogVisible:false,
      activeNames: ["1"],
      relations,
      pageSize: 10,
      valueidx:"",
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),
    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    }
  },
  created() {
    console.log(this.$route.query.motorcadeNo,this.$url.carAuditPageAuditOpinion);
        this.$fetch
        .get(this.HOST + this.$url.carAuditPageAuditOpinion, {
          params: { motorcadeNo: "YD450000004"||this.$route.query.motorcadeNo }
        })
        .then(res => {
          console.log(res);
          for(let i=0;i<res.length;i++){
            let objs={}
            this.underwriterInfor[i]=res[i]
          }
        });
   
  }
};
</script>
<style scoped>
.updatastyleinput >>> .el-form-item {
  margin-bottom: 0;
}
.updatastyleinput >>> .el-form-item__label {
  background: #e8f6f9;
}
.updatastyleinput >>> .el-input__inner {
  border-radius: 0px;
}
</style>