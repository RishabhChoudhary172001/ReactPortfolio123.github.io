import React, { useContext, useState, useRef } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Mail from "../../img/mail.png";
import Location from "../../img/location.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from './../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o1t6xzm",
        "template_wii5r5j",
        formRef.current,
        "kY5d1sSU1u3MnTDYY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon"></img>
              +91 6264450838
            </div>
            <div className="c-info-item">
              <img src={Mail} alt="" className="c-icon"></img>
              rishabhchoudhary172001@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Location} alt="" className="c-icon"></img>
              50 Chouhan nagar, Indore (M.P.)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>what's your story?</b>Get it touch. Always available for
            freelancing if the right project comes along, me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" style={{ backgroundColor: darkMode && "#333" }} />
            <button>Submit</button>
            {done && "Thank You"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
