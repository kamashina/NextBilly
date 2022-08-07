import { API_URL } from "../axios";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => (
  <div className={styles.footer}>
    <p>Создатель: Kamashina</p>
    <div className={styles.vk}>
      <a href="https://vk.com/kamran00001">
        <img src={`${API_URL}/uploads/vk.png`} alt="vk" />
      </a>
    </div>
    <div className={styles.git}>
      <a href="https://github.com/kamashina/Billy">
        <img src={`${API_URL}/uploads/25231.png`} alt="git" />
      </a>
    </div>
  </div>
);
export default Footer;
