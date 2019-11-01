<template>
  <div class="div1">
    <div class="div2">
      <iframe :src="dataSrc" frameborder="0"></iframe>
    </div>
    <div class="div2">
      <iframe :src="dataSrc1" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
import utils from "../../../utils";

export default {
  name: "CDQualityReport",
  components: {},
  data() {
    return {
      dataSrc: "",
      dataSrc1: ""
    };
  },

  computed: {},

  methods: {
    init() {
      this.$fetch
        .get(this.HOST + this.$url.underwritingCarTeam, {
          params: {
            reportFormsType: "hisporialhighriskteam"
            // businessNo: "",
            // taskType: "",
            // comcode: ""
          }
        })
        .then(res => {
          console.log(res);
          this.dataSrc = res;
        });
    },
    init1() {
      this.$fetch
        .get(this.HOST + this.$url.underwritingCarTeam, {
          params: {
            reportFormsType: "lastyearhighriskteam"
            // businessNo: "",
            // taskType: "",
            // comcode: ""
          }
        })
        .then(res => {
          console.log(res);
          this.dataSrc1 = res;
        });
    }
  },
  created() {
    this.init();
    this.init1();
  }
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
.div2 {
  height: 370px;
}
.div1 {
  height: 750px;
}
/* .div1 >>>.el-main[data-v-ecebbf8c]{
  background-color: #DFDFDF;
      margin-bottom: 0;
} */
</style>
