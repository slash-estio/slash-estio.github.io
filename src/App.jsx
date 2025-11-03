import {useEffect, useRef, useState} from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {clamp} from "./utils/math"

function App() {
    const [yPos, setYPos] = useState(0)
    const homeRef = useRef()
    const aboutRef = useRef()
    const handleScroll = (e) => {
        setYPos((oldValue) => {
            const newValue = oldValue + e.deltaY
            // Handle scrolling
            if (newValue >= 500) aboutRef.current.scrollIntoView({behavior: "smooth"})
            else homeRef.current.scrollIntoView({behavior: "smooth"})
            // Save scroll position
            return clamp(newValue, 0, 1000)
        })
    }

    useEffect(() => {
        window.addEventListener("wheel", handleScroll)
        window.addEventListener("touchmove", handleScroll)

        return () => {
            window.removeEventListener("wheel", handleScroll)
            window.removeEventListener("touchmove", handleScroll)
        }
    }, [])
    return (
        <div className="content">
            <div
                ref={homeRef}
                className="content-section">
                <h1>{yPos}</h1>
            </div>
            <div
                ref={aboutRef}
                className="content-section">
                <h1>{yPos}</h1>
            </div>
        </div>
    )
}

export default App
