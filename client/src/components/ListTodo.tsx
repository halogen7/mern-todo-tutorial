interface Todo {
  _id: number;
  action: string;
}

interface ListTodoProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const ListTodo = (props: ListTodoProps) => {
  return (
    <ul>
      {Array.isArray(props.todos) && props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return (
            <li key={todo._id} onClick={() => props.deleteTodo(todo._id)}>
              {todo.action}
            </li>
          );
        })
      ) : (
        <li>No To-Dos</li>
      )}
    </ul>
  );
};

export default ListTodo;
