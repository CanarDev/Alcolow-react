import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cocktails from './pages/Cocktails';
import Footer from "./components/Footer";
import CocktailSingle from './pages/CocktailSingle';
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from "./pages/Private/Private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<Private />}>
                    <Route path="/private/private-home" element={<PrivateHome />} />
                </Route>
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/cocktail/:id" element={<CocktailSingle />} />
            </Routes>
            <SignUpModal />
            <SignInModal />
            <Footer />
        </div>
    );
}

export default App;