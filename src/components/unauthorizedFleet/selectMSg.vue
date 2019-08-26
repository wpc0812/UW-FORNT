<template>
  <div>
    <el-card class="circular mt4 shadow">
       <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form label-width="150px">
            <el-row>
              <el-row class="el_row_msg">
                <el-col :span="10">
                  <el-form-item label="姓名:">
                    <el-input v-model="names"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="客户编码:">
                    <el-input v-model="rtAdd.vesselName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="text_select">
               <el-col :span="22" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
              </el-col>
              </el-row>
              <el-row :gutter="1" class="el_row_top">
                <el-col :span="6">
                  <span>客户编码</span>
                </el-col>
                <el-col :span="6">
                  <span>姓名</span>
                </el-col>
                <el-col :span="6">
                  <span>证件号码</span>
                </el-col>
                <el-col :span="6">
                  <span>选择</span>
                </el-col>
            </el-row>
            <el-row class="el_row_bottom" v-if="flag">
                <el-col :span="6">
                  <span>{{datas.id}}</span>
                </el-col>
                <el-col :span="6">
                  <span>{{datas.name}}</span>
                </el-col>
                <el-col :span="6">
                  <span>{{datas.hid}}</span>
                </el-col>
                <el-col :span="6">
                  <el-select v-model="rtAdd.value" clearable placeholder="选择">
                      <el-option
                        v-for="relation in relations"
                        :key="relation.code"
                        :label="relation.value"
                        :value="relation.code"
                      ></el-option>
                    </el-select>
                </el-col>     
            </el-row>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
export default {
  name: "rtAdd",
  data() {
    return {
      names:"",
      activeNames: ["1"],
      rtAdd:{   
      },
      datas:{
          id:"450001000100002",
          name:"",
          hid:"12354644",
          chose:"选择"
      },
      relations,
      flag:false,
    };
  },
  computed: {

  },

  methods: {
   query(){
    //  this.$router.replace({path:'/rtReported'})
    // this.refs.ffff =Math.random(6)
    // console.log(this.q)
    if(this.names!==""){
        this.datas.name=this.names;
        this.flag=true
    }else{
        this.flag=false
    }
    
   },
  },
  created() {
      
  },
};
</script>
<style scoped>

.el_row_msg{
    height: 32px;
}
.el_row_bottom >>> .el-input--small .el-input__inner{
    height: 23px;
    line-height: 23px;
}
.text_select{
    height: 47px;
}
.el-card >>> .el-card__body{
    margin-bottom: 150px;
}
.el_row_top{
  margin-top: 5px;
}
.peoCode{
  width: 150px;
  float: left;
}
.el_row_bottom{
    border-bottom: 1px solid aqua;
}
.selectCode{
  display: inline-block;
  width: 40px;
  height: 25px;
  margin-top: 3px;
  padding: 2px 2px 0 2px;
}
.el_row_top{
    background-color: #CBECF2;
    height: 23px;
}
.el-form >>> label{
  font-size: 12px;
}
</style>
