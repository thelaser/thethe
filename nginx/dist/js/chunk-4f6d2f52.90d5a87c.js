(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f6d2f52"],{1276:function(t,e,s){"use strict";var l=s("d784"),r=s("44e7"),a=s("825a"),i=s("1d80"),n=s("4840"),o=s("8aa5"),c=s("50c4"),u=s("14c3"),v=s("9263"),f=s("d039"),g=[].push,d=Math.min,b=4294967295,_=!f((function(){return!RegExp(b,"y")}));l("split",2,(function(t,e,s){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var l=String(i(this)),a=void 0===s?b:s>>>0;if(0===a)return[];if(void 0===t)return[l];if(!r(t))return e.call(l,t,a);var n,o,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,_=new RegExp(t.source,f+"g");while(n=v.call(_,l)){if(o=_.lastIndex,o>d&&(u.push(l.slice(d,n.index)),n.length>1&&n.index<l.length&&g.apply(u,n.slice(1)),c=n[0].length,d=o,u.length>=a))break;_.lastIndex===n.index&&_.lastIndex++}return d===l.length?!c&&_.test("")||u.push(""):u.push(l.slice(d)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var r=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,s):l.call(String(r),e,s)},function(t,r){var i=s(l,t,this,r,l!==e);if(i.done)return i.value;var v=a(t),f=String(this),g=n(v,RegExp),x=v.unicode,h=(v.ignoreCase?"i":"")+(v.multiline?"m":"")+(v.unicode?"u":"")+(_?"y":"g"),p=new g(_?v:"^(?:"+v.source+")",h),y=void 0===r?b:r>>>0;if(0===y)return[];if(0===f.length)return null===u(p,f)?[f]:[];var m=0,C=0,w=[];while(C<f.length){p.lastIndex=_?C:0;var S,N=u(p,_?f:f.slice(C));if(null===N||(S=d(c(p.lastIndex+(_?0:C)),f.length))===m)C=o(f,C,x);else{if(w.push(f.slice(m,C)),w.length===y)return w;for(var I=1;I<=N.length-1;I++)if(w.push(N[I]),w.length===y)return w;C=m=S}}return w.push(f.slice(m)),w}]}),!_)},"14c3":function(t,e,s){var l=s("c6b6"),r=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var a=s.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"44e7":function(t,e,s){var l=s("861d"),r=s("c6b6"),a=s("b622"),i=a("match");t.exports=function(t){var e;return l(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},"466d":function(t,e,s){"use strict";var l=s("d784"),r=s("825a"),a=s("50c4"),i=s("1d80"),n=s("8aa5"),o=s("14c3");l("match",1,(function(t,e,s){return[function(e){var s=i(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,s):new RegExp(e)[t](String(s))},function(t){var l=s(e,t,this);if(l.done)return l.value;var i=r(t),c=String(this);if(!i.global)return o(i,c);var u=i.unicode;i.lastIndex=0;var v,f=[],g=0;while(null!==(v=o(i,c))){var d=String(v[0]);f[g]=d,""===d&&(i.lastIndex=n(c,a(i.lastIndex),u)),g++}return 0===g?null:f}]}))},5319:function(t,e,s){"use strict";var l=s("d784"),r=s("825a"),a=s("7b0b"),i=s("50c4"),n=s("a691"),o=s("1d80"),c=s("8aa5"),u=s("14c3"),v=Math.max,f=Math.min,g=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,_=function(t){return void 0===t?t:String(t)};l("replace",2,(function(t,e,s){return[function(s,l){var r=o(this),a=void 0==s?void 0:s[t];return void 0!==a?a.call(s,r,l):e.call(String(r),s,l)},function(t,a){var o=s(e,t,this,a);if(o.done)return o.value;var g=r(t),d=String(this),b="function"===typeof a;b||(a=String(a));var x=g.global;if(x){var h=g.unicode;g.lastIndex=0}var p=[];while(1){var y=u(g,d);if(null===y)break;if(p.push(y),!x)break;var m=String(y[0]);""===m&&(g.lastIndex=c(d,i(g.lastIndex),h))}for(var C="",w=0,S=0;S<p.length;S++){y=p[S];for(var N=String(y[0]),I=v(f(n(y.index),d.length),0),k=[],O=1;O<y.length;O++)k.push(_(y[O]));var j=y.groups;if(b){var R=[N].concat(k,I,d);void 0!==j&&R.push(j);var D=String(a.apply(void 0,R))}else D=l(N,d,I,k,j,a);I>=w&&(C+=d.slice(w,I)+D,w=I+N.length)}return C+d.slice(w)}];function l(t,s,l,r,i,n){var o=l+t.length,c=r.length,u=b;return void 0!==i&&(i=a(i),u=d),e.call(n,u,(function(e,a){var n;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,l);case"'":return s.slice(o);case"<":n=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>c){var v=g(u/10);return 0===v?e:v<=c?void 0===r[v-1]?a.charAt(1):r[v-1]+a.charAt(1):e}n=r[u-1]}return void 0===n?"":n}))}}))},"8aa5":function(t,e,s){"use strict";var l=s("6547").charAt;t.exports=function(t,e,s){return e+(s?l(t,e).length:1)}},"8ca9":function(t,e,s){"use strict";var l=s("9181"),r=s.n(l);r.a},9181:function(t,e,s){},9263:function(t,e,s){"use strict";var l=s("ad6d"),r=RegExp.prototype.exec,a=String.prototype.replace,i=r,n=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),o=void 0!==/()??/.exec("")[1],c=n||o;c&&(i=function(t){var e,s,i,c,u=this;return o&&(s=new RegExp("^"+u.source+"$(?!\\s)",l.call(u))),n&&(e=u.lastIndex),i=r.call(u,t),n&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),o&&i&&i.length>1&&a.call(i[0],s,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=i},"9bec":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",[s("v-expansion-panel",{attrs:{accordion:""}},[s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("General")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},[s("v-layout",{attrs:{column:""}},[s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("SHA1:")]),s("v-flex",[t._v(t._s(t.resource.hashPath))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("SHA256:")]),s("v-flex",[t._v(t._s(t.resource.sha256))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("MD5:")]),s("v-flex",[t._v(t._s(t.resource.md5))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Title:")]),s("v-flex",[t._v(t._s(t.resource.title))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Platform:")]),s("v-flex",[t._v(t._s(t.resource.platform))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Origin:")]),s("v-flex",[t._v(t._s(t.resource.origin))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Category:")]),s("v-flex",[t._v(t._s(t.resource.categoryName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Size:")]),s("v-flex",[t._v(t._s(t.resource.size))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Market Size:")]),s("v-flex",[t._v(t._s(t.resource.marketSize))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Downloads:")]),s("v-flex",[t._v(t._s(t.resource.numDownloads))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Version Code:")]),s("v-flex",[t._v(t._s(t.resource.versionCode))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Package Name:")]),s("v-flex",[t._v(t._s(t.resource.packageName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Price:")]),s("v-flex",[t._v(t._s(t.resource.price))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Version String:")]),s("v-flex",[t._v(t._s(t.resource.versionString))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Minimun SDK Version:")]),s("v-flex",[t._v(t._s(t.resource.minSdkVersion))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Target SDK Version:")]),s("v-flex",[t._v(t._s(t.resource.targetSdkVersion))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Files:")]),s("v-flex",[t._v(t._s(t.resource.nFiles))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Images:")]),s("v-flex",[t._v(t._s(t.resource.nImages))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of API Keys:")]),s("v-flex",[t._v(t._s(t.resource.nMetadataApiKeys))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Activities:")]),s("v-flex",[t._v(t._s(t.resource.nActivities))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Activity Alias:")]),s("v-flex",[t._v(t._s(t.resource.nActivityAlias))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Services:")]),s("v-flex",[t._v(t._s(t.resource.nServices))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Receivers:")]),s("v-flex",[t._v(t._s(t.resource.nReceivers))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Providers:")]),s("v-flex",[t._v(t._s(t.resource.nProviders))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of AdNetworks:")]),s("v-flex",[t._v(t._s(t.resource.nAdNetworks))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Class Names:")]),s("v-flex",[t._v(t._s(t.resource.nClassNames))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Method Names:")]),s("v-flex",[t._v(t._s(t.resource.nMethodNames))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Domains:")]),s("v-flex",[t._v(t._s(t.resource.nDomains))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Developer Domains:")]),s("v-flex",[t._v(t._s(t.resource.nDeveloperDomains))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of Email Domains:")]),s("v-flex",[t._v(t._s(t.resource.nEmailDomains))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Number of URI Domains:")]),s("v-flex",[t._v(t._s(t.resource.nURIDomains))])],1)],1)],1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("Certificate")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},[s("v-layout",{attrs:{column:""}},[s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Fingerprint:")]),s("v-flex",[t._v(t._s(t.resource.certificateFingerprint))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Issuer Common Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateIssuerCommonName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Issuer State:")]),s("v-flex",[t._v(t._s(t.resource.certificateIssuerState))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Issuer Locality:")]),s("v-flex",[t._v(t._s(t.resource.certificateIssuerLocality))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Issuer Organization Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateIssuerOrganizationName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Issuer Organization Unit Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateIssuerOrganizationUnitName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject Common Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectCommonName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject Country Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectCountryName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject State:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectState))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject Locality:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectLocality))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject Organization Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectOrganizationName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Subject Organization Unit Name:")]),s("v-flex",[t._v(t._s(t.resource.certificateSubjectOrganizationUnitName))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Public Key:")]),s("v-flex",[s("v-textarea",{attrs:{"no-resize":"",rows:"4",value:t.resource.certificatePublicKey,solo:"",readonly:""}})],1)],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Public Key Info:")]),s("v-flex",[t._v(t._s(t.resource.certificatePublicKeyInfo))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Signature Algorithm:")]),s("v-flex",[t._v(t._s(t.resource.certificateSignatureAlgorithm))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("AutoSigned:")]),s("v-flex",[t._v(t._s(t.resource.certificateAutoSigned))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Serial Number:")]),s("v-flex",[t._v(t._s(t.resource.certificateSerialNumber))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Validity Gap Seconds:")]),s("v-flex",[t._v(t._s(t.resource.certificateValidityGapSeconds))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Validity Gap Rounded Years:")]),s("v-flex",[t._v(t._s(t.resource.certificateValidityGapRoundedYears))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Valid From:")]),s("v-flex",[t._v(t._s(t.resource.certificateValidFrom))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Valid To:")]),s("v-flex",[t._v(t._s(t.resource.certificateValidTo))])],1)],1)],1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("Permissions")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},t._l(t.resource.permissionName,(function(e){return s("v-flex",{key:e,staticClass:"subtitle-1"},[t._v(t._s(e))])})),1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("Links")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},t._l(t.resource.links,(function(e){return s("v-flex",{key:e,staticClass:"subtitle-1"},[s("a",{attrs:{href:e}},[t._v(t._s(e))])])})),1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("Email Domains")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},t._l(t.resource.emailDomains,(function(e){return s("v-flex",{key:e,staticClass:"subtitle-1"},[t._v(t._s(e))])})),1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("URI Domains")])]},proxy:!0}])},[s("v-flex",{staticClass:"scrollable",attrs:{"offset-lg1":""}},t._l(t.resource.URIDomains,(function(e){return s("v-flex",{key:e,staticClass:"subtitle-1"},[s("a",{attrs:{href:e}},[t._v(t._s(e))])])})),1)],1),s("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title"},[t._v("Manifest")])]},proxy:!0}])},[s("v-flex",{attrs:{"offset-lg1":""}},[s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Header Built By:")]),s("v-flex",[t._v(t._s(t.resource.manifestHeaderBuiltBy))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Header Version:")]),s("v-flex",[t._v(t._s(t.resource.manifestHeaderVersion))])],1),s("v-layout",[s("v-flex",{staticClass:"font-weight-bold subtitle-1",attrs:{lg4:""}},[t._v("Header Created By:")]),s("v-flex",[t._v(t._s(t.resource.manifestHeaderCreatedBy))])],1)],1),s("v-flex",{staticClass:"scrollable"},[s("pre",{staticClass:"prettyprint",attrs:{pre:""}},[s("code",{staticClass:"language-xml"},[t._v(t._s(t.code))])])])],1)],1)],1)},r=[],a=(s("a4d3"),s("4de4"),s("4160"),s("1d1c"),s("7a82"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("ac1f"),s("466d"),s("5319"),s("1276"),s("159b"),s("96cf"),s("ade3"));s("fa7d");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,l)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var o=(void 0).formatXml=function(t){var e=/(>)\s*(<)(\/*)/g,s=/ *(.*) +\n/g,l=/(<.+>)(.+\n)/g;t=t.replace(e,"$1\n$2$3").replace(s,"$1\n").replace(l,"$1\n$2");for(var r="",a=t.split("\n"),i=0,n="other",o={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},c=0;c<a.length;c++){var u=a[c];if(u.match(/\s*<\?xml/))r+=u+"\n";else{var v=Boolean(u.match(/<.+\/>/)),f=Boolean(u.match(/<\/.+>/)),g=Boolean(u.match(/<[^!].*>/)),d=v?"single":f?"closing":g?"opening":"other",b=n+"->"+d;n=d;var _="";i+=o[b];for(var x=0;x<i;x++)_+="\t";"opening->closing"==b?r=r.substr(0,r.length-1)+u+"\n":r+=_+u+"\n"}}return r},c={name:"tacyt",props:{plugin_data:Object},data:function(){return{code:o(this.plugin_data.results.androidXMLManifest)}},computed:{resource:function(){var t=document.createElement("script");t.setAttribute("src","https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"),t.async=!0,document.head.appendChild(t);var e=n({},this.plugin_data.results);return e}},created:function(){PR.prettyPrint()},methods:{copy_content:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(navigator.clipboard.writeText(this.$refs["document_code_".concat(t)][0].value));case 2:case"end":return e.stop()}}),null,this)}}},u=c,v=(s("8ca9"),s("2877")),f=Object(v["a"])(u,l,r,!1,null,"bdac8866",null);e["default"]=f.exports},ac1f:function(t,e,s){"use strict";var l=s("23e7"),r=s("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,s){"use strict";var l=s("825a");t.exports=function(){var t=l(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,s){"use strict";var l=s("9112"),r=s("6eeb"),a=s("d039"),i=s("b622"),n=s("9263"),o=i("species"),c=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,v){var f=i(t),g=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=g&&!a((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[o]=function(){return s},s.flags="",s[f]=/./[f]),s.exec=function(){return e=!0,null},s[f](""),!e}));if(!g||!d||"replace"===t&&!c||"split"===t&&!u){var b=/./[f],_=s(f,""[t],(function(t,e,s,l,r){return e.exec===n?g&&!r?{done:!0,value:b.call(e,s,l)}:{done:!0,value:t.call(s,e,l)}:{done:!1}})),x=_[0],h=_[1];r(String.prototype,t,x),r(RegExp.prototype,f,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)}),v&&l(RegExp.prototype[f],"sham",!0)}}}}]);
//# sourceMappingURL=chunk-4f6d2f52.90d5a87c.js.map