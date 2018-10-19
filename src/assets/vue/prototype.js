/*
*   created by Linzy in 2018.2.25
* */
import Vue from "vue";
import qs from "querystring";
import echarts from "echarts";
import underscore from "underscore";
import jquery from "jquery";
// 全局引入
Vue.prototype.qs = qs;
Vue.prototype.echarts = echarts;
Vue.prototype._ = underscore;
Vue.prototype.$ = jquery;

// 验证是否拥有权限 返回布尔值
Vue.prototype.isHasPre = function(...rest) {
  if (localStorage.hasOwnProperty("per_ens")) {
    let per_ens = localStorage.getItem("per_ens");
    if (!per_ens) return false;
    let arr = [];
    for (let i = 0; i < rest.length; i++) {
      if (per_ens.indexOf(rest[i]) > -1) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    }
    if (arr.indexOf(true) > -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// 全局引入 改变title 适用于一个模块承当多个页面的情况
Vue.prototype.changeTitle = title => {
  let eleTitle = document.getElementsByTagName("title")[0];
  eleTitle.innerHTML = title;
};

// 生成json的方法 makeJson
Vue.prototype.makeJson = (arr1, arr2, key1, key2) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let obj = {};
    obj[key1] = arr1[i];
    obj[key2] = arr2[i];
    arr.push(obj);
  }
  return arr;
};

// 对象加前缀 + 清除属性为空的值 不传pre前缀 则为筛选非空对象属性
Vue.prototype.preData = function(obj, pre = "") {
  var tempObj = {};
  for (var k in obj) {
    if (this._.isArray(obj[k]) || this._.isObject(obj[k])) {
      if (!this._.isEmpty(obj[k])) {
        tempObj[pre + k] = obj[k];
      }
    } else {
      if (obj[k] || obj[k] === 0) {
        tempObj[pre + k] = obj[k];
      }
    }
  }
  return tempObj;
};
// 对象加前缀
Vue.prototype.addPre = function(obj, pre) {
  var tempObj = {};
  for (var k in obj) {
    tempObj[pre + k] = obj[k];
  }
  return tempObj;
};

// 数字添加前缀 补0
Vue.prototype.tens = function(n) {
  if (n < 10) return "0" + n;
  else return n;
};

// 时间戳转成倒计时
Vue.prototype.stampToDate = function(stamp) {
  var newStamp = stamp / 1000;
  if (newStamp > 0) {
    var d = parseInt(newStamp / (24 * 60 * 60));
    var h = parseInt((newStamp / (60 * 60)) % 24);
    var m = parseInt((newStamp / 60) % 60);
    var s = parseInt(newStamp % 60);
    var str =
      (d ? d + "日" : "") +
      (h ? h + "时" : "") +
      (m ? m + "分" : "") +
      (s ? s + "秒" : "");
    return str;
  } else {
    return "已到期";
  }
};

// 时间戳转化成日期格式 stamp为时间戳
Vue.prototype.dateToFormat = function(stamp, format, sign) {
  if (stamp) {
    var symbol = sign ? sign : "-",
      oD = new Date(+stamp),
      y = oD.getFullYear(),
      M = oD.getMonth() + 1,
      d = oD.getDate(),
      h = oD.getHours(),
      m = oD.getMinutes(),
      s = oD.getSeconds(),
      D = y + symbol + this.tens(M) + symbol + this.tens(d),
      T = this.tens(h) + ":" + this.tens(m) + ":" + this.tens(s);
    if (format) {
      switch (format) {
        case "yyyy-mm-dd":
          return D;
          break;
        case "hh-mm-ss":
          return T;
          break;
        default:
          return D + " " + T;
          break;
      }
    } else {
      return D + " " + T;
    }
  } else {
    return null;
  }
};

// 数组中通过key的值查询相应的label的方法 key为json数组中的key
// label为需要查询的label的key
Vue.prototype.getLabel = function(arr, label, key, value) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[i][key] === value) {
      return arr[i][label];
      i = length;
    }
  }
};
// 转化成transfer穿梭框 所需要的数据结构 	array[{ key, label, disabled }]
//
Vue.prototype.trunTransferData = function(arr, id, name) {
  var tempArr = [];
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    tempArr.push({ key: arr[i][id], label: arr[i][name], disabled: false });
  }
  return tempArr;
};

// 字符串 转化成数字的id
Vue.prototype.numberArr = function(ids) {
  var tempArr = [];
  if (ids) {
    var arr = ids.split(",");
    tempArr = arr.map(Number);
  }
  return tempArr;
};

