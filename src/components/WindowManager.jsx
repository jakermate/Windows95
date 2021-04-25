import React, {useEffect, useState} from 'react'
import Application from './windows/Application'
export default function WindowManager(props) {
    const [stack, setStack] = useState(props.apps.map(app=>app.id))
    function reorderStack(newFocusID){
        console.log('new focus ' + newFocusID)
        let oldStack = [...stack]
        // get index of application with ID for new focus
        let index = oldStack.indexOf(newFocusID)
        // remove to append to front of array
        let focusedApp = oldStack.splice(index, 1)
        oldStack.unshift(focusedApp[0])
        setStack(oldStack)
    }
    useEffect(()=>{
        let newApps = props.apps
        let newStack = [...stack]
        // add
        newApps.forEach((app)=>{
            if(!stack.includes(app.id)){
                newStack.push(app.id)
            }
        })
        // remove
        newStack.forEach((app, indx)=>{
            if(!props.apps.map(app=>app.id).includes(app)){
                newStack.splice(indx, 1)
            }
        })

        // set
        setStack(newStack)

    },[props.apps])
    return (
        <div>
            {
                props.apps.map((appObject, index) => {
                    return(
                        <Application stack={stack} reorderStack={reorderStack}  x={props.apps[props.apps.length - 1].x} y={props.apps[props.apps.length - 1].y} key={appObject.id} app={appObject} closeApp={props.closeApp} modifyApp={props.modifyApp}>{index}</Application>
                    )
                })
            }
        </div>
    )
}
