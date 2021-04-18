import logo from "./logo.svg"
import "./App.css"
import Shortcut from "./components/Shortcut"
import Desktop from "./components/Desktop"
import Grid from "./components/DesktopGrid"
import TaskBar from "./components/TaskBar"
import Intro from './components/windows/Intro'
function App() {
  return (
    <div className="windows-application">
      <Desktop>
        <Grid>
          <Shortcut
            shortcut_string={"My Computer"}
            shortcut_icon={""}
          ></Shortcut>
          <Shortcut
            shortcut_string={"Resume.pdf"}
            shortcut_icon={""}
          ></Shortcut>
        </Grid>
        <Intro></Intro>
        <TaskBar></TaskBar>
      </Desktop>
    </div>
  )
}

export default App
