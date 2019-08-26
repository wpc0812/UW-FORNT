<template>
  <span class="formInputLable">
    <el-tooltip class="item" effect="dark" placement="top-start">
        <span slot="content">{{ lableName }} </span>
        <span>{{ lableName }}</span>
    </el-tooltip>
  </span>
  
</template>

<script>
export default {
  name: 'InputLable',
  props: {
    lableName: {
      type: String,
      default: '123123',
      required: true
    },
    
  },
}
</script>
<style scoped>
  /* 表单输入框lable样式，适用于多行文本展示，自定义lable */
    .formInputLable {
        line-height: 15px;
        text-overflow: ellipsis;
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        padding-top: 12px;
    }
</style>
