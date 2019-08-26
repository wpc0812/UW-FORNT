
// 校验数字
export function validateNumbers(rule, value) {
    var reg = new RegExp('^-?[0-9]+([.]{1}[0-9]+){0,1}$');
    if (value && !reg.test(value)) {
        return new Error("请输入数字");
    }
}

function valid(rule, value, reg, errorInfo) {
  if (value && !reg.test(value)) {
      return new Error(errorInfo);
  }
}

/*是否合法IP地址*/
export function validateIP(rule, value,callback) {
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的IP地址'));
      } else {
        callback();
      }
    }
  }
  
  /* 是否手机号码或者固话*/
  export function validatePhoneTwo(rule, value, callback) {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
    if (value == '' || value == undefined || value == null) {
      callback();
    } else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的电话号码或者固话号码'));
      } else {
        callback();
      }
    }
  }

  /* 是否固话*/
  export function validateTelphone(rule, value,callback) {
    const reg =/0\d{2}-\d{7,8}/;
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的固话'));
      } else {
        callback();
      }
    }
  }
  /* 是否手机号码*/
  export function validatePhone(rule, value,callback) {
    const reg =/^[1][3,4,5,7,8][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的电话号码'));
      } else {
        callback();
      }
    }
  }
  /* 是否输入是正确的电话号码，只校验 - 和纯数字 */
  export function validatePhoneNumber(rule, value,callback) {
      var str_1 = value.replace(/-*/g, "");
      var reg = new RegExp('^-?[0-9]+([]{1}[0-9]+){0,1}$');
      if (str_1 && !reg.test(str_1)) {
          return callback("请输入正确的电话号码");
      }
  }
  /* 是否身份证号码*/
  export function validateIdNo(rule, value,callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
      callback();
    }else {
      if ((!reg.test(value)) && value != '') {
        callback(new Error('请输入正确的身份证号码'));
      } else {
        callback();
      }
    }
  }
  /* 是否邮箱*/
  export function validateEMail(rule, value,callback) {
    const reg =/^([a-zA-Z0-9]+[_|_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    callback(valid(rule, value, reg, '请输入正确的邮箱地址'))
  }
  /* 合法uri*/
  export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
  }
  
  /*验证内容是否英文数字以及下划线*/
  export function isPassword(rule, value, callback) {
    const reg =/^[_a-zA-Z0-9]+$/;
    if(value==''||value==undefined||value==null){
      callback();
    } else {
      if (!reg.test(value)){
        callback(new Error('密码仅由英文字母，数字以及下划线组成'));
      } else {
        callback();
      }
    }
  }
  
    // 验证是否是小数（可以空，但是有值的话只能是数字）
  export function amount(rule, value, callback) {
    callback(validateNumbers(rule, value))
  }
  
  // }
/* 验证key*/
  export function validateKey(str) {
      var reg = /^[a-z_\-:]+$/;
      return reg.test(str);
  }
  // 校验百分比输入
  export function percentage(rule, value, callback) {
      var reg = /^(\d|[1-9]\d)(\.\d+)*$/;
      callback(valid(rule, value, reg, '请输入大于等于0且小于等于100的数字'))
  }

  // 校验纯英文字符
  export function validatAlphabets(rule, value, callback) {
      var str_1 = value.replace(/\s*/g, "");
      var reg = /^[A-Za-z]*$/;
      callback(valid(rule, str_1, reg, '请输入纯英文字母'))
  }

  // 校验纯英文小写字符
  export function validateLowerCase(rule, value, callback) {
      var str_1 = value.replace(/\s*/g, "");
      var reg = /^[A-Za-z]*$/;
      callback(valid(rule, str_1, reg, '请输入英文小写字母'))
  }

  // 校验大写字母
  export function validateUpperCase(rule, value, callback) {
      var str_1 = value.replace(/\s*/g, "");
      var reg = /^[A-Z]*$/;
      callback(valid(rule, str_1, reg, '请输入英文大写字母'))
  }

  // 校验纯数字输入格式
  export function numbers(rule, value, callback) {
    callback(validateNumbers(rule, value))
  }

  // 校验纯中文输入格式
  export function validateChinese(rule, value, callback) {
      var reg = new RegExp('^[\u4e00-\u9fa5_0-9]*$')
      callback(valid(rule, value, reg, '请输入中文字符'))
  }