import { useDispatch } from "react-redux";

import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

import styles from "./Todo.module.scss";
import { deleteTask } from "../../store/todoSlice";

const Todo = ({ id, title, description, setTask, index, setIsOpen }) => {
  const dispatch = useDispatch();

  const editTask = () => {
    setTask({ id, index, title, description });
    setIsOpen(true);
  };

  return (
    <div className={styles.todoItem}>
      <input type="checkbox" name="toggle" />
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
