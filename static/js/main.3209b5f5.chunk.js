(this["webpackJsonppersonal-finance-app"]=this["webpackJsonppersonal-finance-app"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(14),a=n.n(s),j=n(41),l=Object(j.b)({name:"authentication",initialState:{isAuthenticated:!1,profile:null,disconnect:null},reducers:{logIn:function(e,t){e.isAuthenticated=!0,e.profile=t.payload.getBasicProfile(),e.disconnect=t.payload.disconnect},logOut:function(e){null!==e.disconnect&&e.disconnect(),e.isAuthenticated=!1,e.profile=null,e.disconnect=null}}}),r=l.reducer,b=l.actions,d=b.logIn,o=b.logOut,u=Object(j.a)({reducer:{authentication:r}}),O=n(25),x=n(24),h=(n(133),n(10)),m=(n(134),n(161)),p=n(35),g=n(173),v=n(3),f=Object(O.b)((function(e){var t,n;return{isAuthenticated:e.authentication.isAuthenticated,user:{name:(null===(t=e.authentication.profile)||void 0===t?void 0:t.getGivenName())||"unknown",imageUrl:(null===(n=e.authentication.profile)||void 0===n?void 0:n.getImageUrl())||""}}}),(function(e){return{logOut:function(){return e(o())}}}))((function(e){if(!e.isAuthenticated)return Object(v.jsx)("div",{});var t=Object(v.jsx)("img",{className:"rounded",style:{width:"25px",height:"25px"},src:e.user.imageUrl,alt:""}),n=Object(v.jsx)(m.g,{children:Object(v.jsx)(m.h,{icon:"log-out",onClick:e.logOut,text:"Log Out"})});return Object(v.jsx)(g.a,{content:n,interactionKind:"click",placement:"bottom-end",minimal:!0,children:Object(v.jsx)(m.a,{style:{margin:0},className:"bp3-minimal",icon:t,text:e.user.name})})})),y=n(26),T=n(75);var A=Object(O.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}),(function(e){return{logIn:function(t){return e(d(t))}}}))((function(e){return Object(v.jsx)("div",{className:"loginCardContainer",children:Object(v.jsxs)(m.b,{elevation:y.a.THREE,children:[Object(v.jsx)("h2",{children:"Sign In"}),Object(v.jsx)("p",{children:"Authentication is required to use this application."}),Object(v.jsx)("div",{className:"buttonContainer",children:Object(v.jsx)(T.GoogleLogin,{clientId:"279418559001-t7d7c0hmaii6sd2ob4a87at6qujlmfb9.apps.googleusercontent.com",buttonText:"Authenticate With Google",onSuccess:function(t){(function(e){return void 0!==e.getBasicProfile})(t)&&e.logIn(t)},onFailure:function(e){console.log("Login Failed",e)},cookiePolicy:"single_host_origin",isSignedIn:!0})})]})})})),B=Object(O.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}),(function(e){return{}}))((function(e){var t=Object(h.g)();function n(n,c,i){return Object(v.jsx)(m.a,{className:"bp3-minimal",icon:c,text:n,disabled:!e.isAuthenticated,onClick:function(){return t(i)}},n)}var c=[n("Overview","home","/"),n("Data","database","/data"),n("Planning","chart","/planning"),n("Review","endorsed","/review")];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)(m.i,{className:"bp3-dark",children:[Object(v.jsxs)(m.i.Group,{children:[Object(v.jsx)(m.i.Heading,{children:"Personal Finance"}),Object(v.jsx)(m.i.Divider,{}),c]}),Object(v.jsx)(m.i.Group,{align:p.a.RIGHT,children:Object(v.jsx)(f,{})})]}),Object(v.jsx)("div",{style:{padding:"0 50px"},children:e.isAuthenticated?Object(v.jsx)(h.a,{}):Object(v.jsx)(A,{})})]})}));function w(){return Object(v.jsx)("div",{children:"Page Not Found"})}function I(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Things on this overview page include:"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Credit scores"}),Object(v.jsx)("li",{children:"Last reviewed date"}),Object(v.jsx)("li",{children:"Income for past year/quarter/month; and predicted income"}),Object(v.jsx)("li",{children:"Expenses by category for past year/quarter/month; and budget"}),Object(v.jsx)("li",{children:"Assets and debts; change over past year/quarter; and predicated"}),Object(v.jsx)("li",{children:"Goals and progress"})]})]})}var C=n(23);function D(e){var t=e.name,n=e.defaultTab,i=e.children,s=Object(h.g)(),a=Object(c.useState)(n),j=Object(C.a)(a,2),l=j[0],r=j[1];return Object(c.useEffect)((function(){return s(l.toString())}),[s,l]),Object(v.jsx)(m.n,{id:t,onChange:r,selectedTabId:l,children:i})}var R=n(174),P=n(76);function S(){return Object(v.jsxs)(R.a,{rowHeights:[35,35,35,35,35],numRows:5,enableRowResizing:!1,enableColumnResizing:!1,enableMultipleSelection:!1,enableColumnInteractionBar:!1,children:[Object(v.jsx)(P.a,{name:"Column 1"}),Object(v.jsx)(P.a,{name:"Column 2"}),Object(v.jsx)(P.a,{name:"Column 3"})]})}function G(){return Object(v.jsx)(h.d,{children:Object(v.jsxs)(h.b,{path:"/",element:Object(v.jsx)(N,{}),children:[Object(v.jsx)(h.b,{path:"accounts",element:Object(v.jsx)(S,{})}),Object(v.jsx)(h.b,{path:"income",element:Object(v.jsx)("div",{children:"TBD - Income"})}),Object(v.jsx)(h.b,{path:"recurring-payments",element:Object(v.jsx)("div",{children:"TBD - Recurring"})}),Object(v.jsx)(h.b,{path:"investments",element:Object(v.jsx)("div",{children:"TBD - Investments"})}),Object(v.jsx)(h.b,{path:"assets",element:Object(v.jsx)("div",{children:"TBD - Assets"})}),Object(v.jsx)(h.b,{path:"*",element:Object(v.jsx)(w,{})})]})})}function N(){return Object(v.jsxs)(D,{name:"Data",defaultTab:"accounts",children:[Object(v.jsx)(m.m,{id:"accounts",title:"Accounts",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"income",title:"Income",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"recurring-payments",title:"Recurring Payments",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"investments",title:"Investments",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"assets",title:"Assets",panel:Object(v.jsx)(h.a,{})})]})}function k(){return Object(v.jsx)(h.d,{children:Object(v.jsxs)(h.b,{path:"/",element:Object(v.jsx)(q,{}),children:[Object(v.jsx)(h.b,{path:"goals",element:Object(v.jsx)("div",{children:"TBD - Goals "})}),Object(v.jsx)(h.b,{path:"large-purchases",element:Object(v.jsx)("div",{children:"TBD - Large Purchases"})}),Object(v.jsx)(h.b,{path:"budgets",element:Object(v.jsx)("div",{children:"TBD - Budgets"})}),Object(v.jsx)(h.b,{path:"*",element:Object(v.jsx)(w,{})})]})})}function q(){return Object(v.jsxs)(D,{name:"Planning",defaultTab:"goals",children:[Object(v.jsx)(m.m,{id:"goals",title:"Goals",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"large-purchases",title:"Large Purchases",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"budgets",title:"Budgets",panel:Object(v.jsx)(h.a,{})})]})}function L(){return Object(v.jsx)(h.d,{children:Object(v.jsxs)(h.b,{path:"/",element:Object(v.jsx)(E,{}),children:[Object(v.jsx)(h.b,{path:"balances",element:Object(v.jsx)("div",{children:"TBD - Balances"})}),Object(v.jsx)(h.b,{path:"spending",element:Object(v.jsx)("div",{children:"TBD - Spending"})}),Object(v.jsx)(h.b,{path:"monthly-clearing",element:Object(v.jsx)("div",{children:"TBD - Monthly Clearing"})}),Object(v.jsx)(h.b,{path:"quarterly-review",element:Object(v.jsx)("div",{children:"TBD - Quarterly Review"})}),Object(v.jsx)(h.b,{path:"*",element:Object(v.jsx)(w,{})})]})})}function E(){return Object(v.jsxs)(D,{name:"Review",defaultTab:"balances",children:[Object(v.jsx)(m.m,{id:"balances",title:"Balances",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"spending",title:"Spending",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"monthly-clearing",title:"Monthly Clearing",panel:Object(v.jsx)(h.a,{})}),Object(v.jsx)(m.m,{id:"quarterly-review",title:"Quarterly Review",panel:Object(v.jsx)(h.a,{})})]})}function F(){return Object(v.jsx)(h.d,{children:Object(v.jsxs)(h.b,{path:"/",element:Object(v.jsx)(B,{}),children:[Object(v.jsx)(h.b,{index:!0,element:Object(v.jsx)(I,{})}),Object(v.jsx)(h.b,{path:"data/*",element:Object(v.jsx)(G,{})}),Object(v.jsx)(h.b,{path:"planning/*",element:Object(v.jsx)(k,{})}),Object(v.jsx)(h.b,{path:"review/*",element:Object(v.jsx)(L,{})}),Object(v.jsx)(h.b,{path:"*",element:Object(v.jsx)(w,{})})]})})}a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(O.a,{store:u,children:Object(v.jsx)(x.a,{children:Object(v.jsx)(F,{})})})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.3209b5f5.chunk.js.map