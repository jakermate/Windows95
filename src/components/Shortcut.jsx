import React from "react"
import Draggable from "react-draggable"
import styled from "styled-components"
export default function Shortcut(props) {
  return (
    // <Draggable>
    <ShortcutItem active={props.active}>
      <div className="shortcut_image_container">
        <img
          src={props.shortcut_icon}
          alt="shortcut_icon"
          style={{
            pointerEvents: "none",
            height: "46px",
          }}
        />
      </div>
      <div>
        <div className="shortcut_string">{props.shortcut_string}</div>
      </div>
    </ShortcutItem>
    // </Draggable>
  )
}
const ShortcutItem = styled.div`
  width: 80px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .shortcut_string {
    font-size: 12px;
    text-align: center;
    background: ${(props) =>
      props.active ? props.theme.gradientActiveLeft : "transparent"};
  }
  .shortcut_image_container {
    padding-top: 12px;
    filter: ${props => props.active ? `grayscale(100%) brightness(5%) sepia(100%) hue-rotate(170deg) brightness(800%) saturate(500%);` : "none"}
  }
`