// 重新登录
Vue.prototype.reLogin = function() {
  localStorage.removeItem("userData");
  localStorage.removeItem("loginName");
  this.$router.replace({ name: "login" });
  // axios.post("/outlogin");
};

// 设置表格高度
Vue.prototype.setTableHeight = function(tableHeight) {
  var setHeight = () => {
    this.$nextTick(() => {
      var tableBodyHeight = this.$(".el-table__body").height();
      var tableHeaderHeight = this.$(".el-table__header").height();
      var comMainBoxHeight = this.$("#comMainBox").height();
      if (tableBodyHeight + tableHeaderHeight > comMainBoxHeight) {
        this.$set(this.$data, tableHeight, "100%");
      } else if (tableBodyHeight === 0) {
        this.$set(this.$data, tableHeight, tableHeaderHeight + 60);
      } else {
        this.$set(this.$data, tableHeight, tableBodyHeight + tableHeaderHeight);
      }
    });
  };
  setHeight();
  window.onresize = () => {
    setHeight();
  };
};
//自动生成入库编号
(Vue.prototype.getRadomNum = function() {
  let date = new Date();
  let year = date.getFullYear(),
    month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1,
    day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let radomNum =
    year.toString() +
    month.toString() +
    day.toString() +
    hours.toString() +
    min.toString() +
    sec.toString();
  return radomNum;
}),
  /*
*   导出数据
*       表格id      (1:备件列表;2:人员列表;3:设备列表;4:客户列表)
*       optionList  列表选项数组
* */
  (Vue.prototype.exportData = function(table_id, optionList) {
    var columns = this._.pluck(optionList, "value");
    var names = this._.pluck(optionList, "label");
    var params = {
      "rec.table_id": table_id,
      "rec.export_select_columus": columns.join(","),
      "rec.export_select_columus_name": names.join(",")
    };
    location.href = `/api/common/exportData?rec.table_id=${table_id}&rec.export_select_columus=${columns.join(
      ","
    )}&rec.export_select_columus_name=${names.join(",")}`;
  });

// 获取tree组件所需要的数组格式
Vue.prototype.getTreeList = function(arr) {
  if (arr.length === 0) {
    return [];
  }
  let parentArr = [];
  // 转化成treeList
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].parent_group_id === 0) {
      arr[i].showAdd = true;
      parentArr.push(arr[i]);
    }
  }
  for (let i = 0; i < parentArr.length; i++) {
    let childArr = arr.filter((item, index) => {
      return item.parent_group_id === parentArr[i].group_id;
    });
    for (let j = 0; j < childArr.length; j++) {
      childArr[j].showAdd = true;
      let grandchildArr = arr.filter((item, index) => {
        return item.parent_group_id === childArr[j].group_id;
      });
      for (let k = 0; k < grandchildArr.length; k++) {
        grandchildArr[k].showAdd = false;
      }
      if (grandchildArr.length) {
        childArr[j].children = grandchildArr;
      }
    }
    if (childArr.length) {
      parentArr[i].children = childArr;
    }
  }
  return parentArr;
};

