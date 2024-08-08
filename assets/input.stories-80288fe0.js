import{j as S}from"./global-styles-67b47ce5.js";import{r as T}from"./index-ff614419.js";import{I as y}from"./input.styles-eabd7a2f.js";import"./modal-loading.styles-fb66b78f.js";import"./font.functions-5943c7fc.js";const R={component:y,title:"Input"},t={genre:"gray",size:"medium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,placeholder:"White placeholder?",width:"300px"},_=o=>{const[I,k]=T.useState("");return S.jsx(y,{...o,value:I,onChange:F=>k(F)})},r={render:o=>S.jsx(_,{...o}),args:{...t}},e={args:{...t,isBold:!0,format:"+7 (9##) ###-##-##",placeholder:"+7 (900) 000-00-00",mask:"_",formatType:"tel"}},a={args:{...t,format:"### ### ### ###",placeholder:"000 000 000 000",mask:"",formatType:"text"}},s={args:{...t,format:"# # # #",placeholder:"0 0 0 0",mask:"_",formatType:"text"}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <InputStringWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isBold: true,
    format: '+7 (9##) ###-##-##',
    placeholder: '+7 (900) 000-00-00',
    mask: '_',
    formatType: 'tel'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,u,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '### ### ### ###',
    placeholder: '000 000 000 000',
    mask: '',
    formatType: 'text'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    format: '# # # #',
    placeholder: '0 0 0 0',
    mask: '_',
    formatType: 'text'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const W=["String","FormatPhone","FormatINN","FormatCode"];export{s as FormatCode,a as FormatINN,e as FormatPhone,r as String,W as __namedExportsOrder,R as default};
