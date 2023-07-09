import logo from './logo.svg';
import './App.css';
import CountClick from "./components/count-click";
import ChangeColor from "./components/changeColor";
import AlertComponent from "./components/alertComponent";
import {useState} from "react";
import CheckLoginOut from "./components/checkLoginOut";

function App() {
    let [isShow1, setIsShow1] = useState(true);
    let [isShow2, setIsShow2] = useState(true);
    let [isShow3, setIsShow3] = useState(true);
    let [isShow4, setIsShow4] = useState(true);

    return (
        <>
            {/*Practice 1: */}
            <button onClick={() => {
                setIsShow1(!isShow1)
            }
            }>Show Practice1
            </button>
            {isShow1 && <CountClick props={"Practice 1:"}/>}

            {/*Practice 2:*/}
            <button onClick={() => {
                setIsShow2(!isShow2)
            }
            }>Show Practice2
            </button>
            {isShow2 && <ChangeColor props={"Practice 2:"}/>}

            {/*Practice 3:*/}
            <button onClick={() => {
                setIsShow3(!isShow3)
            }
            }>Show Practice 3
            </button>
            {isShow3 && <AlertComponent props={"Practice 3:"}/>}

            {/*Practice 4:*/}
            <button onClick={() => {
                setIsShow4(!isShow4)
            }
            }>Show Practice 4
            </button>
            {isShow4 && <CheckLoginOut props={"Practice 4:"}/>}
        </>
    );
}

export default App;
