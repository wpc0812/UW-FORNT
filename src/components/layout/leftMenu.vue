<template>
  <div>
    <div class="left-menu" v-show="!isCollapse">
      <el-menu
        class="el-menu-vertical-demo scrollbar text-left left-bar"
        :unique-opened="true"
        text-color="#4C4C4C"
        :default-active="active"
        background-color="#ffffff"
        :collapse-transition="false"
        :router="true"
      >
        <template v-for="item in menu">
          <!--菜单循环第一层，含有子集-->
          <el-submenu :key="item.id" :index="item.name" v-if="item.children.length">
            <template slot="title">
              <i :class="item.iconCls" class="font-size15 color-blue"></i>
              <span slot="title">&nbsp;{{item.name}}</span>
            </template>
            <!-- 二、三级菜单 -->
            <template v-for="(itemChild, index) in item.children">
              <!-- 三级菜单 -->
              <template v-if="itemChild.children && itemChild.children.length">
                <el-submenu :key="index" :index="itemChild.name">
                  <span slot="title">
                    <i :class="itemChild.iconCls" class="font-size15 color-blue"></i>
                    {{itemChild.name}}
                  </span>
                  <el-menu-item
                    v-for="(leafMenu,leafKey) in itemChild.children"
                    :key="leafKey"
                    :index="leafMenu.name"
                    :route="leafMenu.path"
                  >
                    <i :class="leafMenu.iconCls" class="font-size15 color-blue"></i>
                    {{leafMenu.name}}
                  </el-menu-item>
                </el-submenu>
              </template>
              <!-- 二级菜单 -->
              <template v-else>
                <el-menu-item :key="itemChild.id" :index="itemChild.name" :route="itemChild.path">
                  <i :class="itemChild.iconCls" class="font-size15 color-blue"></i>
                  {{itemChild.name}}
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
          <!--菜单循环第一层，不含有子集-->
          <el-menu-item v-else :index="item.name" :route="item.path" :key="item.id">
            <i :class="item.iconCls" class="font-size15 color-blue"></i>
            {{item.name}}
          </el-menu-item>
        </template>
      </el-menu>
      <div class="mouse-pointer menu-arrow" @click="getCollapse">
        <i class="el-icon-arrow-left"></i>
      </div>
    </div>
    <div v-show="isCollapse" class="menu-arrow-bar mouse-pointer" @click="getCollapse">
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>
<script>
// import { mapActions, mapGetters } from "vuex";
import menu from "static/menuData.json";

export default {
  data() {
    return {
      menu,
      isCollapse: eval(localStorage.getItem('isCollapse')),
      active: this.$route.name
    };
  },

  // computed: {
  //   ...mapGetters(["getMenu"])
  // },

  methods: {
    getCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("isCollapse", this.isCollapse);
      localStorage.setItem('isCollapse', this.isCollapse);
    }
  },
  mounted(){
    // console.log(this.$route.name)
    // console.log(this.menu)
  },

  created() {
  // this.menu();
  }
};
</script>
<style lang="scss" scoped>
.color-blue {
  color: #409EFF;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
.left-menu {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  // border-radius: 18px;
}
.menu-arrow {
  height: 100px;
  line-height: 100px;
  color: #ccc;
  &:hover {
    color: #e9e9e9
  }
}
.menu-arrow-bar {
  background-color: #ffffff;
  color: #ccc;
  height:40px;
  line-height: 40px;
  width: 15px;
  border-radius: 0 8px 8px 0;
  &:hover {
    padding-left: 3px;
    color: #e9e9e9;
  }
}
.el-menu-item.is-active{
  background-color: #409EFF  !important;
  color: #ffffff;
}
.el-submenu  /deep/  .el-submenu__title{
  height: 45px ;
  line-height: 45px
}
.el-submenu .el-menu-item{
  height: 35px;
  line-height: 35px
}
</style>


