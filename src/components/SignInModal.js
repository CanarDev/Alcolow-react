    import React, { useContext, useRef, useState } from "react";
    import { UserContext } from "../context/userContext";
    import { useNavigate } from "react-router-dom";

    export default function SignUpModal() {
    const { modalState, toggleModals, signIn } = useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
        inputs.current.push(el);
        }
    };
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        try {
        const cred = await signIn(
            inputs.current[0].value,
            inputs.current[1].value
        );

        setValidation("");
        toggleModals("close");
        navigate("/private/private-home");//si l'utilisateur est connecté, il est redirigé vers la page privée
        //stocker l'email de l'utilisateur pour le réafficher dans la navbar 
        const email = inputs.current[0].value;
        localStorage.setItem("email", email);
        } catch {
        setValidation("L'email ou le mot de passe est incorrect !");
        }
    };

    const closeModal = () => {
        setValidation("");
        toggleModals("close");
    };

    return (
        <>
        {modalState.signInModal && (
            <div className="">
            <div onClick={closeModal} className=""></div>
            <div className="" style={{ minWidth: "400px" }}>
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <button onClick={closeModal} className="btn-close">fermer</button>
                    <h5 className="modal-title">Connexion</h5>
                    </div>

                    <div className="modal-body">
                    <form ref={formRef} onSubmit={handleForm} className="sign-up-form">
                        <div className="">
                        <label htmlFor="signInEmail" className="form-label">Email adress</label>
                        <input ref={addInputs}name="email" required type="email" className="form-control" id="signInEmail"/>
                        </div>

                        <div className="">
                        <label htmlFor="signInPwd" className="form-label">Password</label>
                        <input ref={addInputs}name="pwd" required type="password" className="form-control" id="signInPwd"/>
                        <p className="">{validation}</p>
                        </div>

                        <button className="">Submit</button>
                    </form>

                    </div>
                </div>
                </div>
            </div>
            </div>
        )}
        </>
    );
    }