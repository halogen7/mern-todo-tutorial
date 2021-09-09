import React from "react";
import "./newtodo.css";
interface NewTodoProps {
  getTodos: () => void;
}

const NewTodo = (props: NewTodoProps) => {
  const [action, setAction] = React.useState("");

  const handleAddTodo = () => {
    const task = { action };
    if (task.action && task.action.length > 0) {
      fetch("http://localhost:27017/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            props.getTodos();
            setAction("");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.warn("NewTodo field required");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction(event.target.value);
  };

  return (
    <div className={"new_todo"}>
      <input type="text" onChange={handleChange} value={action} />
      <button onClick={handleAddTodo}> Add new To-Do </button>
    </div>
  );
};

export default NewTodo;
