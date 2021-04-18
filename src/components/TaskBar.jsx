import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import InsetPanel from './InsetPanel'
import TaskbarStatusIcon from './TaskbarStatusIcon'
import volume from '../windows98-icons/ico/SoundYel.ico'
export default function TaskBar(props) {
    return (
        <TaskbarView>
            <Panel>
                <div className="flex-row">
                    <div className="start-container"></div>
                    <div className="applications-list"></div>
                    <div className="taskbar-status">
                        <InsetPanel style={{
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TaskbarStatusIcon icon={volume}></TaskbarStatusIcon>
                            <div className="taskbar-status-time time">
                                {
                                    `${new Date().getUTCHours()}:${new Date().getMinutes()}`
                                }
                            </div>
                        </InsetPanel>
                    </div>
                </div>
            </Panel>
        </TaskbarView>
    )
}
const TaskbarView = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    color: black;
    height: 40px;
    max-width: 100vw;
    .flex-row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        height: 100%;
    }
    .applications-list{
        flex-grow: 1;
    }
    .taskbar-status{
        /* height: 100%; */
        box-sizing: border-box;
        margin-top: 4px;
        margin-bottom: 6px;
        margin-right: 10px;
        align-self: stretch;
        min-width: 60px;
    }
    .taskbar-status-container{
        height: 100%;
        
    }
    .time{
        font-size: 12px;
    }
`