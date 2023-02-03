import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cocktails from './components/Cocktails';
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from "./pages/Private/Private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<Private />}>
                <Route path="/private/private-home" element={<PrivateHome />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/cocktails" element={<Cocktails />} />
        </Routes>
        <SignUpModal />
        <SignInModal />
        </>
        );
    }

export default App;