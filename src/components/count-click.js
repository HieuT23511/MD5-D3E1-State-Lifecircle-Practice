import {useState} from "react";

export default function CountClick({props}) {
    let [result, setResult] = useState(0);

    const HandleClick = (check) => {
        result = check === "decrease" ? result - 1 : result + 1;
        setResult(result);
    }
    return (
        <>
            <h1>{props}</h1>
            <div style={{ textAlign: "center", padding: 30 }}>

            <span>
                <button onClick={()=> HandleClick("decrease")}>Decrease</button>
                <span style={{margin: "0 20px"}}>{result}</span>
                <button onClick={()=> HandleClick("increase")}>Increase</button>
            </span>
            </div>
        </>
    )
}