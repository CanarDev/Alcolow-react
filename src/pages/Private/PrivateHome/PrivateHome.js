    import React from 'react'
    import alcolo from "./falling-down.gif"
    import  Navbar from  '../../../components/Navbar' ;

    export default function PrivateHome() {
        
    return (
        <div className="">
        <Navbar />
        <h1 className="">
            Le paradis de la binouze , la zone privée !
        </h1>
        <img src={alcolo} />
        </div>

    )
    }