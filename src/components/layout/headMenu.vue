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
            <span class="pt5">您当前的位置：{{ webPostion }}</span>
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
import { debuglog } from 'util';
export default {
  components: { Screenfull },
  data(){
    return{
      webPostion:''
    }
  },
  created() {
    if( this.$route.path === '/addwriteInfor') {
     
      switch(this.$route.query.type){
        case 'CHANGE':
          this.webPostion = '修改核保员信息'
          break
        case 'ADD' :
          this.webPostion = '增加核保员信息'
          break
        case 'READY':
          this.webPostion = '查看核保员信息'
          break
      }
    } else{
        this.webPostion = this.$route.name
    }
  }
};
</script>
<style lang="scss" scoped>
.header-bg {
  color: #F5FAFF;
  // background: url("../../assets/imgs/background-img.jpg");
  background: #301C1C;
  margin: 0 10px;
  background-size: cover;
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
