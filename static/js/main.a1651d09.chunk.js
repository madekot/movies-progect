(this["webpackJsonpmovies-progect"]=this["webpackJsonpmovies-progect"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(16),n(4)),o=n(8),l=n(2),h=n(10),j=n(9),u=n(0);var d=function(){return Object(u.jsx)("nav",{className:"green darken-1",children:Object(u.jsxs)("div",{className:"nav-wrapper",children:[Object(u.jsx)("a",{href:"#!",className:"brand-logo",children:"Films"}),Object(u.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"sass.html",children:"link"})})})]})})};var b=function(){return Object(u.jsxs)("footer",{className:"page-footer green lighten-4",children:[Object(u.jsx)("div",{className:"container"}),Object(u.jsx)("div",{className:"footer-copyright",children:Object(u.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(u.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})]})},f=n(3),g=n(11);function m(e){var t=e.title,n=e.poster,a=e.category,c=e.year;return Object(u.jsxs)("div",{className:"movie card",children:[Object(u.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(u.jsx)("img",{className:"activator",src:n,alt:""})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(u.jsxs)("p",{style:{display:"flex",justifyContent:"space-between"},children:[Object(u.jsx)("span",{children:a}),Object(u.jsx)("span",{children:c})]})]})]})}var v=["id"];var p=function(e){var t=e.films.map((function(e){var t=e.id,n=Object(g.a)(e,v);return Object(u.jsx)(m,Object(f.a)({},n),t)}));return Object(u.jsx)("div",{className:"movies",children:t})},O=n(5);var x=function(e){var t=e.label,n=e.name,a=e.checkedType,c=e.setCheckedType,r=e.onChangeType;return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-name":n,checked:a===n,onChange:function(e){var t=e.target.dataset.name;c(t),r(t)}}),Object(u.jsx)("span",{children:t})]})},y=[{label:"All",name:"all"},{label:"Films all",name:"films"},{label:"Serials all",name:"serials"}];var C=function(e){var t=e.onChangeType,n=Object(a.useState)("all"),c=Object(O.a)(n,2),r=c[0],s=c[1],i=y.map((function(e){return Object(u.jsx)(x,Object(f.a)(Object(f.a)({},e),{},{checkedType:r,setCheckedType:s,onChangeType:t}),e.name)}));return Object(a.useEffect)((function(){t(r)}),[r,t]),Object(u.jsx)("form",{action:"#",style:{display:"flex",justifyContent:"space-between"},children:i})};var N=function(e){var t=e.search,n=e.onChangeSearch,c=Object(a.useState)(""),r=Object(O.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){i(t)}),[t]),Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{className:"validate",value:s,type:"search",placeholder:"search",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&n(s)}(e)}}),Object(u.jsx)("button",{className:"btn search-btn",onClick:function(){return n(s)},children:"Search"})]})},S=function(){return Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"indeterminate"})})};var w=function(e){var t=e.films,n=e.search,a=e.loading,c=e.onChangeSearch,r=e.onChangeType,s=a?Object(u.jsx)(S,{}):Object(u.jsx)(p,{films:t});return Object(u.jsxs)("main",{className:"container content",children:[Object(u.jsx)(N,{search:n,onChangeSearch:c}),Object(u.jsx)(C,{onChangeType:r}),t.length?s:Object(u.jsx)("h4",{children:"Nothing found"})]})},k=function e(){var t=this;Object(i.a)(this,e),this.beginningUrl="https://www.omdbapi.com/?apikey=2dc59f56&s=",this.transformData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return{title:e.Title,poster:e.Poster,category:e.Type,year:e.Year,id:e.imdbID}}))},this.getMovies=function(e){return fetch("".concat(t.beginningUrl).concat(e,"&type=movie")).then((function(e){return e.json()})).then((function(e){var n=e.Search;return t.transformData(n)}))},this.getSerials=function(e){return fetch("".concat(t.beginningUrl).concat(e,"&type=series")).then((function(e){return e.json()})).then((function(e){var n=e.Search;return t.transformData(n)}))},this.getAllVideo=function(e){return fetch("".concat(t.beginningUrl).concat(e)).then((function(e){return e.json()})).then((function(e){var n=e.Search;return t.transformData(n)}))}},T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).services=new k,e.state={films:[],search:"matrix",type:"",loading:!0},e.getFactoryRequest=function(t,n){var a=e.services,c=a.getAllVideo,r=a.getMovies,s=a.getSerials;return"films"===t?r(n):"serials"===t?s(n):c(n)},e.onChangeSearch=function(t){var n=Object(l.a)(e).getFactoryRequest,a=e.state.type;e.setState({loading:!0}),n(a,t).then((function(n){e.setState({search:t,films:n,loading:!1})}))},e.onChangeType=function(t){var n=Object(l.a)(e).getFactoryRequest,a=e.state.search;e.setState({loading:!0}),n(t,a).then((function(n){e.setState({search:a,films:n,loading:!1,type:t})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.services.getAllVideo(this.state.search).then((function(t){return e.setState({films:t})}))}},{key:"render",value:function(){var e=this.onChangeSearch,t=this.onChangeType,n=this.state,a=n.films,c=n.search,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(w,{search:c,films:a,loading:r,onChangeSearch:e,onChangeType:t}),Object(u.jsx)(b,{})]})}}]),n}(a.Component),D=T;s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a1651d09.chunk.js.map