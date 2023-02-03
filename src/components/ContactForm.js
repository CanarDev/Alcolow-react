import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function ContactForm() {

    return (
        <div className="
            max-w-2xl
            w-full
            mx-3
            md:mx-auto
            rounded-3xl
            bg-grey
            py-12
            px-14
        ">
            <h2 className="
                text-5xl
                text-center
            ">Formulaire</h2>
            <form id="contactForm" action="/" className="
                py-6
                space-y-4
            ">
                <div className="space-y">
                    <label>Name</label>
                    <input name="" type="text" placeholder="Your name" className="
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                    "/>
                </div>
                <div className="space-y">
                    <label>Email</label>
                    <input name="" type="text" placeholder="Your email" className="
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                    "/>
                </div>
                <div className="space-y">
                    <label>Message</label>
                    <textarea name="" id="" rows="4" className="
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                    "></textarea>
                </div>
            </form>
            <button type="submit" form="contactForm" className="
                block
                bg-success
                text-white
                rounded-full
                mx-auto
                py-4
                px-11
            ">Envoyer</button>
        </div>
    );
}

export default ContactForm;
