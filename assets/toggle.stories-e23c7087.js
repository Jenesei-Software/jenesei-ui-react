import{j as k}from"./jsx-runtime-9ef10904.js";import{r as d}from"./index-6c164b11.js";import{p as D}from"./index-b81e894c.js";import{c as s,K as M,p as P}from"./global-styles-c8765cc9.js";import"./tslib.es6-3d696b5f.js";var $={},O={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var a={}.hasOwnProperty;function o(){for(var n="",c=0;c<arguments.length;c++){var i=arguments[c];i&&(n=r(n,t(i)))}return n}function t(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return o.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var c="";for(var i in n)a.call(n,i)&&n[i]&&(c=r(c,i));return c}function r(n,c){return c?n?n+" "+c:n+c:n}e.exports?(o.default=o,e.exports=o):window.classNames=o})()})(O);var N=O.exports,p={};Object.defineProperty(p,"__esModule",{value:!0});var F=d,_=R(F);function R(e){return e&&e.__esModule?e:{default:e}}p.default=function(){return _.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},_.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))};var b={};Object.defineProperty(b,"__esModule",{value:!0});var B=d,x=j(B);function j(e){return e&&e.__esModule?e:{default:e}}b.default=function(){return x.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},x.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))};var y={};Object.defineProperty(y,"__esModule",{value:!0});y.pointerCoord=q;function q(e){if(e){var a=e.changedTouches;if(a&&a.length>0){var o=a[0];return{x:o.clientX,y:o.clientY}}var t=e.pageX;if(t!==void 0)return{x:t,y:e.pageY}}return{x:0,y:0}}Object.defineProperty($,"__esModule",{value:!0});var z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},I=function(){function e(a,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}return function(a,o,t){return o&&e(a.prototype,o),t&&e(a,t),a}}(),C=d,u=h(C),V=N,X=h(V),A=D,l=h(A),L=p,W=h(L),Y=b,K=h(Y),m=y;function h(e){return e&&e.__esModule?e:{default:e}}function U(e,a){var o={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o}function G(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Z(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a&&(typeof a=="object"||typeof a=="function")?a:e}function H(e,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var v=function(e){H(a,e);function a(o){G(this,a);var t=Z(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,o));return t.handleClick=t.handleClick.bind(t),t.handleTouchStart=t.handleTouchStart.bind(t),t.handleTouchMove=t.handleTouchMove.bind(t),t.handleTouchEnd=t.handleTouchEnd.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleBlur=t.handleBlur.bind(t),t.previouslyChecked=!!(o.checked||o.defaultChecked),t.state={checked:!!(o.checked||o.defaultChecked),hasFocus:!1},t}return I(a,[{key:"componentDidUpdate",value:function(t){t.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(t){if(!this.props.disabled){var r=this.input;if(t.target!==r&&!this.moved){this.previouslyChecked=r.checked,t.preventDefault(),r.focus(),r.click();return}var n=this.props.hasOwnProperty("checked")?this.props.checked:r.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(t){this.props.disabled||(this.startX=(0,m.pointerCoord)(t).x,this.activated=!0)}},{key:"handleTouchMove",value:function(t){if(this.activated&&(this.moved=!0,this.startX)){var r=(0,m.pointerCoord)(t).x;this.state.checked&&r+15<this.startX?(this.setState({checked:!1}),this.startX=r,this.activated=!0):r-15>this.startX&&(this.setState({checked:!0}),this.startX=r,this.activated=r<this.startX+5)}}},{key:"handleTouchEnd",value:function(t){if(this.moved){var r=this.input;if(t.preventDefault(),this.startX){var n=(0,m.pointerCoord)(t).x;this.previouslyChecked===!0&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,r.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,r.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(t){var r=this.props.onFocus;r&&r(t),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(t){var r=this.props.onBlur;r&&r(t),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(t){var r=this.props.icons;return r?r[t]===void 0?a.defaultProps.icons[t]:r[t]:null}},{key:"render",value:function(){var t=this,r=this.props,n=r.className;r.icons;var c=U(r,["className","icons"]),i=(0,X.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return u.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},u.default.createElement("div",{className:"react-toggle-track"},u.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),u.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),u.default.createElement("div",{className:"react-toggle-thumb"}),u.default.createElement("input",z({},c,{ref:function(w){t.input=w},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),a}(C.PureComponent),J=$.default=v;v.displayName="Toggle";v.defaultProps={icons:{checked:u.default.createElement(W.default,null),unchecked:u.default.createElement(K.default,null)}};v.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])};const Q=s(["",";"],e=>ee(M[e.$size])),ee=e=>s(["& .react-toggle-track{height:","px;width:","px;}& .react-toggle-thumb{height:","px;width:","px;}&.react-toggle--checked .react-toggle-thumb{left:calc(100% - ","px);}"],e.height,e.height*2+2,e.height-2,e.height-2,e.height),te=s(["& div{transition:all 0.2s,outline 0s;}&.react-toggle{outline:0;}&.react-toggle:hover:not(.react-toggle--disabled){& .react-toggle-track{border-color:",";background:",";}}&.react-toggle:active:not(.react-toggle--disabled){& .react-toggle-track{background:",";border-color:",";}& .react-toggle-thumb{box-shadow:none !important;}}&.react-toggle--focus{& .react-toggle-track{border-color:",";background:",";}& .react-toggle-thumb{box-shadow:none !important;}}& .react-toggle-track-check{display:none;}& .react-toggle-track-x{display:none;}& .react-toggle-thumb{",";}&:focus-visible{",";}&.react-toggle--checked{& .react-toggle-track{background:",";}& .react-toggle-thumb{background:",";border-color:",";}}& .react-toggle-track{border:1px solid transparent;border-color:",";background:",";}"],e=>e.theme.colors.toggle[e.$genre].border.hover,e=>e.theme.colors.toggle[e.$genre].background.hover,e=>e.theme.colors.toggle[e.$genre].background.active,e=>e.theme.colors.toggle[e.$genre].border.active,e=>e.theme.colors.toggle[e.$genre].border.focus,e=>e.theme.colors.toggle[e.$genre].background.focus,e=>s(["background:",";border-color:",";"],e.theme.colors.toggle[e.$genre].color.rest,e.theme.colors.toggle[e.$genre].background.rest),e=>s(["& .react-toggle-track{outline:2px solid ",";border-color:",";background:",";}"],e.theme.colors.focus,e.theme.colors.toggle[e.$genre].border.focus,e.theme.colors.toggle[e.$genre].background.focus),e=>e.theme.colors.toggle[e.$genre].background.active,e=>e.theme.colors.toggle[e.$genre].color.active,e=>e.theme.colors.toggle[e.$genre].background.active,e=>e.theme.colors.toggle[e.$genre].border.rest,e=>e.theme.colors.toggle[e.$genre].background.rest),ae=s(["",""],e=>e.$isDisabled?s(["opacity:0.5;"]):s(["opacity:1;"])),re=P(J).withConfig({componentId:"sc-1p79vca-0"})(["",";",";",";"],te,ae,Q),g=d.memo(e=>k.jsx(re,{checked:e.value,onChange:()=>e.onChange&&e.onChange(!e.value),disabled:e.isDisabled,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,tabIndex:0}));try{g.displayName="Toggle",g.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"product"'},{value:'"gray"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}}}}}catch{}const de={component:g,title:"Toggle"},oe=e=>{const[a,o]=d.useState(!1);return k.jsx(g,{...e,value:a,onChange:t=>o(t)})},f={render:e=>k.jsx(oe,{...e}),args:{genre:"product",isDisabled:!1,isError:!1,value:!0,size:"small"}};var T,E,S;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ToggleWrapper {...args} />,
  args: {
    genre: 'product',
    isDisabled: false,
    isError: false,
    value: true,
    size: 'small'
  }
}`,...(S=(E=f.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const he=["Default"];export{f as Default,he as __namedExportsOrder,de as default};