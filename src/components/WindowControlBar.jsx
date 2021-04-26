import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
export default function WindowControlBar(props) {
    return (
        <Root className="control_bar">
            <div className="control_bar_icon ">
                <img src={props.app.icon} alt="" style={{
                    width: 14
                }}/>
            </div>
            <div className="control_bar_title ">
                {props.app.app_title}
            </div>
            <div className="control_bar_controls">
                <SquareButton>
                    <Panel onClick={e => props.modifyApp(props.app.id, {...props.app, minimized: true})}>
                    _
                    </Panel>
                </SquareButton>
                <SquareButton onClick={e => props.modifyApp(props.app.id, {...props.app, maximized: true})} style={{
                    marginRight: '3px'
                }}>
                    <Panel>
                        
                    </Panel>
                </SquareButton>
                <SquareButton onClick={e => props.closeApp(props.app.id)}>
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
    position: relative;
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
        pointer-events: none;
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
        pointer-events: none;
    }
`
const SquareButton = styled.div`
    width: 16px;
    height: 16px;
    cursor: pointer;
`