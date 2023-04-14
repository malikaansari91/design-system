import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <TodoItem idx={idx} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
