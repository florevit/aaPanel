const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index154.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang.js?v=1732601582185","js/naive.js?v=1732601582185","js/vue.js?v=1732601582185","js/__commonjsHelpers__.js?v=1732601582185","js/common.js?v=1732601582185","js/index99.js?v=1732601582185","js/page_layout.js?v=1732601582185","js/public.js?v=1732601582185","css/public.css?v=1732601582185","css/page_layout.css?v=1732601582185","css/index11.css?v=1732601582185"])))=>i.map(i=>d[i]);
import{ap as e,S as t,aI as i,aJ as o,I as a,c as s,aK as n}from"./page_layout.js?v=1732601582185";import{_ as r}from"./index.js?v=1732601582185";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{_ as c}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import{h as p,d as _,f as k,b as m,q as u}from"./public.js?v=1732601582185";import{bJ as w,aa as y}from"./naive.js?v=1732601582185";import{d as h,W as x,j as f,w as g,O as v,X as D,Y as N,M as b,c as j,Z as W,R as C,ac as R,a6 as P}from"./vue.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";const U=h({__name:"index",setup(h){const U=P((()=>s((()=>import("./index154.js?v=1732601582185")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))),{t:I}=x(),K=e(),L=p(I("Docker.Network.index_1")),O=()=>{L.show=!0},E=()=>{u({title:I("Docker.Network.index_2"),content:()=>b("span",{class:"text-error"},[I("Docker.Network.index_13")]),onConfirm:async()=>{await n(),H()}})},J=f({page:1,pageSize:10}),{keys:S,columns:T,table:$}=_([{type:"selection",width:40},{key:"name",title:I("Docker.Network.index_3"),width:"14%",minWidth:120,ellipsis:{tooltip:!0}},{key:"driver",title:I("Docker.Network.index_4"),minWidth:100,ellipsis:{tooltip:!0},render:e=>e.driver||"--"},{key:"subnet",title:I("Docker.Network.index_5"),minWidth:120,ellipsis:{tooltip:!0},render:e=>e.subnet||"--"},{key:"gateway",title:I("Docker.Network.index_6"),minWidth:120,ellipsis:{tooltip:!0},render:e=>e.gateway||"--"},{key:"subnetv6",title:I("Docker.Network.index_16"),minWidth:120,ellipsis:{tooltip:!0},render:e=>e.subnetv6||"--"},{key:"gatewayv6",title:I("Docker.Network.index_17"),minWidth:120,ellipsis:{tooltip:!0},render:e=>e.gatewayv6||"--"},{key:"labels",title:I("Docker.Network.index_7"),minWidth:120,width:"16%",ellipsis:{tooltip:{arrowPointToCenter:!0}},render:e=>{let t="";return e.labels&&(t=Object.entries(e.labels).map((([e,t])=>"".concat(e,": ").concat(t))).join(", ")),t||"--"}},{key:"time",title:I("Docker.Network.index_8"),width:"12%",minWidth:140,render:e=>t(e.time)},k({width:70,options:e=>[{label:I("Public.Btn.Del"),onClick:()=>{z(e)}}]})]),q=[{key:"del",type:"confirm",label:"Please choose del",confirm:{title:I("Docker.Network.index_10"),desc:I("Docker.Network.index_11"),api:e=>i({id:e.id},!1),done:()=>{H()},columns:[{key:"name",title:I("Docker.Network.index_3"),width:"80%",ellipsis:{tooltip:!0}}]}}],z=e=>{u({title:I("Docker.Network.index_12",[e.name]),content:()=>b("span",{class:"text-error"},[I("Docker.Network.index_14",[e.name])]),onConfirm:async()=>{await i({id:e.id}),H()}})},{loading:A,setLoading:B}=m(),H=async()=>{try{B(!0);const{message:e}=await o();$.data=a(e)?e:[],$.total=$.data.length}finally{S.value=[],B(!1)}};return g((()=>K.isRefresh),(e=>{e&&(K.setRefresh(!1),H())})),H(),(e,t)=>{const i=y,o=c,a=d,s=l,n=r,p=w;return v(),D(p,{class:"p-16px"},{default:N((()=>[b(s,null,{toolsLeft:N((()=>[b(i,{type:"primary",onClick:O},{default:N((()=>[j(W(e.$t("Docker.Network.index_1")),1)])),_:1}),b(i,{onClick:E},{default:N((()=>[j(W(e.$t("Docker.Network.index_2")),1)])),_:1})])),table:N((()=>[b(a,{page:C(J),"onUpdate:page":t[1]||(t[1]=e=>R(J)?J.value=e:null),"checked-row-keys":C(S),"onUpdate:checkedRowKeys":t[2]||(t[2]=e=>R(S)?S.value=e:null),"is-page":!0,loading:C(A),columns:C(T),data:C($).data},{pagePrefix:N((()=>[b(o,{"checked-row-keys":C(S),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>R(S)?S.value=e:null),data:C($).data,options:q},null,8,["checked-row-keys","data"])])),_:1},8,["page","checked-row-keys","loading","columns","data"])])),_:1}),b(n,{show:C(L).show,"onUpdate:show":t[3]||(t[3]=e=>C(L).show=e),title:C(L).title,width:600,"min-height":276,footer:!0,component:C(U)},null,8,["show","title","component"])])),_:1})}}});export{U as default};