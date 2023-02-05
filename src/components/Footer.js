import React from 'react';
function Footer() {

    const informations = ['Products', 'Cocktails', 'Rhums', 'Whiskys', 'Vodkas']
    const contacts = ['Discord', 'Twitter', 'Instagram', 'LinkedIn']
    const stores = ['Find a store', 'Sold products', 'Delivery State', 'Shop Help']
    const companies = ['alcolow and companies', 'buy for your company']
    const values = ['Accessibility', 'Environment', 'Confidentiality', 'Suppliers responsability']
    const abouts = ['Newsroom', 'alcolow board', 'Work at alcolow', 'Garanty']
    const copyrights = ['Privacy Policy', 'Cookies', 'Terms of Use', 'Sell and refunds', 'Legals']

    return (
        <footer className='
            p-16
            bg-grey
            flex
            flex-col
            gap-10
            divide-y
            divide-grey-darker
            items-center
        '>
            <section className='
                flex
                flex-wrap
                justify-between
                gap-12
                max-w-7xl
                w-full
            '>
                <div>
                    <h5>Informations</h5>
                    <ul>
                        {informations.map((information) =>
                            <li key={information}>
                                {information}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h5>Contacts</h5>
                    <ul>
                        {contacts.map((contact) =>
                            <li key={contact}>
                                {contact}
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <h5>alcolow store</h5>
                    <ul>
                        {stores.map((store) =>
                            <li key={store}>
                                {store}
                            </li>
                        )}
                    </ul>
                </div>
                <span className='
                    flex 
                    flex-col
                    gap-6
                '>
                    <div>
                        <h5>For companies</h5>
                        <ul>
                            {companies.map((company) =>
                                <li key={company}>
                                    {company}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h5>For Health</h5>
                        <ul>
                            <li>alcolow in health sector</li>
                        </ul>
                    </div>
                </span>
                <span className='
                    flex
                    flex-col
                    gap-6
                '>
                    <div>
                        <h5>Values of alcolow</h5>
                        <ul>
                            {values.map((value) =>
                                <li key={value}>
                                    {value}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h5>About alcolow</h5>
                        <ul>
                            {abouts.map((about) =>
                                <li key={about}>
                                    {about}
                                </li>
                            )}
                        </ul>
                    </div>
                </span>
            </section>
            <div className='
                pt-2
                max-w-7xl
                w-full
                flex
                gap-2
            '>
                <p className='text-grey-text font-light text-sm'>Copyright © 2023 alcolow Inc. All right reserved.</p>
                <ul className='
                    flex
                    flex-row
                '>
                    {copyrights.map((copyright) =>
                        <li key={copyright}
                            className='font-light'
                        >
                            {copyright}
                        </li>
                    )}
                </ul>
            </div>
        </footer>

    );
}

export default Footer;
