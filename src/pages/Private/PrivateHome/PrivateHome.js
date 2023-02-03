    import React from 'react'
    import alcolo from "./falling-down.gif"
    import  Navbar from  '../../../components/Navbar' ;

    export default function PrivateHome() {
        
    return (
        <div className="container p-5">
        <Navbar />
        <h1 className="display-3 text-light mb-4">
            Le paradis de la binouze , la zone privée !
        </h1>
        <img src={alcolo} />
        </div>

    )
    }