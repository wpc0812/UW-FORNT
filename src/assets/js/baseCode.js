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

 // 省份 代码
export const provinceCodes =[
  { value: '1100', label: '北京11000000'},
  { value: '1200', label: '天津12000000'},
  { value: '1300', label: '河北13000000'},
  { value: '1400', label: '山西14000000'},
  { value: '1500', label: '內蒙15000000'},
  { value: '2100', label: '辽宁21000000'},
  { value: '2102', label: '大连21020000'},
  { value: '2200', label: '吉林22000000'},
  { value: '4500', label: '广西45000000'},
  { value: '4600', label: '海南46000000'},
  { value: '3100', label: '上海31000000'},
  { value: '3110', label: '上海自贸区分公司31100000'},
  { value: '3200', label: '江苏32000000'},
  { value: '3300', label: '浙江33000000'},
  { value: '3302', label: '宁波3302000000'},
  { value: '3400', label: '安徽34000000'},
  { value: '3500', label: '福建35000000'},
  { value: '3502', label: '厦门35020000'},
  { value: '3600', label: '江西36000000'},
  { value: '3700', label: '山东37000000'},
  { value: '3702', label: '青岛37020000'},
  { value: '4100', label: '河南41000000'},
  { value: '4200', label: '湖北42000000'},
  { value: '4300', label: '湖南43000000'},
  { value: '4400', label: '广东44000000'},
  { value: '4403', label: '深圳44030000'},
  { value: '5000', label: '重庆50000000'},
  { value: '5100', label: '四川51000000'},
  { value: '5200', label: '贵州52000000'},
  { value: '5300', label: '云南53000000'},
  { value: '5400', label: '西藏54000000'},
  { value: '6100', label: '陕西61000000'},
  { value: '6200', label: '甘肃62000000'},
  { value: '6300', label: '青海63000000'},
  { value: '6400', label: '宁夏64000000'},
  { value: '6500', label: '新疆65000000'},
  { value: '2300', label: '黑龙江2300000000'},
  { value: '0000', label: '总公司00000000'},
]
 export const carTypeCodes = [

  { value: 'A01', label: 'A01--客车'},
  { value: 'B01', label: 'B01--货车'},
  { value: 'B02', label: 'B02--半挂牵引车'},
  { value: 'B11', label: 'B11--三轮汽车'},
  { value: 'B12', label: 'B12--低速货车'},
  { value: 'B13', label: 'B13--客货两用车'},
  { value: 'B21', label: 'B21--自卸货车'},
  { value: 'B91', label: 'B91--货车挂车'},
  { value: 'C01', label: 'C01--油罐车'},
  { value: 'C02', label: 'C02--气罐车'},
  { value: 'C03', label: 'C03--液罐车'},
  { value: 'C04', label: 'C04--冷藏车'},
  { value: 'C11', label: 'C11--罐车挂车'},
  { value: 'C20', label: 'C20--推土车'},
  { value: 'C22', label: 'C22--清障车'},
  { value: 'C23', label: 'C23--清扫车'},
  { value: 'C24', label: 'C24--清洁车'},
  { value: 'C25', label: 'C25--起重车'},
  { value: 'C26', label: 'C26--装卸车'},
  { value: 'C27', label: 'C27--升降车'},
  { value: 'C28', label: 'C28--混凝土搅拌车'},
  { value: 'C29', label: 'C29--挖掘车'},
  { value: 'C30', label: 'C30--专业拖车'},
  { value: 'C31', label: 'C31--特种车二挂车'},
  { value: 'C39', label: 'C39--特种车二类其他'},
  { value: 'C41', label: 'C41--电视转播车'},
  { value: 'C42', label: 'C42--消防车'},
  { value: 'C43', label: 'C43--医疗车'},
  { value: 'C44', label: 'C44--油气田操作用车'},
  { value: 'C45', label: 'C45--压路车'},
  { value: 'C46', label: 'C46--矿山车'},
  { value: 'C47', label: 'C47--运钞车'},
  { value: 'C48', label: 'C48--救护车'},
  { value: 'C49', label: 'C49--检测车'},
  { value: 'C50', label: 'C50--雷达车'},
  { value: 'C51', label: 'C51--X光检查车'},
  { value: 'C52', label: 'C52--电信抢修车-电信工程车'},
  { value: 'C53', label: 'C53--电信抢修车-电力工程车'},
  { value: 'C54', label: 'C54--专业净水车'},
  { value: 'C55', label: 'C55--保温车'},
  { value: 'C56', label: 'C56--邮电车'},
  { value: 'C57', label: 'C57--警用特种车'},
  { value: 'C58', label: 'C58--混凝土泵车'},
  { value: 'C61', label: 'C61--特种车三类挂车'},
  { value: 'C69', label: 'C69--特种车三类其他'},
  { value: 'C90', label: 'C90--集装箱拖头'},
  { value: 'D01', label: 'D01--摩托车'},
  { value: 'D02', label: 'D02--正三轮摩托车'},
  { value: 'D03', label: 'D03--侧三轮摩托车'},
  { value: 'E01', label: 'E01--拖拉机'},
  { value: 'E11', label: 'E11--联合收割机'},
  { value: 'E12', label: 'E12--变型拖拉机-其他'},
  { value: 'Z99', label: 'Z99--其他车辆'},


  
];