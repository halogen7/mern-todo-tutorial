import React from "react";
import Input from "./Input";
import ListTodo from "./ListTodo";

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
    <div>
      <h1>My To-Do(s)</h1>
      <Input getTodos={handleGetTodos} />
      <ListTodo todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Todo;
