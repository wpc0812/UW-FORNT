<template>
  <div class="offer-price-left">
        <el-steps direction="vertical" style="padding: 10px;height: 93%;" >
          <el-step v-for="step in evenSteps()" :key="step.title" :status="step.status" class="mouseMigration">
              <div slot="title" @click="stepLocation(step)">
                  {{step.title}}
              </div>
          </el-step>
        </el-steps>
    </div>
  
</template>

<script>
export default {
  name: 'sideNavigation',
  props: {
    steps: {
      type: Array,
      required: true
    },
    parentLevel: {
      type: Object,
      required: true
    },
    
  },
  methods: {
    evenSteps(){
        return this.steps.filter(item => !item.hiddenStep)
    },
    // 侧菜单锚点定位
    stepLocation: function (step) {
        this.steps.forEach(function(item) {
            if(item.status == 'finish' ) {
                item.status = "wait"
                return
            }
        })
        step.status = "finish"
        // 获取需要滚动的距离
        let total = !step.secondLevelRef ? (this.parentLevel[step.ref].$el.offsetTop - 40) : (this.parentLevel[step.ref].$refs[step.secondLevelRef].$el.offsetTop - 40)
        // let total = document.getElementById("abc").offsetTop - 40
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
        // Safari
        window.pageYOffset = total;
    },
  },
  created() {
    
  }

}
</script>
<style scoped>
.offer-price-left {
    position: fixed;
    top: 83px;
    height: 90%;
    width: 10.7%;
    background-color: rgba(228, 228, 228, 0.43921568627451);
}
.mouseMigration {
    cursor: pointer;
}
</style>
