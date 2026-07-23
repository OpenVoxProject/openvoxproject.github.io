(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=globalThis,it=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),Et=new WeakMap;let Mt=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(it&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=Et.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Et.set(o,e))}return e}toString(){return this.cssText}};const oo=s=>new Mt(typeof s=="string"?s:s+"",void 0,nt),c=(s,...e)=>{const o=s.length===1?s[0]:e.reduce((r,t,a)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+s[a+1],s[0]);return new Mt(o,s,nt)},ro=(s,e)=>{if(it)s.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const r=document.createElement("style"),t=je.litNonce;t!==void 0&&r.setAttribute("nonce",t),r.textContent=o.cssText,s.appendChild(r)}},Pt=it?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return oo(o)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:so,defineProperty:ao,getOwnPropertyDescriptor:io,getOwnPropertyNames:no,getOwnPropertySymbols:lo,getPrototypeOf:co}=Object,_=globalThis,Ct=_.trustedTypes,po=Ct?Ct.emptyScript:"",Xe=_.reactiveElementPolyfillSupport,Y=(s,e)=>s,ze={toAttribute(s,e){switch(e){case Boolean:s=s?po:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let o=s;switch(e){case Boolean:o=s!==null;break;case Number:o=s===null?null:Number(s);break;case Object:case Array:try{o=JSON.parse(s)}catch{o=null}}return o}},lt=(s,e)=>!so(s,e),St={attribute:!0,type:String,converter:ze,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=St){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){const r=Symbol(),t=this.getPropertyDescriptor(e,r,o);t!==void 0&&ao(this.prototype,e,t)}}static getPropertyDescriptor(e,o,r){const{get:t,set:a}=io(this.prototype,e)??{get(){return this[o]},set(i){this[o]=i}};return{get:t,set(i){const v=t==null?void 0:t.call(this);a==null||a.call(this,i),this.requestUpdate(e,v,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??St}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const e=co(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const o=this.properties,r=[...no(o),...lo(o)];for(const t of r)this.createProperty(t,o[t])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[r,t]of o)this.elementProperties.set(r,t)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const t=this._$Eu(o,r);t!==void 0&&this._$Eh.set(t,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const t of r)o.unshift(Pt(t))}else e!==void 0&&o.push(Pt(e));return o}static _$Eu(e,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$EO)==null||o.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ro(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$ET(e,o){var a;const r=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,r);if(t!==void 0&&r.reflect===!0){const i=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:ze).toAttribute(o,r.type);this._$Em=e,i==null?this.removeAttribute(t):this.setAttribute(t,i),this._$Em=null}}_$AK(e,o){var a,i;const r=this.constructor,t=r._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const v=r.getPropertyOptions(t),d=typeof v.converter=="function"?{fromAttribute:v.converter}:((a=v.converter)==null?void 0:a.fromAttribute)!==void 0?v.converter:ze;this._$Em=t;const g=d.fromAttribute(o,v.type);this[t]=g??((i=this._$Ej)==null?void 0:i.get(t))??g,this._$Em=null}}requestUpdate(e,o,r,t=!1,a){var i;if(e!==void 0){const v=this.constructor;if(t===!1&&(a=this[e]),r??(r=v.getPropertyOptions(e)),!((r.hasChanged??lt)(a,o)||r.useDefault&&r.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(v._$Eu(e,r))))return;this.C(e,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:r,reflect:t,wrapped:a},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??o??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(o=void 0),this._$AL.set(e,o)),t===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[a,i]of t){const{wrapped:v}=i,d=this[a];v!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,i,d)}}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(r=this._$EO)==null||r.forEach(t=>{var a;return(a=t.hostUpdate)==null?void 0:a.call(t)}),this.update(o)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$EO)==null||o.forEach(r=>{var t;return(t=r.hostUpdated)==null?void 0:t.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[Y("elementProperties")]=new Map,L[Y("finalized")]=new Map,Xe==null||Xe({ReactiveElement:L}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,jt=s=>s,Te=J.trustedTypes,zt=Te?Te.createPolicy("lit-html",{createHTML:s=>s}):void 0,Lt="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,qt="?"+k,ho=`<${qt}>`,z=document,G=()=>z.createComment(""),Q=s=>s===null||typeof s!="object"&&typeof s!="function",dt=Array.isArray,vo=s=>dt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ze=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Dt=/>/g,P=RegExp(`>|${Ze}(?:([^\\s"'>=/]+)(${Ze}*=${Ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,Rt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,uo=s=>(e,...o)=>({_$litType$:s,strings:e,values:o}),l=uo(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Bt=new WeakMap,S=z.createTreeWalker(z,129);function It(s,e){if(!dt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(e):e}const xo=(s,e)=>{const o=s.length-1,r=[];let t,a=e===2?"<svg>":e===3?"<math>":"",i=Z;for(let v=0;v<o;v++){const d=s[v];let g,f,x=-1,m=0;for(;m<d.length&&(i.lastIndex=m,f=i.exec(d),f!==null);)m=i.lastIndex,i===Z?f[1]==="!--"?i=Tt:f[1]!==void 0?i=Dt:f[2]!==void 0?(Ht.test(f[2])&&(t=RegExp("</"+f[2],"g")),i=P):f[3]!==void 0&&(i=P):i===P?f[0]===">"?(i=t??Z,x=-1):f[1]===void 0?x=-2:(x=i.lastIndex-f[2].length,g=f[1],i=f[3]===void 0?P:f[3]==='"'?Rt:Nt):i===Rt||i===Nt?i=P:i===Tt||i===Dt?i=Z:(i=P,t=void 0);const w=i===P&&s[v+1].startsWith("/>")?" ":"";a+=i===Z?d+ho:x>=0?(r.push(g),d.slice(0,x)+Lt+d.slice(x)+k+w):d+k+(x===-2?v:w)}return[It(s,a+(s[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};let Ge=class Vt{constructor({strings:e,_$litType$:o},r){let t;this.parts=[];let a=0,i=0;const v=e.length-1,d=this.parts,[g,f]=xo(e,o);if(this.el=Vt.createElement(g,r),S.currentNode=this.el.content,o===2||o===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(t=S.nextNode())!==null&&d.length<v;){if(t.nodeType===1){if(t.hasAttributes())for(const x of t.getAttributeNames())if(x.endsWith(Lt)){const m=f[i++],w=t.getAttribute(x).split(k),Se=/([.?@])?(.*)/.exec(m);d.push({type:1,index:a,name:Se[2],strings:w,ctor:Se[1]==="."?fo:Se[1]==="?"?bo:Se[1]==="@"?yo:He}),t.removeAttribute(x)}else x.startsWith(k)&&(d.push({type:6,index:a}),t.removeAttribute(x));if(Ht.test(t.tagName)){const x=t.textContent.split(k),m=x.length-1;if(m>0){t.textContent=Te?Te.emptyScript:"";for(let w=0;w<m;w++)t.append(x[w],G()),S.nextNode(),d.push({type:2,index:++a});t.append(x[m],G())}}}else if(t.nodeType===8)if(t.data===qt)d.push({type:2,index:a});else{let x=-1;for(;(x=t.data.indexOf(k,x+1))!==-1;)d.push({type:7,index:a}),x+=k.length-1}a++}}static createElement(e,o){const r=z.createElement("template");return r.innerHTML=e,r}};function q(s,e,o=s,r){var i,v;if(e===y)return e;let t=r!==void 0?(i=o._$Co)==null?void 0:i[r]:o._$Cl;const a=Q(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==a&&((v=t==null?void 0:t._$AO)==null||v.call(t,!1),a===void 0?t=void 0:(t=new a(s),t._$AT(s,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=t:o._$Cl=t),t!==void 0&&(e=q(s,t._$AS(s,e.values),t,r)),e}let go=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:r}=this._$AD,t=((e==null?void 0:e.creationScope)??z).importNode(o,!0);S.currentNode=t;let a=S.nextNode(),i=0,v=0,d=r[0];for(;d!==void 0;){if(i===d.index){let g;d.type===2?g=new ct(a,a.nextSibling,this,e):d.type===1?g=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(g=new mo(a,this,e)),this._$AV.push(g),d=r[++v]}i!==(d==null?void 0:d.index)&&(a=S.nextNode(),i++)}return S.currentNode=z,t}p(e){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}},ct=class Ft{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,r,t){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=q(this,e,o),Q(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var a;const{values:o,_$litType$:r}=e,t=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ge.createElement(It(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===t)this._$AH.p(o);else{const i=new go(t,this),v=i.u(this.options);i.p(o),this.T(v),this._$AH=i}}_$AC(e){let o=Bt.get(e.strings);return o===void 0&&Bt.set(e.strings,o=new Ge(e)),o}k(e){dt(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,t=0;for(const a of e)t===o.length?o.push(r=new Ft(this.O(G()),this.O(G()),this,this.options)):r=o[t],r._$AI(a),t++;t<o.length&&(this._$AR(r&&r._$AB.nextSibling,t),o.length=t)}_$AR(e=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);e!==this._$AB;){const t=jt(e).nextSibling;jt(e).remove(),e=t}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,r,t,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=o,this._$AM=t,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,o=this,r,t){const a=this.strings;let i=!1;if(a===void 0)e=q(this,e,o,0),i=!Q(e)||e!==this._$AH&&e!==y,i&&(this._$AH=e);else{const v=e;let d,g;for(e=a[0],d=0;d<a.length-1;d++)g=q(this,v[r+d],o,d),g===y&&(g=this._$AH[d]),i||(i=!Q(g)||g!==this._$AH[d]),g===u?e=u:e!==u&&(e+=(g??"")+a[d+1]),this._$AH[d]=g}i&&!t&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},fo=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},bo=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},yo=class extends He{constructor(e,o,r,t,a){super(e,o,r,t,a),this.type=5}_$AI(e,o=this){if((e=q(this,e,o,0)??u)===y)return;const r=this._$AH,t=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==u&&(r===u||t);t&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}},mo=class{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};const Ye=J.litHtmlPolyfillSupport;Ye==null||Ye(Ge,ct),(J.litHtmlVersions??(J.litHtmlVersions=[])).push("3.3.3");const $o=(s,e,o)=>{const r=(o==null?void 0:o.renderBefore)??e;let t=r._$litPart$;if(t===void 0){const a=(o==null?void 0:o.renderBefore)??null;r._$litPart$=t=new ct(e.insertBefore(G(),a),a,void 0,o??{})}return t._$AI(s),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis;let h=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$o(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return y}};var Ut;h._$litElement$=!0,h.finalized=!0,(Ut=j.litElementHydrateSupport)==null||Ut.call(j,{LitElement:h});const Je=j.litElementPolyfillSupport;Je==null||Je({LitElement:h});(j.litElementVersions??(j.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=s=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:lt},ko=(s=wo,e,o)=>{const{kind:r,metadata:t}=o;let a=globalThis.litPropertyMetadata.get(t);if(a===void 0&&globalThis.litPropertyMetadata.set(t,a=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),a.set(o.name,s),r==="accessor"){const{name:i}=o;return{set(v){const d=e.get.call(this);e.set.call(this,v),this.requestUpdate(i,d,s,!0,v)},init(v){return v!==void 0&&this.C(i,void 0,s,v),v}}}if(r==="setter"){const{name:i}=o;return function(v){const d=this[i];e.call(this,v),this.requestUpdate(i,d,s,!0,v)}}throw Error("Unsupported decorator location: "+r)};function n(s){return(e,o)=>typeof o=="object"?ko(s,e,o):((r,t,a)=>{const i=t.hasOwnProperty(a);return t.constructor.createProperty(a,r),i?Object.getOwnPropertyDescriptor(t,a):void 0})(s,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _o(s){return n({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=(s,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(s,e){return(o,r,t)=>{const a=i=>{var v;return((v=i.renderRoot)==null?void 0:v.querySelector(s))??null};return Ao(o,r,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Kt=s=>(...e)=>({_$litDirective$:s,values:e});class Wt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=Kt(class extends Wt{constructor(s){var e;if(super(s),s.type!==C.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var r,t;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((r=this.nt)!=null&&r.has(a))&&this.st.add(a);return this.render(e)}const o=s.element.classList;for(const a of this.st)a in e||(o.remove(a),this.st.delete(a));for(const a in e){const i=!!e[a];i===this.st.has(a)||(t=this.nt)!=null&&t.has(a)||(i?(o.add(a),this.st.add(a)):(o.remove(a),this.st.delete(a)))}return y}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=s=>s??u;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=s=>s.strings===void 0,Po={},Co=(s,e=Po)=>s._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Kt(class extends Wt{constructor(s){if(super(s),s.type!==C.PROPERTY&&s.type!==C.ATTRIBUTE&&s.type!==C.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Eo(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===y||e===u)return e;const o=s.element,r=s.name;if(s.type===C.PROPERTY){if(e===o[r])return y}else if(s.type===C.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return y}else if(s.type===C.ATTRIBUTE&&o.getAttribute(r)===e+"")return y;return Co(s),e}});var So=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,U=(s,e,o,r)=>{for(var t=r>1?void 0:r?jo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&So(e,o,t),t};let $=class extends h{constructor(){super(...arguments),this.variant="brand",this.size="md",this.type="button",this.disabled=!1}render(){const s=Oo({button:!0,[this.variant]:!0,[this.size]:!0});return this.href!==void 0&&!this.disabled?l`
        <a
          class=${s}
          href=${this.href}
          target=${H(this.target)}
          rel=${H(this.target==="_blank"?"noreferrer":void 0)}
        >
          <slot></slot>
        </a>
      `:l`
      <button class=${s} type=${this.type} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}};$.styles=c`
    :host {
      display: inline-block;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--vox-space-2);
      border: 1px solid transparent;
      border-radius: var(--vox-radius-full);
      font-family: var(--vox-font-family-base);
      font-weight: 600;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
      transition:
        color var(--vox-transition-base),
        background-color var(--vox-transition-base),
        border-color var(--vox-transition-base);
    }

    .button:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .sm {
      font-size: 12px;
      padding: 0 var(--vox-space-3);
      height: 28px;
    }

    .md {
      font-size: 14px;
      padding: 0 20px;
      height: 38px;
    }

    .lg {
      font-size: 16px;
      padding: 0 var(--vox-space-6);
      height: 48px;
    }

    .brand {
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
    }

    .brand:hover:not(:disabled) {
      background-color: var(--vox-color-brand-2);
    }

    .alt {
      background-color: var(--vox-color-bg-soft);
      color: var(--vox-color-text-1);
      border-color: var(--vox-color-divider);
    }

    .alt:hover:not(:disabled) {
      border-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
    }

    .danger {
      background-color: var(--vox-color-danger-3);
      color: var(--vox-color-text-inverse);
    }

    .danger:hover:not(:disabled) {
      background-color: var(--vox-color-danger-2);
    }

    .ghost {
      background-color: transparent;
      color: var(--vox-color-brand-1);
    }

    .ghost:hover:not(:disabled) {
      background-color: var(--vox-color-brand-soft);
    }

    /* Corner flattening when placed inside a <vox-input-group>. */
    :host([data-vox-group]) .button {
      height: 100%;
      border-radius: 0;
    }

    :host([data-vox-group='start']) .button {
      border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
    }

    :host([data-vox-group='end']) .button {
      border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
    }
  `;U([n()],$.prototype,"variant",2);U([n()],$.prototype,"size",2);U([n()],$.prototype,"href",2);U([n()],$.prototype,"target",2);U([n()],$.prototype,"type",2);U([n({type:Boolean,reflect:!0})],$.prototype,"disabled",2);$=U([p("vox-button")],$);var zo=Object.defineProperty,To=Object.getOwnPropertyDescriptor,ht=(s,e,o,r)=>{for(var t=r>1?void 0:r?To(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&zo(e,o,t),t};let ee=class extends h{constructor(){super(...arguments),this.href="#"}render(){return l`
      <a href=${this.href} target=${this.target??""}>
        <slot></slot>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    `}};ee.styles=c`
    :host {
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      color: var(--vox-color-brand-1);
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
    }

    a:hover {
      color: var(--vox-color-brand-2);
      text-decoration: underline;
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
      border-radius: var(--vox-radius-sm);
    }

    svg {
      width: 16px;
      height: 16px;
      transition: transform var(--vox-transition-fast);
    }

    a:hover svg {
      transform: translateX(3px);
    }
  `;ht([n()],ee.prototype,"href",2);ht([n()],ee.prototype,"target",2);ee=ht([p("vox-cta")],ee);var Do=Object.defineProperty,$e=(s,e,o,r)=>{for(var t=void 0,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=i(e,o,t)||t);return t&&Do(e,o,t),t};const Zt=class extends h{constructor(){super(),this.name="",this.label="",this.note="",this.disabled=!1,this.required=!1,this.internals=this.attachInternals()}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}syncValidity(e){this.internals.setValidity(e.validity,e.validationMessage,e)}renderLabel(e){return this.label?l`
      <label class="label" for=${e}>
        ${this.label}${this.required?l`<span class="required-mark" aria-hidden="true"> *</span>`:u}
      </label>
    `:u}renderNote(){return this.note?l`<p class="note">${this.note}</p>`:u}};Zt.formAssociated=!0;let b=Zt;$e([n()],b.prototype,"name");$e([n()],b.prototype,"label");$e([n()],b.prototype,"note");$e([n({type:Boolean,reflect:!0})],b.prototype,"disabled");$e([n({type:Boolean,reflect:!0})],b.prototype,"required");const we=c`
  :host {
    display: block;
    font-family: var(--vox-font-family-base);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--vox-space-1);
  }

  .label {
    font-size: 14px;
    font-weight: 600;
    color: var(--vox-color-text-1);
  }

  .required-mark {
    color: var(--vox-color-danger-1);
  }

  .note {
    margin: 0;
    font-size: 12px;
    color: var(--vox-color-text-2);
  }

  .control {
    box-sizing: border-box;
    width: 100%;
    background-color: var(--vox-color-bg);
    border: 1px solid var(--vox-color-border);
    border-radius: var(--vox-radius-md);
    color: var(--vox-color-text-1);
    font-family: inherit;
    font-size: 14px;
    line-height: 1.5;
    padding: var(--vox-space-2) var(--vox-space-3);
    transition:
      border-color var(--vox-transition-fast),
      box-shadow var(--vox-transition-fast);
  }

  .control:focus {
    outline: none;
    border-color: var(--vox-color-brand-1);
    box-shadow: 0 0 0 3px var(--vox-color-brand-soft);
  }

  /* Corner flattening when placed inside a <vox-input-group>. */
  :host([data-vox-group]) .control {
    border-radius: 0;
  }

  :host([data-vox-group='start']) .control {
    border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
  }

  :host([data-vox-group='end']) .control {
    border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
  }
`,Yt=c`
  :host {
    display: block;
    font-family: var(--vox-font-family-base);
  }

  :host([disabled]) {
    opacity: 0.6;
    pointer-events: none;
  }

  .check {
    display: inline-flex;
    align-items: flex-start;
    gap: var(--vox-space-2);
    cursor: pointer;
    font-size: 14px;
    line-height: 1.5;
    color: var(--vox-color-text-1);
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    margin: 0;
  }
`;var No=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,vt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Ro(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&No(e,o,t),t};let te=class extends b{constructor(){super(...arguments),this.checked=!1,this.value="on"}formResetCallback(){this.checked=!1}updated(){this.internals.setFormValue(this.checked?this.value:null),this.internals.setValidity(this.required&&!this.checked?{valueMissing:!0}:{},"Please check this box.",this.renderRoot.querySelector("input")??void 0)}handleChange(s){this.checked=s.target.checked,this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <label class="check">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="box" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            <path d="m4 12 5 5L20 6" />
          </svg>
        </span>
        <span class="text"><slot></slot></span>
      </label>
    `}};te.styles=[Yt,c`
      .box {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        margin-top: 2px;
        border: 1px solid var(--vox-color-border);
        border-radius: var(--vox-radius-sm);
        background-color: var(--vox-color-bg);
        color: var(--vox-color-text-inverse);
        transition:
          background-color var(--vox-transition-fast),
          border-color var(--vox-transition-fast);
      }

      .box svg {
        width: 12px;
        height: 12px;
        opacity: 0;
      }

      input:checked + .box {
        background-color: var(--vox-color-brand-3);
        border-color: var(--vox-color-brand-3);
      }

      input:checked + .box svg {
        opacity: 1;
      }

      input:focus-visible + .box {
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: 2px;
      }
    `];vt([n({type:Boolean,reflect:!0})],te.prototype,"checked",2);vt([n()],te.prototype,"value",2);te=vt([p("vox-checkbox")],te);var Bo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,W=(s,e,o,r)=>{for(var t=r>1?void 0:r?Uo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Bo(e,o,t),t};let A=class extends b{constructor(){super(...arguments),this.multiple=!1,this.buttonLabel="Choose a file",this.fileNames=[]}formResetCallback(){this.fileNames=[],this.inputEl&&(this.inputEl.value=""),this.internals.setFormValue(null)}handleChange(){const s=[...this.inputEl.files??[]];this.fileNames=s.map(o=>o.name);const e=new FormData;for(const o of s)e.append(this.name,o);this.internals.setFormValue(s.length>0?e:null),this.internals.setValidity(this.required&&s.length===0?{valueMissing:!0}:{},"Please select a file.",this.inputEl),this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <div class="field">
        ${this.renderLabel("file")}
        <label>
          <input
            id="file"
            type="file"
            accept=${H(this.accept)}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="picker">
            <span class="button">${this.buttonLabel}</span>
            <span class="names">
              ${this.fileNames.length>0?this.fileNames.join(", "):"No file selected"}
            </span>
          </span>
        </label>
        ${this.renderNote()}
      </div>
    `}};A.styles=[we,c`
      input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
      }

      .picker {
        display: flex;
        align-items: center;
        gap: var(--vox-space-3);
        flex-wrap: wrap;
      }

      .button {
        display: inline-flex;
        align-items: center;
        padding: 0 var(--vox-space-4);
        height: 34px;
        background-color: var(--vox-color-bg-soft);
        border: 1px dashed var(--vox-color-border);
        border-radius: var(--vox-radius-md);
        color: var(--vox-color-text-1);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition:
          border-color var(--vox-transition-fast),
          color var(--vox-transition-fast);
      }

      .button:hover {
        border-color: var(--vox-color-brand-1);
        color: var(--vox-color-brand-1);
      }

      input:focus-visible ~ .picker .button {
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: 2px;
      }

      .names {
        font-size: 13px;
        color: var(--vox-color-text-2);
      }
    `];W([n()],A.prototype,"accept",2);W([n({type:Boolean})],A.prototype,"multiple",2);W([n({attribute:"button-label"})],A.prototype,"buttonLabel",2);W([_o()],A.prototype,"fileNames",2);W([pt("input")],A.prototype,"inputEl",2);A=W([p("vox-file-input")],A);var Mo=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,X=(s,e,o,r)=>{for(var t=r>1?void 0:r?Lo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Mo(e,o,t),t};let O=class extends b{constructor(){super(...arguments),this.type="text",this.value="",this.readonly=!1}formResetCallback(){this.value=""}updated(){this.internals.setFormValue(this.value);const s=this.renderRoot.querySelector("input");s&&this.syncValidity(s)}focus(s){var e;(e=this.renderRoot.querySelector("input"))==null||e.focus(s)}handleInput(s){this.value=s.target.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <div class="field">
        ${this.renderLabel("input")}
        <input
          id="input"
          class="control"
          type=${this.type}
          .value=${Xt(this.value)}
          placeholder=${H(this.placeholder)}
          autocomplete=${H(this.autocomplete)}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          aria-label=${this.label?u:"text input"}
          @input=${this.handleInput}
          @change=${this.handleChange}
        />
        ${this.renderNote()}
      </div>
    `}};O.styles=we;X([n()],O.prototype,"type",2);X([n()],O.prototype,"value",2);X([n()],O.prototype,"placeholder",2);X([n()],O.prototype,"autocomplete",2);X([n({type:Boolean,reflect:!0})],O.prototype,"readonly",2);O=X([p("vox-input")],O);var qo=(s,e,o,r)=>{for(var t=e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=i(t)||t);return t};let Qe=class extends h{handleSlotChange(s){const e=s.target.assignedElements();e.forEach((o,r)=>{const t=r===0?"start":r===e.length-1?"end":"middle";o.setAttribute("data-vox-group",t)})}render(){return l`
      <div class="group" role="group">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Qe.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .group {
      display: flex;
      align-items: stretch;
    }

    ::slotted(*) {
      flex: none;
    }

    ::slotted(vox-input),
    ::slotted(vox-select) {
      flex: 1 1 auto;
      min-width: 0;
    }

    ::slotted(span) {
      display: inline-flex;
      align-items: center;
      padding: 0 var(--vox-space-3);
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-border);
      color: var(--vox-color-text-2);
      font-size: 14px;
      white-space: nowrap;
    }

    ::slotted(span[data-vox-group='start']) {
      border-radius: var(--vox-radius-md) 0 0 var(--vox-radius-md);
      border-right: none;
    }

    ::slotted(span[data-vox-group='end']) {
      border-radius: 0 var(--vox-radius-md) var(--vox-radius-md) 0;
      border-left: none;
    }
  `;Qe=qo([p("vox-input-group")],Qe);var Ho=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,Ie=(s,e,o,r)=>{for(var t=r>1?void 0:r?Io(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Ho(e,o,t),t};let I=class extends h{constructor(){super(...arguments),this.value="",this.checked=!1,this.disabled=!1}select(){this.disabled||this.dispatchEvent(new CustomEvent("vox-radio-select",{bubbles:!0,composed:!0}))}handleKeydown(s){(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this.select())}render(){return l`
      <span
        class="radio"
        role="radio"
        aria-checked=${this.checked?"true":"false"}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.checked?"0":"-1"}
        @click=${this.select}
        @keydown=${this.handleKeydown}
      >
        <span class="circle" aria-hidden="true"></span>
        <span class="text"><slot></slot></span>
      </span>
    `}};I.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    .radio {
      display: inline-flex;
      align-items: flex-start;
      gap: var(--vox-space-2);
      cursor: pointer;
      font-size: 14px;
      line-height: 1.5;
      color: var(--vox-color-text-1);
    }

    .radio:focus {
      outline: none;
    }

    .circle {
      flex: none;
      box-sizing: border-box;
      width: 18px;
      height: 18px;
      margin-top: 2px;
      border: 1px solid var(--vox-color-border);
      border-radius: 50%;
      background-color: var(--vox-color-bg);
      transition:
        border-color var(--vox-transition-fast),
        box-shadow var(--vox-transition-fast);
    }

    :host([checked]) .circle {
      border-color: var(--vox-color-brand-3);
      border-width: 5px;
    }

    .radio:focus-visible .circle {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }
  `;Ie([n()],I.prototype,"value",2);Ie([n({type:Boolean,reflect:!0})],I.prototype,"checked",2);Ie([n({type:Boolean,reflect:!0})],I.prototype,"disabled",2);I=Ie([p("vox-radio")],I);var Vo=Object.defineProperty,Fo=Object.getOwnPropertyDescriptor,Jt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Fo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Vo(e,o,t),t};let De=class extends b{constructor(){super(...arguments),this.value=""}get radios(){return[...this.querySelectorAll("vox-radio")]}formResetCallback(){this.value=""}updated(){this.internals.setFormValue(this.value||null),this.internals.setValidity(this.required&&!this.value?{valueMissing:!0}:{},"Please select an option.",this),this.syncRadios()}syncRadios(){const s=this.radios,e=s.some(o=>o.value===this.value&&this.value!=="");s.forEach((o,r)=>{var t,a;o.checked=this.value!==""&&o.value===this.value;const i=e?o.checked:r===0;(a=(t=o.shadowRoot)==null?void 0:t.querySelector(".radio"))==null||a.setAttribute("tabindex",i?"0":"-1")})}handleSelect(s){const e=s.target;!(e instanceof HTMLElement)||e.tagName!=="VOX-RADIO"||(s.stopPropagation(),this.value!==e.value&&(this.value=e.value,this.dispatchEvent(new Event("change",{bubbles:!0}))))}handleKeydown(s){var e,o;const r={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[s.key];if(!r)return;s.preventDefault();const t=this.radios.filter(d=>!d.disabled);if(t.length===0)return;const a=t.findIndex(d=>d.checked),i=(Math.max(a,0)+r+t.length)%t.length,v=t[i];v.select(),(o=(e=v.shadowRoot)==null?void 0:e.querySelector(".radio"))==null||o.focus()}render(){return l`
      <div class="field" role="radiogroup" aria-label=${this.label}>
        ${this.label?l`<span class="label">
              ${this.label}${this.required?l`<span class="required-mark" aria-hidden="true"> *</span>`:""}
            </span>`:""}
        <div
          class="options"
          @vox-radio-select=${this.handleSelect}
          @keydown=${this.handleKeydown}
        >
          <slot @slotchange=${this.syncRadios}></slot>
        </div>
        ${this.renderNote()}
      </div>
    `}};De.styles=[we,c`
      .options {
        display: flex;
        flex-direction: column;
        gap: var(--vox-space-2);
        margin-top: var(--vox-space-1);
      }
    `];Jt([n()],De.prototype,"value",2);De=Jt([p("vox-radio-group")],De);var Ko=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,ut=(s,e,o,r)=>{for(var t=r>1?void 0:r?Wo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Ko(e,o,t),t};let oe=class extends b{constructor(){super(...arguments),this.value=""}formResetCallback(){this.value="",this.syncOptions()}updated(){this.internals.setFormValue(this.value),this.selectEl&&this.syncValidity(this.selectEl)}syncOptions(){if(!this.selectEl)return;const s=this.renderRoot.querySelector("slot");s&&(this.selectEl.replaceChildren(...s.assignedElements().filter(e=>e instanceof HTMLOptionElement||e instanceof HTMLOptGroupElement).map(e=>e.cloneNode(!0))),this.value&&(this.selectEl.value=this.value),this.value=this.selectEl.value)}handleChange(){this.value=this.selectEl.value,this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <div class="field">
        ${this.renderLabel("select")}
        <select
          id="select"
          class="control"
          ?required=${this.required}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        ></select>
        ${this.renderNote()}
      </div>
      <div hidden><slot @slotchange=${this.syncOptions}></slot></div>
    `}};oe.styles=[we,c`
      select.control {
        appearance: none;
        padding-right: var(--vox-space-8);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right var(--vox-space-3) center;
        cursor: pointer;
      }
    `];ut([n()],oe.prototype,"value",2);ut([pt("select")],oe.prototype,"selectEl",2);oe=ut([p("vox-select")],oe);var Xo=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,xt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Zo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Xo(e,o,t),t};let re=class extends b{constructor(){super(...arguments),this.checked=!1,this.value="on"}formResetCallback(){this.checked=!1}updated(){this.internals.setFormValue(this.checked?this.value:null)}handleChange(s){this.checked=s.target.checked,this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <label class="check">
        <input
          type="checkbox"
          role="switch"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="track" aria-hidden="true"></span>
        <span class="text"><slot></slot></span>
      </label>
    `}};re.styles=[Yt,c`
      .track {
        flex: none;
        position: relative;
        width: 36px;
        height: 20px;
        margin-top: 1px;
        border-radius: var(--vox-radius-full);
        background-color: var(--vox-color-border);
        transition: background-color var(--vox-transition-fast);
      }

      .track::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--vox-color-bg);
        transition: transform var(--vox-transition-fast);
      }

      input:checked + .track {
        background-color: var(--vox-color-brand-3);
      }

      input:checked + .track::after {
        transform: translateX(16px);
      }

      input:focus-visible + .track {
        outline: 2px solid var(--vox-color-brand-1);
        outline-offset: 2px;
      }
    `];xt([n({type:Boolean,reflect:!0})],re.prototype,"checked",2);xt([n()],re.prototype,"value",2);re=xt([p("vox-switch")],re);var Yo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,ke=(s,e,o,r)=>{for(var t=r>1?void 0:r?Jo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Yo(e,o,t),t};let T=class extends b{constructor(){super(...arguments),this.value="",this.rows=4,this.readonly=!1}formResetCallback(){this.value=""}updated(){this.internals.setFormValue(this.value);const s=this.renderRoot.querySelector("textarea");s&&this.syncValidity(s)}focus(s){var e;(e=this.renderRoot.querySelector("textarea"))==null||e.focus(s)}handleInput(s){this.value=s.target.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0}))}render(){return l`
      <div class="field">
        ${this.renderLabel("textarea")}
        <textarea
          id="textarea"
          class="control"
          rows=${this.rows}
          .value=${Xt(this.value)}
          placeholder=${H(this.placeholder)}
          ?required=${this.required}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
          @change=${this.handleChange}
        ></textarea>
        ${this.renderNote()}
      </div>
    `}};T.styles=[we,c`
      textarea.control {
        resize: vertical;
        min-height: 4em;
      }
    `];ke([n()],T.prototype,"value",2);ke([n()],T.prototype,"placeholder",2);ke([n({type:Number})],T.prototype,"rows",2);ke([n({type:Boolean,reflect:!0})],T.prototype,"readonly",2);T=ke([p("vox-textarea")],T);var Go=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,_e=(s,e,o,r)=>{for(var t=r>1?void 0:r?Qo(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Go(e,o,t),t};let D=class extends h{constructor(){super(...arguments),this.alt="",this.initials="",this.size="md"}render(){return l`
      <span class="avatar" role=${this.src?"presentation":"img"} aria-label=${this.alt}>
        ${this.src?l`<img src=${this.src} alt=${this.alt} />`:this.initials}
      </span>
    `}};D.styles=c`
    :host {
      display: inline-block;
    }

    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 50%;
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      font-family: var(--vox-font-family-base);
      font-weight: 600;
      user-select: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    :host([size='sm']) .avatar {
      width: 28px;
      height: 28px;
      font-size: 11px;
    }

    :host([size='md']) .avatar {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }

    :host([size='lg']) .avatar {
      width: 56px;
      height: 56px;
      font-size: 20px;
    }

    :host([size='xl']) .avatar {
      width: 80px;
      height: 80px;
      font-size: 28px;
    }
  `;_e([n()],D.prototype,"src",2);_e([n()],D.prototype,"alt",2);_e([n()],D.prototype,"initials",2);_e([n({reflect:!0})],D.prototype,"size",2);D=_e([p("vox-avatar")],D);var er=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,gt=(s,e,o,r)=>{for(var t=r>1?void 0:r?tr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&er(e,o,t),t};let se=class extends h{constructor(){super(...arguments),this.heading="",this.reverse=!1,this.hasActions=!1}handleActionsSlotChange(s){const e=s.target;this.hasActions=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return l`
      <div class="billboard">
        <div class="media"><slot name="media"></slot></div>
        <div class="content">
          <h2 class="heading">${this.heading}</h2>
          <div class="body"><slot></slot></div>
          <div class="actions ${this.hasActions?"has-content":""}">
            <slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};se.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .billboard {
      display: flex;
      gap: var(--vox-space-8);
      align-items: center;
      flex-wrap: wrap;
      padding: var(--vox-space-8);
      background-color: var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
    }

    :host([reverse]) .billboard {
      flex-direction: row-reverse;
    }

    .media {
      flex: 1 1 280px;
      min-width: 0;
    }

    .media ::slotted(img) {
      display: block;
      max-width: 100%;
      border-radius: var(--vox-radius-md);
    }

    .content {
      flex: 1 1 320px;
      min-width: 0;
    }

    .heading {
      margin: 0 0 var(--vox-space-3);
      font-size: 28px;
      font-weight: 700;
      line-height: 1.3;
      color: var(--vox-color-text-1);
    }

    .body {
      font-size: 16px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      flex-wrap: wrap;
      margin-top: var(--vox-space-6);
    }

    .actions:not(.has-content) {
      display: none;
    }
  `;gt([n()],se.prototype,"heading",2);gt([n({type:Boolean,reflect:!0})],se.prototype,"reverse",2);se=gt([p("vox-billboard")],se);var or=(s,e,o,r)=>{for(var t=e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=i(t)||t);return t};let et=class extends h{render(){return l`
      <nav aria-label="Breadcrumbs">
        <slot></slot>
      </nav>
    `}};et.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 13px;
    }

    ::slotted(*) {
      color: var(--vox-color-text-2);
      text-decoration: none;
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }

    ::slotted([aria-current='page']) {
      color: var(--vox-color-text-1);
      font-weight: 600;
    }

    ::slotted(*:not(:first-child))::before {
      content: '/';
      margin: 0 var(--vox-space-2);
      color: var(--vox-color-text-3);
    }
  `;et=or([p("vox-breadcrumbs")],et);var rr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,ft=(s,e,o,r)=>{for(var t=r>1?void 0:r?sr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&rr(e,o,t),t};let ae=class extends h{constructor(){super(...arguments),this.siteTitle="",this.href="/"}render(){return l`
      <header class="header">
        <a class="brand" href=${this.href}>
          <slot name="logo"></slot>
          ${this.siteTitle?l`<span>${this.siteTitle}</span>`:u}
        </a>
        <nav aria-label="Main">
          <slot></slot>
        </nav>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
      </header>
    `}};ae.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
      background-color: var(--vox-color-bg);
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--vox-space-6);
      flex-wrap: wrap;
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--vox-space-3) var(--vox-space-6);
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      color: var(--vox-color-text-1);
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
    }

    .brand ::slotted(img),
    .brand ::slotted(svg) {
      height: 28px;
      width: auto;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--vox-space-4);
      flex-wrap: wrap;
      flex: 1 1 auto;
    }

    nav ::slotted(a) {
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: color var(--vox-transition-fast);
    }

    nav ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
    }

    nav ::slotted(a[aria-current='page']) {
      color: var(--vox-color-brand-1);
      font-weight: 600;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: var(--vox-space-3);
    }
  `;ft([n({attribute:"site-title"})],ae.prototype,"siteTitle",2);ft([n()],ae.prototype,"href",2);ae=ft([p("vox-header")],ae);var ar=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,Ae=(s,e,o,r)=>{for(var t=r>1?void 0:r?ir(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&ar(e,o,t),t};let N=class extends h{constructor(){super(...arguments),this.previousLabel="",this.nextLabel=""}render(){return l`
      <nav aria-label="Series">
        ${this.previousHref?l`
              <a href=${this.previousHref} rel="prev">
                <span class="direction">← Previous</span>
                <span class="title">${this.previousLabel}</span>
              </a>
            `:u}
        ${this.nextHref?l`
              <a class="next" href=${this.nextHref} rel="next">
                <span class="direction">Next →</span>
                <span class="title">${this.nextLabel}</span>
              </a>
            `:u}
      </nav>
    `}};N.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      justify-content: space-between;
      gap: var(--vox-space-4);
    }

    a {
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 0 1 48%;
      padding: var(--vox-space-3) var(--vox-space-4);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    a:hover,
    a:focus-visible {
      border-color: var(--vox-color-brand-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .next {
      margin-left: auto;
      text-align: right;
    }

    .direction {
      font-size: 12px;
      color: var(--vox-color-text-3);
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: var(--vox-color-brand-1);
    }
  `;Ae([n({attribute:"previous-href"})],N.prototype,"previousHref",2);Ae([n({attribute:"previous-label"})],N.prototype,"previousLabel",2);Ae([n({attribute:"next-href"})],N.prototype,"nextHref",2);Ae([n({attribute:"next-label"})],N.prototype,"nextLabel",2);N=Ae([p("vox-series-nav")],N);var nr=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,E=(s,e,o,r)=>{for(var t=r>1?void 0:r?lr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&nr(e,o,t),t};let Ne=class extends h{constructor(){super(...arguments),this.label="Section"}render(){return l`
      <nav aria-label=${this.label}>
        <slot></slot>
      </nav>
    `}};Ne.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  `;E([n()],Ne.prototype,"label",2);Ne=E([p("vox-sidenav")],Ne);let ie=class extends h{constructor(){super(...arguments),this.heading="",this.open=!1}toggle(){this.open=!this.open}render(){return l`
      <button
        class="trigger"
        aria-expanded=${this.open?"true":"false"}
        @click=${this.toggle}
      >
        ${this.heading}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>
      <div class="items"><slot></slot></div>
    `}};ie.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-2);
      width: 100%;
      padding: var(--vox-space-2) var(--vox-space-3);
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    .chevron {
      flex: none;
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(90deg);
    }

    .items {
      display: none;
      flex-direction: column;
      gap: 2px;
      padding-left: var(--vox-space-3);
      border-left: 1px solid var(--vox-color-divider);
      margin-left: var(--vox-space-3);
    }

    :host([open]) .items {
      display: flex;
    }
  `;E([n()],ie.prototype,"heading",2);E([n({type:Boolean,reflect:!0})],ie.prototype,"open",2);ie=E([p("vox-sidenav-group")],ie);let ne=class extends h{constructor(){super(...arguments),this.href="#",this.current=!1}render(){return l`
      <a href=${this.href} aria-current=${this.current?"page":"false"}>
        <slot></slot>
      </a>
    `}};ne.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: block;
      padding: var(--vox-space-2) var(--vox-space-3);
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      font-size: 14px;
      text-decoration: none;
      transition:
        color var(--vox-transition-fast),
        background-color var(--vox-transition-fast);
    }

    a:hover {
      color: var(--vox-color-text-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    :host([current]) a {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      font-weight: 600;
    }
  `;E([n()],ne.prototype,"href",2);E([n({type:Boolean,reflect:!0})],ne.prototype,"current",2);ne=E([p("vox-sidenav-item")],ne);var dr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,Gt=(s,e,o,r)=>{for(var t=r>1?void 0:r?cr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&dr(e,o,t),t};let Re=class extends h{constructor(){super(...arguments),this.label="Secondary"}render(){return l`
      <nav aria-label=${this.label}>
        <slot></slot>
      </nav>
    `}};Re.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      gap: var(--vox-space-1);
      overflow-x: auto;
      border-bottom: 1px solid var(--vox-color-divider);
    }

    ::slotted(a) {
      padding: var(--vox-space-2) var(--vox-space-4);
      margin-bottom: -1px;
      border-bottom: 2px solid transparent;
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      white-space: nowrap;
      transition: color var(--vox-transition-fast);
    }

    ::slotted(a:hover) {
      color: var(--vox-color-text-1);
    }

    ::slotted(a[aria-current='page']) {
      color: var(--vox-color-brand-1);
      font-weight: 600;
      border-bottom-color: var(--vox-color-brand-1);
    }
  `;Gt([n()],Re.prototype,"label",2);Re=Gt([p("vox-subnav")],Re);var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,M=(s,e,o,r)=>{for(var t=r>1?void 0:r?hr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&pr(e,o,t),t};let tt=class extends h{get tabs(){return[...this.querySelectorAll("vox-tab")]}get panels(){return[...this.querySelectorAll("vox-tab-panel")]}sync(){const s=this.tabs;s.length>0&&!s.some(o=>o.selected)&&(s[0].selected=!0);const e=s.find(o=>o.selected);this.panels.forEach(o=>{o.active=o.name===(e==null?void 0:e.panel)})}handleSelect(s){const e=s.target;e.tagName==="VOX-TAB"&&(this.tabs.forEach(o=>o.selected=o===e),this.sync(),this.dispatchEvent(new CustomEvent("vox-tab-change",{detail:{panel:e.panel},bubbles:!0,composed:!0})))}handleKeydown(s){const e={ArrowRight:1,ArrowLeft:-1}[s.key];if(!e)return;s.preventDefault();const o=this.tabs,r=o.findIndex(a=>a.selected),t=o[(r+e+o.length)%o.length];t.select(),t.focusTab()}render(){return l`
      <div
        class="tablist"
        role="tablist"
        @vox-tab-select=${this.handleSelect}
        @keydown=${this.handleKeydown}
      >
        <slot name="tab" @slotchange=${this.sync}></slot>
      </div>
      <slot @slotchange=${this.sync}></slot>
    `}};tt.styles=c`
    :host {
      display: block;
    }

    .tablist {
      display: flex;
      gap: var(--vox-space-1);
      border-bottom: 1px solid var(--vox-color-divider);
    }
  `;tt=M([p("vox-tabs")],tt);let le=class extends h{constructor(){super(...arguments),this.panel="",this.selected=!1}select(){this.dispatchEvent(new CustomEvent("vox-tab-select",{bubbles:!0,composed:!0}))}focusTab(){var s;(s=this.renderRoot.querySelector(".tab"))==null||s.focus()}render(){return l`
      <button
        class="tab"
        role="tab"
        aria-selected=${this.selected?"true":"false"}
        tabindex=${this.selected?"0":"-1"}
        @click=${this.select}
      >
        <slot></slot>
      </button>
    `}};le.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .tab {
      padding: var(--vox-space-2) var(--vox-space-4);
      margin-bottom: -1px;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--vox-color-text-2);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: color var(--vox-transition-fast);
    }

    .tab:hover {
      color: var(--vox-color-text-1);
    }

    .tab:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
      border-radius: var(--vox-radius-sm);
    }

    :host([selected]) .tab {
      color: var(--vox-color-brand-1);
      border-bottom-color: var(--vox-color-brand-1);
    }
  `;M([n()],le.prototype,"panel",2);M([n({type:Boolean,reflect:!0})],le.prototype,"selected",2);le=M([p("vox-tab")],le);let de=class extends h{constructor(){super(...arguments),this.name="",this.active=!1}render(){return l`<div role="tabpanel"><slot></slot></div>`}};de.styles=c`
    :host {
      display: none;
      font-family: var(--vox-font-family-base);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
      padding: var(--vox-space-4) 0;
    }

    :host([active]) {
      display: block;
    }
  `;M([n()],de.prototype,"name",2);M([n({type:Boolean,reflect:!0})],de.prototype,"active",2);de=M([p("vox-tab-panel")],de);var vr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,Oe=(s,e,o,r)=>{for(var t=r>1?void 0:r?ur(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&vr(e,o,t),t};let R=class extends h{constructor(){super(...arguments),this.heading="",this.open=!1,this.lightDismiss=!1,this.hasFooter=!1}show(){this.open=!0}close(){this.open=!1}updated(){this.open&&!this.dialogEl.open?this.dialogEl.showModal():!this.open&&this.dialogEl.open&&this.dialogEl.close()}handleNativeClose(){this.open=!1,this.dispatchEvent(new CustomEvent("vox-close",{bubbles:!0,composed:!0}))}handleClick(s){this.lightDismiss&&s.target===this.dialogEl&&this.close()}handleFooterSlotChange(s){const e=s.target;this.hasFooter=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return l`
      <dialog
        aria-label=${this.heading||u}
        @close=${this.handleNativeClose}
        @click=${this.handleClick}
      >
        <div class="header">
          <h2 class="heading">${this.heading}</h2>
          <button class="close" aria-label="Close dialog" @click=${this.close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="body"><slot></slot></div>
        <div class="footer ${this.hasFooter?"has-content":""}">
          <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
        </div>
      </dialog>
    `}};R.styles=c`
    dialog {
      box-sizing: border-box;
      width: min(90vw, 480px);
      padding: 0;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-lg);
      background-color: var(--vox-color-bg-elv);
      color: var(--vox-color-text-1);
      font-family: var(--vox-font-family-base);
      box-shadow: var(--vox-shadow-2);
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.5);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-3);
      padding: var(--vox-space-4) var(--vox-space-6);
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .heading {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      cursor: pointer;
    }

    .close:hover {
      color: var(--vox-color-text-1);
      background-color: var(--vox-color-bg-soft);
    }

    .close:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
    }

    .close svg {
      width: 16px;
      height: 16px;
    }

    .body {
      padding: var(--vox-space-6);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--vox-space-3);
      padding: var(--vox-space-4) var(--vox-space-6);
      border-top: 1px solid var(--vox-color-divider);
    }

    .footer:not(.has-content) {
      display: none;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;Oe([n()],R.prototype,"heading",2);Oe([n({type:Boolean})],R.prototype,"open",2);Oe([n({type:Boolean,attribute:"light-dismiss"})],R.prototype,"lightDismiss",2);Oe([pt("dialog")],R.prototype,"dialogEl",2);R=Oe([p("vox-dialog")],R);var xr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,bt=(s,e,o,r)=>{for(var t=r>1?void 0:r?gr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&xr(e,o,t),t};let ce=class extends h{constructor(){super(...arguments),this.summary="Show details",this.open=!1}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("vox-toggle",{bubbles:!0,composed:!0}))}render(){return l`
      <button
        class="trigger"
        aria-expanded=${this.open?"true":"false"}
        @click=${this.toggle}
      >
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
        ${this.summary}
      </button>
      <div class="panel" ?hidden=${!this.open}>
        <slot></slot>
      </div>
    `}};ce.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      padding: 0;
      background: none;
      border: none;
      color: var(--vox-color-brand-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-2);
      text-decoration: underline;
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
      border-radius: var(--vox-radius-sm);
    }

    .chevron {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(90deg);
    }

    .panel {
      margin-top: var(--vox-space-3);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .panel[hidden] {
      display: none;
    }
  `;bt([n()],ce.prototype,"summary",2);bt([n({type:Boolean,reflect:!0})],ce.prototype,"open",2);ce=bt([p("vox-disclosure")],ce);var fr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,yt=(s,e,o,r)=>{for(var t=r>1?void 0:r?br(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&fr(e,o,t),t};let pe=class extends h{constructor(){super(...arguments),this.label="Menu",this.open=!1,this.handleOutsideClick=s=>{this.open&&!s.composedPath().includes(this)&&(this.open=!1)},this.handleKeydown=s=>{var e;if(s.key==="Escape"&&this.open){this.open=!1,(e=this.renderRoot.querySelector(".trigger"))==null||e.focus();return}if((s.key==="ArrowDown"||s.key==="ArrowUp")&&this.open){s.preventDefault();const o=[...this.querySelectorAll("a, button")];if(o.length===0)return;const r=document.activeElement,t=o.indexOf(r),a=s.key==="ArrowDown"?1:-1;o[(Math.max(t,0)+a+o.length)%o.length].focus()}}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleOutsideClick),this.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleOutsideClick),this.removeEventListener("keydown",this.handleKeydown)}toggle(){this.open=!this.open}render(){return l`
      <button
        class="trigger"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="true"
        @click=${this.toggle}
      >
        ${this.label}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div class="menu">
        <slot @click=${()=>this.open=!1}></slot>
      </div>
    `}};pe.styles=c`
    :host {
      position: relative;
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--vox-space-2);
      padding: 0 var(--vox-space-4);
      height: 38px;
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition:
        border-color var(--vox-transition-fast),
        color var(--vox-transition-fast);
    }

    .trigger:hover {
      border-color: var(--vox-color-brand-1);
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .chevron {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .menu {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      min-width: max(100%, 180px);
      display: none;
      flex-direction: column;
      padding: var(--vox-space-2);
      background-color: var(--vox-color-bg-elv);
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      box-shadow: var(--vox-shadow-2);
    }

    :host([open]) .menu {
      display: flex;
    }

    ::slotted(a),
    ::slotted(button) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: var(--vox-space-2) var(--vox-space-3);
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 14px;
      text-align: left;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
    }

    ::slotted(a:hover),
    ::slotted(button:hover),
    ::slotted(a:focus-visible),
    ::slotted(button:focus-visible) {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
      outline: none;
    }

    ::slotted(hr) {
      width: 100%;
      margin: var(--vox-space-1) 0;
      border: none;
      border-top: 1px solid var(--vox-color-divider);
    }
  `;yt([n()],pe.prototype,"label",2);yt([n({type:Boolean,reflect:!0})],pe.prototype,"open",2);pe=yt([p("vox-dropdown")],pe);var yr=Object.defineProperty,mr=Object.getOwnPropertyDescriptor,Ee=(s,e,o,r)=>{for(var t=r>1?void 0:r?mr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&yr(e,o,t),t};let Be=class extends h{constructor(){super(...arguments),this.single=!1}handleToggle(s){if(!this.single)return;const e=s.target;e.open&&this.querySelectorAll("vox-accordion-item").forEach(o=>{o!==e&&(o.open=!1)})}render(){return l`<slot @vox-toggle=${this.handleToggle}></slot>`}};Be.styles=c`
    :host {
      display: block;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      overflow: hidden;
    }

    ::slotted(vox-accordion-item:not(:first-child)) {
      border-top: 1px solid var(--vox-color-divider);
    }
  `;Ee([n({type:Boolean})],Be.prototype,"single",2);Be=Ee([p("vox-accordion")],Be);let he=class extends h{constructor(){super(...arguments),this.heading="",this.open=!1}toggle(){this.open=!this.open,this.dispatchEvent(new CustomEvent("vox-toggle",{bubbles:!0,composed:!0}))}render(){return l`
      <h3 style="margin:0">
        <button
          class="trigger"
          aria-expanded=${this.open?"true":"false"}
          @click=${this.toggle}
        >
          ${this.heading}
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div class="panel" ?hidden=${!this.open}>
        <slot></slot>
      </div>
    `}};he.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--vox-space-3);
      width: 100%;
      padding: var(--vox-space-4);
      background: none;
      border: none;
      color: var(--vox-color-text-1);
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
    }

    .trigger:hover {
      color: var(--vox-color-brand-1);
    }

    .trigger:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: -2px;
    }

    .chevron {
      flex: none;
      width: 16px;
      height: 16px;
      transition: transform var(--vox-transition-fast);
    }

    :host([open]) .chevron {
      transform: rotate(180deg);
    }

    .panel {
      padding: 0 var(--vox-space-4) var(--vox-space-4);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .panel[hidden] {
      display: none;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;Ee([n()],he.prototype,"heading",2);Ee([n({type:Boolean,reflect:!0})],he.prototype,"open",2);he=Ee([p("vox-accordion-item")],he);var $r=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Pe=(s,e,o,r)=>{for(var t=r>1?void 0:r?wr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&$r(e,o,t),t};let B=class extends h{constructor(){super(...arguments),this.variant="info",this.heading="",this.dismissible=!1,this.open=!0}dismiss(){this.open=!1,this.dispatchEvent(new CustomEvent("vox-dismiss",{bubbles:!0,composed:!0}))}render(){return l`
      <div class="alert ${this.variant}" role="alert">
        <div class="body">
          ${this.heading?l`<p class="heading">${this.heading}</p>`:u}
          <slot></slot>
        </div>
        ${this.dismissible?l`
              <button class="close" aria-label="Dismiss" @click=${this.dismiss}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            `:u}
      </div>
    `}};B.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    :host(:not([open])) {
      display: none;
    }

    .alert {
      display: flex;
      gap: var(--vox-space-3);
      align-items: flex-start;
      padding: var(--vox-space-4);
      border-radius: var(--vox-radius-md);
      border-left: 4px solid;
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-1);
    }

    .body {
      flex: 1 1 auto;
    }

    .heading {
      margin: 0 0 var(--vox-space-1);
      font-size: 14px;
      font-weight: 600;
    }

    .info {
      background-color: var(--vox-color-brand-soft);
      border-color: var(--vox-color-brand-1);
    }
    .info .heading {
      color: var(--vox-color-brand-1);
    }

    .success {
      background-color: var(--vox-color-tip-soft);
      border-color: var(--vox-color-tip-1);
    }
    .success .heading {
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
      border-color: var(--vox-color-warning-1);
    }
    .warning .heading {
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
      border-color: var(--vox-color-danger-1);
    }
    .danger .heading {
      color: var(--vox-color-danger-1);
    }

    .close {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      background: none;
      border: none;
      border-radius: var(--vox-radius-sm);
      color: var(--vox-color-text-2);
      cursor: pointer;
    }

    .close:hover {
      color: var(--vox-color-text-1);
    }

    .close:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
    }

    .close svg {
      width: 14px;
      height: 14px;
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;Pe([n()],B.prototype,"variant",2);Pe([n()],B.prototype,"heading",2);Pe([n({type:Boolean})],B.prototype,"dismissible",2);Pe([n({type:Boolean,reflect:!0})],B.prototype,"open",2);B=Pe([p("vox-alert")],B);var kr=Object.defineProperty,_r=Object.getOwnPropertyDescriptor,Qt=(s,e,o,r)=>{for(var t=r>1?void 0:r?_r(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&kr(e,o,t),t};let Ue=class extends h{constructor(){super(...arguments),this.variant="brand"}render(){return l`<span class="badge ${this.variant}"><slot></slot></span>`}};Ue.styles=c`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: var(--vox-radius-full);
      font-family: var(--vox-font-family-base);
      font-size: 12px;
      font-weight: 600;
      line-height: 1.6;
      white-space: nowrap;
    }

    .brand {
      background-color: var(--vox-color-brand-soft);
      color: var(--vox-color-brand-1);
    }

    .tip {
      background-color: var(--vox-color-tip-soft);
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
      color: var(--vox-color-danger-1);
    }

    .neutral {
      background-color: var(--vox-color-bg-soft);
      color: var(--vox-color-text-2);
    }
  `;Qt([n()],Ue.prototype,"variant",2);Ue=Qt([p("vox-badge")],Ue);var Ar=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,mt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Or(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Ar(e,o,t),t};let ve=class extends h{constructor(){super(...arguments),this.date=""}render(){const s=new Date(`${this.date}T00:00:00`),e=!Number.isNaN(s.getTime()),o=e?s.toLocaleString(this.locale,{month:"short"}):"—",r=e?s.getDate():"–";return l`
      <time class="tile" datetime=${this.date}>
        <span class="month">${o}</span>
        <span class="day">${r}</span>
      </time>
    `}};ve.styles=c`
    :host {
      display: inline-block;
      font-family: var(--vox-font-family-base);
    }

    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 56px;
      border: 1px solid var(--vox-color-divider);
      border-radius: var(--vox-radius-md);
      overflow: hidden;
      background-color: var(--vox-color-bg-elv);
    }

    .month {
      align-self: stretch;
      padding: 2px var(--vox-space-2);
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
    }

    .day {
      padding: var(--vox-space-1) var(--vox-space-2);
      font-size: 24px;
      font-weight: 700;
      color: var(--vox-color-text-1);
    }
  `;mt([n()],ve.prototype,"date",2);mt([n()],ve.prototype,"locale",2);ve=mt([p("vox-calendar-tile")],ve);var Er=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,$t=(s,e,o,r)=>{for(var t=r>1?void 0:r?Pr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Er(e,o,t),t};const Cr={info:"Info",tip:"Tip",warning:"Warning",danger:"Danger"};let ue=class extends h{constructor(){super(...arguments),this.variant="info"}render(){return l`
      <div class="callout ${this.variant}" role="note">
        <p class="heading">${this.heading??Cr[this.variant]}</p>
        <slot></slot>
      </div>
    `}};ue.styles=c`
    :host {
      display: block;
    }

    .callout {
      border-radius: var(--vox-radius-md);
      padding: var(--vox-space-4);
      font-family: var(--vox-font-family-base);
      font-size: 14px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .heading {
      margin: 0 0 var(--vox-space-2);
      font-size: 14px;
      font-weight: 600;
    }

    .info {
      background-color: var(--vox-color-bg-soft);
    }
    .info .heading {
      color: var(--vox-color-text-1);
    }

    .tip {
      background-color: var(--vox-color-tip-soft);
    }
    .tip .heading {
      color: var(--vox-color-tip-1);
    }

    .warning {
      background-color: var(--vox-color-warning-soft);
    }
    .warning .heading {
      color: var(--vox-color-warning-1);
    }

    .danger {
      background-color: var(--vox-color-danger-soft);
    }
    .danger .heading {
      color: var(--vox-color-danger-1);
    }

    ::slotted(p:first-child) {
      margin-top: 0;
    }

    ::slotted(p:last-child) {
      margin-bottom: 0;
    }
  `;$t([n()],ue.prototype,"variant",2);$t([n()],ue.prototype,"heading",2);ue=$t([p("vox-callout")],ue);var Sr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Ve=(s,e,o,r)=>{for(var t=r>1?void 0:r?jr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Sr(e,o,t),t};let V=class extends h{constructor(){super(...arguments),this.heading="",this.hasIcon=!1,this.hasBadge=!1,this.hasFooter=!1}handleIconSlotChange(s){const e=s.target;this.hasIcon=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}handleBadgeSlotChange(s){const e=s.target;this.hasBadge=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}handleFooterSlotChange(s){const e=s.target;this.hasFooter=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){const s=l`
      <div class="badge ${this.hasBadge?"has-badge":""}">
        <slot name="badge" @slotchange=${this.handleBadgeSlotChange}></slot>
      </div>
      <div class="icon ${this.hasIcon?"has-icon":""}">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </div>
      <h3 class="heading">${this.heading}</h3>
      <div class="body"><slot></slot></div>
      <div class="footer ${this.hasFooter?"has-footer":""}">
        <slot name="footer" @slotchange=${this.handleFooterSlotChange}></slot>
      </div>
    `;return this.href!==void 0?l`<a class="card" href=${this.href} target=${this.target??u}>${s}</a>`:l`<div class="card">${s}</div>`}};V.styles=c`
    :host {
      display: block;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-sizing: border-box;
      background-color: var(--vox-color-bg-soft);
      border: 1px solid var(--vox-color-bg-soft);
      border-radius: var(--vox-radius-lg);
      padding: var(--vox-space-6);
      font-family: var(--vox-font-family-base);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    .badge {
      position: absolute;
      top: var(--vox-space-6);
      right: var(--vox-space-6);
    }

    .badge:not(.has-badge) {
      display: none;
    }

    a.card:hover,
    a.card:focus-visible {
      border-color: var(--vox-color-brand-1);
    }

    a.card:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-bottom: var(--vox-space-4);
      background-color: var(--vox-color-bg-elv);
      border-radius: var(--vox-radius-md);
      font-size: 24px;
    }

    .icon:not(.has-icon) {
      display: none;
    }

    .heading {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--vox-color-text-1);
    }

    .body {
      margin-top: var(--vox-space-2);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .footer {
      margin-top: auto;
      padding-top: var(--vox-space-4);
    }

    .footer:not(.has-footer) {
      display: none;
    }
  `;Ve([n()],V.prototype,"heading",2);Ve([n()],V.prototype,"href",2);Ve([n()],V.prototype,"target",2);V=Ve([p("vox-card")],V);var zr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,eo=(s,e,o,r)=>{for(var t=r>1?void 0:r?Tr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&zr(e,o,t),t};let Me=class extends h{constructor(){super(...arguments),this.heading=""}render(){return l`
      <div class="empty">
        <div class="icon"><slot name="icon"></slot></div>
        <h3 class="heading">${this.heading}</h3>
        <div class="body"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </div>
    `}};Me.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: var(--vox-space-8);
      border: 1px dashed var(--vox-color-border);
      border-radius: var(--vox-radius-lg);
    }

    .icon {
      font-size: 32px;
      margin-bottom: var(--vox-space-3);
    }

    .heading {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .body {
      max-width: 32rem;
      margin-top: var(--vox-space-2);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      flex-wrap: wrap;
      justify-content: center;
      margin-top: var(--vox-space-4);
    }
  `;eo([n()],Me.prototype,"heading",2);Me=eo([p("vox-empty-state")],Me);var Dr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,wt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Nr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Dr(e,o,t),t};let ot=class extends h{render(){return l`
      <footer>
        <div class="inner">
          <div class="columns"><slot></slot></div>
          <div class="bottom"><slot name="bottom"></slot></div>
        </div>
      </footer>
    `}};ot.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
      background-color: var(--vox-color-bg-alt);
      border-top: 1px solid var(--vox-color-divider);
    }

    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: var(--vox-space-8) var(--vox-space-6);
    }

    .columns {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: var(--vox-space-6);
    }

    .bottom {
      margin-top: var(--vox-space-8);
      padding-top: var(--vox-space-4);
      border-top: 1px solid var(--vox-color-divider);
      font-size: 13px;
      color: var(--vox-color-text-3);
    }
  `;ot=wt([p("vox-footer")],ot);let Le=class extends h{constructor(){super(...arguments),this.heading=""}render(){return l`
      <h3 class="heading">${this.heading}</h3>
      <div class="links"><slot></slot></div>
    `}};Le.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .heading {
      margin: 0 0 var(--vox-space-3);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-text-1);
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: var(--vox-space-2);
    }

    ::slotted(a) {
      color: var(--vox-color-text-2);
      font-size: 14px;
      text-decoration: none;
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }
  `;wt([n()],Le.prototype,"heading",2);Le=wt([p("vox-footer-column")],Le);var Rr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Fe=(s,e,o,r)=>{for(var t=r>1?void 0:r?Br(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Rr(e,o,t),t};let F=class extends h{constructor(){super(...arguments),this.cols=0,this.min="240px",this.gap="md"}updated(){this.style.gridTemplateColumns=this.cols>0?`repeat(${this.cols}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${this.min}, 100%), 1fr))`}render(){return l`<slot></slot>`}};F.styles=c`
    :host {
      display: grid;
    }

    :host([gap='sm']) {
      gap: var(--vox-space-2);
    }

    :host([gap='md']) {
      gap: var(--vox-space-4);
    }

    :host([gap='lg']) {
      gap: var(--vox-space-6);
    }
  `;Fe([n({type:Number})],F.prototype,"cols",2);Fe([n()],F.prototype,"min",2);Fe([n({reflect:!0})],F.prototype,"gap",2);F=Fe([p("vox-grid")],F);var Ur=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,kt=(s,e,o,r)=>{for(var t=r>1?void 0:r?Mr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Ur(e,o,t),t};let xe=class extends h{constructor(){super(...arguments),this.eyebrow="",this.heading="",this.hasActions=!1}handleActionsSlotChange(s){const e=s.target;this.hasActions=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return l`
      <header class="hero">
        ${this.eyebrow?l`<p class="eyebrow">${this.eyebrow}</p>`:u}
        <h1 class="heading">${this.heading}</h1>
        <div class="body"><slot></slot></div>
        <div class="actions ${this.hasActions?"has-content":""}">
          <slot name="actions" @slotchange=${this.handleActionsSlotChange}></slot>
        </div>
      </header>
    `}};xe.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .hero {
      padding: var(--vox-space-8) 0;
      border-bottom: 1px solid var(--vox-color-divider);
    }

    .eyebrow {
      margin: 0 0 var(--vox-space-2);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-brand-1);
    }

    .heading {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      line-height: 1.25;
      color: var(--vox-color-text-1);
    }

    .body {
      max-width: 44rem;
      margin-top: var(--vox-space-3);
      font-size: 17px;
      line-height: 1.7;
      color: var(--vox-color-text-2);
    }

    .body ::slotted(a) {
      color: var(--vox-color-brand-1);
      text-decoration: underline;
    }

    .body ::slotted(a:hover) {
      color: var(--vox-color-brand-2);
    }

    .actions {
      display: flex;
      gap: var(--vox-space-3);
      flex-wrap: wrap;
      margin-top: var(--vox-space-6);
    }

    .actions:not(.has-content) {
      display: none;
    }
  `;kt([n()],xe.prototype,"eyebrow",2);kt([n()],xe.prototype,"heading",2);xe=kt([p("vox-hero")],xe);var Lr=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,Ke=(s,e,o,r)=>{for(var t=r>1?void 0:r?qr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Lr(e,o,t),t};let rt=class extends h{render(){return l`<slot></slot>`}};rt.styles=c`
    :host {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
      gap: var(--vox-space-4);
    }
  `;rt=Ke([p("vox-link-hub")],rt);let ge=class extends h{constructor(){super(...arguments),this.href="#",this.heading=""}render(){return l`
      <a href=${this.href}>
        <span class="heading">
          ${this.heading}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </span>
        <span class="body"><slot></slot></span>
      </a>
    `}};ge.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    a {
      display: block;
      height: 100%;
      box-sizing: border-box;
      padding: var(--vox-space-4);
      border-bottom: 2px solid var(--vox-color-divider);
      text-decoration: none;
      transition: border-color var(--vox-transition-base);
    }

    a:hover,
    a:focus-visible {
      border-bottom-color: var(--vox-color-brand-1);
    }

    a:focus-visible {
      outline: 2px solid var(--vox-color-brand-1);
      outline-offset: 2px;
    }

    .heading {
      display: flex;
      align-items: center;
      gap: var(--vox-space-2);
      font-size: 16px;
      font-weight: 600;
      color: var(--vox-color-brand-1);
    }

    .heading svg {
      width: 14px;
      height: 14px;
      transition: transform var(--vox-transition-fast);
    }

    a:hover .heading svg {
      transform: translateX(3px);
    }

    .body {
      margin-top: var(--vox-space-1);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }
  `;Ke([n()],ge.prototype,"href",2);Ke([n()],ge.prototype,"heading",2);ge=Ke([p("vox-link-hub-item")],ge);var Hr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,_t=(s,e,o,r)=>{for(var t=r>1?void 0:r?Ir(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Hr(e,o,t),t};let fe=class extends h{constructor(){super(...arguments),this.size="md",this.label="Loading"}render(){return l`
      <div role="status">
        <div class="spinner"></div>
        <span class="visually-hidden">${this.label}</span>
      </div>
    `}};fe.styles=c`
    :host {
      display: inline-block;
    }

    .spinner {
      box-sizing: border-box;
      border-radius: 50%;
      border-style: solid;
      border-color: var(--vox-color-brand-soft);
      border-top-color: var(--vox-color-brand-3);
      animation: spin 0.8s linear infinite;
    }

    :host([size='sm']) .spinner {
      width: 16px;
      height: 16px;
      border-width: 2px;
    }

    :host([size='md']) .spinner {
      width: 28px;
      height: 28px;
      border-width: 3px;
    }

    :host([size='lg']) .spinner {
      width: 44px;
      height: 44px;
      border-width: 4px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation-duration: 2.4s;
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
  `;_t([n({reflect:!0})],fe.prototype,"size",2);_t([n()],fe.prototype,"label",2);fe=_t([p("vox-loader")],fe);var Vr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,to=(s,e,o,r)=>{for(var t=r>1?void 0:r?Fr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Vr(e,o,t),t};let qe=class extends h{constructor(){super(...arguments),this.label="Pagination"}render(){return l`
      <nav aria-label=${this.label}>
        <slot></slot>
      </nav>
    `}};qe.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    nav {
      display: flex;
      gap: var(--vox-space-1);
      flex-wrap: wrap;
    }

    ::slotted(a) {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 34px;
      height: 34px;
      padding: 0 var(--vox-space-2);
      border-radius: var(--vox-radius-md);
      color: var(--vox-color-text-2);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition:
        color var(--vox-transition-fast),
        background-color var(--vox-transition-fast);
    }

    ::slotted(a:hover) {
      color: var(--vox-color-brand-1);
      background-color: var(--vox-color-brand-soft);
    }

    ::slotted(a[aria-current='page']) {
      background-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
      font-weight: 600;
    }
  `;to([n()],qe.prototype,"label",2);qe=to([p("vox-pagination")],qe);var Kr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,At=(s,e,o,r)=>{for(var t=r>1?void 0:r?Wr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Kr(e,o,t),t};let be=class extends h{constructor(){super(...arguments),this.attribution="",this.detail=""}render(){return l`
      <blockquote>
        <div class="text"><slot></slot></div>
        ${this.attribution?l`
              <footer>
                <span class="attribution">${this.attribution}</span>
                ${this.detail?l`<span class="detail"> — ${this.detail}</span>`:u}
              </footer>
            `:u}
      </blockquote>
    `}};be.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    blockquote {
      margin: 0;
      padding-left: var(--vox-space-6);
      border-left: 4px solid var(--vox-color-brand-3);
    }

    .text {
      font-size: 18px;
      line-height: 1.6;
      color: var(--vox-color-text-1);
    }

    .text::before {
      content: '“';
    }

    .text::after {
      content: '”';
    }

    footer {
      margin-top: var(--vox-space-3);
      font-size: 14px;
    }

    .attribution {
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .detail {
      color: var(--vox-color-text-2);
    }
  `;At([n()],be.prototype,"attribution",2);At([n()],be.prototype,"detail",2);be=At([p("vox-quote")],be);var Xr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Ot=(s,e,o,r)=>{for(var t=r>1?void 0:r?Zr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Xr(e,o,t),t};let ye=class extends h{constructor(){super(...arguments),this.value="",this.label=""}render(){return l`
      <div class="value">${this.value}</div>
      <div class="label">${this.label}</div>
      <div class="description"><slot></slot></div>
    `}};ye.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .value {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.1;
      color: var(--vox-color-brand-1);
    }

    .label {
      margin-top: var(--vox-space-1);
      font-size: 14px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .description {
      margin-top: var(--vox-space-1);
      font-size: 13px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }
  `;Ot([n()],ye.prototype,"value",2);Ot([n()],ye.prototype,"label",2);ye=Ot([p("vox-stat")],ye);var Yr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ce=(s,e,o,r)=>{for(var t=r>1?void 0:r?Jr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Yr(e,o,t),t};let st=class extends h{numberSteps(){this.querySelectorAll("vox-step").forEach((s,e)=>{s.number=e+1})}render(){return l`
      <div class="steps" role="list" aria-label="Progress">
        <slot @slotchange=${this.numberSteps}></slot>
      </div>
    `}};st.styles=c`
    :host {
      display: block;
    }

    .steps {
      display: flex;
      align-items: flex-start;
    }

    ::slotted(vox-step) {
      flex: 1 1 0;
    }
  `;st=Ce([p("vox-step-indicator")],st);let K=class extends h{constructor(){super(...arguments),this.label="",this.state="upcoming",this.number=1}render(){return l`
      <div
        class="step"
        role="listitem"
        aria-current=${this.state==="current"?"step":"false"}
      >
        <span class="marker">
          ${this.state==="complete"?l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m4 12 5 5L20 6" />
              </svg>`:this.number}
        </span>
        <span class="label">${this.label}</span>
      </div>
    `}};K.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .step {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: var(--vox-space-2);
      padding: 0 var(--vox-space-2);
    }

    /* Connector line to the previous step. */
    :host(:not(:first-child)) .step::before {
      content: '';
      position: absolute;
      top: 14px;
      right: 50%;
      width: 100%;
      height: 2px;
      background-color: var(--vox-color-divider);
      z-index: 0;
    }

    :host([state='complete']) .step::before {
      background-color: var(--vox-color-brand-3);
    }

    .marker {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid var(--vox-color-divider);
      background-color: var(--vox-color-bg);
      color: var(--vox-color-text-2);
      font-size: 13px;
      font-weight: 600;
    }

    :host([state='complete']) .marker {
      background-color: var(--vox-color-brand-3);
      border-color: var(--vox-color-brand-3);
      color: var(--vox-color-text-inverse);
    }

    :host([state='current']) .marker {
      border-color: var(--vox-color-brand-3);
      color: var(--vox-color-brand-1);
    }

    .marker svg {
      width: 14px;
      height: 14px;
    }

    .label {
      font-size: 13px;
      color: var(--vox-color-text-2);
    }

    :host([state='current']) .label {
      font-weight: 600;
      color: var(--vox-color-text-1);
    }
  `;Ce([n()],K.prototype,"label",2);Ce([n({reflect:!0})],K.prototype,"state",2);Ce([n({type:Number})],K.prototype,"number",2);K=Ce([p("vox-step")],K);var Gr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,We=(s,e,o,r)=>{for(var t=r>1?void 0:r?Qr(e,o):e,a=s.length-1,i;a>=0;a--)(i=s[a])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&Gr(e,o,t),t};let at=class extends h{render(){return l`<slot></slot>`}};at.styles=c`
    :host {
      display: block;
    }
  `;at=We([p("vox-timeline")],at);let me=class extends h{constructor(){super(...arguments),this.heading="",this.date=""}render(){return l`
      <div class="item">
        <span class="dot" aria-hidden="true"></span>
        ${this.date?l`<div class="date">${this.date}</div>`:u}
        <h3 class="heading">${this.heading}</h3>
        <div class="body"><slot></slot></div>
      </div>
    `}};me.styles=c`
    :host {
      display: block;
      font-family: var(--vox-font-family-base);
    }

    .item {
      position: relative;
      padding: 0 0 var(--vox-space-6) var(--vox-space-6);
      border-left: 2px solid var(--vox-color-divider);
    }

    :host(:last-child) .item {
      border-left-color: transparent;
      padding-bottom: 0;
    }

    .dot {
      position: absolute;
      top: 4px;
      left: -7px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--vox-color-brand-3);
      border: 2px solid var(--vox-color-bg);
    }

    .date {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--vox-color-text-3);
    }

    .heading {
      margin: var(--vox-space-1) 0 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--vox-color-text-1);
    }

    .body {
      margin-top: var(--vox-space-1);
      font-size: 14px;
      line-height: 1.6;
      color: var(--vox-color-text-2);
    }
  `;We([n()],me.prototype,"heading",2);We([n()],me.prototype,"date",2);me=We([p("vox-timeline-item")],me);
