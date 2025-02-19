import { useContext } from "react"
import LoginContext from "../context/LoginContext"
import './UserProfileStyles.css'

const UserProfile = ()=>{
    const {loginStatus , username , email} = useContext(LoginContext);
    return <div className="greet">
        {
            loginStatus ? <div>
                {
                    `Welcome ${username}, your email is ${email}`
                }
            </div> : 
            <div>
                Please login
            </div>
        }
    </div>
}

export default UserProfile