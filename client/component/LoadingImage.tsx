import { FC } from "react";
import styles from "../styles/LoadingImage.module.css";

interface ILoadImage {
  url: string;
}

const LoadingImage: FC<ILoadImage> = ({ url }) => {
  return (
    <div className={styles.loadbox}>
      <img src={url} className={styles.AuthLoad} />
    </div>
  );
};

export default LoadingImage;
