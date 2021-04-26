import React, {useState} from 'react'
import styled from 'styled-components'
export default function ResizeAnchors(props) {
    const [startPosition, setStartPosition] = useState(null)
    const [currentPosition, setCurrentPosition] = useState(null)
    function startDrag(e){
        setStartPosition(e.nativeEvent.clientX)
    }
    function endDrag(e){
        setStartPosition(null)
    }
    return (
        <Root>
            <div className="left windows_95_resize_handle" onMouseMoveCapture={e => setCurrentPosition(e.clientX)} onMouseDown={e => startDrag(e)} onMouseUp={e => endDrag(e)}></div>
            <div className="right windows_95_resize_handle"></div>
            <div className="bottom windows_95_resize_handle"></div>
            <div className="top windows_95_resize_handle"></div>
            <div className="corner windows_95_resize_handle"></div>
        </Root>
    )
}
const Root = styled.div`
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    .windows_95_resize_handle{
        position: absolute;
    }
    .left{
        cursor: ew-resize;
            width: 6px;
            top:0;
            bottom:0;
            left:0
    }
    .right{
        cursor: ew-resize;

        width: 6px;
        top:0;
        bottom:0;
        right:0
    }
    .bottom{
        cursor: ns-resize;
        height: 6px;
        bottom:0;
        left:0;
        right:0;
    }
    .top{
        cursor: ns-resize;

        height: 6px;
        top:0;
        left:0;
        right:0;
    }
    .corner{
        cursor: nwse-resize;
        width: 10px;
        height: 10px;
        right:0;
        bottom:0;
    }
`