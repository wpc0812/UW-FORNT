<template>
  <div>
    <!-- 查询条件 -->
    <el-card class="circular">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title" class="collapseBack">
            <div class="title-blue-bar"></div>
            <div class="card-title">请输入核保任务查询条件</div>
          </template>
          <el-form :model="underwriting" label-width="140px">
            <el-row class="rowBackColor">
              <el-row>
                <el-col :span="7">
                  <el-form-item label="核保规则编号:">
                    <el-input v-model="underwriting.ruleNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="业务号:">
                    <el-input v-model="underwriting.businessNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="机构代码:" class="text-left">
                    <el-input
                      style="width:60%"
                      v-model="underwriting.comCode"
                    ></el-input>
                    <span class="tip-color ml5" style="font-size: 12px">样例为:1501*,1502*</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
                  <el-form-item label="合同号:">
                    <el-input v-model="underwriting.contractNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="状态:" class="text-left">
                    <el-checkbox-group v-model="underwriting.state">
                      <el-checkbox
                        class="check-group"
                        v-for="state in status"
                        :label="state.code"
                        :key="state.code"
                      >{{state.value}}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
                <el-col :span="10">
                  <el-form-item label="核保类型:" class="text-left">
                    <el-checkbox-group
                      class="inline-block"
                      @change="handleCheckedCitiesChange('taskType', underwriting.taskType.length)"
                      v-model="underwriting.taskType"
                    >
                      <el-checkbox
                        class="check-group"
                        v-for="underwritingType in underwritingTypes"
                        :label="underwritingType.code"
                        :key="underwritingType.code"
                      >{{underwritingType.value}}</el-checkbox>
                    </el-checkbox-group>
                    <el-checkbox
                      class="check-group ml5"
                      :indeterminate="isIndeterminate.taskType"
                      v-model="checkAll.taskType"
                      @change="handleCheckAllChange('taskType')"
                    >所有</el-checkbox>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-col :span="7">
                <el-form-item label="提交时间:">
                  <el-date-picker
                    :title="underwriting.flowDate"
                    v-model="underwriting.flowDate"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetimerange"
                    time-arrow-control
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="占用状态:" class="text-left">
                  <el-checkbox-group v-model="underwriting.occupied">
                    <el-checkbox
                      class="check-group"
                      v-for="item of occupancyState"
                      :label="item.code"
                      :key="item.code"
                    >
                      {{item.value}}
                      <span class="tip-color" v-text="item.tip"></span>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="审批类型:" class="text-left">
                  <el-checkbox-group
                    class="inline-block"
                    @change="handleCheckedCitiesChange('appTypes', underwriting.appTypes.length)"
                    v-model="underwriting.appTypes"
                  >
                    <el-checkbox
                      class="check-group"
                      v-for="item of typeApproval"
                      :label="item.code"
                      :key="item.code"
                    >{{item.value}}</el-checkbox>
                  </el-checkbox-group>
                  <el-checkbox
                    class="check-group ml5"
                    :indeterminate="isIndeterminate.appTypes"
                    v-model="checkAll.appTypes"
                    @change="handleCheckAllChange()"
                  >所有</el-checkbox>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="渠道码:">
                  <el-input v-model="underwriting.agentCode"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="被保险人:">
                  <el-input v-model="underwriting.insuredName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24" class="text-center">
                <el-button @click="query()" size="mini" type="primary">查询</el-button>
                <el-button @click="reset" size="mini">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 查询结果 -->
    <el-card class="circular mt4 shadow">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">未处理任务</div>
          </template>
          <el-collapse v-model="task.tab1" @change="untreated">
            <tpl-underwriting
              class="collapse-no-background"
              title="散单投保单"
              @paging="paging"
              @goDetail="goDetail"
              :results="getList"
              mark="untreated"
              :arrow="task.tab1.includes('散单投保单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单投保单"
              @paging="paging"
              @goDetail="goDetail"
              mark="untreated"
              class="collapse-no-background"
              :results="getList"
              :arrow="task.tab1.includes('团单投保单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              title="批单"
              @paging="paging"
              @goDetail="goDetail"
              mark="untreated"
              class="collapse-no-background"
              :results="getList"
              :arrow="task.tab1.includes('批单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单方案"
              mark="untreated"
              @paging="paging"
              @goDetail="goDetail"
              class="collapse-no-background"
              :results="getList"
              :arrow="task.tab1.includes('团单方案')"
              :total="getList.length"
            ></tpl-underwriting>
          </el-collapse>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <div class="title-blue-bar"></div>
            <div class="card-title">已处理任务</div>
          </template>
          <el-collapse v-model="task.tab2" @change="processed">
            <tpl-underwriting
              class="collapse-no-background"
              title="散单投保单"
              :results="getList"
              @paging="paging"
              @goDetail="goDetail"
              mark="treated"
              :arrow="task.tab2.includes('散单投保单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              class="collapse-no-background"
              title="团单投保单"
              @paging="paging"
              @goDetail="goDetail"
              :results="getList"
              mark="treated"
              :arrow="task.tab2.includes('团单投保单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              class="collapse-no-background"
              title="批单"
              @paging="paging"
              @goDetail="goDetail"
              mark="treated"
              :results="getList"
              :arrow="task.tab2.includes('批单')"
              :total="getList.length"
            ></tpl-underwriting>
            <tpl-underwriting
              title="团单方案"
              mark="treated"
              @paging="paging"
              @goDetail="goDetail"
              class="collapse-no-background"
              :results="getList"
              :arrow="task.tab2.includes('团单方案')"
              :total="getList.length"
            ></tpl-underwriting>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {
  typeApproval,
  status,
  occupancyState,
  underwritingTypes
} from "@/assets/js/baseCode";
import tplUnderwriting from "@/components/underwriting/templates/tpl_underwriting";

