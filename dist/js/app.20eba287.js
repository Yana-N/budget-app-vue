(function(t){function e(e){for(var a,l,i=e[0],s=e[1],u=e[2],m=0,d=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"04ee":function(t,e,n){"use strict";n("69e1")},"2d4d":function(t,e,n){},"336a":function(t,e,n){},"56a5":function(t,e,n){"use strict";n("336a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TotalBalance",{attrs:{total:t.totalBalance}}),n("BudgetList",{attrs:{list:t.list},on:{deleteItem:t.onDeleteItem}}),n("Form",{on:{onSubmitForm:t.onSubmitForm}}),n("ElDialog",{attrs:{title:"Delete item",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),n("ElButton",{attrs:{type:"primary"},on:{click:t.onDeleteItem}},[t._v("Confirm")])],1)])],1)},r=[],l=(n("13d5"),n("07ac"),n("5530")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"budget-list-wrap"},[n("ElCard",{attrs:{header:t.header}},[t.isEmpty?n("ElAlert",{attrs:{type:"info",title:t.emptyTitle,closable:!1}}):[t._l(t.list,(function(e,a){return[n("BudgetListItem",{key:a,attrs:{item:e},on:{deleteItem:t.deleteItem}})]}))]],2)],1)},s=[],u=(n("b64b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},[n("span",{staticClass:"budget-comment"},[t._v(t._s(t.item.comment))]),n("div",{staticClass:"budget-value",class:t.classValue},["INCOME"===t.item.type?n("span",{staticClass:"el-icon-caret-top"}):n("span",{staticClass:"el-icon-caret-bottom"}),n("span",[t._v(t._s(t.item.value))])]),n("ElButton",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.deleteItem(t.item.id)}}})],1)}),c=[],m={name:"BugetListItem",props:{item:{type:Object,default:function(){return{}}}},computed:{classValue:function(){return"INCOME"===this.item.type?"green":"red"}},methods:{deleteItem:function(t){this.$emit("deleteItem",t)}}},d=m,f=(n("04ee"),n("2877")),p=Object(f["a"])(d,u,c,!1,null,"24d08db6",null),b=p.exports,v={name:"BudgetList",components:{BudgetListItem:b},props:{list:{type:Object,default:function(){return{}}}},data:function(){return{header:"My Budget",emptyTitle:"Empty list"}},methods:{deleteItem:function(t){this.$emit("deleteItem",t)}},computed:{isEmpty:function(){return!Object.keys(this.list).length}}},y=v,h=(n("56a5"),Object(f["a"])(y,i,s,!1,null,"7097691d",null)),g=h.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total-value",class:t.totalClass},[t._v("Balance: "+t._s(t.total))])},E=[],I=(n("a9e3"),{name:"TotalBalance",props:{total:{type:Number,default:0}},computed:{totalClass:function(){return{red:this.total<0,green:this.total>0,black:0===this.total}}}}),_=I,C=(n("fa8c"),Object(f["a"])(_,O,E,!1,null,"181dfcfd",null)),j=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElCard",{staticClass:"form-list-wrap"},[n("ElForm",{ref:"addFormItem",attrs:{model:t.formData,rules:t.rules,"status-icon":!0}},[n("ElFormItem",{attrs:{label:"Type",prop:"type"}},[n("ElSelect",{attrs:{placeholder:"Select type..."},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[n("ElOption",{attrs:{label:"Income",value:"INCOME"}}),n("ElOption",{attrs:{label:"Outcome",value:"OUTCOME"}})],1)],1),n("ElFormItem",{attrs:{label:"Input comment",prop:"comment"}},[n("ElInput",{attrs:{type:"textarea"},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),n("ElFormItem",{attrs:{label:"Input value",prop:"value"}},[n("ElInput",{model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",t._n(e))},expression:"formData.value"}})],1),n("ElButton",{attrs:{type:"primary",icon:"el-icon-finished"},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}}},[t._v("Send")])],1)],1)},B=[],D={name:"Form",data:function(){var t=function(t,e,n){setTimeout((function(){/^[0-9]/g.test(e)?0===e?n(new Error("Value must not be equle to 0")):n():n(new Error("Please input only digits"))}),1e3)};return{formData:{type:"INCOME",value:0,comment:""},rules:{type:[{required:!0,message:"Please select type",trigger:"change"}],value:[{validator:t,trigger:"change"}],comment:[{required:!0,message:"Please input comment",trigger:"change"}]}}},methods:{submitForm:function(){var t=this;this.$refs.addFormItem.validate((function(e){if(!e)return!1;t.$emit("onSubmitForm",Object(l["a"])({},t.formData)),t.$refs.addFormItem.resetFields()}))}}},F=D,$=(n("e0d0"),Object(f["a"])(F,k,B,!1,null,"90c5e8d0",null)),w=$.exports,x={name:"App",components:{BudgetList:g,TotalBalance:j,Form:w},data:function(){return{list:{1:{type:"INCOME",value:100,comment:"Some comments",id:1},2:{type:"OUTCOME",value:-50,comment:"Some outcome comments",id:2}},dialogVisible:!1}},methods:{onDeleteItem:function(t){var e=this;this.$confirm("Are you sure to delete this item ".concat(this.list[t].comment,"?")).then((function(){e.$delete(e.list,t)})).catch((function(){}))},onSubmitForm:function(t){"OUTCOME"===t.type&&(t.value=-parseInt(t.value));var e=Object(l["a"])(Object(l["a"])({},t),{},{id:String(Math.random())});this.$set(this.list,e.id,e)}},computed:{totalBalance:function(){return Object.values(this.list).reduce((function(t,e){return t+e.value}),0)}}},S=x,M=(n("034f"),Object(f["a"])(S,o,r,!1,null,null,null)),T=M.exports,P=n("b2d6"),V=n.n(P),L=n("4897"),N=n.n(L),q=(n("377f"),n("5c96")),A=n.n(q);a["default"].use(A.a),N.a.use(V.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(T)}}).$mount("#app")},"69e1":function(t,e,n){},"85ec":function(t,e,n){},df95:function(t,e,n){},e0d0:function(t,e,n){"use strict";n("2d4d")},fa8c:function(t,e,n){"use strict";n("df95")}});
//# sourceMappingURL=app.20eba287.js.map