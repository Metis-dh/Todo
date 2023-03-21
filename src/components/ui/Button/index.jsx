import styles from "./Button.module.scss";

const Button = ({ name }) => {
  return <div className={styles.btn}>{name}</div>;
};

export default Button;
