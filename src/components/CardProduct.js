import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function CardProduct(props) {

    return (
        <div className={`
            ${props.isCardProductColumn ? "max-w-xl" : "w-full"}
            flex
            ${props.isCardProductColumn ? "flex-col" : "flex-row justify-between"}
            gap-y-16
            rounded-3xl
            bg-grey
            ${props.isCardProductColumn ? "pt-12" : "pt-12"}
            px-10
        `}>
            <div className={`
                flex
                flex-col
                gap-y-10
                ${props.isCardProductColumn ? "pb-0" : "pb-12"}
            `}>
                <ul className="
                    flex
                    gap-x-10
                    font-thin
                    uppercase
                ">
                    <li>Alcool 1</li>
                    <li>Alcool 2</li>
                    <li>Alcool 3</li>
                </ul>
                <p className="
                    text-3xl
                    font-bold
                ">Nom</p>
            </div>
            <img src="https://media.licdn.com/dms/image/D4E35AQF4knjpaLzS1w/profile-framedphoto-shrink_800_800/0/1660558383043?e=1676217600&v=beta&t=npIkmihxU9UQquBPZb6BHYHBtqATeqzaAAp9Sr4L6jY" alt="" className={`
                max-w-lg
                w-full
                ${props.isCardProductColumn ? "h-96" : "h-40"}
                object-cover
            `}/>
        </div>

    );
}

export default CardProduct;
