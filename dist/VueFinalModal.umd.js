!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t(e.Vue)}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(e){return function(e,t){return l(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},f=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var t,o,r;return t=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||f(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;f(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=u(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&n(t.prototype,o),r&&n(t,r),e}();var s={name:"VueFinalModal",props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[String,Object,Array],default:""},overlayStyle:{type:[String,Object,Array],default:""},contentStyle:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=t(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed"],setup:function(t,n){var o=n.emit,r="enter",l="entering",i="leave",u="leavng",f=Symbol("vfm"),s=e.ref(null),d=e.ref(null),v=e.ref(null),p=e.inject(t.options.key),m=e.ref(null),y=new c,b=e.ref(!1),h=e.reactive({modal:!1,overlay:!1}),g=e.ref(null),k=e.ref(null),S=e.ref(!1),w=e.computed((function(){return(t.hideOverlay||g.value===i)&&k.value===i})),E=e.computed((function(){return"boolean"==typeof t.zIndex?t.attach?"unset":t.zIndexBase+2*(m.value||0):t.zIndex}));function O(){return{uid:f,props:t,emit:o,vfmContainer:v,vfmContent:d,getAttachElement:T,modalStackIndex:m,visibility:h,handleLockScroll:M,$focusTrap:y}}function x(){if(t.modelValue){var n=T();if(n||!1===t.attach){if(!1!==t.attach&&n.appendChild(s.value),m.value=p.openedModals.length-1,M(),p.openedModals.filter((function(e){return e.uid!==f})).forEach((function(e,t){e.getAttachElement()===n&&(e.modalStackIndex.value=t,e.visibility.overlay=!1)})),j("before-open",!1))return;b.value=!0,e.nextTick((function(){h.overlay=!0,h.modal=!0}))}else!1!==n&&console.warn("Unable to locate target ".concat(t.attach))}}function C(){if(!j("before-close",!0)){if(p.openedModals.length>0){var e=p.openedModals[p.openedModals.length-1];e.handleLockScroll(),e.props.focusTrap&&e.$focusTrap.firstElement().focus(),(e.props.focusRetain||e.props.focusTrap)&&e.vfmContainer.value.focus(),!e.props.hideOverlay&&(e.visibility.overlay=!0)}h.overlay=!1,h.modal=!1}}function M(){t.modelValue&&(t.lockScroll?p.lockScroll():p.unlockScroll())}function T(){return!1!==t.attach&&("string"==typeof t.attach?!!window&&window.document.querySelector(t.attach):t.attach)}function j(t,n){var r=!1,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a({ref:O()},e)}({type:t,stop:function(){r=!0}});return o(t,l),!!r&&(S.value=!0,e.nextTick((function(){o("update:modelValue",n)})),!0)}return e.watch((function(){return t.modelValue}),(function(e){S.value?S.value=!1:(x(),e||C())})),e.watch((function(){return t.lockScroll}),M),e.watch((function(){return t.hideOverlay}),(function(e){t.modelValue&&!e&&(h.overlay=!0)})),e.watch((function(){return t.attach}),x),e.watch(w,(function(e){e&&(b.value=!1)}),{flush:"post"}),p.modals.push(O()),e.onMounted((function(){x()})),e.onBeforeUnmount((function(){C(),s.value.remove();var e=p.modals.findIndex((function(e){return e.uid===f}));p.modals.splice(e,1)})),{root:s,vfmContent:d,vfmContainer:v,visible:b,visibility:h,calculateZIndex:E,beforeOverlayEnter:function(){g.value=l},afterOverlayEnter:function(){g.value=r},beforeOverlayLeave:function(){g.value=u},afterOverlayLeave:function(){g.value=i},beforeModalEnter:function(){k.value=l},afterModalEnter:function(){k.value=r,(t.focusRetain||t.focusTrap)&&v.value.focus(),t.focusTrap&&y.enable(v.value),o("opened")},beforeModalLeave:function(){k.value=u,y.enabled()&&y.disable()},afterModalLeave:function(){k.value=i,m.value=null,0===p.openedModals.length&&t.lockScroll&&p.unlockScroll(),o("closed")},onClickContainer:function(){o("click-outside"),t.clickToClose&&o("update:modelValue",!1)},onEsc:function(e){27===e.keyCode&&b.value&&t.escToClose&&o("update:modelValue",!1)}}}};const d=e.withScopeId("data-v-2836fdb5"),v=d((function(t,n,o,r,a,l){return o.ssr||r.visible?e.withDirectives((e.openBlock(),e.createBlock("div",{key:0,ref:"root",style:{zIndex:r.calculateZIndex},class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]],onKeydown:n[2]||(n[2]=(...e)=>r.onEsc(...e))},[e.createVNode(e.Transition,{name:o.overlayTransition,"onBefore-enter":r.beforeOverlayEnter,"onAfter-enter":r.afterOverlayEnter,"onBefore-leave":r.beforeOverlayLeave,"onAfter-leave":r.afterOverlayLeave},{default:d((()=>[!o.hideOverlay&&r.visibility.overlay?(e.openBlock(),e.createBlock("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass],style:o.overlayStyle},null,6)):e.createCommentVNode("v-if",!0)])),_:1},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"]),e.createVNode(e.Transition,{name:o.transition,"onBefore-enter":r.beforeModalEnter,"onAfter-enter":r.afterModalEnter,"onBefore-leave":r.beforeModalLeave,"onAfter-leave":r.afterModalLeave},{default:d((()=>[e.withDirectives(e.createVNode("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",o.classes],style:o.styles,"aria-expanded":r.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onClick:n[1]||(n[1]=e.withModifiers(((...e)=>r.onClickContainer(...e)),["self"]))},[e.createVNode("div",{ref:"vfmContent",class:["vfm__content",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],style:o.contentStyle},[e.renderSlot(t.$slots,"default")],6)],14,["aria-expanded"]),[[e.vShow,r.visibility.modal]])])),_:3},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"])],38)),[[e.vShow,!o.ssr||r.visible]]):e.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-2836fdb5]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),s.render=v,s.__scopeId="data-v-2836fdb5",s.__file="lib/VueFinalModal.vue";var p=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)};function m(e){return function(){return{isScrollLocked:!1,get openedModals(){return this.modals.filter((function(e){return e.props.modelValue}))},modals:[],show:function(e){this.toggle(e,!0)},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.emit("update:modelValue",!1)}))},toggle:function(e,t){var n=this.modals.find((function(t){return t.props.name===e}));void 0!==n&&n.emit("update:modelValue",void 0===t?!n.props.modelValue:t)},lockScroll:function(){var t,n,o;this.isScrollLocked||(e.isMobile?(t=document.body,o="hidden",(n="overflow")&&p(t)&&(t.style[n]=o)):window.addEventListener("wheel",this.lockScrollListener,{passive:!1}),this.isScrollLocked=!0)},unlockScroll:function(){var t,n;e.isMobile?(t=document.body,(n="overflow")&&p(t)&&(t.style[n]="")):window.removeEventListener("wheel",this.lockScrollListener),this.isScrollLocked=!1},lockScrollListener:function(e){e.preventDefault()}}}}var y=S,b=S,h=S,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,k=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function S(e){e||(e={});var t=e.ua;if(t||"undefined"==typeof navigator||(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"!=typeof t)return!1;var n=e.tablet?k.test(t):g.test(t);return!n&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==t.indexOf("Macintosh")&&-1!==t.indexOf("Safari")&&(n=!0),n}y.isMobile=b,y.default=h;var w={componentName:"VueFinalModal",key:"$vfm",isMobile:y()};return function(){return{install:function(e,t){var n=Object.assign({},w,t),o=e.config.globalProperties[n.key];e._context.components[n.componentName]?console.warn(o?"[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal.":"[vue-final-modal] Duplicate registration componentName of VueFinalModal."):(o||function(e,t){var n=m(t)();Object.defineProperty(e.config.globalProperties,t.key,{get:function(){return n}}),e.provide(t.key,n)}(e,n),function(e,t){e.component(t.componentName,a(a({},s),{},{props:a(a({},s.props),{},{options:{type:Object,default:function(){return t}}})}))}(e,n))}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
