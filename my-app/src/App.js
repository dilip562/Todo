import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddForm';

class App extends Component {
  state = {
    todos : [
      {id:1,content:'Play Game'},
      {id:2,content:'Learn React'},
    ]
  }

  deleteTodo = (id) => {
    let newTodoList = this.state.todos.filter(todo=>todo.id!==id);
    this.setState({
      todos:newTodoList,
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let newTodoList = [...this.state.todos,todo];
    this.setState({
      todos:newTodoList,
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className = "center blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
