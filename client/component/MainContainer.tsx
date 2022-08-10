import Head from "next/head";
import { FC, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Weather from "./Weather";
import styles from "../styles/MainConstainer.module.css";
import { useAppSelector } from "../hooks/useAppSelector";
import useAction from "../hooks/useAction";

interface IMainContainer {
  children: React.ReactNode;
}

const MainContainer: FC<IMainContainer> = ({ children }) => {
  const { AxiosUserAction } = useAction();
  useEffect(() => {
    AxiosUserAction();
  }, []);
  const { auth } = useAppSelector((state) => state.authorization);
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div className={styles.singlepage_wrapper}>
        <Header />
        <div className={styles.wrap_content}>
          {auth ? (
            <div className={styles.weather}>
              <Weather />
            </div>
          ) : null}
          <div className={styles.center_content}>{children}</div>
        </div>
        <div className={styles.wrapfooter}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainContainer;
