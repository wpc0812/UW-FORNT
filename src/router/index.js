import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'

// 选择不同的引入方式、大型项目中 懒加载页面足够多的话会导致热更新耗时较长、所以只在生产环境下启动懒加载
// const _import = require("./_import_production");
const _import = require("./_import_development");

Vue.use(Router)

const router = new Router({
  linkActiveClass:'active',
  routes: [
   
    {
      path: '/',
      redirect: '/underwriting',
    },
    {
      path: '/layout',
      name: 'layout',
      component: _import('layout'),
      hidden: true,
      meta: {
        requireAuth: true,
        keepAlive: false
      },
      children: [
        // 人员信息管理 -信息管理查询
        {
          path: '/underwriterInfor',
          name: '核保员信息管理',
          component: _import('personnelManagement/underwriterInfor'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //人员信息管理 -增加页
        {
          path: '/addwriteInfor',
          name: '增加核保员信息',
          component: _import('personnelManagement/addwriteInfor'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //人员信息管理 -修改页
        {
          path: '/changewriterInfor',
          name: '修改核保员信息',
          component: _import('personnelManagement/changewriterInfor'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },

        // 收款人账户修改审核 -- 查询
        {
          path: '/payeeModificationReview',
          name: '收款人账户修改审核',
          component: _import('underwriting/payeeModificationReview'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 收款人账户修改审核 -- 详情页
        {
          path: '/payeeModificationDetail',
          name: '收款人账户修改审核详情页',
          component: _import('underwriting/payeeModificationDetail'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //推荐送修码修改审核 -- 查询
        {
          path: '/recommendedModRev',
          name: '推荐送修码修改审核',
          component: _import('underwriting/recommendedModRev'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 推荐送修审核详情页
        {
          path: '/recommendedModDetail',
          name: '推荐送修审核详情页',
          component: _import('underwriting/recommendedModDetail'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
         // 核保管理 --核保处理
        {
          path: '/underwriting',
          name: '核保处理',
          component: _import('underwriting/underwriting'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 --核保详情
        {
          path: '/underwritingDetails',
          name: '核保详情',
          component: _import('underwriting/underwritingDetails')
        },
        // 核保管理 --核保详情 --设备信息
        {
          path: '/deviceView',
          name: '设备信息',
          component: _import('underwriting/deviceView')
        },
         // 核保管理 --核保详情 --查看风险类别占比
        {
          path: '/underwriteRiskTypeRate',
          name: '查看风险类别占比',
          component: _import('underwriting/underwriteRiskTypeRate')
        },
         // 核保管理 --团单核保详情
        {
          path: '/underwritingTeamDetails',
          name: '核保详情团单', // 团单
          component: _import('underwriting/underwritingTeamDetails')
        },
        // 核保管理 --核保详情 --流转记录
        {
          path: '/flowLog',
          name: '流转记录',
          component: _import('underwriting/flowLog')
        },
        // 核保管理 --核保详情 --核保赔付率查询
        {
          path: '/uwIDSVehicleViewQuery',
          name: '核保赔付率查询',
          component: _import('underwriting/uwIDSVehicleViewQuery')
        },
        // 核保管理 --核保详情 --赔付率查询跳转页
        {
          path: '/uwIDSVehicleViewQueryDetails',
          name: '赔付率查询跳转页',
          component: _import('underwriting/uwIDSVehicleViewQueryDetails')
        },
       // 核保管理 --自动推送
        {
          path: '/autoPush',
          name: '自动推送',
          component: _import('underwriting/autoPush'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // {
        //   path: '/autoPushDetail',
        //   name: '自动推送详情页',
        //   component: _import('underwriting/autoPushDetail'),
        //   hidden: true,
        //   meta: {
        //     requireAuth: true,
        //     keepAlive: false
        //   }
        // },
         // 核保管理 -- 统计---核保统计
        {
          path: '/underwritingStatistics',
          name: '核保统计',
          component: _import('underwriting/statistics/underwritingStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 统计---核保量统计
        {
          path: '/underwritingAmount',
          name: '核保量统计',
          component: _import('underwriting/statistics/underwritingAmount'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
         // 核保管理 -- 统计---简单核保统计
        {
          path: '/underwritingSimple',
          name: '简单核保统计',
          component: _import('underwriting/statistics/underwritingSimple'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
         // 核保管理 -- 统计---单车报备统计
        {
          path: '/reportedBike',
          name: '单车报备统计',
          component: _import('underwriting/statistics/reportedBike'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---人工核保量汇总统计
        {
          path: '/underwritingAmountStatistics',
          name: '人工核保量汇总统计',
          component: _import('underwriting/summaryStatistics/underwritingAmountStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---人工核保业务量月统计
        {
          path: '/underwritingMonthlyStatistics',
          name: '人工核保业务量月统计',
          component: _import('underwriting/summaryStatistics/underwritingMonthlyStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---团单信息维护统计
        {
          path: '/underwritingGroupStatistics',
          name: '团单信息维护统计',
          component: _import('underwriting/summaryStatistics/underwritingGroupStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---异地号牌业务统计
        {
          path: '/underwritingDifferentStatistics',
          name: '异地号牌业务统计',
          component: _import('underwriting/summaryStatistics/underwritingDifferentStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---续保报备业务统计
        {
          path: '/underwritingRenewalStatistics',
          name: '续保报备业务统计',
          component: _import('underwriting/summaryStatistics/underwritingRenewalStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
           // 核保管理 -- 汇总统计---人工审批配置统计
        {
          path: '/underwritingConfigurationStatistics',
          name: '人工审批配置统计',
          component: _import('underwriting/summaryStatistics/underwritingConfigurationStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---特批业务维护统计
        {
          path: '/underwritingSpecialMaintenanceStatistics',
          name: '特批业务维护统计',
          component: _import('underwriting/summaryStatistics/underwritingSpecialMaintenanceStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        // 核保管理 -- 汇总统计---业务量汇总统计报表
        {
          path: '/underwritingSummaryForm',
          name: '业务量汇总统计报表',
          component: _import('underwriting/summaryStatistics/underwritingSummaryForm'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
         // 核保管理 -- 汇总统计---人工退回业务统计
        {
          path: '/underwritingReturnStatistics',
          name: '人工退回业务统计',
          component: _import('underwriting/summaryStatistics/underwritingReturnStatistics'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //超权限车队维护 -异地已上报车队
        {
          path: '/rtReported',
          name: '已上报车队',
          component: _import('unauthorizedFleet/rtReported'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //超权限车队维护 -异地新增车队
        {
          path: '/rtAdd',
          name: '新增车队',
          component: _import('unauthorizedFleet/rtAdd'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        }, 
        //超权限车队维护 -异地（其他）详情页面顶部修改按钮
        {
          path: '/topupdate',
          name: '顶部修改',
          component: _import('unauthorizedFleet/topupdate'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //超权限车队维护 -异地（其他）详情页面顶部修改按钮
        {
          path: '/torenewal',
          name: '顶部续保',
          component: _import('unauthorizedFleet/torenewal'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //超权限车队维护 其他已上报车队
        {
          path: '/otReported',
          name: 'qt已上报车队',
          component: _import('unauthorizedFleet/otReported'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //超权限车队维护 其他新增车队
        {
          path: '/otAdd',
          name: 'qt新增车队',
          component: _import('unauthorizedFleet/otAdd'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        }, 
        //超权限车队维护 其他（异地）新增页面查询
          {
            path: '/selectMSg',
            name: '查询页面',
            component: _import('unauthorizedFleet/selectMSg'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他（异地）详情页-业务号详情列表删除
          {
            path: '/deletebatch',
            name: '删除批次',
            component: _import('unauthorizedFleet/deletebatch'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他（异地）详情页顶部按钮
          {
            path: '/auditOpinion',
            name: '审核意见',
            component: _import('unauthorizedFleet/auditOpinion'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他（异地）详情页顶部按钮
          {
            path: '/transferRecord',
            name: '超权限车队流转记录',
            component: _import('unauthorizedFleet/transferRecord'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他（异地）详情页-业务号详情列表号牌号码修改
          {
            path: '/unNumPlate',
            name: '修改车辆信息页面',
            component: _import('unauthorizedFleet/unNumPlate'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他（异地）详情页顶部按钮
          {
            path: '/carContrast',
            name: '车对信息对比',
            component: _import('unauthorizedFleet/carContrast'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 异地详情页
          {
            path: '/carAuditPage',
            name: '异地车队详情页面',
            component: _import('unauthorizedFleet/carAuditPage'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          //超权限车队维护 其他详情页
          {
            path: '/carAuditPageother',
            name: '其他车队详情页面',
            component: _import('unauthorizedFleet/carAuditPageother'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
        //核保特批管理- 核保特批配置
        {
          path: '/queryCorrection',
          name: '核保特批配置',
          component: _import('correction/queryCorrection'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //核保特批管理- 增加页面
        {
          path: '/addCorrection',
          name: '增加核保特批页面',
          component: _import('correction/addCorrection'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //核保特批管理- 查询列表修改页面
        {
          path: '/changeCorrection',
          name: '修改核保特批页面',
          component: _import('correction/changeCorrection'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //核保特批管理- 查询列表展示页面（根据序号）
        {
          path: '/detailCorrection',
          name: '核保特批详情页面',
          component: _import('correction/detailCorrection'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //综合统计 -核保率统计
        {
          path: '/underwritingRate',
          name: '核保率统计',
          component: _import('comprehensiveStatistics/underwritingRate'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //综合统计 -规则执行统计
        {
          path: '/ruleExecution',
          name: '规则执行统计',
          component: _import('comprehensiveStatistics/ruleExecution'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        //综合统计 -分发监控统计
        {
          path: '/distributedMonitoring',
          name: '分发监控统计',
          component: _import('comprehensiveStatistics/distributedMonitoring'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        {
          path: '/UnderwritingQuery',
          name: 'UnderwritingQuery',
          component: _import('layout/UnderwritingQuery'),
        },
        {
          path: '/demo',
          name: 'formatInput',
          component: _import('templates/demo/demo'),
        },
        {
          path: '/viewDemo',
          name: 'ViewDemo',
          component: _import('templates/demo/viewDemo'),
        } 
      ]
    },
    
  ]
})

let loadingService

router.beforeEach((to, from, next) => {
  // 全局loadoing
  loadingService = Loading.service({
    lock: true,
    text: 'Loading',
    customClass: 'loading-background'
  })

  next();
})

router.afterEach((to, from) => {
  // 关闭全局loading
  loadingService.close()
})

export default router