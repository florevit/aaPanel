System.register(["./index-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./site-legacy4.js?v=1732601582185","./public-legacy.js?v=1732601582185","./site-legacy.js?v=1732601582185","./index-legacy87.js?v=1732601582185","./index-legacy102.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./form.vue_vue_type_script_setup_true_lang-legacy2.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index-legacy121.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./index-legacy215.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./index-legacy97.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1732601582185","./theme-chrome-legacy.js?v=1732601582185","./file-legacy.js?v=1732601582185","./refersh-legacy.js?v=1732601582185","./php-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy17.js?v=1732601582185","./index-legacy171.js?v=1732601582185"],(function(e,t){"use strict";var a,l,s,i,n,u,o,d,r,c,p,m,_,f,h,g,v,y,w,x,b,k,j,P,C,O,$,M,D,R,z,W,q,U,F,B,L,A,I,S,H,E,K,N,T,V,Q,X,Y,Z,G,J,ee,te,ae,le,se,ie;return{setters:[e=>{a=e._},e=>{l=e.a8,s=e.i,i=e.f,n=e.a7,u=e.k,o=e.m,d=e.I,r=e.av,c=e._},e=>{p=e.o},e=>{m=e.b,_=e.d,f=e.f,h=e.a,g=e.l,v=e.h,y=e.w,w=e.F},e=>{x=e.U,b=e.aD},e=>{k=e.f,j=e.o,P=e.h,C=e.i,O=e.j,$=e.k},e=>{M=e._},e=>{D=e.p,R=e.a,z=e.d,W=e.M,q=e.O,U=e.P,F=e.R,B=e.Q,L=e.X,A=e.Y,I=e.m,S=e.W,H=e.r,E=e.ac,K=e.am,N=e.c,T=e.Z,V=e.t,Q=e.ao,X=e.j},e=>{Y=e._},e=>{Z=e.bo,G=e.bs,J=e.bK,ee=e.ad,te=e.aa,ae=e.bO,le=e.aW},e=>{se=e._},e=>{ie=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".n-tag[data-v-c6193199]{--n-height: 16px;--n-padding: 0 5px;--n-font-size: 90%;--n-text-color: #2196f3;font-family:Menlo,Monaco,Consolas,Courier New,monospace}.tools-card[data-v-3d92e7a2]{display:flex;align-items:center;padding:12px 24px;border-radius:4px;background-color:#f7f7f7}.tools-card+.tools-card[data-v-3d92e7a2]{margin-top:16px}.tools-card .tools-img[data-v-3d92e7a2]{display:flex;justify-content:center;width:26px}.tools-card .tools-name[data-v-3d92e7a2]{min-width:150px;padding:0 12px;font-size:13px}.tools-card .n-button[data-v-3d92e7a2]{margin-left:12px;width:32px;padding:0}.tools-card .tools-desc[data-v-3d92e7a2]{margin-left:16px}\n",document.head.appendChild(t);const ne=Symbol("server-list");function ue(){return R(ne)}const oe=e=>l.post("/tamper_core/add_black_exts.json",e,{requestOptions:{loading:s.global.t("WP.api.tamper_2"),isOriginalResult:!0,prefix:""}}),de=e=>l.post("/tamper_core/remove_black_exts.json",e,{requestOptions:{loading:s.global.t("WP.api.tamper_3"),isOriginalResult:!0,prefix:""}}),re=z({__name:"index",setup(e,{expose:t}){const{site:a,setPid:u}=ue(),{loading:o,setLoading:d}=m(),{table:r,columns:c}=_([{key:"name",title:"Name"},{key:"status",title:"Status",align:"right",render:e=>W(Z,{value:e.status,size:"small",checkedValue:1,uncheckedValue:0,onUpdateValue:async t=>{const{message:a}=await(n={key:e.key,value:t,path_id:e.id},l.post("/tamper_core/modify_path_config.json",n,{requestOptions:{loading:s.global.t("WP.api.tamper_1"),isOriginalResult:!0,prefix:""}}));var n;i(a)&&a.status&&(e.status=t)}},null)}]),p=[{title:"Create file",name:"create"},{title:"Modify file",name:"modify"},{title:"Delete file",name:"unlink"},{title:"Create directory",name:"mkdir"},{title:"Delete directory",name:"rmdir"},{title:"Rename file",name:"rename"},{title:"Create soft link",name:"link"},{title:"Modify permissions",name:"chmod"},{title:"Modify owner",name:"chown"}],f=async()=>{try{d(!0);const{message:t}=await k({path:a.path});i(t)&&!G(t)?(u(t.pid),e=t,r.data=p.map((t=>{const a=`is_${t.name}`,l=e[a];return{key:a,id:e.pid,name:`Disabled ${t.title}`,status:n(l)?l:0}}))):r.data=[]}finally{d(!1)}var e};return f(),t({init:f}),(e,t)=>{const a=Y;return q(),U("div",null,[W(a,{loading:F(o),"loading-num":9,"max-height":340,data:F(r).data,columns:F(c)},null,8,["loading","data","columns"]),t[0]||(t[0]=B("div",{class:"mt-16px text-#777"}," Tip: Current config intercepts the above rules by default, please set and config the rules according the current project requirements. ",-1))])}}}),ce=u({},[["render",function(e,t){const a=J;return q(),L(a,{size:"small",bordered:!1},{default:A((()=>[I(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-c6193199"]]),pe={class:"flex mb-12px"},me={class:"w-240px mr-12px"},_e=z({__name:"index",setup(e,{expose:t}){const{t:a}=S(),{site:l,setPid:s}=ue(),n=H("");let u=-1,r="";const c=async()=>{if(""===n.value.trim())return void o.error("Please enter suffix");const{message:e}=await oe({path_id:u,path:r,exts:n.value});i(e)&&(e.status?(o.success(e.msg),n.value="",x()):o.error(e.msg))},{table:p,columns:g}=_([{key:"exts",title:"Suffix"},f({width:100,options:e=>[{label:a("Public.Btn.Del"),onClick:()=>{v(e)}}]})]),v=async e=>{h({title:`Delete protected file suffix [${e.exts}]`,content:"Delete protected file suffix, the file whose file name ends with this suffix will lose protection. want to continue?",onConfirm:async()=>{const{message:t}=await de({path_id:e.id,path:r,exts:e.exts});i(t)&&(t.status?(o.success(t.msg),x()):o.error(t.msg))}})},{loading:y,setLoading:w}=m(),x=async()=>{try{w(!0);const{message:t}=await k({path:l.path});i(t)&&(s(t.pid),u=(e=t).pid,r=e.path,d(e.black_exts)?p.data=e.black_exts.filter((e=>"/"!=e[0]&&-1==e.indexOf("./"))).map((t=>({id:e.pid,exts:t}))):p.data=[])}finally{w(!1)}var e};return x(),t({init:x}),(e,t)=>{const a=ee,l=te,s=Y,i=ce,u=se;return q(),U("div",null,[B("div",pe,[B("div",me,[W(a,{value:F(n),"onUpdate:value":t[0]||(t[0]=e=>E(n)?n.value=e:null),placeholder:"Suffix",onKeyup:K(c,["enter"])},null,8,["value"])]),W(l,{type:"primary",onClick:c},{default:A((()=>[N(T(e.$t("Public.Btn.Add")),1)])),_:1})]),W(s,{loading:F(y),"loading-num":6,"max-height":230,data:F(p).data,columns:F(g)},null,8,["loading","data","columns"]),W(u,{class:"mt-16px"},{default:A((()=>[t[25]||(t[25]=B("li",null," The so-called file suffix refers the string at the end of the file name, not necessarily the extension ",-1)),B("li",null,[t[5]||(t[5]=N(" As: ")),W(i,null,{default:A((()=>t[1]||(t[1]=[N(".php")]))),_:1}),t[6]||(t[6]=N(", ")),W(i,null,{default:A((()=>t[2]||(t[2]=[N(".html")]))),_:1}),t[7]||(t[7]=N(", ")),W(i,null,{default:A((()=>t[3]||(t[3]=[N(".js?v=1732601582185")]))),_:1}),t[8]||(t[8]=N(", ")),W(i,null,{default:A((()=>t[4]||(t[4]=[N("index.php")]))),_:1}),t[9]||(t[9]=N(" etc. "))]),t[26]||(t[26]=B("div",null,"Example:",-1)),B("li",null,[W(i,null,{default:A((()=>t[10]||(t[10]=[N(".php")]))),_:1}),t[14]||(t[14]=N(" Match: ")),W(i,null,{default:A((()=>t[11]||(t[11]=[N("./1.php")]))),_:1}),t[15]||(t[15]=N()),W(i,null,{default:A((()=>t[12]||(t[12]=[N("./test/2.php")]))),_:1}),t[16]||(t[16]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[13]||(t[13]=[N("./1.php/1.txt")]))),_:1})]),B("li",null,[W(i,null,{default:A((()=>t[17]||(t[17]=[N("index.php")]))),_:1}),t[22]||(t[22]=N(" Match: ")),W(i,null,{default:A((()=>t[18]||(t[18]=[N("./index.php")]))),_:1}),t[23]||(t[23]=N()),W(i,null,{default:A((()=>t[19]||(t[19]=[N("./test/index.php")]))),_:1}),W(i,{class:"ml-0.5em"},{default:A((()=>t[20]||(t[20]=[N("./abc_index.php")]))),_:1}),t[24]||(t[24]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[21]||(t[21]=[N("./index.php.tar.gz")]))),_:1})])])),_:1})])}}}),fe={class:"flex mb-12px"},he={class:"w-240px mr-12px"},ge=z({__name:"index",setup(e,{expose:t}){const{t:a}=S(),{site:l,setPid:s}=ue(),n=H("");let u=-1,r="";const c=async()=>{if(""===n.value.trim())return void o.error("Please enter the full path or relative path of the file");const{message:e}=await oe({path_id:u,path:r,exts:n.value});i(e)&&(e.status?(o.success(e.msg),n.value="",x()):o.error(e.msg))},{table:p,columns:g}=_([{key:"exts",title:"Full file path"},f({width:100,options:e=>[{label:a("Public.Btn.Del"),onClick:()=>{v(e)}}]})]),v=async e=>{h({title:`Delete protected files [${e.exts}]`,content:"After deleting a protected file, the file will be unprotected, should I continue the operation?",onConfirm:async()=>{const{message:t}=await de({path_id:e.id,path:r,exts:e.exts});i(t)&&(t.status?(o.success(t.msg),x()):o.error(t.msg))}})},{loading:y,setLoading:w}=m(),x=async()=>{try{w(!0);const{message:t}=await k({path:l.path});i(t)&&(s(t.pid),u=(e=t).pid,r=e.path,d(e.black_exts)?p.data=e.black_exts.filter((e=>"/"==e[0]||"."==e[0]&&"/"==e[1])).map((t=>({id:e.pid,exts:t}))):p.data=[])}finally{w(!1)}var e};return x(),t({init:x}),(e,t)=>{const a=ee,l=te,s=Y,i=ce,u=se;return q(),U("div",null,[B("div",fe,[B("div",he,[W(a,{value:F(n),"onUpdate:value":t[0]||(t[0]=e=>E(n)?n.value=e:null),placeholder:"Full path Or Relative path",onKeyup:K(c,["enter"])},null,8,["value"])]),W(l,{type:"primary",onClick:c},{default:A((()=>[N(T(e.$t("Public.Btn.Add")),1)])),_:1})]),W(s,{loading:F(y),"loading-num":5,"max-height":200,data:F(p).data,columns:F(g)},null,8,["loading","data","columns"]),W(u,{class:"mt-16px"},{default:A((()=>[t[15]||(t[15]=B("li",{class:"font-bold text-#333"},"The following 4 methods are supported",-1)),B("li",null,[t[2]||(t[2]=N("1. Complete file path, such as: ")),W(i,null,{default:A((()=>t[1]||(t[1]=[N("/www/wwwroot/test/123.log")]))),_:1})]),B("li",null,[t[5]||(t[5]=N(" 2. Relative path to the site, such as: Full path ")),W(i,null,{default:A((()=>t[3]||(t[3]=[N("/www/wwwroot/test/app/123.log")]))),_:1}),t[6]||(t[6]=N(" Relative path ")),W(i,null,{default:A((()=>t[4]||(t[4]=[N("./app/123.log")]))),_:1})]),B("li",null,[t[9]||(t[9]=N(" 3. All files in the specified directory, such as: ")),W(i,null,{default:A((()=>t[7]||(t[7]=[N("/www/wwwroot/test/app/*")]))),_:1}),t[10]||(t[10]=N(" Relative path ")),W(i,null,{default:A((()=>t[8]||(t[8]=[N("./app/*")]))),_:1})]),B("li",null,[t[13]||(t[13]=N(" 4. the specified directory under the specified file type, such as: ")),W(i,null,{default:A((()=>t[11]||(t[11]=[N("/www/wwwroot/test/app/*.log")]))),_:1}),t[14]||(t[14]=N(" Relative path ")),W(i,null,{default:A((()=>t[12]||(t[12]=[N("./app/*.log")]))),_:1})]),t[16]||(t[16]=B("li",{class:"text-error"}," Note: files already included in the protected file suffix do not need to be set. ",-1))])),_:1})])}}}),ve={class:"flex mb-12px"},ye={class:"w-240px mr-12px"},we=z({__name:"index",setup(e,{expose:t}){const{t:a}=S(),{site:n,setPid:u}=ue(),r=H("");let c=-1,p="";const v=async()=>{if(""===r.value.trim())return void o.error("Please enter directory name");const{message:e}=await(t={path_id:c,path:p,dirnames:r.value},l.post("/tamper_core/add_white_dirs.json",t,{requestOptions:{loading:s.global.t("WP.api.tamper_4"),isOriginalResult:!0,prefix:""}}));var t;i(e)&&(e.status?(o.success(e.msg),r.value="",P()):o.error(e.msg))},{table:y,columns:w}=_([{key:"dir",title:"Directory",ellipsis:{tooltip:!0}},g({title:"Remark",onBlur:async(e,t)=>{const{message:a}=await(n={path_id:t.id,dir_name:t.dir,ps:e},l.post("/tamper_core/set_white_dir_with_ps.json",n,{requestOptions:{loading:s.global.t("WP.api.tamper_5"),isOriginalResult:!0,prefix:""}}));var n;i(a)&&(a.status?t.ps=e:o.error(a.msg))}}),f({width:80,options:e=>[{label:a("Public.Btn.Del"),onClick:()=>{x(e)}}]})]),x=async e=>{h({title:"Delete directory whitelist",content:e.tip_msg?e.tip_msg:`Delete [${e.dir}] later, All files in the directory will be protected, continue?`,onConfirm:async()=>{const{message:t}=await(a={path_id:e.id,path:p,dirname:e.dir},l.post("/tamper_core/remove_white_dirs.json",a,{requestOptions:{loading:s.global.t("WP.api.tamper_6"),isOriginalResult:!0,prefix:""}}));var a;i(t)&&(t.status?(o.success(t.msg),P()):o.error(t.msg))}})},{loading:b,setLoading:j}=m(),P=async()=>{try{j(!0);const{message:t}=await k({path:n.path});i(t)&&(u(t.pid),c=(e=t).pid,p=e.path,d(e.white_dirs)?y.data=e.white_dirs.map((t=>({id:e.pid,ps:t.ps||"",tip_msg:t.tip_msg||"",...t}))):y.data=[])}finally{j(!1)}var e};return P(),t({init:P}),(e,t)=>{const a=ee,l=te,s=Y,i=ce,n=se;return q(),U("div",null,[B("div",ve,[B("div",ye,[W(a,{value:F(r),"onUpdate:value":t[0]||(t[0]=e=>E(r)?r.value=e:null),placeholder:"Directory name",onKeyup:K(v,["enter"])},null,8,["value"])]),W(l,{type:"primary",onClick:v},{default:A((()=>[N(T(e.$t("Public.Btn.Add")),1)])),_:1})]),W(s,{loading:F(b),"loading-num":5,"max-height":188,data:F(y).data,columns:F(w)},null,8,["loading","data","columns"]),W(n,{class:"mt-16px"},{default:A((()=>[B("li",null,[t[4]||(t[4]=N(" Full path or directory name or parts path are allowed such as: ")),W(i,null,{default:A((()=>t[1]||(t[1]=[N("/www/abc/cache/test/")]))),_:1}),t[5]||(t[5]=N(", ")),W(i,null,{default:A((()=>t[2]||(t[2]=[N("test")]))),_:1}),t[6]||(t[6]=N(", ")),W(i,null,{default:A((()=>t[3]||(t[3]=[N("cache/test/")]))),_:1})]),B("li",null,[t[10]||(t[10]=N(" The first character of the Full path must be ")),W(i,null,{default:A((()=>t[7]||(t[7]=[N("/")]))),_:1}),t[11]||(t[11]=N(", as: ")),W(i,null,{default:A((()=>t[8]||(t[8]=[N("cache/test/")]))),_:1}),t[12]||(t[12]=N(" or ")),W(i,null,{default:A((()=>t[9]||(t[9]=[N("test")]))),_:1})]),B("li",null,[t[15]||(t[15]=N(" art of directory name or path cannot begin with ")),W(i,null,{default:A((()=>t[13]||(t[13]=[N("/")]))),_:1}),t[16]||(t[16]=N(", as: ")),W(i,null,{default:A((()=>t[14]||(t[14]=[N("/www/abc/cache/test/")]))),_:1})]),t[39]||(t[39]=B("div",null,"Example:",-1)),B("li",null,[W(i,null,{default:A((()=>t[17]||(t[17]=[N("/www/abc/")]))),_:1}),t[21]||(t[21]=N(" Match: ")),W(i,null,{default:A((()=>t[18]||(t[18]=[N("/www/abc/*")]))),_:1}),t[22]||(t[22]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[19]||(t[19]=[N("/www/abc")]))),_:1}),W(i,{class:"ml-0.5em"},{default:A((()=>t[20]||(t[20]=[N("/www/abc123")]))),_:1})]),B("li",null,[W(i,null,{default:A((()=>t[23]||(t[23]=[N("test")]))),_:1}),t[27]||(t[27]=N(" Match: ")),W(i,null,{default:A((()=>t[24]||(t[24]=[N("/www/test/1.txt")]))),_:1}),t[28]||(t[28]=N()),W(i,null,{default:A((()=>t[25]||(t[25]=[N("/www/test_abc")]))),_:1}),t[29]||(t[29]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[26]||(t[26]=[N("/www/1.php")]))),_:1})]),B("li",null,[W(i,null,{default:A((()=>t[30]||(t[30]=[N("cache/test/")]))),_:1}),t[35]||(t[35]=N(" Match: ")),W(i,null,{default:A((()=>t[31]||(t[31]=[N("/www/cache/test/1.txt")]))),_:1}),t[36]||(t[36]=N()),W(i,null,{default:A((()=>t[32]||(t[32]=[N("/cache/test/")]))),_:1}),t[37]||(t[37]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[33]||(t[33]=[N("/www/cache/test")]))),_:1}),t[38]||(t[38]=N()),W(i,null,{default:A((()=>t[34]||(t[34]=[N("/cache/")]))),_:1})])])),_:1})])}}}),xe={class:"flex mb-12px"},be={class:"w-240px mr-12px"},ke=z({__name:"index",setup(e,{expose:t}){const{t:a}=S(),{site:n,setPid:u}=ue(),r=H("");let c=-1,p="";const g=async()=>{if(""===r.value.trim())return void o.error("Please enter file name");const{message:e}=await(t={path_id:c,path:p,filename:r.value},l.post("/tamper_core/add_white_files.json",t,{requestOptions:{loading:s.global.t("WP.api.tamper_4"),isOriginalResult:!0,prefix:""}}));var t;i(e)&&(e.status?(o.success(e.msg),r.value="",j()):o.error(e.msg))},{table:v,columns:y}=_([{key:"filename",title:"File name"},f({width:100,options:e=>[{label:a("Public.Btn.Del"),onClick:()=>{w(e)}}]})]),w=async e=>{h({title:`Delete file whitelist [${e.filename}]`,content:"After Delete whitelist, the file will be protected. want to continue?",onConfirm:async()=>{const{message:t}=await(a={path_id:e.id,path:p,filename:e.filename},l.post("/tamper_core/remove_white_files.json",a,{requestOptions:{loading:s.global.t("WP.api.tamper_6"),isOriginalResult:!0,prefix:""}}));var a;i(t)&&(t.status?(o.success(t.msg),j()):o.error(t.msg))}})},{loading:x,setLoading:b}=m(),j=async()=>{try{b(!0);const{message:t}=await k({path:n.path});i(t)&&(u(t.pid),c=(e=t).pid,p=e.path,d(e.white_files)?v.data=e.white_files.map((t=>({id:e.pid,filename:t}))):v.data=[])}finally{b(!1)}var e};return j(),t({init:j}),(e,t)=>{const a=ee,l=te,s=Y,i=ce,n=se;return q(),U("div",null,[B("div",xe,[B("div",be,[W(a,{value:F(r),"onUpdate:value":t[0]||(t[0]=e=>E(r)?r.value=e:null),placeholder:"File name",onKeyup:K(g,["enter"])},null,8,["value"])]),W(l,{type:"primary",onClick:g},{default:A((()=>[N(T(e.$t("Public.Btn.Add")),1)])),_:1})]),W(s,{loading:F(x),"loading-num":6,"max-height":230,data:F(v).data,columns:F(y)},null,8,["loading","data","columns"]),W(n,{class:"mt-16px"},{default:A((()=>[B("li",null,[t[3]||(t[3]=N(" Full path or single filename are allowed such as: ")),W(i,null,{default:A((()=>t[1]||(t[1]=[N("/test/index.php")]))),_:1}),t[4]||(t[4]=N(", ")),W(i,null,{default:A((()=>t[2]||(t[2]=[N("index.php")]))),_:1})]),t[17]||(t[17]=B("li",null,"Note: Only be an absolute path or file name, relative paths are not supported",-1)),t[18]||(t[18]=B("div",null,"Example:",-1)),B("li",null,[W(i,null,{default:A((()=>t[5]||(t[5]=[N("index.php")]))),_:1}),t[10]||(t[10]=N(" Match: ")),W(i,null,{default:A((()=>t[6]||(t[6]=[N("./index.php")]))),_:1}),t[11]||(t[11]=N()),W(i,null,{default:A((()=>t[7]||(t[7]=[N("./test/index.php")]))),_:1}),t[12]||(t[12]=N(" Mismatch: ")),W(i,null,{default:A((()=>t[8]||(t[8]=[N("./abc_index.php")]))),_:1}),t[13]||(t[13]=N()),W(i,null,{default:A((()=>t[9]||(t[9]=[N("./index.php/1.txt")]))),_:1})]),B("li",null,[W(i,null,{default:A((()=>t[14]||(t[14]=[N("/test/index.php")]))),_:1}),t[16]||(t[16]=N(" match only: ")),W(i,null,{default:A((()=>t[15]||(t[15]=[N("/test/index.php")]))),_:1})])])),_:1})])}}}),je={class:"p-20px"},Pe={class:"flex items-center text-12px text-#666"},Ce={key:0,class:"ml-12px"},Oe={class:"h-500px"},$e=z({__name:"index",props:{open:{type:Boolean,default:!1},site:{}},emits:["changeOpen"],setup(e,{emit:t}){const a=e,l=t,s=V(a,"site");let i=-1;const n=H(a.open),u=H(),o=async e=>{e?await j({paths:[{path:s.value.path,ps:s.value.ps}]}):await P({path_id:i}),n.value=e,l("changeOpen",e),u.value.init()},d=H("basic"),r=[{key:"basic",label:"Basic Setting",component:re},{key:"suffix",label:"Protected file suffix",component:_e},{key:"protected file",label:"Protected File",component:ge},{key:"directory whitelist",label:"Directory whitelist",component:we},{key:"file whitelist",label:"File whitelist",component:ke}];var c;return c={site:s.value,setPid:e=>{i=e}},D(ne,c),(e,t)=>{const a=Z,l=ae,s=M;return q(),U("div",je,[W(l,{class:"mb-16px",type:F(n)?"success":"error","show-icon":!1,bordered:!1},{default:A((()=>[B("div",Pe,[t[1]||(t[1]=B("span",{class:"mr-12px"},"Protection switch",-1)),W(a,{value:F(n),"onUpdate:value":o},null,8,["value"]),F(n)?Q("",!0):(q(),U("span",Ce," Protection directory closed, be security risks, Recommended open protection immediately "))])])),_:1},8,["type"]),B("div",Oe,[W(s,{ref_key:"tabsRef",ref:u,value:F(d),"onUpdate:value":t[0]||(t[0]=e=>E(d)?d.value=e:null),options:r},null,8,["value"])])])}}}),Me=z({__name:"index",props:{site:{}},emits:["changeHotlink"],setup(e,{emit:t}){const a=t,l=V(e,"site"),s=e=>{a("changeHotlink",e)};return(e,t)=>(q(),U("div",null,[W(ie,{class:"p-20px",site:F(l),onChangeHotlink:s},null,8,["site"])]))}}),De={class:"p-20px"},Re={class:"tools-card"},ze={class:"tools-img"},We={class:"tools-name"},qe={class:"tools-desc"},Ue={class:"ml-0.5em"},Fe={class:"tools-card"},Be={class:"tools-img"},Le={class:"tools-name"},Ae={class:"tools-desc"},Ie={class:"ml-0.5em"},Se={class:"tools-card"},He={class:"tools-img"},Ee={class:"tools-name"},Ke=z({__name:"index",props:{site:{}},setup(e){const t=V(e,"site"),l=X({status:!1,number:0,pid:-1}),s=H(!1),n=async e=>{try{s.value=!0,await y({source:200}),await w("tamper_core"),e?await j({paths:[{path:t.value.path,ps:t.value.ps}]}):await P({path_id:l.pid}),I()}finally{s.value=!1}},u=v(`File Protection [${t.value.name}]`,{site:t.value,open:!1,onChangeOpen:e=>{l.status=e}}),o=async()=>{await y({source:200}),await w("tamper_core"),u.data.open=l.status,u.show=!0},d=X({status:!1,number:0}),m=H(!1),_=async e=>{try{m.value=!0,await y({source:201}),await w("btwaf"),e?await C({site_name:t.value.name}):await O({site_name:t.value.name}),I()}finally{m.value=!1}},f=async()=>{await y({source:201}),await w("btwaf"),p(t.value.name),h()},h=()=>{let e=0;const t=setInterval((()=>{e+=.5;const a=document.querySelector(".waf_site_body");if(a){let e=!1;new MutationObserver((t=>{t.forEach((t=>{"childList"!==t.type||document.contains(a)||e||(I(),e=!0)}))})).observe(document.body,{childList:!0,subtree:!0}),clearInterval(t)}e>=20&&clearInterval(t)}),500)},g=H(!1),M=H(!1),D=async e=>{try{M.value=!0;const{message:a}=await x({id:t.value.id,name:t.value.name},!1);if(i(a)){const l={id:t.value.id,name:t.value.name,fix:a.fix,domains:a.domains,return_rule:a.return_rule,status:e,http_status:"true"===a.http_status};await b(l,!1),g.value=e}}finally{M.value=!1}},R=v(`Hotlink Protection [${t.value.name}]`,{site:t.value,onChangeHotlink:e=>{g.value=e}}),z=()=>{R.show=!0},L=e=>{s.value=e,m.value=e,M.value=e},I=async()=>{try{L(!0);const{message:e}=await $({id:t.value.id,path:t.value.path,site_name:t.value.name});if(i(e)&&(l.status=1===e.file_status,l.number=e.file_count,d.status=1===e.firewall_status,d.number=e.firewall_count,g.value=1===e.hotlink_status,1===e.file_status)){const{message:e}=await k({path:t.value.path});i(e)&&(l.pid=e.pid)}}finally{L(!1)}};return I(),(e,t)=>{const i=le,p=Z,h=c,v=te,y=J,w=a;return q(),U("div",De,[B("div",Re,[B("div",ze,[W(i,{lazy:!0,"preview-disabled":!0,width:"24",src:`${F(r)}images/soft-ico/ico-tamper_core.png`},null,8,["src"])]),B("div",We,T(e.$t("WP.Label.index_5")),1),W(p,{value:F(l).status,loading:F(s),"onUpdate:value":n},null,8,["value","loading"]),W(v,{quaternary:"",size:"small",onClick:o},{default:A((()=>[W(h,{name:"setting",size:"18"})])),_:1}),B("div",qe,[W(y,{type:"error",size:"small",bordered:!1},{default:A((()=>[N(T(F(l).number),1)])),_:1}),B("span",Ue,T(e.$t("WP.Config.index_6")),1)])]),B("div",Fe,[B("div",Be,[W(i,{lazy:!0,"preview-disabled":!0,width:"26",src:`${F(r)}images/soft-ico/ico-btwaf.png`},null,8,["src"])]),B("div",Le,T(e.$t("WP.Label.index_6")),1),W(p,{value:F(d).status,loading:F(m),"onUpdate:value":_},null,8,["value","loading"]),W(v,{quaternary:"",size:"small",onClick:f},{default:A((()=>[W(h,{name:"setting",size:"18"})])),_:1}),B("div",Ae,[W(y,{type:"error",size:"small",bordered:!1},{default:A((()=>[N(T(F(d).number),1)])),_:1}),B("span",Ie,T(e.$t("WP.Config.index_7")),1)])]),B("div",Se,[B("div",He,[W(h,{name:"soft-hotlink",size:"24"})]),B("div",Ee,T(e.$t("WP.Label.index_7")),1),W(p,{value:F(g),loading:F(M),"onUpdate:value":D},null,8,["value","loading"]),W(v,{quaternary:"",size:"small",onClick:z},{default:A((()=>[W(h,{name:"setting",size:"18"})])),_:1})]),W(w,{show:F(u).show,"onUpdate:show":t[0]||(t[0]=e=>F(u).show=e),title:F(u).title,data:F(u).data,width:800,component:$e},null,8,["show","title","data"]),W(w,{show:F(R).show,"onUpdate:show":t[1]||(t[1]=e=>F(R).show=e),title:F(R).title,data:F(R).data,component:Me},null,8,["show","title","data"])])}}});e("default",u(Ke,[["__scopeId","data-v-3d92e7a2"]]))}}}));