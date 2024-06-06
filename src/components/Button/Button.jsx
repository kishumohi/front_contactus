import React from "react";
import { FaMessage } from "react-icons/fa6";
import styles from "./Button.module.css";

function Button({ iswhitebtn, icon, text }) {
  return (
    <div>
      <button
        className={iswhitebtn ? styles.secondory_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
