/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

const Task = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [checkedCount, setCheckedCount] = useState(0);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleCheckTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleCloseTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    const count = todos.filter((todo) => todo.checked).length;
    setCheckedCount(count);
  }, [todos]);

  return (
    <div className="App">
      <h2>THINGS TO DO</h2>
      <hr />
      {todos.length === 0 ? (
        <h5>Currently You don't have a task</h5>
      ) : (
        <div>
          {todos.map((todo, index) => (
            <div className="content" key={index}>
              <div className="text">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleCheckTodo(index)}
              />
              <span className={todo.checked ? "srick" : ""}>{todo.text}</span>
              
              </div>
              <div className="delete">
              <button className="close" onClick={() => handleCloseTodo(index)}>x</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />
      <div>
        <h4>Done: {checkedCount}</h4>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submit" onClick={addTodo}>ADD TASK</button>
      </div>
    </div>
  );
};

export default Task;
