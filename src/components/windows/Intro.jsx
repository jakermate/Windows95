import React from "react"
import Draggable from "react-draggable"
import Panel from "../Panel"
import styled from "styled-components"
export default function Intro(props) {
  return (
    <Draggable>
      <Root>
        <Panel>
            f
        </Panel>
      </Root>
    </Draggable>
  )
}
const Root = styled.div`
    position: absolute;
    top: 25vh;
    left: 25vw;
    height: 50vh;
    width: 50vw;
`
