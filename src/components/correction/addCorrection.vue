<template>
  <div>
    <TplCorrection flag="add"></TplCorrection>
  </div>
</template>
<script>
import TplCorrection from "@/components/correction/templates/tpl_correction";
import { mapActions, mapGetters } from "vuex";
import { relations } from "@/assets/js/baseCode";

export default {
  name: "addCorrection",

  components: { TplCorrection },

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
