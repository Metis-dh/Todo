import Todo from "../Todo";

import plusIcon from "../../assets/icons/add.svg";

import styles from "./TodayTasks.module.scss";
import TaskForm from "../TaskForm";
import { useSelector } from "react-redux";
import { useState } from "react";

const TodayTasks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const todos = useSelector((state) => state.todo.todos);
  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.completed === true)
  );

  const [task, setTask] = useState({
    id: "",
    index: null,
    title: "",
    description: "",
    completed: false,
  });

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.mainTasks}>
        <h1>Today</h1>
        <span>
          {completedTodos.length} / {todos.length} completed
        </span>
        <div className={styles.todoList}>
          {todos.map((todo, index) => (
            <Todo
              key={todo.id}
              index={index}
              {...todo}
              setTask={setTask}
              task={task}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
        {!isOpen && (
          <button className={styles.addBtn} onClick={() => setIsOpen(true)}>
            <img src={plusIcon} alt="add" />
            Add task
          </button>
        )}
        {isOpen && (
          <TaskForm setTask={setTask} task={task} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default TodayTasks;
