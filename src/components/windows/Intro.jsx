import React, { useState } from "react"
import Draggable from "react-draggable"
import Panel from "../Panel"
import styled from "styled-components"
import Hr from "../Hr"
import Button from "../Button"
import WindowControlBar from "../WindowControlBar"
import logo from "../../jm_logo_32.png"
import MenuRow from "../MenuRow"
import picture from '../../tmp.png'
export default function Intro(props) {
  return (
    <Root
      className="windows_95_application_wrapper"
      style={
        {
          // width: props.width || 400
        }
      }
    >
      <div className="flex-col handle grow">
        {/* menu row */}
        <MenuRow></MenuRow>
        <Hr
          style={{
            marginTop: "4px",
          }}
        ></Hr>
        <div className="window_content">
          <div className="windows_95_window_content_image_wrapper">
            <img src={picture} alt=""/>
          </div>
          <div className="windows_95_content_right grow">
            <h2>Welcome to Jaker95</h2>
            <p>I'm a web developer from the California Bay Area.</p>
            <p>Here's some stuff I do:</p>
          </div>
        </div>
        
        <Hr style={{
          margin: "0 1rem"
        }}></Hr>

        <div className="window_controls">
          <Button ml={12}>Ok</Button>

          <Button ml={12} styles={{}}>
            Cancel
          </Button>
        </div>
      </div>
    </Root>
  )
}
const Root = styled.div`
  position: relative;
  flex-grow: 1;
  color: black;
  display: flex;
  h2 {
    margin: 0;
    font-weight: 900;
  }
  p {
    font-size: 16px;
  }
  .window_content {
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: row;
  }
  .windows_95_window_content_image_wrapper{
    min-width: 140px;
    overflow: hidden;
    img{
      max-width: 200px;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .windows_95_content_right{
    margin-left: 1rem;

  }
  .grow {
    flex-grow: 1;
  }
  .window_controls {
    padding: 1rem;
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
