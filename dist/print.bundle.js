(()=>{"use strict";var t={495:(t,e,o)=>{const r=[],n=t=>{const e=function(t){const e=[];return{name:t,tasks:e,addTask:(t,o,r,n,s,a)=>{e.push(c(t,o,r,n,s,a,this))}}}(t);return r.push(e),e},c=(t,e,o,r,n,c,s)=>({title:t,description:e,due:o,priority:r,notes:n,complete:c,toggleComplete:function(){this.complete?this.complete=!1:this.complete=!0}});!function(t){let e;try{e=window.localStorage;const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}(),function(){for(var t=0;t<localStorage.length;t++){const e=localStorage.key(t),o=localStorage.getItem(e);if(o){const t=JSON.parse(o),r=n(e);t.forEach((t=>{r.addTask(t.title,t.description,t.due,t.priority,t.notes,t.complete)}))}}}()}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,o),c.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(495)})();