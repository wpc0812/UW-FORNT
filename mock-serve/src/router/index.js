const Router = require('koa-router');
const router = new Router();
const util = require('../utils')
const underwriting = require('../data/underwriting'); // 模拟数据
const email = require('../data/email'); // 模拟数据


// 配置需要拦截的api
router
    //核保查询
    .post('/fridayService02/queryobject1', (ctx, next) => {
        ctx.body = underwriting.underwriting
    })
    //核保详情
    .post('/fridayService02/queryobject1/detail', (ctx, next) => {
        ctx.body = underwriting.underwritingDetails
    })
    .get('/email', ctx => {
        ctx.body = util.parseMock(email)
    })

module.exports = router