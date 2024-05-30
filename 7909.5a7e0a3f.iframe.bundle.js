/*! For license information please see 7909.5a7e0a3f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[7909],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes,iv:()=>css,tZ:()=>jsx});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js")),_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js")),jsx=(__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)});function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./.storybook/DocBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocBlock=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.fQ,{includePrimary:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,{})]}),__WEBPACK_DEFAULT_EXPORT__=DocBlock;try{DocBlock.displayName="DocBlock",DocBlock.__docgenInfo={description:"",displayName:"DocBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/DocBlock.tsx#DocBlock"]={docgenInfo:DocBlock.__docgenInfo,name:"DocBlock",path:".storybook/DocBlock.tsx#DocBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),closeIcon=__webpack_require__("./src/components/Modal/assets/closeIcon.svg"),Button=__webpack_require__("./src/components/Button/Button.tsx"),theme=__webpack_require__("./src/styles/theme.ts"),emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const DIALOG_WIDTHS={xs:"20%",sm:"30%",md:"40%",lg:"60%",xl:"80%"},DialogContainer=emotion_styled_browser_esm.Z.div((({isOpen,theme})=>({display:isOpen?"flex":"none",backgroundColor:"rgba(0, 0, 0, 0.5)",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",position:"fixed",top:0,left:0,zIndex:theme?.zIndex?.modal}))),Dialog=emotion_styled_browser_esm.Z.div((({dialogWidth,theme})=>({maxWidth:dialogWidth?DIALOG_WIDTHS[dialogWidth]:void 0,maxHeight:"90%",padding:"2em",backgroundColor:theme?.colors?.white,position:"relative",boxShadow:"0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",borderRadius:4}))),DialogTitleContainer=emotion_styled_browser_esm.Z.div((({theme})=>({fontSize:"1.25rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0076em","button.closeIcon":{position:"absolute",top:"1em",right:"1em",svg:{fill:theme?.colors?.pavement}}}))),DialogSubHeader=emotion_styled_browser_esm.Z.div((({theme})=>({color:theme?.colors?.dolphin,fontSize:16,margin:0,padding:0}))),DialogDivider=emotion_styled_browser_esm.Z.div((({theme})=>({borderBottom:`1px solid ${theme?.colors?.mercury}`,margin:"1em 0"}))),DialogContent=emotion_styled_browser_esm.Z.div((({showTopDivider})=>({marginTop:showTopDivider?0:"1em",maxHeight:400,overflowY:"auto"}))),DialogButtonContainer=emotion_styled_browser_esm.Z.div({display:"flex",justifyContent:"flex-end","button:first-of-type":{marginRight:2},"button:last-of-type":{marginLeft:2}});var usePopover=__webpack_require__("./src/lib/hooks/usePopover/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal=({handleClose,handleBackdropClick=handleClose,isOpen,headerText="",isCloseIconVisible=!0,actionButton,cancelButtonText="Cancel",subHeaderText="",children,showTopDivider=!1,showBottomDivider=!1,dialogWidth="sm",portalId,renderInPortal=!1,className})=>{const[dialogElement,setDialogElement]=(0,react.useState)(null),[bodyOverflow,setBodyOverflow]=(0,react.useState)(""),bodyOverflowRef=(0,react.useRef)(!1),portalStyles=(0,react.useMemo)((()=>dialogElement?{className:dialogElement.className,styles:{display:isOpen?"flex":"none",backgroundColor:"rgb(0,0,0), rgba(0,0,0,0.4)",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",position:"fixed",top:"0",left:"0",zIndex:`${theme.Z?.zIndex?.modal}`}}:{}),[dialogElement,isOpen]),{portal}=(0,usePopover.ZP)({popoverContainer:dialogElement,portalStyles,portalId,renderInPortal});(0,react.useEffect)((()=>{portal&&(portal.onclick=e=>{e.target===portal&&handleClose&&handleClose()})}),[portal]),(0,react.useEffect)((()=>{if(document)return bodyOverflowRef.current||(setBodyOverflow(document.body.style.overflow),bodyOverflowRef.current=!0),document.body.style.overflow=isOpen?"hidden":bodyOverflow,()=>{document.body.style.overflow=bodyOverflow}}),[isOpen]);return(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.a,{theme:theme.Z,children:(0,jsx_runtime.jsx)(DialogContainer,{ref:node=>{setDialogElement(node)},isOpen,className,onClick:handleBackdropClick,children:(0,jsx_runtime.jsx)(usePopover.yk,{portal,deps:[children,headerText,subHeaderText,isCloseIconVisible,showTopDivider,showBottomDivider,actionButton,cancelButtonText],children:isOpen&&(0,jsx_runtime.jsxs)(Dialog,{dialogWidth,onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsxs)(DialogTitleContainer,{children:[headerText,subHeaderText&&(0,jsx_runtime.jsx)(DialogSubHeader,{children:subHeaderText}),isCloseIconVisible?(0,jsx_runtime.jsx)(Button.Z,{className:"closeIcon","aria-label":"Close",onClick:handleClose,icon:(0,jsx_runtime.jsx)(closeIcon.r,{})}):(0,jsx_runtime.jsx)("span",{}),showTopDivider&&(0,jsx_runtime.jsx)(DialogDivider,{className:"dialogDivider"})]}),(0,jsx_runtime.jsx)(DialogContent,{children}),showBottomDivider&&(0,jsx_runtime.jsx)(DialogDivider,{className:"dialogDivider"}),actionButton&&(0,jsx_runtime.jsxs)(DialogButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.Z,{color:"secondary",onClick:handleClose,children:cancelButtonText}),actionButton]})]})})})})};Modal.displayName="Modal";const Modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"Modal Component\n\nThe Modal component is a UI blocking dialog overlay.\nThe state is not managed inside this component and visibility (via the `isOpen` prop) needs to be maintained in the\nparent component. While the default rendering behavior is often sufficient, the `renderInPortal` prop can be used to\nappend a div to the body.",displayName:"Modal",props:{handleClose:{defaultValue:null,description:"The action to run when close of the modal is triggered\n(either by the close button, cancel button, or clicking\nan area outside the modal dialog).",name:"handleClose",required:!1,type:{name:"(() => void)"}},handleBackdropClick:{defaultValue:null,description:"The action to run when backdrop click is triggered\nby clicking on an area outside the modal dialog.",name:"handleBackdropClick",required:!1,type:{name:"(() => void)"}},isOpen:{defaultValue:null,description:"The boolean value to determine if the modal is visible or not.",name:"isOpen",required:!0,type:{name:"boolean"}},headerText:{defaultValue:{value:""},description:"The header text to display on the modal.\nThis defaults to an empty string.",name:"headerText",required:!1,type:{name:"string"}},subHeaderText:{defaultValue:{value:""},description:"The text to display beneath the header text on the modal.\nThis defaults to an empty string.",name:"subHeaderText",required:!1,type:{name:"string"}},isCloseIconVisible:{defaultValue:{value:"true"},description:"The boolean value to determine whether the close icon\nis visible or not. This defaults to `true`.",name:"isCloseIconVisible",required:!1,type:{name:"boolean"}},actionButton:{defaultValue:null,description:"The primary submit/action button on the modal.",name:"actionButton",required:!1,type:{name:"ReactNode"}},cancelButtonText:{defaultValue:{value:"Cancel"},description:"The cancel button text. This defaults to `Cancel`.",name:"cancelButtonText",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Any valid React child.",name:"children",required:!1,type:{name:"ReactNode"}},showTopDivider:{defaultValue:{value:"false"},description:"The boolean value to determine whether a top divider shows\nbetween the header and the dialog main body.",name:"showTopDivider",required:!1,type:{name:"boolean"}},showBottomDivider:{defaultValue:{value:"false"},description:"The boolean value to determine whether a bottom divider shows\nbetween the dialog main body and the action and cancel buttons.",name:"showBottomDivider",required:!1,type:{name:"boolean"}},dialogWidth:{defaultValue:{value:"sm"},description:"The max-width of the dialog area. This width grows with the size\nof the screen. Setting to `false` will disable `maxWidth`.",name:"dialogWidth",required:!1,type:{name:'false | "xs" | "sm" | "md" | "lg" | "xl"'}},portalId:{defaultValue:null,description:"This is the id to assign to the appended div when rendering in a portal.\nThis defaults to `lakefront-portal-container`.",name:"portalId",required:!1,type:{name:"string"}},renderInPortal:{defaultValue:{value:"false"},description:'When true, the component will mount a div to the body and render the dialog through it.\nThis is useful when the dialog would be inside a scrollable container or one with "overflow: hidden"\nso it doesn\'t get cut off. Uses IntersectionObserver and needs a polyfill if IE compatibility is needed. This\ndefaults to `false`.',name:"renderInPortal",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The classes to pass to the modal.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/hooks/usePopover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yk:()=>PopoverContent_PopoverContent,ZP:()=>hooks_usePopover});var react=__webpack_require__("./node_modules/react/index.js");const usePopover_usePopover=({popoverContainer,portalId,portalStyles={},renderInPortal})=>{const[portal,setPortal]=(0,react.useState)(null),[update,setUpdate]=(0,react.useState)(0);return(0,react.useEffect)((()=>{const bodyElementHTMLCollection=document.getElementsByTagName("body"),bodyElement=bodyElementHTMLCollection.length>0?bodyElementHTMLCollection.item(0):null;let observer,portalElement;return renderInPortal&&bodyElement&&(portalElement=document.createElement("div"),portalElement.id=portalId||"lakefront-portal-container",portal||bodyElement.appendChild(portalElement),!portal&&popoverContainer&&(observer=new IntersectionObserver((()=>{setUpdate((new Date).getTime())})),observer.observe(popoverContainer),setPortal(portalElement))),()=>{popoverContainer&&observer&&observer.unobserve(popoverContainer),portalElement&&bodyElement&&bodyElement.contains(portalElement)&&bodyElement.removeChild(portalElement)}}),[popoverContainer,renderInPortal]),(0,react.useEffect)((()=>{if(popoverContainer&&portal){const{className="",styles={}}=portalStyles;portal.className=className;for(const[key,value]of Object.entries(styles))portal.style[key]=value}}),[update]),{portal,update}};var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverContent=({portal,children,deps})=>{const memoizedChildren=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})),[...deps]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:portal?(0,react_dom.createPortal)(memoizedChildren,portal):memoizedChildren})},PopoverContent_PopoverContent=PopoverContent;try{PopoverContent.displayName="PopoverContent",PopoverContent.__docgenInfo={description:"Popover Content Component\n\nThe PopoverContent component is a support component to the `usePopover` hook.\nIt is meant to handle the memoization of content to be rendered and logically\nswitch between rendering content within or outside a portal as needed. Under the hood,\nall Lakefront popover components (Modal, Snackbar, et. al) utilize this component. View\nthe [PopoverContent stories source code](https://github.com/ToyotaResearchInstitute/lakefront/blob/main/src/stories/PopoverContent/PopoverContent.stories.tsx)\nfor a more detailed look on how to implement.",displayName:"PopoverContent",props:{portal:{defaultValue:null,description:"This is the (portal/outside) container to render content in. If null,\ncontent will be rendered in the closest parent node.",name:"portal",required:!0,type:{name:"HTMLElement | null"}},children:{defaultValue:null,description:"When provided, these children will be memoized and render as the content.",name:"children",required:!1,type:{name:"ReactNode"}},deps:{defaultValue:null,description:"This is an array of dependency values to check when determining\nif the memoized content should be recalculated. If none of the values\nin the dependency list have changed, the content will appear as it did\nin the last render.",name:"deps",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/hooks/usePopover/PopoverContent/PopoverContent.tsx#PopoverContent"]={docgenInfo:PopoverContent.__docgenInfo,name:"PopoverContent",path:"src/lib/hooks/usePopover/PopoverContent/PopoverContent.tsx#PopoverContent"})}catch(__react_docgen_typescript_loader_error){}const hooks_usePopover=usePopover_usePopover},"./src/components/Modal/assets/closeIcon.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgCloseIcon});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgCloseIcon(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})))}},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);