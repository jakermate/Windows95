import React from "react"
import styled from "styled-components"
import Panel from "./Panel"
import Hr from './Hr'
import programsIcon from '../windows98-icons/ico/directory_program_group.ico'
import shutdownIcon from '../windows98-icons/ico/shut_down_normal.ico'
import runIcon from '../windows98-icons/ico/application_hourglass.ico'
import helpIcon from '../windows98-icons/ico/help_book_big.ico'
import searchIcon from '../windows98-icons/ico/search_file.ico'
import settingsIcon from '../windows98-icons/ico/settings_gear.ico'
import documentsIcon from '../windows98-icons/png/directory_open_file_mydocs-0.png'
export default function StartMenu(props) {
  return (
    <Div id="windows_95_start_menu">
      <Panel>
        <div className="flex-row">
          <div id="windows_95_start_menu_title">
            <div className="windows_95_start_menu_title_text">
              <span>Jaker</span>
              <span>95</span>
            </div>
          </div>
          <div>
            <ul>
            <StartItem string={<span><u>P</u>rograms</span>} icon={programsIcon}></StartItem>
            <StartItem string={<span><u>D</u>ocuments</span>} icon={documentsIcon}></StartItem>
            <StartItem string={<span><u>S</u>ettings</span>} icon={settingsIcon}></StartItem>
            <StartItem string={<span><u>F</u>ind</span>} icon={searchIcon}></StartItem>
            <StartItem string={<span><u>H</u>elp</span>} icon={helpIcon}></StartItem>
            <StartItem string={<span><u>R</u>un</span>} icon={runIcon}></StartItem>
            <Hr></Hr>
            <StartItem string={<span>Sh<u>u</u>t Down...</span>} icon={shutdownIcon}></StartItem>
           
            </ul>
          </div>
        </div>
      </Panel>
    </Div>
  )
}
const Div = styled.div`
  position: absolute;
  bottom: 28px;
  left: 0;
  .flex-row {
    flex-direction: row;
    display: flex;
  }
  ul {
      text-align: left;
    list-style: none;
    margin: 0 0 0 32px;
    padding:0;
    li{
        margin-left: 8px;
        padding: 4px;
        font-size: .8rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 160px;
    }
  }
  #windows_95_start_menu_title {
    background: ${(props) =>
      `linear-gradient(to top, ${props.theme.gradientActiveRight}, ${props.theme.gradientActiveLeft})`};
    color: white;
    position: absolute;
    font-size: 2rem;
    top: 0;
    left: 0;
    bottom: 0;
    width: 32px;
    .windows_95_start_menu_title_text {
      position: absolute;
      left: 0;
      bottom: 0;
      transform-origin: bottom-left;
      transform: rotate(-90deg);
    }
  }
`
function StartItem(props){
    return(
        <li>
            <div>
                <img src={props.icon} alt="" style={{
                    width: 24
                }}/>
            </div>
            <div style={{
                marginLeft: 12
            }}>
            {props.string}

            </div>
        </li>
    )
}
