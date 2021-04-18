import React from 'react'

export default function TaskbarStatusIcon(props) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            marginRight: "8px"
        }}>
            <img src={props.icon} alt="" style={{
                height: "100%"
            }}/>
        </div>
    )
}
