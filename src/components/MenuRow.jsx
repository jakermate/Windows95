import React from 'react'
import styled from 'styled-components'
export default function MenuRow(props) {
    return (
        <Root>
            <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
            </ul>
        </Root>
    )
}
const Root = styled.div`
    width: 100%;
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        padding: 0;
        color: black;
        font-size: 10px;
        position: relative;
       li{
           width: 40px;
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: center;
           box-sizing: border-box;
           height: 20px;
           cursor: default;
        :hover{
            border-style: solid;
            border-width: 1px;
            border-top-color: ${props => props.theme.borderLightInner};
            border-left-color: ${props => props.theme.borderLightInner};
            border-right-color: ${props => props.theme.borderDarkInner};
            border-bottom-color: ${props => props.theme.borderDarkInner};
        }
       }
    }
`