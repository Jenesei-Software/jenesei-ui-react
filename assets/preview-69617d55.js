import{_ as a}from"./iframe-d631b84d.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-514cc670.js").then(r=>r.ai),["./DocsRenderer-PKQXORMH-514cc670.js","./iframe-d631b84d.js","./index-ff614419.js","./react-18-814a68af.js","./index-4da86cf0.js","./index-1b441bc2.js","./isArray-0dae34f2.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};