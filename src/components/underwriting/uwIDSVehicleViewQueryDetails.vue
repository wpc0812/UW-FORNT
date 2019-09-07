<template>
  <div class="titlestyle">
    <!-- v-if=" type == 'CAR'" -->
      <el-card class="circular">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="title-blue-bar"></div>
              <div class="card-title">赔付率信息</div>
            </template>
            <el-form ref="peifulv" :model="peifulv" label-width="140px">
              <el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="赔付率查询信息:">
                      <el-input v-model="peifulv.customerCodeT"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-col :span="24" class="text-center">
                  <el-button @click="query" type="primary">返回</el-button>
                  <el-button @click="query" type="primary">关闭</el-button>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "flowLogView",
  data() {
    return {
        activeNames: ["1"],
        peifulv:{},

    };
  },

  methods: {
      query(){
          
      }
  },

  created() {

  }
};
</script>
<style scoped>
.titlestyle {
  margin-top: 30px;
}
.el-dialog__body__update >>> .el-dialog__body {
  padding-top: 0;
}
.text-left {
  overflow: hidden;
}
.text-left {
  width: 1388px;
}
.circular {
  padding-bottom: 15px;
}
</style>

