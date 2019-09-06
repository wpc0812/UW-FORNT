<template>
  <div>
    <!-- <LeftMenu/> -->
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form ref="form" :model="UwMotorcadeMainVO" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人标志:">
                    <el-select v-model="UwMotorcadeMainVO.insuredflag" clearable placeholder="请选择">
                      <el-option
                        v-for="item in relations"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人代码:">
                    <el-input v-model="UwMotorcadeMainVO.insuredCode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="关系人名称:">
                    <el-input v-model="UwMotorcadeMainVO.insuredName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:">
                    <el-input v-model="UwMotorcadeMainVO.motorcadeNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="提交时间:" class="text-left">
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      v-model="UwMotorcadeMainVO.firstSubmitDate"
                      type="date"
                      placeholder="选择日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="rtReportedchu" size="mini">导出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow" v-if="flag">
      <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="state" label="流转状态"></el-table-column>
        <el-table-column prop="motorcadeNo" label="业务号">
          <template slot-scope="scope"> 
            <el-button type="text" size="small" @click="BusinessNum(scope.row)">{{scope.row.motorcadeNo}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="comcode" label="分公司"></el-table-column>
        <el-table-column prop="insuredflag" label="关系人标志"></el-table-column>
        <el-table-column prop="insuredName" label="关系人名称"></el-table-column>
        <el-table-column prop="businessNature" label="业务来源"></el-table-column>
        <el-table-column prop="lastFourYearPayPercent" width="115" label="历史满期赔付率"></el-table-column>
        <el-table-column prop="finishdate" label="控制结束日期"></el-table-column>
        <el-table-column prop="isextendtime" label="是否续保"></el-table-column>
        <el-table-column prop="firstSubmitDate" label="提交时间"></el-table-column>
        <el-table-column prop="submitUser" label="分公司上报人"></el-table-column>
        <el-table-column prop="memberName" label="总公司审核人"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import { relations } from "@/assets/js/baseCode";
import HeadMenu from "@/components/layout/headMenu";
import LeftMenu from "@/components/layout/leftMenu";
import qs from "querystring";
import utils from '../../utils/index'
export default {
  name: "otReported",
  components:{
     LeftMenu, HeadMenu 
  },
  data() {
    return {
      UwMotorcadeMainVO:{
        insuredflag:"",
        insuredCode:"",
        insuredName:"",
        motorcadeNo:"",
        firstSubmitDate:""
      },
      activeNames: ["1"],
      relations:[
        { value: "1_被保险人", label: "1" },
        { value: "2_投保人", label: "2" }
      ],
      flag:true,
      results:[],
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    // ...mapActions(["getUwMotorcadeMainVO"]),
    //导出
    rtReportedchu() {
      let uwMotorcadeMainVO = this.UwMotorcadeMainVO 
    
    let _url = this.HOST + this.$url.rtReportedToInsured
      this.axiosDown(_url,uwMotorcadeMainVO)
    },
   axiosDown(url,data){
      axios({
          // 用axios发送post请求
          method: "post",
          headers: {
              token: window.localStorage["token"]
              // 'Content-Type': 'application/x-www-form-urlencoded'
          },
          url:url, // 请求地址
          data: data, // 参数
          responseType: "blob" // 表明返回服务器返回的数据类型
      }).then(res => {
          // 处理返回的文件流

          var tempfileName = window.decodeURI(res.headers['content-disposition'].split(';')[1])
          var fileName =tempfileName.split('=')[1]
          const content = res.data;
          const blob = new Blob([content]);
          //edge 浏览器需要进行特殊处理  if ("download")会把edge判断为非ie，造成无法下载
          var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
          if(userAgent.indexOf("Edge") > -1) {
              navigator.msSaveBlob(blob, fileName);
              return
          }
          if ("download" in document.createElement("a")) {
              // 非IE下载
              const elink = document.createElement("a");
              elink.download = fileName;
              elink.style.display = "none";
              elink.href = URL.createObjectURL(blob);
              document.body.appendChild(elink);
              elink.click();
              URL.revokeObjectURL(elink.href); // 释放URL 对象
              document.body.removeChild(elink);
          } else {
              // IE10+下载
              navigator.msSaveBlob(blob, fileName);
          }
      });
    },
    //查询
    query() {
       this.$fetch.post(this.HOST + this.$url.rtAddGetUnder, this.UwMotorcadeMainVO)
      .then(res=>{
        console.log(res)
        this.results = res
      })
      
    },

    BusinessNum(row){
      // console.log(row);
      this.$router.push({path: '/carAuditPageother',query:{row:row.motorcadeNo}})
    },
    // 未处理展开关闭状态
    untreated(val) {
      this.task.tab1 = val;
    },

    // 已处理展开关闭状态
    processed(val) {
      this.task.tab2 = val;
    }
  },
  created() {
    // this.UwMotorcadeMainVO.insuredflag="全部"
    let uwMotorcadeMainVO=this.UwMotorcadeMainVO
    this.$fetch.post(this.HOST + this.$url.rtAddGetUnder, uwMotorcadeMainVO)
    .then(res=>{
      console.log(res)
      this.results=res
    })
  }
};
</script>
<style scoped>
.el-collapse {
  border: 0;
}
.el-collapse >>> .el-collapse-item__wrap, .el-collapse >>> .el-collapse-item__header {
  border: 0;
}
.card-title {
  color: #717385;
  font-size: 15px;
  font-weight: 700;
}
.el-card >>> .el-card__body {
  padding: 10px 20px;
}
.title-blue-bar {
  width: 10px;
  height: 20px;
  background-color: #409eff;
  border-radius: 8px;
  margin-right: 10px;
}
.circular {
  border-radius: 8px;
}
</style>
