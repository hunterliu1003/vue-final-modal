function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=function(e){return function(e,t){return r(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},l=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o,i;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||l(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;l(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=s(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,o),i&&t(n,i),e}(),d=!1;if("undefined"!=typeof window){var u={get passive(){d=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var f,v,h="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),m=[],p=!1,y=0,b=-1,g=function(e,t){var n=!1;return function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,t){return!(0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)}(e,t)&&(n=!0)})),n},w=function(e){return m.some((function(){return g(e,-y)}))},E=function(e){var t=e||window.event;return!!w(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},T=function(e,t){if(e){if(!m.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};m=[].concat(r(m),[n]),h?(e.ontouchstart=function(e){1===e.targetTouches.length&&(b=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){y=e.targetTouches[0].clientY-b,!w(e.target)&&(t&&0===t.scrollTop&&y>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&y<0?E(e):e.stopPropagation())}(t,e)},p||(document.addEventListener("touchmove",E,d?{passive:!1}:void 0),p=!0)):function(e){if(void 0===v){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);v=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}void 0===f&&(f=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},S=function(e){e?(m=m.filter((function(t){return t.targetElement!==e})),h?(e.ontouchstart=null,e.ontouchmove=null,p&&0===m.length&&(document.removeEventListener("touchmove",E,d?{passive:!1}:void 0),p=!1)):m.length||(void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==f&&(document.body.style.overflow=f,f=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},C=function(){},O="enter",k="entering",_="leave",x="leavng";var M={type:[String,Object,Array],default:""},$={props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:M,overlayClass:M,contentClass:M,styles:M,overlayStyle:M,contentStyle:M,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{},resolveToggle:C,rejectToggle:C}},computed:{api:function(){return this[this.$_options.key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===_)&&this.modalTransitionState===_},calculateZIndex:function(){return!1===this.zIndex?!!this.zIndexAuto&&+this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex},bindStyle:function(){return i({},!1!==this.calculateZIndex&&{zIndex:this.calculateZIndex})},computedTransition:function(){return"string"==typeof this.transition?{name:this.transition}:i({},this.transition)},computedOverlayTransition:function(){return"string"==typeof this.overlayTransition?{name:this.overlayTransition}:i({},this.overlayTransition)}},watch:{value:function(e){if(this.stopEvent)this.stopEvent=!1;else if(this.mounted(),!e){if(this.emitEvent("before-close",!0))return void this.rejectToggle("hide");this.close()}},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new c,this.mounted()},beforeDestroy:function(){var e,t=this;this.close(),this.lockScroll&&this.$refs.vfmContainer&&S(this.$refs.vfmContainer),null==this||null===(e=this.$el)||void 0===e||e.remove();var n=this.api.modals.findIndex((function(e){return e===t}));this.api.modals.splice(n,1)},methods:{mounted:function(){var e=this;if(this.value){if(this.emitEvent("before-open",!1))return void this.rejectToggle("show");var t=this.getAttachElement();if(t||!1===this.attach){!1!==this.attach&&t.appendChild(this.$el);var n=this.api.openedModals.findIndex((function(t){return t===e}));-1!==n&&this.api.openedModals.splice(n,1),this.api.openedModals.push(this),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){var e=this,t=this.api.openedModals.findIndex((function(t){return t===e}));if(-1!==t&&this.api.openedModals.splice(t,1),this.api.openedModals.length>0){var n=this.api.openedModals[this.api.openedModals.length-1];(n.focusRetain||n.focusTrap)&&n.$refs.vfmContainer.focus(),!n.hideOverlay&&(n.visibility.overlay=!0)}this.startTransitionLeave()},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){var e=this;this.value&&this.$nextTick((function(){e.lockScroll?T(e.$refs.vfmContainer,{reserveScrollBarGap:!0}):S(e.$refs.vfmContainer)}))},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=k},afterOverlayEnter:function(){this.overlayTransitionState=O},beforeOverlayLeave:function(){this.overlayTransitionState=x},afterOverlayLeave:function(){this.overlayTransitionState=_},beforeModalEnter:function(){this.modalTransitionState=k},afterModalEnter:function(){this.modalTransitionState=O,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.$emit("opened",this.createModalEvent({type:"opened"})),this.resolveToggle("show")},beforeModalLeave:function(){this.modalTransitionState=x,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=_,this.modalStackIndex=null,this.lockScroll&&S(this.$refs.vfmContainer);var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),this.resolveToggle("hide"),e||(this.params={})},onClickContainer:function(){this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1)},onEsc:function(){this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({ref:this},e)},emitEvent:function(e,t){var n=!1,o=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,o),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},toggle:function(e,t){var n=arguments,o=this;return new Promise((function(i,r){o.resolveToggle=function(e){i(e),o.resolveToggle=C},o.rejectToggle=function(e){r(e),o.rejectToggle=C};var a="boolean"==typeof e?e:!o.value;a&&2===n.length&&(o.params=t),o.$emit("input",a)}))}}};var j,I=function(e,t,n,o,i,r,a,s,l,c){"boolean"!=typeof a&&(l=s,s=a,a=!1);var d,u="function"==typeof n?n.options:n;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=d):t&&(d=a?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){var f=u.render;u.render=function(e,t){return d.call(t),f(e,t)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return n},N="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var L={};var A=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:e.bindStyle,on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEsc(t)}}},[n("transition",e._b({ref:"vfmOverlayTransition",on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},"transition",e.computedOverlayTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",e._b({ref:"vfmTransition",on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},"transition",e.computedTransition,!1),[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.contentStyle},[e._t("default",null,{params:e.params})],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-d81ff4b0_0",{source:".vfm--fixed[data-v-d81ff4b0]{position:fixed}.vfm--absolute[data-v-d81ff4b0]{position:absolute}.vfm--inset[data-v-d81ff4b0]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-d81ff4b0]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-d81ff4b0]{pointer-events:none}.vfm--prevent-auto[data-v-d81ff4b0]{pointer-events:auto}.vfm--outline-none[data-v-d81ff4b0]:focus{outline:0}.vfm-enter-active[data-v-d81ff4b0],.vfm-leave-active[data-v-d81ff4b0]{transition:opacity .2s}.vfm-enter[data-v-d81ff4b0],.vfm-leave-to[data-v-d81ff4b0]{opacity:0}",map:void 0,media:void 0})}),$,"data-v-d81ff4b0",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=N?t.media||"default":e,o=L[n]||(L[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===j&&(j=document.head||document.getElementsByTagName("head")[0]),j.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var r=o.ids.size-1,a=document.createTextNode(i),s=o.element.childNodes;s[r]&&o.element.removeChild(s[r]),s.length?o.element.insertBefore(a,s[r]):o.element.appendChild(a)}}}(e,t)}}),void 0,void 0),B=I({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modals-container"},e._l(e.api.dynamicModals,(function(t,o){return n(t.component,e._g(e._b({key:t.id,tag:"component",on:{closed:function(t){return e.slice(o)},"before-open":function(n){return e.beforeOpen(n,t)},opened:t.opened},scopedSlots:e._u([e._l(t.slots,(function(t,o){return{key:o,fn:function(){return[e.isString(t)?[e._v(e._s(t))]:n(t.component,e._g(e._b({key:o,tag:"component"},"component",t.bind,!1),t.on))]},proxy:!0}}))],null,!0),model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"modal.value"}},"component",t.bind,!1),t.on))})),1)},staticRenderFns:[]},undefined,{props:{},computed:{api:function(){return this[this.$_options.key]}},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t){e.ref.params=t.params},isString:function(e){return"string"==typeof e}}},undefined,false,undefined,!1,void 0,void 0,void 0);function D(e,t){var n=i({},e);return Object.assign(n.props,{$_options:{type:Object,default:function(){return t}}}),n}function P(t,n){var o=function(t,n){var o;return function(){return o={show:function(t){for(var o=this,i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];switch(e(t)){case"string":return this.toggle.apply(this,[t,!0].concat(r));case"object":return new Promise((function(e){var i={value:!0,id:Symbol("dynamicModal"),component:n.componentName,bind:{},slots:{},on:{},params:r[0],opened:function(){e("show")}};o.dynamicModals.push(Object.assign(i,t))}))}},hide:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.toggle(t,!1)},hideAll:function(){return this.hide.apply(this,r(this.openedModals.map((function(e){return e.name}))))},toggle:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Array.isArray(e)?this.get.apply(this,r(e)):this.get(e);return Promise.allSettled(i.map((function(e){return e.toggle.apply(e,n)})))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.modals.filter((function(e){return t.includes(e.name)}))},dynamicModals:[],openedModals:[],modals:[]},t.observable(o)}}(t,n)();Object.defineProperty(t.prototype,n.key,{get:function(){return o}})}var R={componentName:"VueFinalModal",dynamicContainerName:"ModalsContainer",key:"$vfm"};export default function(){return{install:function(e,t){var n=Object.assign({},R,t),o=e.prototype[n.key],i=e.options.components[n.componentName],r=e.options.components[n.dynamicContainerName];i||r?"undefined"!=typeof window&&(o&&console.error("[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal."),i&&console.error("[vue-final-modal] Duplicate registration componentName of VueFinalModal."),r&&console.error("[vue-final-modal] Duplicate registration dynamicContainerName of ModalsContainer.")):(o||P(e,n),function(e,t){e.component(t.componentName,D(A,t))}(e,n),function(e,t){e.component(t.dynamicContainerName,D(B,t))}(e,n))}}}
//# sourceMappingURL=VueFinalModal.esm.js.map
