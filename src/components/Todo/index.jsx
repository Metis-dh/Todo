import { useDispatch } from "react-redux";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

import styles from "./Todo.module.scss";
import { deleteTask, toggleTask } from "../../store/todoSlice";
import { useState } from "react";

const Todo = ({
  id,
  title,
  description,
  completed,
  setTask,
  index,
  setIsOpen,
}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const editTask = () => {
    setTask({ id, index, title, description, completed });
    setIsOpen(true);
  };

  const toggleTaskHandler = (e) => {
    setChecked(e.target.checked);
    dispatch(toggleTask(id));
  };

  return (
    <div className={styles.todoItem}>
      <input
        value={checked}
        onChange={toggleTaskHandler}
        type="checkbox"
        name="toggle"
      />
      <div className={styles.todo}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.options}>
        <button onClick={editTask}>
          <img src={editIcon} alt="edit" />
        </button>
        <button onClick={() => dispatch(deleteTask(id))}>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
