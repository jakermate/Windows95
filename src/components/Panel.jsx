import React from 'react'
import styled from 'styled-components'

export default styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    border-left-color: white;
    border-right-color: black;
    border-top-color: white;
    border-bottom-color: black;
    background: #cbcbcb;
    :before{
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        content: "";
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        border-right-color: #929292;
        border-left-color: #e5e5e5;
        border-top-color: #e5e5e5;
        border-bottom-color: #929292

    }
`