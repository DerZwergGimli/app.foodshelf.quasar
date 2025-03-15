import{a as J,c as L,b as x,d as B}from"./QTabPanels-DHXOeu9n.js";import{h as v,f as z,d as P}from"./QDialog-CKft7haM.js";import{_ as X}from"./CreateItem.vue_vue_type_script_setup_true_lang-DbOhQRae.js";import{d as V,r as p,D as h,E as g,I as r,f as l,G as d,Q as b,J as Y,M as s,k as M,g as E,c as $,a9 as Z,aa as ee,ab as te,h as f,q as D,L as S,a6 as C,ac as T,w as ae,o as le,a8 as oe,N as ne}from"./index-Ci3aV1Np.js";import{Q as K}from"./use-panel-CyP61XWI.js";import{e as ue}from"./date-oIE_Lz-S.js";import{Q as O}from"./QTable-Bpp_g_Sc.js";const re=V({__name:"CreateGroup",setup(e){const o=p(""),u=p(""),n=()=>{console.log("Group Created:",{name:o.value,description:u.value})};return(t,a)=>(g(),h(d(K),{onSubmit:Y(n,["prevent"]),class:"q-gutter-y-md"},{default:r(()=>[l(d(v),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),label:"Group Name",outlined:"",maxlength:"100",autofocus:""},null,8,["modelValue"]),l(d(v),{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=i=>u.value=i),label:"Group Description",outlined:"",type:"textarea",maxlength:"500",autofocus:""},null,8,["modelValue"]),l(d(b),{class:"full-width",label:"Create Group",type:"submit",color:"primary"})]),_:1}))}}),ie=V({__name:"CreateTag",setup(e){const o=p({name:"",description:"",created_at:new Date,user_id:s().user_id});return(u,n)=>(g(),h(d(z),null,{default:r(()=>[l(d(K),{class:"q-gutter-y-md"},{default:r(()=>[l(d(v),{outlined:"",modelValue:o.value.name,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value.name=t),label:"Tag Name",required:"",autofocus:""},null,8,["modelValue"]),l(d(v),{outlined:"",modelValue:o.value.description,"onUpdate:modelValue":n[1]||(n[1]=t=>o.value.description=t),label:"Tag Description",type:"textarea",autofocus:""},null,8,["modelValue"]),l(d(b),{class:"full-width",onClick:n[2]||(n[2]=t=>d(s)().createTag(o.value)),type:"submit",label:"Create Tag",color:"primary"})]),_:1})]),_:1}))}});function w(e,o=new WeakMap){if(Object(e)!==e)return e;if(o.has(e))return o.get(e);const u=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const n=e.valueOf();if(Object(n)!==n){const t=new e.constructor(n);return o.set(e,t),t}}return o.set(e,u),e instanceof Set?e.forEach(n=>{u.add(w(n,o))}):e instanceof Map&&e.forEach((n,t)=>{u.set(t,w(n,o))}),Object.assign(u,...Object.keys(e).map(n=>({[n]:w(e[n],o)})))}const q=M({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:u}){const{proxy:n}=E(),{$q:t}=n,a=p(null),i=p(""),c=p("");let k=!1;const N=$(()=>Z({initialValue:i.value,validate:e.validate,set:U,cancel:y,updatePosition:G},"value",()=>c.value,m=>{c.value=m}));function U(){e.validate(c.value)!==!1&&(Q()===!0&&(u("save",c.value,i.value),u("update:modelValue",c.value)),j())}function y(){Q()===!0&&u("cancel",c.value,i.value),j()}function G(){ee(()=>{a.value.updatePosition()})}function Q(){return te(c.value,i.value)===!1}function j(){k=!0,a.value.hide()}function I(){k=!1,i.value=w(e.modelValue),c.value=w(e.modelValue),u("beforeShow")}function R(){u("show")}function W(){k===!1&&Q()===!0&&(e.autoSave===!0&&e.validate(c.value)===!0?(u("save",c.value,i.value),u("update:modelValue",c.value)):u("cancel",c.value,i.value)),u("beforeHide")}function A(){u("hide")}function F(){const m=o.default!==void 0?[].concat(o.default(N.value)):[];return e.title&&m.unshift(f("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&m.push(f("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[f(b,{flat:!0,color:e.color,label:e.labelCancel||t.lang.label.cancel,onClick:y}),f(b,{flat:!0,color:e.color,label:e.labelSet||t.lang.label.set,onClick:U})])),m}return Object.assign(n,{set:U,cancel:y,show(m){a.value?.show(m)},hide(m){a.value?.hide(m)},updatePosition:G}),()=>{if(e.disable!==!0)return f(ue,{ref:a,class:"q-popup-edit",cover:e.cover,onBeforeShow:I,onShow:R,onBeforeHide:W,onHide:A,onEscapeKey:y},F)}}}),_=M({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:o}){const u=E(),n=$(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return f("td",{class:n.value},D(o.default));const t=u.vnode.key,a=(e.props.colsMap!==void 0?e.props.colsMap[t]:null)||e.props.col;if(a===void 0)return;const{row:i}=e.props;return f("td",{class:n.value+a.__tdClass(i),style:a.__tdStyle(i)},D(o.default))}}}),H=M({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:o}){const u=$(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>f("tr",{style:e.props?.__trStyle,class:u.value},D(o.default))}}),de=V({__name:"TableTags",setup(e){const o=[{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!0},{name:"description",required:!0,align:"left",label:"Description",field:"description",sortable:!0},{name:"button",required:!0,label:"",field:"button"}];return(u,n)=>(g(),h(O,{flat:"",rows:d(s)().tags,columns:o,"row-key":"name","hide-bottom":"","rows-per-page-options":[0],pagination:{rowsPerPage:0},"binary-state-sort":""},{body:r(t=>[l(H,{props:t},{default:r(()=>[l(_,{key:"name",props:t},{default:r(()=>[S(C(t.row.name)+" ",1),l(q,{modelValue:t.row.name,"onUpdate:modelValue":a=>t.row.name=a,onSave:a=>d(s)().updateTag(t.row,t.row.id)},{default:r(a=>[l(v,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,dense:"",autofocus:"",counter:"",onKeyup:T(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),l(_,{key:"description",props:t},{default:r(()=>[S(C(t.row.description)+" ",1),l(q,{modelValue:t.row.description,"onUpdate:modelValue":a=>t.row.description=a,onSave:a=>d(s)().updateTag(t.row,t.row.id)},{default:r(a=>[l(v,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,dense:"",autofocus:"",counter:"",onKeyup:T(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),l(_,{key:"description",props:t},{default:r(()=>[l(b,{onClick:a=>d(s)().deleteTag(t.row.id),icon:"delete",flat:""},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]))}}),se=V({__name:"TableGroups",setup(e){const o=[{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!0},{name:"description",required:!0,align:"left",label:"Description",field:"description",sortable:!0},{name:"button",required:!0,label:"",field:"button"}];return(u,n)=>(g(),h(O,{flat:"",rows:d(s)().groups,columns:o,"row-key":"name","hide-bottom":"","rows-per-page-options":[0],pagination:{rowsPerPage:0},"binary-state-sort":""},{body:r(t=>[l(H,{props:t},{default:r(()=>[l(_,{key:"name",props:t},{default:r(()=>[S(C(t.row.name)+" ",1),l(q,{modelValue:t.row.name,"onUpdate:modelValue":a=>t.row.name=a,onSave:a=>d(s)().updateGroup(t.row,t.row.id)},{default:r(a=>[l(v,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,dense:"",autofocus:"",counter:"",onKeyup:T(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),l(_,{key:"description",props:t},{default:r(()=>[S(C(t.row.description)+" ",1),l(q,{modelValue:t.row.description,"onUpdate:modelValue":a=>t.row.description=a,onSave:a=>d(s)().updateGroup(t.row,t.row.id)},{default:r(a=>[l(v,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,dense:"",autofocus:"",counter:"",onKeyup:T(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),l(_,{key:"description",props:t},{default:r(()=>[l(b,{onClick:a=>d(s)().deleteGroup(t.row.id),icon:"delete",flat:""},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]))}}),ce={style:{"max-width":"600px",margin:"auto"}},Ve=V({__name:"AddView",setup(e){const o=p("item");return ae(()=>s().isSignedIn,async()=>{await s().fetchAll()}),le(()=>{s().item_selected=oe}),(u,n)=>(g(),ne("div",ce,[l(J,{class:"bg-primary",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),align:"justify"},{default:r(()=>[l(x,{name:"item",label:"Item"}),l(x,{name:"group",label:"Group"}),l(x,{name:"tag",label:"Tag"})]),_:1},8,["modelValue"]),l(L,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=t=>o.value=t),animated:""},{default:r(()=>[l(B,{name:"item"},{default:r(()=>[l(X)]),_:1}),l(B,{name:"group"},{default:r(()=>[l(P,{flat:""},{default:r(()=>[l(re),l(se)]),_:1})]),_:1}),l(B,{name:"tag"},{default:r(()=>[l(P,{flat:""},{default:r(()=>[l(ie),l(de)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});export{Ve as default};
