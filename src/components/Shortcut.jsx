import React from "react"
import Draggable from "react-draggable"
import styled from 'styled-components'
export default function Shortcut(props) {
  return (
    <Draggable>
      <ShortcutItem>
          <div className="shortcut_image_container">
              <img src={props.shortcut_icon} alt="shortcut_icon" style={{
                  pointerEvents: 'none',
                  height: "46px"
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
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    .shortcut_string{
        font-size: 12px;
    }
    .shortcut_image_container{
      padding-top: 12px;
    }
`