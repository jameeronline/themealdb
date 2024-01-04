import{j as u}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import{P as s}from"./index-2baff29e.js";import"./_commonjsHelpers-725317a4.js";const r=({type:i,label:c,...m})=>u.jsx("div",{className:`badge badge-${i}`,children:c});r.propTypes={type:s.oneOf(["primary","danger","warning","info","success"]),label:s.string.isRequired,onClick:s.func};r.defaultProps={type:"primary",label:"badge",onClick:void 0};r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{defaultValue:{value:'"primary"',computed:!1},description:"Is this the principal call to action on the page?",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"danger"',computed:!1},{value:'"warning"',computed:!1},{value:'"info"',computed:!1},{value:'"success"',computed:!1}]},required:!1},label:{defaultValue:{value:'"badge"',computed:!1},description:"Button contents",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1}}};const v={title:"Example/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"primary",label:"badge"}},a={args:{type:"danger"}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    type: "primary",
    label: "badge"
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "danger"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Primary","Danger"];export{a as Danger,e as Primary,h as __namedExportsOrder,v as default};
