(self.webpackChunkexample=self.webpackChunkexample||[]).push([[155],{5365:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},9090:function(e,t,r){var n=r(5365);e.exports=function(e){if(Array.isArray(e))return n(e)}},639:function(e,t,r){var n=r(7276),o=r(7321);function i(t,r,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},i.apply(null,arguments)}e.exports=i},5526:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7321:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},8850:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5929:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7276:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},6292:function(e,t,r){var n=r(9090),o=r(8850),i=r(4595),a=r(5929);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},4595:function(e,t,r){var n=r(5365);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},1427:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7378),o=r(9465),i=r(8689),a=r(7131),c=r(9211),u=r(5242),s=function(e){var t=e.items;return n.createElement(i.xu,{as:"ul",sx:{listStyleType:"none",pl:3}},t.map((function(e){return n.createElement(l,{key:e.url+"-item",item:e})})))},l=function(e){var t=e.item;return n.createElement("li",null,n.createElement(i.rU,{href:t.url},t.title),t.items&&t.items.length&&n.createElement(s,{key:t.url+"-list",items:t.items}))},f=function(e){var t=e.toc;return t.items?n.createElement(i.xu,{as:"details",sx:{my:4,fontSize:1}},n.createElement(i.xu,{as:"summary",sx:{textTransform:"uppercase",fontSize:0,cursor:"pointer"}},"On this page"),n.createElement(s,{items:t.items,key:"toc-list"})):null},p=r(2276),m=r(6398),x=function(e){var t=e.references;return n.createElement(i.xu,{as:"details",sx:{my:4,fontSize:1}},n.createElement(i.xu,{as:"summary",sx:{textTransform:"uppercase",fontSize:0,cursor:"pointer"}},"Back Links (",t.length,")"),n.createElement(i.xu,{as:"ul",sx:{listStyleType:"none",pl:3}},t.map((function(e){return n.createElement("li",{key:e.slug+"-item"},n.createElement(i.rU,{href:"/"+e.slug.toLowerCase()},e.frontmatter.title))}))))},d=function(e){var t=e.data,r=e.pageContext,s=e.location;if(!t)return null;var l=(0,u.$)().showDate,d=t.mdx,y=d.frontmatter,b=y.title,h=y.tags,v=y.emoji,g=y.link,O=y.modified,S=y.modifiedTimestamp,w=d.body,E=d.parent.relativePath,Z=d.tableOfContents,j=(0,u.$)().gitRepoContentPath,k=!(!g&&!l),P=(0,n.useState)(g),C=P[0],R=P[1];return(0,n.useEffect)((function(){if(g&&"URL"in window){var e=new URL(g),t=e.hostname,r=e.pathname;R(""+t+r)}}),[g]),(0,o.tZ)(p.A,{hasUntagged:r.hasUntagged,basePath:r.basePath,tags:r.tags,path:s.pathname,title:b},(0,o.tZ)("article",null,(0,o.tZ)(i.xu,{as:"header",sx:{my:4,borderBottom:"1px solid",borderBottomColor:"muted",pb:4}},v&&(0,o.tZ)(i.xu,{sx:{fontSize:7,lineHeight:1,mb:3}},(0,o.tZ)("span",{role:"img"},v)),(0,o.tZ)(i.X6,{as:"h1",variant:"noteTitle"},b),k&&(0,o.tZ)(i.kC,{sx:{mb:2,alignItems:"center"}},g&&(0,o.tZ)(n.Fragment,null,(0,o.tZ)(c.NxY,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(i.rU,{href:g,sx:{mr:4,fontSize:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},C)),S&&O&&(0,o.tZ)("time",{dateTime:S,sx:{display:"flex",alignItems:"center"}},(0,o.tZ)(c.bgj,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(i.xv,{variant:"dateModified"},O))),h&&(0,o.tZ)(i.kC,null,(0,o.tZ)(c.mnl,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(m.P,{tags:h}))),!!t.mdx.references.length&&(0,o.tZ)(x,{references:t.mdx.references}),(0,o.tZ)(f,{toc:Z}),(0,o.tZ)(a.MDXRenderer,null,w),(0,o.tZ)(i.xu,{sx:{mt:6,pt:4,borderTop:"2px solid",borderTopColor:"background"}},j&&(0,o.tZ)(i.rU,{href:""+j+E,sx:{fontSize:0}},"Edit this page"))))}},7131:function(e,t,r){var n=r(2018);e.exports={MDXRenderer:n}},2018:function(e,t,r){var n=r(639),o=r(6292),i=r(5526),a=r(5600);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7378),l=r(1368).mdx,f=r(5179).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,["scope","children"]),c=f(t),p=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:l},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return s.createElement(p,u({},i))}}}]);
//# sourceMappingURL=component---gatsby-theme-code-notes-src-templates-note-js-60e75ebb7014380ef119.js.map