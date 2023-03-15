import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PageHero } from "../components";

// import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// import styled from "styled-components";

const Contact = () => {
  // const [formData, setFormData] = useState({ name: "" });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!FormData.name) {
  //     toast.error("please enter your name");
  //     return;
  //   }
  // };
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwpl3bd",
        "template_gj6m2l3",
        form.current,
        "7-3w-uA1Yj64LFwTZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // const notify = (e) => {
  //   e.preventDefault();
  //   toast.success("email sent", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };
  return (
    <Wrapper>
      <PageHero title="contact us" />
      <section className="contact">
        <div className="content">
          {/* <Link to="/listing" className="btn">
            back to listings
          </Link>
          <h2>contact us</h2> */}
        </div>
        <div className="container">
          <div className="contactInfo">
            <h2 className="cont">
              Register your Interest Fill out the form, or call us to Schedule
              an inspection.
            </h2>

            {/* address */}
            <div className="box">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Harris Drive, Orchid Road, Ajiwe. 45A, Alternative
                  Route,Chevron Drive, Lekki, Lagos.
                </p>
              </div>
            </div>
            {/* end of address */}

            {/* phone */}
            <div className="box">
              <div className="icon">
                <BsFillTelephoneFill />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+2348123456780</p>
              </div>
            </div>
            {/* end of phone */}

            {/* email */}
            <div className="box">
              <div className="icon">
                <AiOutlineMail />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>Homeland@gmail.com</p>
              </div>
            </div>
            {/* end of email*/}
          </div>
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <h2>send message</h2>
              <div className="inputBox">
                <label htmlFor="name"></label>
                <input type="text" name="user_name" required="required" />
                <span>full Name</span>
              </div>

              {/* email */}

              <div className="inputBox">
                <input type="email" name="user_email" required="required" />
                <span>email</span>
              </div>

              {/* text area */}
              <div className="inputBox" required="required">
                <textarea
                  name="user_message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <span>Enter your message</span>
              </div>

              {/* submit button */}
              <div className="inputBox">
                <input type="submit" value="send" />
                {/* <ToastContainer /> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, "Poppins";
  }
  .cont{
    margin-top:-11%;
  }
  .contact {
    position: relative;
    min-height: 100vh;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -5%;
  }
  .contact .content {
    min-width: 800px;
    text-align: center;
  }

  .contact .content h2 {
    font-size: 25px;
    margin-top:-10%
    font-weight: 500;
    color: #333;
    
    
  }

  .contact .content p {
    font-weight: 500;
    color: aqua;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  .container .contactInfo {
    width: 50%;
    display: flex;
    flex-direction: column;
  }


  .container .contactInfo .box {
    position: relative;
    padding: 20px 0;
    display: flex;
  }

  .container .contactInfo .box .icon {
    min-width: 60px;
    height: 60px;
    background: 'whitesmoke';
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
  }
  .container .contactInfo .box .text {
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #00bcd4;
    flex-direction: column;
    font-weight: 300;
  }

  .container .contactInfo .box .text h3 {
    font-weight: 500;
    color: blanchedalmond;
    
  }

  .contactForm {
    width: 40%;
    padding: 40px;
    background: whitesmoke;
  }
  .contactForm h2 {
    
    color: #333;
    font-weight: 500;

  }
  .contactForm .inputBox {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }

  .contactForm .inputBox input,
  .contactForm .inputBox textarea {
    width: 100%;
    padding: 10px 0;
    font-style: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }

  .contactForm .inputBox span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }
  .contactForm .inputBox input:focus ~ span,
  .contactForm .inputBox input:valid ~ span,
  .contactForm .inputBox textarea:focus ~ span,
  .contactForm .inputBox textarea:valid ~ span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
  }

  .contactForm .inputBox input[type="submit"] {
    width: 100px;
    background: #00bcd4;
    color: whitesmoke;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
  }
  @media (max-width: 991px) {
    .contact {
      padding: 50px;
    }
    .container {
      flex-direction: column;
    }
    .container .contactInfo {
      margin-bottom: 40px;
    }
    .container .contactInfo,
    .contactForm {
      width: 100%;
    }
  }
`;
export default Contact;
