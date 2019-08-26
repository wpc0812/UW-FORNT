<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">流转记录</div>
          </template>
          <el-form ref="form" :model="underwriting" label-width="140px">
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="序号:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流转接点:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="流向:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="所处状态:"></el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="流入时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="处理时间:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="提价时间:"></el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="审核人:"></el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否总公司撤回业务:"></el-form-item>
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
  name: "FlowDoc",
  data() {
    return {
      activeNames: ['1'],
      tableData: [],
      underwriting: {}
    };
  },
  methods: {},
  components: {}
};
</script>
<style scoped>
</style>  