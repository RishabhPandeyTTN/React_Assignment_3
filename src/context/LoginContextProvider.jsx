import LoginContext from "./LoginContext";
import { useState } from "react";

const LoginContextProvider = ({ children }) => {

    const [loginStatus, setLoginStatus] = useState(false)
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")

    const handleUsername = (event)=>{
        setUsername(event.target.value)
    }

    const handleEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handleLogin = () => {
        if(username == null || username == undefined || username.trim() == ""){
            alert("Username cant be empty")
            return
        }
        if(email == null || email == undefined || email.trim() == ""){
            alert("Email cant be empty")
            return
        }
        console.log("from : handle login" , username)
        setLoginStatus(!loginStatus)
    }

    const display = ()=>{
        console.log(username)
        console.log(email)
    }

    return (<LoginContext.Provider value={{ loginStatus, setLoginStatus, username, email, handleUsername, display, handleEmail, handleLogin }}>
        {children}
    </LoginContext.Provider>)
}

export default LoginContextProvider