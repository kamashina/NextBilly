import type { NextPage } from "next";
import Link from "next/link";
import Weather from "../component/Weather";
import styles from "../styles/Main.module.css";
import Todos from "./Todos";
import { useAppSelector } from "../hooks/useAppSelector";

const Home: NextPage = () => {
  const { data } = useAppSelector((state) => state.authorization);
  return (
    <div className={styles.main}>
      <div className={styles.weather}>
        <h1>Погода</h1>
        <Weather />
      </div>
      <div className={styles.rezume}>
        <h1>Резюме</h1>
        <span className={styles.rez}>
          Изучаю Frontend Developer последние 7 месяцев , есть проект на{" "}
          <a href="https://github.com/kamashina/NextBilly">github</a>. Навыки:
          JavaScript, CSS, HTML, redux, React JS, умею работать с git, писать
          HTTP запросы , имею общее представление о backend`е и работе с базами
          данных. Все мои навыки вы можете посмотреть на проекте githhub:
          https://github.com/kamashina/NextBilly Зп не важно.
        </span>
      </div>
      <div className={styles.todos}>
        <h1>Список дел</h1>
        <Todos />
      </div>
      <div className={styles.skills}>
        <ul>
          <h1>Мои навыки</h1>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>React JS</li>
          <li>WebSocket</li>
          <li>Redux/Redux Toolkit</li>
          <li>Next js</li>
          <li>REST API</li>
          <li>MongoDB</li>
          <li>deployment</li>
          <span>Мой стек:</span>
          <ul>
            Front-End:
            <li>
              NextJS, Typescript, ReactJS, Redux + Redux Toolkit, Sass/Scss,
              WebSockets, axios
            </li>
          </ul>
          <ul>
            Back-End:
            <li>Typescript/JS, NodeJS (express), MongoDB, mogoose</li>
          </ul>
        </ul>
      </div>
      <div className={styles.bottombox}>
        <p>Сайт дорабатыается каждый день</p>
        <p>
          Ваш профиль ⇒
          <Link href="/Profile">
            <a> {data.nickname}</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
