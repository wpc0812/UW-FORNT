<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入查询条件</div>
          </template>
          <el-form ref="form" :model="underwriterInfor" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="员工代码:">
                    <el-input v-model="underwriterInfor.usercode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="有效标志:">
                    <el-select v-model="underwriterInfor.vaild" clearable placeholder="请选择">
                      <el-option
                        v-for="(item,index) in vaildOptions"
                        :key="index"
                        :label="item.value + '-'+item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="员工姓名:">
                    <el-input v-model="underwriterInfor.userName"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="手机号码:">
                    <el-input v-model="underwriterInfor.phonecode"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="固定号码:" class="text-left">
                    <el-input v-model="underwriterInfor.telephone"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="enterWriterInfor('ADD',underwriterInfor.usercode)" size="mini">增加</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <!-- <el-pagination
        class="mb10 mt10 text-left"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="5"
        small
        :current-page="1"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="results.length"
      ></el-pagination> -->
      <el-table
        stripe
        :data="results"
        tooltip-effect="dark"
        :cell-style="{'text-align': 'center'}"
        :header-cell-style="{'text-align': 'center'}"
        :header-cell-class-name="'table-header-bg'"
      >
        <el-table-column prop="userName" label="员工姓名"></el-table-column>
        <el-table-column prop="userCode" label="员工代码"></el-table-column>
        <el-table-column prop="mailbox" label="员工邮箱"></el-table-column>
        <el-table-column prop="phonecode" label="手机号码"></el-table-column>
        <el-table-column prop="telephone" label="固定电话"></el-table-column>
        <el-table-column prop="autoDistributeFlag" label="自动分发"></el-table-column>
        <el-table-column prop="autoPushNum" label="自动推送条数"></el-table-column>
        <el-table-column label="修改">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="enterWriterInfor('CHANGE',scope.row.usersCode)"
            >修改</el-button>
          </template>
        </el-table-column>
        <el-table-column label="注销">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="deletes(scope.row.usersCode)">注销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹窗  -->
    <el-dialog title="提示" class="zhuxiao" :visible.sync="centerDialogVisible" width="30%" center>
      <span>确认注销???</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confrimCancle">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";
import { type } from 'os';

export default {
  name: "underwriterInfor",

  data() {
    return {
      centerDialogVisible:false,
      activeNames: ["1"],
      vaildOptions:[
        {value: '0',label: '无效'},
        {value: '1',label: '有效'},
      ],
      pageSize: 10,
      valueidx:"",
      userCode: '',
      underwriterInfor: {},
      results:[]
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getunderwriterInfor"]),

    reset() {
      this.$router.push({
        name: "增加核保员信息"
      });
    },
    enterWriterInfor(type, code) {
      // console.log(idx,code)
      this.$router.push({path:'/addwriteInfor',query:{
        'type': type,
        'userCode': code
      }})
      // this.$router.push({
      //   path: "/changewriterInfor",
      //   query: {
      //     idx,
      //     code
      //   }
      // });
    },
    deletes(code) {
      this.userCode = code;
      this.centerDialogVisible=true;
      // row.splice(idx + 1, 1);
    },
    confrimCancle(){
      this.$fetch.post(this.HOST + this.$url.underWriterInforDeleteChechker,{ 'sercode':this.userCode}),then(data =>{
        this.query()
      })
    },
    query() {
      // this.getunderwriterInfor(this.underwriterInfor);
      this.$fetch.post(this.HOST + this.$url.underWriterInforGetCkeckerList,this.underwriterInfor).then( data => {
        this.results = data
      })
    },

    handleSizeChange(val) {
      this.task.tab1 = val;
    },

    handleCurrentChange(val) {
      this.task.tab2 = val;
    }
  },
  created() {}
};
</script>
<style scoped>
 .zhuxiao >>> .el-dialog--center .el-dialog__body{
  text-align: center;
  font-size: 20px;
}

</style>