// 是否是管理员
Vue.prototype.isAdmin = function() {
  if (localStorage.hasOwnProperty("userData")) {
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData.role_ens) return false;
    if (userData.role_ens.indexOf("admin") > -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// 是否是部门负责人
Vue.prototype.isHead = function() {
  if (localStorage.hasOwnProperty("userData")) {
    var userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.head_flag === 2) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// 全局的类型下拉
Vue.prototype.globalTypeList = function() {
  return [
    { label: "出库", value: 1 },
    { label: "借用", value: 2 },
    { label: "归还", value: 3 },
    { label: "领用", value: 4 },
    { label: "展会", value: 5 },
    { label: "试用", value: 6 },
    { label: "投放", value: 7 }
  ];
};

/**
 *  以下为正则判断 配合elementUI formRules验证
 */

// 必须为数字
Vue.prototype.validateNum = function(rule, value, callback) {
  if (!value) {
    callback(new Error("请输入数字"));
  } else if (!/^\d+$/.test(value)) {
    callback(new Error("请输入数字"));
  } else {
    callback();
  }
};
// 必须为数字
Vue.prototype.validateFloat = function(rule, value, callback) {
  if (!value) {
    callback();
  } else if (!/^\d+(\.\d+)?$/.test(value)) {
    callback(new Error("请输入数字"));
  } else {
    callback();
  }
};
// 手机号
Vue.prototype.validatePhone = function(rule, value, callback) {
  if (!value) {
    callback();
  } else if (
    /(^(\d{3,4}-)?\d{5,8})$|(^(\d{3,4}-)?\d{5,8}-(\d{3,4}))$|(1[3|4|5|7|8|9]\d{9})|((400)-(\d{3,4})-(\d{3,4}))|((800)-(\d{3,4})-(\d{3,4}))/.test(
      value
    )
  ) {
    callback();
  } else {
    callback(new Error("联系方式格式错误"));
  }
};

// 账号
Vue.prototype.validateAccount = function(rule, value, callback) {
  if (!value) callback(new Error("请输入账号"));
  else if (/^[A-z].{1,14}$/.test(value)) callback();
  else callback(new Error("请以字母开头,长度不能低于两位,高于15位"));
};
//验证用户端密码
Vue.prototype.validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (value.length < 4) {
    callback(new Error("请输入4位密码"));
  } else {
    callback();
  }
};
// 密码
Vue.prototype.validatePwd = function(rule, value, callback) {
  if (!value) callback(new Error("请输入账号"));
  else if (/^.{4,15}$/.test(value)) callback();
  else callback(new Error("请以字母开头,长度不能低于四位,高于15位"));
};
// 重复字段验证
Vue.prototype.doubleName = function(rule, value, callback, url) {
  this.axios.get(url).then(response => {
    if (response.data.code === 406) {
      callback(new Error("名称已存在"));
    } else {
      callback();
    }
  });
};
// 验证区域
Vue.prototype.validateArea = function(rule, value, callback) {
  if (value.length === 0) {
    callback(new Error("请选择所在地区"));
  } else if (value.length < 3) {
    callback(new Error("三级所在地区都要选中"));
  } else {
    callback()
  }
};
//日期格式化
Date.prototype.dateFormat = function(format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds() //millisecond
  };

  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

// 调用百度Api获取坐标点
Vue.prototype.getMapPoint = function(address, city) {
  // 创建地址解析器实例
  return new Promise(function(resolve, reject) {
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
      address,
      function(point) {
        if (point) {
          if (point.lat && point.lng) {
            resolve(point);
          } else {
            reject("fail");
          }
        }
      },
      city
    );
  });
};
//在表头上添加tooltip
Vue.prototype.appendTip = function(createElement, { column }) {
  return createElement(
    "el-tooltip",
    {
      attrs: {
        effect: "dark",
        content: column.label,
        placement: "top-start"
      }
    },
    [
      createElement("a", [column.label], {
        attrs: {
          href: "#test"
        }
      })
    ]
  );
};
//同步localStorage的数据
Vue.prototype.synchronousData = function(optionName, data) {
  let arr = localStorage.getItem(optionName);
  let optionList = JSON.parse(arr);
  if (optionList) {
    optionList.forEach((oitem, oindex) => {
      if ((oitem.value.indexOf("_") > 0) && !isNaN(oitem.value.split("_")[1])) {
        var flag = false;
        data.forEach((item, index) => {
          if (oitem.value.split("_")[1] + "" === item.extra_id + "") {
            flag = true;
            if (oitem.label !== item.extra_name) {
              oitem.label = item.extra_name;
            }
          }
        });
        if (flag == false) {
          optionList.splice(oindex, 1);
        }
      }
    });
    localStorage.setItem(optionName, JSON.stringify([...optionList]));
  }
};
/**
 *    预览图片PC端 利用viewer.js
 *    ev,         event 对象
 *    list,       图片数组 默认是所有的数组 当isInfo传的是item数组
 *    container,  外层div
 *    isInfo      是否是详情页 默认为false
 */

Vue.prototype.previewImages = function(ev, list, container, isInfo = false) {
  if (ev.target.className !== "el-upload-list__item-actions") {
    return;
  }
  let src = $(ev.target)
    .siblings("img")
    .attr("src");
  if (!src) {
    this.$message({
      message: "未提交，不支持预览",
      type: "warning"
    });
    return;
  }
  // console.log(src)
  // if (src.indexOf('video.png') > -1) {
  //   // window.open(location.origin?)
  //   this.$message({
  //     message: '未提交1111，不支持预览',
  //     type: 'warning'
  //   });
  //   return
  // }
  let arr = [];
  if (isInfo) {
    arr = list;
  } else {
    arr = this._
      .chain(list)
      .pluck("fileList")
      .flatten()
      .value();
  }
  let index = 0;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i].url === src) {
      index = i;
      i = length;
    }
  }
  let viewer = this.$el.querySelector(`.${container}`).$viewer;
  viewer.update();
  viewer.view(index);
};
// 获取自定义列表的key数组
Vue.prototype.getExtraArr = function(allCustomList) {
  let nameArr = [];
  allCustomList.forEach(item => {
    if (item.extra_type_en_name === "number") {
      nameArr.push(item.extra_en_name + "extlow");
      nameArr.push(item.extra_en_name + "exthigh");
    } else {
      nameArr.push(item.extra_en_name);
    }
  });
  return nameArr;
};

