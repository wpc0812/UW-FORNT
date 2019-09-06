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
    // otAddSaves:'/motorcade/motorcadeMainSave',//超权限车队  其他新增
    // otAddToInsured:'/motorcade/toInsuredList',//超权限车队  其他新增  表单查询按钮
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
 
    // -----核保处理 ---
    uwmainGetUwList: '/uwmain/getUwList',
    getUwPayeeList: '/getUwPayeeList',
    saveUwPayee:'/saveUwPayee',
    giveUpUwPayee: '/giveUpUwPayee',
    uwmainGetUwInfo: '/uwmain/getUwInfo',  // 核保详情查询
    undwrtrevokeUndwrt:'/undwrt/revokeUndwrt', // 撤回
    uwmainTeamquality: '/uwmain/teamquality', // 核保详情- 车队业务质量查询
    recommendedQury: '/monopoly/getUwmonopolyList', // 推荐送修码查询
    monopolyGetUwMonopolyAllInfo: '/monopoly/getUwMonopolyAllInfo' , // 推荐送修码 详细信息
    autoDistributeSelectTaskList: '/autoDistribute/selectTaskList', // 自动推送 查询
    recommendedDetailQury: '/recommendedQury' , // 推荐送修码 详情查询
    undwrtFlowRecord: '/uwmain/flowRecords', // 核保详情处理 -流转记录,
    deviceDetails: '/deviceDetails', // 核保详情处理 -设备信息
   

}

