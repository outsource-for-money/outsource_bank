(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7WqY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i,r,o,l,u,d,f,c,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n("cneo"),m=n("wy2R"),h=(c=m)&&c.__esModule?c:{default:c};function b(e,t,n,a){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}function v(e,t,n,a,i){var r={};return Object.keys(a).forEach(function(e){r[e]=a[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,a){return a(e,t,n)||n},r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}var y=(a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"date",i,this),b(this,"grade",r,this),b(this,"visible",o,this),b(this,"appointment_list",l,this),b(this,"dataSource",u,this),b(this,"user_type",d,this),b(this,"loading",f,this)}return s(e,[{key:"day",get:function(){return(0,h.default)(this.date).format("YYYY-MM-DD")}}]),e}(),i=v(a.prototype,"date",[p.observable],{enumerable:!0,initializer:function(){return(0,h.default)().toDate()}}),r=v(a.prototype,"grade",[p.observable],{enumerable:!0,initializer:null}),o=v(a.prototype,"visible",[p.observable],{enumerable:!0,initializer:function(){return!1}}),l=v(a.prototype,"appointment_list",[p.observable],{enumerable:!0,initializer:function(){return[]}}),u=v(a.prototype,"dataSource",[p.observable],{enumerable:!0,initializer:null}),d=v(a.prototype,"user_type",[p.observable],{enumerable:!0,initializer:null}),f=v(a.prototype,"loading",[p.observable],{enumerable:!0,initializer:function(){return!1}}),v(a.prototype,"day",[p.computed],Object.getOwnPropertyDescriptor(a.prototype,"day"),a.prototype),a);t.default=new y},GZoT:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=location.href.split("?")[1];if(e){var t={};return(e=e.split("#")[0]).split("&").forEach(function(e){var n=e.split("=");if(2===n.length){var a=n[0],i=n[1];t[a]?t[a]=[i].concat(t[a]):t[a]=i}}),t}return{}}},Oj9Y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i,r,o=x(n("4Tk8")),l=x(n("Biz3")),u=x(n("5da2")),d=x(n("ZAQZ")),f=x(n("B7Ej")),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("Gjfl"),n("j15+"),n("Nt9i"),n("p9mG"),n("xwHp");var s=n("mXGw"),p=x(s),m=x(n("nE73")),h=x(n("s8jB")),b=n("mBK0"),v=x(n("7WqY")),y=x(n("wy2R")),g=x(n("czhI")),_=n("Z5z8"),w=x(n("GZoT")),E=n("dO77");function x(e){return e&&e.__esModule?e:{default:e}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}y.default.locale("zh_cn");var z=(0,b.observer)((i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.call(n),v.default.dataSource=new f.default.DataSource({rowHasChanged:function(e,t){return e!==t}}),v.default.appointment_list=[];var a=(0,w.default)();if(a.day&&(v.default.date=new Date(a.day)),a.grade?v.default.grade=a.grade:v.default.grade="",a.state){var i=decodeURIComponent(a.state).split("*");v.default.date=new Date(i[0]),v.default.grade=i[1]}return n.page=1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),c(t,[{key:"render",value:function(){var e=this,t=v.default.date,n=v.default.visible,a=v.default.dataSource,i=v.default.user_type,r=v.default.loading;return p.default.createElement("div",{className:"appointment_list"},p.default.createElement("div",{className:(0,m.default)(h.default,"home")},p.default.createElement(d.default,{inline:!0,size:"small",onClick:this.goIndex},"首页")),p.default.createElement(u.default,{style:{borderBottom:"none"}},p.default.createElement(u.default.Item,{onClick:this.openDateModal},p.default.createElement("span",null,"预约日期"),p.default.createElement("span",{className:(0,m.default)(h.default,"date")},(0,y.default)(t).format("YYYY/MM/DD dddd")))),p.default.createElement(l.default,{visible:n,mode:"date",onDismiss:this.closeDateModal,onOk:this.setDate}),p.default.createElement(f.default,{dataSource:a,renderSectionHeader:function(){return p.default.createElement("span",null,"预约列表")},renderRow:function(t,n,a){var r,o=[];switch(parseInt(t.state)){case 1:o="admin"===i?[p.default.createElement(d.default,{inline:!0,size:"small",type:"warning",onClick:function(){return e.reject(t.id)}},"拒绝"),p.default.createElement(d.default,{inline:!0,size:"small",type:"primary",onClick:function(){return e.resolve(t.id)}},"受理")]:[p.default.createElement(d.default,{inline:!0,size:"small",type:"warning",onClick:function(){return e.cancel(t.id)}},"取消")];break;case 2:o=[p.default.createElement(d.default,{inline:!0,size:"small",type:"primary",disabled:!0},"已受理")];break;case 3:o=[p.default.createElement(d.default,{inline:!0,size:"small",type:"warning",disabled:!0},"已受理")];break;case 4:o=[p.default.createElement(d.default,{inline:!0,size:"small",type:"ghost",disabled:!0},"已取消")]}return p.default.createElement("div",{key:a,style:{padding:"0 15px"}},p.default.createElement("div",{style:(r={display:"-webkit-box"},k(r,"display","flex"),k(r,"padding","15px 0"),r)},p.default.createElement("img",{style:{height:"64px",marginRight:"15px"},src:t.headimgurl,alt:""}),p.default.createElement("div",{style:{lineHeight:1,flexGrow:1,flexShrink:1}},p.default.createElement("div",{style:{marginBottom:"8px",fontWeight:"bold"}},t.name),p.default.createElement("p",null,t.address,", ",t.sex===_.MALE?"男":"女"),p.default.createElement("p",null,t.service+"/"+t.service_item,t.money>0?"/"+t.money:"")),p.default.createElement("div",{className:(0,m.default)(h.default,"btn-group")},o)))},renderSeparator:function(e,t){return p.default.createElement("div",{key:e+"-"+t,style:{margin:"0 15px",borderBottom:"1px solid #ECECED"}})},renderFooter:function(){return p.default.createElement("div",{style:{padding:30,textAlign:"center"}},r?"Loading...":"Loaded")},pageSize:4,useBodyScroll:!0,onEndReached:this.loadMore}))}},{key:"componentDidMount",value:function(){this.getAppointmentList(this.page)}}]),t}(),r=function(){var e=this;this.getAppointmentList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=v.default.day,a=v.default.grade;1===t&&(e.page=1);var i={page:t,size:_.SIZE,day:n};a&&(i.grade=a),g.default.get("/api/v1/orders/wx",{params:i}).then(function(e){v.default.loading=!1;var n=e.data,a=Array.from(v.default.appointment_list);1===t&&(a=[]);var i=void 0;1==n.user_grade?(i=a.concat(n.orders),v.default.user_type="user"):(i=a.concat(n.data),v.default.total=n.total,v.default.user_type="admin"),v.default.appointment_list=i,v.default.dataSource=v.default.dataSource.cloneWithRows(i)}).catch(function(t){v.default.loading=!1;var n=t.data,a=(0,w.default)(),i="";a.day&&a.grade?i=a.day.split(" ")[0]+"*"+a.grade:a.state&&(i=a.state);if(n){if(10001===n.error_code||10001===n.errorCode){(0,E.getWxToken)(i).then(function(t){e.getAppointmentList()})}}else(0,E.getWxToken)(i).then(function(t){e.getAppointmentList()})})},this.reject=function(t){o.default.alert("拒绝受理","将拒绝受理此项业务，请确认",[{text:"取消"},{text:"确认",onPress:function(){return e.handleAppointment(t,3)}}])},this.resolve=function(t){o.default.alert("受理","将受理此项业务，请确认",[{text:"取消"},{text:"确认",onPress:function(){return e.handleAppointment(t,2)}}])},this.cancel=function(t){o.default.alert("取消预约","将取消预约此项业务，请确认",[{text:"取消"},{text:"确认",onPress:function(){return e.handleAppointment(t,4)}}])},this.loadMore=function(){v.default.loading=!0,e.getAppointmentList(++e.page)},this.handleAppointment=function(e,t){g.default.post("/api/v1/order/handel",{id:e,state:t}).then(function(n){var a=n.data;if(0===a.error_code||0===a.errorCode){var i=Array.from(v.default.appointment_list);i.forEach(function(n){n.id===e&&(n.state=t)}),v.default.appointment_list=i,v.default.dataSource=v.default.dataSource.cloneWithRows(i)}}).catch(function(e){var t=e.data;if(t){if(10001===t.error_code||10001===t.errorCode){(0,E.getWxToken)().then(function(e){})}}else(0,E.getWxToken)().then(function(e){})})},this.goIndex=function(){e.props.history.push("/")},this.openDateModal=function(){v.default.visible=!0},this.closeDateModal=function(){v.default.visible=!1},this.setDate=function(t){v.default.date=t,v.default.visible=!1,e.getAppointmentList()}},a=i))||a;t.default=z},Z5z8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SIZE=15,t.MALE=1,t.FEMALE=2},dO77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.refreshWxToken=t.getWxToken=void 0;var a=o(n("czhI")),i=o(n("GZoT")),r=o(n("SGp1"));function o(e){return e&&e.__esModule?e:{default:e}}var l=null,u=function(e,t,n){var i=r.default.location.pathname,o=location.href.split("#")[0].split("?")[0],u="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf4b7d664b2461f4b&redirect_uri="+encodeURIComponent(o+"#"+i)+"&response_type=code&scope=snsapi_userinfo&state="+n+"#wechat_redirect";if(e)return l||(l=new Promise(function(e,n){a.default.get("/api/v1/token/user",{params:{code:t}}).then(function(t){l=null,e(t)}).catch(function(e){l=null,n(e)})}));window.location=u};t.getWxToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,i.default)().code;return u(!!t,t,e)},t.refreshWxToken=function(){return u(!1)}},nE73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return t.trim().split(/\s+/).map(function(t){return e[t]}).join(" ")}},s8jB:function(e,t,n){e.exports={home:"_2sfP_co4kRvgphaC1NMPV2",date:"_3fLReK9Q-jcWfZk702_V5Z","btn-group":"xgFttKZnF3OHJtqAx5OvH"}}}]);
//# sourceMappingURL=19_8410ce0dc8e734b9b403.js.map