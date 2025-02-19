import { useContext } from "react"
import LoginContext from "../context/LoginContext"
import UserProfile from "./UserProfile"
import "./LoginCompStyles.css"

const LoginComp = () => {
    const { loginStatus, setLoginStatus, username, handleUsername, display, email, handleEmail, handleLogin } = useContext(LoginContext)

    const handleSubmit = (event)=>{
        event.preventDefault()

        handleLogin()
    }
    return <div>
        <UserProfile></UserProfile>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input_box">
                    <div>
                        {loginStatus || <input
                            type="text"
                            onChange={handleUsername}
                            value={username}
                            placeholder="Enter your username"
                            className="username"
                            required
                        />}
                    </div>
                    <div>
                        {loginStatus || <input
                            type="email"
                            onChange={handleEmail}
                            value={email}
                            placeholder="Enter your email"
                            className="email"
                            required
                        />}
                    </div>
                </div>
                <button type="submit"  id="loginBtn" className={loginStatus ? "btn_logout" : "btn_login"}>
                    {
                        loginStatus ? "logout" : "login"
                    }
                </button>
            </form>

        </div>
    </div>
}

export default LoginComp