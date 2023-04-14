import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <>
      <div>testing</div>
      <a href="www.google.com">learn react</a>
      <TodoContextProvider>
        <div className="App">
          <div className="todo-container">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </TodoContextProvider>
      <hr />
      <Accordian allowToggle allowMultiple activeIds={[1]}>
        <Accordian.Item id={1}>
          <Accordian.Header>header1 h</Accordian.Header>
          <Accordian.Content>thsi</Accordian.Content>
        </Accordian.Item>
        <Accordian.Item>
          <Accordian.Header>header2</Accordian.Header>
          <Accordian.Content>thsi</Accordian.Content>
        </Accordian.Item>
        <Accordian.Item>
          <Accordian.Header>header3</Accordian.Header>
          <Accordian.Content>thsi</Accordian.Content>
        </Accordian.Item>
      </Accordian>
    </>
  );
}

export default App;
