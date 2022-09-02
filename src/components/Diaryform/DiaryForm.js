import { useState, useContext } from "react";
import  DiaryContext  from "../Diary/diary-context";

export default function DiaryForm() {
  const [task, setTask] = useState("");

  const { tasks, setTasks } = useContext(DiaryContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks,task])
    setTask("")
  };

  const handleTaskInput = (event) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={task}
        onChange={handleTaskInput}
        type="text"
        placeholder="Escribe aqui tu tarea"
        name="task"
      />
      <button type="submit" name="button">
        Agregar
      </button>
    </form>
  );
}
