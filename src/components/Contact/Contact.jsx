import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [done, setDone] = useState(false);
    const [user_name, setUser] = useState("");
    const [user_email, setEmail] = useState("");

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bwae1i6', 'template_7vu7uvm', form.current, 'L2FZKD5tDbFcENWjL')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setUser("");
                setEmail("");
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="span">
                    <span>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name='user_name'
                        className='user'
                        placeholder='Name'
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input
                        type="email"
                        name='user_email'
                        className='user'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea name="message" className='user' placeholder='Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>
                        {done && "Thanks for contact me.. I will touch you in your mail soon!"}
                    </span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact