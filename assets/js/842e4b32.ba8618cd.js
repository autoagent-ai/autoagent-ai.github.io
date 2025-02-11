"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5309],{85211:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(74848),i=n(28453);const r={},o="Retrieve Vertices Order",d={type:"api",id:"retrieve-vertices-order",title:"Retrieve Vertices Order",description:"",slug:"/retrieve-vertices-order",frontMatter:{},api:{tags:["Chat"],description:"Retrieve the vertices order for a given flow.\n\nArgs:\n    flow_id (str): The ID of the flow.\n    background_tasks (BackgroundTasks): The background tasks.\n    data (Optional[FlowDataRequest], optional): The flow data. Defaults to None.\n    stop_component_id (str, optional): The ID of the stop component. Defaults to None.\n    start_component_id (str, optional): The ID of the start component. Defaults to None.\n    session (AsyncSession, optional): The session dependency.\n\nReturns:\n    VerticesOrderResponse: The response containing the ordered vertex IDs and the run ID.\n\nRaises:\n    HTTPException: If there is an error checking the build status.",operationId:"retrieve_vertices_order_api_v1_build__flow_id__vertices_post",parameters:[{name:"flow_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Flow Id"}},{name:"data",in:"query",required:!1,schema:{anyOf:[{properties:{nodes:{items:{type:"object"},type:"array",title:"Nodes"},edges:{items:{type:"object"},type:"array",title:"Edges"},viewport:{anyOf:[{type:"object"},{type:"null"}],title:"Viewport"}},type:"object",required:["nodes","edges"],title:"FlowDataRequest"},{type:"null"}],title:"Data"}},{name:"stop_component_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Stop Component Id"}},{name:"start_component_id",in:"query",required:!1,schema:{anyOf:[{type:"string"},{type:"null"}],title:"Start Component Id"}}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{properties:{ids:{items:{type:"string"},type:"array",title:"Ids"},run_id:{type:"string",format:"uuid",title:"Run Id"},vertices_to_run:{items:{type:"string"},type:"array",title:"Vertices To Run"}},type:"object",required:["ids","run_id","vertices_to_run"],title:"VerticesOrderResponse"}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},method:"post",path:"/api/v1/build/{flow_id}/vertices",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.0"},postman:{name:"Retrieve Vertices Order",description:{content:"Retrieve the vertices order for a given flow.\n\nArgs:\n    flow_id (str): The ID of the flow.\n    background_tasks (BackgroundTasks): The background tasks.\n    data (Optional[FlowDataRequest], optional): The flow data. Defaults to None.\n    stop_component_id (str, optional): The ID of the stop component. Defaults to None.\n    start_component_id (str, optional): The ID of the start component. Defaults to None.\n    session (AsyncSession, optional): The session dependency.\n\nReturns:\n    VerticesOrderResponse: The response containing the ordered vertex IDs and the run ID.\n\nRaises:\n    HTTPException: If there is an error checking the build status.",type:"text/plain"},url:{path:["api","v1","build",":flow_id","vertices"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"nodes",value:'["<object>","<object>"]'},{description:{content:"",type:"text/plain"},key:"edges",value:'["<object>","<object>"]'},{description:{content:"",type:"text/plain"},key:"viewport",value:"<object>"},{description:{content:"",type:"text/plain"},key:"stop_component_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"start_component_id",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"flow_id"}]},method:"POST"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/retrieve-vertices-order",next:{title:"Build Flow",permalink:"/api/build-flow"}},l=[];function a(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"retrieve-vertices-order",children:"Retrieve Vertices Order"})}),"\n",(0,s.jsx)(t.p,{children:"Retrieve the vertices order for a given flow."}),"\n",(0,s.jsx)(t.p,{children:"Args:\nflow_id (str): The ID of the flow.\nbackground_tasks (BackgroundTasks): The background tasks.\ndata (Optional[FlowDataRequest], optional): The flow data. Defaults to None.\nstop_component_id (str, optional): The ID of the stop component. Defaults to None.\nstart_component_id (str, optional): The ID of the start component. Defaults to None.\nsession (AsyncSession, optional): The session dependency."}),"\n",(0,s.jsx)(t.p,{children:"Returns:\nVerticesOrderResponse: The response containing the ordered vertex IDs and the run ID."}),"\n",(0,s.jsx)(t.p,{children:"Raises:\nHTTPException: If there is an error checking the build status."}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"flow_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Query Parameters"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"data"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Data"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"stop_component_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Stop Component Id"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"start_component_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Start Component Id"})]})})]})]}),"\n",(0,s.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"200"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Successful Response"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"ids"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"run_id"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" uuid"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"vertices_to_run"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" string[]"})]})})]})]})})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,s.jsx)("code",{children:"422"})}),(0,s.jsx)("div",{children:(0,s.jsx)(t.p,{children:"Validation Error"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("th",{style:{textAlign:"left"},children:[(0,s.jsx)("span",{children:"Schema "}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("div",{})]})})}),(0,s.jsx)("tbody",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"detail"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,s.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,s.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"loc"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"msg"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"type"}),(0,s.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);