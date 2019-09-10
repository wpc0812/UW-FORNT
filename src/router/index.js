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
      path: '/login',
      name: 'Login',
      component: _import('Login'),
    },
    {
      path: '/',
      redirect: {
        name: '核保处理'
      },
    },
    {
      path: '/layout2',
      name: 'layout2',
      component: _import('layout2'),
      hidden: true,
      meta: {
        requireAuth: true,
        keepAlive: false
      },
      children: [
        {
          path: '/rtReported2',
          name: '超权限车队维护',
          component: _import('unauthorizedFleet/rtReported2'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
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
        {
          path: '/lossRatioQuery',
          name: '赔付率查询',
          component: _import('lossRatioManagement/lossRatioQuery'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
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
        {
          path: '/underwritingDetails',
          name: '核保详情',
          component: _import('underwriting/underwritingDetails')
        },
        {
          path: '/deviceView',
          name: '设备信息',
          component: _import('underwriting/deviceView')
        },
        {
          path: '/underwriteRiskTypeRate',
          name: '查看风险类别占比',
          component: _import('underwriting/underwriteRiskTypeRate')
        },
        {
          path: '/underwritingTeamDetails',
          name: '核保详情团单', // 团单
          component: _import('underwriting/underwritingTeamDetails')
        },
        {
          path: '/flowLog',
          name: '流转记录',
          component: _import('underwriting/flowLog')
        },
        {
          path: '/uwIDSVehicleViewQuery',
          name: '核保赔付率查询',
          component: _import('underwriting/uwIDSVehicleViewQuery')
        },
        {
          path: '/uwIDSVehicleViewQueryDetails',
          name: '赔付率查询跳转页',
          component: _import('underwriting/uwIDSVehicleViewQueryDetails')
        },
        
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
        {
          path: '/autoPushDetail',
          name: '自动推送详情页',
          component: _import('underwriting/autoPushDetail'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
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
          {
            path: '/unNumPlate',
            name: '号码单车修改',
            component: _import('unauthorizedFleet/unNumPlate'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          {
            path: '/carContrast',
            name: '异地车对信息对比',
            component: _import('unauthorizedFleet/carContrast'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          {
            path: '/carAuditPage',
            name: '车队审核页面',
            component: _import('unauthorizedFleet/carAuditPage'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
          {
            path: '/carAuditPageother',
            name: '车队详情页面',
            component: _import('unauthorizedFleet/carAuditPageother'),
            hidden: true,
            meta: {
              requireAuth: true,
              keepAlive: false
            },
          },
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
        {
          path: '/toUwmotorcadeinfoPage',
          name: '车队下车辆信息',
          component: _import('unauthorizedFleet/toUwmotorcadeinfoPage'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
        {
          path: '/toUpdateUwmotorcadeinfo',
          name: '修改车辆信息页面',
          component: _import('unauthorizedFleet/toUpdateUwmotorcadeinfo'),
          hidden: true,
          meta: {
            requireAuth: true,
            keepAlive: false
          }
        },
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
        },
        {
          path: '/PlaceTeam',
          name: '异地车队修改前后信息对比',
          component: _import('place/PlaceTeam'),
        },
        {
          path: '/LimitCheck',
          name: '超权限车队审核意见',
          component: _import('unauthorizedFleet/LimitCheck'),
        },
        
      ]
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