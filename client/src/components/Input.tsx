import React from "react";

interface InputProps {
  getTodos: () => void;
}

const Input = (props: InputProps) => {
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
      console.warn("Input field required");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={action} />
      <button onClick={handleAddTodo}> Add new To-Do </button>
    </div>
  );
};

export default Input;
