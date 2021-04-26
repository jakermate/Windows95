import React, {useState} from 'react'
import MenuRow from '../MenuRow'
import ExplorerControlBar from '../windows/ExplorerControlBar'

export default function InternetExplorer(props) {
    const [URL, setURL] = useState("https://www.github.com")
    return (
        <div>
            <MenuRow></MenuRow>
            <ExplorerControlBar></ExplorerControlBar>
            <div className="windows_95_internet_explorer_content">
                <iframe src={URL} frameborder="0"></iframe>
            </div>
        </div>
    )
}
