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
function App() {
  // open window state
  const [openApps, setOpenApps] = useState(["welcome"])
  const [closedApps, setClosedApps] = useState([
    "asteroid_blaster",
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
    if(e.target.id === "win95_desktop"){
      setRightClickPosition([e.clientX, e.clientY])
    setClickMenu(true)
    }

  }
  function onClick(e) {
    if(e.target.id !== "context-menu"){
      setClickMenu(false)
    }
  }
  return (
    <div className="windows-application">
      <Desktop>
        <Grid>
          <Shortcut
            shortcut_string={"My Computer"}
            shortcut_icon={system}
          ></Shortcut>
          <Shortcut
            shortcut_string={"Resume.pdf"}
            shortcut_icon={document}
          ></Shortcut>
          <Shortcut
            shortcut_string={"About Jake"}
            shortcut_icon={jm_logo}
          ></Shortcut>
          <Shortcut
            shortcut_string={"Asteroid Blaster"}
            shortcut_icon={planet}
          ></Shortcut>
        </Grid>
        <Intro></Intro>
        <TaskBar openApps={openApps}></TaskBar>
        <RightClickMenu position={rightclickPosition}  active={clickMenu}></RightClickMenu>
      </Desktop>
    </div>
  )
}

export default App
