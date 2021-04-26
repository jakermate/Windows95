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
import Application from "./components/apps/Application"
import WindowManager from "./components/WindowManager"
import internet_explorer from './windows98-icons/ico/msie1.ico'
function App() {
  // open window state
  const [openApps, updateOpenApps] = useState([new Application('about', jm_logo, "About Jake Miller.")])
 
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
    if(openApps.length < 12){
      // get application reference object
      let index = apps.map(appObj=>appObj.application).indexOf(applicationString)
      updateOpenApps(old => [...old, new Application(applicationString, apps[index].icon, apps[index].string) ])
    }

  }
  function closeApp(application_id){
    console.log('closing app with id: ' + application_id)
      // get index via app ID
      let index = openApps.map(appObj=>appObj.id).indexOf(application_id)
      // remove from array and set to state
      let newOpenApps = [...openApps]
      newOpenApps.splice(index ,1)
      updateOpenApps(newOpenApps)
  }
  
  function modifyApp(app_id, updated_app_object){
    let index = openApps.map(appObj=>appObj.id).indexOf(app_id)
    let newOpenApps = [...openApps]
      newOpenApps.splice(index, 1, updated_app_object)
      updateOpenApps(newOpenApps)
  }
  useEffect(()=>{
    console.log(openApps)
  },[openApps])
  const apps = [
    {
      string: "My Computer",
      icon: system,
      application: "my_computer",
      width: 500,
      height: 300
    },
    {
      string: "Resume.pdf",
      icon: document,
      application: "resume"
    },
    {
      string: "About Jake Miller",
      icon: jm_logo,
      application: "about"
    },
    {
      string: "Planet Blaster",
      icon: planet,
      application: "planet_blaster"
    },
    {
      string: "Internet Explorer",
      icon: internet_explorer,
      application: "internet_explorer"
    }
  ]
  return (
    <div className="windows-application">
      <Desktop>
        <Grid>
          {apps.map((appObj) => {
            return (
              <Shortcut
                application={appObj.application}
                shortcut_string={appObj.string}
                shortcut_icon={appObj.icon}
                openApp={openApp}
              ></Shortcut>
            )
          })}
  
        </Grid>
        {/* open applications */}
       <WindowManager apps={openApps} closeApp={closeApp} modifyApp={modifyApp}></WindowManager>
        <TaskBar openApps={openApps} modifyApp={modifyApp}></TaskBar>
        <RightClickMenu
          position={rightclickPosition}
          active={clickMenu}
        ></RightClickMenu>
      </Desktop>
    </div>
  )
}

export default App
