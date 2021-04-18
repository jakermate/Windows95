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
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    bottom: 0;
`