import { useState, useEffect } from "react";
import bus from '../../utility/bus/bus'

import './style.scss';

function Message() {
    let [message, setMessage] = useState("");
    let [visibility, setVisibility] = useState(false);

  useEffect(() => {
    bus.addListener("flash", ({ message }) => {
      setVisibility(true);
      setMessage(message);
      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

    return (
        visibility && (
      <div className="message">{message}</div>
    )
    )
}

export default Message
