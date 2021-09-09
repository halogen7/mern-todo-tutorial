import DeleteTodoIcon from "@material-ui/icons/DeleteForeverOutlined";
import "./todolist.css";

interface Todo {
  _id: number;
  action: string;
}

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <>
      {Array.isArray(props.todos) &&
        props.todos.length > 0 &&
        props.todos.map((todo) => {
          return (
            <div
              key={todo._id}
              className={"todo_item"}
              onClick={() => props.deleteTodo(todo._id)}
            >
              {todo.action}
              <DeleteTodoIcon />
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
