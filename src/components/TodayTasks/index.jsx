import styles from "./TodayTasks.module.scss";

const TodayTasks = () => {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.mainTasks}>TodayTasks</div>
    </div>
  );
};

export default TodayTasks;
