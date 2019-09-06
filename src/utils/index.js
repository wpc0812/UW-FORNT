import axios from "axios"
export default {
    //字符串转数组
   stringToArray(string){
        if(!( typeof(string) =='string')){
           return string
       }
       if(string==''){
           return []
       }
       return string.split(',')
   },
   //数组转字符串
   arrayToString(array){
       if(!(array instanceof Array)){
           return array
       }
       if(array==undefined){
           return ''
       }
    if(array==''||array.length==0){
        return ''
    }
    return array.join(',')
   },
   //校验维护期长度
   checkMaxContractMonths(string){
       var numReg = new RegExp(/^[1-9]\d*$/)
       if(string != ''){
           if(numReg.test(string)){
               return string
           } else {
               return ""
           }
       }
   },
   //校验汇率
   checkExchRate(string){
    var strReg = new RegExp(/^(\d|[1-9][0-9]|100|\d\.\d{0,6}|[1-9][0-9]\.\d{0,6})$/)
    if(string != ''){
        if(strReg.test(string.toString())){
            return string
        } else {
            return ""
        }
    }
   },
   // 批改类型集合
   endorTypes:['01','02','08','09','15','16','19','65','60'],
   //付款人类型规则
   autoPayName(payeeType){
       var proposals = ['022','023'] // 投保人毛费销数 经费销数 分出公司全称（中英文）作为付款人名称，允许修改
       var agents = ['035','036','039','040'] // 中介人毛费销数 经费销数 中介人全称（中英文）作为付款人名称，允许修改
       if(proposals.indexOf(payeeType)>-1){
          return '02'
       }
       if(agents.indexOf(payeeType)>-1){
        return '03'
       }
       return '01'

    },
    //日期大小比较
    compareDate(date,date2){
        date = date.replace(/-/g, '/')
        date2 = date2.replace(/-/g, '/')
       if(new Date(date) > new Date(date2)){
           return true
       }else{
           return false
       }
    },
    
    //json转post请求
    encodeSearchParams(obj) {
        const params = []
      
        Object.keys(obj).forEach((key) => {
          let value = obj[key]
          // 如果值为undefined我们将其置空
          if (typeof value === 'undefined') {
            value = ''
          }
          // 对于需要编码的文本（比如说中文）我们要进行编码
          params.push([key, encodeURIComponent(value)].join('='))
        })
      
        return params.join('&')
    },
    /**
     * 
     * @param s 传入的数据
     * @param n 小数点后保留数字个数
     */
    formatMoney(s,n){
        if(s == '' || !s){
            return '0.00'
        }
        if(typeof(s) == 'number'){
            s = s.toString()
        }
        n = n > 0 && n < 10 ? n : 2
        var j = ''
        if(s.substr(0,1) != '-'){
            j = ''
        }else{
            j = '-'
            s = s.substr(1,s.length-1)
        }
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
        var t = "";
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return j + t.split("").reverse().join("") + "." + r;
    },
    //url 传参加密 shiqian
    addPass(d){
       return window.btoa(window.encodeURIComponent(JSON.stringify(d)))
    },
    //接受url 传参解密 shiqian
    getPass(d){
        return JSON.parse(window.decodeURIComponent(window.atob(d)))

    },
    /**
     * axios post 请求 导出
     * params1  url  地址
     * params  data 参数
     */
    axiosDown(url,data){
        axios({
            // 用axios发送post请求
            method: "post",
            headers: {
                // token: window.localStorage["token"]
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            url:url, // 请求地址
            data: data, // 参数
            responseType: "blob" // 表明返回服务器返回的数据类型
        }).then(res => {
            // 处理返回的文件流
  
            var tempfileName = window.decodeURI(res.headers['content-disposition'].split(';')[1])
            var fileName =tempfileName.split('=')[1]
            const content = res.data;
            const blob = new Blob([content]);
            //edge 浏览器需要进行特殊处理  if ("download")会把edge判断为非ie，造成无法下载
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            if(userAgent.indexOf("Edge") > -1) {
                navigator.msSaveBlob(blob, fileName);
                return
            }
            if ("download" in document.createElement("a")) {
                // 非IE下载
                const elink = document.createElement("a");
                elink.download = fileName;
                elink.style.display = "none";
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
            } else {
                // IE10+下载
                navigator.msSaveBlob(blob, fileName);
            }
        });
      },
   
    downloadReport(dataUrl){
        //   let date = item.plans[this.daysIndex[index]]
        //   let url = '/Ecp.Export.exportXls.jdn?entityId='+item.FId+'&date='+date.FDeparture_date+'&token=' + sessionStorage.getItem("token")
        axios({
            method:'get',
            url:dataUrl,
            headers:[],
            responseType:'blob',
          })
          .then((data) => {
            if (!data) {
                return
            }
            debugger
            let url = window.URL.createObjectURL(data.data)
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', 'excel.xls')
            document.body.appendChild(link)
            link.click()
          })
    },
      
    
}