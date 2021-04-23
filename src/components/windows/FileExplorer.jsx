import React from 'react'
import Window from './Window'
export default function FileExplorer(props) {
    return (
        <Window width={props.width || 300} height={props.height || 200}>
        <div className="windows_95_file_explorer">

        This is a window 
        </div>
        </Window>
    )
}
