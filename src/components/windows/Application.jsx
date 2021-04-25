import React from 'react'
import AboutMeApplication from './Intro'
import Window from './Window'
import PlanetBlaster from './PlanetBlaster'

export default function Application(props) {
    return (
        <Window visible={props.app.visibility} closeApp={props.closeApp} app={props.app}>
            {/* selectively render different application content into window (use props.app for reference object) */}
            {
                props.app.app_name === "about" &&
                <AboutMeApplication></AboutMeApplication>
            }
            {
                props.app.app_name === "planet_blaster" &&
                <PlanetBlaster></PlanetBlaster>
            }
        </Window>
    )
}
