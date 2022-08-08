import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { UserLogout } from "../store/Reduxauth/reducer";
import styles from "../styles/Navbar.module.css";
import { useAppDispatch } from "../hooks/useAppDispatch";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { auth, data, loading } = useAppSelector(
    (state) => state.authorization
  );
  const route = useRouter();
  const Logout = () => {
    dispatch(UserLogout());
    localStorage.removeItem("token");
    route.push("/Login");
  };

  return (
    <div>
      {auth ? (
        <div>
          <div className={styles.nav}>
            <div className={styles.dropdown}>
              <a type="button">
                {loading ? (
                  <div>
                    <img
                      src="/VAyR.gif"
                      alt="loading..."
                      className={styles.imgmenu}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      src={data.avatarUrl}
                      alt="ava"
                      className={styles.imgmenu}
                    />
                  </div>
                )}
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
