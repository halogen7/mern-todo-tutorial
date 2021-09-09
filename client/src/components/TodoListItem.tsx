import DeleteTodoIcon from "@material-ui/icons/DeleteForeverOutlined";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { TodoItem } from "./Todo";
import "./todolist.css";

interface TodoListItemProps {
  todo: TodoItem;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const TodoListItem = (props: TodoListItemProps) => {
  const handleClickCheckbox = () => {
    props.completeTodo(props.todo._id);
  };

  return (
    <div key={props.todo._id} className={"todo_item"}>
      {props.todo.completed ? (
        <CheckBoxIcon className={"completed_icon"} />
      ) : (
        <CheckBoxOutlineBlank
          className={"check_icon"}
          onClick={handleClickCheckbox}
        />
      )}
      {props.todo.action}
      <DeleteTodoIcon
        className={"delete_icon"}
        onClick={() => props.deleteTodo(props.todo._id)}
      />
    </div>
  );
};

export default TodoListItem;
