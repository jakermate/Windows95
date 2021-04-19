import React from 'react'
import styled from 'styled-components'
export default function DesktopGrid(props) {
    return (
        <Grid>
            {
                props.children
            }
        </Grid>
    )
}
const Grid = styled.div`
    display: flex;
    padding: .5rem;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    position: absolute;
    left:0;
    top:0;
    right: 0;
`