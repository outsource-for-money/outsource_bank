(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{GZoT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=location.href.split("?")[1];if(e){var t={};return(e=e.split("#")[0]).split("&").forEach(function(e){var n=e.split("=");if(2===n.length){var i=n[0],r=n[1];t[i]?t[i]=[r].concat(t[i]):t[i]=r}}),t}return{}}},WVMr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r,a,o,u,l,c,f,s,d,p,m,h,y,v,b,_,g,k,w=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),O=n("cneo");function x(e,t,n,i){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(i):void 0})}function M(e,t,n,i,r){var a={};return Object.keys(i).forEach(function(e){a[e]=i[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,i){return i(e,t,n)||n},a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}var D=(i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"selectSex",r,this),x(this,"bank_list",a,this),x(this,"selected_bank",o,this),x(this,"origin_service_type_list",u,this),x(this,"service_type_list",l,this),x(this,"service_type",c,this),x(this,"service_content_list",f,this),x(this,"service_content",s,this),x(this,"showMoney",d,this),x(this,"date",p,this),x(this,"time",m,this),x(this,"name",h,this),x(this,"inputPhone",y,this),x(this,"identity",v,this),x(this,"money",b,this),x(this,"name_sub",_,this),x(this,"minMaxDate",g,this),x(this,"minMaxTime",k,this)}return w(e,[{key:"init",get:function(){return this.service_type.length>0&&-1!==this.service_type[0].indexOf("对公")?{type:"对公"}:{type:"个人"}}},{key:"phone",get:function(){return this.inputPhone&&this.inputPhone.split(" ").join("")}},{key:"sex",get:function(){return this.selectSex&&this.selectSex[0]}},{key:"bank_id",get:function(){return this.selected_bank&&this.selected_bank[0]}},{key:"service",get:function(){return this.service_type&&this.service_type[0]}},{key:"service_item",get:function(){return this.service_content&&this.service_content[0]}},{key:"day",get:function(){if(this.date&&this.time){var e=moment(this.date).format("YYYY-MM-DD"),t=moment(this.time).format("HH:mm");return moment(e+" "+t,"YYYY-MM-DD HH:mm").format("YYYY-MM-DD HH:mm")}return null}},{key:"disableBtn",get:function(){return"对公"===this.init.type&&!this.name_sub||(!this.name||!this.phone||!this.identity||!this.sex||!this.bank_id||!this.service||!this.service_item||!this.day||this.showMoney&&!this.money)}}]),e}(),r=M(i.prototype,"selectSex",[O.observable],{enumerable:!0,initializer:function(){return[]}}),a=M(i.prototype,"bank_list",[O.observable],{enumerable:!0,initializer:function(){return[]}}),o=M(i.prototype,"selected_bank",[O.observable],{enumerable:!0,initializer:function(){return[]}}),u=M(i.prototype,"origin_service_type_list",[O.observable],{enumerable:!0,initializer:function(){return[]}}),l=M(i.prototype,"service_type_list",[O.observable],{enumerable:!0,initializer:function(){return[]}}),c=M(i.prototype,"service_type",[O.observable],{enumerable:!0,initializer:function(){return[]}}),f=M(i.prototype,"service_content_list",[O.observable],{enumerable:!0,initializer:function(){return[]}}),s=M(i.prototype,"service_content",[O.observable],{enumerable:!0,initializer:function(){return[]}}),d=M(i.prototype,"showMoney",[O.observable],{enumerable:!0,initializer:function(){return!1}}),p=M(i.prototype,"date",[O.observable],{enumerable:!0,initializer:function(){return null}}),m=M(i.prototype,"time",[O.observable],{enumerable:!0,initializer:function(){return null}}),h=M(i.prototype,"name",[O.observable],{enumerable:!0,initializer:null}),y=M(i.prototype,"inputPhone",[O.observable],{enumerable:!0,initializer:null}),v=M(i.prototype,"identity",[O.observable],{enumerable:!0,initializer:null}),b=M(i.prototype,"money",[O.observable],{enumerable:!0,initializer:null}),_=M(i.prototype,"name_sub",[O.observable],{enumerable:!0,initializer:null}),g=M(i.prototype,"minMaxDate",[O.observable],{enumerable:!0,initializer:function(){return{}}}),k=M(i.prototype,"minMaxTime",[O.observable],{enumerable:!0,initializer:function(){return{}}}),M(i.prototype,"init",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"init"),i.prototype),M(i.prototype,"phone",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"phone"),i.prototype),M(i.prototype,"sex",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"sex"),i.prototype),M(i.prototype,"bank_id",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"bank_id"),i.prototype),M(i.prototype,"service",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"service"),i.prototype),M(i.prototype,"service_item",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"service_item"),i.prototype),M(i.prototype,"day",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"day"),i.prototype),M(i.prototype,"disableBtn",[O.computed],Object.getOwnPropertyDescriptor(i.prototype,"disableBtn"),i.prototype),i);t.default=new D},aZFF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMinMaxDate=t.getMinMaxTime=void 0;var i,r=n("wy2R"),a=(i=r)&&i.__esModule?i:{default:i};t.getMinMaxTime=function(e){var t=(0,a.default)(),n=t.format("YYYY-MM-DD"),i=void 0,r=void 0;return(0,a.default)(e).format("YYYY-MM-DD")===n?t.hour()<8?(i=(0,a.default)().hour(8).minute(0),r=(0,a.default)().hour(15).minute(0)):i=(0,a.default)().minute()>30?(0,a.default)().add(1,"h").minute(0):(0,a.default)().minute(30):i=(0,a.default)("08:00","HH:mm"),r=(0,a.default)().hour(15).minute(0),{minDate:i.toDate(),maxDate:r.toDate(),defaultDate:i.toDate()}},t.getMinMaxDate=function(){var e=(0,a.default)(),t=void 0,n=void 0,i=0;return e.hour()>15||15===e.hour()&&e.minute()>0?(i+=1,t=(0,a.default)().add(i,"d").hour(8).minute(0)):t=(0,a.default)().minute(0),n=(0,a.default)().add(i+2,"d").hour(15).minute(0),{minDate:t.toDate(),maxDate:n.toDate()}},t.default=function(){var e=(0,a.default)();return{minDate:(e.minute()>30?e.add(1,"h").minute(0):e.minute(30)).toDate(),maxDate:(0,a.default)().add(2,"d").hour(23).minute(59).toDate()}}},dO77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.refreshWxToken=t.getWxToken=void 0;var i=o(n("czhI")),r=o(n("GZoT")),a=o(n("SGp1"));function o(e){return e&&e.__esModule?e:{default:e}}var u=null,l=function(e,t,n){var r=a.default.location.pathname,o=location.href.split("#")[0].split("?")[0],l=encodeURIComponent(o+"#"+r),c="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+window.appConfig.appId+"&redirect_uri="+l+"&response_type=code&scope=snsapi_userinfo&state="+n+"#wechat_redirect";if(e)return u||(u=new Promise(function(e,n){i.default.get("/api/v1/token/user",{params:{code:t}}).then(function(t){u=null,e(t)}).catch(function(e){u=null,n(e)})}));window.location=c};t.getWxToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,r.default)().code;return-1!==location.host.indexOf("localhost")||-1!==location.host.indexOf("127.0.0.1")?new Promise(function(e,t){t()}):l(!!t,t,e)},t.refreshWxToken=function(){return l(!1)}},jgSJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=x(n("CGtu")),a=x(n("ZAQZ")),o=x(n("Biz3")),u=x(n("icwN")),l=x(n("OSZ1")),c=x(n("5da2")),f=x(n("gyVw")),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();n("AZLO"),n("p9mG"),n("j15+"),n("1bJb"),n("Xzgj"),n("Nt9i"),n("4Y1d");var p=n("mXGw"),m=x(p),h=x(n("qLGs")),y=x(n("nE73")),v=n("mBK0"),b=n("cneo"),_=x(n("WVMr")),g=n("aZFF"),k=x(n("czhI")),w=x(n("SGp1")),O=n("dO77");function x(e){return e&&e.__esModule?e:{default:e}}var M=(0,v.observer)(i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getServiceList=function(){k.default.get("/api/v1/service/services").then(function(e){var t=e.data;_.default.origin_service_type_list=t,_.default.service_type_list=t.map(function(e){return{label:e.category,value:e.category}})}).catch(function(e){var t=e.data;if(t){if(10001===t.error_code||10001===t.errorCode){(0,O.getWxToken)().then(function(e){n.getServiceList()})}}else(0,O.getWxToken)().then(function(e){n.getServiceList()})})},n.getBankList=function(){k.default.get("/api/v1/banks").then(function(e){var t=e.data;_.default.bank_list=t.map(function(e){return{label:e.name+"("+e.address+")",value:e.id}})}).catch(function(e){var t=e.data;if(t){if(10001===t.error_code||10001===t.errorCode){(0,O.getWxToken)().then(function(e){n.getBankList()})}}else(0,O.getWxToken)().then(function(e){n.getBankList()})})},n.sexList=[{label:"男",value:"1"},{label:"女",value:"2"}],n.pickSex=function(e){_.default.selectSex=e},n.pickBank=function(e){_.default.selected_bank=e},n.pickServiceType=function(e){_.default.service_type=e;var t=[],n=!1;Array.from(_.default.origin_service_type_list).forEach(function(i){i.category===e[0]&&(1===i.money&&(n=!0),t=i.item.map(function(e){return{label:e,value:e}}))}),_.default.service_content_list=t,_.default.service_content=[],_.default.showMoney=n},n.pickServiceContent=function(e){_.default.service_content=e},n.handleDate=function(e){_.default.date=e},n.handleTime=function(e){_.default.time=e},n.confirm=function(){var e=_.default.disableBtn,t=_.default.name,n=_.default.phone,i=_.default.identity,r=_.default.sex,a=_.default.service,o=_.default.service_item,u=_.default.bank_id,l=_.default.day,c=_.default.money,s=_.default.showMoney,d=_.default.name_sub;if(!e){var p={name:t,phone:n,identity:i,sex:r,service:a,service_item:o,bank_id:u,day:l};s&&(p.money=c),d&&(p.name_sub=d),f.default.loading("提交中，请稍后...",30),k.default.post("/api/v1/order/save",p).then(function(e){f.default.hide();var t=e.data;0!==t.error_code&&0!==t.errorCode||w.default.push("/appointment/result")}).catch(function(e){f.default.hide()})}},_.default.minMaxDate=(0,g.getMinMaxDate)(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,p.Component),d(t,[{key:"componentDidMount",value:function(){this.getServiceList(),this.getBankList(),this.autorunHandler=(0,b.autorun)(function(){var e=_.default.date;if(e){var t=(0,g.getMinMaxTime)(e),n=t.defaultDate,i=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["defaultDate"]);_.default.minMaxTime=i,_.default.time=n}})}},{key:"componentWillUnmount",value:function(){this.autorunHandler()}},{key:"render",value:function(){var e=_.default.showMoney,t=_.default.date,n=_.default.time,i=_.default.bank_list,f=_.default.selected_bank,d=_.default.disableBtn,p=_.default.init,v=_.default.minMaxDate,b=_.default.minMaxTime,g=Array.from(i),k=Array.from(f),w=Array.from(_.default.selectSex),O=Array.from(_.default.service_type_list),x=Array.from(_.default.service_type),M=Array.from(_.default.service_content_list),D=Array.from(_.default.service_content);return m.default.createElement("div",null,m.default.createElement("h3",{className:(0,y.default)(h.default,"header")},"填写预约信息"),m.default.createElement(c.default,null,m.default.createElement(l.default,{data:O,value:x,cols:1,onOk:this.pickServiceType},m.default.createElement(c.default.Item,{arrow:"horizontal"},"服务类别")),m.default.createElement(l.default,{data:M,value:D,cols:1,onOk:this.pickServiceContent},m.default.createElement(c.default.Item,{arrow:"horizontal"},"服务内容")),"对公"===p.type?m.default.createElement(m.default.Fragment,null,m.default.createElement(u.default,{placeholder:"请输入企业名称",onChange:function(e){return _.default.name=e}},"企业名称"),m.default.createElement(u.default,{placeholder:"请输入15位或18位的社会信用代码",onChange:function(e){return _.default.identity=e}},"营业执照号"),m.default.createElement(u.default,{placeholder:"请输入企业联系人姓名",onChange:function(e){return _.default.name_sub=e}},"联系人")):m.default.createElement(m.default.Fragment,null,m.default.createElement(u.default,{placeholder:"请输入姓名",onChange:function(e){return _.default.name=e}},"姓名"),m.default.createElement(u.default,{placeholder:"请输入身份证号",onChange:function(e){return _.default.identity=e}},"身份证号")),m.default.createElement(u.default,{placeholder:"请输入手机号",type:"phone",onChange:function(e){return _.default.inputPhone=e}},"手机号"),m.default.createElement(l.default,{data:this.sexList,value:w,cols:1,onOk:this.pickSex},m.default.createElement(c.default.Item,{arrow:"horizontal"},"性别")),m.default.createElement(l.default,{data:g,value:k,cols:1,onOk:this.pickBank},m.default.createElement(c.default.Item,{arrow:"horizontal"},"预约银行")),e?m.default.createElement(u.default,{placeholder:"请输入预约金额",type:"money",moneyKeyboardAlign:"left",onChange:function(e){return _.default.money=e}},"预约金额"):null),m.default.createElement(c.default,{renderHeader:function(){return"预约受理时间:08:00~15:00"}},m.default.createElement(o.default,s({mode:"date",onChange:this.handleDate},v,{value:t}),m.default.createElement(c.default.Item,{arrow:"horizontal"},"预约日期")),m.default.createElement(o.default,s({mode:"time",minuteStep:30},b,{onChange:this.handleTime,value:n}),m.default.createElement(c.default.Item,{arrow:"horizontal"},"预约时间"))),m.default.createElement(r.default,{style:{marginTop:48}},m.default.createElement(a.default,{type:"primary",disabled:d,onClick:this.confirm},"提交预约申请")))}}]),t}())||i;t.default=M},nE73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return t.trim().split(/\s+/).map(function(t){return e[t]}).join(" ")}},qLGs:function(e,t,n){e.exports={header:"_2YR1Z9jstTfLS7Tdu9GRqj"}}}]);
//# sourceMappingURL=21_1d0e1746f85b0f0ffa7b.js.map