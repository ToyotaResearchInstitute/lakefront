"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[5398],{"./.storybook/DocBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocBlock=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.fQ,{includePrimary:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,{})]}),__WEBPACK_DEFAULT_EXPORT__=DocBlock;try{DocBlock.displayName="DocBlock",DocBlock.__docgenInfo={description:"",displayName:"DocBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/DocBlock.tsx#DocBlock"]={docgenInfo:DocBlock.__docgenInfo,name:"DocBlock",path:".storybook/DocBlock.tsx#DocBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/RadioGroup/RadioGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllDisabledRadioGroup:()=>AllDisabledRadioGroup,MixedContentRadioGroup:()=>MixedContentRadioGroup,SingleDisabledRadioGroupOption:()=>SingleDisabledRadioGroupOption,StandardRadioGroup:()=>StandardRadioGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),src_components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RadioGroup/RadioGroup.tsx"),_storybook_DocBlock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/DocBlock.tsx"),src_styles_lakefrontColors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/lakefrontColors.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Lakefront/RadioGroup",component:src_components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{onChange:{control:!1}},parameters:{docs:{page:_storybook_DocBlock__WEBPACK_IMPORTED_MODULE_2__.Z,transformSource:source=>source.replace("onChange={function noRefCheck() {}}","").replace(/\n/g,"").replace(/[ ]{2}/g," ")}}},Template=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_1__.Z,{name:args.name,options:args.options,value,disabled:args.disabled,onChange:event=>{setValue(event.target.value)}})};Template.displayName="Template";const StandardRadioGroup=Template.bind({});StandardRadioGroup.args={name:"alphabet",options:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"}]};const SingleDisabledRadioGroupOption=Template.bind({});SingleDisabledRadioGroupOption.args={name:"cells",options:[{label:"A1",value:"A1"},{label:"B2",value:"B2",disabled:!0},{label:"C3",value:"C3"}]};const AllDisabledRadioGroup=Template.bind({});AllDisabledRadioGroup.args={name:"states",options:[{label:"AL",value:"AL"},{label:"AK",value:"AK"},{label:"AZ",value:"AZ"}],disabled:!0};const MixedContentRadioGroup=Template.bind({}),contentStyle={height:"2em",width:"4em",borderRadius:2};MixedContentRadioGroup.args={name:"mixedContent",options:[{label:"A",value:"A"},{label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...contentStyle,backgroundColor:src_styles_lakefrontColors__WEBPACK_IMPORTED_MODULE_3__.iN}}),value:"B"},{label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8em"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:"Choose A Game"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select",{style:{...contentStyle,width:"9em",marginTop:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option",{value:1,children:"Chess"},"C1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option",{value:1,children:"Checkers"},"C2")]})})]}),value:"C"}]},StandardRadioGroup.parameters={...StandardRadioGroup.parameters,docs:{...StandardRadioGroup.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup name={args.name} options={args.options} value={value} disabled={args.disabled} onChange={handleClick} />;\n}",...StandardRadioGroup.parameters?.docs?.source}}},SingleDisabledRadioGroupOption.parameters={...SingleDisabledRadioGroupOption.parameters,docs:{...SingleDisabledRadioGroupOption.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup name={args.name} options={args.options} value={value} disabled={args.disabled} onChange={handleClick} />;\n}",...SingleDisabledRadioGroupOption.parameters?.docs?.source}}},AllDisabledRadioGroup.parameters={...AllDisabledRadioGroup.parameters,docs:{...AllDisabledRadioGroup.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup name={args.name} options={args.options} value={value} disabled={args.disabled} onChange={handleClick} />;\n}",...AllDisabledRadioGroup.parameters?.docs?.source}}},MixedContentRadioGroup.parameters={...MixedContentRadioGroup.parameters,docs:{...MixedContentRadioGroup.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState('');\n  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <RadioGroup name={args.name} options={args.options} value={value} disabled={args.disabled} onChange={handleClick} />;\n}",...MixedContentRadioGroup.parameters?.docs?.source}}};const __namedExportsOrder=["StandardRadioGroup","SingleDisabledRadioGroupOption","AllDisabledRadioGroup","MixedContentRadioGroup"]},"./src/components/RadioGroup/RadioGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>RadioGroup_RadioGroup});var emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const StyledLabel=emotion_styled_browser_esm.Z.label((({theme,disabled})=>({color:disabled?theme?.colors?.mercury:theme?.colors?.cinder,display:"flex",flexDirection:"row",fontSize:16,padding:0,marginBottom:41,alignItems:"center","div.label":{marginLeft:12,fontSize:16},svg:{color:disabled?theme?.colors?.mercury:theme?.colors?.white,marginLeft:2,"path:nth-of-type(2)":{fill:disabled?theme?.colors?.mercury:void 0}},cursor:disabled?"not-allowed":"auto"}))),StyledRadioGroup=emotion_styled_browser_esm.Z.input((({disabled})=>({display:"none",appearance:"none",WebkitAppearance:"none",cursor:disabled?"not-allowed":"pointer"})));var _path,_path2,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgRadioChecked(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},props),_path||(_path=react.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_path2||(_path2=react.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))}var radioUnchecked_path,radioUnchecked_path2;function radioUnchecked_extends(){return radioUnchecked_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},radioUnchecked_extends.apply(this,arguments)}function SvgRadioUnchecked(props){return react.createElement("svg",radioUnchecked_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},props),radioUnchecked_path||(radioUnchecked_path=react.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),radioUnchecked_path2||(radioUnchecked_path2=react.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})))}var theme=__webpack_require__("./src/styles/theme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioGroup=({name,options,value,disabled=!1,onChange=()=>null,labelClassName,...props})=>{const handleChange=event=>{disabled||onChange(event)};return(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.a,{theme:theme.Z,children:options.map((option=>{const icon=value===option.value?(0,jsx_runtime.jsx)(SvgRadioChecked,{}):(0,jsx_runtime.jsx)(SvgRadioUnchecked,{}),checked=value===option.value,disableOption=disabled||option.disabled;return(0,jsx_runtime.jsxs)(StyledLabel,{disabled:disableOption,className:labelClassName,children:[(0,jsx_runtime.jsx)(StyledRadioGroup,{...props,name,options,value:option.value,disabled:disableOption,onChange:disableOption?()=>null:handleChange,type:"radio",checked}),icon,option.label&&(0,jsx_runtime.jsx)("div",{className:"label",children:option.label})]})}))})};RadioGroup.displayName="RadioGroup";const RadioGroup_RadioGroup=RadioGroup;try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"RadioGroup Component\n\nThe RadioGroup component takes in native radio button props as well as its own RadioGroupProps.",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"The name of the radio button group.",name:"name",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"The options of each radio button within the radio group.\nOptions include the `label` (appearance), `value` (returned on selection),\nand whether the individual option is `disabled`.",name:"options",required:!0,type:{name:"{ value: string | number; label: string | ReactElement<any, string | JSXElementConstructor<any>>; disabled?: boolean | undefined; }[]"}},value:{defaultValue:null,description:"The value of the selected radio button.",name:"value",required:!1,type:{name:"string | number | (string & readonly string[]) | (number & readonly string[])"}},disabled:{defaultValue:{value:"false"},description:"HTML input element disabled prop.",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => null"},description:"The action that should be run when a radio button is selected.",name:"onChange",required:!1,type:{name:"(((event: ChangeEvent<HTMLInputElement>) => void) & ChangeEventHandler<HTMLInputElement>)"}},className:{defaultValue:null,description:"The classes to pass to the radio group.",name:"className",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"The classes to pass to the radio group label.",name:"labelClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);