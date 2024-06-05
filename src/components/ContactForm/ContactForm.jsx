import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button.jsx";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {
  const [name, setName] = useState("kishan");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text={"VIA SUPPORT CHAT"}
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={`${styles.form_control}`}>
            <label htmlFor="name">Name</label>
            <input type="Name" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="email">E-mail</label>
            <input type="email" />
          </div>
          <div className={`${styles.form_control}`}>
            <label htmlFor="text">Text</label>
            {/* <input type="text" /> */}
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="contact.svg" alt="" srcset="" />
      </div>
    </section>
  );
}

export default ContactForm;
