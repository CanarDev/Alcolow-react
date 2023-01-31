import React from 'react';
import Navbar from './Navbar';


function ToDoList() {

    const [todos, setTodos] = React.useState([]);//on crée un tableau vide
    const [input, setInput] = React.useState('');//on crée un input vide

    const addTodo = (event) => {//on ajoute une tache
        event.preventDefault();//on empêche le rechargement de la page
        setTodos([...todos, input]);//on ajoute la tache dans le tableau
        setInput('');//on vide l'input
    }

    //on barre la tache si on clique dessus avec un texct-decoration: line-through
    const handleTodoClick = (event) => {//on crée une fonction qui prend en paramètre l'event
        event.target.style.textDecoration = 'line-through';
    }

    //bouton pour supprimer la tache sans en recréer une nouvelle
    const deleteTodo = (event) => {
        //todo contient la tache
        const todo = event.target.parentElement;//on cible le parent de l'élément cliqué
        todo.style.display = 'none';

    }

    
    return (
        <div className="ToDoList">
            < Navbar />
            <header className="App-header">
            </header>
            <div>
                <h1>ToDoList</h1>
                <form>
                    <input value={input} onChange={event => setInput(event.target.value)} />
                    <button type="submit" onClick={addTodo}>Ajouter une tache</button>
                </form>
                <ul>
                    {todos.map(todo => (
                        <li key={todo} onClick={handleTodoClick}>{todo} <button onClick={deleteTodo}>X</button></li>
                    ))}
                </ul>
            </div>
        </div>
    );
    

    
}

export default ToDoList;
