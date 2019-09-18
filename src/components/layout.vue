<template>
  <div>
  
    <!-- <img src="../assets/imgs/background-img.jpg" class="background-img" /> -->
    <el-container>
      <el-header>
          <img src="../assets/imgs/logo_corner.png" class="background-logo" />
        <head-menu></head-menu>
      </el-header>
      <el-container class="index-bg">
        <el-aside :width="!isCollapse ? '250px' : '20px'" :class="{ 'position-left': !isCollapse}" class="scrollbar">
          <left-menu @isCollapse="getCollapse"></left-menu>
        </el-aside>
        <el-main :class="{ 'has-bar' : !isCollapse}" style="padding-top: 0">
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "@/components/layout/leftMenu";
import HeadMenu from "@/components/layout/headMenu";

export default {
  components: { LeftMenu, HeadMenu },
  data() {
    return {
      rightBar: true,
      isCollapse: eval(localStorage.getItem('isCollapse')),
    };
  },
  methods: {
    getCollapse(isCollapse) {
      this.isCollapse = isCollapse;
    }
  }
};
</script>
<style lang="scss" scoped>
.position-left {
  left: 10.2px;
}
.el-aside {
  position: fixed;
  height: 100%;
  div {
    margin-bottom: 75px;
  }
}
.el-main {
  margin-left: 10px;
  padding: 10px;
  margin-bottom: 50px;
  position: relative;
}
.has-bar {
  margin-left: 260px;
}
img {
  position: fixed;
  top: 0;
  left: 0;
}
.background-img {
  width: 100%;
}
.background-logo {
  z-index: 11;
  margin-left: 10px;
  height: 60px;
}
.index-bg {
  margin-top: 80px;
}
.el-header {
  z-index: 10;
  padding: 0;
  width: 100%;
  position: fixed;
  height: 72px;
}
</style>
