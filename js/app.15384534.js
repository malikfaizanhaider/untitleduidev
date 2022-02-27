!function(){"use strict";var t,e={8304:function(t,e,n){n(9826),n(1539),n(2222);var i=n(4306),o=n(5311),s=n.n(o);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}n(4414),n(2466),n(2993),n(1038),n(8783),n(9600),n(1249),n(6699),n(2023),n(7941),n(2526),n(7327),n(5003),n(4747),n(9337),window.Components={},window.Components.listbox=function(t){var e,n,i;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}((n={init:function(){var t=this;this.optionCount=this.$refs.listbox.children.length,this.$watch("activeIndex",(function(){t.open&&(null!==t.activeIndex?t.activeDescendant=t.$refs.listbox.children[t.activeIndex].id:t.activeDescendant="")}))},activeDescendant:null,optionCount:null,open:!1,activeIndex:null,selectedIndex:0,get active(){return this.items[this.activeIndex]}},(i={})[e=t.modelName||"selected"]=i[e]||{},i[e].get=function(){return this.items[this.selectedIndex]},r(n,"choose",(function(t){this.selectedIndex=t,this.open=!1})),r(n,"onButtonClick",(function(){var t=this;this.open||(this.activeIndex=this.selectedIndex,this.open=!0,this.$nextTick((function(){t.$refs.listbox.focus(),t.$refs.listbox.children[t.activeIndex].scrollIntoView({block:"nearest"})})))})),r(n,"onOptionSelect",(function(){null!==this.activeIndex&&(this.selectedIndex=this.activeIndex),this.open=!1,this.$refs.button.focus()})),r(n,"onEscape",(function(){this.open=!1,this.$refs.button.focus()})),r(n,"onArrowUp",(function(){this.activeIndex=this.activeIndex-1<0?this.optionCount-1:this.activeIndex-1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"})})),r(n,"onArrowDown",(function(){this.activeIndex=this.activeIndex+1>this.optionCount-1?0:this.activeIndex+1,this.$refs.listbox.children[this.activeIndex].scrollIntoView({block:"nearest"})})),function(t,e){for(var n in e)(s=e[n]).configurable=s.enumerable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,n,s);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++){var s,a=i[o];(s=e[a]).configurable=s.enumerable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,a,s)}}(n,i),n),t)},window.Components.menu=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1};return{init:function(){var t=this;this.items=Array.from(this.$el.querySelectorAll('[role="menuitem"]')),this.$watch("open",(function(){t.open&&(t.activeIndex=-1)}))},activeDescendant:null,activeIndex:null,items:null,open:t.open,focusButton:function(){this.$refs.button.focus()},onButtonClick:function(){var t=this;this.open=!this.open,this.open&&this.$nextTick((function(){t.$refs["menu-items"].focus()}))},onButtonEnter:function(){var t=this;this.open=!this.open,this.open&&(this.activeIndex=0,this.activeDescendant=this.items[this.activeIndex].id,this.$nextTick((function(){t.$refs["menu-items"].focus()})))},onArrowUp:function(){if(!this.open)return this.open=!0,this.activeIndex=this.items.length-1,void(this.activeDescendant=this.items[this.activeIndex].id);0!==this.activeIndex&&(this.activeIndex=-1===this.activeIndex?this.items.length-1:this.activeIndex-1,this.activeDescendant=this.items[this.activeIndex].id)},onArrowDown:function(){if(!this.open)return this.open=!0,this.activeIndex=0,void(this.activeDescendant=this.items[this.activeIndex].id);this.activeIndex!==this.items.length-1&&(this.activeIndex=this.activeIndex+1,this.activeDescendant=this.items[this.activeIndex].id)},onClickAway:function(t){if(this.open){var e=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){return"".concat(t,":not([tabindex='-1'])")})).join(",");this.open=!1,t.target.closest(e)||this.focusButton()}}}},window.Components.popoverGroup=function(){return{__type:"popoverGroup",init:function(){var t=this;window.addEventListener("focus",(function e(n){document.body.contains(t.$el)?n.target instanceof Element&&!t.$el.contains(n.target)&&window.dispatchEvent(new CustomEvent("close-popover-group",{detail:t.$el})):window.removeEventListener("focus",e,!0)}),!0)}}},window.Components.popover=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.open,n=void 0!==e&&e,i=t.focus,o=void 0!==i&&i,s=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(t){return"".concat(t,":not([tabindex='-1'])")})).join(",");return{__type:"popover",open:n,init:function(){var t=this;o&&this.$watch("open",(function(e){e&&t.$nextTick((function(){!function(t){var e=Array.from(t.querySelectorAll(s));!function t(n){void 0!==n&&(n.focus({preventScroll:!0}),document.activeElement!==n&&t(e[e.indexOf(n)+1]))}(e[0])}(t.$refs.panel)}))})),window.addEventListener("focus",(function e(n){if(document.body.contains(t.$el)){var i=o?t.$refs.panel:t.$el;if(t.open&&n.target instanceof Element&&!i.contains(n.target)){for(var s=t.$el;s.parentNode;)if((s=s.parentNode).__x instanceof t.constructor){if("popoverGroup"===s.__x.$data.__type)return;if("popover"===s.__x.$data.__type)break}t.open=!1}}else window.removeEventListener("focus",e,!0)}),!0)},onEscape:function(){this.open=!1,this.restoreEl&&this.restoreEl.focus()},onClosePopoverGroup:function(t){t.detail.contains(this.$el)&&(this.open=!1)},toggle:function(t){this.open=!this.open,this.open?this.restoreEl=t.currentTarget:this.restoreEl&&this.restoreEl.focus()}}},window.Components.radioGroup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.initialCheckedIndex,n=void 0===e?0:e;return{value:void 0,active:void 0,init:function(){var t,e=this,i=Array.from(this.$el.querySelectorAll("input"));this.value=null===(t=i[n])||void 0===t?void 0:t.value;for(var o=function(){var t=a[s];t.addEventListener("change",(function(){e.active=t.value})),t.addEventListener("focus",(function(){e.active=t.value}))},s=0,a=i;s<a.length;s++)o();window.addEventListener("focus",(function(){console.log("Focus change"),i.includes(document.activeElement)||(console.log("HIT"),e.active=void 0)}),!0)}}},window.Components.tabs=function(){return{selectedIndex:0,onTabClick:function(t){if(this.$el.contains(t.detail)){var e=Array.from(this.$el.querySelectorAll('[x-data^="Components.tab("]')),n=Array.from(this.$el.querySelectorAll('[x-data^="Components.tabPanel("]')),i=e.indexOf(t.detail);this.selectedIndex=i,window.dispatchEvent(new CustomEvent("tab-select",{detail:{tab:t.detail,panel:n[i]}}))}},onTabKeydown:function(t){if(this.$el.contains(t.detail.tab)){var e=Array.from(this.$el.querySelectorAll('[x-data^="Components.tab("]')),n=e.indexOf(t.detail.tab);"ArrowLeft"===t.detail.key?this.onTabClick({detail:e[(n-1+e.length)%e.length]}):"ArrowRight"===t.detail.key?this.onTabClick({detail:e[(n+1)%e.length]}):"Home"===t.detail.key||"PageUp"===t.detail.key?this.onTabClick({detail:e[0]}):"End"!==t.detail.key&&"PageDown"!==t.detail.key||this.onTabClick({detail:e[e.length-1]})}}}},window.Components.tab=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{selected:!1,init:function(){var e=this,n=Array.from(this.$el.closest('[x-data^="Components.tabs("]').querySelectorAll('[x-data^="Components.tab("]'));this.selected=n.indexOf(this.$el)===t,this.$watch("selected",(function(t){t&&e.$el.focus()}))},onClick:function(){window.dispatchEvent(new CustomEvent("tab-click",{detail:this.$el}))},onKeydown:function(t){["ArrowLeft","ArrowRight","Home","PageUp","End","PageDown"].includes(t.key)&&t.preventDefault(),window.dispatchEvent(new CustomEvent("tab-keydown",{detail:{tab:this.$el,key:t.key}}))},onTabSelect:function(t){this.selected=t.detail.tab===this.$el}}},window.Components.tabPanel=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{selected:!1,init:function(){var e=Array.from(this.$el.closest('[x-data^="Components.tabs("]').querySelectorAll('[x-data^="Components.tabPanel("]'));this.selected=e.indexOf(this.$el)===t},onTabSelect:function(t){this.selected=t.detail.panel===this.$el}}},n(7042),n(1817),n(2165),n(6992),n(3948),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e){var n={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(e){this.prepareOptions(e,t.snackbar.options),this.process()},prepareOptions:function(e,n){var i={};"string"==typeof e||e instanceof Array?i.text=e:i=e,this.options=t.extend({},n,i)},process:function(){this.setup(),this.addToDom(),this.position(),this.bindSnackbar(),this.animate()},setup:function(){var e="";if(this._snackbarEl=this._snackbarEl||t("<div></div>",{class:"ch32-snackbar-single"}),e+='<span class="ch32-snackbar-loader"></span>',this.options.allowSnackbarClose&&(e+='<span class="close-ch32-snackbar-single h-5 w-5 text-gray-500 hover:text-violet-700"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-white hover:text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />\n</svg> </span>'),this.options.text instanceof Array){this.options.heading&&(e+='<h2 class="ch32-snackbar-heading">'+this.options.heading+"</h2>"),e+='<ul class="ch32-snackbar-ul">';for(var n=0;n<this.options.text.length;n++)e+='<li class="ch32-snackbar-li" id="ch32-snackbar-item-'+n+'">'+this.options.text[n]+"</li>";e+="</ul>"}else this.options.heading&&(e+='<h2 class="ch32-snackbar-heading">'+this.options.heading+"</h2>"),e+='<p class="ch32-snackbar-text">'+this.options.text+"</p>";this._snackbarEl.html(e),!1!==this.options.bgColor&&this._snackbarEl.css("background-color",this.options.bgColor),!1!==this.options.textColor&&this._snackbarEl.css("color",this.options.textColor),this.options.textAlign&&this._snackbarEl.css("text-align",this.options.textAlign),!1!==this.options.icon&&(this._snackbarEl.addClass("ch32-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._snackbarEl.addClass("ch32-icon-"+this.options.icon)),!1!==this.options.class&&this._snackbarEl.addClass(this.options.class)},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(e).outerWidth()/2-this._container.outerWidth()/2,top:t(e).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"===c(this.options.position)?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left")},bindSnackbar:function(){var t=this;this._snackbarEl.on("afterShown",(function(){t.processLoader()})),this._snackbarEl.find(".close-ch32-snackbar-single").on("click",(function(e){e.preventDefault(),"fade"===t.options.showHideTransition?(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.fadeOut((function(){t._snackbarEl.trigger("afterHidden")}))):"slide"===t.options.showHideTransition?(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.slideUp((function(){t._snackbarEl.trigger("afterHidden")}))):(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.hide((function(){t._snackbarEl.trigger("afterHidden")})))})),"function"==typeof this.options.beforeShow&&this._snackbarEl.on("beforeShow",(function(){t.options.beforeShow(t._snackbarEl)})),"function"==typeof this.options.afterShown&&this._snackbarEl.on("afterShown",(function(){t.options.afterShown(t._snackbarEl)})),"function"==typeof this.options.beforeHide&&this._snackbarEl.on("beforeHide",(function(){t.options.beforeHide(t._snackbarEl)})),"function"==typeof this.options.afterHidden&&this._snackbarEl.on("afterHidden",(function(){t.options.afterHidden(t._snackbarEl)})),"function"==typeof this.options.onClick&&this._snackbarEl.on("click",(function(){t.options.onClick(t._snackbarEl)}))},addToDom:function(){var e=".ch32-snackbar-wrap",n=t(e);if(0===n.length?(n=t("<div></div>",{class:"ch32-snackbar-wrap",role:"alert","aria-live":"polite",tabindex:"-1"}),t("body").append(n)):this.options.stack&&!isNaN(parseInt(this.options.stack,10))||n.empty(),n.find(".ch32-snackbar-single:hidden").remove(),n.append(this._snackbarEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var i=n.find(".ch32-snackbar-single").length-this.options.stack;i>0&&t(e).find(".ch32-snackbar-single").slice(0,i).remove()}this._container=n},canAutoHide:function(){return!1!==this.options.hideAfter&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||!1===this.options.loader)return!1;var t=this._snackbarEl.find(".ch32-snackbar-loader"),e=(this.options.hideAfter-400)/1e3+"s",n=this.options.loaderBg,i=t.attr("style")||"";i=i.substring(0,i.indexOf("-webkit-transition")),i+="-webkit-transition: width "+e+"ease-in; -o-transition: width"+e+" ease-in; transition: width "+e+" ease-in;  background-color: "+n+";",t.attr("style",i).addClass("ch32-snackbar-loaded")},animate:function(){var t=this;this._snackbarEl.hide(),this._snackbarEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._snackbarEl.fadeIn((function(){t._snackbarEl.trigger("afterShown")})):"slide"===this.options.showHideTransition.toLowerCase()?this._snackbarEl.slideDown((function(){t._snackbarEl.trigger("afterShown")})):this._snackbarEl.show((function(){t._snackbarEl.trigger("afterShown")})),this.canAutoHide()&&e.setTimeout((function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.fadeOut((function(){t._snackbarEl.trigger("afterHidden")}))):"slide"===t.options.showHideTransition.toLowerCase()?(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.slideUp((function(){t._snackbarEl.trigger("afterHidden")}))):(t._snackbarEl.trigger("beforeHide"),t._snackbarEl.hide((function(){t._snackbarEl.trigger("afterHidden")})))}),this.options.hideAfter)},reset:function(e){"all"===e?t(".ch32-snackbar-wrap").remove():this._snackbarEl.remove()},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindSnackbar()},close:function(){this._snackbarEl.find(".close-ch32-snackbar-single").click()}};t.snackbar=function(t){var e=Object.create(n);return e.init(t,this),{reset:function(t){e.reset(t)},update:function(t){e.update(t)},close:function(){e.close()}}},t.snackbar.options={text:"",heading:"",showHideTransition:"fade",allowSnackbarClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){},onClick:function(){}}}(jQuery,window,document),window.Alpine=i.Z,i.Z.start(),n(858),s()(document).ready((function(){s()(document).on("click",".copy-toast",(function(t){t.preventDefault(),s().snackbar({heading:"Notification",text:"Unique IBAN copied to clipboard",position:"bottom-center",loader:!1,stack:!0,allowSnackbarClose:!1,icon:"success",hideAfter:3e3}),s()(".ch32-snackbar-wrap").focus().removeAttr("tabindex").removeAttr("aria-hidden"),s()(".active").removeClass("active"),s()(this).addClass("active"),s()("body").addClass("ch32-snackbar-active"),setTimeout((function(){s()(".ch32-snackbar-wrap").attr("tabindex","-1").attr("aria-hidden",!0),s()("body").removeClass("ch32-snackbar-active"),s()(".active").focus().removeClass("active")}),3e3)}));var t="html";s()('input[name="theme"]').each((function(){localStorage.getItem("theme")===s()(this).val()&&s()(this).prop("checked",!0)})),s()("input[name=theme]").change((function(){"dark"===s()(this).val()?(s()(t).addClass("dark"),s().snackbar({heading:"Notification",text:"Dark Theme Enabled",position:"top-right",loader:!1,stack:!0,hideAfter:5e3}),s()(t).removeClass("light"),localStorage.setItem("theme","dark")):(s()(t).addClass("light"),s().snackbar({heading:"Notification",text:"Light Theme Enabled",position:"top-right",loader:!1,stack:!0,hideAfter:5e3}),s()(t).removeClass("dark"),localStorage.setItem("theme","light"))})),"dark"===localStorage.getItem("theme")?(s()(t).addClass("dark"),s()("#darkTheme").prop("checked",!0)):(s()(t).addClass("light"),s()("#lightTheme").prop("checked",!0)),s()("select").chosen({placeholder_text_single:"Select an option",allow_single_deselect:!0}),s()(".datepicker").datepicker({showOtherMonths:!0,selectOtherMonths:!0,showButtonPanel:!0,dateFormat:"dd-mm-yy",nextText:"",prevText:"",onUpdateDatepicker:function(){s()(".ui-datepicker.ui-datepicker-multi").wrapInner('<div class="tailGroup flex"></div>'),s()(".ui-datepicker.ui-datepicker-multi  .ui-datepicker-buttonpane").insertAfter(".ui-datepicker .tailGroup"),s()(".ui-datepicker.ui-datepicker-multi  .ui-datepicker-row-break").insertAfter(".ui-datepicker .tailGroup"),s()(".ui-datepicker-calendar").wrap('<div class="ui-datepicker-calendar-container"></div>'),s()(".ui-datepicker-header > .ui-datepicker-prev").append('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-violet-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />\n</svg></svg>'),s()(".ui-datepicker-header > .ui-datepicker-next").append('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-violet-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /> </svg></svg>')}});var e="#ch32Dialog";s()(e).dialog({autoOpen:!1,modal:!0,width:"554px",resizable:!1,draggable:!1,closeOnEscape:!0,dialogClass:"no-close",closeText:"",buttons:[{text:"Close",class:"mr-4 h-11 inline-flex items-center shadow-xs justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 hover:bg-gray-50 bg-white focus:outline-none focus:ring-4 focus:ring-gray-100",click:function(){s()(this).dialog("close")}},{text:"Confirm",class:"h-11 inline-flex items-center shadow-xs justify-center px-5 py-3 text-base font-medium rounded-lg border border-violet-700 text-white hover:bg-violet-600 bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100"}],create:function(){s()(this).closest(".ui-dialog").find(".ui-dialog-buttonset").addClass("md:text-right"),s()(this).closest(".ui-dialog").find(".ui-button-icon-space").remove(".ui-button-icon-space"),s()(this).closest(".ui-dialog").find(".ui-icon-closethick").remove(".ui-icon-closethick"),s()(this).closest(".ui-dialog").find(".ui-dialog-titlebar-close").append('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300 hover:text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />\n</svg>')}}),s()(".openDialog").on("click",(function(){s()(e).dialog("open")})),s().ajax({url:"https://api2.binance.com/api/v3/ticker/24hr",method:"GET",dataType:"json",success:function(t){console.log(t);for(var e=0;e<t.length;e++){var n=t[e],i=document.createElement("tr");i.classList.add("product"),i.setAttribute("data-id",n.id),i.innerHTML='\n                    <tr class="product-info">\n                        <td class="px-6 py-4 whitespace-nowrap">\n                        <div class="text-sm font-medium text-gray-900">'.concat(n.symbol,'</div>\n                        </td>\n                        <td class="px-6 py-4 whitespace-nowrap">').concat(n.priceChange,'</td>\n                        <td class="px-6 py-4 whitespace-nowrap">').concat(n.priceChangePercent,'</td>\n                        <td class="px-6 py-4 whitespace-nowrap">').concat(n.weightedAvgPrice,'</td>\n                        <td class="px-6 py-4 whitespace-nowrap">').concat(n.prevClosePrice,'</td>\n                        <td class="px-6 py-4 whitespace-nowrap">').concat(n.count,"</td>      \n                    </tr>\n                "),document.querySelector("#products").appendChild(i)}},error:function(t){console.log(t)}}),s()(document).ajaxStart((function(){s()("#loading").show()})),s()(document).ajaxComplete((function(){s().snackbar({heading:"Notification",text:"Ajax data has been loaded",position:"top-right",loader:!1,stack:!0,allowSnackbarClose:!1,hideAfter:5e3}),s()("#loading").hide()})),$((function(){$("#tags").autocomplete({source:["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"]})}))}))},5311:function(t){t.exports=jQuery}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,i),s.exports}i.m=e,t=[],i.O=function(e,n,o,s){if(!n){var a=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],s=t[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](n[c])}))?n.splice(c--,1):(r=!1,s<a&&(a=s));if(r){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,o,s]},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,s,a=n[0],r=n[1],c=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(c)var d=c(i)}for(e&&e(n);l<a.length;l++)s=a[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},n=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=i.O(void 0,[175],(function(){return i(8304)}));o=i.O(o)}();
//# sourceMappingURL=app.15384534.js.map