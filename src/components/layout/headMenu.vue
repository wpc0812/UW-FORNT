<template>
  <div>
    <el-row class="font-size14 header-bg">
      <el-col :span="18" :offset="6">
        <el-row class="pt5">
          <el-col :span="22" :offset="1" class="head">
            <span>
              <i class="el-icon-user-solid"></i> 江苏车队质量（A3200000000）
            </span>
            <span>
              <i class="el-icon-user-solid"></i> 江苏省中国人民财产保险股份有限公司江苏省分公司（A3200000000）
            </span>
            <span>
              IP:10.10.1.165
              <screenfull class="inline-block mouse-pointer screenfull"/>
            </span>
          </el-col>
          <el-col :span="23" class="head pt10">
            <span class="pt5">您当前的位置：{{this.$route.name}}</span>
            <span>
              <el-button class="white" type="text">重新登录</el-button>
              <el-button class="white" type="text">[意见反馈]</el-button>
              <el-button class="white" type="text">[文档下载]</el-button>
              <el-button class="white" type="text">[操作手册]</el-button>
            </span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Screenfull from "@/components/templates/Screenfull";
export default {
  components: { Screenfull }
};
</script>
<style lang="scss" scoped>
.header-bg {
  color: #ffffff;
  // background: url("../../assets/imgs/background-img.jpg");
  background: #409EFF;
  margin: 0 10px;
  background-size: cover;
  border-radius: 5px;
  .head {
    display: flex;
    margin-left: 0;
    justify-content: space-between;
    .screenfull {
      font-size: 18px;
      padding-left: 10px;
    }
  }
}
</style>
