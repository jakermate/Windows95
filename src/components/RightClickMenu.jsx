import React from 'react'
import Panel from './Panel'
import styled from "styled-components"
export default function RightClickMenu(props) {
    return (
        <Root id="context-menu" style={{
            position: "fixed",
            display: props.active ? "block" : "none",
            left: props.position[0],
            top: props.position[1]
        }}>
            <Panel>
sdsds
            </Panel>
        </Root>
    )
}
const Root = styled.div`
    background: ${props => props.theme.background};
    min-width: 100px;
    min-height: 100px;
`