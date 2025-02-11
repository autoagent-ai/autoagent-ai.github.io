"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8527],{35990:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(74848),s=n(28453);const r={},l="Get Components",a={type:"api",id:"get-components",title:"Get Components",description:"",slug:"/get-components",frontMatter:{},api:{tags:["Components Store"],operationId:"get_components_api_v1_store_components__get",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"component_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Component Id"}},{name:"search",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Search"}},{name:"private",in:"query",required:!1,schema:{anyOf:[{type:"boolean"},{type:"null"}],title:"Private"}},{name:"is_component",in:"query",required:!1,schema:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component"}},{name:"tags",in:"query",required:!1,schema:{anyOf:[{type:"array",items:{type:"string"}},{type:"null"}],title:"Tags"}},{name:"sort",in:"query",required:!1,schema:{anyOf:[{type:"array",items:{type:"string"}},{type:"null"}],title:"Sort"}},{name:"liked",in:"query",required:!1,schema:{type:"boolean",default:!1,title:"Liked"}},{name:"filter_by_user",in:"query",required:!1,schema:{type:"boolean",default:!1,title:"Filter By User"}},{name:"fields",in:"query",required:!1,schema:{anyOf:[{type:"array",items:{type:"string"}},{type:"null"}],title:"Fields"}},{name:"page",in:"query",required:!1,schema:{type:"integer",default:1,title:"Page"}},{name:"limit",in:"query",required:!1,schema:{type:"integer",default:10,title:"Limit"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{count:{anyOf:[{type:"integer"},{type:"null"}],title:"Count",default:0},authorized:{type:"boolean",title:"Authorized"},results:{anyOf:[{items:{properties:{id:{anyOf:[{type:"string",format:"uuid"},{type:"null"}],title:"Id"},name:{anyOf:[{type:"string"},{type:"null"}],title:"Name"},description:{anyOf:[{type:"string"},{type:"null"}],title:"Description"},liked_by_count:{anyOf:[{type:"integer"},{type:"null"}],title:"Liked By Count"},liked_by_user:{anyOf:[{type:"boolean"},{type:"null"}],title:"Liked By User"},is_component:{anyOf:[{type:"boolean"},{type:"null"}],title:"Is Component"},metadata:{anyOf:[{type:"object"},{type:"null"}],title:"Metadata",default:{}},user_created:{anyOf:[{type:"object"},{type:"null"}],title:"User Created",default:{}},tags:{anyOf:[{items:{properties:{id:{type:"string",format:"uuid",title:"Id"},name:{anyOf:[{type:"string"},{type:"null"}],title:"Name"}},type:"object",required:["id","name"],title:"TagResponse"},type:"array"},{type:"null"}],title:"Tags"},downloads_count:{anyOf:[{type:"integer"},{type:"null"}],title:"Downloads Count"},last_tested_version:{anyOf:[{type:"string"},{type:"null"}],title:"Last Tested Version"},private:{anyOf:[{type:"boolean"},{type:"null"}],title:"Private"}},type:"object",title:"ListComponentResponse"},type:"array"},{type:"null"}],title:"Results"}},type:"object",required:["authorized","results"],title:"ListComponentResponseModel"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Get Components",method:"get",path:"/api/v1/store/components/",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Get Components",description:{type:"text/plain"},url:{path:["api","v1","store","components",""],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"component_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"search",value:"<string>"},{description:{content:"",type:"text/plain"},key:"private",value:"<boolean>"},{description:{content:"",type:"text/plain"},key:"is_component",value:"<boolean>"},{description:{content:"",type:"text/plain"},key:"tags",value:"<string>"},{description:{content:"",type:"text/plain"},key:"tags",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sort",value:"<string>"},{description:{content:"",type:"text/plain"},key:"sort",value:"<string>"},{description:{content:"",type:"text/plain"},key:"liked",value:"false"},{description:{content:"",type:"text/plain"},key:"filter_by_user",value:"false"},{description:{content:"",type:"text/plain"},key:"fields",value:"<string>"},{description:{content:"",type:"text/plain"},key:"fields",value:"<string>"},{description:{content:"",type:"text/plain"},key:"page",value:"1"},{description:{content:"",type:"text/plain"},key:"limit",value:"10"}],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/get-components",previous:{title:"Share Component",permalink:"/api/share-component"},next:{title:"Update Shared Component",permalink:"/api/update-shared-component"}},o=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"get-components",children:"Get Components"})}),"\n",(0,i.jsx)(t.p,{children:"Get Components"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"component_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Component Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"search"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Search"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"private"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Private"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"is_component"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Is Component"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"tags"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Tags"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"sort"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Sort"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"liked"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Liked"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"filter_by_user"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Filter By User"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"fields"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Fields"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"page"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Page"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"limit"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Limit"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"count"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Count"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"authorized"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Authorized"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"results"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Results"})]})})]})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function p(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);