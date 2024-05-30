"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[6323],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{L:()=>useInsertionEffectAlwaysWithSyncFallback,j:()=>useInsertionEffectWithLayoutFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useInsertionEffect=!!(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect&&(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useInsertionEffect,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||function syncFallback(create){return create()},useInsertionEffectWithLayoutFallback=useInsertionEffect||react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./src/stories/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Card:()=>Card_stories_Card,MultiCard:()=>MultiCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),lakefrontColors=__webpack_require__("./src/styles/lakefrontColors.ts");const CardContentContainer=emotion_styled_browser_esm.Z.div((()=>({display:"inline-grid",gridTemplateColumns:"1fr auto",gridTemplateRows:"55px auto auto",width:250,height:"auto",border:`1px solid ${lakefrontColors.ZP.alto}`,borderRadius:3,padding:10}))),StyledH1Title=emotion_styled_browser_esm.Z.h1((()=>({fontSize:18,height:"min-content"}))),StyledDescription=emotion_styled_browser_esm.Z.p((()=>({gridArea:"2",marginTop:"unset",fontSize:14}))),StyledContentContainer=emotion_styled_browser_esm.Z.div((()=>({gridArea:"3/1"}))),StyledMoreDetailsButton=(0,emotion_styled_browser_esm.Z)(Button.Z)((()=>({gridArea:"1/2"})));var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgMoreDetails(props){return react.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{d:"M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z",fill:"currentColor"})))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({title,onClick,description,className,children,content=children,topRightComponent,disabled})=>(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.a,{theme:theme.Z,children:(0,jsx_runtime.jsxs)(CardContentContainer,{className,children:[(0,jsx_runtime.jsx)(StyledH1Title,{children:title}),(0,jsx_runtime.jsx)(StyledDescription,{children:description}),(0,jsx_runtime.jsx)(StyledContentContainer,{children:content||children}),topRightComponent||(0,jsx_runtime.jsx)(StyledMoreDetailsButton,{disabled,onClick:disabled?void 0:onClick,type:"button",icon:(0,jsx_runtime.jsx)(SvgMoreDetails,{})})]})});Card.displayName="Card";const Card_Card=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"The Card Component is used to render a single Card, or a collection of Cards.",displayName:"Card",props:{title:{defaultValue:null,description:"This will set the cards h1 heading.",name:"title",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"This is the callback that is fired when the top-right arrow button is clicked.",name:"onClick",required:!1,type:{name:"(() => void)"}},description:{defaultValue:null,description:"Description of the card's intent.",name:"description",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Display content as a child node.",name:"children",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"This takes in any ReactNode to be displayed in the main content area of the card.",name:"content",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If the button should or shouldn't be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"This is to set the class of the Card component.",name:"className",required:!1,type:{name:"string"}},topRightComponent:{defaultValue:null,description:"This takes in any ReactNode to be displayed in the top right content area of the card.",name:"topRightComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Snackbar=__webpack_require__("./src/components/Snackbar/index.ts"),Snackbar_util=__webpack_require__("./src/components/Snackbar/Snackbar.util.tsx");const StyledCard=(0,emotion_styled_browser_esm.Z)(Card_Card)((()=>({margin:10}))),Card_stories={title:"Lakefront/Card",component:Card_Card},Template=()=>{const[showMsg,setShowMsg]=(0,react.useState)(!1),showMessage=_value=>{setShowMsg((value=>!value))};return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Snackbar.ZP,{message:"Clicked",open:showMsg,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:()=>{showMessage()},type:Snackbar_util.oK.SUCCESS}),(0,jsx_runtime.jsx)(Card_Card,{title:"Card Title",description:"A description of the card being used.",disabled:!1,onClick:()=>showMessage(),children:(0,jsx_runtime.jsx)("span",{children:"Card content"})})]})};Template.displayName="Template";const MultiTemplateCard=()=>{const[showMsg,setShowMsg]=(0,react.useState)(!1),showMessage=_value=>{setShowMsg((value=>!value))};return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Snackbar.ZP,{message:"Clicked",open:showMsg,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:()=>{showMessage()},type:Snackbar_util.oK.SUCCESS}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 1",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{children:"Card content"}),disabled:!1,onClick:()=>showMessage()}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 2",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{children:"Card content"}),disabled:!1,onClick:()=>showMessage()}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 3",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{children:"Card content"}),disabled:!1,onClick:()=>showMessage()}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 4",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{children:"Card content"}),disabled:!1,onClick:()=>showMessage()}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 5",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{children:"Card content"}),disabled:!1,onClick:()=>showMessage()}),(0,jsx_runtime.jsx)(StyledCard,{title:"Card 6",description:"A description of the card being used.",content:(0,jsx_runtime.jsx)("span",{style:{height:250,width:500},children:"Card content"}),disabled:!1,onClick:()=>showMessage()})]})};MultiTemplateCard.displayName="MultiTemplateCard";const Card_stories_Card=Template.bind({}),MultiCard=MultiTemplateCard.bind({});Card_stories_Card.parameters={...Card_stories_Card.parameters,docs:{...Card_stories_Card.parameters?.docs,source:{originalSource:"() => {\n  const [showMsg, setShowMsg] = useState<boolean>(false);\n  const showMessage = (_value: boolean) => {\n    setShowMsg(value => !value);\n  };\n  const handleClose = () => {\n    showMessage(false);\n  };\n  return <div>\n            <Snackbar message='Clicked' open={showMsg} anchorOrigin={{\n      vertical: 'top',\n      horizontal: 'center'\n    }} onClose={handleClose} type={MESSAGE_TYPES.SUCCESS} />\n            <CardComponent title='Card Title' description='A description of the card being used.' disabled={false} onClick={() => showMessage(true)}>\n                <span>Card content</span>\n                </CardComponent>\n        </div>;\n}",...Card_stories_Card.parameters?.docs?.source}}},MultiCard.parameters={...MultiCard.parameters,docs:{...MultiCard.parameters?.docs,source:{originalSource:"() => {\n  const [showMsg, setShowMsg] = useState<boolean>(false);\n  const showMessage = (_value: boolean) => {\n    setShowMsg(value => !value);\n  };\n  const handleClose = () => {\n    showMessage(false);\n  };\n  return <div>\n            <Snackbar message='Clicked' open={showMsg} anchorOrigin={{\n      vertical: 'top',\n      horizontal: 'center'\n    }} onClose={handleClose} type={MESSAGE_TYPES.SUCCESS} />\n            <StyledCard title='Card 1' description='A description of the card being used.' content={<span>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n            <StyledCard title='Card 2' description='A description of the card being used.' content={<span>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n            <StyledCard title='Card 3' description='A description of the card being used.' content={<span>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n            <StyledCard title='Card 4' description='A description of the card being used.' content={<span>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n            <StyledCard title='Card 5' description='A description of the card being used.' content={<span>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n            <StyledCard title='Card 6' description='A description of the card being used.' content={<span style={{\n      height: 250,\n      width: 500\n    }}>Card content</span>} disabled={false} onClick={() => showMessage(true)} />\n        </div>;\n}",...MultiCard.parameters?.docs?.source}}};const __namedExportsOrder=["Card","MultiCard"]}}]);