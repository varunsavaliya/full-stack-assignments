import { useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  let [addTodo, setAddTodo] = useState("");
  const todoTasks = [
    { id: 1, title: "Task 1", status: "completed" },
    { id: 2, title: "Task 2", status: "pending" },
    { id: 3, title: "Task 3", status: "completed" },
    { id: 4, title: "Task 4", status: "pending" },
    { id: 5, title: "Task 5", status: "completed" },
  ];
  let [todos, setTodos] = useState(todoTasks);

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
    setTodos(todos);
  }

  function changeStatus(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "completed" ? "pending" : "completed",
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  function setTodo(newTodo) {
    setAddTodo(newTodo);
  }

  function handleAddTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: addTodo,
      status: "pending",
    };
    if(addTodo){
        setTodos([...todos, newTodo]);
    }
    setAddTodo('')
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="add-todo-wrapper d-flex  justify-content-center align-items-center my-3">
          <input
            placeholder="Add task here"
            className="add-task px-2 me-3"
            type="text"
            value={addTodo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddTodo}>
            +
          </button>
        </div>
        <div className="row g-5">
          {todos.map((todo, idx) => (
            <Card
              key={todo.id}
              index={idx + 1}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
