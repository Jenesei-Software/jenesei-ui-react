import{j as S}from"./jsx-runtime-9ef10904.js";import{r as F}from"./index-6c164b11.js";import{I as y}from"./input.styles-06f14f48.js";import"./global-styles-c8765cc9.js";import"./tslib.es6-3d696b5f.js";import"./inter-90eaff4c.js";import"./modal-loading.styles-8b8713c2.js";const W={component:y,title:"Input"},t={genre:"gray",size:"medium",isError:!1,isDisabled:!1,isActive:void 0,isRequired:!1,isReadOnly:!1,isLoading:!1,placeholder:"White placeholder?",width:"300px"},T=o=>{const[I,k]=F.useState("");return S.jsx(y,{...o,value:I,onChange:A=>k(A)})},r={render:o=>S.jsx(T,{...o}),args:{...t}},e={args:{...t,isBold:!0,format:"+7 (9##) ###-##-##",placeholder:"+7 (900) 000-00-00",mask:"_",formatType:"tel"}},a={args:{...t,format:"### ### ### ###",placeholder:"000 000 000 000",mask:"",formatType:"text"}},s={args:{...t,format:"# # # #",placeholder:"0 0 0 0",mask:"_",formatType:"text"}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const B=["String","FormatPhone","FormatINN","FormatCode"];export{s as FormatCode,a as FormatINN,e as FormatPhone,r as String,B as __namedExportsOrder,W as default};
