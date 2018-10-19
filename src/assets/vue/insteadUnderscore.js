import Vue from 'vue'

// 对象萃取 浅对象
Vue.prototype.pick = (obj, ...pickArr) => {
  let tempObj = {};
  for (let k in obj) {
    if (pickArr.indexOf(k) > -1) {
      tempObj[k] = obj[k];
    }
  }
  return tempObj
};

// 对象提取某一个key的value值 返回数组
Vue.prototype.pluck = (json, key) => {
  let tempArr = [];
  json.forEach((obj, index) => {
    tempArr.push(obj[key])
  })
  return tempArr;
};

// 数组去 false
Vue.prototype.compact = (arr) => {
  let tempArr = arr.filter((item, index) => {
    return item;
  })
  return tempArr;
};

// 生成数组
Vue.prototype.range = (start = 0, stop, step = 0) => {
  let tempArr = [];
  for (let i = start; i <= stop; i += step) {
    tempArr.push(i);
  }
  return tempArr
};

// 数组求和
// es5.1新增了 reduce方法 所以这个就不需要封装了 跳过
Vue.prototype.reduce = (arr) => {
  let sum = arr.reduce((pre, cur) => {
    return pre + cur;
  });
  return sum;
};

// 两个数组组成对象
Vue.prototype.object = (kArr, vArr) => {
  let obj = {};
  let length = kArr.length;
  for (let i = 0; i < length; i++) {
    obj[kArr[i]] = vArr[i]
  }
  return obj
};

// 判断两个对象是否相等
Vue.prototype.isEqual = (obj1, obj2) => {
  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);
  if (str1 === str2) {
    return true
  } else if (str1.length === str2.length) {
    let kStr1 = JSON.stringify(Object.keys(obj1).sort());
    let vStr1 = JSON.stringify(Object.values(obj1).sort());
    let kStr2 = JSON.stringify(Object.keys(obj2).sort());
    let vStr2 = JSON.stringify(Object.values(obj2).sort());
    if (kStr1 === kStr2 && vStr1 === vStr2) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
};

// 判断是否是数组
Vue.prototype.isArray = (arr) => {
  if (typeof(arr) === 'object' && arr.length > -1) {
    return true
  } else {
    return false
  }
};

// 判断是否是对象
Vue.prototype.isObject = (obj) => {
  if (obj === null) {
    return false
  } else if (typeof(obj) === 'object' && obj.length === undefined) {
    return true
  } else {
    return false
  }
};

// 判断是否是函数
Vue.prototype.isFunction = (fun) => {
  if (typeof(fun) === 'function') {
    return true
  } else {
    return false
  }
};

// 对象深度复制
Vue.prototype.clone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
};

// 跟pick相反 留下非kArr的内容
Vue.prototype.omit = (obj, ...kArr) => {
  let tempObj = {};
  for (let k in obj){
    if (!(kArr.indexOf(k) > -1)) {
      tempObj[k] = obj[k];
    }
  }
  return tempObj
};
// 判断对象是否为空
Vue.prototype.isEmpty = (obj) => {
  if (JSON.stringify(obj) === "{}") {
    return true
  } else {
    return false
  }
};
