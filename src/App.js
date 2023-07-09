import logo from './logo.svg';
import './App.css';
import CountClick from "./components/count-click";
import ChangeColor from "./components/changeColor";
import AlertComponent from "./components/alertComponent";
import {useState} from "react";

function App() {
    let [isShow1, setIsShow1] = useState(true);
    let [isShow2, setIsShow2] = useState(true);
    let [isShow3, setIsShow3] = useState(true);

    return (
        <>
            <button onClick={() => {
                setIsShow1(!isShow1)
            }
            }>Show Practice1
            </button>
            {isShow1 && <CountClick props={"Practice 1:"}/>}

            <button onClick={() => {
                setIsShow2(!isShow2)
            }
            }>Show Practice2
            </button>
            {isShow2 && <ChangeColor props={"Practice 2:"}/>}

            <button onClick={() => {
                setIsShow3(!isShow3)
            }
            }>Show Practice 3
            </button>
            {isShow3 && <AlertComponent props={"Practice 3:"}/>}
        </>
    );
}

export default App;
