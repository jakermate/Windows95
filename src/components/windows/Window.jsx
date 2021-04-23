import React from "react"
import Draggable from "react-draggable"
import styled from "styled-components"
import Panel from "../Panel"
import WindowControlBar from "../WindowControlBar"
export default function Window(props) {
  return (
    <Draggable>
      <Div
        className="windows_95_app_window"

        style={{
          width: props.width || 300,
          height: props.height || 200,
          transform: (props.x && props.y  ? `translate(${props.x}, ${props.y})`  : `translate(0,0)`)
        }}
      >
        <Panel>
          <WindowControlBar></WindowControlBar>
          {props.children}
        </Panel>
      </Div>
    </Draggable>
  )
}
const Div = styled.div`
    position: absolute;
`
