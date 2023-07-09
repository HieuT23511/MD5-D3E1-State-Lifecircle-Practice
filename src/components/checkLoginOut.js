import {useState} from "react";

export default function CheckLoginOut({props}) {
    let [isLoggedIn, setLoggedIn] = useState(false);
    let [display, setDisplay] = useState("Please Login")
    let [contentButton, setContentButton] = useState("Login")
    const handleLogin = () => {
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false)
    }
    return (
        <>
            <h1> {props} </h1>
            <div style={{textAlign: "center", padding: 30}}>
                <h2>{display}</h2>
                <button onClick={()=>{
                    handleLogin()
                    setDisplay("Welcome")
                    setContentButton("Logout")
                    if(isLoggedIn){
                        handleLogout()
                        setDisplay("Please Login")
                        setContentButton("Login")
                    }
                }}
                >{contentButton}</button>
            </div>

        </>
    )


}