const [taskType, appTypes] = [
  ["ST", "GT", "E", "H"],
  ["a", "b", "c", "d", "e", "f", "g", "i", "h"]
];

export default {
  name: "Underwriting",

  components: { tplUnderwriting },

  data() {
    return {
      task: {
        tab1: [],
        tab2: []
      },
      activeNames: ["1", "2", "3"],
      underwriting: {
        state: [],
        taskType: [],
        occupied: [],
        appTypes: []
      },
      checkAll: {
        taskType: false,
        appTypes: false
      },
      isIndeterminate: {
        appTypes: false,
        taskType: false
      },
      typeApproval,
      occupancyState,
      status,
      underwritingTypes,
      getList: []
    };
  },

  computed: {
    // ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getUnderwriting"]),

    //重置
    reset() {
      this.underwriting = {
        state: [],
        taskType: [],
        occupied: [],
        appTypes: [],
      };
      this.checkAll = {
        taskType: false,
        appTypes: false
      };
      this.isIndeterminate = {
        appTypes: false,
        taskType: false
      }
    },
    //未处理-散单投保单
    UntreatedBulk(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },
    //未处理-团单投保单
    UntreatedGroup(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1?_pageSize=${pageSize}&_pageNo=${pageNo}`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },
    //未处理-批单
    UntreatedBatch(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1?_pageSize=${pageSize}&_pageNo=${pageNo}`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },
    //已处理-散
    TreatedBulk(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1?_pageSize=${pageSize}&_pageNo=${pageNo}`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },
    //已处理-团
    TreatedGroup(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1?_pageSize=${pageSize}&_pageNo=${pageNo}`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },
    //已处理-团
    TreatedBatch(pageSize = 10, pageNo = 1) {
      this.postRequest(
        `/fridayService02/queryobject1?_pageSize=${pageSize}&_pageNo=${pageNo}`,
        this.underwriting
      ).then(res => {
        this.getList = res.data.data;
      });
    },

    //查询
    query() {
      // this.getUnderwriting(this.underwriting);
      this.UntreatedBulk(); //未处理-散单
      // this.UntreatedGroup(); //团单
      // this.UntreatedBatch(); //批单
      // this.TreatedBulk(); //已处理-散
      // this.TreatedGroup(); //团
      // this.TreatedBatch(); //批
    },

    //详情
    goDetail(businessNo) {
      this.$router.push({
        path: '/underwritingDetails',
        query: {
          businessNo
        }
      })
    },

    //分页查询
    paging(obj) {
      if (obj.mark == "untreated") {
        switch (obj.title) {
          case "散单投保单":
            this.UntreatedBulk(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "团单投保单":
            this.UntreatedGroup(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "批单":
            this.UntreatedBatch(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "团单方案":
            this.UntreatedBatch(obj.pageSize, obj.pageNo); //未处理-散单
            break;
        }
      } else {
        switch (obj.title) {
          case "散单投保单":
            this.TreatedBulk(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "团单投保单":
            this.TreatedGroup(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "批单":
            this.TreatedBatch(obj.pageSize, obj.pageNo); //未处理-散单
            break;

          case "团单方案":
            debugger
            this.TreatedBatch(obj.pageSize, obj.pageNo); //未处理-散单
            break;
        }
      }
    },

    //全选
    handleCheckAllChange(flag) {
      if (flag == "taskType") {
        this.underwriting.taskType = this.checkAll.taskType ? taskType : [];
        this.isIndeterminate.taskType = false;
      } else {
        this.underwriting.appTypes = this.checkAll.appTypes ? appTypes : [];
        this.isIndeterminate.appTypes = false;
      }
    },

    //单选
    handleCheckedCitiesChange(flag, len) {
      if (flag == "taskType") {
        this.checkAll.taskType = len === taskType.length;
        this.isIndeterminate.taskType = len > 0 && len < taskType.length;
      } else {
        this.checkAll.appTypes = len === appTypes.length;
        this.isIndeterminate.appTypes = len > 0 && len < appTypes.length;
      }
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
.collapse-no-background >>> .el-collapse-item__header {
  background: none;
  height: 40px;
}
/* .circular{
  background-color: #212224;
} */
.circular /deep/ .collapseBack{
  background-color: #212224;
}
/* .circular /deep/ .rowBackColor{
  background-color: #212224;
} */
</style>
