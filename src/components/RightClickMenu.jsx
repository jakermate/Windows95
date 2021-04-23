import React from 'react'
import Panel from './Panel'
import styled from "styled-components"
import Hr from './Hr'
export default function RightClickMenu(props) {
    return (
        <Root id="context-menu" style={{
            display: props.active ? "block" : "none",
            left: props.position[0],
            top: props.position[1]
        }}>
            <Panel>
                <ul>
                    <li>Arrange Icons</li>
                    <li>Line up Items</li>
                    <Hr style={{
                        margin: "2px 0"
                    }}></Hr>
                    <li><u>P</u>aste</li>
                    <li>Paste <u>S</u>hortcut</li>
                    {/* <li>Undo Rename</li> */}
                    <li>Ne<u>w</u></li>
                    <Hr style={{
                        margin: "2px 0"
                    }}></Hr>
                    <li>P<u>r</u>operties</li>
                </ul>
            </Panel>
        </Root>
    )
}
const Root = styled.div`
    background: ${props => props.theme.background};
    min-width: 120px;
    min-height: 100px;
    color: black;
    z-index: 100;
    position: fixed;
    ul{
        padding: 0;
        margin: 0;
        position: relative;
        list-style: none;
        li{
            text-decoration: none;
            font-size: 10px;
            padding: 3px;
            padding-left: 1rem;
            :hover{
                color: white;
                background: ${props => props.theme.gradientActiveLeft};
            }
        }
    }
`