import React from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./todo.css";

const MAX_TODOS = 5;

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    handleGetTodos();
  }, []);

  const handleGetTodos = () => {
    fetch("http://localhost:27017/api/todos")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setTodos(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (id: number) => {
    fetch(`http://localhost:27017/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          handleGetTodos();
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className={"todo_paper"}>
      <div className={"todo_margin_line"}></div>
      <h1 className={"todo_header"}>My To-Do List</h1>
      <p className={"todo_description"}>Add up to 5 tasks to complete today!</p>
      <div className={"todo_list"}>
        <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
        {Array.isArray(todos) && todos.length < MAX_TODOS && (
          <NewTodo getTodos={handleGetTodos} />
        )}
      </div>
    </div>
  );
};

export default Todo;
