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
  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <div className={styles.singlepage_wrapper}>
        <img
          src="/1650925847_2-vsegda-pomnim-com-p-gori-cherno-belie-foto-3.jpeg"
          className={styles.mountains}
        />
        <Header />
        <div className={styles.wrap_content}>
          {children}{" "}
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
