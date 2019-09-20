<template>
  <div>
    <!-- 超权限 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">流转记录</div>
          </template>
          <div v-for="(val,key,i) in UwMotorcadeTransferRecords" :key="i">
            <el-form
              ref="form"
              class="updatastyleinput"
              :model="UwMotorcadeTransferRecords"
              label-width="140px"
            >
              <el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="序号:">
                      <el-input v-model="val.id"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="流向:">
                      <el-input v-model="val.flowTo"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="所处状态:">
                      <el-input v-model="val.state"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="流转节点:">
                      <el-input v-model="val.transferNode"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="处理时间:">
                      <el-input v-model="val.handleDate"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="提交时间:">
                      <el-input v-model="val.submitDate"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="审核人:">
                      <el-input v-model="val.auditUsser"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="16">
                    <el-form-item label="是否总公司撤回业务:">
                      <el-input v-model="val.isWithdrawn"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-row>
            </el-form>
            <hr />
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
  name: "transferRecord",

  data() {
    return {
      UwMotorcadeTransferRecords: {
 
      },
      centerDialogVisible: false,
      activeNames: ["1"],
      relations,
      pageSize: 10,
      valueidx: ""
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getUwMotorcadeTransferRecords"]),
    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    }
  },
  created() {
    this.$fetch
      .get(this.HOST + this.$url.carAuditPageTransferRecord, {
        params: { motorcadeNo: this.$route.query.motorcadeNo }
      })
      .then(res => {
        console.log(res);
        this.UwMotorcadeTransferRecords = res;
      });
      //  let res={a: { id: "1" },b: { id: "2" },c: { id: "3" }}
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
