import React, { useEffect } from "react"
import styled from "styled-components"
import Panel from "../Panel"
import WindowControlBar from "../WindowControlBar"
import { Rnd } from "react-rnd"
export default function Window(props) {
  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: props.width || 500,
        height: props.height || 300,
      }}
      className="windows_95_rnd"
      dragHandleClassName={"control_bar"}
      style={{
        zIndex: props.stack.length - props.stack.indexOf(props.app.id),
        display: props.app.minimized ? "none" : "block",
      }}
    >
      <Div
        className="windows_95_app_window"
        onMouseDownCapture={(e) => props.reorderStack(props.app.id)}
      >
        <Panel
          className="windows_95_panel_style"
          onMouseDownCapture={(e) => props.reorderStack(props.app.id)}
        >
          <WindowControlBar
            closeApp={props.closeApp}
            modifyApp={props.modifyApp}
            application_id={props.app.id}
            app={props.app}
          ></WindowControlBar>
          {props.children}
        </Panel>
      </Div>
    </Rnd>
  )
}
const Div = styled.div`
  /* position: absolute; */
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`
