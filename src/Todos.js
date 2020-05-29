import React from 'react'; 

const Todos = ({todos, deleteTodo}) => { //pass in states in the functions
    
    const todolist = todos.length ? (  //if there is something in the array todos, then let next code follow
        todos.map(todo => { 
            return(
                <div className="collection-item" key={todo.id}> {/* key the todo.id */}
                        <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>  {/* pass the todo.id in the function */}
                </div>
            )
        })
    ) : (  //else display this
        <p className="center">You have no todos left!</p>
    ); 

    return (


       <div className="todos collection container">
           { todolist } {/* pass in the function component */}
       </div>



    )
}

export default Todos 