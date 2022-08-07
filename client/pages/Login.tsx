import { useState } from "react";
import { instance } from "../axios";
import styles from "../styles/auth/Login.module.css";
import MainContainer from "../component/MainContainer";
import { useRouter } from "next/router";
import useAction from "../hooks/useAction";

const Login: React.FC = () => {
  const [changeemail, setEmail] = useState<string>("");
  const [changepassword, setPassword] = useState<string>("");
  const { AxiosUserAction } = useAction();
  const route = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    instance
      .post("/auth/login", {
        email: changeemail,
        password: changepassword,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        AxiosUserAction();
        route.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer title={"Login"}>
      <div>
        <div className={styles.login}>
          <h1 className={styles.mess}>Вход</h1>
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Почта"
            className={styles.inp1}
            value={changeemail}
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
            className={styles.inp2}
            value={changepassword}
            type="password"
          />
          <button
            type="button"
            className={styles.inpsub}
            onClick={clickHandler}
          >
            Войти
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;
