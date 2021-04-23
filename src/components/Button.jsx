import React from "react"
import Panel from "./Panel"
import styled from "styled-components"
export default function Button(props) {
  return <Root onClick={e => props.action()} width={props.width} style={{
    ...props.styles
  }}>{props.children}</Root>
}
const Root = styled.button`
  background: none;
  display: flex;
  width: ${props => props.width ? `${props.width}px` : "auto"};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 28px;
  border-left-color: white;
  border-right-color: black;
  border-top-color: white;
  border-bottom-color: black;
  outline: none;
  :hover{
  }
  :focus,
  ::active {
    outline: none;
    border-style: solid;
    border-width: 1px;
    border-left-color: black;
    border-right-color: white;
    border-top-color: black;
    border-bottom-color: white;
  }
  :before{
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        content: "";
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        border-right-color: #929292;
        border-left-color: #e5e5e5;
        border-top-color: #e5e5e5;
        border-bottom-color: #929292

    }
`
