import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { newTodo, setNewTodo, handleAddTodo } = useContext(TodoContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <form className="todo-form" onSubmit={handleFormSubmit}>
      <input
        placeholder="What needs to be done?"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
