import React from 'react'
import styled from 'styled-components'
export default function Desktop(props) {
    return (
        <DesktopView id="win95_desktop">
            {props.children}
        </DesktopView>
    )
}
const DesktopView = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #008888;
`