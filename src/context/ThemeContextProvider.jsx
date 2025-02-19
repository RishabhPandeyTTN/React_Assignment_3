import ThemeContext from "./ThemeContext";
import { useState } from "react";

const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState("light")

    const handleThemeChange = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }

    return <ThemeContext.Provider value={{theme , setTheme , handleThemeChange}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider