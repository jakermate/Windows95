import React from 'react'
import styled from 'styled-components'
import InsetPanel from './InsetPanel'
import Panel from './Panel'
export default function AppStatusTile(props) {
    function toggleVisibility(){
        console.log('logg')
        props.modifyApp(props.app.id, {...props.app, minimized: !props.app.minimized})

    }

    return (
        <Root onClick={e => toggleVisibility()} minimized={props.app.minimized}>
            <DeterminedPanel minimized={props.app.minimized}>
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
            </DeterminedPanel>
        </Root>
    )
}

function DeterminedPanel(props){
    if( !props.minimized) return <InsetPanel>{props.children}</InsetPanel>
    return <Panel>{props.children}</Panel>
   
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