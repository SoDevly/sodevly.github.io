(self.webpackChunkexample=self.webpackChunkexample||[]).push([[218],{1630:function(e,t,n){"use strict";n.d(t,{h:function(){return k}});var r=n(9465),o=n(8689),a=n(7378),i=n(7597),s=n(1184),l=function(e,t){if(t)return t.key===e?"active "+t.direction:void 0},c=function(e){var t=e.requestSort,n=e.sortKey,r=e.sortConfig,i=e.children;return a.createElement(o.zx,{variant:"sort",type:"button",onClick:function(){return t(n)},className:l(n,r)},i,r.key===n&&a.createElement(a.Fragment,null,"descending"===r.direction?a.createElement(s.PNI,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"}):a.createElement(s.a7d,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"})))},d=n(6250),u=n(3697);var g=function(e,t){void 0===t&&(t=null);var n,r,o,i,s,l,c=(n="codeNotesSortConfig",r=t,o=a.useState((function(){try{var e=window.localStorage.getItem(n);if(e){var t=e.match(/^(\[|\{|\d).*(\]|\}|\d)?$/gm);return t&&t.length?JSON.parse(e):e}return r}catch(o){return r}})),i=(0,u.Z)(o,2),s=i[0],l=i[1],[s,a.useCallback((function(e){try{l(e),"object"==typeof e?window.localStorage.setItem(n,JSON.stringify(e)):window.localStorage.setItem(n,e)}catch(t){console.error(t)}}),[n])]),g=c[0],m=c[1];return{items:(0,a.useMemo)((function(){var t=(0,d.Z)(e);return null!==g&&t.sort((function(e,t){var n,r,o,a;return(null===(n=e.node.frontmatter[g.key])||void 0===n?void 0:n.toLowerCase())<(null===(r=t.node.frontmatter[g.key])||void 0===r?void 0:r.toLowerCase())?"ascending"===g.direction?-1:1:(null===(o=e.node.frontmatter[g.key])||void 0===o?void 0:o.toLowerCase())>(null===(a=t.node.frontmatter[g.key])||void 0===a?void 0:a.toLowerCase())?"ascending"===g.direction?1:-1:0})),t}),[e,g]),requestSort:function(e){var t="ascending";g&&g.key===e&&"ascending"===g.direction&&(t="descending"),m({key:e,direction:t})},sortConfig:g}},m=n(7175),f=n.n(m),v=function(e){var t=e.notes,n=g(t,{key:"title",direction:"ascending"}),r=n.items,s=n.requestSort,l=n.sortConfig;return a.createElement(a.Fragment,null,a.createElement(o.kC,{sx:{justifyContent:"flex-end",alignItems:"center",mb:2}},a.createElement(c,{requestSort:s,sortKey:"title",sortConfig:l},"A-Z"),a.createElement(c,{requestSort:s,sortKey:"modifiedTimestamp",sortConfig:l},"Date")),r.map((function(e){var t=e.node,n=t.frontmatter,r=n.title,o=n.tags,s=n.emoji,l=n.modified,c=n.modifiedTimestamp,d="/"+f()(t.fields.slug);return a.createElement(i.y,{title:r,emoji:s,tags:o,slug:d,key:d,dateModified:l,modifiedTimestamp:c})})))},y=n(2276),h=n(5242),p=n(3534),k=function(e){var t=e.data,n=e.pageContext,i=e.location,s=t.allMdx.edges,l=(0,h.$)().title;return(0,r.tZ)(y.A,{activeTag:n.tag,path:i.pathname,basePath:n.basePath,hasUntagged:n.hasUntagged,tags:n.tags,title:n.tag?"Tag: "+n.tag:l},n.tag&&(0,r.tZ)(o.X6,{as:"h1",variant:"noteTitle"},"untagged"!==n.tag?(0,r.tZ)(a.Fragment,null,(0,r.tZ)(p.Y,{tag:n.tag,size:"0.5em"})," ",n.tag):(0,r.tZ)(a.Fragment,null,"Untagged Notes")),(0,r.tZ)(v,{notes:s}))}},3554:function(e,t,n){"use strict";n.r(t);var r=n(1630);t.default=r.h}}]);
//# sourceMappingURL=component---gatsby-theme-code-notes-src-templates-notes-js-8f8955d3d5c910e87bfd.js.map