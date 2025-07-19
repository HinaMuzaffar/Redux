import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markasDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandle = (id) => {
    dispatch(deleteTodo(id));
  };

  const markasDoneHandle = (id) => {
    dispatch(markasDone(id));
  };
  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.task}
            </span>

            <button onClick={() => deleteHandle(todo.id)}>Delete</button>
            <button onClick={() => markasDoneHandle(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
