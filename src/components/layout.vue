<template>
  <div>
    <img src="../assets/imgs/logo_corner.png" class="background-logo">
    <!-- <img src="../assets/imgs/background-img.jpg" class="background-img"> -->
    <div class="index-bg">
      <el-container>
        <el-header>Header</el-header>
        <el-main :class="[rightBar ? 'has-bar' : '']" style="padding-top: 0">
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </el-main>
        <transition name="slide-fade">
          <el-aside width="270px" v-show="rightBar">
            <!-- <el-card class="right-bar"> -->
              <!-- <div slot="header" class="text-right">
                <i class="el-icon-arrow-right mouse-pointer" @click="rightBar = !rightBar"></i>
              </div> -->
              <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
            <!-- </el-card> -->
          </el-aside>
        </transition>
        <transition name="slide-fade">
          <div class="icon-bar mouse-pointer" v-show="!rightBar">
            <i class="el-icon-arrow-left" @click="rightBar = !rightBar"></i>
          </div>
        </transition>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightBar: true
    };
  }
};
</script>
<style scoped>
.background-img {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.background-logo {
  height: 60px;
  position: fixed;
  left: 10px;
  top: 0;
}
.index-bg {
  margin-top: 80px;
}
.has-bar {
  margin-right: 260px;
}
.el-header {
  position: fixed;
  top: 0;
  right: 0;
}
.el-aside {
  position: fixed;
  right: 0;
}
.icon-bar {
  position: fixed;
  right: 30px;
  top: 83px;
  height: 30px;
  width: 30px;
  background-color: #301C1C;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px; 
}
/* 菜单过渡动画 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
  
}
</style>
