_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+f0l":function(e,t,n){e.exports={"inputs-container":"LevelSlider_inputs-container__3QGlp","range-input":"LevelSlider_range-input__3OQn5","number-input":"LevelSlider_number-input__1iBKK"}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return K}));var r=n("q1tI"),a=n.n(r),o=n("vRNQ"),i=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=n("+f0l"),s=n.n(u),l=a.a.createElement,d=function(e){var t=e.level,n=e.onLevelChange,r=null!==n&&void 0!==n?n:function(){},o={min:1,max:13,value:Math.min(t,13),onChange:function(e){return r(e.target.valueAsNumber)}},i={min:0,max:25,value:t-13,onChange:function(e){return r(e.target.valueAsNumber+13)}};return l(a.a.Fragment,null,"Select your weekly vault level:",l("div",{className:s.a["inputs-container"]},l("input",c({className:s.a["range-input"],type:"range"},o)),l("input",c({className:s.a["number-input"],type:"number"},o))),t>=13&&l("div",{className:s.a["inputs-container"]},l("input",c({className:s.a["range-input"],type:"range"},i)),l("input",c({className:s.a["number-input"],type:"number"},i))))},p=n("YFqc"),f=n.n(p),m=n("ti9V"),h=n.n(m);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y,g,w,b,_,x=.1;function k(e){var t={common:0,rare:0,epic:0,champion:0};return t[e]=1,t.rare+=t.common*x,t.common*=1-x,t.epic+=t.rare*x,t.rare*=1-x,t.champion+=t.epic*x,t.epic*=1-x,t}function M(e){var t;switch(e){case g.rare:t=["common","common","common","common","rare"].map((function(e){return k(y[e])}));break;case g.epic:t=["common","common","rare","rare","epic"].map((function(e){return k(y[e])}));break;case g.champion:t=["rare","rare","rare","epic","champion"].map((function(e){return k(y[e])}));break;case g.bonus:t=["common","common","rare","rare","rare"].map((function(e){return k(y[e])}))}return t}function N(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.common="common",e.rare="rare",e.epic="epic",e.champion="champion"}(y||(y={})),function(e){e.rare="rare",e.epic="epic",e.champion="champion",e.bonus="bonus"}(g||(g={})),(b=w||(w={})).bronze="bronze",b.silver="silver",b.gold="gold",b.platinum="platinum",b.diamond="diamond";var E=(v(_={},y.common,100),v(_,y.rare,300),v(_,y.epic,1200),v(_,y.champion,3e3),_),O=.1,R=.01;function C(e){for(var t=0,n=0,r=Object.values(y);n<r.length;n++){var a=r[n];t+=e[a]*E[a]}return t}function j(e){var t=function(e){return C(e)}(e.expected_rewards);if(t+=e.shards,(e.champion_card||e.champion_wildcard)&&(t+=E[y.champion]),e.expedition_token){var n,r=N(M(g.epic));try{for(r.s();!(n=r.n()).done;){t+=C(n.value)}}catch(a){r.e(a)}finally{r.f()}}return t}var A=n("nOHt"),I=a.a.createElement,P=function(e){var t=e.name,n=e.quantity,r=e.precision,a=void 0===r?3:r,o=Object(A.useRouter)().basePath;return I("div",{className:h.a.reward},I("p",null,t),I("img",{src:"".concat(o,"/").concat(t,".svg"),alt:t,title:t}),I("p",null,n.toFixed(a)))},H=function(e){var t=e.type,n=Object(A.useRouter)().basePath,r="token"==t?"token.svg":"champion.svg",a="card"==t?"Random champion card":"wildcard"==t?"Champion wildcard":"Expedition token";return I("div",{className:h.a.reward},I("img",{src:"".concat(n,"/").concat(r),alt:a,title:a}),I("p",null,a))},q=function(e){var t=e.type,n=e.rewards,r=Object(A.useRouter)().basePath,a="shards"==t?j(n):j(n)*O*R,o="shards"==t?"".concat(a.toFixed(0)," shards"):"$".concat(a.toFixed(2));return I("div",{className:h.a.reward},I("img",{src:"".concat(r,"/").concat(t,".svg"),alt:t,title:t}),I("p",null,o))},L=function(e){var t=e.rewards,n=t.champion_card||t.champion_wildcard||t.expedition_token;return I(a.a.Fragment,null,I("div",{className:h.a["rewards-group"]},I("p",null,"Expected rewards from chests:"),I("div",{className:h.a["rewards-list-container"]},I(P,{name:"common",quantity:t.expected_rewards.common}),I(P,{name:"rare",quantity:t.expected_rewards.rare}),I(P,{name:"epic",quantity:t.expected_rewards.epic}),I(P,{name:"champion",quantity:t.expected_rewards.champion}),I(P,{name:"shards",quantity:t.shards,precision:0}))),n&&I("div",{className:h.a["rewards-group"]},I("p",null,"You will also recieve:"),I("div",{className:h.a["rewards-list-container"]},t.champion_card&&I(H,{type:"card"}),t.champion_wildcard&&I(H,{type:"wildcard"}),t.expedition_token&&I(H,{type:"token"}))),I("div",{className:h.a["rewards-group"]},I("p",null,"Estimated value:"),I("div",{className:h.a["rewards-list-container"]},I(q,{rewards:t,type:"shards"}),I(q,{rewards:t,type:"dollar"}))))},D=n("8Kt/"),T=n.n(D),F=a.a.createElement,K=!0;t.default=function(e){var t=e.levelRewards,n=Object(r.useState)(1),o=n[0],c=n[1],u=t[o-1];return F(a.a.Fragment,null,F(T.a,null,F("script",{async:!0,defer:!0,"data-domain":"szebniok.github.io/lor-rewards",src:"https://stats.000077.xyz/js/plausible.js"})),F("nav",null,F("h1",null,F(f.a,{href:"/"},F("a",null,"Legends of Runeterra weekly rewards")))),F("main",{className:i.a.main},F(d,{level:o,onLevelChange:c}),F(L,{rewards:u})),F("footer",{className:"extend ".concat(i.a.footer)},F("div",null,F("p",null,"View the source code ",F("a",{href:"https://github.com/szebniok/lor-rewards"},"on GitHub"),". Last updated: ",F("time",{dateTime:"2020-10-20"},"2020-10-20 (patch 1.12)")),F("p",null,F("a",{href:"/"},"lor-rewards")," isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc."))))}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var s=p[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],d=r[s]||new Set;d.has(l)?o=!1:(d.add(l),r[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),c=n("7W2i"),u=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=!1,f=function(e){c(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,p&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),u=(n("g/15"),n("nOHt")),s=new Map,l=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function f(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],m=(0,u.useRouter)(),h=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),y=v.href,g=v.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(y)&&!d[y+"%"+g])return p(o,(function(){f(m,y,g)}))}),[t,o,y,g,m]);var w=e.children,b=e.replace,_=e.shallow,x=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var k=i.Children.only(w),M={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,y,g,b,_,x)}};return t&&(M.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),f(m,y,g,{priority:!0}))}),!e.passHref&&("a"!==k.type||"href"in k.props)||(M.href=(0,c.addBasePath)(g)),i.default.cloneElement(k,M)};t.default=m},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},ti9V:function(e,t,n){e.exports={"rewards-group":"WeeklyRewards_rewards-group__3_rxq","rewards-list-container":"WeeklyRewards_rewards-list-container__2tt5G",reward:"WeeklyRewards_reward__NcQXv"}},vRNQ:function(e,t,n){e.exports={main:"Home_main__1x8gC",footer:"Home_footer__1WdhD"}}},[["/EDR",0,2,1]]]);