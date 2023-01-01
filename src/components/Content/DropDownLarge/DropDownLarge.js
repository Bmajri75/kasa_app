import style from "./DropDownLarge.module.scss";
import React, { useState } from "react";

function DropDown({ name, button, text }) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="d-flex flex-column">
      <div className={`d-flex ${style.content}`}>
        <p>{name}</p>
        <img src={button} alt="button Drop" onClick={toggleText}></img>
      </div>
      <div className={style.texteContent}>{isTextVisible && <p>{text}</p>}</div>
    </div>
  );
}

export default DropDown;
