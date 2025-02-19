import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import './ThemeCompStyles.css'

const ThemeComp = ()=>{
    const {theme , setTheme , handleThemeChange} = useContext(ThemeContext)
    return <div>
        <div class={theme} id="theme_box">
            {
                `This is ${theme} theme`
            }
        </div>
        <div>
            <button onClick={handleThemeChange} className="themeBtn">Change Theme</button>
        </div>
    </div>
}

export default ThemeComp