import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

import styles from "./Todo.module.scss";

const Todo = () => {
  return (
    <div className={styles.todoItem}>
      <input type="checkbox" name="toggle" />
      <div className={styles.todo}>
        <h4>Cooking a salmon sushi</h4>
        <p>
          Salmon and tuna i think is good for dinner, i wanna make it today :D
        </p>
      </div>
      <div className={styles.options}>
        <button>
          <img src={editIcon} alt="edit" />
        </button>
        <button>
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
