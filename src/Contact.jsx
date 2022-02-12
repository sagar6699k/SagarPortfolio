import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "emailjs-com";
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3k1gt5l",
                "template_em1xlbd",
                form.current,
                "user_R4srlpRZssN0uShSLsxOC"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
        );
        
        e.target.reset()
    };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">
                                Feel free to reach out to me. Connect with me via phone:
                            </p>
                            <p className="hire__text white">
                                <strong>+919545166818</strong> or email{" "}
                                <strong>sagarkurewar@gmail.com</strong>
                                
                            </p>
                        </div>
                        <div className="input__box">
            
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" className="contact name" placeholder="From name *" name="from_name" />
                                <input type="text" className="contact email" placeholder="To name *" name="to_name"  />
                                
                                <textarea name="message" id="message" placeholder="Write Your message"  ></textarea>
                              
                                <input className="btn contact pointer" type="submit" value="Submit" />
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col__2 contact__img__div">
                  
                    <img
                        src="https://static.wixstatic.com/media/2be1ce_864567900845418ebfd61e297637464d~mv2.gif"
                        alt=""
                        className="contact__img"
                    />
                </div>
            </div>

            <div className="contact_links">
                <a href="https://github.com/sagar6699k">
                    <img
                        src="https://img.icons8.com/fluency/96/000000/github.png"
                        alt=""
                        className="contact_link_img"
                    />
                </a>

                <a href="https://www.linkedin.com/in/sagar-kurewar/">
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                        alt=""
                        className="contact_link_img"
                    />
                </a>

                <a href="https://www.instagram.com/beingsk_sagar/">
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                        alt=""
                        className="contact_link_img"
                    />
                </a>

                <a href="https://twitter.com/SKurewar">
                    <img
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                        alt=""
                        className="contact_link_img"
                    />
                </a>
            </div>
        </div>
    );
}

export default Contact;
