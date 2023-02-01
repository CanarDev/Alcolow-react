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
        //supprimer la tache
        todo.remove();

    }

    //sauvegarder les taches dans le local storage
    React.useEffect(() => {
        const data = localStorage.getItem('todos');
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);


    
    return (
        <div className="ToDoList">
            < Navbar />
            <header className="App-header">
            </header>
            <div>
                <h1>ToDoList</h1>
                <form>
                    <input value={input} onChange={event => setInput(event.target.value)} />
                    <button onClick={addTodo} type="submit">Ajouter une tâche</button>
                </form>
                <ul>
                    {todos.map(todo => (
                        <li onClick={handleTodoClick} key={todo}>{todo}
                            <button onClick={deleteTodo}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    

    
}

export default ToDoList;
