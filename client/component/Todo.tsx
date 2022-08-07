import * as React from "react";
import styles from "../styles/Todo.module.css";

interface TodoCont {
  id: string;
  message: string;
  active: boolean;
  complete: boolean;
}

const Todo: React.FC<TodoCont> = ({ message, active, complete, id }) => {
  console.log(id);
  return (
    <div>
      <div className={styles.todocont}>
        <div
          className={complete ? styles.complete : styles.nocomplete}
          defaultChecked={complete}
        >
          {message}
        </div>
        <input
          type="checkbox"
          checked={active}
          className={styles.checkactive}
        />
      </div>
    </div>
  );
};

export default Todo;
