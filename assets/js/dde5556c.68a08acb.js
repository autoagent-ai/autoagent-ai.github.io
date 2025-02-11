"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3190],{18109:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453);const l={},r="Build Flow",o={type:"api",id:"build-flow",title:"Build Flow",description:"",slug:"/build-flow",frontMatter:{},api:{tags:["Chat"],operationId:"build_flow_api_v1_build__flow_id__flow_post",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"flow_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Flow Id"}},{name:"stop_component_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Stop Component Id"}},{name:"start_component_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Start Component Id"}},{name:"log_builds",in:"query",required:!1,schema:{anyOf:[{type:"boolean"},{type:"null"}],default:!0,title:"Log Builds"}}],requestBody:{content:{"application/json":{schema:{properties:{inputs:{anyOf:[{properties:{components:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Components",default:[]},input_value:{anyOf:[{type:"string"},{type:"null"}],title:"Input Value"},session:{anyOf:[{type:"string"},{type:"null"}],title:"Session"},type:{anyOf:[{type:"string",enum:["chat","text","any"]},{type:"null"}],title:"Type",description:"Defines on which components the input value should be applied. 'any' applies to all input components.",default:"any"}},additionalProperties:!1,type:"object",title:"InputValueRequest",examples:[{components:["components_id","Component Name"],input_value:"input_value",session:"session_id"},{components:["Component Name"],input_value:"input_value"},{input_value:"input_value"},{components:["Component Name"],input_value:"input_value",session:"session_id"},{input_value:"input_value",session:"session_id"},{input_value:"input_value",type:"chat"},{input_value:'{"key": "value"}',type:"json"}]},{type:"null"}]},data:{anyOf:[{properties:{nodes:{items:{type:"object"},type:"array",title:"Nodes"},edges:{items:{type:"object"},type:"array",title:"Edges"},viewport:{anyOf:[{type:"object"},{type:"null"}],title:"Viewport"}},type:"object",required:["nodes","edges"],title:"FlowDataRequest"},{type:"null"}]},files:{anyOf:[{items:{type:"string"},type:"array"},{type:"null"}],title:"Files"}},type:"object",title:"Body_build_flow_api_v1_build__flow_id__flow_post"}}}},responses:{200:{description:"Successful Response",content:{"application/json":{schema:{}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Build Flow",method:"post",path:"/api/v1/build/{flow_id}/flow",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Build Flow",description:{type:"text/plain"},url:{path:["api","v1","build",":flow_id","flow"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"stop_component_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"start_component_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"log_builds",value:"<boolean>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"flow_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "inputs": {\n        "components": [\n            "<string>",\n            "<string>"\n        ],\n        "input_value": "<string>",\n        "session": "<string>",\n        "type": "<string>"\n    },\n    "data": {\n        "nodes": [\n            "<object>",\n            "<object>"\n        ],\n        "edges": [\n            "<object>",\n            "<object>"\n        ],\n        "viewport": "<object>"\n    },\n    "files": [\n        "<string>",\n        "<string>"\n    ]\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/build-flow",previous:{title:"Retrieve Vertices Order",permalink:"/api/retrieve-vertices-order"},next:{title:"Build Vertex",permalink:"/api/build-vertex"}},d=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"build-flow",children:"Build Flow"})}),"\n",(0,i.jsx)(t.p,{children:"Build Flow"}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"flow_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"stop_component_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Stop Component Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"start_component_id"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Start Component Id"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"log_builds"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Log Builds"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Request Body "}),(0,i.jsx)("div",{})]})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"inputs"}),(0,i.jsx)("span",{style:{opacity:"0.6"}})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"data"}),(0,i.jsx)("span",{style:{opacity:"0.6"}})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"files"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Files"})]})})]})]}),"\n",(0,i.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"200"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Successful Response"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{children:(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]})})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,i.jsx)("code",{children:"422"})}),(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"Validation Error"})})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("th",{style:{textAlign:"left"},children:[(0,i.jsx)("span",{children:"Schema "}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("div",{})]})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"detail"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,i.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,i.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"loc"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"msg"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,i.jsx)("tr",{children:(0,i.jsxs)("td",{children:[(0,i.jsx)("code",{children:"type"}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function p(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);