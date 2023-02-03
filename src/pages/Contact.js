import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1>Contact</h1>
            <ContactForm />
        </div>
    );
}

export default Contact;