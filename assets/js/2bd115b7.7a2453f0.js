"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1993],{13402:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(74848),n=i(28453);const r={},a="Get Api Keys Route",l={type:"api",id:"get-api-keys-route",title:"Get Api Keys Route",description:"",slug:"/get-api-keys-route",frontMatter:{},api:{tags:["APIKey"],operationId:"get_api_keys_route_api_v1_api_key__get",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{total_count:{type:"integer",title:"Total Count"},user_id:{type:"string",format:"uuid",title:"User Id"},api_keys:{items:{properties:{name:{anyOf:[{type:"string"},{type:"null"}],title:"Name"},last_used_at:{anyOf:[{type:"string",format:"date-time"},{type:"null"}],title:"Last Used At"},total_uses:{type:"integer",title:"Total Uses",default:0},is_active:{type:"boolean",title:"Is Active",default:!0},id:{type:"string",format:"uuid",title:"Id"},api_key:{type:"string",title:"Api Key"},user_id:{type:"string",format:"uuid",title:"User Id"},created_at:{type:"string",format:"date-time",title:"Created At"}},type:"object",required:["id","api_key","user_id","created_at"],title:"ApiKeyRead"},type:"array",title:"Api Keys"}},type:"object",required:["total_count","user_id","api_keys"],title:"ApiKeysResponse"}}}}},security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],description:"Get Api Keys Route",method:"get",path:"/api/v1/api_key/",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Get Api Keys Route",description:{type:"text/plain"},url:{path:["api","v1","api_key",""],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-api-keys-route",previous:{title:"Reset Password",permalink:"/api/reset-password"},next:{title:"Create Api Key Route",permalink:"/api/create-api-key-route"}},d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"get-api-keys-route",children:"Get Api Keys Route"})}),"\n",(0,s.jsx)(t.p,{children:"Get Api Keys Route"}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"total_count"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Total Count"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"api_keys"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"last_used_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Last Used At"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"total_uses"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Total Uses"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"is_active"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Is Active"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"api_key"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Api Key"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"user_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"created_at"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" date-time"})]})})]})})]})})]})]})})]})})})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);