import {useEffect, useRef, useState} from "react"
import ThemeManager from "./components/ThemeManager"

function App() {
    return (
        <>
            <nav className="navbar">
                <ThemeManager />
            </nav>
            <div className="container is-fullhd">
                    This container is <strong>fullwidth</strong> <em>until</em> the
                    <code>$fullhd</code> breakpoint.
            </div>
        </>
    )
}

export default App
