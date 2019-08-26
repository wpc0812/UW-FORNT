<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">超权限车队审核意见</div>
          </template>
          <el-form ref="form" :model="underwriting" label-width="140px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理机构:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理人:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="审核意见:" class="text-left">
                  <label>核保员意见：</label>
                  <el-input v-model="underwriting.vesselName" class="width90-per"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理机构:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理人:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="审核意见:" class="text-left">
                  <label>核保员意见：</label>
                  <el-input v-model="underwriting.vesselName" class="width90-per"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理机构:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理人:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="审核意见:" class="text-left">
                  <label>核保员意见：</label>
                  <el-input v-model="underwriting.vesselName" class="width90-per"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理机构:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理人:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="审核意见:" class="text-left">
                  <label>核保员意见：</label>
                  <el-input v-model="underwriting.vesselName" class="width90-per"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "LimitCheck",

  data() {
    return {
      activeNames: ['1'],
      underwriting: {}
    };
  },
  methods: {},
  components: {}
};
</script>
<style scoped>
.width90-per {
  width: 90%;
}
</style>  