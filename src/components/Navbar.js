import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [spotlightIsActive, spotlightUpdater] = useState(true);
    const spotlightToggle = () => {
        spotlightUpdater((spotlightIsActive) => !spotlightIsActive)
    }
    return (
        <div className="
            overflow-x-hidden
            navbar
            bg-grey-darker
            text-grey
            h-20
            flex
            justify-between
            items-center
            px-12
        ">
            <p className="font-bold">alcolow.</p>
            <ul className="
                flex
                items-center
                gap-x-7
            ">
                <NavLink to="/">
                    <li>home</li>
                </NavLink>
                <NavLink to="/products">
                    <li>products</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>contact</li>
                </NavLink>
                <svg onClick={spotlightToggle} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945Z" fill="#F5F5F7"/>
                </svg>
            </ul>

            <div className={`
                absolute
                top-0
                bg-grey-darker
                h-20
                w-full
                flex
                justify-center items-center
                transition-all
                ${spotlightIsActive ? "left-0" : "left-full"}
            `}>
                <div className="
                    w-2/3 lg:w-1/3
                    h-full
                ">
                    <div className="
                        flex
                        items-center
                        h-full
                        gap-x-4
                    ">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945Z" fill="#838383"/>
                        </svg>
                        <input className="
                            text-grey-text
                            bg-transparent
                            grow

                        " type="search" placeholder="Rechercher sur alcolow.com"/>

                        <svg onClick={spotlightToggle} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841571 0.111533 0.557667 0.3346 0.3346C0.557667 0.111533 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111533 2.03802 0.3346L8 6.29658L13.962 0.3346C14.185 0.111533 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111533 15.6654 0.3346C15.8885 0.557667 16 0.841571 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z" fill="#838383"/>
                        </svg>
                    </div>

                    <div className={`
                        bg-grey
                        rounded-b-3xl
                        w-full
                        px-12
                        py-8
                    `}>
                        <p className={`
                            text-grey-text
                            font-thin 
                            mb-4
                        `}>RACCOURCIS</p>
                        <ul className={`
                            flex
                            flex-col
                            gap-y-3
                            text-grey-darker
                        `}>
                            {/* TODO Foreach element founded searchbar */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
