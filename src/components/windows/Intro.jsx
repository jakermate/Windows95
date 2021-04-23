import React, {useState} from "react"
import Draggable from "react-draggable"
import Panel from "../Panel"
import styled from "styled-components"
import Hr from "../Hr"
import Button from '../Button'
import WindowControlBar from "../WindowControlBar"
import logo from '../../jm_logo_32.png'
import MenuRow from "../MenuRow"
export default function Intro(props) {
  const [minimized, toggleMinimized] = useState(false)
  return (
    <Draggable enableUserSelectHack handle={".control_bar"}>
      <Root>
        <Panel minimized={minimized}>
          <div className="flex-col handle">
            {/* app bar */}
            <WindowControlBar icon={logo} app_title={"About Jake Miller"}></WindowControlBar>
            {/* menu row */}
            <MenuRow></MenuRow>
            <Hr style={{
              marginTop: '4px'
            }}></Hr>
            <div className="window_content"></div>
          
            <div className="window_controls">
            <Button width={76}>Ok</Button>

              <Button width={76} styles={{
              }}>Cancel</Button>
            </div>
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
  .window_controls{
    padding: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`
