"use strict";(self.webpackChunkPartner_API_Guide=self.webpackChunkPartner_API_Guide||[]).push([[1507],{9731:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=i(4848),s=i(8453);const l={},t="4. Upload Delivery Arrival Time",d={id:"api/upload-arrival-time-md",title:"4. Upload Delivery Arrival Time",description:"Request Information",source:"@site/docs/api/04. upload-arrival-time-md.md",sourceDirName:"api",slug:"/api/upload-arrival-time-md",permalink:"/partner-api-guide/docs/api/upload-arrival-time-md",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. OTQ-Delivery Label Mapping (Client \u2192 Willog)",permalink:"/partner-api-guide/docs/api/otq-label-mapping-md"},next:{title:"5. Query Delivery Details",permalink:"/partner-api-guide/docs/api/delivery-detail-query-md"}},a={},o=[{value:"Request Information",id:"request-information",level:2},{value:"Header",id:"header",level:2},{value:"Request Body",id:"request-body",level:2},{value:"Data Structure",id:"data-structure",level:3},{value:"Response",id:"response",level:2},{value:"Success Response (201 Created)",id:"success-response-201-created",level:3},{value:"Error Responses",id:"error-responses",level:3}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"4-upload-delivery-arrival-time",children:"4. Upload Delivery Arrival Time"})}),"\n",(0,n.jsx)(r.h2,{id:"request-information",children:"Request Information"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Method: ",(0,n.jsx)(r.strong,{children:"POST"})]}),"\n",(0,n.jsxs)(r.li,{children:["URI: ",(0,n.jsx)(r.code,{children:"/fetch-arrival"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"header",children:"Header"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "Authorization": "Bearer api-key..."\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"request-body",children:"Request Body"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "inputs": [Data]\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"data-structure",children:"Data Structure"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Variable"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Nullable"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"labelCode"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Delivery label"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"arrivalTime"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Delivery arrival time (Item receipt time) (YYYY-MM-DD HH:mm",":ss",")"]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(r.h3,{id:"success-response-201-created",children:"Success Response (201 Created)"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "statusCode": 201,\n  "successes": ["DeliveryLabel1", "DeliveryLabel2"], // Arrival time successfully registered\n  "fails": ["DeliveryLabel3", "DeliveryLabel4"] // Failed to register arrival time\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"Success conditions:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Delivery data linked status"}),"\n",(0,n.jsx)(r.li,{children:"Delivery label in departed status (departure time set)"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Failure conditions:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Mapping status (before delivery data linkage)"}),"\n",(0,n.jsx)(r.li,{children:"Delivery label in arrived status (OTQ scan completed)"}),"\n",(0,n.jsx)(r.li,{children:"Registered arrival time is earlier than departure time"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Unauthorized"}),": Header authentication error"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"TRANSPORT_NOT_EXIST"}),": Not Found - Label code error (Label code for non-existent delivery)"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Internal Server Error"}),": API server error"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>d});var n=i(6540);const s={},l=n.createContext(s);function t(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);