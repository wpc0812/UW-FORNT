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
    rtAddFindMotorcadeMain: '/motorcade/findMotorcadeMainByMotorcadeNo', //超权限车队  异地已上报查询
    rtAddSaves:'/motorcade/motorcadeMainSave', //超权限车队  异地新增
    rtAddToInsured:'/motorcade/toInsuredList',//超权限车队  异地新增  表单查询按钮
    otAddSaves:'/motorcade/motorcadeMainSave',//超权限车队  其他新增
    otAddToInsured:'/motorcade/toInsuredList',//超权限车队  其他新增  表单查询按钮
    // -----核保处理 ---
    uwmainGetUwList: '/uwmain/getUwList',
    getUwPayeeList: '/getUwPayeeList',
    saveUwPayee:'/saveUwPayee',
    giveUpUwPayee: '/giveUpUwPayee'
}

