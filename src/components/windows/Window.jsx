import React, {useEffect} from "react"
import Draggable from "react-draggable"
import styled from "styled-components"
import Panel from "../Panel"
import WindowControlBar from "../WindowControlBar"
export default function Window(props) {
   
  return (
    <Draggable>
      <Div
        className="windows_95_app_window"
        onMouseDownCapture={e => props.reorderStack(props.app.id)}
        style={{
        zIndex: props.stack.length - props.stack.indexOf(props.app.id),
          width: props.width || 300,
          height: props.height || 200,
          transform: (props.x && props.y  ? `translate(${props.x}, ${props.y})`  : `translate(0,0)`),
          display: props.app.minimized ? "none" : "block"
        }}
      >
        <Panel>
          <WindowControlBar closeApp={props.closeApp} modifyApp={props.modifyApp} application_id={props.app.id} app={props.app}></WindowControlBar>
          {props.children}
        </Panel>
      </Div>
    </Draggable>
  )
}
const Div = styled.div`
    position: absolute;
`
