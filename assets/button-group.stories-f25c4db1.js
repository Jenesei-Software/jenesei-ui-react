import{j as n}from"./jsx-runtime-9ef10904.js";import{r as g}from"./index-6c164b11.js";import{B as m}from"./button-group.styles-22e4baae.js";import"./global-styles-c8765cc9.js";import"./tslib.es6-3d696b5f.js";import"./inter-90eaff4c.js";import"./checkbox.styles-33e5f97c.js";import"./modal-loading.styles-8b8713c2.js";import"./input.styles-06f14f48.js";import"./checkboxes.styles-1eae02c2.js";import"./index-4593f2b5.js";const G={component:m,title:"ButtonGroup"},f=r=>{const[s,i]=g.useState({first:!1,second:!1,third:!0});return n.jsx(m,{...r,value:[{children:"First",icon:"Copy",iconPosition:"left",width:"auto",type:"button",genre:"gray",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isActive:s.first,justifyContent:"flex-start",onClick:()=>{i(e=>({...e,first:!e.first}))}},{children:"Second",icon:"ChevronLeft",width:"auto",type:"button",genre:"gray",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isActive:s.second,justifyContent:"space-between",onClick:()=>{i(e=>({...e,second:!e.second}))}},{children:"Third",icon:"Coffee",width:"auto",type:"button",genre:"gray",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isActive:s.third,justifyContent:"space-between",onClick:()=>{i(e=>({...e,third:!e.third}))}}]})},t={render:r=>n.jsx(f,{...r}),args:{position:"horizontal"}},o={render:r=>n.jsx(f,{...r}),args:{position:"vertical",width:"200px"}};var a,c,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
    width: "200px"
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const O=["Horizontal","Vertical"];export{t as Horizontal,o as Vertical,O as __namedExportsOrder,G as default};
