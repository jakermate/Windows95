import React from 'react'
import Application from './windows/Window'
export default function WindowManager(props) {
    return (
        <div>
            {
                props.apps.map((appObject, index) => {
                    return(
                        <Application key={appObject.id} app={appObject} closeApp={props.closeApp}>{index}</Application>
                    )
                })
            }
        </div>
    )
}
