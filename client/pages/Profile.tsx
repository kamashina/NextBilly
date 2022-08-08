import { useRouter } from "next/router";
import React from "react";
import MainContainer from "../component/MainContainer";
import { useAppSelector } from "../hooks/useAppSelector";
import styles from "../styles/Profile.module.css";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { UserLogout } from "../store/Reduxauth/reducer";

const Profile: React.FC = () => {
  const { data } = useAppSelector((state) => state.authorization);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const Logout = (e: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem("token");
    dispatch(UserLogout());
    route.push("/Login");
  };
  return (
    <MainContainer title="Профиль">
      <div className={styles.profile}>
        <div className={styles.prof}>
          <h1 className={styles.pochta}>Профиль {data.email}</h1>
          <img src={data.avatarUrl} alt="ava" className={styles.avatarka} />
          <div className={styles.data}>
            <p>Данные аккаунта:</p>
            <ul>
              Почта:
              {data.email}
            </ul>
            <ul>
              Ник:
              {data.nickname}
            </ul>
            <button type="button" className={styles.but} onClick={Logout}>
              Выход
            </button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
export default Profile;
