import{a as z}from"./codemirror.es-693a43a8.js";import{a as K}from"./searchcursor.es-a63d5bcd.js";import{a as U}from"./dialog.es-57856a71.js";import"./index-cb7824a7.js";var k=Object.defineProperty,i=(x,w)=>k(x,"name",{value:w,configurable:!0});function V(x,w){return w.forEach(function(a){a&&typeof a!="string"&&!Array.isArray(a)&&Object.keys(a).forEach(function(d){if(d!=="default"&&!(d in x)){var O=Object.getOwnPropertyDescriptor(a,d);Object.defineProperty(x,d,O.get?O:{enumerable:!0,get:function(){return a[d]}})}})}),Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}i(V,"_mergeNamespaces");var L={exports:{}};(function(x,w){(function(a){a(z.exports,K.exports,U.exports)})(function(a){a.defineOption("search",{bottom:!1});function d(e,t){return typeof e=="string"?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(n){e.lastIndex=n.pos;var o=e.exec(n.string);if(o&&o.index==n.pos)return n.pos+=o[0].length||1,"searching";o?n.pos=o.index:n.skipToEnd()}}}i(d,"searchOverlay");function O(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}i(O,"SearchState");function S(e){return e.state.search||(e.state.search=new O)}i(S,"getSearchState");function N(e){return typeof e=="string"&&e==e.toLowerCase()}i(N,"queryCaseInsensitive");function m(e,t,n){return e.getSearchCursor(t,n,{caseFold:N(t),multiline:!0})}i(m,"getSearchCursor");function $(e,t,n,o,r){e.openDialog(t,o,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){b(e)},onKeyDown:r,bottom:e.options.search.bottom})}i($,"persistentDialog");function P(e,t,n,o,r){e.openDialog?e.openDialog(t,r,{value:o,selectValueOnOpen:!0,bottom:e.options.search.bottom}):r(prompt(n,o))}i(P,"dialog");function F(e,t,n,o){e.openConfirm?e.openConfirm(t,o):confirm(n)&&o[0]()}i(F,"confirmDialog");function _(e){return e.replace(/\\([nrt\\])/g,function(t,n){return n=="n"?`
`:n=="r"?"\r":n=="t"?"	":n=="\\"?"\\":t})}i(_,"parseString");function C(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);if(t)try{e=new RegExp(t[1],t[2].indexOf("i")==-1?"":"i")}catch{}else e=_(e);return(typeof e=="string"?e=="":e.test(""))&&(e=/x^/),e}i(C,"parseQuery");function R(e,t,n){t.queryText=n,t.query=C(n),e.removeOverlay(t.overlay,N(t.query)),t.overlay=d(t.query,N(t.query)),e.addOverlay(t.overlay),e.showMatchesOnScrollbar&&(t.annotate&&(t.annotate.clear(),t.annotate=null),t.annotate=e.showMatchesOnScrollbar(t.query,N(t.query)))}i(R,"startSearch");function y(e,t,n,o){var r=S(e);if(r.query)return D(e,t);var s=e.getSelection()||r.lastQuery;if(s instanceof RegExp&&s.source=="x^"&&(s=null),n&&e.openDialog){var c=null,p=i(function(f,v){a.e_stop(v),f&&(f!=r.queryText&&(R(e,r,f),r.posFrom=r.posTo=e.getCursor()),c&&(c.style.opacity=1),D(e,v.shiftKey,function(h,g){var u;g.line<3&&document.querySelector&&(u=e.display.wrapper.querySelector(".CodeMirror-dialog"))&&u.getBoundingClientRect().bottom-4>e.cursorCoords(g,"window").top&&((c=u).style.opacity=.4)}))},"searchNext");$(e,Q(e),s,p,function(f,v){var h=a.keyName(f),g=e.getOption("extraKeys"),u=g&&g[h]||a.keyMap[e.getOption("keyMap")][h];u=="findNext"||u=="findPrev"||u=="findPersistentNext"||u=="findPersistentPrev"?(a.e_stop(f),R(e,S(e),v),e.execCommand(u)):(u=="find"||u=="findPersistent")&&(a.e_stop(f),p(v,f))}),o&&s&&(R(e,r,s),D(e,t))}else P(e,Q(e),"Search for:",s,function(f){f&&!r.query&&e.operation(function(){R(e,r,f),r.posFrom=r.posTo=e.getCursor(),D(e,t)})})}i(y,"doSearch");function D(e,t,n){e.operation(function(){var o=S(e),r=m(e,o.query,t?o.posFrom:o.posTo);!r.find(t)&&(r=m(e,o.query,t?a.Pos(e.lastLine()):a.Pos(e.firstLine(),0)),!r.find(t))||(e.setSelection(r.from(),r.to()),e.scrollIntoView({from:r.from(),to:r.to()},20),o.posFrom=r.from(),o.posTo=r.to(),n&&n(r.from(),r.to()))})}i(D,"findNext");function b(e){e.operation(function(){var t=S(e);t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))})}i(b,"clearSearch");function l(e,t){var n=e?document.createElement(e):document.createDocumentFragment();for(var o in t)n[o]=t[o];for(var r=2;r<arguments.length;r++){var s=arguments[r];n.appendChild(typeof s=="string"?document.createTextNode(s):s)}return n}i(l,"el");function Q(e){return l("",null,l("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",l("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",l("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}i(Q,"getQueryDialog");function j(e){return l("",null," ",l("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",l("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}i(j,"getReplaceQueryDialog");function A(e){return l("",null,l("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",l("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}i(A,"getReplacementQueryDialog");function I(e){return l("",null,l("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",l("button",{},e.phrase("Yes"))," ",l("button",{},e.phrase("No"))," ",l("button",{},e.phrase("All"))," ",l("button",{},e.phrase("Stop")))}i(I,"getDoReplaceConfirm");function T(e,t,n){e.operation(function(){for(var o=m(e,t);o.findNext();)if(typeof t!="string"){var r=e.getRange(o.from(),o.to()).match(t);o.replace(n.replace(/\$(\d)/g,function(s,c){return r[c]}))}else o.replace(n)})}i(T,"replaceAll");function E(e,t){if(!e.getOption("readOnly")){var n=e.getSelection()||S(e).lastQuery,o=t?e.phrase("Replace all:"):e.phrase("Replace:"),r=l("",null,l("span",{className:"CodeMirror-search-label"},o),j(e));P(e,r,o,n,function(s){s&&(s=C(s),P(e,A(e),e.phrase("Replace with:"),"",function(c){if(c=_(c),t)T(e,s,c);else{b(e);var p=m(e,s,e.getCursor("from")),f=i(function(){var h=p.from(),g;!(g=p.findNext())&&(p=m(e,s),!(g=p.findNext())||h&&p.from().line==h.line&&p.from().ch==h.ch)||(e.setSelection(p.from(),p.to()),e.scrollIntoView({from:p.from(),to:p.to()}),F(e,I(e),e.phrase("Replace?"),[function(){v(g)},f,function(){T(e,s,c)}]))},"advance"),v=i(function(h){p.replace(typeof s=="string"?c:c.replace(/\$(\d)/g,function(g,u){return h[u]})),f()},"doReplace");f()}}))})}}i(E,"replace"),a.commands.find=function(e){b(e),y(e)},a.commands.findPersistent=function(e){b(e),y(e,!1,!0)},a.commands.findPersistentNext=function(e){y(e,!1,!0,!0)},a.commands.findPersistentPrev=function(e){y(e,!0,!0,!0)},a.commands.findNext=y,a.commands.findPrev=function(e){y(e,!0)},a.commands.clearSearch=b,a.commands.replace=E,a.commands.replaceAll=function(e){E(e,!0)}})})();var B=L.exports,J=V({__proto__:null,default:B},[L.exports]);export{J as s};