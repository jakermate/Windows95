import React, {useState} from "react"
import Draggable from "react-draggable"
import Panel from "../Panel"
import styled from "styled-components"
import Hr from "../Hr"
import WindowControlBar from "../WindowControlBar"
import logo from '../../jm_logo_32.png'
export default function Intro(props) {
  const [minimized, toggleMinimized] = useState(false)
  return (
    <Draggable handle={".control_bar"}>
      <Root>
        <Panel minimized={minimized}>
          <div className="flex-col">
            <WindowControlBar icon={logo} app_title={"About Jake Miller"}></WindowControlBar>
            <div className="window_content"></div>
            <Hr></Hr>
            <div className="window_controls">dsds</div>
          </div>
        </Panel>
      </Root>
    </Draggable>
  )
}
const Root = styled.div`
  position: absolute;
  display: ${props => props.minimized ? 'none' : "block"};
  top: 25vh;
  left: 25vw;
  height: 50vh;
  width: 50vw;
  display: flex;
  .window_content {
    flex-grow: 1;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
