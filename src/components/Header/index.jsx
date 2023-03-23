import homeLogo from "../../assets/icons/homeLogo.svg";
import avatar from "../../assets/img/avatar.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={homeLogo} alt="Logo" />
          <p className={styles.logoTitle}>Todo Daily</p>
        </div>
        <div className={styles.user}>
          <p>James</p>
          <img className={styles.avatar} src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
