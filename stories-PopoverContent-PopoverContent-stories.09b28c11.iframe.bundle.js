/*! For license information please see stories-PopoverContent-PopoverContent-stories.09b28c11.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[4112],{"./.storybook/DocBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocBlock=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.fQ,{includePrimary:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,{})]}),__WEBPACK_DEFAULT_EXPORT__=DocBlock;try{DocBlock.displayName="DocBlock",DocBlock.__docgenInfo={description:"",displayName:"DocBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/DocBlock.tsx#DocBlock"]={docgenInfo:DocBlock.__docgenInfo,name:"DocBlock",path:".storybook/DocBlock.tsx#DocBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/PopoverContent/PopoverContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PopoverContent:()=>PopoverContent,PopoverContentInPortal:()=>PopoverContentInPortal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_DocBlock__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/DocBlock.tsx"),src_lib_hooks_usePopover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/hooks/usePopover/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Lakefront/PopoverContent",component:src_lib_hooks_usePopover__WEBPACK_IMPORTED_MODULE_1__.yk,argTypes:{children:{table:{disable:!0}},content:{type:"string"},renderInPortal:{type:"boolean"}},parameters:{docs:{page:_storybook_DocBlock__WEBPACK_IMPORTED_MODULE_0__.Z}}},Template=({content,renderInPortal})=>{const[popoverContainer,setPopoverContainer]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),portalStyles=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>{if(popoverContainer){const{left,bottom}=popoverContainer.getBoundingClientRect();return{className:"select-popover-portal",styles:{position:"absolute",left:`${left}px`,top:`${bottom-26+window.scrollY}px`}}}return{className:"select-popover-portal"}}),[popoverContainer,window.scrollY]),{portal}=(0,src_lib_hooks_usePopover__WEBPACK_IMPORTED_MODULE_1__.ZP)({popoverContainer,portalId:"portal-div",portalStyles,renderInPortal});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref:node=>{setPopoverContainer(node)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(src_lib_hooks_usePopover__WEBPACK_IMPORTED_MODULE_1__.yk,{portal,deps:[],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:content})})})};Template.displayName="Template";const PopoverContent=Template.bind({});PopoverContent.args={content:"content in popover",renderInPortal:!1};const PopoverContentInPortal=Template.bind({});PopoverContentInPortal.args={content:"content in portal",renderInPortal:!0},PopoverContent.parameters={...PopoverContent.parameters,docs:{...PopoverContent.parameters?.docs,source:{originalSource:"({\n  content,\n  renderInPortal\n}) => {\n  const [popoverContainer, setPopoverContainer] = useState<HTMLElement | null>(null);\n  const portalStyles: PortalStyles = useMemo(() => {\n    const className = 'select-popover-portal';\n    if (popoverContainer) {\n      const {\n        left,\n        bottom\n      } = popoverContainer.getBoundingClientRect();\n      return {\n        className,\n        styles: {\n          position: 'absolute',\n          left: `${left}px`,\n          top: `${bottom - 26 + window.scrollY}px`\n        }\n      };\n    }\n    return {\n      className\n    };\n  }, [popoverContainer, window.scrollY]);\n  const {\n    portal\n  } = usePopover({\n    popoverContainer,\n    portalId: 'portal-div',\n    portalStyles,\n    renderInPortal\n  });\n  const popoverContainerMounted = (node: HTMLDivElement) => {\n    setPopoverContainer(node);\n  };\n  return <div ref={popoverContainerMounted}>\n            <PopoverContentComponent portal={portal} deps={[]}>\n                <div>{content}</div>\n            </PopoverContentComponent>\n        </div>;\n}",...PopoverContent.parameters?.docs?.source}}},PopoverContentInPortal.parameters={...PopoverContentInPortal.parameters,docs:{...PopoverContentInPortal.parameters?.docs,source:{originalSource:"({\n  content,\n  renderInPortal\n}) => {\n  const [popoverContainer, setPopoverContainer] = useState<HTMLElement | null>(null);\n  const portalStyles: PortalStyles = useMemo(() => {\n    const className = 'select-popover-portal';\n    if (popoverContainer) {\n      const {\n        left,\n        bottom\n      } = popoverContainer.getBoundingClientRect();\n      return {\n        className,\n        styles: {\n          position: 'absolute',\n          left: `${left}px`,\n          top: `${bottom - 26 + window.scrollY}px`\n        }\n      };\n    }\n    return {\n      className\n    };\n  }, [popoverContainer, window.scrollY]);\n  const {\n    portal\n  } = usePopover({\n    popoverContainer,\n    portalId: 'portal-div',\n    portalStyles,\n    renderInPortal\n  });\n  const popoverContainerMounted = (node: HTMLDivElement) => {\n    setPopoverContainer(node);\n  };\n  return <div ref={popoverContainerMounted}>\n            <PopoverContentComponent portal={portal} deps={[]}>\n                <div>{content}</div>\n            </PopoverContentComponent>\n        </div>;\n}",...PopoverContentInPortal.parameters?.docs?.source}}};const __namedExportsOrder=["PopoverContent","PopoverContentInPortal"]},"./src/lib/hooks/usePopover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{yk:()=>PopoverContent_PopoverContent,ZP:()=>hooks_usePopover});var react=__webpack_require__("./node_modules/react/index.js");const usePopover_usePopover=({popoverContainer,portalId,portalStyles={},renderInPortal})=>{const[portal,setPortal]=(0,react.useState)(null),[update,setUpdate]=(0,react.useState)(0);return(0,react.useEffect)((()=>{const bodyElementHTMLCollection=document.getElementsByTagName("body"),bodyElement=bodyElementHTMLCollection.length>0?bodyElementHTMLCollection.item(0):null;let observer,portalElement;return renderInPortal&&bodyElement&&(portalElement=document.createElement("div"),portalElement.id=portalId||"lakefront-portal-container",portal||bodyElement.appendChild(portalElement),!portal&&popoverContainer&&(observer=new IntersectionObserver((()=>{setUpdate((new Date).getTime())})),observer.observe(popoverContainer),setPortal(portalElement))),()=>{popoverContainer&&observer&&observer.unobserve(popoverContainer),portalElement&&bodyElement&&bodyElement.contains(portalElement)&&bodyElement.removeChild(portalElement)}}),[popoverContainer,renderInPortal]),(0,react.useEffect)((()=>{if(popoverContainer&&portal){const{className="",styles={}}=portalStyles;portal.className=className;for(const[key,value]of Object.entries(styles))portal.style[key]=value}}),[update]),{portal,update}};var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverContent=({portal,children,deps})=>{const memoizedChildren=(0,react.useMemo)((()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})),[...deps]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:portal?(0,react_dom.createPortal)(memoizedChildren,portal):memoizedChildren})},PopoverContent_PopoverContent=PopoverContent;try{PopoverContent.displayName="PopoverContent",PopoverContent.__docgenInfo={description:"Popover Content Component\n\nThe PopoverContent component is a support component to the `usePopover` hook.\nIt is meant to handle the memoization of content to be rendered and logically\nswitch between rendering content within or outside a portal as needed. Under the hood,\nall Lakefront popover components (Modal, Snackbar, et. al) utilize this component. View\nthe [PopoverContent stories source code](https://github.com/ToyotaResearchInstitute/lakefront/blob/main/src/stories/PopoverContent/PopoverContent.stories.tsx)\nfor a more detailed look on how to implement.",displayName:"PopoverContent",props:{portal:{defaultValue:null,description:"This is the (portal/outside) container to render content in. If null,\ncontent will be rendered in the closest parent node.",name:"portal",required:!0,type:{name:"HTMLElement | null"}},children:{defaultValue:null,description:"When provided, these children will be memoized and render as the content.",name:"children",required:!1,type:{name:"ReactNode"}},deps:{defaultValue:null,description:"This is an array of dependency values to check when determining\nif the memoized content should be recalculated. If none of the values\nin the dependency list have changed, the content will appear as it did\nin the last render.",name:"deps",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/hooks/usePopover/PopoverContent/PopoverContent.tsx#PopoverContent"]={docgenInfo:PopoverContent.__docgenInfo,name:"PopoverContent",path:"src/lib/hooks/usePopover/PopoverContent/PopoverContent.tsx#PopoverContent"})}catch(__react_docgen_typescript_loader_error){}const hooks_usePopover=usePopover_usePopover},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);