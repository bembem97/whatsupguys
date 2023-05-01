import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import intro from "./html/intro"
import attributes from "./html/attributes"
import headings from "./html/headings"
import articles from "./html/semantics/articles"
import aside from "./html/semantics/aside"
import figure from "./html/semantics/figure"
import footer from "./html/semantics/footer"
import header from "./html/semantics/header"
import nav from "./html/semantics/nav"
import section from "./html/semantics/section"

import parentElementContainer from "./css/flexbox/parentElContainer"
import flexDirection from "./css/flexbox/flexDirection"
import flexWrap from "./css/flexbox/flexWrap"
import justifyContent from "./css/flexbox/justifyContent"
import alignItems from "./css/flexbox/alignItems"
import alignContent from "./css/flexbox/alignContent"
import perfectCentering from "./css/flexbox/perfectCentering"
import gridColumns from "./css/grid/gridColumns"
import gridRows from "./css/grid/gridRows"
import justifyContentGrid from "./css/grid/justifyContent"
import alignContentGrid from "./css/grid/alignContent"
import anchorPseudo from "./css/pseudoClasses/anchorPseudo"
import hoverClasses from "./css/pseudoClasses/hoverClasses"
import firstChild from "./css/pseudoClasses/firstChild"
import langAttr from "./css/pseudoClasses/langAttr"
import firstLine from "./css/pseudoElements/firstLine"
import firstLetter from "./css/pseudoElements/firstLetter"
import firstLetterAndLine from "./css/pseudoElements/firstLetterAndLine"
import pseudoBeforeAfter from "./css/pseudoElements/pseudoBeforeAfter"
import marker from "./css/pseudoElements/marker"
import selection from "./css/pseudoElements/selection"

import domMethods from "./js/domMethods"
import byCSSSelector from "./js/domElement/byCSSSelector"
import byClassName from "./js/domElement/byClassName"
import byId from "./js/domElement/byId"
import byTagName from "./js/domElement/byTagName"
import htmlObjectCollections from "./js/domElement/htmlObjectCollections"
import domCSS from "./js/domCSS"
import accessByIndex from "./js/domNodeLists/accessByIndex"
import nodeLength from "./js/domNodeLists/nodeLength"
import styleNodes from "./js/domNodeLists/styleNodes"

import timer from "./react/useEffect/timer"
import runOnce from "./react/useEffect/runOnce"
import runEveryChanges from "./react/useEffect/runEveryChanges"
import cleanUp from "./react/useEffect/cleanUp"
import todoReducer from "./react/useReducer"
import trackAppRender from "./react/useRef/trackAppRender"
import focusInput from "./react/useRef/focusInput"
import trackPreviousState from "./react/useRef/trackPreviousState"
import readState from "./react/useState/readState"
import updateState from "./react/useState/updateState"
import multiState from "./react/useState/multiState"
import objectState from "./react/useState/objectState"
import updateObjAndArr from "./react/useState/updateObjAndArr"

export type KeyProps = {
    [key: string]: {
        [key: string]:
            | null
            | SandpackProviderProps
            | { [key: string]: SandpackProviderProps }
    }
}

const views: KeyProps[] = [
    {
        html: {
            intro: { intro },
            attributes: { attributes },
            headings: { headings },
            semantics: {
                articles,
                aside,
                figure,
                footer,
                header,
                nav,
                section,
            },
        },
    },
    {
        css: {
            flexbox: {
                parentElementContainer,
                flexDirection,
                flexWrap,
                justifyContent,
                alignItems,
                alignContent,
                perfectCentering,
            },
            grid: {
                gridColumns,
                gridRows,
                justifyContentGrid,
                alignContentGrid,
            },
            pseudoClasses: {
                anchorPseudo,
                hoverClasses,
                firstChild,
                langAttr,
            },
            pseudoElements: {
                firstLine,
                firstLetter,
                firstLetterAndLine,
                pseudoBeforeAfter,
                marker,
                selection,
            },
        },
    },
    {
        javascript: {
            domMethods: { domMethods },
            domElements: {
                byId,
                byClassName,
                byCSSSelector,
                byTagName,
                htmlObjectCollections,
            },
            domCSS: { domCSS },
            domNodeLists: {
                accessByIndex,
                nodeLength,
                styleNodes,
            },
        },
    },
    {
        reactjs: {
            useEffect: { timer, runOnce, runEveryChanges, cleanUp },
            useReducer: { todoReducer },
            useRef: { trackAppRender, focusInput, trackPreviousState },
            useState: {
                readState,
                updateState,
                multiState,
                objectState,
                updateObjAndArr,
            },
        },
    },
    { howto: {} },
]

const filter = async (category: string, reference: string) => {
    const filtered = views.filter((item) => category in item)
    const mapped = filtered.map((item) => item[category][reference])
    const stringify = JSON.stringify(mapped)
    const [parsed] = JSON.parse(stringify)

    return parsed
}

export default filter
