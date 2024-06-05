import React from "react";
import { FaMessage } from "react-icons/fa6";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={`${styles.primary_btn}`}>
        {props.icon}
        {props.text}
      </button>
    </div>
  );
}

export default Button;
