import React from 'react';

function Navbar(props) {
    return (
        <div className={`
            pt-12
            ${props.isBackgroundBlack ? "bg-black text-grey" : "bg-grey" }
        `}>
            <div className="
                max-w-lg
                mx-auto
                px-8
            ">
                <div className="
                    flex
                    flex-col
                    gap-4
                    mb-14
                ">
                    <h2 className="
                        text-4xl
                        text-center
                        font-bold
                    ">Title Section</h2>
                    <p className="
                        text-3xl
                        text-center
                    ">subhead</p>
                    <div className="
                        flex justify-around
                        text-primary
                        text-xl
                    ">
                        <p>En savoir plus ></p>
                        <p>Acheter ></p>
                    </div>
                </div>
                <img src="" alt="" className={`
                    h-80
                    w-full
                    border-0
                    object-cover
                    ${props.isBackgroundBlack ? "bg-grey-darker" : "bg-white"}
                `}/>
            </div>
        </div>

    );
}

export default Navbar;
