//<![CDATA[

(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// SelectNav.js (v. 0.1)
// Converts your <ul>/<ol> navigation into a dropdown list for small screens
// https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){return function(s,t){var a,h=function(b){var c;b||(b=window.event);b.target?c=b.target:b.srcElement&&(c=b.srcElement);3===c.nodeType&&(c=c.parentNode);c.value&&(window.location.href=c.value)},m=function(b){b=b.nodeName.toLowerCase();return"ul"===b||"ol"===b},n=function(b){for(var c=1;document.getElementById("selectnav"+c);c++);return b?"selectnav"+c:"selectnav"+(c-1)},q=function(b){g++;var c=b.children.length,a="",d="",f=g-1;if(c){if(f){for(;f--;)d+=u;d+=" "}for(f=0;f<
c;f++){var e=b.children[f].children[0];if("undefined"!==typeof e){var h=e.innerText||e.textContent,k="";l&&(k=-1!==e.className.search(l)||-1!==e.parentElement.className.search(l)?p:"");v&&!k&&(k=e.href===document.URL?p:"");a+='<option value="'+e.href+'" '+k+">"+d+h+"</option>";w&&(e=b.children[f].children[1])&&m(e)&&(a+=q(e))}}1===g&&r&&(a='<option value="">'+r+"</option>"+a);1===g&&(a='<select class="selectnav" id="'+n(!0)+'">'+a+"</select>");g--;return a}};if((a=document.getElementById(s))&&m(a)){document.documentElement.className+=
" js";var d=t||{},l=d.activeclass||"active",v="boolean"===typeof d.autoselect?d.autoselect:!0,w="boolean"===typeof d.nested?d.nested:!0,u=d.indent||"\u2192",r=d.label||"- Navigation -",g=0,p=" selected ";a.insertAdjacentHTML("afterend",q(a));a=document.getElementById(n());a.addEventListener&&a.addEventListener("change",h);a.attachEvent&&a.attachEvent("onchange",h)}}}();
//]]>
