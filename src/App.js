import logo from "./logo.svg"
import "./App.css"
import {useState} from 'react'
import Shortcut from "./components/Shortcut"
import Desktop from "./components/Desktop"
import Grid from "./components/DesktopGrid"
import TaskBar from "./components/TaskBar"
import Intro from './components/windows/Intro'
import system from './windows98-icons/png/computer_explorer_cool-0.png'
import document from './windows98-icons/png/document-0.png'
import planet from './windows98-icons/png/internet_connection_wiz-0.png'

function App() {
  const [openApps, setOpenApps] = useState(["welcome"])
  const [closedApps, setClosedApps] = useState(["asteroid_blaster", "my_computer", "contact"])

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
            shortcut_string={"Asteroid Blaster"}
            shortcut_icon={planet}
          ></Shortcut>
        </Grid>
        <Intro></Intro>
        <TaskBar></TaskBar>
      </Desktop>
    </div>
  )
}

export default App
