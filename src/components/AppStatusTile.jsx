import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
export default function AppStatusTile(props) {
    return (
        <Root>
            <Panel>
                <div className="flex-row">
                    <div className="flex-row" style={{
                        paddingLeft: '3px'
                    }}>
                        <img src={props.icon} alt="App_Icon" style={{
                            width: "16px"
                        }}/>
                    </div>
                    <div style={{
                        paddingLeft: 4
                    }}>
                        {props.app_title}
                    </div>
                </div>
            </Panel>
        </Root>
    )
}
const Root = styled.div`
    flex-grow: 1;
    max-width: 180px;
    height: 28px;
    margin-right: 6px;
    font-size: 12px;
    .flex-row{
        align-items: center;
        flex-direction: row;
        display: flex;
    }
    
`