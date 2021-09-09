import React from "react";
import "./newtodo.css";
interface NewTodoProps {
  getTodos: () => void;
}

//const MAX_CHARACTERS = 100;

const NewTodo = (props: NewTodoProps) => {
  const [action, setAction] = React.useState("");

  const handleAddTodo = () => {
    const task = { action, completed: false };
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
      console.warn("Todo field required");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAction(event.target.value);
  };

  return (
    <div className={"new_todo"}>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={action}
          autoFocus={true}
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
