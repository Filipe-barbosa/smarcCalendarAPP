import{r as f}from"./react-59dd11ab.js";import{f as H,_ as A,b as B,i as K,d as _}from"./@babel-7f5b8e9f.js";function q(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var T={};function S(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&T[e[0]]||(typeof e[0]=="string"&&(T[e[0]]=new Date),q.apply(void 0,e))}function k(n,e,t){n.loadNamespaces(e,function(){if(n.isInitialized)t();else{var r=function i(){setTimeout(function(){n.off("initialized",i)},0),t()};n.on("initialized",r)}})}function J(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.languages[0],i=e.options?e.options.fallbackLng:!1,d=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(l,p){var v=e.services.backendConnector.state["".concat(l,"|").concat(p)];return v===-1||v===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(r,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||a(r,n)&&(!i||a(d,n)))}function M(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return S("i18n.languages were undefined or empty",e.languages),!0;var r=e.options.ignoreJSONStructure!==void 0;return r?e.hasLoadedNamespace(n,{precheck:function(d,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&d.services.backendConnector.backend&&d.isLanguageChangingTo&&!a(d.isLanguageChangingTo,n))return!1}}):J(n,e,t)}var W=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,$={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Y=function(e){return $[e]},G=function(e){return e.replace(W,Y)};function F(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function z(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?F(Object(t),!0).forEach(function(r){H(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var j={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:G};function Q(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};j=z(z({},j),n)}function X(){return j}var R;function Z(n){R=n}function V(){return R}var ie={type:"3rdParty",init:function(e){Q(e.options.react),Z(e)}},ee=f.createContext(),ne=function(){function n(){B(this,n),this.usedNamespaces={}}return A(n,[{key:"addUsedNamespaces",value:function(t){var r=this;t.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();function D(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(r){H(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var te=function(e,t){var r=f.useRef();return f.useEffect(function(){r.current=t?r.current:e},[e,t]),r.current};function se(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.i18n,r=f.useContext(ee)||{},i=r.i18n,d=r.defaultNS,a=t||i||V();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new ne),!a){S("You will need to pass in an i18next instance by using initReactI18next");var O=function(c,o){return typeof o=="string"?o:o&&_(o)==="object"&&typeof o.defaultValue=="string"?o.defaultValue:Array.isArray(c)?c[c.length-1]:c},l=[O,{},!1];return l.t=O,l.i18n={},l.ready=!1,l}a.options.react&&a.options.react.wait!==void 0&&S("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=P(P(P({},X()),a.options.react),e),v=p.useSuspense,x=p.keyPrefix,s=n||d||a.options&&a.options.defaultNS;s=typeof s=="string"?[s]:s||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(s);var g=(a.isInitialized||a.initializedStoreOnce)&&s.every(function(u){return M(u,a,p)});function b(){return a.getFixedT(null,p.nsMode==="fallback"?s:s[0],x)}var U=f.useState(b),C=K(U,2),I=C[0],h=C[1],w=s.join(),E=te(w),m=f.useRef(!0);f.useEffect(function(){var u=p.bindI18n,c=p.bindI18nStore;m.current=!0,!g&&!v&&k(a,s,function(){m.current&&h(b)}),g&&E&&E!==w&&m.current&&h(b);function o(){m.current&&h(b)}return u&&a&&a.on(u,o),c&&a&&a.store.on(c,o),function(){m.current=!1,u&&a&&u.split(" ").forEach(function(N){return a.off(N,o)}),c&&a&&c.split(" ").forEach(function(N){return a.store.off(N,o)})}},[a,w]);var L=f.useRef(!0);f.useEffect(function(){m.current&&!L.current&&h(b),L.current=!1},[a,x]);var y=[I,a,g];if(y.t=I,y.i18n=a,y.ready=g,g||!g&&!v)return y;throw new Promise(function(u){k(a,s,function(){u()})})}export{ie as i,se as u};
