"use strict";!function(t,r){var n=function(t){function r(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(t){return t.replace(/"/g,"&quot;")}function e(t){if(!t)return"";var r=[];for(var e in t){var i=t[e]+"";r.push(e+'="'+n(i)+'"')}return r.join(" ")}function i(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i=new u(i);for(var a=o(t),f=[],l=0;l<a.length;l++){var s=a[l];if("nl"===s.type&&i.nl2br)f.push("<br>\n");else if(s.isLink&&i.check(s)){var c=i.resolve(s),p=c.formatted,g=c.formattedHref,v=c.tagName,h=c.className,k=c.target,y=c.attributes,m="<"+v+' href="'+n(g)+'"';h&&(m+=' class="'+n(h)+'"'),k&&(m+=' target="'+n(k)+'"'),y&&(m+=" "+e(y)),m+=">"+r(p)+"</"+v+">",f.push(m)}else f.push(r(s.toString()))}return f.join("")}var o=t.tokenize,a=t.options,u=a.Options;return String.prototype.linkify||(String.prototype.linkify=function(t){return i(this,t)}),i}(r);t.linkifyStr=n}(window,linkify);