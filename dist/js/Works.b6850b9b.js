(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Works"],{4693:function(t,e,i){t.exports=i.p+"img/thumb-work1.c2e89736.jpg"},"55e9":function(t,e,i){t.exports=i.p+"img/work2.63a5606f.jpg"},"608c":function(t,e,i){},"823a":function(t,e,i){t.exports=i.p+"img/thumb-work2.eb34a086.jpg"},9734:function(t,e,i){},"9bbd":function(t,e,i){t.exports=i.p+"img/work1.1ef3027f.jpg"},d7c8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"works"}},[i("SectionHeader",{staticClass:"mb-5",attrs:{title:t.title,subTitle:t.subTitle}}),i("v-sheet",[i("v-row",[i("v-col",{attrs:{cols:"12",xs:"12",md:"3","offset-md":"2",order:t.$vuetify.breakpoint.smAndDown?2:1}},[i("v-card",{staticStyle:{height:"100%"},attrs:{flat:""}},[i("v-card-title",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("p",{on:{click:function(e){return t.windowOpen(t.work[t.model-1].deliverableUrl)}}},[t._v(" "+t._s(t.work[t.model-1].title)+" "),t.work[t.model-1].githubUrl?i("v-icon",{on:{click:function(e){return t.windowOpen(t.work[t.model-1].githubUrl)}}},[t._v(" mdi-github ")]):t._e()],1)])],1)],1),i("v-card-text",{domProps:{innerHTML:t._s(t.work[t.model-1].text)}}),i("v-divider"),i("v-card-text",[i("div",[t._v("使用技術")]),i("div",{staticClass:"mt-2"},t._l(t.work[t.model-1].techIcons,(function(e){return i("v-tooltip",{key:e.id,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,o=s.attrs;return[i("v-icon",t._g(t._b({attrs:{large:""}},"v-icon",o,!1),n),[t._v(" "+t._s(e.icon)+" ")])]}}],null,!0)},[i("span",[t._v(t._s(e.tooltip))])])})),1)]),i("v-divider")],1)],1),i("v-col",{attrs:{cols:"12",xs:"12",md:"5",order:t.$vuetify.breakpoint.smAndDown?1:2}},[i("v-img",{attrs:{src:t.work[t.model-1].imgPath,position:"center"}})],1)],1),i("v-row",[i("v-col",{attrs:{md:"8","offset-md":"2"}},[i("v-slide-group",{attrs:{"prev-icon":"mdi-arrow-left-circle","next-icon":"mdi-arrow-right-circle","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.work.length,(function(e){return i("v-slide-item",{key:e},[i("v-sheet",{staticClass:"ma-4"},[i("v-img",{attrs:{contain:"",src:t.work[e-1].thumbImgPath,"max-height":"175px;"},on:{click:function(i){return t.onCardClick(e)}}})],1)],1)})),1)],1)],1)],1)],1)},n=[],o=(i("d3b7"),function(){return i.e("SectionHeader").then(i.bind(null,"de22"))}),a={components:{SectionHeader:o},data:function(){return{title:"WORKS",subTitle:"実績紹介",model:1,work:[{id:1,title:"ステキャン web",text:"ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",imgPath:i("9bbd"),thumbImgPath:i("4693"),techIcons:[{icon:"mdi-language-html5",tooltip:"html"},{icon:"mdi-language-css3",tooltip:"css"},{icon:"mdi-vuejs",tooltip:"Vue.js"},{icon:"mdi-vuetify",tooltip:"Vuetify"},{icon:"mdi-git",tooltip:"git"}],deliverableUrl:"https://github.com/ytskmt14",githubUrl:"https://github.com/ytskmt14/step-up-camp-lp"},{id:2,title:"example title",text:"example text.",imgPath:i("55e9"),thumbImgPath:i("823a")},{id:3,title:"sample title",text:"sample text.",imgPath:i("9bbd"),thumbImgPath:i("4693")},{id:4,title:"sample title",text:"sample text.",imgPath:i("55e9"),thumbImgPath:i("823a")},{id:5,title:"sample title",text:"sample text.",imgPath:i("9bbd"),thumbImgPath:i("4693")},{id:6,title:"sample title",text:"sample text.",imgPath:i("55e9"),thumbImgPath:i("823a")}]}},methods:{onCardClick:function(t){this.model=t},windowOpen:function(t){window.open(t,"_blank")}}},r=a,c=i("2877"),h=i("6544"),l=i.n(h),f=i("b0af"),u=i("99d9"),d=i("62ad"),p=i("ce7e"),v=i("132d"),m=i("adda"),g=i("0fd9"),w=i("8dd9"),b=(i("99af"),i("caad"),i("fb6a"),i("5530")),O=(i("608c"),i("9d26")),x=i("0789"),y=i("604c"),k=i("e4cd"),A=i("dc22"),C=i("c3f0"),T=i("58df"),$=Object(T["a"])(y["a"],k["a"]).extend({name:"base-slide-group",directives:{Resize:A["a"],Touch:C["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(b["a"])(Object(b["a"])({},y["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(O["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(x["b"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,o=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,s){var n=t.clientWidth,o=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var a=e.wrapper+s,r=n+o,c=.4*n;return o<=s?s=Math.max(o-c,0):a<=r&&(s=Math.min(s-(a-r-c),e.content-e.wrapper)),i?-s:s},calculateCenteredOffset:function(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var o=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var a=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),_=$.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),I=i("ade3"),S=i("4e82"),W=i("d9bd"),P=i("2b0e"),L=P["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(I["a"])({},this.activeClass,this.isActive)}),t):(Object(W["c"])("v-item should only contain a single element",this),t)):(Object(W["c"])("v-item is missing a default scopedSlot",this),null);var t}}),M=(Object(T["a"])(L,Object(S["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(T["a"])(L,Object(S["a"])("slideGroup")).extend({name:"v-slide-item"})),j=(i("a9e3"),i("9734"),i("4ad4")),Y=i("a9ad"),N=i("16b7"),B=i("b848"),X=i("75eb"),D=i("fe6c"),R=i("21be"),V=i("80d2"),E=Object(T["a"])(R["a"],D["a"],j["a"]),F=E.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width),n=0;if(n+=this.left?i-(s-t.width):i,this.offsetX){var o=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-o:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(V["f"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(V["f"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.pageYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,o=t+n,a=i<o;return a&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):a&&!this.allowOverflow?t=i-n-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=j["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(b["a"])({},this.dimensions.activator),content:Object(b["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),H=i("f2e7"),z=Object(T["a"])(Y["a"],N["a"],B["a"],X["a"],F,H["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||s?o=n+e.width/2-i.width/2:(this.left||this.right)&&(o=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=s+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(V["f"])(this.maxWidth),minWidth:Object(V["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(V["l"])(this,"activator",!0)&&Object(W["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=j["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===V["n"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(I["a"])(t,this.contentClass,!0),Object(I["a"])(t,"menuable__content__active",this.isActive),Object(I["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),U=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=U.exports;l()(U,{VCard:f["a"],VCardText:u["a"],VCardTitle:u["b"],VCol:d["a"],VDivider:p["a"],VIcon:v["a"],VImg:m["a"],VRow:g["a"],VSheet:w["a"],VSlideGroup:_,VSlideItem:M,VTooltip:z})}}]);
//# sourceMappingURL=Works.b6850b9b.js.map