import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: newTodo, complete: false },
    ]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  const handleTodoComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, value) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = value;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setTodos,
        setNewTodo,
        handleAddTodo,
        handleDeleteTodo,
        handleTodoComplete,
        handleEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
