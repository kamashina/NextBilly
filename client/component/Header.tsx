import Link from "next/link";
import { useAppSelector } from "../hooks/useAppSelector";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import useAction from "../hooks/useAction";
import { useEffect } from "react";

const Header: React.FC = () => {
  const { auth } = useAppSelector((state) => state.authorization);
  const { AxiosUserAction } = useAction();
  useEffect(() => {
    AxiosUserAction();
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.ava}>
        <Navbar />
      </div>
      <span className={styles.project}>Проект №1</span>
      {auth ? null : (
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
