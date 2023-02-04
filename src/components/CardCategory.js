import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function CardCategory() {

    return (
        <div className="
            w-fit
            rounded-xl
            bg-grey
            py-8
            px-7
            space-y-4
        ">
            <div className="bg-grey-darker w-36 h-36"></div>
            <p className="
                text-center
            ">Category</p>
        </div>

    );
}

export default CardCategory;
