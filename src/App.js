import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cocktails from './components/Cocktails';
import CocktailSingle from './pages/CocktailSingle';
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from "./pages/Private/Private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/private" element={<Private />}>
                    <Route path="/private/private-home" element={<PrivateHome />} />
                </Route>
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/cocktail/:id" element={<CocktailSingle />} />
                <Route path="/about" element={<About />} />
            </Routes>
        <SignUpModal />
        <SignInModal />
        </BrowserRouter>

    );
}

export default App;