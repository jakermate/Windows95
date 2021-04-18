import React from 'react'
import styled from 'styled-components'
export default function Desktop(props) {
    return (
        <DesktopView>
            {props.children}
        </DesktopView>
    )
}
const DesktopView = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #008888;
`