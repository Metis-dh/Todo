import Todo from "../Todo";

import plusIcon from "../../assets/icons/add.svg";

import styles from "./TodayTasks.module.scss";
import TaskForm from "../TaskForm";

const TodayTasks = () => {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.mainTasks}>
        <h1>Today</h1>
        <span>4/6 completed</span>
        <div className={styles.todoList}>
          <Todo />
          <Todo />
          <Todo />
        </div>
        <button className={styles.addBtn}>
          <img src={plusIcon} alt="add" />
          Add task
        </button>
        <TaskForm />
      </div>
    </div>
  );
};

export default TodayTasks;
