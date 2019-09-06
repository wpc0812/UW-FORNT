<template>
  <div>
    <!-- 客户查询 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请选择查询类型</div>
          </template>
          <el-form ref="peifulv" :model="peifulv" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="关系人代码:" class="text-left">
                    <el-input v-model="peifulv.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query" type="primary">客户查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 标的车查询 -->
      <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">请选择查询类型</div>
          </template>
          <el-form ref="peifulv1" :model="peifulv1" label-width="140px">
            <el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="业务号:" class="text-left">
                    <el-input v-model="peifulv1.endorseNo"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="8">
                  <el-form-item label="车牌号码:" class="text-left">
                    <el-input v-model="peifulv1.licenseNo"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="8">
                  <el-form-item label="发动机号:" class="text-left">
                    <el-input v-model="peifulv1.engineNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
               <el-row>
                <el-col :span="8">
                  <el-form-item label="车架号:" class="text-left">
                    <el-input v-model="peifulv1.frameNo"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="8">
                  <el-form-item label="VIN号:" class="text-left">
                    <el-input v-model="peifulv1.vinNo"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="24" class="text-center">
                <el-button @click="query1" type="primary">标的车查询</el-button>
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
import { relations } from "@/assets/js/baseCode";

export default {
  name: "peifulv",

  data() {
    return {
      relations,
      activeNames: ['1','2'],
      arrow: false,
      peifulv: {
          condition:"1",
          customerCodeT:"",
          paramFlag:"1",
          ComCode:"1"
      },
        peifulv1: {
            "condition": "1",
            "paramFlag": "1",
            "customerCodeT": "1",
            "ComCode": "1",
            "proposalNo": "1",
            "endorseNo": "",
            "engineNo": "",
            "frameNo": "",
            "licenseNo": "",
            "vinNo": ""
      },
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
      //客户查询
    query() {
        this.$fetch({
        url: this.HOST + '/undwrt/idsQuery',
        method: "post",
        data: this.peifulv
      })
        .then(res => {
       console.log(res)
     
        })
    },
    //标的车查询
    query1() {
        this.$fetch({
        url: this.HOST + '/undwrt/idsQuery',
        method: "post",
        data: this.peifulv1
      })
        .then(res => {
       console.log(res)
     
        })
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
  created() {}
};
</script>
<style scoped>
</style>
