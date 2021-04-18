import React from "react"
import Draggable from "react-draggable"
import styled from 'styled-components'
export default function Shortcut(props) {
  return (
    <Draggable>
      <ShortcutItem>
          <div className="shotcut_image_container">
              <img src={props.shortcut_icon} alt="shortcut_icon" style={{
                  pointerEvents: 'none'
              }}/>
            
          </div>
          <div>
                  <span className="shortcut_string">
                      {props.shortcut_string}
                  </span>
              </div>
      </ShortcutItem>
    </Draggable>
  )
}
const ShortcutItem = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    .shortcut_string{
        font-size: 12px;
    }
`