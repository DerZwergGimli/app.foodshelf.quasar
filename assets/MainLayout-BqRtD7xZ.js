import{s as yt,g as wt,a as _t,b as Tt,c as Te,u as pt,d as pe,e as Me,r as qt,Q as Ct,f as Lt,h as oe,i as Ee,j as te}from"./QDialog-BAOJlX1i.js";import{r as q,k as Ce,o as re,l as E,g as K,m as G,n as Ge,p as Oe,h as T,q as qe,a as he,t as F,u as ge,c as v,w as B,v as St,x as se,y as Le,z as xt,A as Se,B as ve,b as Rt,C as Xe,D as $t,R as Pt,Q as me,E as kt,G as Vt,H as De,I as zt,J as Bt,K as Qt,L as At,M as It,d as X,N as U,O as M,P as N,S as Z,U as V,f as h,V as Ht,W as Ne,X as ae,Y as Je,Z as le,_ as xe,$ as Re,F as $e,a0 as Ft,a1 as Mt,a2 as Ye,a3 as Et,a4 as Ot,a5 as Dt,a6 as Nt,a7 as Ut}from"./index-thoqXN-I.js";import{Q as Wt}from"./use-panel-CEr6ZuA-.js";import{Q as jt,a as Ue}from"./QTabPanels-Bz6Kuz3S.js";function Kt(){const e=q(!Ce.value);return e.value===!1&&re(()=>{e.value=!0}),{isHydrated:e}}const Ze=typeof ResizeObserver<"u",We=Ze===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ie=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let n=null,a,t={width:-1,height:-1};function m(o){o===!0||e.debounce===0||e.debounce==="0"?w():n===null&&(n=setTimeout(w,e.debounce))}function w(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:o,offsetHeight:_}=a;(o!==t.width||_!==t.height)&&(t={width:o,height:_},u("resize",t))}}const{proxy:c}=K();if(c.trigger=m,Ze===!0){let o;const _=$=>{a=c.$el.parentNode,a?(o=new ResizeObserver(m),o.observe(a),w()):$!==!0&&Oe(()=>{_(!0)})};return re(()=>{_()}),G(()=>{n!==null&&clearTimeout(n),o!==void 0&&(o.disconnect!==void 0?o.disconnect():a&&o.unobserve(a))}),Ge}else{let o=function(){n!==null&&(clearTimeout(n),n=null),x!==void 0&&(x.removeEventListener!==void 0&&x.removeEventListener("resize",m,qe.passive),x=void 0)},_=function(){o(),a?.contentDocument&&(x=a.contentDocument.defaultView,x.addEventListener("resize",m,qe.passive),w())};const{isHydrated:$}=Kt();let x;return re(()=>{Oe(()=>{a=c.$el,a&&_()})}),G(o),()=>{if($.value===!0)return T("object",{class:"q--avoid-card-border",style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:_})}}}}),Gt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:n}){const{proxy:{$q:a}}=K(),t=he(ge,F);if(t===F)return console.error("QHeader needs to be child of QLayout"),F;const m=q(parseInt(e.heightHint,10)),w=q(!0),c=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||a.platform.is.ios&&t.isContainer.value===!0),o=v(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return w.value===!0?m.value:0;const d=m.value-t.scroll.value.position;return d>0?d:0}),_=v(()=>e.modelValue!==!0||c.value===!0&&w.value!==!0),$=v(()=>e.modelValue===!0&&_.value===!0&&e.reveal===!0),x=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(_.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=v(()=>{const d=t.rows.value.top,s={};return d[0]==="l"&&t.left.space===!0&&(s[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(s[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),s});function b(d,s){t.update("header",d,s)}function S(d,s){d.value!==s&&(d.value=s)}function R({height:d}){S(m,d),b("size",d)}function Q(d){$.value===!0&&S(w,!0),n("focusin",d)}B(()=>e.modelValue,d=>{b("space",d),S(w,!0),t.animate()}),B(o,d=>{b("offset",d)}),B(()=>e.reveal,d=>{d===!1&&S(w,e.modelValue)}),B(w,d=>{t.animate(),n("reveal",d)}),B(t.scroll,d=>{e.reveal===!0&&S(w,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const I={};return t.instances.header=I,e.modelValue===!0&&b("size",m.value),b("space",e.modelValue),b("offset",o.value),G(()=>{t.instances.header===I&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const d=St(u.default,[]);return e.elevated===!0&&d.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(T(ie,{debounce:0,onResize:R})),T("header",{class:x.value,style:z.value,onFocusin:Q},d)}}}),Xt=E({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:n}}=K(),a=he(ge,F);if(a===F)return console.error("QPageContainer needs to be child of QLayout"),F;Le(xt,!0);const t=v(()=>{const m={};return a.header.space===!0&&(m.paddingTop=`${a.header.size}px`),a.right.space===!0&&(m[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(m.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(m[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),m});return()=>T("div",{class:"q-page-container",style:t.value},se(u.default))}}),Jt=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:n}){const{proxy:{$q:a}}=K(),t=he(ge,F);if(t===F)return console.error("QFooter needs to be child of QLayout"),F;const m=q(parseInt(e.heightHint,10)),w=q(!0),c=q(Ce.value===!0||t.isContainer.value===!0?0:window.innerHeight),o=v(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||a.platform.is.ios&&t.isContainer.value===!0),_=v(()=>t.isContainer.value===!0?t.containerHeight.value:c.value),$=v(()=>{if(e.modelValue!==!0)return 0;if(o.value===!0)return w.value===!0?m.value:0;const r=t.scroll.value.position+_.value+m.value-t.height.value;return r>0?r:0}),x=v(()=>e.modelValue!==!0||o.value===!0&&w.value!==!0),z=v(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),b=v(()=>"q-footer q-layout__section--marginal "+(o.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(o.value!==!0?" hidden":""):"")),S=v(()=>{const r=t.rows.value.bottom,y={};return r[0]==="l"&&t.left.space===!0&&(y[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),r[2]==="r"&&t.right.space===!0&&(y[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function R(r,y){t.update("footer",r,y)}function Q(r,y){r.value!==y&&(r.value=y)}function I({height:r}){Q(m,r),R("size",r)}function d(){if(e.reveal!==!0)return;const{direction:r,position:y,inflectionPoint:L}=t.scroll.value;Q(w,r==="up"||y-L<100||t.height.value-_.value-y-m.value<300)}function s(r){z.value===!0&&Q(w,!0),n("focusin",r)}B(()=>e.modelValue,r=>{R("space",r),Q(w,!0),t.animate()}),B($,r=>{R("offset",r)}),B(()=>e.reveal,r=>{r===!1&&Q(w,e.modelValue)}),B(w,r=>{t.animate(),n("reveal",r)}),B([m,t.scroll,t.height],d),B(()=>a.screen.height,r=>{t.isContainer.value!==!0&&Q(c,r)});const f={};return t.instances.footer=f,e.modelValue===!0&&R("size",m.value),R("space",e.modelValue),R("offset",$.value),G(()=>{t.instances.footer===f&&(t.instances.footer=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=Se(u.default,[T(ie,{debounce:0,onResize:I})]);return e.elevated===!0&&r.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:b.value,style:S.value,onFocusin:s},r)}}}),{passive:je}=qe,Yt=["both","horizontal","vertical"],Zt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:yt},emits:["scroll"],setup(e,{emit:u}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,m;B(()=>e.scrollTarget,()=>{o(),c()});function w(){a?.();const x=Math.max(0,_t(t)),z=Tt(t),b={top:x-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const S=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";n.position={top:x,left:z},n.directionChanged=n.direction!==S,n.delta=b,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),u("scroll",{...n})}function c(){t=wt(m,e.scrollTarget),t.addEventListener("scroll",_,je),_(!0)}function o(){t!==void 0&&(t.removeEventListener("scroll",_,je),t=void 0)}function _(x){if(x===!0||e.debounce===0||e.debounce==="0")w();else if(a===null){const[z,b]=e.debounce?[setTimeout(w,e.debounce),clearTimeout]:[requestAnimationFrame(w),cancelAnimationFrame];a=()=>{b(z),a=null}}}const{proxy:$}=K();return B(()=>$.$q.lang.rtl,w),re(()=>{m=$.$el.parentNode,c()}),G(()=>{a?.(),o()}),Object.assign($,{trigger:_,getPosition:()=>n}),Ge}}),ea=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:n}){const{proxy:{$q:a}}=K(),t=q(null),m=q(a.screen.height),w=q(e.container===!0?0:a.screen.width),c=q({position:0,direction:"down",inflectionPoint:0}),o=q(0),_=q(Ce.value===!0?0:Te()),$=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=v(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),z=v(()=>_.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${_.value}px`}:null),b=v(()=>_.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${_.value}px`,width:`calc(100% + ${_.value}px)`}:null);function S(f){if(e.container===!0||document.qScrollPrevented!==!0){const r={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};c.value=r,e.onScroll!==void 0&&n("scroll",r)}}function R(f){const{height:r,width:y}=f;let L=!1;m.value!==r&&(L=!0,m.value=r,e.onScrollHeight!==void 0&&n("scrollHeight",r),I()),w.value!==y&&(L=!0,w.value=y),L===!0&&e.onResize!==void 0&&n("resize",f)}function Q({height:f}){o.value!==f&&(o.value=f,I())}function I(){if(e.container===!0){const f=m.value>o.value?Te():0;_.value!==f&&(_.value=f)}}let d=null;const s={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:m,containerHeight:o,scrollbarWidth:_,totalWidth:v(()=>w.value+_.value),rows:v(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:ve({size:0,offset:0,space:!1}),right:ve({size:300,offset:0,space:!1}),footer:ve({size:0,offset:0,space:!1}),left:ve({size:300,offset:0,space:!1}),scroll:c,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(f,r,y){s[f][r]=y}};if(Le(ge,s),Te()>0){let f=function(){L=null,H.classList.remove("hide-scrollbar")},r=function(){if(L===null){if(H.scrollHeight>a.screen.height)return;H.classList.add("hide-scrollbar")}else clearTimeout(L);L=setTimeout(f,300)},y=function(O){L!==null&&O==="remove"&&(clearTimeout(L),f()),window[`${O}EventListener`]("resize",r)},L=null;const H=document.body;B(()=>e.container!==!0?"add":"remove",y),e.container!==!0&&y("add"),Rt(()=>{y("remove")})}return()=>{const f=Se(u.default,[T(Zt,{onScroll:S}),T(ie,{onResize:R})]),r=T("div",{class:$.value,style:x.value,ref:e.container===!0?void 0:t,tabindex:-1},f);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(ie,{onResize:Q}),T("div",{class:"absolute-full",style:z.value},[T("div",{class:"scroll",style:b.value},[r])])]):r}}}),ta=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:u}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:n.value},se(u.default))}}),aa=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:n.value,role:"toolbar"},se(u.default))}});let la=0;const et=["click","keydown"],tt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${la++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function at(e,u,n,a){const t=he(Xe,F);if(t===F)return console.error("QTab/QRouteTab component needs to be child of QTabs"),F;const{proxy:m}=K(),w=q(null),c=q(null),o=q(null),_=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),$=v(()=>t.currentModel.value===e.name),x=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+($.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),z=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=v(()=>e.disable===!0||t.hasFocus.value===!0||$.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function S(s,f){if(f!==!0&&s?.qAvoidFocus!==!0&&w.value?.focus(),e.disable===!0){a?.hasRouterLink.value===!0&&De(s);return}if(a===void 0){t.updateModel({name:e.name}),n("click",s);return}if(a.hasRouterLink.value===!0){const r=(y={})=>{let L;const H=y.to===void 0||zt(y.to,e.to)===!0?t.avoidRouteWatcher=pt():null;return a.navigateToRouterLink(s,{...y,returnRouterError:!0}).catch(O=>{L=O}).then(O=>{if(H===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,L===void 0&&(O===void 0||O.message?.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),y.returnRouterError===!0)return L!==void 0?Promise.reject(L):O})};n("click",s,r),s.defaultPrevented!==!0&&r();return}n("click",s)}function R(s){kt(s,[13,32])?S(s,!0):Vt(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&t.onKbdNavigate(s.keyCode,m.$el)===!0&&De(s),n("keydown",s)}function Q(){const s=t.tabProps.value.narrowIndicator,f=[],r=T("div",{ref:o,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&f.push(T(me,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&f.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&f.push(e.alertIcon!==void 0?T(me,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&f.push(r);const y=[T("div",{class:"q-focus-helper",tabindex:-1,ref:w}),T("div",{class:z.value},Se(u.default,f))];return s===!1&&y.push(r),y}const I={name:v(()=>e.name),rootRef:c,tabIndicatorRef:o,routeData:a};G(()=>{t.unregisterTab(I)}),re(()=>{t.registerTab(I)});function d(s,f){const r={ref:c,class:x.value,tabindex:b.value,role:"tab","aria-selected":$.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:R,...f};return $t(T(s,r,Q()),[[Pt,_.value]])}return{renderTab:d,$tabs:t}}const ne=E({name:"QTab",props:tt,emits:et,setup(e,{slots:u,emit:n}){const{renderTab:a}=at(e,u,n);return()=>a("div")}});function na(e,u,n){const a=n===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const oa=["left","center","right","justify"],Pe=E({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>oa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:n}){const{proxy:a}=K(),{$q:t}=a,{registerTick:m}=pe(),{registerTick:w}=pe(),{registerTick:c}=pe(),{registerTimeout:o,removeTimeout:_}=Me(),{registerTimeout:$,removeTimeout:x}=Me(),z=q(null),b=q(null),S=q(e.modelValue),R=q(!1),Q=q(!0),I=q(!1),d=q(!1),s=[],f=q(0),r=q(!1);let y=null,L=null,H;const O=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:na(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),lt=v(()=>{const l=f.value,i=S.value;for(let g=0;g<l;g++)if(s[g].name.value===i)return!0;return!1}),nt=v(()=>`q-tabs__content--align-${R.value===!0?"left":d.value===!0?"justify":e.align}`),ot=v(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),rt=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+nt.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ue=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ce=v(()=>e.vertical!==!0&&t.lang.rtl===!0),be=v(()=>qt===!1&&ce.value===!0);B(ce,Y),B(()=>e.modelValue,l=>{ye({name:l,setCurrent:!0,skipEmit:!0})}),B(()=>e.outsideArrows,de);function ye({name:l,setCurrent:i,skipEmit:g}){S.value!==l&&(g!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",l),(i===!0||e["onUpdate:modelValue"]===void 0)&&(it(S.value,l),S.value=l))}function de(){m(()=>{z.value&&ke({width:z.value.offsetWidth,height:z.value.offsetHeight})})}function ke(l){if(ue.value===void 0||b.value===null)return;const i=l[ue.value.container],g=Math.min(b.value[ue.value.scroll],Array.prototype.reduce.call(b.value.children,(k,C)=>k+(C[ue.value.content]||0),0)),P=i>0&&g>i;R.value=P,P===!0&&w(Y),d.value=i<parseInt(e.breakpoint,10)}function it(l,i){const g=l!=null&&l!==""?s.find(k=>k.name.value===l):null,P=i!=null&&i!==""?s.find(k=>k.name.value===i):null;if(fe===!0)fe=!1;else if(g&&P){const k=g.tabIndicatorRef.value,C=P.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),k.style.transition="none",k.style.transform="none",C.style.transition="none",C.style.transform="none";const p=k.getBoundingClientRect(),A=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${p.top-A.top}px,0) scale3d(1,${A.height?p.height/A.height:1},1)`:`translate3d(${p.left-A.left}px,0,0) scale3d(${A.width?p.width/A.width:1},1,1)`,c(()=>{y=setTimeout(()=>{y=null,C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}P&&R.value===!0&&J(P.rootRef.value)}function J(l){const{left:i,width:g,top:P,height:k}=b.value.getBoundingClientRect(),C=l.getBoundingClientRect();let p=e.vertical===!0?C.top-P:C.left-i;if(p<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(p),Y();return}p+=e.vertical===!0?C.height-k:C.width-g,p>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(p),Y())}function Y(){const l=b.value;if(l===null)return;const i=l.getBoundingClientRect(),g=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);ce.value===!0?(Q.value=Math.ceil(g+i.width)<l.scrollWidth-1,I.value=g>0):(Q.value=g>0,I.value=e.vertical===!0?Math.ceil(g+i.height)<l.scrollHeight:Math.ceil(g+i.width)<l.scrollWidth)}function Ve(l){L!==null&&clearInterval(L),L=setInterval(()=>{ct(l)===!0&&W()},5)}function ze(){Ve(be.value===!0?Number.MAX_SAFE_INTEGER:0)}function Be(){Ve(be.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){L!==null&&(clearInterval(L),L=null)}function st(l,i){const g=Array.prototype.filter.call(b.value.children,A=>A===i||A.matches&&A.matches(".q-tab.q-focusable")===!0),P=g.length;if(P===0)return;if(l===36)return J(g[0]),g[0].focus(),!0;if(l===35)return J(g[P-1]),g[P-1].focus(),!0;const k=l===(e.vertical===!0?38:37),C=l===(e.vertical===!0?40:39),p=k===!0?-1:C===!0?1:void 0;if(p!==void 0){const A=ce.value===!0?-1:1,D=g.indexOf(i)+p*A;return D>=0&&D<P&&(J(g[D]),g[D].focus({preventScroll:!0})),!0}}const ut=v(()=>be.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,i)=>{l.scrollLeft=-i}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,i)=>{l.scrollTop=i}}:{get:l=>l.scrollLeft,set:(l,i)=>{l.scrollLeft=i}});function ct(l){const i=b.value,{get:g,set:P}=ut.value;let k=!1,C=g(i);const p=l<C?-1:1;return C+=p*5,C<0?(k=!0,C=0):(p===-1&&C<=l||p===1&&C>=l)&&(k=!0,C=l),P(i,C),Y(),k}function Qe(l,i){for(const g in l)if(l[g]!==i[g])return!1;return!0}function dt(){let l=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const g=s.filter(p=>p.routeData?.hasRouterLink.value===!0),{hash:P,query:k}=a.$route,C=Object.keys(k).length;for(const p of g){const A=p.routeData.exact.value===!0;if(p.routeData[A===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:D,query:we,matched:gt,href:bt}=p.routeData.resolvedLink.value,_e=Object.keys(we).length;if(A===!0){if(D!==P||_e!==C||Qe(k,we)===!1)continue;l=p.name.value;break}if(D!==""&&D!==P||_e!==0&&Qe(we,k)===!1)continue;const j={matchedLen:gt.length,queryDiff:C-_e,hrefLen:bt.length-D.length};if(j.matchedLen>i.matchedLen){l=p.name.value,i=j;continue}else if(j.matchedLen!==i.matchedLen)continue;if(j.queryDiff<i.queryDiff)l=p.name.value,i=j;else if(j.queryDiff!==i.queryDiff)continue;j.hrefLen>i.hrefLen&&(l=p.name.value,i=j)}if(l===null&&s.some(p=>p.routeData===void 0&&p.name.value===S.value)===!0){fe=!1;return}ye({name:l,setCurrent:!0})}function ft(l){if(_(),r.value!==!0&&z.value!==null&&l.target&&typeof l.target.closest=="function"){const i=l.target.closest(".q-tab");i&&z.value.contains(i)===!0&&(r.value=!0,R.value===!0&&J(i))}}function vt(){o(()=>{r.value=!1},30)}function ee(){Ie.avoidRouteWatcher===!1?$(dt):x()}function Ae(){if(H===void 0){const l=B(()=>a.$route.fullPath,ee);H=()=>{l(),H=void 0}}}function mt(l){s.push(l),f.value++,de(),l.routeData===void 0||a.$route===void 0?$(()=>{if(R.value===!0){const i=S.value,g=i!=null&&i!==""?s.find(P=>P.name.value===i):null;g&&J(g.rootRef.value)}}):(Ae(),l.routeData.hasRouterLink.value===!0&&ee())}function ht(l){s.splice(s.indexOf(l),1),f.value--,de(),H!==void 0&&l.routeData!==void 0&&(s.every(i=>i.routeData===void 0)===!0&&H(),ee())}const Ie={currentModel:S,tabProps:O,hasFocus:r,hasActiveTab:lt,registerTab:mt,unregisterTab:ht,verifyRouteModel:ee,updateModel:ye,onKbdNavigate:st,avoidRouteWatcher:!1};Le(Xe,Ie);function He(){y!==null&&clearTimeout(y),W(),H?.()}let Fe,fe;return G(He),Bt(()=>{Fe=H!==void 0,He()}),Qt(()=>{Fe===!0&&(Ae(),fe=!0,ee()),de()}),()=>T("div",{ref:z,class:ot.value,role:"tablist",onFocusin:ft,onFocusout:vt},[T(ie,{onResize:ke}),T("div",{ref:b,class:rt.value,onScroll:Y},se(u.default)),T(me,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ze,onTouchstartPassive:ze,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),T(me,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})])}}),Ke=E({name:"QCardActions",props:{...At,vertical:Boolean},setup(e,{slots:u}){const n=It(e),a=v(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>T("div",{class:a.value},se(u.default))}}),ra={class:"q-gutter-y-md"},ia=X({__name:"LoginDialog",setup(e){const u=q("login"),n=q(""),a=q(""),t=q("");async function m(){await le().login(a.value,t.value)}return(w,c)=>(M(),U(Ct,{modelValue:N(Z)().show_login,"onUpdate:modelValue":c[8]||(c[8]=o=>N(Z)().show_login=o)},{default:V(()=>[h(Lt,{flat:"",bordered:"",style:{"min-width":"350px"}},{default:V(()=>[h(Pe,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=o=>u.value=o)},{default:V(()=>[h(ne,{name:"login",label:"Login"}),h(ne,{name:"signup",label:"Sign Up"})]),_:1},8,["modelValue"]),h(oe),h(jt,{modelValue:u.value,"onUpdate:modelValue":c[7]||(c[7]=o=>u.value=o),animated:""},{default:V(()=>[h(Ue,{name:"login"},{default:V(()=>[h(Wt,{onSubmit:c[3]||(c[3]=Ht(o=>m(),["prevent"]))},{default:V(()=>[h(Ee,null,{default:V(()=>[Ne("div",ra,[h(te,{rules:[o=>o&&o.length>0&&o.includes(["@"])||"Please enter an email"],modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=o=>a.value=o),outlined:"","lazy-rules":"",dense:"",label:"Email",type:"email"},null,8,["rules","modelValue"]),h(te,{rules:[o=>o&&o.length>0||"Please enter a password"],modelValue:t.value,"onUpdate:modelValue":c[2]||(c[2]=o=>t.value=o),outlined:"","lazy-rules":"",dense:"",label:"Password",type:"password"},null,8,["rules","modelValue"])]),h(ae,{class:"text-secondary"},{default:V(()=>c[9]||(c[9]=[Je("Forgot Password?")])),_:1})]),_:1}),h(Ke,{align:"right"},{default:V(()=>[h(ae,{type:"submit",class:"full-width",label:"Login",color:"primary"})]),_:1})]),_:1})]),_:1}),h(Ue,{name:"signup"},{default:V(()=>[h(Ee,null,{default:V(()=>[c[10]||(c[10]=Ne("div",{class:"text-h6"},"Sign Up",-1)),h(te,{modelValue:n.value,"onUpdate:modelValue":c[4]||(c[4]=o=>n.value=o),filled:"",label:"Name",type:"text",class:"q-mb-md"},null,8,["modelValue"]),h(te,{modelValue:a.value,"onUpdate:modelValue":c[5]||(c[5]=o=>a.value=o),filled:"",label:"Email",type:"email",class:"q-mb-md"},null,8,["modelValue"]),h(te,{modelValue:t.value,"onUpdate:modelValue":c[6]||(c[6]=o=>t.value=o),t:"",filled:"",label:"Password",type:"password",class:"q-mb-md"},null,8,["modelValue"])]),_:1}),h(Ke,{align:"right"},{default:V(()=>[h(ae,{flat:"",label:"Sign Up",color:"primary"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),h(oe)]),_:1})]),_:1},8,["modelValue"]))}});async function sa(){try{const{error:e}=await le().supabase.auth.signOut();if(e)return{status:"ERROR",message:e.message}}catch{return{status:"ERROR",message:"An unexpected error occurred. Please try again."}}return{status:"OK",message:"Logout successful!"}}const ua=X({__name:"LoginButtton",setup(e){const u=v(()=>le().isSignedIn?"Logout":"Login");async function n(){if(le().isSignedIn){const a=await sa();Ft(a),await le().loadUser()}else Z().show_login=!0}return(a,t)=>(M(),xe($e,null,[h(ae,{icon:u.value=="Login"?"las la-sign-in-alt":"las la-sign-out-alt",label:u.value,color:"primary",onClick:t[0]||(t[0]=m=>n())},null,8,["icon","label"]),N(Z)().show_login?(M(),U(ia,{key:0})):Re("",!0)],64))}}),ca=X({__name:"HeaderLayout",setup(e){const u=Mt();return(n,a)=>(M(),U(aa,null,{default:V(()=>[N(Ye)().path.includes("edit")?(M(),U(ae,{key:0,flat:"",icon:"las la-chevron-left",onClick:a[0]||(a[0]=t=>N(u).push("/"))})):Re("",!0),h(ta,{onClick:a[1]||(a[1]=t=>N(u).push("/")),class:""},{default:V(()=>a[2]||(a[2]=[Je(" FoodTrack ")])),_:1}),h(ua,{class:""})]),_:1}))}}),da=E({name:"QRouteTab",props:{...Et,...tt},emits:et,setup(e,{slots:u,emit:n}){const a=Ot({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:m}=at(e,u,n,{exact:v(()=>e.exact),...a});return B(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,m.verifyRouteModel),()=>t(a.linkTag.value,a.linkAttrs.value)}}),fa=X({__name:"NavigationBarMain",props:["links"],setup(e){const u=e;return(n,a)=>(M(),U(Pe,{align:"justify","active-color":"accent",dense:"",flat:"",bordered:"","indicator-color":"transparent"},{default:V(()=>[(M(!0),xe($e,null,Dt(u.links,t=>(M(),U(da,Nt({key:t.title,ref_for:!0},t,{clickable:"",tag:"a",to:t.to,name:t.title,icon:t.icon,label:t.title}),null,16,["to","name","icon","label"]))),128))]),_:1}))}}),va=X({__name:"NavigationBarAdd",setup(e){return(u,n)=>(M(),U(Pe,{dense:"","active-color":"accent","indicator-color":"transparent",class:"bg-dark",modelValue:N(Z)().addActiveTab,"onUpdate:modelValue":n[0]||(n[0]=a=>N(Z)().addActiveTab=a),align:"justify"},{default:V(()=>[h(ne,{icon:"las la-box",name:"item",label:"Item"}),h(ne,{icon:"las la-users",name:"group",label:"Group"}),h(ne,{icon:"las la-tag",name:"tag",label:"Tag"})]),_:1},8,["modelValue"]))}}),ma=X({__name:"FooterLayout",setup(e){const u=[{title:"Home",icon:"las la-home",to:"/"},{title:"Add",icon:"las la-plus",to:"/add"},{title:"About",icon:"las la-info",to:"/about"}];return(n,a)=>(M(),xe($e,null,[N(Ye)().path.includes("add")?(M(),U(va,{key:0})):Re("",!0),h(oe),h(fa,{links:u})],64))}}),wa=X({__name:"MainLayout",setup(e){return(u,n)=>{const a=Ut("router-view");return M(),U(ea,{view:"lHh Lpr lFf"},{default:V(()=>[h(Gt,{class:"bg-dark"},{default:V(()=>[h(ca),h(oe)]),_:1}),h(Xt,null,{default:V(()=>[h(a)]),_:1}),h(Jt,{class:"bg-dark"},{default:V(()=>[h(oe),h(ma)]),_:1})]),_:1})}}});export{wa as default};
