import{j as c}from"./jsx-runtime-9ef10904.js";import{r as t}from"./index-6c164b11.js";import{C as l}from"./checkboxes.styles-1eae02c2.js";import"./global-styles-c8765cc9.js";import"./tslib.es6-3d696b5f.js";import"./inter-90eaff4c.js";import"./checkbox.styles-33e5f97c.js";import"./modal-loading.styles-8b8713c2.js";const j={component:l,title:"Checkbox/Checkboxes"},u={checkboxGenre:"gray",checkBoxView:"circle",checkboxWidth:"100%",checkboxIsHiddenBorder:!1,checkboxIsActive:!1,multiple:!0,size:"medium",labelField:"label",valueField:"value",width:"300px"},d=r=>{const[n,i]=t.useState([]),[p]=t.useState([{value:0,label:"First"},{value:1,label:"Second"}]);return c.jsx(l,{...r,value:n,options:p,onChange:m=>i(m)})},e={render:r=>c.jsx(d,{...r}),args:{...u}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <CheckboxesWrapper {...args} />,
  args: {
    ...defaultArgs
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,j as default};
