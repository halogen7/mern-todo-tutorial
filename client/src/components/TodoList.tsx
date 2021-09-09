import { ReactNode } from "react";
import "./todolist.css";

interface TodoListProps {
  children: ReactNode;
}

const TodoList = (props: TodoListProps) => {
  return <div className={"todo_list"}>{props.children}</div>;
};

export default TodoList;
