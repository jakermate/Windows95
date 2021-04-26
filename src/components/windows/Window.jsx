import React, {useEffect} from "react"
import Draggable from "react-draggable"
import styled from "styled-components"
import Panel from "../Panel"
import WindowControlBar from "../WindowControlBar"
import ResizeHandles from './ResizeHandles'
import {Rnd} from 'react-rnd'
export default function Window(props) {
  return (
    <Rnd
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200,
    }}
    dragHandleClassName={"control_bar"}
  >
      <Div
        className="windows_95_app_window"
        onMouseDownCapture={e => props.reorderStack(props.app.id)}
        style={{
        zIndex: props.stack.length - props.stack.indexOf(props.app.id),
          display: props.app.minimized ? "none" : "block"
        }}
      >
        <Panel className="windows_95_panel_style">
          <WindowControlBar closeApp={props.closeApp} modifyApp={props.modifyApp} application_id={props.app.id} app={props.app}></WindowControlBar>
          {props.children}
        </Panel>
        {/* <ResizeHandles></ResizeHandles> */}
      </Div>
  </Rnd>

  )
}
const Div = styled.div`
    /* position: absolute; */
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction : column;
`
