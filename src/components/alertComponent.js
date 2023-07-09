import {useState} from "react";

export default function AlertComponent({props}) {

    const [display, setDisplay] = useState(true)
    const deleteComponents = () => {
            if(window.confirm("The component is going to be unmount..."))
        setDisplay(!display)
    }
    let content;
    if (display) {
        content = "Hello !!!"
    }
    return (
        <>
            <h1>{props}</h1>
            <div style={{textAlign: "center", padding: 30}}>
                <h2>{content}</h2> <br/>
                <button onClick={deleteComponents}>Delete Component</button>
            </div>
        </>
    )
}