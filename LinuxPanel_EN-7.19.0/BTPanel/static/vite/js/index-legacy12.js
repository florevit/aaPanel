System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./index-legacy119.js?v=1732601582185","./public-legacy.js?v=1732601582185","./index-legacy120.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./hooks-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./php-legacy.js?v=1732601582185","./index-legacy121.js?v=1732601582185"],(function(e,a){"use strict";var t,n,i,s,l,o,d,c,p,r,_,u,h,b,y,m,x,g,w,k,f,v,D,j,C,R,U,$,W,z,B,O,S,q,I,L,K,P,H,J,M,Q,X,Y,Z,A,E,F,G,N,T,V,ee,ae,te,ne,ie,se,le,oe,de,ce,pe;return{setters:[e=>{t=e.j,n=e.aa,i=e.ab,s=e.ac,l=e.ad,o=e.f,d=e.I,c=e.a4,p=e.ae,r=e.l,_=e.c,u=e.m,h=e._,b=e.n},e=>{y=e._},e=>{m=e._},e=>{x=e._},e=>{g=e._},e=>{w=e._},e=>{k=e._},e=>{f=e._},e=>{v=e.j,D=e.h,j=e.d,C=e.k,R=e.l,U=e.f,$=e.a,W=e.b},e=>{z=e.u,B=e.a,O=e.b,S=e.c,q=e.d,I=e._,L=e.e,K=e.f,P=e.g},e=>{H=e.M,J=e.W,M=e.a9,Q=e.c,X=e.i,Y=e.d,Z=e.r,A=e.j,E=e.w,F=e.O,G=e.X,N=e.Y,T=e.R,V=e.af,ee=e.ak,ae=e.$,te=e.Q,ne=e.Z,ie=e.ao,se=e.ac,le=e.a6},e=>{oe=e.g},e=>{de=e.aa,ce=e.bO,pe=e.bJ},null,null,null,null,null],execute:function(){const re=({row:e})=>{if(e.password)return H(v,{value:e.password},null);const{t:a}=J();return H("div",{class:"text-desc cursor-pointer",onClick:()=>{z(e)}},[H(M,{keypath:"Database.index_15.index_1",tag:"span",scope:"global"},{error:()=>H("span",{class:"text-error"},[a("Database.index_15.index_2")])})])},_e=({row:e})=>{let a;const{t:n}=J();return H("div",{class:"flex items-center"},[H(t,{type:e.backup_count>0?"primary":"warning",class:"backup-btn",onClick:()=>{B(e)}},{default:()=>[e.backup_count>0?n("Database.index_17",[e.backup_count]):n("Database.index_18")]}),H("span",{class:"mx-4px"},[Q("|")]),H(t,{onClick:()=>{O(e)}},(i=a=n("Public.Btn.Import"),"function"==typeof i||"[object Object]"===Object.prototype.toString.call(i)&&!X(i)?a:{default:()=>[a]}))]);var i},ue={class:"p-16px"},he={class:"flex items-center flex-wrap"};e("default",Y({__name:"index",setup(e){const t=le((()=>_((()=>a.import("./index-legacy115.js?v=1732601582185")),void 0))),v=le((()=>_((()=>a.import("./index-legacy116.js?v=1732601582185")),void 0))),B=le((()=>_((()=>a.import("./index-legacy117.js?v=1732601582185")),void 0))),O=le((()=>_((()=>a.import("./index-legacy118.js?v=1732601582185")),void 0))),{t:M}=J(),X=n(),Y=Z(!1),be=D(),ye=D(M("Database.index_3"),{row:void 0}),me=()=>{be.show=!0},xe=()=>{K()},ge=e=>{X.phpmyadmin.setup?(e?(ye.data.row=e,ye.title=M("Database.index_8",[e.name])):(ye.data.row=void 0,ye.title=M("Database.index_3")),ye.show=!0):u.error(M("Database.index_9"))},we=()=>{P()},ke=D(),fe=D(),ve=async()=>{await i(X.type,{ids:[]}),Oe()},De=V(),je=()=>{De.push("/crontab/task")},{keys:Ce,table:Re,columns:Ue}=j([{type:"selection",width:40},{key:"name",title:M("Database.index_12"),width:"10%",minWidth:120,ellipsis:{tooltip:{width:"trigger"}}},{key:"username",title:M("Database.index_13"),width:"10%",minWidth:120,ellipsis:{tooltip:{width:"trigger"}}},{key:"password",title:M("Database.index_14"),width:"12%",minWidth:150,render:e=>H(re,{row:e},null)},C({type:"database",width:"7%",minWidth:100,callback:()=>{Oe()}}),{key:"backup_count",title:M("Database.index_16"),width:"10%",minWidth:130,render:e=>H(_e,{row:e},null)},{key:"sid",title:M("Database.index_19"),width:"9%",minWidth:100,ellipsis:{tooltip:!0},render:e=>oe(e)},R({minWidth:90,onBlur:async(e,a)=>{await p({id:a.id,ps:e})}}),U({width:"26%",minWidth:280,options:e=>[{label:M("Database.index_20"),show:0===e.db_type,onClick:()=>{ge(e)}},{label:M("Database.index_21"),class:"permission-btn",onClick:()=>{(e=>{fe.data.row=e,fe.title=M("Database.index_11",[e.name]),fe.show=!0})(e)}},{label:M("Database.index_22"),class:"tools-btn",onClick:()=>{(e=>{ke.data.row=e,ke.title=M("Database.index_10",[e.name]),ke.show=!0})(e)}},{label:M("Database.index_23"),class:"change-btn",onClick:()=>{z(e)}},{label:M("Public.Btn.Del"),class:"delete-btn",onClick:()=>{S([e])}}]})]),$e=[{key:"sync",label:M("Database.index_24"),onBatch:e=>{$({title:M("Database.index_25"),content:M("Database.index_26"),onConfirm:async()=>{await i(X.type,{ids:e.map((e=>e.id))})}})}},{key:"backup",type:"confirm",label:M("Database.index_27"),confirm:{title:M("Database.index_28"),desc:M("Database.index_29"),api:e=>s(X.type,{id:e.id},!1),done:()=>{Oe()},columns:[{key:"name",title:M("Database.index_12")}]}},{key:"delete",label:M("Database.index_30"),onBatch:e=>{S(e)}}],{loading:We,setLoading:ze}=W(!0),Be=A({p:1,limit:20,sid:-1,search:""}),Oe=async()=>{try{ze(!0);const{message:e}=await l((()=>{const e={...ee(Be)};return-1===e.sid&&delete e.sid,e})());o(e)?(Re.data=d(e.data)?e.data:[],Re.total=c(e.page)):(Re.data=[],Re.total=0)}finally{Ce.value=[],ze(!1)}};return E((()=>X.isRefresh),(e=>{e&&(X.setRefresh(!1),X.delRemoteId===Be.sid&&(Be.sid=-1),Oe())})),(async()=>{try{await X.getRemote(),X.install?(Y.value=!0,Oe()):(Y.value=!1,r())}finally{ze(!1)}})(),(e,a)=>{const n=h,i=de,s=ae("i18n-t"),l=ce,o=b,d=f,c=k,p=w,r=g,_=x,u=m,D=y,j=pe;return F(),G(T(L),null,{default:N((()=>[H(j,null,{default:N((()=>[te("div",ue,[H(l,{"show-icon":!1,closable:!1},{default:N((()=>[te("div",he,[H(n,{name:"base-info",size:"18",class:"mr-8px"}),H(s,{tag:"span",keypath:"Database.index_7.index_1",scope:"global"},{btn_:N((()=>[H(i,{class:"px-8px h-24px",size:"small",type:"primary",onClick:je},{default:N((()=>[Q(ne(e.$t("Database.index_7.index_2")),1)])),_:1})])),_:1})])])),_:1}),H(u,{class:"mt-16px",feedback:!0},{toolsLeft:N((()=>[H(i,{class:"add-db-btn",type:"primary",onClick:me},{default:N((()=>[Q(ne(e.$t("Database.index_1")),1)])),_:1}),H(i,{class:"set-root-btn",onClick:xe},{default:N((()=>[Q(ne(e.$t("Database.index_2")),1)])),_:1}),H(i,{onClick:a[0]||(a[0]=e=>ge())},{default:N((()=>[Q(ne(e.$t("Database.index_3")),1)])),_:1}),H(i,{onClick:we},{default:N((()=>[Q(ne(e.$t("Database.index_4")),1)])),_:1}),H(o,{class:"mx-0!",vertical:""}),H(i,{onClick:ve},{default:N((()=>[Q(ne(e.$t("Database.index_5")),1)])),_:1}),H(i,{onClick:T(q)},{default:N((()=>[Q(ne(e.$t("Database.index_6")),1)])),_:1},8,["onClick"]),T(Y)?(F(),G(d,{key:0,"soft-name":"mysql"})):ie("",!0)])),toolsRight:N((()=>[H(T(I),{ref:"remoteRef",value:T(Be).sid,"onUpdate:value":a[1]||(a[1]=e=>T(Be).sid=e),"store-key":"mysql-remote",onChange:Oe},null,8,["value"]),H(c,{value:T(Be).search,"onUpdate:value":a[2]||(a[2]=e=>T(Be).search=e),placeholder:e.$t("Database.mongo.index_3"),width:"180",onSearch:Oe},null,8,["value","placeholder"])])),table:N((()=>[H(p,{"checked-row-keys":T(Ce),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>se(Ce)?Ce.value=e:null),loading:T(We),data:T(Re).data,columns:T(Ue)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:N((()=>[H(r,{"checked-row-keys":T(Ce),"onUpdate:checkedRowKeys":a[4]||(a[4]=e=>se(Ce)?Ce.value=e:null),data:T(Re).data,options:$e},null,8,["checked-row-keys","data"])])),pageRight:N((()=>[H(_,{page:T(Be).p,"onUpdate:page":a[5]||(a[5]=e=>T(Be).p=e),"page-size":T(Be).limit,"onUpdate:pageSize":a[6]||(a[6]=e=>T(Be).limit=e),"store-key":"database-mysql-page","item-count":T(Re).total,onRefresh:Oe},null,8,["page","page-size","item-count"])])),_:1}),H(D,{show:T(be).show,"onUpdate:show":a[7]||(a[7]=e=>T(be).show=e),title:e.$t("Database.mongo.index_4"),width:540,"min-height":334,footer:!0,component:T(t)},null,8,["show","title","component"]),H(D,{show:T(ye).show,"onUpdate:show":a[8]||(a[8]=e=>T(ye).show=e),title:T(ye).title,data:T(ye).data,width:740,height:580,component:T(v)},null,8,["show","title","data","component"]),H(D,{show:T(fe).show,"onUpdate:show":a[9]||(a[9]=e=>T(fe).show=e),data:T(fe).data,title:T(fe).title,width:480,"min-height":132,footer:!0,component:T(O)},null,8,["show","data","title","component"]),H(D,{show:T(ke).show,"onUpdate:show":a[10]||(a[10]=e=>T(ke).show=e),data:T(ke).data,title:T(ke).title,width:870,"min-height":359,component:T(B)},null,8,["show","data","title","component"])])])),_:1})])),_:1})}}}))}}}));