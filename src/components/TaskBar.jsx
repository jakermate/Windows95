import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
export default function TaskBar(props) {
    return (
        <TaskbarView>
            <Panel>

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
    height: 40px;
    max-width: 100vw;
`