/*  获取要提交的自定义列表对象 可选前缀
*   allCustomList 自定义列表
*   tableForm     tableForm 表格观测对象
*   pre           自定义列表的前缀
* */
Vue.prototype.getExtraObj = function(
  allCustomList,
  tableForm,
  pre = "extra",
  from = "device"
) {
  let nameArr = this.getExtraArr(allCustomList);
  let tempObj = {},
    i = 0;
  let pickObj = this.preData(this._.pick(tableForm, ...nameArr));
  for (let k in pickObj) {
    if (k.indexOf("extlow") > -1) {
      tempObj[`${pre}[${i}].extra_en_name`] = k.split("extlow")[0];
      tempObj[`${pre}[${i}].extra_${from}_data`] = pickObj[k];
      tempObj[`${pre}[${i}].operator`] = "gte";
    } else if (k.indexOf("exthigh") > -1) {
      tempObj[`${pre}[${i}].extra_en_name`] = k.split("exthigh")[0];
      tempObj[`${pre}[${i}].extra_${from}_data`] = pickObj[k];
      tempObj[`${pre}[${i}].operator`] = "lte";
    } else {
      tempObj[`${pre}[${i}].extra_en_name`] = k;
      tempObj[`${pre}[${i}].extra_${from}_data`] = pickObj[k];
      allCustomList.forEach(item => {
        if (item.extra_en_name === k) {
          switch (item.extra_type_en_name) {
            case "text":
            case "textarea":
            case "checkbox":
              tempObj[`${pre}[${i}].operator`] = "like";
              break;
            case "radio":
              tempObj[`${pre}[${i}].operator`] = "eq";
              break;
            case "datetime":
            case "date":
              tempObj[`${pre}[${i}].extra_${from}_data`] = pickObj[k][0];
              tempObj[`${pre}[${i}].operator`] = "dategte";
              i++;
              tempObj[`${pre}[${i}].extra_en_name`] = k;
              tempObj[`${pre}[${i}].extra_${from}_data`] = pickObj[k][1];
              tempObj[`${pre}[${i}].operator`] = "datelte";
              break;
          }
        }
      });
    }
    i++;
  }
  return tempObj;
};
Vue.prototype.simpleProvince = function (str) {
  if (str.indexOf('内蒙古') > -1) {
    return '内蒙古'
  }
  if (str.indexOf('广西') > -1) {
    return '广西'
  }
  if (str.indexOf('西藏') > -1) {
    return '西藏'
  }
  if (str.indexOf('宁夏') > -1) {
    return '宁夏'
  }
  if (str.indexOf('新疆') > -1) {
    return '新疆'
  }
  if (str.indexOf('香港') > -1) {
    return '香港'
  }
  if (str.indexOf('香港') > -1) {
    return '香港'
  }
  if (str.indexOf('澳门') > -1) {
    return '澳门'
  }
  return str
};

// 金额转大写
Vue.prototype.amountUpper = function (n) {
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "数据非法";
  if (n == 0) return "零元";
  var unit = "仟佰拾亿仟佰拾万仟佰拾元角分", str = "";
  n += "00";
  var p = n.indexOf('.');
  if (p >= 0)
    n = n.substring(0, p) + n.substr(p+1, 2);
  unit = unit.substr(unit.length - n.length);
  for (var i=0; i < n.length; i++)
    str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
  return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
};

// 上线配置 更改完本地路径 不要提交
Vue.prototype.urlConfig = {
  // largeScreenUrl: "http://largescreen.shouhouge.com",
  largeScreenUrl: "http://192.168.0.104:8083",
  // webSocketWS: "ws://www.shouhouge.com/api/websocket",
  webSocketWS: "ws://192.168.0.104:90/websocket",
  // uploadUrl: "http://wx.shouhouge.com"
  uploadUrl: "http://1o5f264182.iask.in"
};
