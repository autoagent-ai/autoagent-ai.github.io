"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2267],{14118:(e,i,t)=>{t.r(i),t.d(i,{contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var a=t(74848),l=t(28453);const s={},r="Read Variables",n={type:"api",id:"read-variables",title:"Read Variables",description:"",slug:"/read-variables",frontMatter:{},api:{tags:["Variables"],description:"Read all variables.",operationId:"read_variables_api_v1_variables__get",responses:{200:{description:"Successful Response",content:{"application/json":{schema:{items:{properties:{id:{type:"string",format:"uuid",title:"Id"},name:{anyOf:[{type:"string"},{type:"null"}],title:"Name",description:"Name of the variable"},type:{anyOf:[{type:"string"},{type:"null"}],title:"Type",description:"Type of the variable"},value:{anyOf:[{type:"string"},{type:"null"}],title:"Value",description:"Encrypted value of the variable"},default_fields:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Default Fields",description:"Default fields for the variable"}},type:"object",required:["id"],title:"VariableRead"},type:"array",title:"Response Read Variables Api V1 Variables  Get"}}}}},security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],method:"get",path:"/api/v1/variables/",parameters:[],securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Read Variables",description:{content:"Read all variables.",type:"text/plain"},url:{path:["api","v1","variables",""],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/read-variables",previous:{title:"Logout",permalink:"/api/logout"},next:{title:"Create Variable",permalink:"/api/create-variable"}},d=[];function o(e){const i={h1:"h1",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"read-variables",children:"Read Variables"})}),"\n",(0,a.jsx)(i.p,{children:"Read all variables."}),"\n",(0,a.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("div",{children:(0,a.jsx)(i.p,{children:"Successful Response"})})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("th",{style:{textAlign:"left"},children:[(0,a.jsx)("span",{children:"Schema "}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,a.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,a.jsx)("div",{})]})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,a.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,a.jsxs)("tbody",{children:[(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"id"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"name"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" Name"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,a.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,a.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,a.jsx)(i.p,{children:"Name of the variable"})})]})}),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"type"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" Type"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,a.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,a.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,a.jsx)(i.p,{children:"Type of the variable"})})]})}),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"value"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" Value"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,a.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,a.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,a.jsx)(i.p,{children:"Encrypted value of the variable"})})]})}),(0,a.jsx)("tr",{children:(0,a.jsxs)("td",{children:[(0,a.jsx)("code",{children:"default_fields"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" Default Fields"}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,a.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,a.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,a.jsx)(i.p,{children:"Default fields for the variable"})})]})})]})})]})})})]})})]})})})]})]})}function c(e){void 0===e&&(e={});const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>n});var a=t(96540);const l={},s=a.createContext(l);function r(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);