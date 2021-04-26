import React from 'react'
import AboutMeApplication from './Intro'
import Window from './Window'
import PlanetBlaster from './PlanetBlaster'
import InternetExplorer from '../apps/InternetExplorer'

export default function Application(props) {
    return (
        <Window width={props.app.width} height={props.app.height} stack={props.stack} modifyApp={props.modifyApp} reorderStack={props.reorderStack} visible={props.app.visibility} closeApp={props.closeApp} app={props.app}>
            {/* selectively render different application content into window (use props.app for reference object) */}
            {
                props.app.app_name === "about" &&
                <AboutMeApplication></AboutMeApplication>
            }
            {
                props.app.app_name === "planet_blaster" &&
                <PlanetBlaster></PlanetBlaster>
            }
            {
                props.app.app_name === "internet_explorer" &&
                <InternetExplorer></InternetExplorer>
            }
        </Window>
    )
}
