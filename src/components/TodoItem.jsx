import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo, idx }) {
  const { handleDeleteTodo, handleTodoComplete, handleEditTodo } =
    useContext(TodoContext);

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleDoubleClick = () => {
    setIsEdit(true);
  };

  const handleKeyPress = (e, param) => {
    const { code } = e;

    if (code === "Enter" || param === "blur") {
      setIsEdit(false);
      handleEditTodo(todo.id, editValue);
    }
  };

  return (
    <li className="todo-item">
      <div onClick={() => handleTodoComplete(todo.id)} className="check-box">
        {todo.complete && <span>✓</span>}
      </div>
      {isEdit ? (
        <input
          className="edit-input"
          autoFocus
          type="text"
          value={editValue}
          onBlur={(e) => handleKeyPress(e, "blur")}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
      ) : (
        <label
          onDoubleClick={handleDoubleClick}
          className={`todo-label ${todo.complete ? "active" : ""}`}
        >
          {todo.name}
        </label>
      )}
      {!isEdit && (
        <button className="delete-button" onClick={() => handleDeleteTodo(idx)}>
          x
        </button>
      )}
    </li>
  );
}

export default TodoItem;
