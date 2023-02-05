import React, {useContext} from 'react'
import {UserContext} from "../context/userContext"
import {Link} from "react-router-dom"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import {auth} from "../firebase-config"


function Navbar() {
        const {toggleModals} = useContext(UserContext)

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
                <nav className="navbar navbar-light bg-light px-4">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
                <Link to="/cocktails" className="navbar-brand">
                    Cocktails
                </Link>
                <Link to="/about" className="navbar-brand">
                    About
                </Link>
                
                <div>
                    <button onClick={() => toggleModals("signUp")}className="btn btn-primary">Inscription</button>
                    <button onClick={() => toggleModals("signIn")} className="btn btn-primary ms-2">Connexion</button>
                    <button onClick={logOut} className="btn btn-danger ms-2">Déconnexion</button>
                </div>
                </nav>
            )
            }

export default Navbar