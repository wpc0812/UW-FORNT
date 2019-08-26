// 审批类型
export const typeApproval = [
  { code: 'a', value: '异地类' },
  { code: 'b', value: '搅拌车类' },
  { code: 'c', value: '特二类' },
  { code: 'd', value: '高保额/限额类' },
  { code: 'e', value: '货车类' },
  { code: 'f', value: '负价值客户类' },
  { code: 'g', value: '转入类' },
  { code: 'i', value: '新车类' },
  { code: 'h', value: '其他类' },
]
// 状态
export const status = [
  { code: '0', value: "未处理" },
  { code: '1', value: "已处理" }
]
// 占用状态
export const occupancyState = [
  { code: '0', value: "已占用", tip: '(针对当前用户)' },
  { code: '1', value: "未占用", tip: '(所有用户)' },
  { code: '2', value: "已占用", tip: '(所有用户)' }
]
export const relations = [
  { code: 1, value: '全部'}
]
//核保类型
export const underwritingTypes = [
  { code: 'ST', value: '散弹投保单'},
  { code: 'GT', value: '团单投保单'},
  { code: 'E', value: '批单'},
  { code: 'H', value: '团单方案'},
]


//报错提示
export const errMsg = [
  { code: 403, value: '您没有访问此功能的权限' },
  { code: 400, value: '服务器不理解请求的语法' },
  { code: 404, value: '服务器找不到请求地址' },
  { code: 408, value: '服务器等候请求时发生超时' },
  { code: 500, value: '服务器遇到错误，无法完成请求' },
  { code: 501, value: '服务器不具备完成请求的功能' },
  { code: 502, value: '错误网关' },
  { code: 503, value: '服务器目前无法使用(由于超载或停机维护)' },
  { code: 504, value: '网关超时' },
  { code: 505, value: '服务器不支持请求中所用的 HTTP 协议版本' },
  { code: 0, value: '网关超时' },
]
