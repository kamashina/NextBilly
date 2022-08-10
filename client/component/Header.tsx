import Link from "next/link";
import { useAppSelector } from "../hooks/useAppSelector";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const route = useRouter();
  const { auth, loading, data } = useAppSelector(
    (state) => state.authorization
  );
  return (
    <div className={styles.header}>
      <div className={styles.ava}>
        <Navbar />
      </div>
      <Link href="/">
        <a className={styles.project}>Проект №1</a>
      </Link>
      <span className={styles.path}>{route.asPath}</span>
      {auth || loading ? null : (
        <div className={styles.group}>
          <Link href="/Reg">
            <a className={styles.logout}>Регистрация</a>
          </Link>
          <Link href="/Login">
            <a className={styles.log}>Вход</a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Header;
