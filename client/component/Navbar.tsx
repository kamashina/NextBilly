import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import { setAuth } from "../store/Reduxauth/action";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { auth, data } = useAppSelector((state) => state.authorization);
  const route = useRouter();
  const Logout = () => {
    localStorage.removeItem("token");
    dispatch(setAuth(false));
    route.push("/Login");
  };

  return (
    <div>
      {auth ? (
        <div>
          <div className={styles.nav}>
            <div className={styles.dropdown}>
              <a type="button">
                <img
                  src={data.avatarUrl}
                  alt="ava"
                  className={styles.imgmenu}
                />
              </a>
              <div className={styles.dropdown_content}>
                <Link href="/">Главное</Link>
                <Link href="/News">Новости</Link>
                <Link href="/Dialogs">Диалог</Link>
                <Link href="/Video">Видео</Link>
                <Link href="/Todos">Список дел</Link>
                <Link href="/Profile">{data.email}</Link>
                <a type="button" onClick={Logout}>
                  Выйти
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Navbar;
