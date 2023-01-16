import "./App.css";
import { CreateTodoForm } from "./components/CreateTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <CreateTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
