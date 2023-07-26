import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  const[popup, setPopup] = useState(false);
  const handleClick=()=>{
    setPopup(!popup)
  }
  const close=()=>{
    setPopup(false);
  }
  return (
    <div>
      {popup?
    <div className="popup">
      <h3> Join Our Newsletter</h3>
      <span onClick={close} className="times"> &times;</span>
      <p> signup today for free and be the first<br></br>to get notified on new updates</p>
      <input className="text" placeholder="enter your email address" type="text"></input>
      <button className="subscribe"> Subscribe Now</button>

    </div>:""}
    <button onClick={handleClick} className="btn">show popup</button>
    </div>
  );
}
