<template>
  <div>
    <div class="left-menu" v-show="!isCollapse">
      <el-menu
        class="el-menu-vertical-demo scrollbar text-left left-bar heightStyle"
        :unique-opened="true"
        text-color="#4C4C4C"
        :default-active="active"
        background-color="#f1f2f4"
        :collapse-transition="false"
        :router="true"
      >
        <template v-for="item in menu">
          <!--菜单循环第一层，含有子集-->
          <el-submenu :key="item.id" :index="item.name" v-if="item.children.length">
            <template slot="title" style="background: red">
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
    <!-- {
        "id": 28,
        "path": "/rtAudit",
        "iconCls": "fa fa-file-code-o",
        "name": "异地车队审核",
        "component": "RtAudit",
        "children": [],
        "meta": {
          "keepAlive": false,
          "reuireAuth": true
        }
      },
      {
        "id": 29,
        "path": "/otAudit",
        "iconCls": "fa fa-file-code-o",
        "name": "其他车队审核",
        "component": "OtAudit",
        "children": [],
        "meta": {
          "keepAlive": false,
          "reuireAuth": true
        }
    },-->
  </div>
</template>
<script>
// import { mapActions, mapGetters } from "vuex";
import menu from "static/menuData.json";

export default {
  data() {
    return {
      menu,
      isCollapse: eval(localStorage.getItem("isCollapse")),
      active: this.$route.name,
      comCodeLevel: "Z"
    };
  },

  // computed: {
  //   ...mapGetters(["getMenu"])
  // },

  methods: {
    getCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("isCollapse", this.isCollapse);
      localStorage.setItem("isCollapse", this.isCollapse);
    }
  },
  mounted() {
    // console.log(this.$route.name)
    // console.log(this.menu)
  },

  created() {
    // this.menu();
  }
};
</script>
<style scoped>
.color-blue {
  color: #409eff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
.left-menu {
  display: flex;
  align-items: center;
  background-color: rgb(241, 242, 244);
}
.menu-arrow {
  height: 100px;
  line-height: 100px;
  color: #ccc;
}
.menu-arrow-bar {
  background-color: #ffffff;
  color: #ccc;
  height: 40px;
  line-height: 40px;
  width: 15px;
  border-radius: 0 8px 8px 0;
}
.menu-arrow-bar:hover {
  padding-left: 3px;
  color: #e9e9e9;
}
.el-menu-item.is-active {
  background-color: #ecf5ff !important;
  color: rgb(64, 158, 255);
  border-left: 4px solid #409eff;
}
.el-submenu >>> .el-submenu__title {
  height: 50px;
  background: rgb(241, 242, 244) !important;
  line-height: 50px;
}
.el-submenu .el-submenu__title :hover {
  background: #ecf5ff !important;
}
.el-submenu .el-menu-item {
  height: 45px;
  line-height: 45px;
}
.el-submenu .el-menu-item:hover {
  background: #ecf5ff !important;
}
</style>


