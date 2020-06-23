import React from 'react'
import './App.css';



class TodoList extends React.Component {

    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render() {
        return(
            <ul className="todolist">
                { this.props.todos.map((todo,i) => {
                    return <li id="taskli" onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
                })}
            </ul>
        );
    }
}

export default TodoList