(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5Pc6":function(e,t,n){"use strict";n("f3/d");var r=n("q1tI"),a=n.n(r),o=(n("gClD"),function(e){var t=e.type,n=e.onChange,r=e.placeholder,o=e.label,i=e.value,c=e.name,l=e.style;return a.a.createElement("div",{className:"form__input"},a.a.createElement("label",{htmlFor:o},o),a.a.createElement("input",{type:t,onChange:n,placeholder:r,value:i,name:c,style:l}))});o.defaultProps={type:"text",style:{}},t.a=o},"67OE":function(e,t,n){},"9Odx":function(e,t,n){"use strict";n("91GP"),n("HAE/");var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=r(n("FhTr")),c=r(n("KQxl")),l=function(e,t){return o.createElement(c.default,Object.assign({},e,{ref:t,icon:i.default}))};l.displayName="RightOutlined";var s=o.forwardRef(l);t.default=s},"Cuy+":function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("/MKj"),i=(n("HAE/"),n("V+eJ"),n("bWfx"),n("/SS/"),n("hHhE"),n("XfO3"),n("HEwt"),n("LK8F"),n("TSYQ")),c=n.n(i),l=n("Gytx"),s=n.n(l),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){return f(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.forceRender||!s()(this.props,e)}},{key:"render",value:function(){var e;if(this._isActived=this.props.forceRender||this._isActived||this.props.isActive,!this._isActived)return null;var t=this.props,n=t.prefixCls,r=t.isActive,o=t.children,i=t.destroyInactivePanel,l=t.forceRender,s=t.role,u=c()(n+"-content",(p(e={},n+"-content-active",r),p(e,n+"-content-inactive",!r),e)),f=l||r||!i?a.a.createElement("div",{className:n+"-content-box"},o):null;return a.a.createElement("div",{className:u,role:s},f)}}]),t}(r.Component),h=n("MFj2"),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g=function(e){function t(){var e,n,r;b(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleItemClick=function(){var e=r.props,t=e.onItemClick,n=e.panelKey;"function"==typeof t&&t(n)},r.handleKeyPress=function(e){"Enter"!==e.key&&13!==e.keyCode&&13!==e.which||r.handleItemClick()},E(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),y(t,[{key:"shouldComponentUpdate",value:function(e){return!s()(this.props,e)}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.id,o=t.style,i=t.prefixCls,l=t.header,s=t.headerClass,u=t.children,p=t.isActive,f=t.showArrow,m=t.destroyInactivePanel,y=t.disabled,b=t.accordion,E=t.forceRender,g=t.expandIcon,w=t.extra,P=c()(i+"-header",v({},s,s)),j=c()((v(e={},i+"-item",!0),v(e,i+"-item-active",p),v(e,i+"-item-disabled",y),e),n),O=a.a.createElement("i",{className:"arrow"});return f&&"function"==typeof g&&(O=g(this.props)),a.a.createElement("div",{className:j,style:o,id:r},a.a.createElement("div",{className:P,onClick:this.handleItemClick,role:b?"tab":"button",tabIndex:y?-1:0,"aria-expanded":""+p,onKeyPress:this.handleKeyPress},f&&O,l,w&&a.a.createElement("div",{className:i+"-extra"},w)),a.a.createElement(h.a,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},a.a.createElement(d,{prefixCls:i,isActive:p,destroyInactivePanel:m,forceRender:E,role:b?"tabpanel":null},u)))}}]),t}(r.Component);g.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var w=g,P=n("UwPn");function j(e,t,n,r){var a=void 0;return Object(P.a)(e,n,{start:function(){t?(a=e.offsetHeight,e.style.height=0):e.style.height=e.offsetHeight+"px"},active:function(){e.style.height=(t?a:0)+"px"},end:function(){e.style.height="",r()}})}var O=function(e){return{enter:function(t,n){return j(t,!0,e+"-anim",n)},leave:function(t,n){return j(t,!1,e+"-anim",n)}}},k=n("TOwV"),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=e;return Array.isArray(t)||(t=t?[t]:[]),t.map((function(e){return String(e)}))}var I=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));x.call(n);var r=e.activeKey,a=e.defaultActiveKey;return"activeKey"in e&&(a=r),n.state={openAnimation:e.openAnimation||O(e.prefixCls),activeKey:C(a)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),A(t,[{key:"shouldComponentUpdate",value:function(e,t){return!s()(this.props,e)||!s()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,i=t.accordion,l=c()((N(e={},n,!0),N(e,r,!!r),e));return a.a.createElement("div",{className:l,style:o,role:i?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),"openAnimation"in e&&(t.openAnimation=e.openAnimation),t.activeKey||t.openAnimation?t:null}}]),t}(r.Component),x=function(){var e=this;this.onClickItem=function(t){var n=e.state.activeKey;if(e.props.accordion)n=n[0]===t?[]:[t];else{var r=(n=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n))).indexOf(t);r>-1?n.splice(r,1):n.push(t)}e.setActiveKey(n)},this.getNewChild=function(t,n){if(!t)return null;var r=e.state.activeKey,o=e.props,i=o.prefixCls,c=o.accordion,l=o.destroyInactivePanel,s=o.expandIcon,u=t.key||String(n),p=t.props,f=p.header,m=p.headerClass,d=p.disabled,h={key:u,panelKey:u,header:f,headerClass:m,isActive:c?r[0]===u:r.indexOf(u)>-1,prefixCls:i,destroyInactivePanel:l,openAnimation:e.state.openAnimation,accordion:c,children:t.props.children,onItemClick:d?null:e.onClickItem,expandIcon:s};return"string"==typeof t.type?t:a.a.cloneElement(t,h)},this.getItems=function(){var t=e.props.children,n=Object(k.isFragment)(t)?t.props.children:t,o=r.Children.map(n,e.getNewChild);return Object(k.isFragment)(t)?a.a.createElement(a.a.Fragment,null,o):o},this.setActiveKey=function(t){"activeKey"in e.props||e.setState({activeKey:t}),e.props.onChange(e.props.accordion?t[0]:t)}};I.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},I.Panel=w;var T=I,_=(I.Panel,n("fEPi")),M=n.n(_),L=n("H84U");function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e){var t,n,a,o=r.useContext(L.b).getPrefixCls,i=e.prefixCls,l=e.className,s=void 0===l?"":l,u=e.showArrow,p=void 0===u||u,f=o("collapse",i),m=c()((t={},n="".concat(f,"-no-arrow"),a=!p,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t),s);return r.createElement(T.Panel,S({},e,{prefixCls:f,className:m}))},z=n("xEkU"),D=n.n(z);function K(e,t,n){var r,a;return Object(P.a)(e,"ant-motion-collapse-legacy",{start:function(){t?(r=e.offsetHeight,e.style.height="0px",e.style.opacity="0"):(e.style.height="".concat(e.offsetHeight,"px"),e.style.opacity="1")},active:function(){a&&D.a.cancel(a),a=D()((function(){e.style.height="".concat(t?r:0,"px"),e.style.opacity=t?"1":"0"}))},end:function(){a&&D.a.cancel(a),e.style.height="",e.style.opacity="",n()}})}var H={enter:function(e,t){return K(e,!0,t)},leave:function(e,t){return K(e,!1,t)},appear:function(e,t){return K(e,!0,t)}},W=n("0n0R");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){var t,n,a=r.useContext(L.b),o=a.getPrefixCls,i=a.direction,l=e.prefixCls,s=e.className,u=void 0===s?"":s,p=e.bordered,f=o("collapse",l),m=void 0!==(n=e.expandIconPosition)?n:"rtl"===i?"right":"left",d=c()((Y(t={},"".concat(f,"-borderless"),!p),Y(t,"".concat(f,"-icon-position-").concat(m),!0),Y(t,"".concat(f,"-rtl"),"rtl"===i),t),u),h=F(F({},H),{appear:function(){}});return r.createElement(T,F({openAnimation:h},e,{expandIcon:function(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):r.createElement(M.a,{rotate:t.isActive?90:void 0});return Object(W.a)(a,(function(){return{className:c()(a.props.className,"".concat(f,"-arrow"))}}))}(t)},prefixCls:f,className:d}))};Z.Panel=R,Z.defaultProps={bordered:!0};var q=Z,U=n("2/Rp"),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}}]},name:"facebook",theme:"outlined"},B=n("6VBw"),G=function(e,t){return r.createElement(B.a,Object.assign({},e,{ref:t,icon:V}))};G.displayName="FacebookOutlined";var Q=r.forwardRef(G),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"}}]},name:"instagram",theme:"outlined"},X=function(e,t){return r.createElement(B.a,Object.assign({},e,{ref:t,icon:J}))};X.displayName="InstagramOutlined";var $=r.forwardRef(X),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},te=function(e,t){return r.createElement(B.a,Object.assign({},e,{ref:t,icon:ee}))};te.displayName="MinusOutlined";var ne=r.forwardRef(te),re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},ae=function(e,t){return r.createElement(B.a,Object.assign({},e,{ref:t,icon:re}))};ae.displayName="PlusOutlined";var oe=r.forwardRef(ae),ie=n("5Pc6"),ce=(n("f3/d"),n("hMS9"),function(e){var t=e.value,n=e.onChange,r=e.label,o=e.placeholder,i=e.cols,c=e.rows,l=e.name,s=e.style;return a.a.createElement("div",{className:"form__textarea"},a.a.createElement("label",{htmlFor:r},r),a.a.createElement("textarea",{value:t,onChange:n,placeholder:o,cols:i,rows:c,name:l,style:s}))});ce.defaultProps={cols:"30",rows:"20"};var le=ce,se=n("SvPG"),ue=n("hTlr"),pe=n("vrFN"),fe=n("pmdI"),me=(n("67OE"),n("j/AJ")),de=n.n(me),he=n("cV1h"),ye=n.n(he),ve=n("zLUU"),be=n.n(ve),Ee=q.Panel,ge="\n  Contact us at Info@AfricaI.site\n";t.default=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],i=Object(r.useState)(""),c=i[0],l=i[1],s=Object(r.useState)({status:"ERROR"}),u=(s[0],s[1],Object(o.b)());return Object(r.useEffect)((function(){document.querySelector("body").classList.remove("home"),u(Object(fe.b)({logo:be.a})),Object(fe.a)({visible:!1})(u)}),[]),a.a.createElement(ue.a,null,a.a.createElement(pe.a,{title:"Contact Us"}),a.a.createElement("div",{className:"contact"},a.a.createElement("div",{className:"contact__container"},a.a.createElement("div",{className:"contact__overlay--1",style:{backgroundImage:"url("+de.a+")"}}),a.a.createElement("div",{className:"contact__overlay--2",style:{backgroundImage:"url("+ye.a+")"}}),a.a.createElement("h1",{className:"contact__heading"},"Contact us by sending us an email here."),a.a.createElement("p",{className:"contact__description"},"You can reach us various platforms, don't hesitate to contact us if you need any assistance"),a.a.createElement("div",{className:"contact__social"},a.a.createElement(U.a,{className:"contact__social--button"}," ",a.a.createElement(Q,null),"  Facebook"),a.a.createElement(U.a,{className:"contact__social--button"}," ",a.a.createElement($,null)," Instagram"),a.a.createElement(U.a,{className:"contact__social--button"},"FAQ")),a.a.createElement("form",{method:"POST",action:"https://formspree.io/mpzyqpnp"},a.a.createElement(ie.a,{type:"email",placeholder:"Enter your email",label:"Email",value:t,onChange:function(e){n(e.target.value)},name:"_replyto",required:!0,style:{height:40,width:"100%"}}),a.a.createElement(le,{value:c,onChange:function(e){l(e.target.value)},placeholder:"Tell us what you think",label:"Message",name:"message",required:!0}),a.a.createElement(se.a,{htmlType:"submit",style:{marginTop:10,width:"100%"}},"Send")))),a.a.createElement("div",{className:"faq"},a.a.createElement("div",{className:"faq__container"},a.a.createElement("h1",{className:"faq__heading"},"Questions? We've got answers"),a.a.createElement(q,{bordered:!1,defaultActiveKey:["1"],expandIcon:function(e){return e.isActive?a.a.createElement(ne,null):a.a.createElement(oe,null)},className:"site-collapse-custom-collapse",style:{backgroundColor:"#312F2F",color:"white"}},a.a.createElement(Ee,{header:"How do I enroll in a course?",key:"1",className:"site-collapse-custom-panel",style:{color:"white"}},a.a.createElement("p",{style:{color:"white"}},ge)),a.a.createElement(Ee,{header:"What are the requirements to start learning?",key:"2",className:"site-collapse-custom-panel"},a.a.createElement("p",null,ge)),a.a.createElement(Ee,{header:"Where should I find courses and how to start learning?",key:"3",className:"site-collapse-custom-panel"},a.a.createElement("p",null,ge)),a.a.createElement(Ee,{header:"Who is in charge of an individual or a group study?",key:"4",className:"site-collapse-custom-panel"},a.a.createElement("p",null,ge)),a.a.createElement(Ee,{header:"How am I going to ask questions if I get any and who will I be contacting?",key:"5",className:"site-collapse-custom-panel"},a.a.createElement("p",null,ge))))))}},FhTr:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"}},MFj2:function(e,t,n){"use strict";n("2Spj"),n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("0l/t"),n("eM6i"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP");var r=n("q1tI"),a=n.n(r),o=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");return"function"!=typeof t.componentWillReceiveProps?e:a.a.Profiler?(t.UNSAFE_componentWillReceiveProps=t.componentWillReceiveProps,delete t.componentWillReceiveProps,e):e};function i(e){var t=[];return a.a.Children.forEach(e,(function(e){t.push(e)})),t}function c(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function l(e,t,n){var r=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var s=n("i8i4"),u=n.n(s),p=n("UwPn"),f={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},v=function(e){function t(){return d(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){f.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){f.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){f.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=u.a.findDOMNode(this),a=this.props,o=a.transitionName,i="object"==typeof o;this.stop();var c=function(){n.stopper=null,t()};if((p.b||!a.animation[e])&&o&&a[y[e]]){var l=i?o[e]:o+"-"+e,s=l+"-active";i&&o[e+"Active"]&&(s=o[e+"Active"]),this.stopper=Object(p.a)(r,{name:l,active:s},c)}else this.stopper=a.animation[e](r,c)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(a.a.Component),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var g="rc_animate_"+Date.now();function w(e){var t=e.children;return a.a.isValidElement(t)&&!t.key?a.a.cloneElement(t,{key:g}):t}function P(){}var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return O.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:i(w(e))},n.childrenRefs={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=i(w(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){t.stop(e)}));var o,s,u,p,f=r.showProp,m=this.currentlyAnimatingKeys,d=r.exclusive?i(w(r)):this.state.children,h=[];f?(d.forEach((function(e){var t,r,o,i=e&&c(n,e.key),l=void 0;(l=i&&i.props[f]||!e.props[f]?i:a.a.cloneElement(i||e,(o=!0,(r=f)in(t={})?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t)))&&h.push(l)})),n.forEach((function(e){e&&c(d,e.key)||h.push(e)}))):(o=n,s=[],u={},p=[],d.forEach((function(e){e&&c(o,e.key)?p.length&&(u[e.key]=p,p=[]):p.push(e)})),o.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(u,e.key)&&(s=s.concat(u[e.key])),s.push(e)})),h=s=s.concat(p)),this.setState({children:h}),n.forEach((function(e){var n=e&&e.key;if(!e||!m[n]){var r=e&&c(d,n);if(f){var a=e.props[f];if(r)!l(d,n,f)&&a&&t.keysToEnter.push(n);else a&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}})),d.forEach((function(e){var r=e&&e.key;if(!e||!m[r]){var a=e&&c(n,r);if(f){var o=e.props[f];if(a)!l(n,r,f)&&o&&t.keysToLeave.push(r);else o&&t.keysToLeave.push(r)}else a||t.keysToLeave.push(r)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?l(e,t,n):c(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map((function(n){if(null==n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return a.a.createElement(v,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)})));var o=t.component;if(o){var i=t;return"string"==typeof o&&(i=b({className:t.className,style:t.style},t.componentProps)),a.a.createElement(o,i,r)}return r[0]||null}}]),t}(a.a.Component);j.isAnimate=!0,j.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:P,onEnter:P,onLeave:P,onAppear:P};var O=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var a=i(w(r));e.isValidChildByKey(a,t)?"appear"===n?f.allowAppearCallback(r)&&(r.onAppear(t),r.onEnd(t,!0)):f.allowEnterCallback(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r,a,o,c,l=i(w(n));if(e.isValidChildByKey(l,t))e.performEnter(t);else{var s=function(){f.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};r=e.state.children,a=l,o=n.showProp,(c=r.length===a.length)&&r.forEach((function(e,t){var n=a[t];e&&n&&(e&&!n||!e&&n||e.key!==n.key||o&&e.props[o]!==n.props[o])&&(c=!1)})),c?s():e.setState({children:l},s)}}}};t.a=o(j)},SvPG:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("YeTj"),function(e){var t=e.type,n=e.onClick,r=e.children,o=e.style,i=e.bgColor,c=e.htmlType;return a.a.createElement("button",{type:c,className:"button is-"+t+" has-bg-"+i,onClick:n,style:o},r)});o.defaultProps={type:"primary",style:{},bgColor:"primary",htmlType:"button"},t.a=o},UwPn:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt"),n("f3/d"),n("rE2o"),n("ioFf");var r=n("KS4O"),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=0!==r.a.endEvents.length,i=["Webkit","Moz","O","ms"],c=["-webkit-","-moz-","-o-","ms-",""];function l(e,t){for(var n=window.getComputedStyle(e,null),r="",a=0;a<c.length&&!(r=n.getPropertyValue(c[a]+t));a++);return r}function s(e){if(o){var t=parseFloat(l(e,"transition-delay"))||0,n=parseFloat(l(e,"transition-duration"))||0,r=parseFloat(l(e,"animation-delay"))||0,a=parseFloat(l(e,"animation-duration"))||0,i=Math.max(n+t,a+r);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()}),1e3*i+200)}}function u(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var p=function(e,t,n){var o="object"===(void 0===t?"undefined":a(t)),i=o?t.name:t,c=o?t.active:t+"-active",l=n,p=void 0,f=void 0;return n&&"[object Object]"===Object.prototype.toString.call(n)&&(l=n.end,p=n.start,f=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),u(e),e.classList.remove(i),e.classList.remove(c),r.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,l&&l())},r.a.addEndEventListener(e,e.rcEndListener),p&&p(),e.classList.add(i),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,e.classList.add(c),f&&setTimeout(f,0),s(e)}),30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};p.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),u(e),r.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},r.a.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,s(e)}),0)},p.setTransition=function(e,t,n){var r=t,a=n;void 0===n&&(a=r,r=""),r=r||"",i.forEach((function(t){e.style[t+"Transition"+r]=a}))},p.isCssAnimationSupported=o,t.a=p},YeTj:function(e,t,n){},cV1h:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MTkuOTkzIiBoZWlnaHQ9IjY0NC40MTYiIHZpZXdCb3g9IjAgMCA2MTkuOTkzIDY0NC40MTYiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiMzZjNmM2Y7c3Ryb2tlOiM3MDcwNzA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTIyIDAuNSkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNNDA0My43LDE1MDguOFMzNTA4LjU4NywxNjI0LjY1MiwzNTYxLDE3NTQuMjk0czE3MS4wMTYsNzQuNDc1LDI2Mi4wNDEsMjEyLjM5MSwxMzIuNCwyNTYuNTI0LDIyMC42NjYsMTM1LjE1OFM0MjAwLjkyNywxNjQxLjIsNDE2Ny44MjcsMTU3NSw0MDQzLjcsMTUwOC44LDQwNDMuNywxNTA4LjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzU1Ny4zODQgLTE1MDguODAzKSIvPjwvZz48L3N2Zz4="},fEPi:function(e,t,n){"use strict";var r;n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n("9Odx"))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},gClD:function(e,t,n){},hMS9:function(e,t,n){},"j/AJ":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDkiIGhlaWdodD0iNDA5IiB2aWV3Qm94PSIwIDAgNDA5IDQwOSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzNmM2YzZjtzdHJva2U6IzcwNzA3MDt9LmJ7c3Ryb2tlOm5vbmU7fS5je2ZpbGw6bm9uZTt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImEiPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSIyMDQuNSIgY3k9IjIwNC41IiByPSIyMDQuNSIvPjxjaXJjbGUgY2xhc3M9ImMiIGN4PSIyMDQuNSIgY3k9IjIwNC41IiByPSIyMDQiLz48L2c+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-contact-js-24d8f0bb71e1ec3a5d9e.js.map