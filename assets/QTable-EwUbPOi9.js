import{l as I,g as K,h as n,x as J,v as gt,Q as Ce,c as s,r as E,w as U,q as Le,ak as bt,o as mt,K as St,J as yt,m as ht,A as ke,al as Ie,am as Ne,an as H,H as De,ao as we,ap as Ae,aq as _t,p as Qe,ar as qt,ag as X,X as se}from"./index-thoqXN-I.js";import{l as p,n as Y,s as wt,g as Ct,q as kt,t as Pt,h as xt}from"./QDialog-BAOJlX1i.js";import{u as Rt,f as Tt,g as ze,h as Bt,i as Ft,j as Vt,k as Ot}from"./date-tD-YMnFd.js";const $t=I({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const v=K(),{proxy:{$q:o}}=v,c=u=>{l("click",u)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:c},J(a.default));let u,f;const d=v.vnode.key;if(d){if(u=e.props.colsMap[d],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const r=u.align==="right"?"unshift":"push";f=gt(a.default,[]),f[r](n(Ce,{class:u.__iconClass,name:o.iconSet.table.arrowUp}))}else f=J(a.default);const y={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:r=>{u.sortable===!0&&e.props.sort(u),c(r)}};return n("th",y,f)}}}),Lt=["ul","ol"],Dt=I({name:"QList",props:{...p,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const l=K(),v=Y(e,l.proxy.$q),o=s(()=>Lt.includes(e.tag)?null:"list"),c=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(v.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>n(e.tag,{class:c.value,role:o.value},J(a.default))}}),At=["horizontal","vertical","cell","none"],Mt=I({name:"QMarkupTable",props:{...p,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>At.includes(e)}},setup(e,{slots:a}){const l=K(),v=Y(e,l.proxy.$q),o=s(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},J(a.default))])}});function He(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const jt={list:Dt,table:Mt},Et=["list","table","__qtable"],It=I({name:"QVirtualScroll",props:{...Rt,type:{type:String,default:"list",validator:e=>Et.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:wt},setup(e,{slots:a,attrs:l}){let v;const o=E(null),c=s(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:f,padVirtualScroll:d,onVirtualScrollEvt:y}=Tt({virtualScrollLength:c,getVirtualScrollTarget:w,getVirtualScrollEl:C}),r=s(()=>{if(c.value===0)return[];const V=(O,R)=>({index:u.value.from+R,item:O});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(V):e.itemsFn(u.value.from,u.value.to-u.value.from).map(V)}),h=s(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=s(()=>e.scrollTarget!==void 0?{}:{tabindex:0});U(c,()=>{f()}),U(()=>e.scrollTarget,()=>{S(),_()});function C(){return o.value.$el||o.value}function w(){return v}function _(){v=Ct(C(),e.scrollTarget),v.addEventListener("scroll",y,Le.passive)}function S(){v!==void 0&&(v.removeEventListener("scroll",y,Le.passive),v=void 0)}function F(){let V=d(e.type==="list"?"div":"tbody",r.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),ke(a.after,V)}return bt(()=>{f()}),mt(()=>{_()}),St(()=>{_()}),yt(()=>{S()}),ht(()=>{S()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?He({ref:o,class:"q-table__middle "+h.value},F()):n(jt[e.type],{...l,ref:o,class:[l.class,h.value],...q.value},F)}}}),Nt={xs:2,sm:4,md:6,lg:10,xl:14};function Me(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const Qt=I({name:"QLinearProgress",props:{...p,...Ie,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=K(),v=Y(e,l.$q),o=Ne(e,Nt),c=s(()=>e.indeterminate===!0||e.query===!0),u=s(()=>e.reverse!==e.query),f=s(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=s(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=s(()=>Me(e.buffer!==void 0?e.buffer:1,u.value,l.$q)),r=s(()=>`with${e.instantFeedback===!0?"out":""}-transition`),h=s(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=s(()=>Me(c.value===!0?1:e.value,u.value,l.$q)),C=s(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${c.value===!0?"in":""}determinate`),w=s(()=>({width:`${e.value*100}%`})),_=s(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const S=[n("div",{class:h.value,style:y.value}),n("div",{class:C.value,style:q.value})];return e.stripe===!0&&c.value===!1&&S.push(n("div",{class:_.value,style:w.value})),n("div",{class:d.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},ke(a.default,S))}}});function zt(e,a){const l=E(null),v=s(()=>e.disable===!0?null:n("span",{ref:l,class:"no-outline",tabindex:-1}));function o(c){const u=a.value;c?.qAvoidFocus!==!0&&(c?.type.indexOf("key")===0?document.activeElement!==u&&u?.contains(document.activeElement)===!0&&u.focus():l.value!==null&&(c===void 0||u?.contains(c.target)===!0)&&l.value.focus())}return{refocusTargetEl:v,refocusTarget:o}}const Ht={xs:30,sm:35,md:40,lg:50,xl:60},Ut={...p,...Ie,...kt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Kt=["update:modelValue"];function Wt(e,a){const{props:l,slots:v,emit:o,proxy:c}=K(),{$q:u}=c,f=Y(l,u),d=E(null),{refocusTargetEl:y,refocusTarget:r}=zt(l,d),h=Ne(l,Ht),q=s(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=s(()=>{const k=H(l.val);return q.value===!0?l.modelValue.findIndex(D=>H(D)===k):-1}),w=s(()=>q.value===!0?C.value!==-1:H(l.modelValue)===H(l.trueValue)),_=s(()=>q.value===!0?C.value===-1:H(l.modelValue)===H(l.falseValue)),S=s(()=>w.value===!1&&_.value===!1),F=s(()=>l.disable===!0?-1:l.tabindex||0),V=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),O=s(()=>{const k=w.value===!0?"truthy":_.value===!0?"falsy":"indet",D=l.color!==void 0&&(l.keepColor===!0||_.value!==!0)?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${D}`}),R=s(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":w.value,"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),k}),B=Pt(R),N=s(()=>{const k={tabindex:F.value,role:"checkbox","aria-label":l.label,"aria-checked":S.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function W(k){k!==void 0&&(De(k),r(k)),l.disable!==!0&&o("update:modelValue",G(),k)}function G(){if(q.value===!0){if(w.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(_.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function Z(k){(k.keyCode===13||k.keyCode===32)&&De(k)}function L(k){(k.keyCode===13||k.keyCode===32)&&W(k)}const M=a(w,S);return Object.assign(c,{toggle:W}),()=>{const k=M();l.disable!==!0&&B(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const D=[n("div",{class:O.value,style:h.value,"aria-hidden":"true"},k)];y.value!==null&&D.push(y.value);const ee=l.label!==void 0?ke(v.default,[l.label]):J(v.default);return ee!==void 0&&D.push(n("div",{class:`q-${e}__label q-anchor--skip`},ee)),n("div",{ref:d,class:V.value,...N.value,onClick:W,onKeydown:Z,onKeyup:L},D)}}const Gt=()=>n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),qe=I({name:"QCheckbox",props:Ut,emits:Kt,setup(e){const a=Gt();function l(v,o){const c=s(()=>(v.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>c.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(Ce,{class:"q-checkbox__icon",name:c.value})])]:[a]}return Wt("checkbox",l)}});function Xt(e,a){return new Date(e)-new Date(a)}const Jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function pt(e,a,l,v){const o=s(()=>{const{sortBy:f}=a.value;return f&&l.value.find(d=>d.name===f)||null}),c=s(()=>e.sortMethod!==void 0?e.sortMethod:(f,d,y)=>{const r=l.value.find(C=>C.name===d);if(r===void 0||r.field===void 0)return f;const h=y===!0?-1:1,q=typeof r.field=="function"?C=>r.field(C):C=>C[r.field];return f.sort((C,w)=>{let _=q(C),S=q(w);return r.rawSort!==void 0?r.rawSort(_,S,C,w)*h:_==null?-1*h:S==null?1*h:r.sort!==void 0?r.sort(_,S,C,w)*h:we(_)===!0&&we(S)===!0?(_-S)*h:Ae(_)===!0&&Ae(S)===!0?Xt(_,S)*h:typeof _=="boolean"&&typeof S=="boolean"?(_-S)*h:([_,S]=[_,S].map(F=>(F+"").toLocaleString().toLowerCase()),_<S?-1*h:_===S?0:h)})});function u(f){let d=e.columnSortOrder;if(_t(f)===!0)f.sortOrder&&(d=f.sortOrder),f=f.name;else{const h=l.value.find(q=>q.name===f);h?.sortOrder&&(d=h.sortOrder)}let{sortBy:y,descending:r}=a.value;y!==f?(y=f,r=d==="da"):e.binaryStateSort===!0?r=!r:r===!0?d==="ad"?y=null:r=!1:d==="ad"?r=!0:y=null,v({sortBy:y,descending:r,page:1})}return{columnToSort:o,computedSortMethod:c,sort:u}}const Yt={filter:[String,Object],filterMethod:Function};function Zt(e,a){const l=s(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,c,u)=>{const f=o?o.toLowerCase():"";return v.filter(d=>c.some(y=>{const r=u(y,d)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(f)!==-1}))});return U(()=>e.filter,()=>{Qe(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function el(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function je(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const tl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function ll(e,a){const{props:l,emit:v}=e,o=E(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),c=s(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return je(r)}),u=s(()=>c.value.rowsNumber!==void 0);function f(r){d({pagination:r,filter:l.filter})}function d(r={}){Qe(()=>{v("request",{pagination:r.pagination||c.value,filter:r.filter||l.filter,getCellValue:a})})}function y(r,h){const q=je({...c.value,...r});if(el(c.value,q)===!0){u.value===!0&&h===!0&&f(q);return}if(u.value===!0){f(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?v("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:c,isServerSide:u,requestServerInteraction:d,setPagination:y}}function al(e,a,l,v,o,c){const{props:u,emit:f,proxy:{$q:d}}=e,y=s(()=>v.value===!0?l.value.rowsNumber||0:c.value),r=s(()=>{const{page:R,rowsPerPage:B}=l.value;return(R-1)*B}),h=s(()=>{const{page:R,rowsPerPage:B}=l.value;return R*B}),q=s(()=>l.value.page===1),C=s(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/l.value.rowsPerPage))),w=s(()=>h.value===0?!0:l.value.page>=C.value),_=s(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(B=>({label:B===0?d.lang.table.allRows:""+B,value:B})));U(C,(R,B)=>{if(R===B)return;const N=l.value.page;R&&!N?o({page:1}):R<N&&o({page:R})});function S(){o({page:1})}function F(){const{page:R}=l.value;R>1&&o({page:R-1})}function V(){const{page:R,rowsPerPage:B}=l.value;h.value>0&&R*B<y.value&&o({page:R+1})}function O(){o({page:C.value})}return u["onUpdate:pagination"]!==void 0&&f("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:h,isFirstPage:q,isLastPage:w,pagesNumber:C,computedRowsPerPageOptions:_,computedRowsNumber:y,firstPage:S,prevPage:F,nextPage:V,lastPage:O}}const nl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},rl=["update:selected","selection"];function ol(e,a,l,v){const o=s(()=>{const w={};return e.selected.map(v.value).forEach(_=>{w[_]=!0}),w}),c=s(()=>e.selection!=="none"),u=s(()=>e.selection==="single"),f=s(()=>e.selection==="multiple"),d=s(()=>l.value.length!==0&&l.value.every(w=>o.value[v.value(w)]===!0)),y=s(()=>d.value!==!0&&l.value.some(w=>o.value[v.value(w)]===!0)),r=s(()=>e.selected.length);function h(w){return o.value[w]===!0}function q(){a("update:selected",[])}function C(w,_,S,F){a("selection",{rows:_,added:S,keys:w,evt:F});const V=u.value===!0?S===!0?_:[]:S===!0?e.selected.concat(_):e.selected.filter(O=>w.includes(v.value(O))===!1);a("update:selected",V)}return{hasSelectionMode:c,singleSelection:u,multipleSelection:f,allRowsSelected:d,someRowsSelected:y,rowsSelectedNumber:r,isRowSelected:h,clearSelection:q,updateSelection:C}}function Ee(e){return Array.isArray(e)?e.slice():[]}const il={expanded:Array},sl=["update:expanded"];function ul(e,a){const l=E(Ee(e.expanded));U(()=>e.expanded,u=>{l.value=Ee(u)});function v(u){return l.value.includes(u)}function o(u){e.expanded!==void 0?a("update:expanded",u):l.value=u}function c(u,f){const d=l.value.slice(),y=d.indexOf(u);f===!0?y===-1&&(d.push(u),o(d)):y!==-1&&(d.splice(y,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:c}}const cl={visibleColumns:Array};function dl(e,a,l){const v=s(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(d=>({name:d,label:d.toUpperCase(),field:d,align:we(f[d])?"right":"left",sortable:!0})):[]}),o=s(()=>{const{sortBy:f,descending:d}=a.value;return(e.visibleColumns!==void 0?v.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):v.value).map(r=>{const h=r.align||"right",q=`text-${h}`;return{...r,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:q+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===f?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>q+" "+r.classes:C=>q+" "+r.classes(C):()=>q}})}),c=s(()=>{const f={};return o.value.forEach(d=>{f[d.name]=d}),f}),u=s(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:c,computedColspan:u}}const ue="q-table__bottom row items-center",Ue={};ze.forEach(e=>{Ue[e]={}});const bl=I({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...Ue,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],tableRowStyleFn:Function,tableRowClassFn:Function,cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],cardStyleFn:Function,cardClassFn:Function,hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...p,...Ft,...cl,...Yt,...tl,...il,...nl,...Jt},emits:["request","virtualScroll",...Bt,...sl,...rl],setup(e,{slots:a,emit:l}){const v=K(),{proxy:{$q:o}}=v,c=Y(e,o),{inFullscreen:u,toggleFullscreen:f}=Vt(),d=s(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=E(null),r=E(null),h=s(()=>e.grid!==!0&&e.virtualScroll===!0),q=s(()=>" q-table__card"+(c.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=s(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(c.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),w=s(()=>C.value+(e.loading===!0?" q-table--loading":""));U(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{h.value===!0&&r.value?.reset()});const{innerPagination:_,computedPagination:S,isServerSide:F,requestServerInteraction:V,setPagination:O}=ll(v,Q),{computedFilterMethod:R}=Zt(e,O),{isRowExpanded:B,setExpanded:N,updateExpanded:W}=ul(e,l),G=s(()=>{let t=e.rows;if(F.value===!0||t.length===0)return t;const{sortBy:i,descending:g}=S.value;return e.filter&&(t=R.value(t,e.filter,A.value,Q)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,i,g)),t}),Z=s(()=>G.value.length),L=s(()=>{let t=G.value;if(F.value===!0)return t;const{rowsPerPage:i}=S.value;return i!==0&&(le.value===0&&e.rows!==t?t.length>ae.value&&(t=t.slice(0,ae.value)):t=t.slice(le.value,ae.value)),t}),{hasSelectionMode:M,singleSelection:k,multipleSelection:D,allRowsSelected:ee,someRowsSelected:Pe,rowsSelectedNumber:ce,isRowSelected:de,clearSelection:Ke,updateSelection:te}=ol(e,l,L,d),{colList:We,computedCols:A,computedColsMap:xe,computedColspan:Re}=dl(e,S,M),{columnToSort:Ge,computedSortMethod:Xe,sort:ve}=pt(e,S,We,O),{firstRowIndex:le,lastRowIndex:ae,isFirstPage:fe,isLastPage:ge,pagesNumber:ne,computedRowsPerPageOptions:Je,computedRowsNumber:re,firstPage:be,prevPage:me,nextPage:Se,lastPage:ye}=al(v,_,S,F,O,Z),pe=s(()=>L.value.length===0),Ye=s(()=>{const t={};return ze.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ze(){h.value===!0&&r.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?Oe:null;if(h.value===!0){const g=a["top-row"],b=a["bottom-row"],m={default:T=>Be(T.item,a.body,T.index)};if(g!==void 0){const T=n("tbody",g({cols:A.value}));m.before=t===null?()=>T:()=>[t()].concat(T)}else t!==null&&(m.before=t);return b!==void 0&&(m.after=()=>n("tbody",b({cols:A.value}))),n(It,{ref:r,class:e.tableClass,style:e.tableStyle,...Ye.value,scrollTarget:e.virtualScrollTarget,items:L.value,type:"__qtable",tableColspan:Re.value,onVirtualScroll:lt},m)}const i=[at()];return t!==null&&i.unshift(t()),He({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function tt(t,i){if(r.value!==null){r.value.scrollTo(t,i);return}t=parseInt(t,10);const g=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const b=y.value.querySelector(".q-table__middle.scroll"),m=g.offsetTop-e.virtualScrollStickySizeStart,T=m<b.scrollTop?"decrease":"increase";b.scrollTop=m,l("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:T})}}function lt(t){l("virtualScroll",t)}function Te(){return[n(Qt,{class:"q-table__linear-progress",color:e.color,dark:c.value,indeterminate:!0,trackColor:"transparent"})]}function Be(t,i,g){const b=d.value(t),m=de(b);if(i!==void 0){const x={key:b,row:t,pageIndex:g,__trClass:m?"selected":""};if(e.tableRowStyleFn!==void 0&&(x.__trStyle=e.tableRowStyleFn(t)),e.tableRowClassFn!==void 0){const j=e.tableRowClassFn(t);j&&(x.__trClass=`${j} ${x.__trClass}`)}return i(Fe(x))}const T=a["body-cell"],P=A.value.map(x=>{const j=a[`body-cell-${x.name}`],ie=j!==void 0?j:T;return ie!==void 0?ie(nt({key:b,row:t,pageIndex:g,col:x})):n("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},Q(x,t))});if(M.value===!0){const x=a["body-selection"],j=x!==void 0?x(rt({key:b,row:t,pageIndex:g})):[n(qe,{modelValue:m,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(ie,ft)=>{te([b],[t],ie,ft)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},j))}const $={key:b,class:{selected:m}};if(e.onRowClick!==void 0&&($.class["cursor-pointer"]=!0,$.onClick=x=>{l("rowClick",x,t,g)}),e.onRowDblclick!==void 0&&($.class["cursor-pointer"]=!0,$.onDblclick=x=>{l("rowDblclick",x,t,g)}),e.onRowContextmenu!==void 0&&($.class["cursor-pointer"]=!0,$.onContextmenu=x=>{l("rowContextmenu",x,t,g)}),e.tableRowStyleFn!==void 0&&($.style=e.tableRowStyleFn(t)),e.tableRowClassFn!==void 0){const x=e.tableRowClassFn(t);x&&($.class[x]=!0)}return n("tr",$,P)}function at(){const t=a.body,i=a["top-row"],g=a["bottom-row"];let b=L.value.map((m,T)=>Be(m,t,T));return i!==void 0&&(b=i({cols:A.value}).concat(b)),g!==void 0&&(b=b.concat(g({cols:A.value}))),n("tbody",b)}function Fe(t){return he(t),t.cols=t.cols.map(i=>X({...i},"value",()=>Q(i,t.row))),t}function nt(t){return he(t),X(t,"value",()=>Q(t.col,t.row)),t}function rt(t){return he(t),t}function he(t){Object.assign(t,{cols:A.value,colsMap:xe.value,sort:ve,rowIndex:le.value+t.pageIndex,color:e.color,dark:c.value,dense:e.dense}),M.value===!0&&X(t,"selected",()=>de(t.key),(i,g)=>{te([t.key],[t.row],i,g)}),X(t,"expand",()=>B(t.key),i=>{W(t.key,i)})}function Q(t,i){const g=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(g,i):g}const z=s(()=>({pagination:S.value,pagesNumber:ne.value,isFirstPage:fe.value,isLastPage:ge.value,firstPage:be,prevPage:me,nextPage:Se,lastPage:ye,inFullscreen:u.value,toggleFullscreen:f}));function ot(){const t=a.top,i=a["top-left"],g=a["top-right"],b=a["top-selection"],m=M.value===!0&&b!==void 0&&ce.value>0,T="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:T},[t(z.value)]);let P;if(m===!0?P=b(z.value).slice():(P=[],i!==void 0?P.push(n("div",{class:"q-table__control"},[i(z.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[g(z.value)]))),P.length!==0)return n("div",{class:T},P)}const Ve=s(()=>Pe.value===!0?null:ee.value);function Oe(){const t=it();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Re.value},Te())])),n("thead",t)}function it(){const t=a.header,i=a["header-cell"];if(t!==void 0)return t(_e({header:!0})).slice();const g=A.value.map(b=>{const m=a[`header-cell-${b.name}`],T=m!==void 0?m:i,P=_e({col:b});return T!==void 0?T(P):n($t,{key:b.name,props:P},()=>b.label)});if(k.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(D.value===!0){const b=a["header-selection"],m=b!==void 0?b(_e({})):[n(qe,{color:e.color,modelValue:Ve.value,dark:c.value,dense:e.dense,"onUpdate:modelValue":$e})];g.unshift(n("th",{class:"q-table--col-auto-width"},m))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function _e(t){return Object.assign(t,{cols:A.value,sort:ve,colsMap:xe.value,color:e.color,dark:c.value,dense:e.dense}),D.value===!0&&X(t,"selected",()=>Ve.value,$e),t}function $e(t){Pe.value===!0&&(t=!1),te(L.value.map(d.value),L.value,t)}const oe=s(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(pe.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=a["no-data"],m=b!==void 0?[b({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(Ce,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:ue+" q-table__bottom--nodata"},m)}const t=a.bottom;if(t!==void 0)return n("div",{class:ue},[t(z.value)]);const i=e.hideSelectedBanner!==!0&&M.value===!0&&ce.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ce.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ue+" justify-end"},ct(i));if(i.length!==0)return n("div",{class:ue},i)}function ut(t){O({page:1,rowsPerPage:t.value})}function ct(t){let i;const{rowsPerPage:g}=S.value,b=e.paginationLabel||o.lang.table.pagination,m=a.pagination,T=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),T===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Ot,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:Je.value,displayValue:g===0?o.lang.table.allRows:g,dark:c.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),m!==void 0)i=m(z.value);else if(i=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?b(le.value+1,Math.min(ae.value,re.value),re.value):b(1,Z.value,re.value)])],g!==0&&ne.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),ne.value>2&&i.push(n(se,{key:"pgFirst",...P,icon:oe.value[0],disable:fe.value,ariaLabel:o.lang.pagination.first,onClick:be})),i.push(n(se,{key:"pgPrev",...P,icon:oe.value[1],disable:fe.value,ariaLabel:o.lang.pagination.prev,onClick:me}),n(se,{key:"pgNext",...P,icon:oe.value[2],disable:ge.value,ariaLabel:o.lang.pagination.next,onClick:Se})),ne.value>2&&i.push(n(se,{key:"pgLast",...P,icon:oe.value[3],disable:ge.value,ariaLabel:o.lang.pagination.last,onClick:ye}))}return t.push(n("div",{class:"q-table__control"},i)),t}function dt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Oe()])]:e.loading===!0&&a.loading===void 0?Te():void 0;return n("div",{class:"q-table__middle"},t)}function vt(){const t=a.item!==void 0?a.item:i=>{const g=i.cols.map(m=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[m.label]),n("div",{class:"q-table__grid-item-value"},[m.value])]));if(M.value===!0){const m=a["body-selection"],T=m!==void 0?m(i):[n(qe,{modelValue:i.selected,color:e.color,dark:c.value,dense:e.dense,"onUpdate:modelValue":(P,$)=>{te([i.key],[i.row],P,$)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},T),n(xt,{dark:c.value}))}const b={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};if(e.cardStyleFn!==void 0&&(b.style=[b.style,e.cardStyleFn(i.row)]),e.cardClassFn!==void 0){const m=e.cardClassFn(i.row);m&&(b.class[0]+=` ${m}`)}return(e.onRowClick!==void 0||e.onRowDblclick!==void 0||e.onRowContextmenu!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=m=>{l("RowClick",m,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=m=>{l("RowDblclick",m,i.row,i.pageIndex)}),e.onRowContextmenu!==void 0&&(b.onContextmenu=m=>{l("rowContextmenu",m,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},L.value.map((i,g)=>t(Fe({key:d.value(i),row:i,pageIndex:g}))))}return Object.assign(v.proxy,{requestServerInteraction:V,setPagination:O,firstPage:be,prevPage:me,nextPage:Se,lastPage:ye,isRowSelected:de,clearSelection:Ke,isRowExpanded:B,setExpanded:N,sort:ve,resetVirtualScroll:Ze,scrollTo:tt,getCellValue:Q}),qt(v.proxy,{filteredSortedRows:()=>G.value,computedRows:()=>L.value,computedRowsNumber:()=>re.value}),()=>{const t=[ot()],i={ref:y,class:w.value};return e.grid===!0?t.push(dt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(et(),st()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",i,t)}}});export{bl as Q};
