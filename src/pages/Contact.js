import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="
                flex
                py-10
                px-12
                shadow-md
                shadow-grey-text/10
                mb-24
            ">
                <h1 className="
                    text-xl
                ">Contact</h1>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;