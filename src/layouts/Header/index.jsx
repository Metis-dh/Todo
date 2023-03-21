import logo from "../../assets/icons/logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} src={logo} alt="Logo" />
          <p className={styles.logoTitle}>Todo Daily</p>
        </div>
        <ul className={styles.options}>
          <li className={styles.login}>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
