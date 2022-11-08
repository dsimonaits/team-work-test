function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=document.querySelector(".modal");function r({poster_path:t,title:e,vote_average:r,popularity:i,vote_count:o,original_title:s,genres:a,overview:c}){const u=`\n  <div class="wrapper">\n    <div class="image">\n      <img src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" />\n    </div>\n\n    <div class="wrapper__text">\n      <h2 class="wrapper__title">${e}</h2>\n       <div class="wrapper__info">\n        <ul class="list">\n          <li class="list__item">\n           <p class="list__item-text">Vote / Votes</p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-text">Original Title</p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-text">Original Title</p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-text">Genre</p>\n          </li>\n        </ul>\n        <ul class="list list_width">\n          <li class="list__item">\n           <p class="list__item-elem">\n             <span class="active">${r}</span> / ${o}\n           </p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-elem">${i}</p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-elem">${s}</p>\n          </li>\n          <li class="list__item">\n           <p class="list__item-elem">${a.map((t=>t.name)).join(",")}</p>\n          </li>\n        </ul>\n   </div>\n\n   <p class="text">About</p>\n   <p class="paragraph">${c}</p>\n   <div class="btns-box">\n   <button type="button" class="btns-box__btn is-active" data-add="watched">\n     add to Watched\n   </button>\n   <button type="button" class="btns-box__btn" data-add="queue">\n     add to queue\n   </button>\n </div>\n </div>\n \n    </div>\n`;n.insertAdjacentHTML("beforeend",u)}function i(t,e){return function(){return t.apply(e,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,a=(c=Object.create(null),t=>{const e=o.call(t);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())});var c;const u=t=>(t=t.toLowerCase(),e=>a(e)===t),l=t=>e=>typeof e===t,{isArray:f}=Array,h=l("undefined");const p=u("ArrayBuffer");const d=l("string"),g=l("function"),m=l("number"),y=t=>null!==t&&"object"==typeof t,b=t=>{if("object"!==a(t))return!1;const e=s(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},w=u("Date"),v=u("File"),E=u("Blob"),I=u("FileList"),S=u("URLSearchParams");function A(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,i;if("object"!=typeof t&&(t=[t]),f(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let s;for(r=0;r<o;r++)s=i[r],e.call(null,t[s],s,t)}}const _=(O="undefined"!=typeof Uint8Array&&s(Uint8Array),t=>O&&t instanceof O);var O;const T=u("HTMLFormElement"),C=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),B=u("RegExp"),D=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};A(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)};var R={isArray:f,isArrayBuffer:p,isBuffer:function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||o.call(t)===e||g(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&p(t.buffer),e},isString:d,isNumber:m,isBoolean:t=>!0===t||!1===t,isObject:y,isPlainObject:b,isUndefined:h,isDate:w,isFile:v,isBlob:E,isRegExp:B,isFunction:g,isStream:t=>y(t)&&g(t.pipe),isURLSearchParams:S,isTypedArray:_,isFileList:I,forEach:A,merge:function t(){const e={},n=(n,r)=>{b(e[r])&&b(n)?e[r]=t(e[r],n):b(n)?e[r]=t({},n):f(n)?e[r]=n.slice():e[r]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&A(arguments[t],n);return e},extend:(t,e,n,{allOwnKeys:r}={})=>(A(e,((e,r)=>{n&&g(e)?t[r]=i(e,n):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,r)=>{let i,o,a;const c={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)a=i[o],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&s(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:a,kindOfTest:u,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(f(t))return t;let e=t.length;if(!m(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:T,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:D,freezeMethods:t=>{D(t,((e,n)=>{const r=t[n];g(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return f(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e)};function L(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const j=L.prototype,x={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{x[t]={value:t}})),Object.defineProperties(L,x),Object.defineProperty(j,"isAxiosError",{value:!0}),L.from=(t,e,n,r,i,o)=>{const s=Object.create(j);return R.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),L.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};var k,N,U,P=L,F=t("object"==typeof self?self.FormData:window.FormData);N=function(t){var e,n,r=K(t),i=r[0],o=r[1],s=new V(function(t,e,n){return 3*(e+n)/4-n}(0,i,o)),a=0,c=o>0?i-4:i;for(n=0;n<c;n+=4)e=H[t.charCodeAt(n)]<<18|H[t.charCodeAt(n+1)]<<12|H[t.charCodeAt(n+2)]<<6|H[t.charCodeAt(n+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;2===o&&(e=H[t.charCodeAt(n)]<<2|H[t.charCodeAt(n+1)]>>4,s[a++]=255&e);1===o&&(e=H[t.charCodeAt(n)]<<10|H[t.charCodeAt(n+1)]<<4|H[t.charCodeAt(n+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e);return s},U=function(t){for(var e,n=t.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(Y(t,s,s+o>a?a:s+o));1===r?(e=t[n-1],i.push(q[e>>2]+q[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(q[e>>10]+q[e>>4&63]+q[e<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var M,z,q=[],H=[],V="undefined"!=typeof Uint8Array?Uint8Array:Array,W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J=0,G=W.length;J<G;++J)q[J]=W[J],H[W.charCodeAt(J)]=J;function K(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Y(t,e,n){for(var r,i,o=[],s=e;s<n;s+=3)r=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),o.push(q[(i=r)>>18&63]+q[i>>12&63]+q[i>>6&63]+q[63&i]);return o.join("")}H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63,M=function(t,e,n,r,i){var o,s,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,f=n?i-1:0,h=n?-1:1,p=t[e+f];for(f+=h,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[e+f],f+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+t[e+f],f+=h,l-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,r),o-=u}return(p?-1:1)*s*Math.pow(2,o-r)},z=function(t,e,n,r,i,o){var s,a,c,u=8*o-i-1,l=(1<<u)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),(e+=s+f>=1?h/c:h*Math.pow(2,1-f))*c>=2&&(s++,c/=2),s+f>=l?(a=0,s=l):s+f>=1?(a=(e*c-1)*Math.pow(2,i),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;t[n+p]=255&s,p+=d,s/=256,u-=8);t[n+p-d]|=128*g};const X="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;k=Q;function Z(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Q.prototype),e}function Q(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Q.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|st(t,e);let r=Z(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if($t(t,Uint8Array)){const e=new Uint8Array(t);return it(e.buffer,e.byteOffset,e.byteLength)}return rt(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if($t(t,ArrayBuffer)||t&&$t(t.buffer,ArrayBuffer))return it(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&($t(t,SharedArrayBuffer)||t&&$t(t.buffer,SharedArrayBuffer)))return it(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return Q.from(r,e,n);const i=function(t){if(Q.isBuffer(t)){const e=0|ot(t.length),n=Z(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Ft(t.length)?Z(0):rt(t);if("Buffer"===t.type&&Array.isArray(t.data))return rt(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Q.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Z(t<0?0:0|ot(t))}function rt(t){const e=t.length<0?0:0|ot(t.length),n=Z(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function it(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,Q.prototype),r}function ot(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function st(t,e){if(Q.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||$t(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Nt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ut(t).length;default:if(i)return r?-1:Nt(t).length;e=(""+e).toLowerCase(),i=!0}}function at(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return vt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return bt(this,e,n);case"latin1":case"binary":return wt(this,e,n);case"base64":return mt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Et(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function ct(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function ut(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ft(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=Q.from(e,r)),Q.isBuffer(e))return 0===e.length?-1:lt(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):lt(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function lt(t,e,n,r,i){let o,s=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}function u(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let r=-1;for(o=n;o<a;o++)if(u(t,o)===u(e,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===c)return r*s}else-1!==r&&(o-=o-r),r=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){let n=!0;for(let r=0;r<c;r++)if(u(t,o+r)!==u(e,r)){n=!1;break}if(n)return o}return-1}function ft(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=e.length;let s;for(r>o/2&&(r=o/2),s=0;s<r;++s){const r=parseInt(e.substr(2*s,2),16);if(Ft(r))return s;t[n+s]=r}return s}function ht(t,e,n,r){return Pt(Nt(e,t.length-n),t,n,r)}function pt(t,e,n,r){return Pt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function dt(t,e,n,r){return Pt(Ut(e),t,n,r)}function gt(t,e,n,r){return Pt(function(t,e){let n,r,i;const o=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(e,t.length-n),t,n,r)}function mt(t,e,n){return 0===e&&n===t.length?U(t):U(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=n){let n,r,a,c;switch(s){case 1:e<128&&(o=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(o=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}Q.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Q.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Q.prototype,"parent",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.buffer}}),Object.defineProperty(Q.prototype,"offset",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.byteOffset}}),Q.poolSize=8192,Q.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Q.prototype,Uint8Array.prototype),Object.setPrototypeOf(Q,Uint8Array),Q.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Z(t):void 0!==e?"string"==typeof n?Z(t).fill(e,n):Z(t).fill(e):Z(t)}(t,e,n)},Q.allocUnsafe=function(t){return nt(t)},Q.allocUnsafeSlow=function(t){return nt(t)},Q.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Q.prototype},Q.compare=function(t,e){if($t(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),$t(e,Uint8Array)&&(e=Q.from(e,e.offset,e.byteLength)),!Q.isBuffer(t)||!Q.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},Q.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Q.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Q.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=Q.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if($t(e,Uint8Array))i+e.length>r.length?(Q.isBuffer(e)||(e=Q.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!Q.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},Q.byteLength=st,Q.prototype._isBuffer=!0,Q.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Q.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Q.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Q.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Q.prototype.toLocaleString=Q.prototype.toString,Q.prototype.equals=function(t){if(!Q.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Q.compare(this,t)},Q.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},X&&(Q.prototype[X]=Q.prototype.inspect),Q.prototype.compare=function(t,e,n,r,i){if($t(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),!Q.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0);const a=Math.min(o,s),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){o=c[t],s=u[t];break}return o<s?-1:s<o?1:0},Q.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Q.prototype.indexOf=function(t,e,n){return ut(this,t,e,n,!0)},Q.prototype.lastIndexOf=function(t,e,n){return ut(this,t,e,n,!1)},Q.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return ft(this,t,e,n);case"utf8":case"utf-8":return ht(this,t,e,n);case"ascii":case"latin1":case"binary":return pt(this,t,e,n);case"base64":return dt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gt(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},Q.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function bt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function wt(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function vt(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=Mt[t[r]];return i}function Et(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function It(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function St(t,e,n,r,i,o){if(!Q.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function At(t,e,n,r,i){Lt(e,r,i,t,n,7);let o=Number(e&BigInt(4294967295));t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function _t(t,e,n,r,i){Lt(e,r,i,t,n,7);let o=Number(e&BigInt(4294967295));t[n+7]=o,o>>=8,t[n+6]=o,o>>=8,t[n+5]=o,o>>=8,t[n+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function Ot(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Tt(t,e,n,r,i){return e=+e,n>>>=0,i||Ot(t,0,n,4),z(t,e,n,r,23,4),n+4}function Ct(t,e,n,r,i){return e=+e,n>>>=0,i||Ot(t,0,n,8),z(t,e,n,r,52,8),n+8}Q.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,Q.prototype),r},Q.prototype.readUintLE=Q.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let r=this[t],i=1,o=0;for(;++o<e&&(i*=256);)r+=this[t+o]*i;return r},Q.prototype.readUintBE=Q.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},Q.prototype.readUint8=Q.prototype.readUInt8=function(t,e){return t>>>=0,e||It(t,1,this.length),this[t]},Q.prototype.readUint16LE=Q.prototype.readUInt16LE=function(t,e){return t>>>=0,e||It(t,2,this.length),this[t]|this[t+1]<<8},Q.prototype.readUint16BE=Q.prototype.readUInt16BE=function(t,e){return t>>>=0,e||It(t,2,this.length),this[t]<<8|this[t+1]},Q.prototype.readUint32LE=Q.prototype.readUInt32LE=function(t,e){return t>>>=0,e||It(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Q.prototype.readUint32BE=Q.prototype.readUInt32BE=function(t,e){return t>>>=0,e||It(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Q.prototype.readBigUInt64LE=zt((function(t){jt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||xt(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Q.prototype.readBigUInt64BE=zt((function(t){jt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||xt(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Q.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let r=this[t],i=1,o=0;for(;++o<e&&(i*=256);)r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},Q.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||It(t,e,this.length);let r=e,i=1,o=this[t+--r];for(;r>0&&(i*=256);)o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},Q.prototype.readInt8=function(t,e){return t>>>=0,e||It(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Q.prototype.readInt16LE=function(t,e){t>>>=0,e||It(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Q.prototype.readInt16BE=function(t,e){t>>>=0,e||It(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Q.prototype.readInt32LE=function(t,e){return t>>>=0,e||It(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Q.prototype.readInt32BE=function(t,e){return t>>>=0,e||It(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Q.prototype.readBigInt64LE=zt((function(t){jt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||xt(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Q.prototype.readBigInt64BE=zt((function(t){jt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||xt(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Q.prototype.readFloatLE=function(t,e){return t>>>=0,e||It(t,4,this.length),M(this,t,!0,23,4)},Q.prototype.readFloatBE=function(t,e){return t>>>=0,e||It(t,4,this.length),M(this,t,!1,23,4)},Q.prototype.readDoubleLE=function(t,e){return t>>>=0,e||It(t,8,this.length),M(this,t,!0,52,8)},Q.prototype.readDoubleBE=function(t,e){return t>>>=0,e||It(t,8,this.length),M(this,t,!1,52,8)},Q.prototype.writeUintLE=Q.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){St(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},Q.prototype.writeUintBE=Q.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){St(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},Q.prototype.writeUint8=Q.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,1,255,0),this[e]=255&t,e+1},Q.prototype.writeUint16LE=Q.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeUint16BE=Q.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeUint32LE=Q.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Q.prototype.writeUint32BE=Q.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeBigUInt64LE=zt((function(t,e=0){return At(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Q.prototype.writeBigUInt64BE=zt((function(t,e=0){return _t(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Q.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);St(this,t,e,n,r-1,-r)}let i=0,o=1,s=0;for(this[e]=255&t;++i<n&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+n},Q.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);St(this,t,e,n,r-1,-r)}let i=n-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+n},Q.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Q.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Q.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||St(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeBigInt64LE=zt((function(t,e=0){return At(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Q.prototype.writeBigInt64BE=zt((function(t,e=0){return _t(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Q.prototype.writeFloatLE=function(t,e,n){return Tt(this,t,e,!0,n)},Q.prototype.writeFloatBE=function(t,e,n){return Tt(this,t,e,!1,n)},Q.prototype.writeDoubleLE=function(t,e,n){return Ct(this,t,e,!0,n)},Q.prototype.writeDoubleBE=function(t,e,n){return Ct(this,t,e,!1,n)},Q.prototype.copy=function(t,e,n,r){if(!Q.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},Q.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Q.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const o=Q.isBuffer(t)?t:Q.from(t,r),s=o.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=o[i%s]}return this};const Bt={};function Dt(t,e,n){Bt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Rt(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Lt(t,e,n,r,i,o){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new Bt.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){jt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||xt(e,t.length-(n+1))}(r,i,o)}function jt(t,e){if("number"!=typeof t)throw new Bt.ERR_INVALID_ARG_TYPE(e,"number",t)}function xt(t,e,n){if(Math.floor(t)!==t)throw jt(t,n),new Bt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new Bt.ERR_BUFFER_OUT_OF_BOUNDS;throw new Bt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Dt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Dt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Dt("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Rt(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Rt(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const kt=/[^+/0-9A-Za-z-_]/g;function Nt(t,e){let n;e=e||1/0;const r=t.length;let i=null;const o=[];for(let s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Ut(t){return N(function(t){if((t=(t=t.split("=")[0]).trim().replace(kt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Pt(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function $t(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Ft(t){return t!=t}const Mt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function zt(t){return"undefined"==typeof BigInt?qt:t}function qt(){throw new Error("BigInt not supported")}var Ht=k;function Vt(t){return R.isPlainObject(t)||R.isArray(t)}function Wt(t){return R.endsWith(t,"[]")?t.slice(0,-2):t}function Jt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Wt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Gt=R.toFlatObject(R,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Kt=function(t,e,n){if(!R.isObject(t))throw new TypeError("target must be an object");e=e||new(F||FormData);const r=(n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!R.isUndefined(e[t])}))).metaTokens,i=n.visitor||l,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=e)&&R.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!R.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(R.isDate(t))return t.toISOString();if(!a&&R.isBlob(t))throw new P("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(t)||R.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Ht.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"==typeof t)if(R.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(R.isArray(t)&&function(t){return R.isArray(t)&&!t.some(Vt)}(t)||R.isFileList(t)||R.endsWith(n,"[]")&&(a=R.toArray(t)))return n=Wt(n),a.forEach((function(t,r){!R.isUndefined(t)&&null!==t&&e.append(!0===s?Jt([n],r,o):null===s?n:n+"[]",u(t))})),!1;return!!Vt(t)||(e.append(Jt(i,n,o),u(t)),!1)}const f=[],h=Object.assign(Gt,{defaultVisitor:l,convertValue:u,isVisitable:Vt});if(!R.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!R.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),R.forEach(n,(function(n,o){!0===(!(R.isUndefined(n)||null===n)&&i.call(e,n,R.isString(o)?o.trim():o,r,h))&&t(n,r?r.concat(o):[o])})),f.pop()}}(t),e};function Yt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Xt(t,e){this._pairs=[],t&&Kt(t,this,e)}const Zt=Xt.prototype;Zt.append=function(t,e){this._pairs.push([t,e])},Zt.toString=function(t){const e=t?function(e){return t.call(this,e,Yt)}:Yt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Qt=Xt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const r=n&&n.encode||te,i=n&&n.serialize;let o;if(o=i?i(e,n):R.isURLSearchParams(e)?e.toString():new Qt(e,n).toString(r),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}var ne=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ie="undefined"!=typeof URLSearchParams?URLSearchParams:Qt,oe=FormData;const se=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var ae={isBrowser:!0,classes:{URLSearchParams:ie,FormData:oe,Blob:Blob},isStandardBrowserEnv:se,protocols:["http","https","file","blob","url","data"]};function ce(t,e){return Kt(t,new ae.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return ae.isNode&&R.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}var ue=function(t){function e(t,n,r,i){let o=t[i++];const s=Number.isFinite(+o),a=i>=t.length;if(o=!o&&R.isArray(r)?r.length:o,a)return R.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!s;r[o]&&R.isObject(r[o])||(r[o]=[]);return e(t,n,r[o],i)&&R.isArray(r[o])&&(r[o]=function(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}(r[o])),!s}if(R.isFormData(t)&&R.isFunction(t.entries)){const n={};return R.forEachEntry(t,((t,r)=>{e(function(t){return R.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};function le(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var fe=ae.isStandardBrowserEnv?{write:function(t,e,n,r,i,o){const s=[];s.push(t+"="+encodeURIComponent(e)),R.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),R.isString(r)&&s.push("path="+r),R.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function he(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function pe(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?he(t,e):e}var de=ae.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=R.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function ge(t,e,n){P.call(this,null==t?"canceled":t,P.ERR_CANCELED,e,n),this.name="CanceledError"}R.inherits(ge,P,{__CANCEL__:!0});var me=ge;function ye(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const be=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var we=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&be[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const ve=Symbol("internals"),Ee=Symbol("defaults");function Ie(t){return t&&String(t).trim().toLowerCase()}function Se(t){return!1===t||null==t?t:R.isArray(t)?t.map(Se):String(t)}function Ae(t,e,n,r){return R.isFunction(r)?r.call(this,e,n):R.isString(e)?R.isString(r)?-1!==e.indexOf(r):R.isRegExp(r)?r.test(e):void 0:void 0}function _e(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}function Oe(t,e){t&&this.set(t),this[Ee]=e||null}Object.assign(Oe.prototype,{set:function(t,e,n){const r=this;function i(t,e,n){const i=Ie(e);if(!i)throw new Error("header name must be a non-empty string");const o=_e(r,i);(!o||!0===n||!1!==r[o]&&!1!==n)&&(r[o||e]=Se(t))}return R.isPlainObject(t)?R.forEach(t,((t,n)=>{i(t,n,e)})):i(e,t,n),this},get:function(t,e){if(!(t=Ie(t)))return;const n=_e(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(R.isFunction(e))return e.call(this,t,n);if(R.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=Ie(t)){const n=_e(this,t);return!(!n||e&&!Ae(0,this[n],n,e))}return!1},delete:function(t,e){const n=this;let r=!1;function i(t){if(t=Ie(t)){const i=_e(n,t);!i||e&&!Ae(0,n[i],i,e)||(delete n[i],r=!0)}}return R.isArray(t)?t.forEach(i):i(t),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return R.forEach(this,((r,i)=>{const o=_e(n,i);if(o)return e[o]=Se(r),void delete e[i];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(i):String(i).trim();s!==i&&delete e[i],e[s]=Se(r),n[s]=!0})),this},toJSON:function(t){const e=Object.create(null);return R.forEach(Object.assign({},this[Ee]||null,this),((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&R.isArray(n)?n.join(", "):n)})),e}}),Object.assign(Oe,{from:function(t){return R.isString(t)?new this(we(t)):t instanceof this?t:new this(t)},accessor:function(t){const e=(this[ve]=this[ve]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=Ie(t);e[r]||(!function(t,e){const n=R.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}(n,t),e[r]=!0)}return R.isArray(t)?t.forEach(r):r(t),this}}),Oe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),R.freezeMethods(Oe.prototype),R.freezeMethods(Oe);var Te=Oe;var Ce=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,o=0,s=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[s];i||(i=c),n[o]=a,r[o]=c;let l=s,f=0;for(;l!==o;)f+=n[l++],l%=t;if(o=(o+1)%t,o===s&&(s=(s+1)%t),c-i<e)return;const h=u&&c-u;return h?Math.round(1e3*f/h):void 0}};function Be(t,e){let n=0;const r=Ce(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a);n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&o<=s?(s-o)/c:void 0};u[e?"download":"upload"]=!0,t(u)}}function De(t){return new Promise((function(e,n){let r=t.data;const i=Te.from(t.headers).normalize(),o=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}R.isFormData(r)&&ae.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=pe(t.baseURL,t.url);function l(){if(!c)return;const r=Te.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());le((function(t){e(t),a()}),(function(t){n(t),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new P("Request aborted",P.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new P("Network Error",P.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||re;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new P(e,r.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,t,c)),c=null},ae.isStandardBrowserEnv){const e=(t.withCredentials||de(u))&&t.xsrfCookieName&&fe.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&R.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),R.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&"json"!==o&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Be(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Be(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{c&&(n(!e||e.type?new me(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=ye(u);f&&-1===ae.protocols.indexOf(f)?n(new P("Unsupported protocol "+f+":",P.ERR_BAD_REQUEST,t)):c.send(r||null)}))}const Re={http:De,xhr:De};var Le,je,xe,ke={getAdapter:t=>{if(R.isString(t)){const e=Re[t];if(!t)throw Error(R.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!R.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:Re},Ne=Le={};function Ue(){throw new Error("setTimeout has not been defined")}function Pe(){throw new Error("clearTimeout has not been defined")}function $e(t){if(je===setTimeout)return setTimeout(t,0);if((je===Ue||!je)&&setTimeout)return je=setTimeout,setTimeout(t,0);try{return je(t,0)}catch(e){try{return je.call(null,t,0)}catch(e){return je.call(this,t,0)}}}!function(){try{je="function"==typeof setTimeout?setTimeout:Ue}catch(t){je=Ue}try{xe="function"==typeof clearTimeout?clearTimeout:Pe}catch(t){xe=Pe}}();var Fe,Me=[],ze=!1,qe=-1;function He(){ze&&Fe&&(ze=!1,Fe.length?Me=Fe.concat(Me):qe=-1,Me.length&&Ve())}function Ve(){if(!ze){var t=$e(He);ze=!0;for(var e=Me.length;e;){for(Fe=Me,Me=[];++qe<e;)Fe&&Fe[qe].run();qe=-1,e=Me.length}Fe=null,ze=!1,function(t){if(xe===clearTimeout)return clearTimeout(t);if((xe===Pe||!xe)&&clearTimeout)return xe=clearTimeout,clearTimeout(t);try{xe(t)}catch(e){try{return xe.call(null,t)}catch(e){return xe.call(this,t)}}}(t)}}function We(t,e){this.fun=t,this.array=e}function Je(){}Ne.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Me.push(new We(t,e)),1!==Me.length||ze||$e(Ve)},We.prototype.run=function(){this.fun.apply(null,this.array)},Ne.title="browser",Ne.browser=!0,Ne.env={},Ne.argv=[],Ne.version="",Ne.versions={},Ne.on=Je,Ne.addListener=Je,Ne.once=Je,Ne.off=Je,Ne.removeListener=Je,Ne.removeAllListeners=Je,Ne.emit=Je,Ne.prependListener=Je,Ne.prependOnceListener=Je,Ne.listeners=function(t){return[]},Ne.binding=function(t){throw new Error("process.binding is not supported")},Ne.cwd=function(){return"/"},Ne.chdir=function(t){throw new Error("process.chdir is not supported")},Ne.umask=function(){return 0};const Ge={"Content-Type":"application/x-www-form-urlencoded"};const Ke={transitional:re,adapter:function(){let t;return"undefined"!=typeof XMLHttpRequest?t=ke.getAdapter("xhr"):void 0!==Le&&"process"===R.kindOf(Le)&&(t=ke.getAdapter("http")),t}(),transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=R.isObject(t);i&&R.isHTMLForm(t)&&(t=new FormData(t));if(R.isFormData(t))return r&&r?JSON.stringify(ue(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ce(t,this.formSerializer).toString();if((o=R.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Kt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),function(t,e,n){if(R.isString(t))try{return(e||JSON.parse)(t),R.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Ke.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&R.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw P.from(t,P.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ae.classes.FormData,Blob:ae.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],(function(t){Ke.headers[t]={}})),R.forEach(["post","put","patch"],(function(t){Ke.headers[t]=R.merge(Ge)}));var Ye=Ke;function Xe(t,e){const n=this||Ye,r=e||n,i=Te.from(r.headers);let o=r.data;return R.forEach(t,(function(t){o=t.call(n,o,i.normalize(),e?e.status:void 0)})),i.normalize(),o}function Ze(t){return!(!t||!t.__CANCEL__)}function Qe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new me}function tn(t){Qe(t),t.headers=Te.from(t.headers),t.data=Xe.call(t,t.transformRequest);return(t.adapter||Ye.adapter)(t).then((function(e){return Qe(t),e.data=Xe.call(t,t.transformResponse,e),e.headers=Te.from(e.headers),e}),(function(e){return Ze(e)||(Qe(t),e&&e.response&&(e.response.data=Xe.call(t,t.transformResponse,e.response),e.response.headers=Te.from(e.response.headers))),Promise.reject(e)}))}function en(t,e){e=e||{};const n={};function r(t,e){return R.isPlainObject(t)&&R.isPlainObject(e)?R.merge(t,e):R.isPlainObject(e)?R.merge({},e):R.isArray(e)?e.slice():e}function i(n){return R.isUndefined(e[n])?R.isUndefined(t[n])?void 0:r(void 0,t[n]):r(t[n],e[n])}function o(t){if(!R.isUndefined(e[t]))return r(void 0,e[t])}function s(n){return R.isUndefined(e[n])?R.isUndefined(t[n])?void 0:r(void 0,t[n]):r(void 0,e[n])}function a(n){return n in e?r(t[n],e[n]):n in t?r(void 0,t[n]):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return R.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){const e=c[t]||i,r=e(t);R.isUndefined(r)&&e!==a||(n[t]=r)})),n}const nn={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{nn[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const rn={};nn.transitional=function(t,e,n){function r(t,e){return"[Axios v1.1.3] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,o)=>{if(!1===t)throw new P(r(i," has been removed"+(e?" in "+e:"")),P.ERR_DEPRECATED);return e&&!rn[i]&&(rn[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}};var on={assertOptions:function(t,e,n){if("object"!=typeof t)throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const o=r[i],s=e[o];if(s){const e=t[o],n=void 0===e||s(e,o,t);if(!0!==n)throw new P("option "+o+" must be "+n,P.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}},validators:nn};const sn=on.validators;class an{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=en(this.defaults,e);const{transitional:n,paramsSerializer:r}=e;void 0!==n&&on.assertOptions(n,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),void 0!==r&&on.assertOptions(r,{encode:sn.function,serialize:sn.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();const i=e.headers&&R.merge(e.headers.common,e.headers[e.method]);i&&R.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),e.headers=new Te(e.headers,i);const o=[];let s=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(s=s&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(t){a.push(t.fulfilled,t.rejected)}));let u,l=0;if(!s){const t=[tn.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,a),u=t.length,c=Promise.resolve(e);l<u;)c=c.then(t[l++],t[l++]);return c}u=o.length;let f=e;for(l=0;l<u;){const t=o[l++],e=o[l++];try{f=t(f)}catch(t){e.call(this,t);break}}try{c=tn.call(this,f)}catch(t){return Promise.reject(t)}for(l=0,u=a.length;l<u;)c=c.then(a[l++],a[l++]);return c}getUri(t){return ee(pe((t=en(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}}R.forEach(["delete","get","head","options"],(function(t){an.prototype[t]=function(e,n){return this.request(en(n||{},{method:t,url:e,data:(n||{}).data}))}})),R.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(en(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}an.prototype[t]=e(),an.prototype[t+"Form"]=e(!0)}));var cn=an;class un{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new un((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new me(t,r,i),e(n.reason))}))}}var ln=un;const fn=function t(e){const n=new cn(e),r=i(cn.prototype.request,n);return R.extend(r,cn.prototype,n,{allOwnKeys:!0}),R.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return t(en(e,n))},r}(Ye);fn.Axios=cn,fn.CanceledError=me,fn.CancelToken=ln,fn.isCancel=Ze,fn.VERSION="1.1.3",fn.toFormData=Kt,fn.AxiosError=P,fn.Cancel=fn.CanceledError,fn.all=function(t){return Promise.all(t)},fn.spread=function(t){return function(e){return t.apply(null,e)}},fn.isAxiosError=function(t){return R.isObject(t)&&!0===t.isAxiosError},fn.formToJSON=t=>ue(R.isHTMLForm(t)?new FormData(t):t);var hn=fn;const{Axios:pn,AxiosError:dn,CanceledError:gn,isCancel:mn,CancelToken:yn,VERSION:bn,all:wn,Cancel:vn,isAxiosError:En,spread:In,toFormData:Sn}=hn;var An=hn;async function _n(t){try{return await An.get(`https://api.themoviedb.org/3/movie/${t}?api_key=341a3443d9168179889e844c5b12f774`)}catch(t){console.error(t)}}function On(t){document.querySelector(".btns-box").addEventListener("click",Tn.bind(this,t)),console.log(t)}function Tn(t,e){"watched"===e.target.dataset.add&&Cn(t,"watched"),"queue"===e.target.dataset.add&&Cn(t,"queue")}function Cn(t,e){const n=JSON.parse(localStorage.getItem(`${e}`));if(!n)return void Bn([t],`${e}`);n.find((({data:{id:e}})=>t.data.id===e))||(n.push(t),Bn(n,`${e}`));document.querySelector(`button[data-add="${e}"]`).textContent=`already added to ${e}`}function Bn(t,e){localStorage.setItem(`${e}`,JSON.stringify(t))}const Dn=document.querySelector(".gallery"),Rn=document.querySelector(".backdrop"),Ln=(document.querySelector(".modal"),document.querySelector(".modal-btn"));function jn(t){"Escape"===t.key&&kn()}function xn(t){"modal-btn"!==t.currentTarget.classList.value&&"backdrop"!==t.target.classList.value||kn()}function kn(){Rn.classList.toggle("is-hidden"),document.removeEventListener("keydown",jn),Rn.removeEventListener("click",xn);document.querySelector(".wrapper").remove()}Dn.addEventListener("click",(function(t){if(t.preventDefault(),document.addEventListener("keydown",jn),Rn.addEventListener("click",xn),Ln.addEventListener("click",xn),"IMG"===t.target.nodeName){!async function(t){Rn.classList.remove("is-hidden");const e=await _n(t);r(e.data),On(e)}(t.target.dataset.id)}}));const Nn=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function Un(t,e){let n=[];return t.map((t=>{for(const e of Nn)t===e.id&&n.push(e.name)})),n.length>2&&n.splice(2,5,"Other"),n.join(", ")}function Pn(t){const{results:e}=t;return e.map((({poster_path:t,title:e,release_date:n,id:r,genre_ids:i})=>`<li class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500${t}" alt="${e} class="movie-card-img" data-id='${r}'"/>\n      <div class="movie-info">\n      <p class="movie-title">${e}</p>\n      <p class="film-cards__title movie-genres">${Un(i)} | ${n.slice(0,4)}</p> \n      </div>\n    </li>`)).join("")}function $n(t,e){e.innerHTML=Pn(t)}var Fn=An;async function Mn(t,e){const n=`&query=${t}&page=${e}&language=en-US`;return await Fn.get(`https://api.themoviedb.org/3/search/movie?api_key=341a3443d9168179889e844c5b12f774${n}`).then((t=>t.data))}async function zn(t){const e=`&page=${t}`;return await Fn.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=341a3443d9168179889e844c5b12f774${e}`).then((t=>t.data))}const qn=document.querySelector(".loader");function Hn(){qn.classList.remove("visually-hidden")}function Vn(){qn.classList.add("visually-hidden")}var Wn;Wn=function(t){var e=function(n,r){this.$target=n,this.options=t.extend({},e.DEFAULTS,this.$target.data("pagination"),"object"==typeof r&&r),this.init()};e.VERSION="1.4.0",e.DEFAULTS={total:1,current:1,length:10,size:2,prev:"&lt;",next:"&gt;",click:function(t){}},e.prototype={init:function(){if(this.options.total<1&&(this.options.total=1),this.options.current<1&&(this.options.current=1),this.options.length<1&&(this.options.length=1),this.options.current>Math.ceil(this.options.total/this.options.length)&&(this.options.current=Math.ceil(this.options.total/this.options.length)),this.options.size<1&&(this.options.size=1),"function"==typeof this.options.ajax){var t=this;this.options.ajax({current:t.options.current,length:t.options.length,total:t.options.total},(function(e){return t.refresh(e)}),t.$target)}else this.render();this.onClick()},render:function(){var t=this.options,e=this.$target;e.empty(),e.append('<li><a herf="javascript:void(0)" data-page="prev">'+t.prev+"</a></li>");var n=this.getPages();n.start>1&&(e.append('<li><a herf="javascript:void(0)" data-page="1">1</a></li>'),e.append("<li><span>...</span></li>"));for(var r=n.start;r<=n.end;r++)e.append('<li><a herf="javascript:void(0)" data-page="'+r+'">'+r+"</a></li>");n.end<Math.ceil(t.total/t.length)&&(e.append("<li><span>...</span></li>"),e.append('<li><a herf="javascript:void(0)" data-page="'+Math.ceil(t.total/t.length)+'">'+Math.ceil(t.total/t.length)+"</a></li>")),e.append('<li><a herf="javascript:void(0)" data-page="next">'+t.next+"</a></li>"),e.find('li>a[data-page="'+t.current+'"]').parent().addClass("active"),t.current<=1&&e.find('li>a[data-page="prev"]').parent().addClass("disabled"),t.current>=Math.ceil(t.total/t.length)&&e.find('li>a[data-page="next"]').parent().addClass("disabled")},getPages:function(){this.$target;var t=this.options,e=t.current-t.size,n=t.current+t.size;return t.current>=Math.ceil(t.total/t.length)-t.size&&(e-=t.current-Math.ceil(t.total/t.length)+t.size),t.current<=t.size&&(n+=t.size-t.current+1),e<1&&(e=1),n>Math.ceil(t.total/t.length)&&(n=Math.ceil(t.total/t.length)),{start:e,end:n}},onClick:function(){var e=this.$target,n=this.options,r=this;e.off("click"),e.on("click",">li>a[data-page]",(function(i){if(!t(this).parent().hasClass("disabled")&&!t(this).parent().hasClass("active")){var o=t(this).data("page");switch(o){case"prev":n.current>1&&n.current--;break;case"next":n.current<Math.ceil(n.total)&&n.current++;break;default:o=parseInt(o),isNaN(o)||(n.current=parseInt(o))}var s={current:n.current,length:n.length,total:n.total};"function"==typeof n.ajax?n.ajax(s,(function(t){return r.refresh(t)}),e):r.render(),n.click(s,e)}}))},refresh:function(t){"object"==typeof t&&(t.total&&(this.options.total=t.total),t.length&&(this.options.length=t.length)),this.render()}},t.fn.pagination=function(n){return this.each((function(){t(this).data("pagination",new e(t(this),n))})),this}},"function"==typeof define&&define.amd?define(["jquery"],Wn):"function"==typeof define&&define.cmd?define((function(t,e,n){Wn(t("jquery"))})):Wn(jQuery);const Jn=document.querySelector(".gallery");let Gn=1,Kn=null;Hn(),async function t(){Jn.innerHTML="";try{const t=await zn(Gn);Kn=t.total_results,$n(t,Jn)}catch(t){console.log(t)}$("#pagination").pagination({total:Kn,current:Gn,length:20,size:2,prev:"&lt;",next:"&gt;",click:function(e){Gn=e.current,Hn(),t(),setTimeout(Vn,250)}})}(),setTimeout(Vn(),250);const Yn=document.querySelector("form"),Xn=document.querySelector(".gallery"),Zn=document.querySelector(".form__text");let Qn=1,tr=null,er="";async function nr(t){Xn.innerHTML="";try{const e=await Mn(t,Qn);if(tr=e.total_results,$n(e,Xn),0===e.results.length)return Zn.classList.remove("hidden"),void setTimeout((()=>{Zn.classList.add("hidden")}),3e3)}catch(t){console.log(t)}$("#pagination").pagination({total:tr,current:Qn,length:20,size:2,prev:"&lt;",next:"&gt;",click:async function(t){Qn=t.current,await nr(er)}})}Yn.addEventListener("submit",(async function(t){if(t.preventDefault(),Qn=1,er=t.target.elements.input.value.trim(),console.log(er),!er)return Zn.classList.remove("hidden"),void setTimeout((()=>{Zn.classList.add("hidden")}),3e3);Hn(),nr(er),setTimeout(Vn,250)}));var rr={},ir=/^\s+|\s+$/g,or=/^[-+]0x[0-9a-f]+$/i,sr=/^0b[01]+$/i,ar=/^0o[0-7]+$/i,cr=parseInt,ur="object"==typeof e&&e&&e.Object===Object&&e,lr="object"==typeof self&&self&&self.Object===Object&&self,fr=ur||lr||Function("return this")(),hr=Object.prototype.toString,pr=Math.max,dr=Math.min,gr=function(){return fr.Date.now()};function mr(t,e,n){var r,i,o,s,a,c,u=0,l=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,o=i;return r=i=void 0,u=e,s=t.apply(o,n)}function d(t){return u=t,a=setTimeout(m,e),l?p(t):s}function g(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-u>=o}function m(){var t=gr();if(g(t))return y(t);a=setTimeout(m,function(t){var n=e-(t-c);return f?dr(n,o-(t-u)):n}(t))}function y(t){return a=void 0,h&&r?p(t):(r=i=void 0,s)}function b(){var t=gr(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return d(c);if(f)return a=setTimeout(m,e),p(c)}return void 0===a&&(a=setTimeout(m,e)),s}return e=br(e)||0,yr(n)&&(l=!!n.leading,o=(f="maxWait"in n)?pr(br(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=c=i=a=void 0},b.flush=function(){return void 0===a?s:y(gr())},b}function yr(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function br(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==hr.call(t)}(t))return NaN;if(yr(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=yr(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ir,"");var n=sr.test(t);return n||ar.test(t)?cr(t.slice(2),n?2:8):or.test(t)?NaN:+t}rr=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return yr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),mr(t,e,{leading:r,maxWait:e,trailing:i})};const wr=document.querySelector(".button-back");function vr(t){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.addEventListener("scroll",rr((function(t){window.scrollY>=700?(wr.classList.remove("hidden"),wr.addEventListener("click",vr)):window.scrollY<=700&&(wr.classList.add("hidden"),wr.removeEventListener("click",vr))}),400));const Er=document.querySelectorAll(".popup-link"),Ir=document.querySelector("body"),Sr=document.querySelectorAll(".lock-padding");let Ar=!0;if(Er.length>0)for(let t=0;t<Er.length;t++){const e=Er[t];e.addEventListener("click",(function(t){const n=e.getAttribute("href").replace("#","");Or(document.getElementById(n)),t.preventDefault()}))}const _r=document.querySelectorAll(".close-popup");if(_r.length>0)for(let t=0;t<_r.length;t++){const e=_r[t];e.addEventListener("click",(function(t){Tr(e.closest(".popup")),t.preventDefault()}))}function Or(t){if(t&&Ar){const e=document.querySelector(".popup.open");e?Tr(e,!1):function(){const t=window.innerWidth-document.querySelector("body").offsetWidth+"px";if(Sr.length>0)for(let e=0;e<Sr.length;e++){Sr[e].style.paddingRight=t}Ir.style.paddingRight=t,Ir.classList.add("lock"),Ar=!1,setTimeout((function(){Ar=!0}),800)}(),t.classList.add("open"),t.addEventListener("click",(function(t){t.target.closest(".popup__content")||Tr(t.target.closest(".popup"))}))}}function Tr(t,e=!0){Ar&&(t.classList.remove("open"),e&&(setTimeout((function(){if(Sr.length>0)for(let t=0;t<Sr.length;t++)Sr[t].style.paddingRight="0px";Ir.style.paddingRight="0px",Ir.classList.remove("lock")}),800),Ar=!1,setTimeout((function(){Ar=!0}),800)))}document.addEventListener("keydown",(function(t){if("Escape"===t.key){const t=document.querySelector(".popup.open");t&&Tr(t)}}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cr=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],o=e+1<t.length,s=o?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|s>>4;let f=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const s=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==o||null==s||null==a)throw Error();const c=i<<2|o>>4;if(r.push(c),64!==s){const t=o<<4&240|s>>2;if(r.push(t),64!==a){const t=s<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dr=function(t){return function(t){const e=Cr(t);return Br.encodeByteArray(e,!0)}(t).replace(/\./g,"")},Rr=function(t){try{return Br.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function jr(){return"object"==typeof indexedDB}function xr(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}function kr(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nr=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ur=()=>{try{return Nr()||(()=>{if(void 0===Le||void 0===Le.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?function(t,e){return t.replace(Mr,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new $r(r,s,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const Mr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(qr(n)&&qr(o)){if(!zr(n,o))return!1}else if(n!==o)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function qr(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e=1e3,n=2){const r=e*Math.pow(n,t),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vr(t){return t&&t._delegate?t._delegate:t}class Wr{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Pr;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,"[DEFAULT]"===r?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Gr{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Jr(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=[];var Yr,Xr;(Xr=Yr||(Yr={}))[Xr.DEBUG=0]="DEBUG",Xr[Xr.VERBOSE=1]="VERBOSE",Xr[Xr.INFO=2]="INFO",Xr[Xr.WARN=3]="WARN",Xr[Xr.ERROR=4]="ERROR",Xr[Xr.SILENT=5]="SILENT";const Zr={debug:Yr.DEBUG,verbose:Yr.VERBOSE,info:Yr.INFO,warn:Yr.WARN,error:Yr.ERROR,silent:Yr.SILENT},Qr=Yr.INFO,ti={[Yr.DEBUG]:"log",[Yr.VERBOSE]:"log",[Yr.INFO]:"info",[Yr.WARN]:"warn",[Yr.ERROR]:"error"},ei=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=ti[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class ni{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Yr))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Zr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Yr.DEBUG,...t),this._logHandler(this,Yr.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Yr.VERBOSE,...t),this._logHandler(this,Yr.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Yr.INFO,...t),this._logHandler(this,Yr.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Yr.WARN,...t),this._logHandler(this,Yr.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Yr.ERROR,...t),this._logHandler(this,Yr.ERROR,...t)}constructor(t){this.name=t,this._logLevel=Qr,this._logHandler=ei,this._userLogHandler=null,Kr.push(this)}}let ri,ii;const oi=new WeakMap,si=new WeakMap,ai=new WeakMap,ci=new WeakMap,ui=new WeakMap;let li={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return si.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ai.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function fi(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ii||(ii=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(di(this),e),pi(oi.get(this))}:function(...e){return pi(t.apply(di(this),e))}:function(e,...n){const r=t.call(di(this),e,...n);return ai.set(r,e.sort?e.sort():[e]),pi(r)}}function hi(t){return"function"==typeof t?fi(t):(t instanceof IDBTransaction&&function(t){if(si.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));si.set(t,e)}(t),e=t,(ri||(ri=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,li):t);var e}function pi(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(pi(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&oi.set(e,t)})).catch((()=>{})),ui.set(e,t),e}(t);if(ci.has(t))return ci.get(t);const e=hi(t);return e!==t&&(ci.set(t,e),ui.set(e,t)),e}const di=t=>ui.get(t);function gi(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=pi(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(pi(s.result),t.oldVersion,t.newVersion,pi(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const mi=["get","getKey","getAll","getAllKeys","count"],yi=["put","add","delete","clear"],bi=new Map;function wi(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(bi.get(e))return bi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yi.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!mi.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return bi.set(e,o),o}li=(t=>({...t,get:(e,n,r)=>wi(e,n)||t.get(e,n,r),has:(e,n)=>!!wi(e,n)||t.has(e,n)}))(li);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ei=new ni("@firebase/app"),Ii={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Si=new Map,Ai=new Map;function _i(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oi(t){const e=t.name;if(Ai.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,t);for(const e of Si.values())_i(e,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci=new Fr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Wr("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw Ci.create("bad-app-name",{appName:String(i)});var o;if(n||(n=null===(o=Ur())||void 0===o?void 0:o.config),!n)throw Ci.create("no-options");const s=Si.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Ci.create("duplicate-app",{appName:i})}const a=new Gr(i);for(const t of Ai.values())a.addComponent(t);const c=new Bi(n,r,a);return Si.set(i,c),c}function Ri(t="[DEFAULT]"){const e=Si.get(t);if(!e&&"[DEFAULT]"===t)return Di();if(!e)throw Ci.create("no-app",{appName:t});return e}function Li(t,e,n){var r;let i=null!==(r=Ii[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ei.warn(t.join(" "))}Oi(new Wr(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let ji=null;function xi(){return ji||(ji=gi("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Ci.create("idb-open",{originalErrorMessage:t.message})}))),ji}async function ki(t,e){var n;try{const n=(await xi()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(e,Ni(t)),n.done}catch(t){if(t instanceof $r)Ei.warn(t.message);else{const e=Ci.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});Ei.warn(e.message)}}}function Ni(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Pi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pi(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Fi(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Dr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new $i(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Pi(){return(new Date).toISOString().substring(0,10)}class $i{async runIndexedDBEnvironmentCheck(){return!!jr()&&xr().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await xi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ni(t))}catch(t){if(t instanceof $r)Ei.warn(t.message);else{const n=Ci.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});Ei.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ki(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ki(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Fi(t){return Dr(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mi;Mi="",Oi(new Wr("platform-logger",(t=>new vi(t)),"PRIVATE")),Oi(new Wr("heartbeat",(t=>new Ui(t)),"PRIVATE")),Li("@firebase/app","0.8.3",Mi),Li("@firebase/app","0.8.3","esm2017"),Li("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Li("firebase","9.13.0","app");const zi=new Fr("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function qi(t){return t instanceof $r&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function Vi(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function Wi(t,e){const n=(await e.json()).error;return zi.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ji({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gi(t,{refreshToken:e}){const n=Ji(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),n}async function Ki(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xi=/^[cdef][\w-]{21}$/;function Zi(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return Xi.test(e)?e:""}catch(t){return""}}function Qi(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map;function eo(t,e){const n=Qi(t);no(n,e),function(t,e){const n=io();n&&n.postMessage({key:t,fid:e});oo()}(n,e)}function no(t,e){const n=to.get(t);if(n)for(const t of n)t(e)}let ro=null;function io(){return!ro&&"BroadcastChannel"in self&&(ro=new BroadcastChannel("[Firebase] FID Change"),ro.onmessage=t=>{no(t.data.key,t.data.fid)}),ro}function oo(){0===to.size&&ro&&(ro.close(),ro=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function ao(){return so||(so=gi("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-installations-store")}})),so}async function co(t,e){const n=Qi(t),r=(await ao()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),o=await i.get(n);return await i.put(e,n),await r.done,o&&o.fid===e.fid||eo(t,e.fid),e}async function uo(t){const e=Qi(t),n=(await ao()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(e),await n.done}async function lo(t,e){const n=Qi(t),r=(await ao()).transaction("firebase-installations-store","readwrite"),i=r.objectStore("firebase-installations-store"),o=await i.get(n),s=e(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||o&&o.fid===s.fid||eo(t,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){let e;const n=await lo(t.appConfig,(n=>{const r=function(t){return go(t||{fid:Zi(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(zi.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hi(t),i=Ji(t),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.5.16"},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await Ki((()=>fetch(r,a)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:Vi(t.authToken)}}throw await Wi("Create Installation",c)}(t,e);return co(t.appConfig,n)}catch(n){throw qi(n)&&409===n.customData.serverCode?await uo(t.appConfig):await co(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ho(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function ho(t){let e=await po(t.appConfig);for(;1===e.registrationStatus;)await Yi(100),e=await po(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await fo(t);return n||e}return e}function po(t){return lo(t,(t=>{if(!t)throw zi.create("installation-not-found");return go(t)}))}function go(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function mo({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${Hi(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n),i=Gi(t,n),o=e.getImmediate({optional:!0});if(o){const t=await o.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const s={installation:{sdkVersion:"w:0.5.16",appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await Ki((()=>fetch(r,a)));if(c.ok){return Vi(await c.json())}throw await Wi("Generate Auth Token",c)}async function yo(t,e=!1){let n;const r=await lo(t.appConfig,(r=>{if(!wo(r))throw zi.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t,e){let n=await bo(t.appConfig);for(;1===n.authToken.requestStatus;)await Yi(100),n=await bo(t.appConfig);const r=n.authToken;return 0===r.requestStatus?yo(t,e):r}(t,e),r;{if(!navigator.onLine)throw zi.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await mo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await co(t.appConfig,r),n}catch(n){if(!qi(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await co(t.appConfig,n)}else await uo(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function bo(t){return lo(t,(t=>{if(!wo(t))throw zi.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function wo(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vo(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await fo(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await yo(n,e)).token}function Eo(t){return zi.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=t=>{const e=Ti(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await fo(e);return r?r.catch(console.error):yo(e).catch(console.error),n.fid}(e),getToken:t=>vo(e,t)}};Oi(new Wr("installations",(t=>{const e=t.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw Eo("App Configuration");if(!t.name)throw Eo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Eo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Ti(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Oi(new Wr("installations-internal",Io,"PRIVATE")),Li("@firebase/installations","0.5.16"),Li("@firebase/installations","0.5.16","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const So=new ni("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ao(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function _o(t,e,n,r){return async function(i,o,s){try{"event"===i?await async function(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const r=await Ao(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(t){So.error(t)}}(t,e,n,o,s):"config"===i?await async function(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const t=(await Ao(n)).find((t=>t.measurementId===i));t&&await e[t.appId]}}catch(t){So.error(t)}t("config",i,o)}(t,e,n,r,o,s):"consent"===i?t("consent","update",s):t("set",o)}catch(t){So.error(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo=new Fr("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const To=new class{getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}};function Co(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bo(t,e=To,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw Oo.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Oo.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ro;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Do({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Do(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=To){var o,s;const{appId:a,measurementId:c}=t;try{await function(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(o),r(Oo.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(r,e)}catch(t){if(c)return So.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(o=t)||void 0===o?void 0:o.message}]`),{appId:a,measurementId:c};throw t}try{const e=await async function(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Co(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw Oo.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}(t);return i.deleteThrottleMetadata(a),e}catch(e){const o=e;if(!function(t){if(!(t instanceof $r&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o)){if(i.deleteThrottleMetadata(a),c)return So.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==o?void 0:o.message}]`),{appId:a,measurementId:c};throw e}const u=503===Number(null===(s=null==o?void 0:o.customData)||void 0===s?void 0:s.httpStatus)?Hr(n,i.intervalMillis,30):Hr(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,l),So.debug(`Calling attemptFetch again in ${u} millis`),Do(t,l,r,i)}}class Ro{addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo,jo;function xo(t){jo=t}function ko(t){Lo=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e,n,r,i,o,s){var a;const c=Bo(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&So.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>So.error(t))),e.push(c);const u=async function(){var t;if(!jr())return So.warn(Oo.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await xr()}catch(e){return So.warn(Oo.create("indexeddb-unavailable",{errorInfo:null===(t=e)||void 0===t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?r.getId():void 0)),[l,f]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(t))return n;return null})(o)||function(t,e){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}(o,l.measurementId),jo&&(i("consent","default",jo),xo(void 0)),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h.origin="firebase",h.update=!0,null!=f&&(h.firebase_id=f),i("config",l.measurementId,h),Lo&&(i("set",Lo),ko(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{_delete(){return delete Po[this.app.options.appId],Promise.resolve()}constructor(t){this.app=t}}let Po={},$o=[];const Fo={};let Mo,zo,qo="dataLayer",Ho="gtag",Vo=!1;function Wo(t,e,n){!function(){const t=[];if(Lr()&&t.push("This is a browser extension environment."),kr()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Oo.create("invalid-analytics-context",{errorInfo:e});So.warn(n.message)}}();const r=t.options.appId;if(!r)throw Oo.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Oo.create("no-api-key");So.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Po[r])throw Oo.create("already-exists",{id:r});if(!Vo){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(qo);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,r,i){let o=function(...t){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=_o(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}(Po,$o,Fo,qo,Ho);zo=t,Mo=e,Vo=!0}Po[r]=No(t,$o,Fo,e,Mo,qo,n);return new Uo(t)}function Jo(t,e,n,r){t=Vr(t),async function(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e;t("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(zo,Po[t.app.options.appId],e,n,r).catch((t=>So.error(t)))}Oi(new Wr("analytics",((t,{options:e})=>Wo(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),Oi(new Wr("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,n,r)=>Jo(e,t,n,r)}}catch(t){throw Oo.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Li("@firebase/analytics","0.8.4"),Li("@firebase/analytics","0.8.4","esm2017");const Go={apiKey:"AIzaSyCZigOXWxtprqZkT0joJzakFLwXOayW9Fw",authDomain:"team-project-movie.firebaseapp.com",databaseURL:"https://team-project-movie-default-rtdb.europe-west1.firebasedatabase.app",projectId:"team-project-movie",storageBucket:"team-project-movie.appspot.com",messagingSenderId:"621199458479",appId:"1:621199458479:web:54f2e6677796ea7d8c145a",measurementId:"G-WHTCB43FF1"};firebase.initializeApp(Go);const Ko=Di(Go);Di(Go);!function(t=Ri()){const e=Ti(t=Vr(t),"analytics");e.isInitialized()?e.getImmediate():function(t,e={}){const n=Ti(t,"analytics");if(n.isInitialized()){const t=n.getImmediate();if(zr(e,n.getOptions()))return t;throw Oo.create("already-initialized")}n.initialize({options:e})}(t)}(Ko);var Yo={signInSuccessUrl:"<url-to-redirect-to-on-success>",signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID,firebase.auth.FacebookAuthProvider.PROVIDER_ID,firebase.auth.TwitterAuthProvider.PROVIDER_ID,firebase.auth.GithubAuthProvider.PROVIDER_ID,firebase.auth.EmailAuthProvider.PROVIDER_ID,firebase.auth.PhoneAuthProvider.PROVIDER_ID,firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID],tosUrl:"<your-tos-url>",privacyPolicyUrl:function(){window.location.assign("<your-privacy-policy-url>")}};new firebaseui.auth.AuthUI(firebase.auth()).start("#firebaseui-auth-container",Yo),initApp=function(){firebase.auth().onAuthStateChanged((function(t){if(t){var e=t.displayName,n=t.email,r=t.emailVerified,i=t.photoURL,o=t.uid,s=t.phoneNumber,a=t.providerData;t.getIdToken().then((function(t){document.getElementById("sign-in-status").textContent="Signed in",document.getElementById("sign-in").textContent="Sign out",document.getElementById("account-details").textContent=JSON.stringify({displayName:e,email:n,emailVerified:r,phoneNumber:s,photoURL:i,uid:o,accessToken:t,providerData:a},null,"  ")}))}else document.getElementById("sign-in-status").textContent="Signed out",document.getElementById("sign-in").textContent="Sign in",document.getElementById("account-details").textContent="null"}),(function(t){console.log(t)}))},window.addEventListener("load",(function(){initApp()}));
//# sourceMappingURL=index.4ada470c.js.map
