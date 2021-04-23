import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import Shortcut from "./components/Shortcut"
import Desktop from "./components/Desktop"
import Grid from "./components/DesktopGrid"
import TaskBar from "./components/TaskBar"
import Intro from "./components/windows/Intro"
import system from "./windows98-icons/png/computer_explorer_cool-0.png"
import document from "./windows98-icons/png/document-0.png"
import planet from "./windows98-icons/png/internet_connection_wiz-0.png"
import Button from "./components/Button"
import jm_logo from "./jm_logo_32.png"
import RightClickMenu from "./components/RightClickMenu"
import FileExplorer from "./components/windows/FileExplorer"
import Window from "./components/windows/Window"
function App() {
  // open window state
  const [openApps, setOpenApps] = useState(["about"])
  const [closedApps, setClosedApps] = useState([
    "planet_blaster",
    "my_computer",
    "contact",
  ])
  // selected desktop icon state
  const [selectedShortcut, setSelectedShortcut] = useState(null)
  // right click option menu
  const [clickMenu, setClickMenu] = useState(false)
  const [rightclickPosition, setRightClickPosition] = useState([0, 0])
  useEffect(() => {
    window.addEventListener("contextmenu", onRightClick)
    window.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("contextmenu", onRightClick)
      window.removeEventListener("click", onClick)
    }
  })
  function onRightClick(e) {
    e.preventDefault()
    if (e.target.id === "win95_desktop") {
      setRightClickPosition([e.clientX, e.clientY])
      setClickMenu(true)
    }
  }
  function onClick(e) {
    if (e.target.id !== "context-menu") {
      // close context menu
      setClickMenu(false)
    }
  }

  //  application lifecycle
  function openApp(applicationString){
    // this should check to see if application is already open, and if not, add to open applciations list.
    if(!isAppOpen(applicationString)){
      setOpenApps(old => [...old, applicationString])
    }

  }
  function isAppOpen(app){
    if(openApps.includes(app)){
      return true
    }
    return false
  }
  const desktopIcons = [
    {
      string: "My Computer",
      icon: system,
      application: "my_computer"
    },
    {
      string: "Resume.pdf",
      icon: document,
      application: "resume"
    },
    {
      string: "About Jake",
      icon: jm_logo,
      application: "about"
    },
    {
      string: "Planet Blaster",
      icon: planet,
      application: "planet_blaster"
    }
  ]
  return (
    <div className="windows-application">
      <Desktop>
        <Grid>
          {desktopIcons.map((iconObj) => {
            return (
              <Shortcut
                action={openApp(iconObj.application)}
                application={iconObj.application}
                shortcut_string={iconObj.string}
                shortcut_icon={iconObj.icon}
              ></Shortcut>
            )
          })}
  
        </Grid>
        {/* open applications */}
        <Intro></Intro>
        <Window x={300} y={400} width={400} height={340}></Window>
        <FileExplorer></FileExplorer>
        <TaskBar openApps={openApps}></TaskBar>
        <RightClickMenu
          position={rightclickPosition}
          active={clickMenu}
        ></RightClickMenu>
      </Desktop>
    </div>
  )
}

export default App
