import { useState, useEffect } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ITask } from "./interface/ITask";

import styles from './styles/App.module.css'

function App() {
  const [task, setTask] = useState("")

  const [todoList, setTodoList] = useState<ITask[]>([])

  useEffect(() => {
    localStorage.setItem(task, JSON.stringify(todoList))
  }, [todoList])

  const addTask = (): void => {

    if (task === "") {
      toast.error("Campo está vazio")
    } else {
      const generateId = (num: number) => Math.floor(Math.random() * num)

      const newTask = { id: generateId(9999999999999), value: task }
      setTodoList([...todoList, newTask])

      toast.success("Adicionado com sucesso")
    }
  }

  const delTask = (delById: number): void => {
    setTodoList(todoList.filter((taskValue) => taskValue.id !== delById))
    localStorage.removeItem(task)
  }

  return (
    <div className={styles.App}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
      />

      <header>
        <h2>To Do</h2>

        <input
          type="text" autoComplete="off"
          placeholder="Escrever task..."
          name="task"
          className={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          type="submit"
          onClick={addTask}
          className={styles.btn_header}>Adicionar Task</button>
      </header>

      <div className={styles.line}></div>

      {todoList.map((task, index) => (
        <TodoTask key={index} task={task} delTask={delTask} />
      ))}
    </div>
  );
}

export default App;