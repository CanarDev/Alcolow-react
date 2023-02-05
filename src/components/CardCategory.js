import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function CardCategory() {

    return (
        <div className="
            w-52
            rounded-xl
            bg-grey
            p-6
            space-y-4
            flex
            flex-col
            items-center
        ">
            <div className="bg-grey-darker w-36 h-36 rounded-md"></div>
            <p className="
                text-center
            ">Category</p>
        </div>

    );
}

export default CardCategory;
