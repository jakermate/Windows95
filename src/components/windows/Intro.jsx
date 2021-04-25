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
  return (
      <Root>
          <div className="flex-col handle">
       
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
      </Root>
  )
}
const Root = styled.div`
  position: relative;
 
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
