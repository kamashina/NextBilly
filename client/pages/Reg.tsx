import { useRouter } from "next/router";
import { ChangeEvent, FC, useState } from "react";
import { API_URL, instance } from "../axios";
import useAction from "../hooks/useAction";
import styles from "../styles/auth/Reg.module.css";

const Reg: FC = () => {
  const [ava, setAva] = useState<string>(`${API_URL}/uploads/KSeclybJMGg.jpg`);
  const { AxiosUserAction } = useAction();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const route = useRouter();

  const handleFileUpload = async (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const formData = new FormData();
    console.log(file);
    formData.append("image", file);
    const { data } = await instance.post("/uploads", formData);
    try {
      setAva(`${API_URL}${data.url}`);
    } catch (err) {}
  };

  const handleOnclick = (e: React.MouseEvent<HTMLElement>) => {
    instance
      .post("/auth/register", {
        email,
        password,
        nickname,
        avatarUrl: ava,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        AxiosUserAction();
        route.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.reg}>
      <title>Регистрация</title>
      <h1 className={styles.mess}>Регистрация</h1>
      <input
        onChange={(event) => setEmail(event.target.value)}
        className={styles.email}
        type="text"
        placeholder="Почта"
      />

      <input
        onChange={(event) => setNickname(event.target.value)}
        className={styles.nick}
        type="text"
        placeholder="Ник"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        className={styles.pass}
        type="password"
        placeholder="Пароль"
      />
      <input
        onChange={handleFileUpload}
        className={styles.fileup}
        type="file"
      />
      <button onClick={handleOnclick} type="button" className={styles.regisrt}>
        Регистрация
      </button>
    </div>
  );
};
export default Reg;
