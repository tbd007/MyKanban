import React from 'react'
import TodoList from './List'

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ 
        	todos: [ this.state.text, ...this.state.todos ],
        	text: ''
        });
    }

    removeTodo(name, i){
        let todos = this.state.todos.slice();
        todos.splice(i, 1);
        this.setState({
            todos
        });
    }

    updateValue(e) {
        this.setState({ text: e.target.value})
    }

    render() {
        return(
            <div className="tododiv">
                <div className="header">
            <h2>TO-DO</h2>
        </div>

                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input id="todolist"
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                </form>

                <div className="todolist">
                <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
                </div>
            </div>
        );
    }
}

export default Todos