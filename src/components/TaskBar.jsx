import React from "react"
import styled from "styled-components"
import Panel from "./Panel"
import InsetPanel from "./InsetPanel"
import TaskbarStatusIcon from "./TaskbarStatusIcon"
import volume from "../windows98-icons/ico/SoundYel.ico"
import AppStatusTile from "./AppStatusTile"
import Button from "./Button"
import testicon from "../windows98-icons/ico/key_webfile.ico"
import windows from "../windows98-icons/ico/windows.ico"
export default function TaskBar(props) {
  return (
    <TaskbarView>
      <Panel>
        <div
          className="flex-row"
          style={{
            paddingLeft: 2,
          }}
        >
          <div className="start-container">
            <Button>
              <img
                src={windows}
                alt=""
                style={{
                  height: 22,
                }}
              />
              <div style={{
                  marginLeft: 2
              }}>Start</div>
            </Button>
          </div>

          <div className="taskbar_applications_list">
            {props.openApps.map((openApp) => {
              return (
                <AppStatusTile
                  icon={testicon}
                  app_title={"Test App"}
                ></AppStatusTile>
              )
            })}
          </div>
          <div className="taskbar-status">
            <InsetPanel
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TaskbarStatusIcon icon={volume}></TaskbarStatusIcon>
              <div className="taskbar-status-time time">
                {`${new Date().getHours()}:${new Date().getMinutes()}${
                  new Date().getHours > 12 ? " PM" : " AM"
                }`}
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
  left: 0;
  right: 0;
  color: black;
  height: 40px;
  max-width: 100vw;
  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 100%;
  }
  .applications-list {
    flex-grow: 1;
  }
  .taskbar-status {
    /* height: 100%; */
    box-sizing: border-box;
    margin-top: 4px;
    margin-bottom: 6px;
    margin-right: 10px;
    align-self: stretch;
    min-width: 60px;
  }
  .taskbar-status-container {
    height: 100%;
  }
  .time {
    font-size: 12px;
    margin-right: 4px;
  }
  .taskbar_applications_list {
    height: 100%;
    flex-grow: 1;
    padding: 4px;
    box-sizing: border-box;
  }
`
