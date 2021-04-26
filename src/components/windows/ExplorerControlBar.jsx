import { render } from '@testing-library/react'
import React from 'react'
import styled from 'styled-components'

export default function ExplorerControlBar(props) {
    return (
        <div>
            <ul>
                <li><Button string={"Back"}></Button></li>
                <li><Button string={"Forward"}></Button></li>
            </ul>
        </div>
    )
}
function Button(props){
    return(
        <ButtonRoot >
            <div>
                <img src={props.icon} alt={props.string + "_button"} />
            </div>
            <div>
                {props.string}
            </div>
        </ButtonRoot>
    )
}
const ButtonRoot = styled.div`
    display: flex;
    flex-direction: column;

`