"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1661],{9698:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=s(74848),r=s(28453);const n={},l="Reset Password",a={type:"api",id:"reset-password",title:"Reset Password",description:"",slug:"/reset-password",frontMatter:{},api:{tags:["Users"],description:"Reset a user's password.",operationId:"reset_password_api_v1_users__user_id__reset_password_patch",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"user_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"User Id"}}],requestBody:{required:!0,content:{"application/json":{schema:{properties:{username:{anyOf:[{type:"string"},{type:"null"}],title:"Username"},profile_image:{anyOf:[{type:"string"},{type:"null"}],title:"Profile Image"},password:{anyOf:[{type:"string"},{type:"null"}],title:"Password"},is_active:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Active"},is_superuser:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Superuser"},last_login_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Last Login At"}},type:"object",title:"UserUpdate"}}}},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{id:{type:"string",format:"uuid",title:"Id"},username:{type:"string",title:"Username"},profile_image:{anyOf:[{type:"string"},{type:"null"}],title:"Profile Image"},store_api_key:{anyOf:[{type:"string"},{type:"null"}],title:"Store Api Key"},is_active:{type:"boolean",title:"Is Active"},is_superuser:{type:"boolean",title:"Is Superuser"},create_at:{type:"string",format:"date-time",title:"Create At"},updated_at:{type:"string",format:"date-time",title:"Updated At"},last_login_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Last Login At"}},type:"object",required:["username","profile_image","store_api_key","is_active","is_superuser","create_at","updated_at","last_login_at"],title:"UserRead"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},method:"patch",path:"/api/v1/users/{user_id}/reset-password",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Reset Password",description:{content:"Reset a user's password.",type:"text/plain"},url:{path:["api","v1","users",":user_id","reset-password"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"user_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'{\n    "username": "<string>",\n    "profile_image": "<string>",\n    "password": "<string>",\n    "is_active": "<boolean>",\n    "is_superuser": "<boolean>",\n    "last_login_at": "<dateTime>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/reset-password",previous:{title:"Delete User",permalink:"/api/delete-user"},next:{title:"Get Api Keys Route",permalink:"/api/get-api-keys-route"}},d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"reset-password",children:"Reset Password"})}),"\n",(0,i.jsx)(t.p,{children:"Reset a user's password."}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"user_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"username"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Username"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"profile_image"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Profile Image"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"password"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Password"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_active"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_superuser"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Superuser"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"last_login_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Last Login At"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"username"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Username"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"profile_image"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Profile Image"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"store_api_key"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Store Api Key"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_active"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_superuser"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Superuser"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"create_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"updated_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"last_login_at"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Last Login At"})]})})]})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var i=s(96540);const r={},n=i.createContext(r);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);