"use strict";(self["webpackChunklegal_aid"]=self["webpackChunklegal_aid"]||[]).push([[248],{248:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var t=function(){var e=this,r=e._self._c;return r("div",[r("a-form-model",{ref:"formLogin",attrs:{rules:e.rules,model:e.formLogin},on:{submit:e.login},nativeOn:{submit:function(e){e.preventDefault()}}},[r("a-form-model-item",{attrs:{prop:"username"}},[r("a-input",{attrs:{placeholder:"请输入用户名",size:"large"},model:{value:e.formLogin.username,callback:function(r){e.$set(e.formLogin,"username",r)},expression:"formLogin.username"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-model-item",{attrs:{prop:"password"}},[r("a-input",{attrs:{type:"password",placeholder:"请输入密码",size:"large"},model:{value:e.formLogin.password,callback:function(r){e.$set(e.formLogin,"password",r)},expression:"formLogin.password"}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),r("a-form-model-item",[r("a-button",{attrs:{type:"primary",block:"","html-type":"submit",size:"large",loading:e.loading}},[e._v(" 登 录 ")])],1)],1),r("div",{staticClass:"row remember-me"},[r("div",{staticClass:"col"},[r("router-link",{attrs:{to:{name:"register"},target:"_blank"}},[e._v("立即注册")])],1),r("div",{staticClass:"col text-end"},[r("router-link",{attrs:{to:{name:"getPass"},target:"_blank"}},[e._v("忘记密码")])],1)])],1)},o=[],a=s(84471),i=s(81639),n=s.n(i),l={name:"LoginAccount",data(){return{formLogin:{username:"",password:""},loading:!1,rules:{username:[{required:!0,message:"请输入用户名！",trigger:"blur"}],password:[{required:!0,message:"请输入密码！",trigger:"blur"}]}}},methods:{login(){this.$refs.formLogin.validate((e=>{if(!e)return this.$message.error("请先规范填写表单！"),!1;this.loading=!0;const{username:r,password:s}=this.formLogin;(0,a.Z)({method:"post",url:"/ouser/before/login",data:{username:r,password:s}}).then((e=>{if(1===e.code){const r=e.data;n().set("token",r),this.$message.success("登录成功！"),this.$router.push({name:"home"})}else this.$message.error(e.msg),this.formLogin={username:"",password:""}})).catch((e=>{this.$message.error("服务器错误！"),console.log(e)}))}))}},activated(){this.loading=!1,this.formLogin={username:"",password:""}}},m=l,u=s(1001),g=(0,u.Z)(m,t,o,!1,null,"606e5e91",null),d=g.exports}}]);
//# sourceMappingURL=248.b832b673.js.map