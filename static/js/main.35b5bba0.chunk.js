(this.webpackJsonpchannel=this.webpackJsonpchannel||[]).push([[0],{107:function(e,t){},109:function(e,t){},135:function(e,t){},137:function(e,t){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(84),l=n.n(i),c=(n(94),n(95),n(23));function o(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",{className:"logo"},r.a.createElement(c.b,{to:"/"},"Channel")),r.a.createElement("nav",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/RSS",target:"_blank",rel:"noopener noreferrer"},"What is RSS?"),r.a.createElement(c.b,{to:"/guide"},"Guide")))}var s=n(17),u=n(30);function d(e){var t=e.title,n=e.onClick,a=e.onDelete,i=e.feedCount;return r.a.createElement("div",{className:"sidebar--feed-item"},r.a.createElement("li",{title:t,style:{paddingRight:"15px"},onClick:n,className:"sidebar--feed-title"},t.length>20?t.substring(0,24)+"...":t," ",r.a.createElement("span",{className:"sidebar--feed-item-count"},i)),r.a.createElement("p",{title:"Delete Feed",className:"sidebar--feed-delete",onClick:a},"x"))}function m(e){var t=e.item,n=e.onClick,a=new Date(t.pubDate);return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onClick:n,className:t.read?"no-bullet":"content-links--item"},r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},t.title," ",r.a.createElement("span",{className:"content-links--item-date"},"- ",a.toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"}))," ")))}var f=n(151);function h(e){var t=e.feeds,n=e.markAsRead,a=e.items;return r.a.createElement("div",null,r.a.createElement("ul",{className:"content-links"},r.a.createElement("div",{className:"content-links--info"},r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description)),t.items.length?t.items.map((function(e,i){return r.a.createElement(m,{key:Object(f.a)(),item:e,onClick:function(){return function(e,t){var r=a.filter((function(t){return t.id===e}));!1===r[0].items[t].read&&(r[0].items[t].read=!0,n()),console.log(r[0].items)}(t.id,i)}})})):r.a.createElement("li",null,"Select a Feed")))}var p=n(25),g=n.n(p),b=n(26),E=n(54),k=n(86),v="https://cors-anywhere.herokuapp.com/",w=new(n.n(k).a),y=function(){var e=Object(E.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.parseURL("".concat(v,"https://news.ycombinator.com/rss"));case 2:return t=e.sent,e.abrupt("return",{id:Object(f.a)(),feedRSS:"https://news.ycombinator.com/rss",feedTitle:t.title,feedDesc:t.description,feedUrl:t.link,feedItems:t.items.length,items:t.items.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{read:!1})}))});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(E.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.parseURL("".concat(v).concat(t));case 2:return n=e.sent,e.abrupt("return",{id:Object(f.a)(),feedRSS:t,feedTitle:n.title,feedDesc:n.description,feedUrl:n.link,feedItems:n.items.length,items:n.items.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{read:!1})}))});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function O(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(""),c=Object(u.a)(l,2),o=c[0],m=c[1],p=Object(a.useState)({id:"",title:"",description:"",items:[]}),g=Object(u.a)(p,2),b=g[0],E=g[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("feeds"));e.length||(y().then((function(e){localStorage.setItem("feeds",JSON.stringify([e])),i([e])})),console.log("adding default...")),i(e)}),[]);return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("ul",{className:"sidebar--feed-list"},n.length?n.map((function(e){return r.a.createElement(d,{title:e.feedTitle,feedCount:e.feedItems,key:Object(f.a)(),onClick:function(){return function(e){var t=n.filter((function(t){return t.id===e}));console.log(t),E({id:t[0].id,title:t[0].feedTitle,description:t[0].feedDesc,items:t[0].items})}(e.id)},onDelete:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));console.log(t),i(Object(s.a)(t)),localStorage.setItem("feeds",JSON.stringify(Object(s.a)(t)))}(e.id)}})})):r.a.createElement("li",null,"No feeds yet.")),r.a.createElement("form",{className:"sidebar-form",onSubmit:function(e){e.preventDefault(),S(o).then((function(e){localStorage.setItem("feeds",JSON.stringify([].concat(Object(s.a)(n),[e]))),i([].concat(Object(s.a)(n),[e]))})).catch((function(e){return alert(e)})),m("")}},r.a.createElement("input",{type:"text",value:o,onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",null,"Add a Feed"))),r.a.createElement(h,{feeds:b,markAsRead:function(){return e=b.id,i(n.filter((function(t){return t.id===e?[].concat(Object(s.a)(n),[t.feedItems-=1]):(console.log(t),b)}))),void localStorage.setItem("feeds",JSON.stringify(Object(s.a)(n)));var e},items:n}))}var j=n(1),N=n(87),x=n.n(N),I=n(88),R=n.n(I);function C(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement("div",{className:"guide-container"},r.a.createElement("div",{className:"guide-container--content"},r.a.createElement("h2",null,"How to Add a Feed"),r.a.createElement("img",{style:{maxWidth:"100%"},src:x.a,alt:"screenshot of input field"}),r.a.createElement("p",null,"Adding a feed is pretty straight forward. All you need to do is to make sure you're typing, most likely pasting, a valid rss feed link. If the feed is not valid, you will get a browser alert (currently working on nicer solution) indicating that the feed is not valid. A typical feed link could look like this ",r.a.createElement("a",{href:"https://whatthefuck.is/feed.xml"},"https://whatthefuck.is/feed.xml")," Just make sure the link is an actual rss feed address instead of the url of page. Most blogs have an RSS feed link somewhere in their navigation. Be aware however some sites bury them in the footer somewhere. Some sites simply don't have an RSS feed."),r.a.createElement("h2",null,"Deleting a Feed"),r.a.createElement("img",{style:{maxWidth:"100%"},src:R.a,alt:"screenshot of input field"}),r.a.createElement("p",null,"To delete a feed simply hover and click the x."),r.a.createElement("h2",null,"How this App is Working"),r.a.createElement("p",null,"This app is still a work in progress and at the moment it is best viewed on desktop sized screens. It's using the browser's localStorage to make the feeds you add persist. I added the feature that keeps track of the items you read, but it's currently buggy. I'm hoping to keep adding features. It's built with React. If you're a coder and want to collaborate or give me some pointers checkout the ",r.a.createElement("a",{href:"https://github.com/yarocruz/channel"},"code at Github")," and let me know."))))}var D=function(){return r.a.createElement(c.a,{basename:"/channel"},r.a.createElement("div",{className:"App"},r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/"},r.a.createElement(o,null),r.a.createElement(O,null)),r.a.createElement(j.a,{path:"/guide"},r.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,n){e.exports=n.p+"static/media/add-feed.9189382b.png"},88:function(e,t,n){e.exports=n.p+"static/media/delete-feed.eb2c40ee.png"},89:function(e,t,n){e.exports=n(150)},94:function(e,t,n){},95:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.35b5bba0.chunk.js.map