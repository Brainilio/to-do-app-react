import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './Addform';

export default class App extends Component { 
  state = { 
    todos: [ 
      {id: 1, content: 'buy some milk'}, 
      {id: 2, content: 'Eat bread'}
    ]
  }

  deleteTodo = (id) => { 

    const todos = this.state.todos.filter(todo => {  //filter through todos and give function name and get rid of the id that is in todo.id
      return todo.id !== id 
    }); 
    this.setState({
      todos //if key and value both have same name just keep it 
    })

  }

  addTodo = (todo) => { 
    console.log(todo);
    todo.id = Math.random(); 
    let todos = [...this.state.todos, todo] 

    this.setState({ 
      todos: todos
    })
  }

  render() { 
  return (
    <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>

            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/> {/* pass over state and function to this component */}
            <AddTodo addTodo={this.addTodo}/>

    </div>
  );

  } 
} 

