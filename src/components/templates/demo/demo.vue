<template>
  <div>
    <h2>input 千分位</h2>
    model:{{ amount }}
    <div class="center">
      <format-input
        currency="¥"
        separator=","
        :precision="2"
        v-model="amount"
        :max="10000000"
        :min="-10000000"
        class="w300"
        empty-value="-"
        :minus="true"
        text-align="right"
      />
    </div>
    <h2>input 千分位-百分号</h2>
    model:{{ percent1 }}
    <div class="center">
      <format-input type="percent" :precision="4" v-model="percent1" class="w300" :minus="true"/>
    </div>
    <p>precision-小数点位数</p>
    <p>currency-自定义符号</p>
    <p>separator-分隔符</p>
    <p>emptyValue-值为空或0时自定义显示内容</p>
    <p>read-only="true"-只显示文本</p>
    <p>max-最大值</p>
    <p>min-最小值</p>
    <p>minus-boolean-是否启动负数和最小值</p>
    <p>text-align -string- 文本对齐方式</p>
  </div>
</template>

<script>
import formatInput from "../formatInput/index.vue";

export default {
  components: { formatInput },
  name: "InputDemo",
  data() {
    return {
      amount: "12332",
      percent1: "12"
    };
  },
  methods: {},
  mounted: function() {},
  destroyed: function() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
.w300 {
  width: 300px;
}

.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.cascader {
  position: absolute;
  height: 100%;
  background-color: #eee;
}
</style>
