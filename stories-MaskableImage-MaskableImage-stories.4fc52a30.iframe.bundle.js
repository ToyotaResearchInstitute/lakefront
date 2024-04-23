"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[3288],{"./src/stories/MaskableImage/MaskableImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MaskableImage:()=>MaskableImage_stories_MaskableImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MaskableImage_stories});var _path,_path2,react=__webpack_require__("./node_modules/react/index.js"),BoundingBoxes=__webpack_require__("./src/components/BoundingBoxes/index.ts"),Loading=__webpack_require__("./src/components/Loading/Loading.tsx"),resizeObserver=__webpack_require__("./src/lib/hooks/resizeObserver.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const MaskableImageContainer=emotion_styled_browser_esm.Z.div((({heightToWidthRatio,theme})=>({display:"flex",justifyContent:"center",backgroundColor:theme?.colors?.dolphin,position:"relative",height:0,overflow:"hidden",width:"100%",paddingBottom:heightToWidthRatio}))),MaskedImage=emotion_styled_browser_esm.Z.img((({imageLoaded,allLoading,showSpinnerOnLoad})=>({position:"absolute",top:0,left:0,height:"100.5%",width:"100%",...(!imageLoaded||allLoading)&&showSpinnerOnLoad&&{visibility:"hidden"},objectFit:"contain"}))),DisplayImage=emotion_styled_browser_esm.Z.img((({imageLoaded,allLoading,showSpinnerOnLoad})=>({position:"absolute",top:0,left:0,height:"100.5%",width:"100%",...imageLoaded||!allLoading&&{visibility:"hidden"},...imageLoaded&&showSpinnerOnLoad&&{display:"none"}}))),LoadingSpinner=emotion_styled_browser_esm.Z.div((()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}))),HighlightedImageStyle=emotion_styled_browser_esm.Z.div((({highlighted})=>({...highlighted&&{backgroundColor:"rgba(55, 143, 238,0.5)",position:"absolute",top:0,left:0,height:"100%",width:"100%"},...!highlighted&&{display:"none"}}))),CheckOutlinedIconStyle=(0,emotion_styled_browser_esm.Z)((function SvgCheckedOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},props),_path||(_path=react.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})))}))((({selectable,selected,hovered,individuallySelected,theme})=>({...selectable&&{position:"absolute",bottom:"15px",right:"15px",fill:theme?.colors?.akoya,borderRadius:"50%"},...(!selectable||!selected&&!hovered&&!individuallySelected)&&{display:"none"},...selectable&&(selected||individuallySelected)&&{background:theme?.colors?.pastelGreen,border:"1px solid",borderColor:theme?.colors?.akoya}})));var emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MaskableImage=({className,url,fullSizeDimensions,alt="",selectable=!1,selected=!1,onSelect,highlighted=!1,boundingBoxTags,showSpinner=!1,showSpinnerOnLoad=!1,heightToWidthRatio=.625,innerWidth})=>{const[imageLoaded,setImageLoaded]=(0,react.useState)(!1),[boundingBoxDimensions,setBoundingBoxDimensions]=(0,react.useState)({}),[hovered,setHovered]=(0,react.useState)(!1),[individuallySelected,setIndividuallySelected]=(0,react.useState)(!1),[allLoading,setAllLoading]=(0,react.useState)(!1),[observedElement,setObservedElement]=(0,react.useState)(null),imageRef=(0,react.useRef)(null),containerRef=(0,react.useCallback)((node=>{if(node&&boundingBoxTags){const{height,width}=node.getBoundingClientRect();setBoundingBoxDimensions({height,width})}setAllLoading(showSpinner||showSpinnerOnLoad&&!imageLoaded)}),[imageLoaded,innerWidth,fullSizeDimensions,observedElement]);(0,react.useEffect)((()=>{const graphResizeObserver=(0,resizeObserver.Z)((entries=>{setObservedElement(entries)}));return graphResizeObserver.observe(imageRef.current),()=>{graphResizeObserver.disconnect()}}),[]),(0,react.useEffect)((()=>{setImageLoaded(!1),setAllLoading(showSpinner||showSpinnerOnLoad&&!imageLoaded)}),[url]),(0,react.useEffect)((()=>{setIndividuallySelected(!1)}),[selected]);return(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.a,{theme:theme.Z,children:(0,jsx_runtime.jsxs)(MaskableImageContainer,{onMouseEnter:()=>{selectable&&setHovered(!0)},onMouseLeave:()=>{selectable&&setHovered(!1)},ref:containerRef,className,heightToWidthRatio:100*heightToWidthRatio+"%",children:[boundingBoxTags&&imageLoaded&&!allLoading&&(0,jsx_runtime.jsx)(BoundingBoxes.ZP,{activeBBox:"",boundingBoxItems:boundingBoxTags,imageWidth:fullSizeDimensions.width,imageHeight:fullSizeDimensions.height,outputWidth:boundingBoxDimensions.width,outputHeight:boundingBoxDimensions.height}),allLoading&&(0,jsx_runtime.jsx)(LoadingSpinner,{children:(0,jsx_runtime.jsx)(Loading.Z,{animated:!0,height:24,label:"Loading",labelPosition:"RIGHT",width:24})}),(0,jsx_runtime.jsx)(DisplayImage,{imageLoaded,allLoading,showSpinnerOnLoad,src:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",alt:"Loading"}),(0,jsx_runtime.jsx)(MaskedImage,{imageLoaded,allLoading,showSpinnerOnLoad,onLoad:()=>{setImageLoaded(!0)},src:url,alt,ref:imageRef}),(0,jsx_runtime.jsx)(HighlightedImageStyle,{highlighted}),(0,jsx_runtime.jsx)(CheckOutlinedIconStyle,{onClick:event=>{event.stopPropagation();const selectedState=!individuallySelected;setIndividuallySelected(selectedState),onSelect&&onSelect(selectedState)},selectable,selected,hovered,individuallySelected})]})})};MaskableImage.displayName="MaskableImage";const MaskableImage_MaskableImage=MaskableImage;try{MaskableImage.displayName="MaskableImage",MaskableImage.__docgenInfo={description:"Maskable Image Component\n \nThis Component is used to render an image. The image can be selected and highlighted. The showSpinnerOnLoad when set\nto true will show the loading spinner until the image is loaded.",displayName:"MaskableImage",props:{url:{defaultValue:null,description:"The url to set the image source.",name:"url",required:!0,type:{name:"string"}},fullSizeDimensions:{defaultValue:null,description:"This is to set the full size dimension of the image.",name:"fullSizeDimensions",required:!0,type:{name:"{ height: number; width: number; }"}},alt:{defaultValue:{value:""},description:"This is to set the alternate text of the image.",name:"alt",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"This will enable or disable the selection of the image when check icon is clicked.",name:"selectable",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"This will set the selection of the image by default.",name:"selected",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"This is an event that would be called when the image is selected.",name:"onSelect",required:!1,type:{name:"((selected: boolean) => void)"}},highlighted:{defaultValue:{value:"false"},description:"This is to set the default property that would highlight the image.",name:"highlighted",required:!1,type:{name:"boolean"}},boundingBoxTags:{defaultValue:null,description:"This is to set the bounding box tags.",name:"boundingBoxTags",required:!1,type:{name:"ImageTagProps[]"}},showSpinner:{defaultValue:{value:"false"},description:"This will set the show spinner property bey default.",name:"showSpinner",required:!1,type:{name:"boolean"}},showSpinnerOnLoad:{defaultValue:{value:"false"},description:"If set to true,This will show spinner when the image is still loading.",name:"showSpinnerOnLoad",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"This will add the class to the image component.",name:"className",required:!1,type:{name:"string"}},heightToWidthRatio:{defaultValue:{value:"10 / 16"},description:"This will specify the heightToWidthRatio of the image.",name:"heightToWidthRatio",required:!1,type:{name:"number"}},innerWidth:{defaultValue:null,description:"This is to set the inner width of the image.",name:"innerWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MaskableImage/MaskableImage.tsx#MaskableImage"]={docgenInfo:MaskableImage.__docgenInfo,name:"MaskableImage",path:"src/components/MaskableImage/MaskableImage.tsx#MaskableImage"})}catch(__react_docgen_typescript_loader_error){}const components_MaskableImage=MaskableImage_MaskableImage;var DocBlock=__webpack_require__("./.storybook/DocBlock.tsx"),lakefrontColors=__webpack_require__("./src/styles/lakefrontColors.ts");const Nature_namespaceObject=__webpack_require__.p+"static/media/Nature.0ec1415e.jpg",MaskableImage_stories={title:"Lakefront/MaskableImage",component:components_MaskableImage,parameters:{docs:{page:DocBlock.Z}}},MaskableImage_stories_MaskableImage=(args=>{const[showMessage,setShowMessage]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{minHeight:20,backgroundColor:showMessage&&lakefrontColors.Bz,padding:8,margin:"8px 0",textAlign:"center"},children:showMessage&&"This image is selected."}),(0,jsx_runtime.jsx)(components_MaskableImage,{url:args.url,fullSizeDimensions:args.fullSizeDimensions,selectable:args.selectable,selected:args.selected,highlighted:args.highlighted,showSpinner:args.showSpinner,showSpinnerOnLoad:args.howSpinnerOnLoad,heightToWidthRatio:args.heightToWidthRatio,onSelect:()=>{setShowMessage((showMessage=>!showMessage))}})]})}).bind({});MaskableImage_stories_MaskableImage.args={url:Nature_namespaceObject,fullSizeDimensions:{height:"1px",width:"2px"},selectable:!0,selected:!1,highlighted:!1,showSpinner:!1,showSpinnerOnLoad:!0,heightToWidthRatio:10/18},MaskableImage_stories_MaskableImage.parameters={...MaskableImage_stories_MaskableImage.parameters,docs:{...MaskableImage_stories_MaskableImage.parameters?.docs,source:{originalSource:"args => {\n  const [showMessage, setShowMessage] = useState<boolean>(false);\n  const onHandleImageClick = () => {\n    setShowMessage(showMessage => !showMessage);\n  };\n  return <>\n            <div style={{\n      minHeight: 20,\n      backgroundColor: showMessage && emerald,\n      padding: 8,\n      margin: '8px 0',\n      textAlign: 'center'\n    }}>\n                {showMessage && 'This image is selected.'}\n            </div>\n            <MaskableImageComponent url={args.url} fullSizeDimensions={args.fullSizeDimensions} selectable={args.selectable} selected={args.selected} highlighted={args.highlighted} showSpinner={args.showSpinner} showSpinnerOnLoad={args.howSpinnerOnLoad} heightToWidthRatio={args.heightToWidthRatio} onSelect={onHandleImageClick} />\n        </>;\n}",...MaskableImage_stories_MaskableImage.parameters?.docs?.source}}};const __namedExportsOrder=["MaskableImage"]},"./src/components/BoundingBoxes/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>components_BoundingBoxes});var react=__webpack_require__("./node_modules/react/index.js");const BoundingBoxesContainer=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js").Z.canvas({position:"absolute",top:0,left:0,zIndex:1}),drawSingleBox=(ctx,bboxItem)=>{const{color,items,name}=bboxItem;ctx.strokeStyle=color,ctx.lineWidth=3,items.forEach((item=>{const bbox=item.bbox,leftX=bbox[0][0],topY=bbox[0][1],width=bbox[1][0]-bbox[0][0],height=bbox[1][1]-bbox[0][1];ctx.strokeRect(leftX,topY,width,height),ctx.font="bold 36px sans-serif",ctx.fillStyle=color,ctx.fillText(name,leftX,topY-10)}))},getImageOffsetRatio=(imageWidth,imageHeight,outputWidth,outputHeight)=>{if(0!==imageWidth&&0!==outputWidth){const imageRatio=imageWidth/imageHeight,outputRatio=outputWidth/outputHeight;if(imageRatio<outputRatio){const desiredWidth=imageRatio*outputHeight;return{left:Math.abs(outputWidth-desiredWidth)/2,top:0,ratio:1/(imageHeight/outputHeight)}}if(imageRatio>outputRatio){const desiredHeight=outputWidth/imageRatio;return{left:0,top:Math.abs(outputHeight-desiredHeight)/2,ratio:1/(imageWidth/outputWidth)}}}return{left:0,top:0,ratio:1}};try{drawSingleBox.displayName="drawSingleBox",drawSingleBox.__docgenInfo={description:"Draws a single bounding box given a 2D canvas rendering context and the bounding box item.",displayName:"drawSingleBox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundingBoxes/boundingBoxesUtil.tsx#drawSingleBox"]={docgenInfo:drawSingleBox.__docgenInfo,name:"drawSingleBox",path:"src/components/BoundingBoxes/boundingBoxesUtil.tsx#drawSingleBox"})}catch(__react_docgen_typescript_loader_error){}try{getImageOffsetRatio.displayName="getImageOffsetRatio",getImageOffsetRatio.__docgenInfo={description:"Get ratio and image offset for scaling the image in a container.",displayName:"getImageOffsetRatio",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundingBoxes/boundingBoxesUtil.tsx#getImageOffsetRatio"]={docgenInfo:getImageOffsetRatio.__docgenInfo,name:"getImageOffsetRatio",path:"src/components/BoundingBoxes/boundingBoxesUtil.tsx#getImageOffsetRatio"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoundingBoxes=({activeBBox,boundingBoxItems,className,imageWidth,imageHeight,outputWidth,outputHeight})=>{const canvasRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{(()=>{const currentCanvas=canvasRef.current;if(!currentCanvas)return;const ctx=currentCanvas.getContext("2d");if(ctx&&(ctx.clearRect(0,0,currentCanvas.width,currentCanvas.height),boundingBoxItems.length>0))if(""===activeBBox)boundingBoxItems.forEach((bboxItem=>{drawSingleBox(ctx,bboxItem)}));else{const activeItem=boundingBoxItems.find((item=>item.name===activeBBox));activeItem&&drawSingleBox(ctx,activeItem)}})()}),[activeBBox,boundingBoxItems]);const offsetRatio=(0,react.useMemo)((()=>getImageOffsetRatio(imageWidth,imageHeight,outputWidth,outputHeight)),[imageWidth,imageHeight,outputWidth,outputHeight]);return(0,jsx_runtime.jsx)(BoundingBoxesContainer,{style:{left:offsetRatio.left,top:offsetRatio.top,transform:`scale(${offsetRatio.ratio})`,WebkitTransformOrigin:"top left"},className,width:imageWidth,height:imageHeight,ref:canvasRef})};BoundingBoxes.displayName="BoundingBoxes";const BoundingBoxes_BoundingBoxes=BoundingBoxes;try{BoundingBoxes.displayName="BoundingBoxes",BoundingBoxes.__docgenInfo={description:"BoundingBoxes Component\n\nThe BoundingBoxes component is intended to draw boxes on top of specified areas\nof an image. This can be used to direct attention to key aspects or items within an image\nwhile also maintaining the proper aspect ratio and location offset(s) as the image is resized.",displayName:"BoundingBoxes",props:{activeBBox:{defaultValue:null,description:"The name of the currently active item. When specified, only\nbounding boxes included in the first item with the matching name will be drawn.",name:"activeBBox",required:!0,type:{name:"string"}},boundingBoxItems:{defaultValue:null,description:"A list of bounding box items to draw including the name of the item,\nthe color of the boxes, and a list of bounding boxes to draw.",name:"boundingBoxItems",required:!0,type:{name:"BoundingBoxItemProp[]"}},className:{defaultValue:null,description:"The classes to pass to the bounding boxes container.",name:"className",required:!1,type:{name:"string"}},imageWidth:{defaultValue:null,description:"The width of the image.",name:"imageWidth",required:!0,type:{name:"number"}},imageHeight:{defaultValue:null,description:"The height of the image.",name:"imageHeight",required:!0,type:{name:"number"}},outputWidth:{defaultValue:null,description:"The desired width to display the image. This will likely be observed in the\nparent component, changing often to allow the image to resize.",name:"outputWidth",required:!0,type:{name:"number"}},outputHeight:{defaultValue:null,description:"The desired height to display the image. This will likely be observed in the\nparent component, changing often to allow the image to resize.",name:"outputHeight",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BoundingBoxes/BoundingBoxes.tsx#BoundingBoxes"]={docgenInfo:BoundingBoxes.__docgenInfo,name:"BoundingBoxes",path:"src/components/BoundingBoxes/BoundingBoxes.tsx#BoundingBoxes"})}catch(__react_docgen_typescript_loader_error){}const components_BoundingBoxes=BoundingBoxes_BoundingBoxes},"./src/lib/hooks/resizeObserver.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=callback=>new ResizeObserver(callback)}}]);