import{r as w,v as ze,o as G,k as F,g as Y,n as X,z as Qe,aa as be,h as g,y as he,a as je,l as ne,ad as we,c as f,a1 as Oe,ae as We,a3 as J,x as Fe,af as He,ag as Ve,a4 as ge,ab as pe,w as U,ah as Ke,ai as Ne,q as ye,t as Ue,aj as Ge}from"./index-Ci3aV1Np.js";import{o as Xe,p as le,u as me,r as Je,j as Ye,l as Ze}from"./QDialog-CKft7haM.js";import{u as et,a as tt,b as at,c as nt}from"./use-panel-CyP61XWI.js";function lt(){const e=w(!ze.value);return e.value===!1&&G(()=>{e.value=!0}),{isHydrated:e}}const qe=typeof ResizeObserver<"u",Te=qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},rt=F({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:m}){let u=null,o,l={width:-1,height:-1};function R(v){v===!0||e.debounce===0||e.debounce==="0"?P():u===null&&(u=setTimeout(P,e.debounce))}function P(){if(u!==null&&(clearTimeout(u),u=null),o){const{offsetWidth:v,offsetHeight:y}=o;(v!==l.width||y!==l.height)&&(l={width:v,height:y},m("resize",l))}}const{proxy:_}=Y();if(_.trigger=R,qe===!0){let v;const y=L=>{o=_.$el.parentNode,o?(v=new ResizeObserver(R),v.observe(o),P()):L!==!0&&be(()=>{y(!0)})};return G(()=>{y()}),X(()=>{u!==null&&clearTimeout(u),v!==void 0&&(v.disconnect!==void 0?v.disconnect():o&&v.unobserve(o))}),Qe}else{let v=function(){u!==null&&(clearTimeout(u),u=null),S!==void 0&&(S.removeEventListener!==void 0&&S.removeEventListener("resize",R,he.passive),S=void 0)},y=function(){v(),o?.contentDocument&&(S=o.contentDocument.defaultView,S.addEventListener("resize",R,he.passive),P())};const{isHydrated:L}=lt();let S;return G(()=>{be(()=>{o=_.$el,o&&y()})}),X(v),()=>{if(L.value===!0)return g("object",{class:"q--avoid-card-border",style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:y})}}}});let ot=0;const it=["click","keydown"],st={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ot++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ut(e,m,u,o){const l=je(we,ne);if(l===ne)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ne;const{proxy:R}=Y(),P=w(null),_=w(null),v=w(null),y=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=f(()=>l.currentModel.value===e.name),S=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),$=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=f(()=>e.disable===!0||l.hasFocus.value===!0||L.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function x(r,T){if(T!==!0&&r?.qAvoidFocus!==!0&&P.value?.focus(),e.disable===!0){o?.hasRouterLink.value===!0&&ge(r);return}if(o===void 0){l.updateModel({name:e.name}),u("click",r);return}if(o.hasRouterLink.value===!0){const C=(b={})=>{let k;const I=b.to===void 0||pe(b.to,e.to)===!0?l.avoidRouteWatcher=Xe():null;return o.navigateToRouterLink(r,{...b,returnRouterError:!0}).catch(E=>{k=E}).then(E=>{if(I===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,k===void 0&&(E===void 0||E.message?.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),b.returnRouterError===!0)return k!==void 0?Promise.reject(k):E})};u("click",r,C),r.defaultPrevented!==!0&&C();return}u("click",r)}function B(r){He(r,[13,32])?x(r,!0):Ve(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&l.onKbdNavigate(r.keyCode,R.$el)===!0&&ge(r),u("keydown",r)}function O(){const r=l.tabProps.value.narrowIndicator,T=[],C=g("div",{ref:v,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(g(J,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?g(J,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&T.push(C);const b=[g("div",{class:"q-focus-helper",tabindex:-1,ref:P}),g("div",{class:$.value},Fe(m.default,T))];return r===!1&&b.push(C),b}const z={name:f(()=>e.name),rootRef:_,tabIndicatorRef:v,routeData:o};X(()=>{l.unregisterTab(z)}),G(()=>{l.registerTab(z)});function H(r,T){const C={ref:_,class:S.value,tabindex:q.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:x,onKeydown:B,...T};return Oe(g(r,C,O()),[[We,y.value]])}return{renderTab:H,$tabs:l}}const ht=F({name:"QTab",props:st,emits:it,setup(e,{slots:m,emit:u}){const{renderTab:o}=ut(e,m,u);return()=>o("div")}});function ct(e,m,u){const o=u===!0?["left","right"]:["top","bottom"];return`absolute-${m===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const dt=["left","center","right","justify"],gt=F({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>dt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:m,emit:u}){const{proxy:o}=Y(),{$q:l}=o,{registerTick:R}=le(),{registerTick:P}=le(),{registerTick:_}=le(),{registerTimeout:v,removeTimeout:y}=me(),{registerTimeout:L,removeTimeout:S}=me(),$=w(null),q=w(null),x=w(e.modelValue),B=w(!1),O=w(!0),z=w(!1),H=w(!1),r=[],T=w(0),C=w(!1);let b=null,k=null,I;const E=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:ct(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ce=f(()=>{const t=T.value,a=x.value;for(let n=0;n<t;n++)if(r[n].name.value===a)return!0;return!1}),Pe=f(()=>`q-tabs__content--align-${B.value===!0?"left":H.value===!0?"justify":e.align}`),ke=f(()=>`q-tabs row no-wrap items-center q-tabs--${B.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Re=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Pe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),V=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),p=f(()=>e.vertical!==!0&&l.lang.rtl===!0),Z=f(()=>Je===!1&&p.value===!0);U(p,j),U(()=>e.modelValue,t=>{ee({name:t,setCurrent:!0,skipEmit:!0})}),U(()=>e.outsideArrows,K);function ee({name:t,setCurrent:a,skipEmit:n}){x.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(_e(x.value,t),x.value=t))}function K(){R(()=>{$.value&&re({width:$.value.offsetWidth,height:$.value.offsetHeight})})}function re(t){if(V.value===void 0||q.value===null)return;const a=t[V.value.container],n=Math.min(q.value[V.value.scroll],Array.prototype.reduce.call(q.value.children,(d,s)=>d+(s[V.value.content]||0),0)),c=a>0&&n>a;B.value=c,c===!0&&P(j),H.value=a<parseInt(e.breakpoint,10)}function _e(t,a){const n=t!=null&&t!==""?r.find(d=>d.name.value===t):null,c=a!=null&&a!==""?r.find(d=>d.name.value===a):null;if(N===!0)N=!1;else if(n&&c){const d=n.tabIndicatorRef.value,s=c.tabIndicatorRef.value;b!==null&&(clearTimeout(b),b=null),d.style.transition="none",d.style.transform="none",s.style.transition="none",s.style.transform="none";const i=d.getBoundingClientRect(),h=s.getBoundingClientRect();s.style.transform=e.vertical===!0?`translate3d(0,${i.top-h.top}px,0) scale3d(1,${h.height?i.height/h.height:1},1)`:`translate3d(${i.left-h.left}px,0,0) scale3d(${h.width?i.width/h.width:1},1,1)`,_(()=>{b=setTimeout(()=>{b=null,s.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",s.style.transform="none"},70)})}c&&B.value===!0&&Q(c.rootRef.value)}function Q(t){const{left:a,width:n,top:c,height:d}=q.value.getBoundingClientRect(),s=t.getBoundingClientRect();let i=e.vertical===!0?s.top-c:s.left-a;if(i<0){q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(i),j();return}i+=e.vertical===!0?s.height-d:s.width-n,i>0&&(q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(i),j())}function j(){const t=q.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);p.value===!0?(O.value=Math.ceil(n+a.width)<t.scrollWidth-1,z.value=n>0):(O.value=n>0,z.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function oe(t){k!==null&&clearInterval(k),k=setInterval(()=>{xe(t)===!0&&M()},5)}function ie(){oe(Z.value===!0?Number.MAX_SAFE_INTEGER:0)}function se(){oe(Z.value===!0?0:Number.MAX_SAFE_INTEGER)}function M(){k!==null&&(clearInterval(k),k=null)}function Le(t,a){const n=Array.prototype.filter.call(q.value.children,h=>h===a||h.matches&&h.matches(".q-tab.q-focusable")===!0),c=n.length;if(c===0)return;if(t===36)return Q(n[0]),n[0].focus(),!0;if(t===35)return Q(n[c-1]),n[c-1].focus(),!0;const d=t===(e.vertical===!0?38:37),s=t===(e.vertical===!0?40:39),i=d===!0?-1:s===!0?1:void 0;if(i!==void 0){const h=p.value===!0?-1:1,A=n.indexOf(a)+i*h;return A>=0&&A<c&&(Q(n[A]),n[A].focus({preventScroll:!0})),!0}}const Se=f(()=>Z.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function xe(t){const a=q.value,{get:n,set:c}=Se.value;let d=!1,s=n(a);const i=t<s?-1:1;return s+=i*5,s<0?(d=!0,s=0):(i===-1&&s<=t||i===1&&s>=t)&&(d=!0,s=t),c(a,s),j(),d}function ue(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function Ie(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=r.filter(i=>i.routeData?.hasRouterLink.value===!0),{hash:c,query:d}=o.$route,s=Object.keys(d).length;for(const i of n){const h=i.routeData.exact.value===!0;if(i.routeData[h===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:A,query:te,matched:De,href:Ee}=i.routeData.resolvedLink.value,ae=Object.keys(te).length;if(h===!0){if(A!==c||ae!==s||ue(d,te)===!1)continue;t=i.name.value;break}if(A!==""&&A!==c||ae!==0&&ue(te,d)===!1)continue;const D={matchedLen:De.length,queryDiff:s-ae,hrefLen:Ee.length-A.length};if(D.matchedLen>a.matchedLen){t=i.name.value,a=D;continue}else if(D.matchedLen!==a.matchedLen)continue;if(D.queryDiff<a.queryDiff)t=i.name.value,a=D;else if(D.queryDiff!==a.queryDiff)continue;D.hrefLen>a.hrefLen&&(t=i.name.value,a=D)}if(t===null&&r.some(i=>i.routeData===void 0&&i.name.value===x.value)===!0){N=!1;return}ee({name:t,setCurrent:!0})}function Ae(t){if(y(),C.value!==!0&&$.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&$.value.contains(a)===!0&&(C.value=!0,B.value===!0&&Q(a))}}function $e(){v(()=>{C.value=!1},30)}function W(){de.avoidRouteWatcher===!1?L(Ie):S()}function ce(){if(I===void 0){const t=U(()=>o.$route.fullPath,W);I=()=>{t(),I=void 0}}}function Be(t){r.push(t),T.value++,K(),t.routeData===void 0||o.$route===void 0?L(()=>{if(B.value===!0){const a=x.value,n=a!=null&&a!==""?r.find(c=>c.name.value===a):null;n&&Q(n.rootRef.value)}}):(ce(),t.routeData.hasRouterLink.value===!0&&W())}function Me(t){r.splice(r.indexOf(t),1),T.value--,K(),I!==void 0&&t.routeData!==void 0&&(r.every(a=>a.routeData===void 0)===!0&&I(),W())}const de={currentModel:x,tabProps:E,hasFocus:C,hasActiveTab:Ce,registerTab:Be,unregisterTab:Me,verifyRouteModel:W,updateModel:ee,onKbdNavigate:Le,avoidRouteWatcher:!1};Ue(we,de);function ve(){b!==null&&clearTimeout(b),M(),I?.()}let fe,N;return X(ve),Ke(()=>{fe=I!==void 0,ve()}),Ne(()=>{fe===!0&&(ce(),N=!0,W()),K()}),()=>g("div",{ref:$,class:ke.value,role:"tablist",onFocusin:Ae,onFocusout:$e},[g(rt,{onResize:re}),g("div",{ref:q,class:Re.value,onScroll:j},ye(m.default)),g(J,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(O.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ie,onTouchstartPassive:ie,onMouseupPassive:M,onMouseleavePassive:M,onTouchendPassive:M}),g(J,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:se,onTouchstartPassive:se,onMouseupPassive:M,onMouseleavePassive:M,onTouchendPassive:M})])}}),mt=F({name:"QTabPanel",props:et,setup(e,{slots:m}){return()=>g("div",{class:"q-tab-panel",role:"tabpanel"},ye(m.default))}}),Tt=F({name:"QTabPanels",props:{...at,...Ye},emits:tt,setup(e,{slots:m}){const u=Y(),o=Ze(e,u.proxy.$q),{updatePanelsList:l,getPanelContent:R,panelDirectives:P}=nt(),_=f(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(m),Ge("div",{class:_.value},R(),"pan",e.swipeable,()=>P.value))}});export{rt as Q,gt as a,ht as b,Tt as c,mt as d,it as e,ut as f,st as u};
