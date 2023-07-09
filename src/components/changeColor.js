import {useState} from "react";

export default function ChangeColor({props}) {
    let [color, setColor] = useState("black");
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setTimeout(() => {
        setColor("#"+randomColor);
    }, 1000);

    return (
        <>
            <h1>{props}</h1>
            <div style={{textAlign: "center", padding: 30}}>
                <div style={{
                        backgroundColor: color,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}>
                </div>
            </div>
        </>
    )
}