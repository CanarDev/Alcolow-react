import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function CardCategory({category}) {

    return (
        <div className="
            w-36
            h-fit
            rounded-xl
            bg-grey
            p-4
            space-y-4
            flex
            flex-col
            items-center
        ">
            <p className="
                text-sm
            ">{category.strCategory}</p>
            {/* TODO make link to category products */}
        </div>

    );
}

export default CardCategory;
