import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './components/Counter';
import ToDoList from './components/TodoList';
import Cocktails from './components/Cocktails';
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;