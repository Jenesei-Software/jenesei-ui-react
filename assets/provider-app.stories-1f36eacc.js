import{j as i,d as r,J as ee,l as T}from"./global-styles-67b47ce5.js";import{a as L,b as C,c as y,d as te,e as ie,T as ne}from"./font.functions-5943c7fc.js";import{r as o}from"./index-ff614419.js";const ae=o.createContext(null),f=e=>{var S,B,k,O,P,E;const[t,d]=o.useState(e.defaultBgColor),[g,x]=o.useState([e.defaultBgColor]),[s,m]=o.useState(0),[$,c]=o.useState(e.defaultBgImage||null),[u,K]=o.useState([e.defaultBgImage||null]),[p,I]=o.useState(0),Q=o.useCallback(h=>{d(h),x(l=>{const b=[...l.slice(0,s+1),h];return m(b.length-1),b})},[s]),U=o.useCallback(h=>{c(h),K(l=>{const b=[...l.slice(0,p+1),h];return I(b.length-1),b})},[p]),Y=o.useCallback(h=>{const l=s+h;l>=0&&l<g.length&&(d(g[l]),m(l))},[g,s]),Z=o.useCallback(h=>{const l=p+h;l>=0&&l<u.length&&(c(u[l]),I(l))},[u,p]);return o.useEffect(()=>{d(e.defaultBgColor)},[e.defaultBgColor]),o.useEffect(()=>{e.defaultBgImage&&c(e.defaultBgImage)},[e.defaultBgImage]),i.jsx(ae.Provider,{value:{changeBgColor:Q,changeBgImage:U,historyBgColor:Y,historyBgImage:Z},children:i.jsx(le,{$bgColor:t,$bgImage:$,children:i.jsxs(de,{$isScrollOutlet:e.isScrollOutlet,$footer:e.footer,$notification:e.notification,$header:e.header,$nav:e.nav,$leftAside:e.leftAside,$rightAside:e.rightAside,children:[i.jsx(re,{$notification:e.notification,children:((S=e.notification)==null?void 0:S.component)||null}),i.jsx(se,{$header:e.header,children:((B=e.header)==null?void 0:B.component)||null}),i.jsx(ce,{$nav:e.nav,children:((k=e.nav)==null?void 0:k.component)||null}),i.jsx(ue,{$leftAside:e.leftAside,children:((O=e.leftAside)==null?void 0:O.component)||null}),i.jsx(he,{children:e.children}),i.jsx(fe,{$rightAside:e.rightAside,children:((P=e.rightAside)==null?void 0:P.component)||null}),i.jsx(ge,{$footer:e.footer,children:((E=e.footer)==null?void 0:E.component)||null})]})})})};try{f.displayName="ProviderApp",f.__docgenInfo={description:"",displayName:"ProviderApp",props:{defaultBgColor:{defaultValue:null,description:"",name:"defaultBgColor",required:!0,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green25"'},{value:'"green10"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red25"'},{value:'"red10"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'}]}},defaultBgImage:{defaultValue:null,description:"",name:"defaultBgImage",required:!1,type:{name:"string"}},isScrollOutlet:{defaultValue:null,description:"",name:"isScrollOutlet",required:!1,type:{name:"boolean"}},notification:{defaultValue:null,description:"",name:"notification",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; isFixed?: boolean | undefined; } | undefined"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},nav:{defaultValue:null,description:"",name:"nav",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; height?: string; heightMobile?: string; heightTablet?: string | undefined; } | undefined"}},leftAside:{defaultValue:null,description:"",name:"leftAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}},rightAside:{defaultValue:null,description:"",name:"rightAside",required:!1,type:{name:"{ component: ReactElement<any, string | JSXElementConstructor<any>>; width?: string; widthMobile?: string; widthTablet?: string | undefined; isTopHeader?: boolean | undefined; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; } | undefined"}}}}}catch{}const le=r.div.withConfig({componentId:"sc-1wlmp5u-0"})(["display:flex;flex-direction:column;max-width:100dvw;min-height:100dvh;width:100%;overflow:hidden;box-sizing:border-box;background-color:",";background-image:url(",");"],e=>ee[e.$bgColor],e=>e.$bgImage),oe=e=>{var d,g,x,s,m,$,c,u;let t=`
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `;return t=`
      "notification notification notification"
      "${(d=e.$leftAside)!=null&&d.isTopHeader?"leftAside":"header"} header ${(g=e.$rightAside)!=null&&g.isTopHeader?"rightAside":"header"}"
      "${(x=e.$leftAside)!=null&&x.isTopHeader||(s=e.$leftAside)!=null&&s.isTopNav?"leftAside":"nav"} nav ${(m=e.$rightAside)!=null&&m.isTopHeader||($=e.$rightAside)!=null&&$.isTopNav?"rightAside":"nav"}"
      "leftAside children rightAside"
      "${(c=e.$leftAside)!=null&&c.isTopFooter?"leftAside":"footer"} footer ${(u=e.$rightAside)!=null&&u.isTopFooter?"rightAside":"footer"}"
    `,t},de=r.div.withConfig({componentId:"sc-1wlmp5u-1"})(["display:grid;width:100%;height:100%;min-height:100dvh;max-height:none;transition:grid-template-areas ",",grid-template-rows ",",grid-template-columns ",";"," "," grid-template-columns:",";grid-template-rows:",";@media (max-width:","){grid-template-columns:",";grid-template-rows:",";}@media (max-width:","){grid-template-columns:",";grid-template-rows:",";}"],e=>e.theme.transition,e=>e.theme.transition,e=>e.theme.transition,e=>`
    grid-template-areas: ${oe(e)};
  `,e=>e.$isScrollOutlet&&T`
      max-height: 100dvh;
    `,e=>`${e.$leftAside?e.$leftAside.width:"0px"} 1fr ${e.$rightAside?e.$rightAside.width:"0px"}`,e=>`${e.$notification?e.$notification.height:"0px"} ${e.$header?e.$header.height:"0px"} ${e.$nav?e.$nav.height:"0px"} 1fr ${e.$footer?e.$footer.height:"0px"}`,e=>e.theme.screens.tablet.width,e=>`${e.$leftAside&&e.$leftAside.widthTablet?e.$leftAside.widthTablet:"0px"} 1fr ${e.$rightAside&&e.$rightAside.widthTablet?e.$rightAside.widthTablet:"0px"}`,e=>`${e.$notification&&e.$notification.heightTablet?e.$notification.heightTablet:"0px"} ${e.$header&&e.$header.heightTablet?e.$header.heightTablet:"0px"} ${e.$nav&&e.$nav.heightTablet?e.$nav.heightTablet:"0px"} 1fr ${e.$footer&&e.$footer.heightTablet?e.$footer.heightTablet:"0px"}`,e=>e.theme.screens.mobile.width,e=>`${e.$leftAside&&e.$leftAside.widthMobile?e.$leftAside.widthMobile:"0px"} 1fr ${e.$rightAside&&e.$rightAside.widthMobile?e.$rightAside.widthMobile:"0px"}`,e=>`${e.$notification&&e.$notification.heightMobile?e.$notification.heightMobile:"0px"} ${e.$header&&e.$header.heightMobile?e.$header.heightMobile:"0px"} ${e.$nav&&e.$nav.heightMobile?e.$nav.heightMobile:"0px"} 1fr ${e.$footer&&e.$footer.heightMobile?e.$footer.heightMobile:"0px"}`),n=T`
  opacity: 0;
  visibility: hidden;
  transition:
    opacity ${e=>e.theme.transition},
    visibility ${e=>e.theme.transition};
`,a=T`
  opacity: 1;
  visibility: visible;
  transition:
    height ${e=>e.theme.transition},
    opacity ${e=>e.theme.transition},
    visibility ${e=>e.theme.transition};
`,he=r.main.withConfig({componentId:"sc-1wlmp5u-2"})(["grid-area:children;max-width:100%;max-height:100%;overflow:auto;"]),re=r.section.withConfig({componentId:"sc-1wlmp5u-3"})(["grid-area:notification;"," "," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return((t=e.$notification)==null?void 0:t.isFixed)&&T`
      position: fixed;
      width: 100%;
      height: ${e.$notification.height};
      @media (max-width: ${d=>d.theme.screens.tablet.width}) {
        height: ${e.$notification.heightTablet?e.$notification.heightTablet:"0px"};
      }

      @media (max-width: ${d=>d.theme.screens.mobile.width}) {
        height: ${e.$notification&&e.$notification.heightMobile?e.$notification.heightMobile:"0px"};
      }
    `},e=>{var t;return(t=e.$notification)!=null&&t.height?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$notification)!=null&&t.heightTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$notification)!=null&&t.heightMobile?a:n}),se=r.header.withConfig({componentId:"sc-1wlmp5u-4"})(["grid-area:header;"," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return(t=e.$header)!=null&&t.height?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$header)!=null&&t.heightTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$header)!=null&&t.heightMobile?a:n}),ge=r.footer.withConfig({componentId:"sc-1wlmp5u-5"})(["grid-area:footer;"," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return(t=e.$footer)!=null&&t.height?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$footer)!=null&&t.heightTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$footer)!=null&&t.heightMobile?a:n}),ce=r.nav.withConfig({componentId:"sc-1wlmp5u-6"})(["grid-area:nav;"," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return(t=e.$nav)!=null&&t.height?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$nav)!=null&&t.heightTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$nav)!=null&&t.heightMobile?a:n}),ue=r.aside.withConfig({componentId:"sc-1wlmp5u-7"})(["grid-area:leftAside;"," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return(t=e.$leftAside)!=null&&t.width?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$leftAside)!=null&&t.widthTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$leftAside)!=null&&t.widthMobile?a:n}),fe=r.aside.withConfig({componentId:"sc-1wlmp5u-8"})(["grid-area:rightAside;"," @media (max-width:","){","}@media (max-width:","){","}"],e=>{var t;return(t=e.$rightAside)!=null&&t.width?a:n},e=>e.theme.screens.tablet.width,e=>{var t;return(t=e.$rightAside)!=null&&t.widthTablet?a:n},e=>e.theme.screens.mobile.width,e=>{var t;return(t=e.$rightAside)!=null&&t.widthMobile?a:n}),pe={component:f,title:"Provider/ProviderApp"},me=i.jsx("div",{style:{backgroundColor:"darkgoldenrod",padding:"2px",height:"100%",width:"100%"},children:i.jsx(L,{children:"Notification"})}),M=i.jsx("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"100%",width:"100%"},children:i.jsx(C,{children:"Header"})}),j=i.jsx("div",{style:{backgroundColor:"lightcoral",padding:"10px",height:"100%",width:"100%"},children:i.jsx(C,{children:"Footer"})}),D=i.jsx("div",{style:{backgroundColor:"lightgreen",padding:"10px",height:"100%",width:"100%"},children:i.jsx(y,{children:"Left Aside"})}),W=i.jsx("div",{style:{backgroundColor:"lightyellow",padding:"10px",height:"100%",width:"100%"},children:i.jsx(y,{children:"Right Aside"})}),z=i.jsx("div",{style:{backgroundColor:"beige",padding:"10px",height:"100%",width:"100%"},children:i.jsx(y,{children:"Nav"})}),H=i.jsxs("div",{style:{backgroundColor:"white",padding:"10px",height:"600px",width:"100%"},children:[i.jsx(C,{children:"Title H1"}),i.jsx(te,{children:"Title H2"}),i.jsx(ie,{children:"Title H3"}),i.jsx(ne,{children:"Title H4"}),i.jsx(L,{children:"Title H5"}),i.jsx(y,{children:"Title H6"})]}),w={render:e=>i.jsx(f,{...e}),args:{defaultBgColor:"black40",isScrollOutlet:!1,notification:{component:me,height:"30px",heightTablet:"20px",heightMobile:"20px",isFixed:!1},header:{component:M,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:D,width:"80px",widthTablet:"60px"},nav:{component:z,height:"80px",heightTablet:"60px",heightMobile:"40px"},rightAside:{component:W,width:"80px",widthTablet:"60px"},footer:{component:j,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:H}},v={render:e=>i.jsx(f,{...e}),args:{defaultBgColor:"black40",isScrollOutlet:!0,header:{component:M,height:"80px",heightTablet:"60px",heightMobile:"40px"},nav:{component:z,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:D,width:"80px",widthTablet:"60px",isTopNav:!0},rightAside:{component:W,width:"80px",widthTablet:"60px",isTopFooter:!0,isTopHeader:!0},footer:{component:j,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:H}},A={render:e=>i.jsx(f,{...e}),args:{defaultBgColor:"black50",isScrollOutlet:!1,header:{component:M,height:"80px",heightTablet:"60px",heightMobile:"40px"},footer:{component:j,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:H}};var F,N,R;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: false,
    notification: {
      component: defaultNotification,
      height: '30px',
      heightTablet: '20px',
      heightMobile: '20px',
      isFixed: false
    },
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(R=(N=w.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,_,q;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(q=(_=v.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,X,G;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(G=(X=A.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const we=["Default","AsideDifferentTop","WithoutAsides"];export{v as AsideDifferentTop,w as Default,A as WithoutAsides,we as __namedExportsOrder,pe as default};
