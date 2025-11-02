import {useEffect, useState} from "react"
import {MdDarkMode, MdLightMode} from "react-icons/md"
const LIGHT_NAME = "light"
const DARK_NAME = "dark"
function getTheme() {
    const prefferedTheme = localStorage.getItem("selected-theme")

    if (prefferedTheme) {
        if ([LIGHT_NAME, DARK_NAME].includes(prefferedTheme)) {
            return prefferedTheme
        } else {
            console.warn("Previously set prefered theme is not supported.")
            localStorage.removeItem("selected-theme")
        }
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("dark")
        return "dark"
    }
    return "light"
}

function ThemeManager({}) {
    const [theme, setTheme] = useState(null)
    const handleThemeSelect = (_theme) => {
        document.querySelector("html").setAttribute("data-theme", _theme)
        localStorage.setItem("selected-theme", _theme)
        setTheme(_theme)
    }
    useEffect(() => {
        const _theme = getTheme()
        handleThemeSelect(_theme)
    }, [])
    return (
        <button
            className="button is-primary"
            onClick={() => handleThemeSelect(theme == DARK_NAME ? LIGHT_NAME : DARK_NAME)}>
            <h5>{theme == DARK_NAME ? <MdDarkMode /> : <MdLightMode />}</h5>
        </button>
    )
}

export default ThemeManager
