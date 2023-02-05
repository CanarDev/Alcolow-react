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
            mb-24
        ">
            <h2 className="
                text-5xl
                text-center
            ">Formulaire</h2>
            <form id="contactForm" action="/" className="
                py-6
                space-y-4
            ">
                <div className="space-y-2">
                    <label>Name</label>
                    <input name="" type="text" placeholder="Your name" className="
                        focus:shadow-2xl
                        focus:shadow-grey-text/20
                        focus:scale-105
                        outline-0
                        transition-all
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                    "/>
                </div>
                <div className="space-y-2">
                    <label>Email</label>
                    <input name="" type="email" placeholder="Your email" className="
                        focus:shadow-2xl
                        focus:shadow-grey-text/20
                        focus:scale-105
                        outline-0
                        transition-all
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                    "/>
                </div>
                <div className="space-y-2">
                    <label>Message</label>
                    <textarea name="" id="" rows="5" className="
                        focus:shadow-2xl
                        focus:shadow-grey-text/20
                        focus:scale-105
                        outline-0
                        transition-all
                        bg-white
                        text-grey-text
                        rounded-xl
                        p-3
                        w-full
                        resize-none
                    "></textarea>
                </div>
            </form>
            <button type="submit" form="contactForm" className="
                block
                bg-success
                text-white
                rounded-full
                mx-auto
                py-3
                px-8
            ">Envoyer</button>
        </div>
    );
}

export default ContactForm;
