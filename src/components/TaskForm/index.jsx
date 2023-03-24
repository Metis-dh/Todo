import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../store/todoSlice";

import styles from "./TaskForm.module.scss";

const TaskForm = ({ setTask, task, setIsOpen }) => {
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    dispatch(addTask({ title: task.title, description: task.description }));
    setTask({
      id: "",
      index: null,
      title: "",
      description: "",
      completed: false,
    });
    setIsOpen(false);
  };

  const editTaskHandler = () => {
    dispatch(updateTask({ ...task }));
    setTask({
      id: "",
      index: null,
      title: "",
      description: "",
      completed: false,
    });
    setIsOpen(false);
  };

  const cancelTaskHandler = () => {
    setTask({
      id: "",
      index: null,
      title: "",
      description: "",
      completed: false,
    });
    setIsOpen(false);
  };

  return (
    <div className={styles.addForm}>
      <div className={styles.inputs}>
        <input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className={styles.title}
          type="text"
          placeholder="Title"
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className={styles.description}
          placeholder="Description"
          rows={4}
        />
      </div>
      <div className={styles.options}>
        {!task.id ? (
          <button className={styles.addBtn} onClick={addTaskHandler}>
            Add
          </button>
        ) : (
          <button className={styles.addBtn} onClick={editTaskHandler}>
            Edit
          </button>
        )}
        <button className={styles.cancelBtn} onClick={cancelTaskHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
