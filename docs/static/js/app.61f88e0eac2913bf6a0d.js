webpackJsonp([0],{"1ogH":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component"},[a("h2",[e._v("Thanks for completing our survey!  Here are some songs that are awesome!")]),e._v(" "),e._l(e.songs,function(t){return a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/"+t.url,target:"_blank"}},[e._v(e._s(t.group)+': "'+e._s(t.title)+'"')])])])}),e._v(" "),a("router-link",{attrs:{to:"/"}},[e._v("Return to Login page")])],2)},s=[],o={render:r,staticRenderFns:s};t.a=o},"946P":function(e,t){},Fs8J:function(e,t,a){"use strict";t.a={name:"Home",data:function(){return{username:"",email:"",password:"",passwordVerify:"",showForm:!0,showError:!1,showPasswordError:!1}},methods:{validateForm:function(){""!=this.username&&""!=this.email&&this.password===this.passwordVerify?this.showForm=!1:this.password!==this.passwordVerify?this.showPasswordError=!0:this.showError=!0}}}},M93x:function(e,t,a){"use strict";function r(e){a("PMlw")}var s=a("xJD8"),o=a("ZYbk"),n=a("VU/8"),i=r,u=n(s.a,o.a,!1,i,null,null);t.a=u.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),s=a("M93x"),o=a("OUuV"),n=a.n(o),i=a("YaEn");r.a.use(n.a,{appName:"Sample Survey",appVersion:"1.0",trackingId:"UA-114925962-1",vueRouter:i.a}),r.a.config.productionTip=!1,new r.a({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},Ok8N:function(e,t,a){"use strict";function r(e){a("aF5M")}var s=a("jSRt"),o=a("bbNN"),n=a("VU/8"),i=r,u=n(s.a,o.a,!1,i,"data-v-39a22de0",null);t.a=u.exports},PMlw:function(e,t){},QHyY:function(e,t,a){"use strict";t.a={name:"Secret",data:function(){return{songs:[{url:"pBkHHoOIIn8",group:"Portugal. The Man",title:"Feel It Still"},{url:"B9FzVhw8_bY",group:"The Dead South",title:"In Hell I'll Be In Good Company"},{url:"P_SlAzsXa7E",group:"Miike Snow",title:"Ghengis Khan"},{url:"lDeB5sDealI",group:"Paloma Faith",title:"Upside Down"},{url:"dQw4w9WgXcQ",group:"Mystery Artist",title:"The Best Song Ever!"}]}}}},TOY4:function(e,t){},UHBQ:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"form-container"},[a("h1",[e._v("Join the Web Developers Club!")]),e._v(" "),a("p",[e._v("Sign up to access our special, secret page. Just create an account and answer a brief survey.")]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v("Error - You must answer all of the questions to continue!")]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.validateForm(t)}}},[a("fieldset",[a("legend",[e._v("Login Information")]),e._v(" "),a("p",[a("label",{attrs:{for:"username"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",tabindex:"0",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),a("p",[a("label",{attrs:{for:"email"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",tabindex:"0",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("p",[a("label",{attrs:{for:"password"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",tabindex:"0",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("p",[a("label",{attrs:{for:"passwordVerify"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordVerify,expression:"passwordVerify"}],attrs:{type:"password",id:"passwordVerify",tabindex:"0",placeholder:"Verify Password"},domProps:{value:e.passwordVerify},on:{input:function(t){t.target.composing||(e.passwordVerify=t.target.value)}}})]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showPasswordError,expression:"showPasswordError"}],staticClass:"error"},[e._v("Error - Passwords do not match!")]),e._v(" "),e._m(0)])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showForm,expression:"!showForm"}],staticClass:"success-message"},[a("h1",[e._v("Thank you for signing up!")]),e._v(" "),a("p",[e._v("Please take our new member survey. "),a("router-link",{attrs:{to:"/survey"}},[e._v("Click here")])],1)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("input",{attrs:{type:"submit",value:"Submit"}})])}],o={render:r,staticRenderFns:s};t.a=o},YaEn:function(e,t,a){"use strict";var r=a("7+uW"),s=a("OUuV"),o=(a.n(s),a("/ocq")),n=a("lO7g"),i=a("Ok8N"),u=a("gN/9");r.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"Home",component:n.a},{path:"/survey",name:"Survey",component:i.a},{path:"/secret",name:"Secret",component:u.a}]})},ZYbk:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={render:r,staticRenderFns:s};t.a=o},aF5M:function(e,t){},bbNN:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"survey"},[a("h1",[e._v("New Member Survey")]),e._v(" "),a("p",[e._v("Please complete the new member survey.")]),e._v(" "),a("form",{on:{submit:function(t){t.preventDefault(),e.validateForm(t)}}},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v("Error - You must answer all of the questions to continue!")]),e._v(" "),a("p",[a("label",{attrs:{for:"q1"}},[e._v("Q1: How long have you been building websites?"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.q1,expression:"q1"}],attrs:{type:"text",id:"q1",tabindex:"0"},domProps:{value:e.q1},on:{input:function(t){t.target.composing||(e.q1=t.target.value)}}})])]),e._v(" "),a("p",[e._v("Q2: What languages interest you the most?"),a("br"),e._v(" "),e._l(e.languageOptions,function(t){return a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q2,expression:"q2"}],attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(e.q2)?e._i(e.q2,t.value)>-1:e.q2},on:{change:function(a){var r=e.q2,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t.value,i=e._i(r,n);s.checked?i<0&&(e.q2=r.concat([n])):i>-1&&(e.q2=r.slice(0,i).concat(r.slice(i+1)))}else e.q2=o}}}),e._v("\n          "+e._s(t.text)+"\n        ")])})],2),e._v(" "),a("p",[e._v("Q3: What other topics interest you?"),a("br"),e._v(" "),e._l(e.topicOptions,function(t){return a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q3,expression:"q3"}],attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(e.q3)?e._i(e.q3,t.value)>-1:e.q3},on:{change:function(a){var r=e.q3,s=a.target,o=!!s.checked;if(Array.isArray(r)){var n=t.value,i=e._i(r,n);s.checked?i<0&&(e.q3=r.concat([n])):i>-1&&(e.q3=r.slice(0,i).concat(r.slice(i+1)))}else e.q3=o}}}),e._v("\n          "+e._s(t.text)+"\n        ")])})],2),e._v(" "),a("p",[a("label",{attrs:{for:"q4"}},[e._v("Q4: What kinds of websites would you like to build someday?"),a("br"),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.q4,expression:"q4"}],attrs:{cols:"70",rows:"8",id:"q4",tabindex:"0",placeholder:"Type your response here."},domProps:{value:e.q4},on:{input:function(t){t.target.composing||(e.q4=t.target.value)}}})])]),e._v(" "),a("p",[a("label",{attrs:{for:"q5"}},[e._v("Q5: Spaces or Tabs?\n          "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.q5,expression:"q5"}],attrs:{id:"q5"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.q5=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("Select your preference.")]),e._v(" "),a("option",{attrs:{value:"spaces"}},[e._v("Spaces")]),e._v(" "),a("option",{attrs:{value:"tabs"}},[e._v("Tabs")])])])]),e._v(" "),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("input",{attrs:{type:"submit",value:"Submit"}})])}],o={render:r,staticRenderFns:s};t.a=o},"gN/9":function(e,t,a){"use strict";function r(e){a("946P")}var s=a("QHyY"),o=a("1ogH"),n=a("VU/8"),i=r,u=n(s.a,o.a,!1,i,"data-v-96521534",null);t.a=u.exports},jSRt:function(e,t,a){"use strict";t.a={name:"Survey",data:function(){return{showError:!1,q1:"",q2:[],q3:[],q4:"",q5:"",languageOptions:[{text:"JavaScript",value:"js"},{text:"Python",value:"py"},{text:"Ruby",value:"ruby"},{text:"Java",value:"java"},{text:"PHP",value:"php"}],topicOptions:[{text:"Accessibility",value:"axe"},{text:"Experience Design",value:"ux"},{text:"Operations",value:"ops"},{text:"Search Engine Optimization",value:"seo"},{text:"Multimedia",value:"media"}]}},methods:{validateForm:function(){""!=this.q1&&this.q2.length>0&&this.q3.length>0&&""!=this.q4&&""!=this.q5?this.$router.push("Secret"):this.showError=!0}}}},lO7g:function(e,t,a){"use strict";function r(e){a("TOY4")}var s=a("Fs8J"),o=a("UHBQ"),n=a("VU/8"),i=r,u=n(s.a,o.a,!1,i,"data-v-20805b95",null);t.a=u.exports},xJD8:function(e,t,a){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.61f88e0eac2913bf6a0d.js.map