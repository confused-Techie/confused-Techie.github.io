(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{248:function(t,e,a){"use strict";e.a={computed:{posts(){const t=this.$page.frontmatter.postsDir?new RegExp(this.$page.frontmatter.postsDir):null;return this.$site.pages.filter(e=>{const a="Layout"===e.frontmatter.layout||void 0===e.frontmatter.layout,r=t?t.test(e.regularPath):e.regularPath.indexOf(this.$page.regularPath)>=0;return a&&r}).sort((t,e)=>{try{return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}catch(t){return 0}})}}}},292:function(t,e,a){"use strict";a.r(e);var r=a(250),s=a(251),n=a(248),o={components:{Page:r.default},mixins:[n.a],methods:{format:s.a}},i=a(3),l=Object(i.a)(o,(function(){var t=this,e=t._self._c;return e("page",[e("ul",{staticClass:"article-list"},t._l(t.posts,(function(a){return e("li",{key:a.key},[e("h3",[a.frontmatter.date?[t._v("\n          "+t._s(t.format(new Date(a.frontmatter.date),"MMM dd, yyyy"))+"\n        ")]:t._e()],2),t._v(" "),e("div",{staticClass:"list-item"},[e("router-link",{staticClass:"title-link",attrs:{to:a.path}},[t._v(t._s(a.title))])],1)])})),0)])}),[],!1,null,null,null);e.default=l.exports}}]);