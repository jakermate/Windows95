import React from 'react'
import styled from 'styled-components'
import InsetPanel from '../InsetPanel'
export default function ExplorerContent(props) {
    return (
        <Root>
            <InsetPanel></InsetPanel>
        </Root>
    )
}
const Root = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    background: white;
`