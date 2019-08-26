<template>
  <div>
    <TplUndCorrection flag="change"></TplUndCorrection>
  </div>
</template>
<script>
import TplUndCorrection from "@/components/correction/templates/tpl_undcorrection";
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "addCorrection",

  components: { TplUndCorrection },

  data() {
    return {
      relations,
      rtReported: {},
      results: []
    };
  },

  computed: {
    ...mapGetters(["getList"])
  },

  methods: {
    ...mapActions(["getrtReported"]),

    reset() {},

    acd() {},

    query() {
      this.getrtReported(this.rtReported);
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
