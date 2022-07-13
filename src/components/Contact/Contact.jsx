import React from 'react';
import Header from '../Header/Header';
import "./Contact.css"

const Contact = props => {
    return (
        <div className="content">
            <div className='heading'>
            <Header
                heading='Contact Me!'
            />
            </div>
            <p className="sub">Drop an E-mail</p>
            <br>
            </br>
            <div className="Form" >
            <form action="https://send.pageclip.co/pyq7fzQS8HJxBmX1ynAlN9WKYEgmlrUo/contact-me" class="pageclip-form" method="post">    
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        class='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        class='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <br>
                    </br>
                    <a href='/portfolio2#'>
                        <button type='submit' class='contact-btn btn-text1 pageclip-form__submit'>
                            Send Email
                        </button> 
                    </a>
                    </form>

            </div>
        </div>
    );
};


export default Contact;