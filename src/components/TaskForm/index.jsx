import styles from "./TaskForm.module.scss";

const TaskForm = () => {
  return (
    <div className={styles.addForm}>
      <div className={styles.inputs}>
        <input className={styles.title} type="text" placeholder="Title" />
        <textarea
          className={styles.description}
          placeholder="Description"
          rows={4}
        />
      </div>
      <div className={styles.options}>
        <button className={styles.addBtn}>Add</button>
        <button className={styles.cancelBtn}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskForm;
