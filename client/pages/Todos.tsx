import React, { useState } from "react";
import styles from "../styles/Todos.module.css";
import { v4 } from "uuid";
import MainContainer from "../component/MainContainer";
import Todo from "../component/Todo";

interface TodoCont {
  message: string;
  active: boolean;
  id: string;
  complete: boolean;
}

const Todos: React.FC = () => {
  const [message, setMessage] = useState<string>("apple");
  const [filterArr, setFilterArr] = useState<string>("All");
  const [todo, setTodo] = useState<TodoCont[]>([]);

  const Newtodo = {
    id: v4(),
    message,
    active: false,
    complete: false,
  };

  function addTodo() {
    if (message !== "") {
      setTodo([...todo, Newtodo]);
      setMessage("");
      console.log(todo);
    }
  }

  const PressEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <MainContainer title="Список дел">
      <div className={styles.todoContiner}>
        <div className={styles.todoHeader}>
          <input
            value={message}
            onKeyDown={PressEnter}
            className={styles.inpaddtodo}
            type="text"
            placeholder="Add to Todo"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <button type="button" className={styles.btnaddtodo} onClick={addTodo}>
            Add
          </button>
        </div>
        <div className={styles.todocont2}>
          {todo.length !== 0 ? (
            <div>
              {(() => {
                switch (filterArr) {
                  case "All":
                    return (
                      <div>
                        {todo.map(({ message, id }: TodoCont, idx: number) => (
                          <div key={id}>
                            <div className={styles.todocont}>
                              <div
                                className={
                                  todo[idx].complete
                                    ? styles.complete
                                    : styles.nocomplete
                                }
                                defaultChecked={todo[idx].complete}
                                onClick={() =>
                                  (todo[idx].complete = !todo[idx].complete)
                                }
                              >
                                {message}
                              </div>
                              <input
                                type="checkbox"
                                checked={todo[idx].active}
                                onChange={() =>
                                  (todo[idx].active = !todo[idx].active)
                                }
                                className={styles.checkactive}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  case "Completed":
                    return (
                      <div>
                        {todo
                          .filter(
                            (todo: { complete: boolean }) =>
                              todo.complete === true
                          )
                          .map(
                            ({ message, complete, active, id }: TodoCont) => (
                              <Todo
                                id={id}
                                message={message}
                                complete={complete}
                                active={active}
                              />
                            )
                          )}
                      </div>
                    );
                  case "Active":
                    return (
                      <div>
                        {todo
                          .filter(
                            (todo: { active: boolean }) => todo.active === true
                          )
                          .map(
                            ({ message, complete, active, id }: TodoCont) => (
                              <Todo
                                id={id}
                                message={message}
                                complete={complete}
                                active={active}
                              />
                            )
                          )}
                      </div>
                    );
                }
              })()}
            </div>
          ) : (
            <div className={styles.empty}>
              <span>Пусто...</span>
            </div>
          )}
        </div>

        <div className={styles.btnfunc}>
          <button value={filterArr} onClick={() => setFilterArr("All")}>
            All
          </button>

          <button type="button" onClick={() => setFilterArr("Active")}>
            Active
          </button>

          <button value={filterArr} onClick={() => setFilterArr("Completed")}>
            Completed
          </button>

          <button type="button">Rcomplete</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Todos;
