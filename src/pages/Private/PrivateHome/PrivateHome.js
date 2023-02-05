    import React from 'react'
    import alcolo from "./falling-down.gif"
    import  Navbar from  '../../../components/Navbar' ;
    import {signOut} from "firebase/auth"
    import { useNavigate } from 'react-router-dom'
    import {auth} from "../../../firebase-config"

    export default function PrivateHome() {
        //dans le local storage, on récupère l'email de l'utilisateur
        const email = localStorage.getItem("email");

        const navigate = useNavigate()

        const logOut = async () => {
            try {
                await signOut(auth)
                navigate("/")
            } catch {
                alert("impossible de se déconnecter")
            }
            }
    
        
    return (
        <div className="">
        <Navbar />
        <h1 className="">
            Le paradis de la binouze , salut {email} !
        </h1>
        <img src={alcolo} />

        <button onClick={logOut} className="">Déconnexion</button>
        

        </div>

    )
    }