# [mock-serve](https://github.com/Jarvis2018/mock-serve)
mock-serve 是一个本地的前端模拟数据服务


### 在前后端分离的架构下，前端开发人员往往需要模拟数据，通常我们经常用的方式有:
> * 在代码里写死
> * 通过Mock.js
> * 通过Easy-Mock


后两种都是不错的方案，但是根据每个开发人员的环境不同，也会遇到一些情况，比如在断网的情况下，Easy-Mock 就不适合了（什么，你是不是想说停电了就可以下班了），但是你就会说可以中Mock.js 替代，但是往往我们的开发和调试中，需要我们在浏览器的network中查看入参，回参，这时Mock.js也不适用了

## 折中方案
基于node搭建一个本地的模拟服务，这样我们就可以解决上面的问题了

## 文件结构
```shell

├── src
    ├── data  模拟数据目录
    ├── router  路由
    ├── utils  工具函数
    ├── index.js  入口文件

```

## 用法

``` bash
# 安装依赖
npm install

# 启动服务 默认地址 http://localhost:3000
npm run mock

# 配置模拟数据
- 在data目录创建符合你的数据结构（支持MockJs）
- 在路由文件中配置你要拦截的api地址
- 等待服务热重启
```

## 特点

> * 支持MockJs的规则编写模拟数据
> * 支持跨域访问
