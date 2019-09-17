// const webUrl = 'http://11.205.241.116:8082';
module.exports  = {
    //核保特批
    correctionSave:'/greenchannel/saveUwctrl',//核保特批 增加
    correctionQury: '/greenchannel/queryGreenChannel',//核保特批 查询(空值/id)
    correctionDelete:'/greenchannel/deleteUwctrl',//核保特批 注销
    correctionUpdate: '/greenchannel/updateUwctrl',//核保特批 修改
    correctionShow:'/greenchannel/showGreenChannel',//核保特批 修改展示页面
    //   -----核保人员 start----
    underWriterInforGetCkeckerList: '/getCkeckerList', // 核保人员 列表查询
    underWriterInforAddcheker: '/addCkecker', // 核保人员详细信息添加
    underWriterInforQueryCkecker:'/queryCkecker', // 核保人员详细信息查看
    underWriterInforUpdateCkecker: '/updateCkecker', // 核保人员 修改
    underWriterInforDeleteChechker: '/deleteCkecker', // 删除
    //  ----- 超权限车队 start ----
    rtAddGetUnder: '/motorcade/getUnderwritingTaskList', //超权限车队  根据不同条件查询
    rtAddFindMotorcadeMain: '/motorcade/findMotorcadeMainByMotorcadeNo', //超权限车队  异地已上报根据业务号查询查询
    rtAddSaves:'/motorcade/motorcadeMainSave', //超权限车队  异地新增
    rtAddToInsured:'/motorcade/toInsuredList',//超权限车队  异地新增  表单查询按钮
    rtReportedToInsured:'/motorcade/createMotorcadeMainExcel', //超权限车队 异地导出接口
    carAuditPageToInsured:'/motorcade/createMotorcadeInfoExcel', //超权限车队 异地详情导出接口
    carAuditPageaddfile:'/motorcade/uwmotorcadeinfoImport', //超权限车队 异地详情增加上传文件
    carAuditPageUpdatefile:'/motorcade/uwmotorcadeinfoUpdate', //超权限车队 异地详情修改上传文件 
    carAuditPageSubmits:'/motorcade/submits', //超权限车队 异地详情提交审核
    deletebatchDel:'/motorcade/delectBatchByNo', //超权限车队 异地详情删除批次
    unNumPlateUpdate:'/motorcade/UpdateUwmotorcadeinfo', //超权限车队 异地详情 车辆详情修改页面  
    unNumPlateFindUwmotorcadeinfo:'/motorcade/findUwmotorcadeinfoBylicenseNo', //超权限车队 异地详情 号牌号码查询
                                                         //--------------------顶部按钮----------------------
    carAuditPageDelete:'/motorcade/motorcadeMainDelete', //超权限车队 异地详情顶部 删除
    carAuditPageUpdate:'/motorcade/motorcadeRemoteAddOrUpdate', //超权限车队 异地详情顶部 修改
    carAuditPageOuterRatio:'/motorcade/motorcadeMainContrast', //超权限车队 异地详情顶部 对比
    carAuditPageTransferRecord:'/motorcade/findUwMotorcadeFlowRecord', //超权限车队 异地详情顶部 流转记录
    carAuditPageOuterRenewal:'/motorcade/motorcadeMainRenewal', //超权限车队 异地详情顶部 续保
    carAuditPageAuditOpinion:'/motorcade/findUwMotorcadeNotion', //超权限车队 异地详情顶部 审核意见
    carAuditPageOuterBranch:'/motorcade/effectiveHandling', //超权限车队 异地详情顶部 生效办结
    carAuditPageUploadECMs:'/motorcade/uploadECMs', //超权限车队 异地详情顶部 影像上传
    carAuditPageQueryECMs:'/motorcade/queryECMs', //超权限车队 异地详情顶部 查看资料
    // -----综合统计 ---规则执行统计
    underwritingRateStatistics:'comprehensiveStatistics/underwritingRateStatistics',//综合统计 核保率统计
    ruleExecutionRule:'/comprehensiveStatistics/ruleImplementStatistics',// 综合统计 规则执行统计 查询
    // ruleExecutionRule:'/comprehensiveStatistics/ruleImplementStatistics',// 综合统计 规则执行统计 导出
    distributedMonitoringStatistics:'/comprehensiveStatistics/distributionMonitoringStatistics',// 综合统计 分发监控统计 查询
    // distributedMonitoring:'/comprehensiveStatistics/distributionMonitoringStatistics',// 综合统计 规则执行统计 导出
    // -----核保处理 ---
    uwmainGetUwList: '/payee/uwmain/getUwList',
    getUwPayeeList: '/payee/getUwPayeeList',
    saveUwPayee:'/payee/saveUwPayee', // 提交审核 -select options
    giveUpUwPayee: '/payee/giveUpUwPayee', // 放弃
    uwmainGetUwInfo: '/uwmain/getUwInfo',  // 核保详情查询
    carDeviceInfo: '/uwmain/carDeviceInfo', // 核保-设备详情查询
    telSaleInfo: '/uwmain/telSaleInfo', // 核保 --详细信息查询
    riskTypeRateInfo: '/uwmain/riskTypeRateInfo', // 核保 -风险类占比
    undwrtrevokeUndwrt:'/undwrt/revokeUndwrt', // 撤回
    uwmainTeamquality: '/uwmain/teamquality', // 核保详情- 车队业务质量查询
    recommendedQury: '/monopoly/getUwmonopolyList', // 推荐送修码查询
    monopolyGetUwMonopolyAllInfo: '/monopoly/getUwMonopolyAllInfo' , // 推荐送修码 详细信息
    autoDistributeSelectTaskList: '/autoDistribute/selectTaskList', // 自动推送 查询
    undwrtFlowRecord: '/uwmain/flowRecords', // 核保详情处理 -流转记录,
    payeeGetUwPayeeList: '/payee/getUwPayeeList' ,// 收款人 审核 查询
    payeeGetUwPayeeAllInfo: '/payee/getUwPayeeAllInfo', // 收款人审核 -详细信息
    uwmainUploadECM:'/uwmain/uploadECM', // 主流程-影像上传
    uwmainMobileECM:'/uwmain/mobileECM', // 主流程-手机影像 
    uwmainStartECM :'/uwmain/startECM ', // 主流程-查看关联单影像
    uwmainGetECM:'/uwmain/getECM', // 主流程-影像查看
    uwmainGetLastYearPolicyInfo: '/uwmain/getLastYearPolicyInfo', // 主流程 -查看上年度保单
    autoDistributeHeadCompanyInfo: '/underwritingECM/headCompanyInfo', // 查看总公司资料
    autoDistributeBranchCompanyInfo: '/underwritingECM/branchCompanyInfo', // 查看分公司资料
    autoDistributeTraditionalChannels: '/autoDistribute/traditionalChannels', // 传统渠道
    autoDistributeElectricPinChannels: '/autoDistribute/electricPinChannels', // 电销渠道
    autoDistributeEndorsementInfo: '/autoDistribute/endorsementInfo', // 批单
    undwrtSubmitReview: '/undwrt/submitReview', // 提交审核
    uwIDSVehicleViewQuerySelect:'/undwrt/idsQuery',//赔付率详情查询

    userLoginLogout: '/userLogin/logout' ,// 注销


    comprehensiveStatisticsCarReportStatistics: '/comprehensiveStatistics/carReportStatistics', // 统计 -单车报备统计查询
    exportCarReportStatistics:'/export/exportCarReportStatistics',// 统计 -单车报备统计 导出
    exportArtificialUnderwriteAggregate: '/export/exportArtificialUnderwriteAggregate' , //汇总统计 --人工核保量汇总统计
    exportArtificialUnderwriteTraffic: '/export/exportArtificialUnderwriteTraffic' , //汇总统计 --人工核保业务量月统计导出

    exportBatchMaintain: '/export/exportBatchMaintain' , //汇总统计 --团单信息维护统计导出
    exportDifferentPlacesNumberPlate: '/export/exportDifferentPlacesNumberPlate' , //汇总统计 --异地号牌业务统计
    exportRenewalReport: '/export/exportRenewalReport' , //汇总统计 --续保报备业务统计
    exportArtificialApprovalConfigure: '/export/exportArtificialApprovalConfigure' , //汇总统计 --人工审批配置统计

    exportSpeciallyApprovedMaintain: '/export/exportSpeciallyApprovedMaintain' , //汇总统计 --特批业务维护统计
    exportTrafficVolumeReportForm: '/export/exportTrafficVolumeReportForm' , //汇总统计 --业务量汇总统计报表
    exportArtificialReturn: '/export/exportArtificialReturn' , //汇总统计 --人工退回业务统计


    exportRuleImplementStatistics: '/export/exportRuleImplementStatistics' , // 综合统计---规则执行统计
    exportUnderwriteRate: '/export/exportUnderwriteRate' , // 综合统计---核保率统计导出
    exportDistributionMonitoringStatistics: '/export/exportDistributionMonitoringStatistics' , // 综合统计---分发监控统计导出




}

