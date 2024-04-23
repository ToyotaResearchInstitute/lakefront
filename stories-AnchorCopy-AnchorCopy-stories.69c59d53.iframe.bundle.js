"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[6590],{"./src/stories/AnchorCopy/AnchorCopy.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchorCopy:()=>AnchorCopy_stories_AnchorCopy,CustomAnchor:()=>CustomAnchor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AnchorCopy_stories});var react=__webpack_require__("./node_modules/react/index.js");const generateScrollToUrl=title=>`${window.location.origin}${window.location.pathname}#${encodeURIComponent(title)}`;var _path,_path2,emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),copy=__webpack_require__("./src/lib/util/copy/index.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgLink(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},props),_path||(_path=react.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AnchorDiv=emotion_styled_browser_esm.Z.div({display:"inline-flex",alignItems:"center",button:{marginRight:5}}),AnchorCopy=({AnchorContent,className,disabled,hashId,onCopy,title,...props})=>{const hash=hashId||title,AnchorContentComponent=Boolean(AnchorContent)?(0,jsx_runtime.jsx)(AnchorContent,{}):(0,jsx_runtime.jsx)(Button.Z,{className:"anchorCopyContent",disabled,icon:(0,jsx_runtime.jsx)(SvgLink,{className:"anchorLinkIcon"})});return(0,jsx_runtime.jsxs)(AnchorDiv,{className,...props,onClick:disabled?()=>null:()=>{const success=(0,copy.Z)(generateScrollToUrl(hash));onCopy&&success&&onCopy(generateScrollToUrl(hash))},children:[AnchorContentComponent,(0,jsx_runtime.jsx)("div",{className:"anchorCopyTitle",children:title})]})};AnchorCopy.displayName="AnchorCopy";const AnchorCopy_AnchorCopy=AnchorCopy;try{AnchorCopy.displayName="AnchorCopy",AnchorCopy.__docgenInfo={description:"AnchorCopy Component\n\nThe AnchorCopy component is meant for creating in page anchor links that\ncan be easily copied on button click. The `hashId` (or `title`\nif `hashId` is falsy) will be encoded, appended to the current url, and copied\nto the user's clipboard. `onCopy` can also be provided to perform additional\noperations on the copied content.",displayName:"AnchorCopy",props:{AnchorContent:{defaultValue:null,description:"The button or inner content to render. This defaults to\na link icon button.",name:"AnchorContent",required:!0,type:{name:"FC<{}>"}},className:{defaultValue:null,description:"The classes to pass to the anchor container.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"A boolean that defines whether the anchor should be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hashId:{defaultValue:null,description:"The (non-encoded) hash to be appended to the end of the url.",name:"hashId",required:!1,type:{name:"string"}},onCopy:{defaultValue:null,description:"The action to run on copy success.",name:"onCopy",required:!1,type:{name:"((scrollToUrl: string) => void)"}},title:{defaultValue:null,description:"The title to display next to the anchor button or content.",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AnchorCopy/AnchorCopy.tsx#AnchorCopy"]={docgenInfo:AnchorCopy.__docgenInfo,name:"AnchorCopy",path:"src/components/AnchorCopy/AnchorCopy.tsx#AnchorCopy"})}catch(__react_docgen_typescript_loader_error){}const components_AnchorCopy=AnchorCopy_AnchorCopy;var Input=__webpack_require__("./src/components/Input/Input.tsx"),DocBlock=__webpack_require__("./.storybook/DocBlock.tsx"),lakefrontColors=__webpack_require__("./src/styles/lakefrontColors.ts");const AnchorCopy_stories={title:"Lakefront/AnchorCopy",component:components_AnchorCopy,argTypes:{AnchorContent:{table:{disable:!0}},onCopy:{table:{disable:!0}}},parameters:{docs:{page:DocBlock.Z}}},Template=args=>{const[title,setTitle]=(0,react.useState)("anchor-copy"),[copied,setCopied]=(0,react.useState)("");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(components_AnchorCopy,{...args,disabled:args.disabled||!title,title:args.title||"Modify text below and click the link icon to copy it.",hashId:args.hashId||title,onCopy:copiedHash=>{setCopied(`Copied "${copiedHash}"`)}}),(0,jsx_runtime.jsx)(Input.Z,{value:args.hashId||title,onChange:({target:{value}})=>{setCopied(""),setTitle(value)},style:{marginTop:8}}),(0,jsx_runtime.jsxs)("div",{style:{color:lakefrontColors.ek,minHeight:24},children:[copied,(0,jsx_runtime.jsx)("span",{style:{color:lakefrontColors.Zi,minHeight:24},children:!title&&"Copying is disabled due to empty input."})]})]})};Template.displayName="Template";const AnchorCopy_stories_AnchorCopy=Template.bind({}),CustomAnchor=Template.bind({});CustomAnchor.args={AnchorContent:()=>(0,jsx_runtime.jsxs)("div",{style:{fontWeight:"bold",marginRight:8,display:"flex",alignItems:"center",justifyContent:"flex-end",borderRadius:4,backgroundColor:lakefrontColors.iN,border:`1px solid ${lakefrontColors.tC}`,width:64,height:32},children:[(0,jsx_runtime.jsx)("div",{style:{fontSize:8},children:"Copy"}),(0,jsx_runtime.jsx)("div",{style:{paddingBottom:4,fontSize:40},children:"🚤"})]})},AnchorCopy_stories_AnchorCopy.parameters={...AnchorCopy_stories_AnchorCopy.parameters,docs:{...AnchorCopy_stories_AnchorCopy.parameters?.docs,source:{originalSource:"args => {\n  const [title, setTitle] = useState('anchor-copy');\n  const [copied, setCopied] = useState('');\n  const handleChange = ({\n    target: {\n      value\n    }\n  }) => {\n    setCopied('');\n    setTitle(value);\n  };\n  const handleCopy = (copiedHash: string) => {\n    setCopied(`Copied \"${copiedHash}\"`);\n  };\n  return <div>\n            <AnchorCopyComponent {...args} disabled={args.disabled || !title} title={args.title || 'Modify text below and click the link icon to copy it.'} hashId={args.hashId || title} onCopy={handleCopy} />\n            <Input value={args.hashId || title} onChange={handleChange} style={{\n      marginTop: 8\n    }} />\n            <div style={{\n      color: green,\n      minHeight: 24\n    }}>\n                {copied}\n                <span style={{\n        color: saturatedRed,\n        minHeight: 24\n      }}>\n                    {!title && 'Copying is disabled due to empty input.'}\n                </span>\n            </div>\n        </div>;\n}",...AnchorCopy_stories_AnchorCopy.parameters?.docs?.source}}},CustomAnchor.parameters={...CustomAnchor.parameters,docs:{...CustomAnchor.parameters?.docs,source:{originalSource:"args => {\n  const [title, setTitle] = useState('anchor-copy');\n  const [copied, setCopied] = useState('');\n  const handleChange = ({\n    target: {\n      value\n    }\n  }) => {\n    setCopied('');\n    setTitle(value);\n  };\n  const handleCopy = (copiedHash: string) => {\n    setCopied(`Copied \"${copiedHash}\"`);\n  };\n  return <div>\n            <AnchorCopyComponent {...args} disabled={args.disabled || !title} title={args.title || 'Modify text below and click the link icon to copy it.'} hashId={args.hashId || title} onCopy={handleCopy} />\n            <Input value={args.hashId || title} onChange={handleChange} style={{\n      marginTop: 8\n    }} />\n            <div style={{\n      color: green,\n      minHeight: 24\n    }}>\n                {copied}\n                <span style={{\n        color: saturatedRed,\n        minHeight: 24\n      }}>\n                    {!title && 'Copying is disabled due to empty input.'}\n                </span>\n            </div>\n        </div>;\n}",...CustomAnchor.parameters?.docs?.source}}};const __namedExportsOrder=["AnchorCopy","CustomAnchor"]}}]);