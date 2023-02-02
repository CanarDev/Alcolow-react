import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



import Home from './pages/Home';
import About from './pages/About';
import Counter from './components/Counter';
import ToDoList from './components/TodoList';
import Cocktails from './components/Cocktails';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import BoardUser from './pages/BoardUser';
import BoardModerator from './pages/BoardModerator';
import BoardAdmin from './pages/BoardAdmin';


function App() {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/todolist" element={<ToDoList />} />
                <Route path="/cocktails" element={<Cocktails />} />
                <Route path="/about" element={<About />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/user" element={<BoardUser />} />
                <Route path="/mod" element={<BoardModerator />} />
                <Route path="/admin" element={<BoardAdmin />} />

            </Routes>
        </BrowserRouter>

    );
}

export default App;