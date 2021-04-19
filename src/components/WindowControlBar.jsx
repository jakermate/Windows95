import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
export default function WindowControlBar(props) {
    return (
        <Root className="control_bar handle">
            <div className="control_bar_icon handle">
                <img src={props.icon} alt="" style={{
                    width: 14
                }}/>
            </div>
            <div className="control_bar_title handle">
                {props.app_title}
            </div>
            <div className="control_bar_controls">
                <SquareButton>
                    <Panel>
                    _
                    </Panel>
                </SquareButton>
                <SquareButton style={{
                    marginRight: '3px'
                }}>
                    <Panel>
                        
                    </Panel>
                </SquareButton>
                <SquareButton>
                    <Panel>
                        x
                    </Panel>
                </SquareButton>
            </div>
        </Root>
    )
}
const Root = styled.div`
    /* width: 100%; */
    height: 20px;
    background: linear-gradient(to right, #000088,  #1084d0);
    margin: 3px;
    display: flex;
    color: black;
    flex-direction: flex-row;

    .control_bar_title{
        flex: 1;
        color: white;
        font-size: 10px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .control_bar_controls{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 3px;
    }
    .control_bar_icon{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 3px;
    }
`
const SquareButton = styled.div`
    width: 16px;
    height: 16px;
`