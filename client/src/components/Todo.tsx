import React from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./todo.css";
import TodoListItem from "./TodoListItem";

const MAX_TODOS = 5;

export interface TodoItem {
  _id: number;
  action: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);

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
      .then((res) => {
        if (res) {
          handleGetTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCompleteTodo = (id: number) => {
    const completed = { completed: true };
    fetch(`http://localhost:27017/api/todos/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completed),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          handleGetTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={"todo_paper"}>
      <h1 className={"todo_header"}>My To-Do List</h1>
      <p className={"todo_description"}>Add up to 5 tasks to complete today!</p>
      {Array.isArray(todos) && (
        <TodoList>
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoListItem
                key={todo._id}
                todo={todo}
                deleteTodo={handleDeleteTodo}
                completeTodo={handleCompleteTodo}
              />
            ))}
          {todos.length < MAX_TODOS && <NewTodo getTodos={handleGetTodos} />}
        </TodoList>
      )}
    </div>
  );
};

export default Todo;
