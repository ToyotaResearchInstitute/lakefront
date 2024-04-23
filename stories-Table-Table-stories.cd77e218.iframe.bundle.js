"use strict";(self.webpackChunk_toyota_research_institute_lakefront=self.webpackChunk_toyota_research_institute_lakefront||[]).push([[5918],{"./.storybook/DocBlock.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DocBlock=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.fQ,{includePrimary:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed,{})]}),__WEBPACK_DEFAULT_EXPORT__=DocBlock;try{DocBlock.displayName="DocBlock",DocBlock.__docgenInfo={description:"",displayName:"DocBlock",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/DocBlock.tsx#DocBlock"]={docgenInfo:DocBlock.__docgenInfo,name:"DocBlock",path:".storybook/DocBlock.tsx#DocBlock"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table_stories_Table,TableWithCustomWidth:()=>TableWithCustomWidth,TableWithExpandableRows:()=>TableWithExpandableRows,TableWithInitialSortByArray:()=>TableWithInitialSortByArray,TableWithMultiSortDisabled:()=>TableWithMultiSortDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var _path,_path2,react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),react_table=__webpack_require__("./node_modules/react-table/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),lakefrontColors=__webpack_require__("./src/styles/lakefrontColors.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var arrow_drop_down_path,arrow_drop_down_path2;function arrow_drop_down_extends(){return arrow_drop_down_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},arrow_drop_down_extends.apply(this,arguments)}var unsorted_path;function unsorted_extends(){return unsorted_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},unsorted_extends.apply(this,arguments)}const TableStyle=emotion_styled_browser_esm.Z.table((({theme})=>({padding:0,margin:0,borderSpacing:0,width:"100%",tr:{color:theme?.colors?.arsenic,":last-child":{td:{borderBottom:0}}},th:{color:theme?.colors?.pavement,position:"relative",textAlign:"left",svg:{marginTop:2,position:"absolute",top:6,fill:lakefrontColors.ZP.pavement}},"th,td":{margin:0,padding:"0.8rem",borderBottom:"1px solid",borderBottomColor:theme?.colors?.selago,"&.noBorder":{borderBottom:0,padding:"0.4rem"},"&.marginBottom":{marginBottom:5},svg:{fill:lakefrontColors.ZP.pavement}}}))),StyledHeader=emotion_styled_browser_esm.Z.div({display:"flex",alignItems:"center",justifyContent:"flex-start","div:first-of-type":{width:"max-content"}}),StyledHeaderContent=emotion_styled_browser_esm.Z.div({display:"flex",alignItems:"center",justifyContent:"flex-start","svg.sort-icon":{marginTop:0,position:"static",fill:lakefrontColors.ZP.pavement}}),StyledArrowDown=(0,emotion_styled_browser_esm.Z)((function SvgArrowDropDown(props){return react.createElement("svg",arrow_drop_down_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,fill:"currentColor"},props),arrow_drop_down_path||(arrow_drop_down_path=react.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),arrow_drop_down_path2||(arrow_drop_down_path2=react.createElement("path",{d:"M7 10l5 5 5-5H7z"})))}))({paddingLeft:5,paddingTop:3}),StyledArrowUp=(0,emotion_styled_browser_esm.Z)((function SvgArrowDropUp(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,fill:"currentColor"},props),_path||(_path=react.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),_path2||(_path2=react.createElement("path",{d:"M7 14l5-5 5 5H7z"})))}))({paddingLeft:5,paddingTop:3}),StyledUnsorted=(0,emotion_styled_browser_esm.Z)((function SvgUnsorted(props){return react.createElement("svg",unsorted_extends({width:10,height:12},props),unsorted_path||(unsorted_path=react.createElement("path",{d:"M0 5h10L5 0zM0 7h10l-5 5z"})))}))({marginLeft:8,position:"relative",top:10}),HideableTHead=emotion_styled_browser_esm.Z.thead((({hide})=>({visibility:hide?"collapse":"visible"})));var emotion_element_6a883da9_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js"),theme=__webpack_require__("./src/styles/theme.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getSortBySVG=({disableSortBy,isSorted,isSortedDesc})=>disableSortBy?null:isSorted?getSortDirectionSVG(isSortedDesc):(0,jsx_runtime.jsx)(StyledUnsorted,{"aria-label":"unsorted-icon",className:"sort-icon"}),getSortDirectionSVG=isSortedDesc=>isSortedDesc?(0,jsx_runtime.jsx)(StyledArrowDown,{"aria-label":"arrow-down",className:"sort-icon"}):(0,jsx_runtime.jsx)(StyledArrowUp,{"aria-label":"arrow-up",className:"sort-icon"}),getTitleForMultiSort=(disableMultiSort,title="",disableSortBy)=>disableMultiSort?title:getTitleForColumn(disableSortBy),getTitleForColumn=disableSortBy=>disableSortBy?"":"Hold shift & click the column to add to multi-sort";try{getSortBySVG.displayName="getSortBySVG",getSortBySVG.__docgenInfo={description:"",displayName:"getSortBySVG",props:{disableSortBy:{defaultValue:null,description:"",name:"disableSortBy",required:!0,type:{name:"boolean"}},isSorted:{defaultValue:null,description:"",name:"isSorted",required:!0,type:{name:"boolean"}},isSortedDesc:{defaultValue:null,description:"",name:"isSortedDesc",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/tableUtil.tsx#getSortBySVG"]={docgenInfo:getSortBySVG.__docgenInfo,name:"getSortBySVG",path:"src/components/Table/tableUtil.tsx#getSortBySVG"})}catch(__react_docgen_typescript_loader_error){}try{getSortDirectionSVG.displayName="getSortDirectionSVG",getSortDirectionSVG.__docgenInfo={description:"",displayName:"getSortDirectionSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/tableUtil.tsx#getSortDirectionSVG"]={docgenInfo:getSortDirectionSVG.__docgenInfo,name:"getSortDirectionSVG",path:"src/components/Table/tableUtil.tsx#getSortDirectionSVG"})}catch(__react_docgen_typescript_loader_error){}try{getTitleForColumn.displayName="getTitleForColumn",getTitleForColumn.__docgenInfo={description:"",displayName:"getTitleForColumn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/tableUtil.tsx#getTitleForColumn"]={docgenInfo:getTitleForColumn.__docgenInfo,name:"getTitleForColumn",path:"src/components/Table/tableUtil.tsx#getTitleForColumn"})}catch(__react_docgen_typescript_loader_error){}const Table=({className,columns,data,options={},noDataMessage="No data available",style,onChangeSort,initialSortBy,rowProps,renderRowSubComponent,hideHeaders=!1})=>{const tableHookOptions={...options,columns,data,...(0,react.useMemo)((()=>initialSortBy?{initialState:{sortBy:Array.isArray(initialSortBy)?initialSortBy:[initialSortBy]}}:{}),[initialSortBy])},{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,state,...rest}=(0,react_table.useTable)(tableHookOptions,react_table.useSortBy,react_table.useExpanded),{sortBy}=state;return(0,react.useEffect)((()=>{onChangeSort&&sortBy.length&&onChangeSort(sortBy[0],sortBy)}),[sortBy]),(0,jsx_runtime.jsx)(emotion_element_6a883da9_browser_esm.a,{theme:theme.Z,children:(0,jsx_runtime.jsxs)(TableStyle,{...getTableProps(),className,style,children:[(0,jsx_runtime.jsx)(HideableTHead,{hide:hideHeaders,children:headerGroups.map((headerGroup=>(0,jsx_runtime.jsx)("tr",{...headerGroup.getHeaderGroupProps(),children:headerGroup.headers.map((column=>(0,jsx_runtime.jsx)("th",{...column.getHeaderProps(column.getSortByToggleProps((props=>({...props,title:getTitleForMultiSort(tableHookOptions.disableMultiSort,props.title,column.disableSortBy),width:column.width})))),children:(0,jsx_runtime.jsxs)(StyledHeader,{children:[(0,jsx_runtime.jsx)(StyledHeaderContent,{children:column.render("Header")}),(0,jsx_runtime.jsx)(StyledHeaderContent,{children:getSortBySVG(column)})]})})))})))}),(0,jsx_runtime.jsxs)("tbody",{...getTableBodyProps(),children:[rows.map((row=>(prepareRow(row),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("tr",{...row.getRowProps(rowProps),children:row.cells.map((cell=>(0,jsx_runtime.jsx)("td",{...cell.getCellProps(),children:cell.render("Cell")})))}),row.isExpanded&&renderRowSubComponent?renderRowSubComponent({row}):null]},row.id)))),0===rows.length&&(0,jsx_runtime.jsx)("tr",{children:(0,jsx_runtime.jsx)("td",{colSpan:columns.length,children:noDataMessage})})]})]})})};Table.displayName="Table";const Table_Table=Table;try{Table.displayName="Table",Table.__docgenInfo={description:"The Table Component is used to render table with specified columns and data.\nThe no data meesage can be set when the data is not present.\nYou can set initial sorting on the table. OnChangeSort is triggered everytime the sorting is changed on the table.\nFor more information about react-table please check the link https://react-table.tanstack.com/docs/api/useTable",displayName:"Table",props:{data:{defaultValue:null,description:"This is to set the data for the table.",name:"data",required:!0,type:{name:"any[] | null | undefined"}},columns:{defaultValue:null,description:"This is to set the columns of the table.",name:"columns",required:!0,type:{name:"Column<{}>[]"}},options:{defaultValue:{value:"{}"},description:"This is to set the additional properties on the table like disableSortRemove, \nautoResetSortBy, disableMultiSort, etc.",name:"options",required:!1,type:{name:"any"}},rowProps:{defaultValue:null,description:"This is to set the row properties.",name:"rowProps",required:!1,type:{name:"object"}},noDataMessage:{defaultValue:{value:"No data available"},description:"This is to set the display message when there is no data.",name:"noDataMessage",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"This is to set some additional style on the table.",name:"style",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"This is to set a class on the table.",name:"className",required:!1,type:{name:"string"}},initialSortBy:{defaultValue:null,description:"This is to set the initial sorting on the table.\nWhen an array of items is provided, the order dictates the priority of sorting. Example: value --\x3e title --\x3e percentage.",name:"initialSortBy",required:!1,type:{name:"{ id: string; desc: boolean; }[] | { id: string; desc: boolean; }"}},onChangeSort:{defaultValue:null,description:"This event is triggered when the sorting is changed on the table.\nThe first argument is the sorted column and the second argument is the sortBy array\n(for if table is sorted by multiple columns).",name:"onChangeSort",required:!1,type:{name:"(({ id, desc }: TableSortByOptions, sortedBy?: TableSortByOptions[]) => void)"}},renderRowSubComponent:{defaultValue:null,description:"This is to set the row sub component on the table.",name:"renderRowSubComponent",required:!1,type:{name:"(({ row }: { row: any; }) => ReactNode)"}},hideHeaders:{defaultValue:{value:"false"},description:"This allows displaying the table rows without headers.\nThis is defaulted to false.",name:"hideHeaders",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const components_Table=Table_Table;var DocBlock=__webpack_require__("./.storybook/DocBlock.tsx"),chevron_up=__webpack_require__("./src/components/Collapsible/assets/chevron-up.svg"),chevron_down=__webpack_require__("./src/components/Collapsible/assets/chevron-down.svg");const Table_stories={title:"Lakefront/Table",component:components_Table,parameters:{docs:{page:DocBlock.Z}}},columns=[{Header:"TITLE",accessor:"title",Cell:({cell:{value}})=>value},{Header:"VALUE",accessor:"value"},{Header:"PERCENTAGE",accessor:"percentage"},{Header:"PERCENTAGE CHANGE",accessor:"percentage_change",Cell:({cell:{value}})=>value?.toFixed(4)||""},{Header:"TOTAL/100",accessor:"total",Cell:({cell:{value}})=>value?.toFixed(4)||""}],columnsWithWidth=[{Header:"TITLE",accessor:"title",width:100,Cell:({cell:{value}})=>value},{Header:"VALUE",accessor:"value",width:100},{Header:"PERCENTAGE",accessor:"percentage",width:100},{Header:"PERCENTAGE CHANGE",accessor:"percentage_change",width:140,Cell:({cell:{value}})=>value?.toFixed(4)||""},{Header:"TOTAL/100",accessor:"total",width:50,disableSortBy:!0,Cell:({cell:{value}})=>value?.toFixed(4)||""}],ChevronContainer=emotion_styled_browser_esm.Z.div({display:"flex",justifyContent:"center",svg:{stroke:lakefrontColors.ZP.black}}),columnsWithWidthAndExpander=[...columnsWithWidth,{Header:"",id:"expander",disableSortBy:!0,Cell:({row})=>(0,jsx_runtime.jsx)(ChevronContainer,{...row.getToggleRowExpandedProps(),children:row.isExpanded?(0,jsx_runtime.jsx)(chevron_up.r,{}):(0,jsx_runtime.jsx)(chevron_down.r,{})})}],customData=[{title:"r2204_1_0",value:24,percentage:166.992,percentage_change:6.9579999999,total:.14371985},{title:"r2002_1_0",value:3,percentage:47.442,percentage_change:15.814,total:.063491},{title:"r2010_1_0",value:5,percentage:25.68,percentage_change:5.136,total:.1947675},{title:"r2019_1_0",value:51,percentage:291.549,percentage_change:5.7166473529,total:.1959277202},{title:"r2125_1_0",value:39,percentage:175.199,percentage_change:4.4922282052,total:.2226686241},{title:"r2018_1_0",value:12,percentage:80.672,percentage_change:6.7266666,total:.148750612},{title:"r2027_1_0",value:83,percentage:275.087,percentage_change:3.314819277,total:.3017716},{title:"r2016_1_0",value:27,percentage:130.419,percentage_change:4.830333334,total:.20705373},{title:"r2115_1_0",value:18,percentage:97.505,percentage_change:5.7166473529,total:.1746059897},{title:"r1112_1_0",value:22,percentage:113.747,percentage_change:5.7166473529,total:.193415712},{title:"r2110_1_0",value:80,percentage:304.77,percentage_change:3.80969996,total:.2625626}],initialSortByCustomData=[{title:"car",value:24,percentage:166.992,percentage_change:6.9579999999,total:.14371985},{title:"truck",value:22,percentage:304.77,percentage_change:15.814,total:.063491},{title:"boat",value:5,percentage:25.68,percentage_change:5.136,total:.1947675},{title:"car",value:51,percentage:291.549,percentage_change:5.7166473529,total:.1959277202},{title:"boat",value:51,percentage:175.199,percentage_change:4.4922282052,total:.2226686241},{title:"car",value:12,percentage:80.672,percentage_change:6.7266666,total:.148750612},{title:"truck",value:83,percentage:275.087,percentage_change:3.314819277,total:.3017716},{title:"truck",value:51,percentage:130.419,percentage_change:4.830333334,total:.20705373},{title:"truck",value:18,percentage:97.505,percentage_change:5.7166473529,total:.1746059897},{title:"car",value:22,percentage:113.747,percentage_change:5.7166473529,total:.193415712},{title:"boat",value:22,percentage:47.442,percentage_change:3.80969996,total:.2625626}],SubComponentTr=emotion_styled_browser_esm.Z.tr({"td.table-wrapper-td":{padding:0},boxShadow:"0px 4px 4px #F5F5F5"}),TableWrapperTd=emotion_styled_browser_esm.Z.td({"td:first-of-type, td:last-of-type":{content:'""',display:"block",margin:"0 auto 0 1em",borderBottom:`1px solid ${lakefrontColors.ZP.selago}`},"td:last-of-type":{margin:"0 1em 0 auto"}}),renderRowSubComponent=({row})=>{const{value,percentage,percentage_change,total}=row.original,nestedData=[{title:"halved",value:value/2,percentage:percentage/2,percentage_change:percentage_change/2,total:total/2},{title:"doubled",value:48,percentage:2*percentage,percentage_change:2*percentage_change,total:2*total}],subColumns=[...columnsWithWidthAndExpander.slice(0,columnsWithWidthAndExpander.length-1),{Header:"",id:"hiddenExpander",disableSortBy:!0,Cell:()=>(0,jsx_runtime.jsx)("div",{children:" "})}];return(0,jsx_runtime.jsx)(SubComponentTr,{children:(0,jsx_runtime.jsx)(TableWrapperTd,{colSpan:columnsWithWidthAndExpander.length,className:"table-wrapper-td",children:(0,jsx_runtime.jsx)(components_Table,{columns:subColumns,data:nestedData,renderRowSubComponent,hideHeaders:!0})})})};renderRowSubComponent.displayName="renderRowSubComponent";const StyledTableComponent=(0,emotion_styled_browser_esm.Z)(components_Table)({td:{fontWeight:"bold"},table:{td:{fontWeight:"normal"}}}),Template=args=>{const[data,setData]=(0,react.useState)(args.data),[dataToggle,setDataToggle]=(0,react.useState)(!1),[sortMsg,setSortMsg]=(0,react.useState)(""),RenderTableComponent=args.renderRowSubComponent?StyledTableComponent:components_Table;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{style:{marginTop:"10px",marginLeft:"10px"},children:[(0,jsx_runtime.jsx)(Button.Z,{color:"secondary",onClick:()=>{setData(dataToggle?customData:[]),setDataToggle((dataToggle=>!dataToggle))},children:dataToggle?"Load Data":"Clear Data"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),!dataToggle&&(0,jsx_runtime.jsx)("b",{children:sortMsg})]}),(0,jsx_runtime.jsx)(RenderTableComponent,{...args,data,onChangeSort:(_,sortedBy)=>{const columnNamesAndSortDirection=sortedBy.map((sortedColumn=>` ${columns.find((col=>col.accessor===sortedColumn.id)).Header} ${sortedColumn.desc?"(Descending Order)":"(Ascending Order)"}`));setSortMsg(`Sorting is applied on column name(s):  ${columnNamesAndSortDirection}`)}})]})},Table_stories_Table=Template.bind({});Table_stories_Table.args={columns,data:customData,initialSortBy:{id:"title",desc:!1},noDataMessage:"No data found",options:{disableSortRemove:!0,autoResetSortBy:!0,disableMultiSort:!1}};const TableWithInitialSortByArray=Template.bind({});TableWithInitialSortByArray.args={columns,data:initialSortByCustomData,initialSortBy:[{id:"value",desc:!1},{id:"title",desc:!0},{id:"percentage",desc:!0}],noDataMessage:"No data found",options:{disableSortRemove:!0,autoResetSortBy:!0,disableMultiSort:!1}};const TableWithMultiSortDisabled=Template.bind({});TableWithMultiSortDisabled.args={columns,data:customData,initialSortBy:{id:"title",desc:!1},noDataMessage:"No data found",options:{disableMultiSort:!0}};const TableWithCustomWidth=Template.bind({});TableWithCustomWidth.args={columns:columnsWithWidth,data:customData,initialSortBy:{id:"title",desc:!1},noDataMessage:"No data found",options:{disableMultiSort:!1}};const TableWithExpandableRows=Template.bind({});TableWithExpandableRows.args={columns:columnsWithWidthAndExpander,data:initialSortByCustomData,noDataMessage:"No data found",renderRowSubComponent},Table_stories_Table.parameters={...Table_stories_Table.parameters,docs:{...Table_stories_Table.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const [dataToggle, setDataToggle] = useState(false);\n  const [sortMsg, setSortMsg] = useState('');\n  const resetData = () => {\n    const newData = dataToggle ? customData : [];\n    setData(newData);\n    setDataToggle(dataToggle => !dataToggle);\n  };\n  const handleSort = (_, sortedBy) => {\n    const newMsg = 'Sorting is applied on column name(s): ';\n    const columnNamesAndSortDirection = sortedBy.map(sortedColumn => {\n      const colName = columns.find(col => col.accessor === sortedColumn.id).Header;\n      const sortDirection = sortedColumn.desc ? '(Descending Order)' : '(Ascending Order)';\n      return ` ${colName} ${sortDirection}`;\n    });\n    setSortMsg(`${newMsg} ${columnNamesAndSortDirection}`);\n  };\n  const RenderTableComponent = args.renderRowSubComponent ? StyledTableComponent : TableComponent;\n  return <>\n            <div style={{\n      marginTop: '10px',\n      marginLeft: '10px'\n    }}>\n                <Button color='secondary' onClick={resetData}>\n                    {dataToggle ? 'Load Data' : 'Clear Data'}</Button><br /><br />\n                {!dataToggle && <b>{sortMsg}</b>}\n            </div>\n            <RenderTableComponent {...args} data={data} onChangeSort={handleSort} />\n        </>;\n}",...Table_stories_Table.parameters?.docs?.source}}},TableWithInitialSortByArray.parameters={...TableWithInitialSortByArray.parameters,docs:{...TableWithInitialSortByArray.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const [dataToggle, setDataToggle] = useState(false);\n  const [sortMsg, setSortMsg] = useState('');\n  const resetData = () => {\n    const newData = dataToggle ? customData : [];\n    setData(newData);\n    setDataToggle(dataToggle => !dataToggle);\n  };\n  const handleSort = (_, sortedBy) => {\n    const newMsg = 'Sorting is applied on column name(s): ';\n    const columnNamesAndSortDirection = sortedBy.map(sortedColumn => {\n      const colName = columns.find(col => col.accessor === sortedColumn.id).Header;\n      const sortDirection = sortedColumn.desc ? '(Descending Order)' : '(Ascending Order)';\n      return ` ${colName} ${sortDirection}`;\n    });\n    setSortMsg(`${newMsg} ${columnNamesAndSortDirection}`);\n  };\n  const RenderTableComponent = args.renderRowSubComponent ? StyledTableComponent : TableComponent;\n  return <>\n            <div style={{\n      marginTop: '10px',\n      marginLeft: '10px'\n    }}>\n                <Button color='secondary' onClick={resetData}>\n                    {dataToggle ? 'Load Data' : 'Clear Data'}</Button><br /><br />\n                {!dataToggle && <b>{sortMsg}</b>}\n            </div>\n            <RenderTableComponent {...args} data={data} onChangeSort={handleSort} />\n        </>;\n}",...TableWithInitialSortByArray.parameters?.docs?.source}}},TableWithMultiSortDisabled.parameters={...TableWithMultiSortDisabled.parameters,docs:{...TableWithMultiSortDisabled.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const [dataToggle, setDataToggle] = useState(false);\n  const [sortMsg, setSortMsg] = useState('');\n  const resetData = () => {\n    const newData = dataToggle ? customData : [];\n    setData(newData);\n    setDataToggle(dataToggle => !dataToggle);\n  };\n  const handleSort = (_, sortedBy) => {\n    const newMsg = 'Sorting is applied on column name(s): ';\n    const columnNamesAndSortDirection = sortedBy.map(sortedColumn => {\n      const colName = columns.find(col => col.accessor === sortedColumn.id).Header;\n      const sortDirection = sortedColumn.desc ? '(Descending Order)' : '(Ascending Order)';\n      return ` ${colName} ${sortDirection}`;\n    });\n    setSortMsg(`${newMsg} ${columnNamesAndSortDirection}`);\n  };\n  const RenderTableComponent = args.renderRowSubComponent ? StyledTableComponent : TableComponent;\n  return <>\n            <div style={{\n      marginTop: '10px',\n      marginLeft: '10px'\n    }}>\n                <Button color='secondary' onClick={resetData}>\n                    {dataToggle ? 'Load Data' : 'Clear Data'}</Button><br /><br />\n                {!dataToggle && <b>{sortMsg}</b>}\n            </div>\n            <RenderTableComponent {...args} data={data} onChangeSort={handleSort} />\n        </>;\n}",...TableWithMultiSortDisabled.parameters?.docs?.source}}},TableWithCustomWidth.parameters={...TableWithCustomWidth.parameters,docs:{...TableWithCustomWidth.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const [dataToggle, setDataToggle] = useState(false);\n  const [sortMsg, setSortMsg] = useState('');\n  const resetData = () => {\n    const newData = dataToggle ? customData : [];\n    setData(newData);\n    setDataToggle(dataToggle => !dataToggle);\n  };\n  const handleSort = (_, sortedBy) => {\n    const newMsg = 'Sorting is applied on column name(s): ';\n    const columnNamesAndSortDirection = sortedBy.map(sortedColumn => {\n      const colName = columns.find(col => col.accessor === sortedColumn.id).Header;\n      const sortDirection = sortedColumn.desc ? '(Descending Order)' : '(Ascending Order)';\n      return ` ${colName} ${sortDirection}`;\n    });\n    setSortMsg(`${newMsg} ${columnNamesAndSortDirection}`);\n  };\n  const RenderTableComponent = args.renderRowSubComponent ? StyledTableComponent : TableComponent;\n  return <>\n            <div style={{\n      marginTop: '10px',\n      marginLeft: '10px'\n    }}>\n                <Button color='secondary' onClick={resetData}>\n                    {dataToggle ? 'Load Data' : 'Clear Data'}</Button><br /><br />\n                {!dataToggle && <b>{sortMsg}</b>}\n            </div>\n            <RenderTableComponent {...args} data={data} onChangeSort={handleSort} />\n        </>;\n}",...TableWithCustomWidth.parameters?.docs?.source}}},TableWithExpandableRows.parameters={...TableWithExpandableRows.parameters,docs:{...TableWithExpandableRows.parameters?.docs,source:{originalSource:"args => {\n  const [data, setData] = useState(args.data);\n  const [dataToggle, setDataToggle] = useState(false);\n  const [sortMsg, setSortMsg] = useState('');\n  const resetData = () => {\n    const newData = dataToggle ? customData : [];\n    setData(newData);\n    setDataToggle(dataToggle => !dataToggle);\n  };\n  const handleSort = (_, sortedBy) => {\n    const newMsg = 'Sorting is applied on column name(s): ';\n    const columnNamesAndSortDirection = sortedBy.map(sortedColumn => {\n      const colName = columns.find(col => col.accessor === sortedColumn.id).Header;\n      const sortDirection = sortedColumn.desc ? '(Descending Order)' : '(Ascending Order)';\n      return ` ${colName} ${sortDirection}`;\n    });\n    setSortMsg(`${newMsg} ${columnNamesAndSortDirection}`);\n  };\n  const RenderTableComponent = args.renderRowSubComponent ? StyledTableComponent : TableComponent;\n  return <>\n            <div style={{\n      marginTop: '10px',\n      marginLeft: '10px'\n    }}>\n                <Button color='secondary' onClick={resetData}>\n                    {dataToggle ? 'Load Data' : 'Clear Data'}</Button><br /><br />\n                {!dataToggle && <b>{sortMsg}</b>}\n            </div>\n            <RenderTableComponent {...args} data={data} onChangeSort={handleSort} />\n        </>;\n}",...TableWithExpandableRows.parameters?.docs?.source}}};const __namedExportsOrder=["Table","TableWithInitialSortByArray","TableWithMultiSortDisabled","TableWithCustomWidth","TableWithExpandableRows"]},"./src/components/Collapsible/assets/chevron-down.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgChevronDown});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgChevronDown(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"chevron-down_svg__bi chevron-down_svg__bi-chevron-down",viewBox:"0 0 16 16"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"})))}},"./src/components/Collapsible/assets/chevron-up.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgChevronUp});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function SvgChevronUp(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"chevron-up_svg__bi chevron-up_svg__bi-chevron-up",viewBox:"0 0 16 16"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"})))}}}]);