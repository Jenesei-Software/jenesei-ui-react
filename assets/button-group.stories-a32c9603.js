import{l as c,d as b,j as t}from"./global-styles-67b47ce5.js";import{B as g}from"./button-7ee76a26.js";import"./index-ff614419.js";import"./library-icon-curved.styles-45b17959.js";import"./modal-loading.styles-fb66b78f.js";import"./font.functions-5943c7fc.js";const f=c`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,w=c`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,$=b.div.withConfig({componentId:"sc-15bd3vn-0"})(["& #jenesei-button{&:focus-visible{z-index:1;}}",""],e=>e.$position==="horizontal"?f:w),i=e=>{var n;return t.jsx($,{$position:e.position,className:e.className,id:"jenesei-button-group",children:(n=e.value)==null?void 0:n.map((h,y)=>t.jsx(g,{...h,width:e.width??"auto"},y))})};try{i.displayName="ButtonGroup",i.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const G={component:i,title:"ButtonGroup"},m=e=>t.jsx(i,{...e,value:[{$styles:{$justifyContent:"flex-start"},children:"First",icon:"AddUser",iconPosition:"left",width:"auto",type:"button",genre:"black",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"gray",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Second",icon:"Delete",width:"auto",type:"button",genre:"blackBorder",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"greenTransparent",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"grayBorder",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"product",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"white",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"productBorder",size:"medium"},{$styles:{$justifyContent:"space-between"},children:"Third",icon:"Image",width:"auto",type:"button",genre:"redTransparent",size:"medium"}]}),r={render:e=>t.jsx(m,{...e}),args:{position:"horizontal"}},o={render:e=>t.jsx(m,{...e}),args:{position:"vertical",width:"200px"}};var s,a,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var u,l,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
    width: '200px'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Horizontal","Vertical"];export{r as Horizontal,o as Vertical,_ as __namedExportsOrder,G as default};
