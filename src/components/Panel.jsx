import React from 'react'
import styled from 'styled-components'
export default function Panel(props) {
    return (
        <Root>
            {props.children}
        </Root>
    )
}
const Root = styled.div`
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-style: solid;
    border-left-color: white;
    border-right-color: black;
    border-top-color: white;
    border-bottom-color: black;
    background: #cbcbcb;
`