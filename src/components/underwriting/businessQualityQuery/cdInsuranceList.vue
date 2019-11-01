<template>
  <div>
    <iframe :src="dataSrc" frameborder="0"></iframe>
  </div>
</template>
<script>
import utils from "../../../utils";

export default {
  name: "CDInsuranceList",
  components: {},
  data() {
    return {
      dataSrc: ""
    };
  },

  computed: {},

  methods: {
    init() {
      this.$fetch
        .get(this.HOST + this.$url.underwritingCarTeam, {
          params: {
            reportFormsType: "prpalltotal",
            businessNo: "",
            taskType: "",
            comcode: ""
          }
        })
        .then(res => {
          console.log(res);
          this.dataSrc = res;
        });
    }
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
div {
  height: 750px;
}
</style>
