import type { NextPage } from "next";
import { useEffect } from "react";
import MainContainer from "../component/MainContainer";
import useAction from "../hooks/useAction";
import styles from "../styles/Main.module.css";

const Home: NextPage = () => {
  const { AxiosUserAction } = useAction();
  useEffect(() => {
    AxiosUserAction();
  }, []);
  return (
    <MainContainer title={"Главное"}>
      <div>
        <div>
          <div className={styles.container2}>
            <h1>Резюме</h1>
            <span className={styles.rez}>
              Изучаю Frontend Developer последние 7 месяцев , есть проект на{" "}
              <a href="https://github.com/kamashina/NextBilly">github</a>.
              Навыки: JavaScript, CSS, HTML, redux, React JS, умею работать с
              git, писать HTTP запросы , имею общее представление о backend`е и
              работе с базами данных. Все мои навыки вы можете посмотреть на
              проекте githhub: https://github.com/kamashina/Billy Зп не важно.
            </span>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
