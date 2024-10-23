"use strict";(self.webpackChunkPartner_API_Guide=self.webpackChunkPartner_API_Guide||[]).push([[5478],{9554:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var t=s(4848),d=s(8453);const n={},i="5. Query Delivery Details",l={id:"api/delivery-detail-query-md",title:"5. Query Delivery Details",description:"Request Information",source:"@site/docs/api/05. delivery-detail-query-md.md",sourceDirName:"api",slug:"/api/delivery-detail-query-md",permalink:"/Partner-API-Guide/docs/api/delivery-detail-query-md",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/05. delivery-detail-query-md.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4. Upload Delivery Arrival Time",permalink:"/Partner-API-Guide/docs/api/upload-arrival-time-md"},next:{title:"6. OTQ Arrival (Recovery) Inspection",permalink:"/Partner-API-Guide/docs/api/otq-arrival-check-md"}},a={},c=[{value:"Request Information",id:"request-information",level:2},{value:"Request Parameter",id:"request-parameter",level:2},{value:"Response",id:"response",level:2},{value:"Success Response (200 OK)",id:"success-response-200-ok",level:3},{value:"Response Data Structure",id:"response-data-structure",level:3},{value:"Error Responses",id:"error-responses",level:3}];function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"5-query-delivery-details",children:"5. Query Delivery Details"})}),"\n",(0,t.jsx)(r.h2,{id:"request-information",children:"Request Information"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Method: ",(0,t.jsx)(r.strong,{children:"GET"})]}),"\n",(0,t.jsxs)(r.li,{children:["URI: ",(0,t.jsx)(r.code,{children:"/detail/{labelCode}"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"request-parameter",children:"Request Parameter"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{ "labelCode": "String" }\n'})}),"\n",(0,t.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(r.h3,{id:"success-response-200-ok",children:"Success Response (200 OK)"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "serial": "40000001",\n  "labelCode": "205000000000001",\n  "buyerName": "ABC Hospital",\n  "buyerAddress": "Seoul, ..",\n  "productName": "Tylenol",\n  "productQuantity": 5,\n  "transportStatus": "ARRIVE_PASS",\n  "departureTime": "2022-06-16 10:00:00",\n  "departureAddress": "367-2, Jeonho-ri, Gochon-eup, Gimpo-si, Gyeonggi-do",\n  "arrivalTime": "2022-06-25 08:02:04",\n  "arrivalAddress": "Seoul, Gangnam-gu, ..",\n  "completionTime": "2022-06-25 08:06:52",\n  "mkt": 5,\n  "temperatures": [2.3, 2.5, 3, 7...]\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"response-data-structure",children:"Response Data Structure"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Nullable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"serial"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"OTQ S/N"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"labelCode"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Delivery label"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"buyerName"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Delivery destination name"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"buyerAddress"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Delivery destination address"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"productName"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Product name"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"productQuantity"}),(0,t.jsx)(r.td,{children:"integer"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Product quantity"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"transportStatus"}),(0,t.jsx)(r.td,{children:"string(ENUM)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Delivery status"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"departureTime"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsxs)(r.td,{children:["Departure time (YYYY-MM-DD HH:mm",":ss"," KST)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"departureAddress"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsx)(r.td,{children:"Departure address"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrivalTime"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsxs)(r.td,{children:["Arrival time (YYYY-MM-DD HH:mm",":ss"," KST)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"arrivalAddress"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsx)(r.td,{children:"Arrival address (=buyerAddress)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"completionTime"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsxs)(r.td,{children:["Scan completion time (YYYY-MM-DD HH:mm",":ss"," KST)"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mkt"}),(0,t.jsx)(r.td,{children:"float"}),(0,t.jsx)(r.td,{children:"v"}),(0,t.jsx)(r.td,{children:"MKT of OTQ temperature data at scan completion"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"temperatures"}),(0,t.jsxs)(r.td,{children:["Array ",(0,t.jsx)(r.code,{children:"<float>"})]}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Array of OTQ temperature data at scan completion"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"transportStatus ENUM values:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"FETCHED: When data is linked"}),"\n",(0,t.jsx)(r.li,{children:"DEPARTED: When departure time is set"}),"\n",(0,t.jsx)(r.li,{children:"ARRIVE_PASS: Normal arrival"}),"\n",(0,t.jsx)(r.li,{children:"ARRIVE_FAIL: Abnormal arrival (currently all are normal arrivals)"}),"\n",(0,t.jsx)(r.li,{children:"Recalled: When returned"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"error-responses",children:"Error Responses"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"PASSWORD_INCORRECT"}),": Unauthorized - Password error"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"TRANSPORT_NOT_EXIST"}),": Not Found - No delivery found"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var t=s(6540);const d={},n=t.createContext(d);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);